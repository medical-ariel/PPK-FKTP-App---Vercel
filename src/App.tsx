import React, { useState, useMemo, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import DiseaseCard from './components/DiseaseCard';
import DiseaseDetail from './components/DiseaseDetail';
import AIChat from './components/AIChat';
import MedicalTools from './components/MedicalTools';
import ICD10Finder from './components/ICD10Finder';
import { DISEASES } from './data/diseases';
import { Disease } from './types';
import { motion, AnimatePresence } from 'motion/react';
import { Badge } from './components/ui/badge';
import { AlertCircle, Terminal } from 'lucide-react';
import { auth, db } from './lib/firebase';
import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged, User } from 'firebase/auth';
import { collection, query, where, getDocs, addDoc, deleteDoc, serverTimestamp, onSnapshot, doc, setDoc } from 'firebase/firestore';

export default function App() {
  const [currentCat, setCurrentCat] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDiseaseId, setSelectedDiseaseId] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isAIOpen, setIsAIOpen] = useState(false);
  const [isToolsOpen, setIsToolsOpen] = useState(false);
  const [isICDOpen, setIsICDOpen] = useState(false);
  const [hasApiKey] = useState(() => Boolean(import.meta.env.VITE_HAS_AI));
  const [user, setUser] = useState<User | null>(null);
  const [bookmarks, setBookmarks] = useState<string[]>(() => {
    const saved = localStorage.getItem('bookmarks');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    let unsubscribeSnap: (() => void) | undefined;

    const unsubscribeAuth = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      
      if (unsubscribeSnap) {
        unsubscribeSnap();
        unsubscribeSnap = undefined;
      }

      if (currentUser) {
        // Capture local bookmarks BEFORE onSnapshot overwrites them
        const savedLocal = localStorage.getItem('bookmarks');
        let localBookmarksToMerge: string[] = [];
        if (savedLocal) {
          try {
            localBookmarksToMerge = JSON.parse(savedLocal);
          } catch (e) {
            console.error("Error parsing local bookmarks:", e);
          }
        }

        // Sync real-time from Firestore
        const q = query(collection(db, 'bookmarks'), where('userId', '==', currentUser.uid));
        unsubscribeSnap = onSnapshot(q, (snapshot) => {
          const cloudBookmarks = snapshot.docs.map(doc => doc.data().diseaseId as string);
          const uniqueBookmarks = Array.from(new Set(cloudBookmarks));
          setBookmarks(uniqueBookmarks);
          localStorage.setItem('bookmarks', JSON.stringify(uniqueBookmarks));
        }, (error) => {
          console.error("Bookmark sync error:", error);
        });

        // Merge local bookmarks to cloud
        if (localBookmarksToMerge.length > 0) {
          try {
            // First get existing cloud bookmarks to avoid duplicates and update-rule-violations
            const snapshot = await getDocs(q);
            const cloudIds = snapshot.docs.map(d => d.data().diseaseId);
            
            for (const id of localBookmarksToMerge) {
              if (!cloudIds.includes(id)) {
                const bookmarkDocRef = doc(db, 'bookmarks', `${currentUser.uid}_${id}`);
                await setDoc(bookmarkDocRef, {
                  userId: currentUser.uid,
                  diseaseId: id,
                  createdAt: serverTimestamp()
                });
              }
            }
          } catch (e) {
            console.error("Error merging local bookmarks:", e);
          }
        }
      } else {
        // Load from local storage when logged out
        const saved = localStorage.getItem('bookmarks');
        setBookmarks(saved ? JSON.parse(saved) : []);
      }
    });

    return () => {
      unsubscribeAuth();
      if (unsubscribeSnap) unsubscribeSnap();
    };
  }, []);

  const toggleBookmark = async (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    
    // 1. Optimistic Update
    const isBookmarked = bookmarks.includes(id);
    const newBookmarks = isBookmarked 
      ? bookmarks.filter(b => b !== id) 
      : [...bookmarks, id];
    
    setBookmarks(newBookmarks);
    localStorage.setItem('bookmarks', JSON.stringify(newBookmarks));

    if (user) {
      try {
        const bookmarkDocRef = doc(db, 'bookmarks', `${user.uid}_${id}`);
        
        if (isBookmarked) {
          // Remove from Firestore
          await deleteDoc(bookmarkDocRef);
        } else {
          // Add to Firestore
          await setDoc(bookmarkDocRef, {
            userId: user.uid,
            diseaseId: id,
            createdAt: serverTimestamp()
          });
        }
        // UI will be re-synced via onSnapshot, but we already updated optimistically
      } catch (error) {
        console.error("Firestore bookmark operation failed:", error);
        // Rollback on failure
        setBookmarks(bookmarks); 
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
      }
    }
  };

  const handleLogin = () => signInWithPopup(auth, new GoogleAuthProvider());
  const handleLogout = () => signOut(auth);



  const filteredDiseases = useMemo(() => {
    let result = DISEASES;
    if (currentCat === 'favorites') {
      result = result.filter(d => bookmarks.includes(d.id));
    } else if (currentCat !== 'all') {
      result = result.filter(d => d.cat === currentCat);
    }
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(d => 
        d.name.toLowerCase().includes(q) || 
        d.icd.toLowerCase().includes(q) || 
        d.preview.toLowerCase().includes(q)
      );
    }
    return result;
  }, [currentCat, searchQuery, bookmarks]);

  const selectedDisease = useMemo(() => 
    DISEASES.find(d => d.id === selectedDiseaseId), 
  [selectedDiseaseId]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 overflow-x-hidden">
      <Header 
        onSearch={setSearchQuery} 
        onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        isSidebarOpen={isSidebarOpen}
        user={user}
        onLogin={handleLogin}
        onLogout={handleLogout}
      />
      
      <div className="flex flex-1 pt-20 h-screen max-h-screen overflow-hidden">
        <Sidebar 
          currentCat={currentCat} 
          onSelectCat={(cat) => {
            setCurrentCat(cat);
            setSelectedDiseaseId(null);
            setIsAIOpen(false);
            setIsToolsOpen(false);
            setIsICDOpen(false);
          }}
          diseases={DISEASES}
          onOpenAI={() => {
            setIsAIOpen(true);
            setIsToolsOpen(false);
            // We no longer clear selectedDiseaseId here to maintain context
          }}
          onOpenTools={() => {
            setIsToolsOpen(true);
            setIsAIOpen(false);
            setIsICDOpen(false);
            setSelectedDiseaseId(null);
          }}
          onOpenICD={() => {
            setIsICDOpen(true);
            setIsAIOpen(false);
            setIsToolsOpen(false);
            setSelectedDiseaseId(null);
          }}
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />

        <main className="flex-1 overflow-y-auto relative bg-muted/30 print:bg-white print:overflow-visible custom-scrollbar">
          {!hasApiKey && (
            <div className="bg-amber-50 border-b border-amber-200 p-4 flex items-center gap-4 sticky top-0 z-50 animate-in fade-in slide-in-from-top duration-500">
              <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 shrink-0">
                <AlertCircle size={20} />
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-bold text-amber-800">GEMINI_API_KEY Belum Dikonfigurasi</h4>
                <p className="text-xs text-amber-600 mt-0.5">
                  Fitur asisten klinis AI memerlukan API Key Google Gemini. Silakan tambahkan di menu <strong>Settings</strong> aplikasi ini.
                </p>
              </div>
              <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-amber-800 text-white rounded-lg text-[10px] font-bold uppercase tracking-wider">
                <Terminal size={12} />
                Require Config
              </div>
            </div>
          )}
          
          <AnimatePresence mode="wait">
            {isICDOpen ? (
              <motion.div 
                key="icd"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="h-full"
              >
                <ICD10Finder 
                  onClose={() => setIsICDOpen(false)} 
                />
              </motion.div>
            ) : isToolsOpen ? (
              <motion.div 
                key="tools"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="h-full"
              >
                <MedicalTools 
                  onClose={() => setIsToolsOpen(false)} 
                />
              </motion.div>
            ) : isAIOpen ? (
              <motion.div 
                key="ai"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="h-full"
              >
                <AIChat 
                  onClose={() => setIsAIOpen(false)} 
                  currentCat={currentCat}
                  selectedDisease={selectedDisease}
                />
              </motion.div>
            ) : selectedDisease ? (
              <motion.div 
                key="detail"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                className="w-full bg-background transition-colors print:pt-0 min-h-full"
              >
                <DiseaseDetail 
                  disease={selectedDisease} 
                  onBack={() => setSelectedDiseaseId(null)} 
                  onOpenAI={() => setIsAIOpen(true)}
                  isBookmarked={bookmarks.includes(selectedDisease.id)}
                  onToggleBookmark={() => toggleBookmark(selectedDisease.id)}
                />
              </motion.div>
            ) : (
              <motion.div 
                key="list"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="p-8 md:p-12"
              >
                <header className="mb-12 relative">
                  <div className="absolute top-0 right-0 hidden lg:block opacity-10 -translate-y-1/2">
                    <Terminal size={200} className="text-slate-900" />
                  </div>
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 relative z-10">
                    <div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full mb-4 border border-primary/20">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                        <span className="text-[10px] font-black uppercase tracking-widest leading-none">Database Terpercaya v2026</span>
                      </div>
                      <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-400 mb-2">Panduan Praktik Klinis</h3>
                      <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter leading-[0.9]">
                        {currentCat === 'all' ? (
                          <>Indeks <span className="text-primary italic">Penyakit</span></>
                        ) : currentCat}
                      </h2>
                    </div>
                    <div className="flex items-center gap-3">
                       <div className="bg-white border-2 border-slate-100 rounded-2xl px-5 py-3 shadow-xl shadow-black/[0.02]">
                          <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Total Modul</div>
                          <div className="flex items-baseline gap-2">
                            <span className="text-2xl font-black text-slate-900">{filteredDiseases.length}</span>
                            <span className="text-[10px] font-bold text-slate-400">AKTIF</span>
                          </div>
                       </div>
                    </div>
                  </div>
                </header>

                {filteredDiseases.length > 0 ? (
                  <motion.div 
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-20"
                  >
                    <AnimatePresence mode="popLayout">
                      {filteredDiseases.map((d: Disease) => (
                        <DiseaseCard 
                          key={d.id} 
                          disease={d} 
                          onClick={() => setSelectedDiseaseId(d.id)} 
                          isBookmarked={bookmarks.includes(d.id)}
                          onToggleBookmark={(e) => toggleBookmark(d.id, e)}
                        />
                      ))}
                    </AnimatePresence>
                  </motion.div>
                ) : (
                  <AnimatePresence mode="wait">
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex flex-col items-center justify-center py-32 text-center opacity-50"
                    >
                      <div className="w-16 h-16 rounded-3xl bg-muted animate-pulse mb-6" />
                      <h3 className="text-lg font-bold text-foreground">Registry Empty</h3>
                      <p className="text-sm text-muted-foreground mt-1">Tidak ada modul yang cocok dengan kriteria Anda.</p>
                    </motion.div>
                  </AnimatePresence>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
