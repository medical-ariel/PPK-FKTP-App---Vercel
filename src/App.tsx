import React, { useState, useMemo, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import DiseaseCard from './components/DiseaseCard';
import DiseaseDetail from './components/DiseaseDetail';
import AIChat from './components/AIChat';
import MedicalTools from './components/MedicalTools';
import ICD10Finder from './components/ICD10Finder';
import { BookmarkSidebar } from './components/BookmarkSidebar';
import { DarkModeToggle } from './components/DarkModeToggle';
import { DISEASES } from './data/diseases';
import { Disease } from './types';
import { motion, AnimatePresence } from 'motion/react';
import { AlertCircle, BookmarkIcon, Bot, Wrench, Search, LayoutGrid, Moon, Sun } from 'lucide-react';
import { auth } from './lib/firebase';
import { onAuthStateChanged, User } from 'firebase/auth';
import { useBookmarks } from './hooks/useBookmarks';
import { useDarkMode } from './hooks/useDarkMode';

// ── Mobile Bottom Nav ────────────────────────────────────────────
type ActiveView = 'list' | 'ai' | 'tools' | 'icd' | 'detail';

interface BottomNavItem {
  id: ActiveView | 'bookmark' | 'darkmode';
  icon: React.ReactNode;
  label: string;
}

export default function App() {
  const [currentCat, setCurrentCat]               = useState('all');
  const [searchQuery, setSearchQuery]             = useState('');
  const [selectedDiseaseId, setSelectedDiseaseId] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen]         = useState(false);
  const [isAIOpen, setIsAIOpen]                   = useState(false);
  const [isToolsOpen, setIsToolsOpen]             = useState(false);
  const [isICDOpen, setIsICDOpen]                 = useState(false);
  const [isBookmarkOpen, setIsBookmarkOpen]       = useState(false);
  const [hasApiKey]                               = useState(() => Boolean(import.meta.env.VITE_HAS_AI));
  const [user, setUser]                           = useState<User | null>(null);

  const { isDark, toggle: toggleDark } = useDarkMode();
  const { bookmarks, findBookmark, addBookmark, removeBookmark } = useBookmarks();

  const isBookmarked = (diseaseId: string) => Boolean(findBookmark(diseaseId, 'disease'));

  const toggleBookmark = async (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const existing = findBookmark(id, 'disease');
    if (existing) {
      await removeBookmark(existing.id);
    } else {
      const d = DISEASES.find(x => x.id === id);
      await addBookmark({
        type: 'disease',
        diseaseId: id,
        diseaseCat: d?.cat,
        diseasePreview: d?.preview,
      });
    }
  };

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, setUser);
    return unsub;
  }, []);

  const activeView: ActiveView =
    isICDOpen          ? 'icd'    :
    isToolsOpen        ? 'tools'  :
    isAIOpen           ? 'ai'     :
    selectedDiseaseId  ? 'detail' : 'list';

  // NAV_ITEMS dengan darkmode toggle sebagai item terakhir
  const NAV_ITEMS: BottomNavItem[] = [
    { id: 'list',     icon: <LayoutGrid size={20} />,    label: 'PPK'        },
    { id: 'ai',       icon: <Bot size={20} />,            label: 'AI Chat'    },
    { id: 'tools',    icon: <Wrench size={20} />,         label: 'Kalkulator' },
    { id: 'icd',      icon: <Search size={20} />,          label: 'ICD-10'     },
    { id: 'bookmark', icon: <BookmarkIcon size={20} />,   label: 'Bookmark'   },
    {
      id: 'darkmode',
      icon: isDark ? <Moon size={20} className="text-sky-400" /> : <Sun size={20} className="text-amber-500" />,
      label: isDark ? 'Light' : 'Dark',
    },
  ];

  const handleNavSelect = (id: BottomNavItem['id']) => {
    if (id === 'bookmark') { setIsBookmarkOpen(true); return; }
    if (id === 'darkmode') { toggleDark(); return; }
    setIsAIOpen(id === 'ai');
    setIsToolsOpen(id === 'tools');
    setIsICDOpen(id === 'icd');
    if (id === 'list') setSelectedDiseaseId(null);
  };

  const handleSelectDiseaseFromBookmark = (diseaseId: string) => {
    if (DISEASES.find(d => d.id === diseaseId)) {
      setSelectedDiseaseId(diseaseId);
      setIsAIOpen(false);
      setIsToolsOpen(false);
      setIsICDOpen(false);
    }
  };

  const filteredDiseases = useMemo(() => {
    let result = DISEASES;
    const bookmarkedIds = bookmarks.filter(b => b.type === 'disease').map(b => b.diseaseId!);
    if (currentCat === 'favorites') {
      result = result.filter(d => bookmarkedIds.includes(d.id));
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
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 overflow-x-hidden transition-colors duration-200">
      <Header
        onSearch={setSearchQuery}
        onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        isSidebarOpen={isSidebarOpen}
        user={user}
        onLogin={() => {}}
        onLogout={() => {}}
        // Inject dark mode toggle ke header — terima prop di Header.tsx
        darkModeToggle={<DarkModeToggle isDark={isDark} toggle={toggleDark} />}
      />

      <div className="flex flex-1 pt-16 h-screen max-h-screen overflow-hidden">
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
          onOpenAI={() => { setIsAIOpen(true); setIsToolsOpen(false); }}
          onOpenTools={() => { setIsToolsOpen(true); setIsAIOpen(false); setIsICDOpen(false); setSelectedDiseaseId(null); }}
          onOpenICD={() => { setIsICDOpen(true); setIsAIOpen(false); setIsToolsOpen(false); setSelectedDiseaseId(null); }}
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />

        <main className="flex-1 overflow-y-auto relative pb-16 md:pb-0
          bg-slate-50 dark:bg-slate-950
          print:bg-white print:overflow-visible custom-scrollbar
          transition-colors duration-200">

          {!hasApiKey && (
            <div className="bg-amber-50 dark:bg-amber-950 border-b border-amber-200 dark:border-amber-800 p-3 flex items-center gap-3 sticky top-0 z-50">
              <AlertCircle size={18} className="text-amber-600 shrink-0" />
              <div className="flex-1">
                <h4 className="text-xs font-bold text-amber-800 dark:text-amber-300">GEMINI_API_KEY Belum Dikonfigurasi</h4>
                <p className="text-[10px] text-amber-600 dark:text-amber-400 mt-0.5">Tambahkan di Vercel Dashboard → Environment Variables.</p>
              </div>
            </div>
          )}

          <AnimatePresence mode="wait">
            {isICDOpen ? (
              <motion.div key="icd" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="h-full">
                <ICD10Finder onClose={() => setIsICDOpen(false)} />
              </motion.div>
            ) : isToolsOpen ? (
              <motion.div key="tools" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="h-full">
                <MedicalTools onClose={() => setIsToolsOpen(false)} />
              </motion.div>
            ) : isAIOpen ? (
              <motion.div key="ai" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="h-full">
                <AIChat
                  onClose={() => setIsAIOpen(false)}
                  currentCat={currentCat}
                  selectedDisease={selectedDisease}
                />
              </motion.div>
            ) : selectedDisease ? (
              <motion.div key="detail" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.98 }}
                className="w-full bg-white dark:bg-slate-900 min-h-full transition-colors duration-200">
                <DiseaseDetail
                  disease={selectedDisease}
                  onBack={() => setSelectedDiseaseId(null)}
                  onOpenAI={() => setIsAIOpen(true)}
                  isBookmarked={isBookmarked(selectedDisease.id)}
                  onToggleBookmark={() => toggleBookmark(selectedDisease.id)}
                />
              </motion.div>
            ) : (
              <motion.div key="list" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="p-6 md:p-10">
                <header className="mb-8">
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full mb-3 border border-primary/20">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                        <span className="text-[10px] font-black uppercase tracking-widest leading-none">Database Terpercaya v2026</span>
                      </div>
                      <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500 mb-1">Panduan Praktik Klinis</h3>
                      <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-slate-100 tracking-tighter">
                        {currentCat === 'all'
                          ? (<>Indeks <span className="text-primary italic">Penyakit</span></>)
                          : currentCat}
                      </h2>
                    </div>
                    <div className="bg-white dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 rounded-2xl px-4 py-2.5 shadow-sm self-start transition-colors duration-200">
                      <div className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest">Total Modul</div>
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-2xl font-black text-slate-900 dark:text-slate-100">{filteredDiseases.length}</span>
                        <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500">AKTIF</span>
                      </div>
                    </div>
                  </div>
                </header>

                {filteredDiseases.length > 0 ? (
                  <motion.div layout className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4">
                    <AnimatePresence mode="popLayout">
                      {filteredDiseases.map((d: Disease) => (
                        <DiseaseCard
                          key={d.id}
                          disease={d}
                          onClick={() => setSelectedDiseaseId(d.id)}
                          isBookmarked={isBookmarked(d.id)}
                          onToggleBookmark={(e) => toggleBookmark(d.id, e)}
                        />
                      ))}
                    </AnimatePresence>
                  </motion.div>
                ) : (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col items-center justify-center py-32 text-center opacity-50">
                    <div className="w-16 h-16 rounded-3xl bg-slate-200 dark:bg-slate-700 animate-pulse mb-6" />
                    <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">Registry Empty</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Tidak ada modul yang cocok.</p>
                  </motion.div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>

      {/* ── Mobile Bottom Navigation ─────────────────────────────── */}
      <nav className="md:hidden fixed bottom-0 inset-x-0 z-40
        bg-white dark:bg-slate-900
        border-t border-slate-200 dark:border-slate-700
        shadow-[0_-4px_20px_rgba(0,0,0,0.08)]
        transition-colors duration-200">
        <div className="flex items-center justify-around px-1 h-16">
          {NAV_ITEMS.map(({ id, icon, label }) => {
            const isActive = id !== 'bookmark' && id !== 'darkmode' && activeView === id;
            return (
              <button
                key={id}
                onClick={() => handleNavSelect(id)}
                className={`flex flex-col items-center justify-center flex-1 h-full gap-0.5 transition-colors relative ${
                  isActive
                    ? 'text-primary'
                    : 'text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300'
                }`}
              >
                <span className={`transition-transform ${isActive ? 'scale-110' : ''}`}>
                  {icon}
                </span>
                <span className="text-[9px] font-bold uppercase tracking-wider leading-none">
                  {label}
                </span>
                {isActive && (
                  <span className="absolute bottom-0 w-8 h-0.5 bg-primary rounded-full" />
                )}
              </button>
            );
          })}
        </div>
      </nav>

      <BookmarkSidebar
        open={isBookmarkOpen}
        onClose={() => setIsBookmarkOpen(false)}
        onSelectDisease={handleSelectDiseaseFromBookmark}
      />
    </div>
  );
}
