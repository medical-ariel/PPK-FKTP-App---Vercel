import { useState, useRef, useEffect } from 'react';
import { Send, Bot, X, RotateCcw, Star, LogIn, LogOut, Bookmark } from 'lucide-react';
import { Disease } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';
import { auth, db, googleProvider } from '../lib/firebase';
import { signInWithPopup, signOut, onAuthStateChanged, User } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { BookmarkButton } from './BookmarkButton';

interface AIChatProps {
  onClose: () => void;
  currentCat?: string;
  selectedDisease?: Disease | null;
}

interface Message {
  id: string;
  role: 'user' | 'model' | 'system';
  text: string;
  timestamp?: number;
  isFavorite?: boolean;
}

export default function AIChat({ onClose, currentCat, selectedDisease }: AIChatProps) {
  const [user, setUser] = useState<User | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);
  const [showConfirmClear, setShowConfirmClear] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const messageRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const getFallbackInitial = (): Message[] => [
    {
      id: `initial-msg-${Date.now()}`,
      role: 'model',
      text: selectedDisease
        ? `Halo Dokter! 👋 Saya siap membantu konsultasi mengenai **${selectedDisease.name}**. Bertenaga Gemini AI 3, saya siap memberikan jawaban klinis yang cepat dan akurat.`
        : `Halo Dokter! 👋 Saya **dr. FKTP AI** — asisten klinis bertenaga **Gemini** yang siap membantu Anda dengan respons super cepat. Database 107+ PPK terintegrasi.`,
    },
  ];

  // Firebase Auth + sync history
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        try {
          const docRef = doc(db, 'chat_history', currentUser.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists() && docSnap.data().messages?.length > 0) {
            setMessages(docSnap.data().messages);
          } else {
            setMessages(getFallbackInitial());
          }
        } catch (error) {
          console.error('Gagal menarik data cloud', error);
          setMessages(getFallbackInitial());
        }
      } else {
        const saved = localStorage.getItem('dr_fktp_chat_history');
        if (saved) {
          try { setMessages(JSON.parse(saved)); }
          catch { setMessages(getFallbackInitial()); }
        } else {
          setMessages(getFallbackInitial());
        }
      }
    });
    return () => unsubscribe();
  }, [selectedDisease]);

  // Auto-save saat ada pesan baru
  useEffect(() => {
    if (messages.length === 0) return;
    const messagesToSave = messages.filter(m => m.id !== 'api-key-error' && m.role !== 'system');
    if (user) {
      setDoc(doc(db, 'chat_history', user.uid), { messages: messagesToSave }, { merge: true })
        .catch(err => console.error('Gagal simpan ke cloud', err));
    } else {
      localStorage.setItem('dr_fktp_chat_history', JSON.stringify(messagesToSave));
    }
  }, [messages, user]);

  const handleLogin = async () => {
    try { await signInWithPopup(auth, googleProvider); }
    catch (error) { console.error('Login gagal', error); }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setMessages(getFallbackInitial());
    } catch (error) { console.error('Logout gagal', error); }
  };

  const handleScroll = () => {
    // scroll tracking bisa ditambah kembali jika dibutuhkan
  };

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, loading, showOnlyFavorites]);

  const toggleFavorite = (id: string) => {
    setMessages(prev => prev.map(m => m.id === id ? { ...m, isFavorite: !m.isFavorite } : m));
  };

  const clearHistory = () => {
    const initial = getFallbackInitial();
    const favorites = messages.filter(m => m.isFavorite);
    setMessages([...initial, ...favorites]);
    setShowConfirmClear(false);
  };

  const getSuggestedPrompts = () => {
    if (selectedDisease) return [`Dosis obat ${selectedDisease.name}?`, `Kriteria rujukan ${selectedDisease.name}?`];
    return ['Dosis DBD?', 'Kriteria Rujukan?', 'Gejala TBC?', 'Obat Hipertensi?'];
  };

  const handleSend = async () => {
    if (!input.trim() || loading) return;
    const userText = input.trim();
    const userMessage: Message = {
      id: `u-${Date.now()}`,
      role: 'user',
      text: userText,
      timestamp: Date.now(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: userText,
          diseaseName: selectedDisease?.name,
          diseaseICD: selectedDisease?.icd,
        }),
      });

      if (!response.ok) throw new Error(`Server error: ${response.status}`);

      const data = await response.json();
      const aiText = data.text || 'Maaf Dok, asisten AI sedang tidak merespons.';

      setMessages(prev => [...prev, {
        id: `m-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
        role: 'model',
        text: aiText,
        timestamp: Date.now(),
      }]);
    } catch (err: any) {
      console.error('Chat Error:', err);
      setMessages(prev => [...prev, {
        id: `err-${Date.now()}`,
        role: 'system',
        text: '⚠️ Koneksi ke AI terputus. Pastikan GEMINI_API_KEY sudah diisi di Vercel Dashboard.',
      }]);
    } finally {
      setLoading(false);
    }
  };

  const filteredMessages = showOnlyFavorites
    ? messages.filter(m => m.isFavorite)
    : messages;

  return (
    <div className="flex flex-col h-full bg-slate-50/50">
      {/* HEADER */}
      <div className="p-5 bg-white border-b flex items-center justify-between shadow-sm z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary/5 rounded-2xl flex items-center justify-center text-primary border border-primary/20">
            <Bot size={22} />
          </div>
          <div>
            <div className="text-sm font-black uppercase tracking-widest leading-tight text-foreground">Asisten PPK AI</div>
            <div className="text-[10px] text-green-600 font-bold flex items-center gap-1.5 uppercase tracking-wider mt-0.5">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_5px_rgba(34,197,94,0.5)]" />
              Online & Terverifikasi
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1">
          {/* Login / User info */}
          {user ? (
            <div className="flex items-center gap-2 mr-2 bg-slate-50 py-1.5 px-3 rounded-full border border-slate-100">
              <img src={user.photoURL || ''} alt="User" className="w-5 h-5 rounded-full" />
              <span className="text-[10px] font-bold text-slate-600 hidden md:inline-block">{user.displayName}</span>
              <button onClick={handleLogout} className="ml-1 text-red-500 hover:text-red-700" title="Logout">
                <LogOut size={14} />
              </button>
            </div>
          ) : (
            <button
              onClick={handleLogin}
              className="mr-2 flex items-center gap-1.5 py-1.5 px-3 bg-white border border-primary/20 text-primary rounded-full text-[10px] font-bold hover:bg-primary/5 transition-colors shadow-sm"
            >
              <LogIn size={14} />
              <span>Login / Sync</span>
            </button>
          )}

          <button
            onClick={() => setShowOnlyFavorites(!showOnlyFavorites)}
            className={cn('p-2.5 rounded-xl transition-all', showOnlyFavorites ? 'bg-amber-50 text-amber-500' : 'hover:bg-muted text-muted-foreground')}
          >
            <Star size={18} fill={showOnlyFavorites ? 'currentColor' : 'none'} />
          </button>

          {/* Clear history dengan konfirmasi */}
          <div className="relative">
            <button
              onClick={() => setShowConfirmClear(!showConfirmClear)}
              className={cn('p-2.5 rounded-xl transition-all', showConfirmClear ? 'bg-red-500 text-white' : 'hover:bg-red-50 text-muted-foreground hover:text-red-500')}
            >
              <RotateCcw size={18} />
            </button>
            <AnimatePresence>
              {showConfirmClear && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 4 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 4 }}
                  className="absolute right-0 top-full mt-2 bg-white border border-red-100 shadow-xl rounded-2xl p-4 z-50 w-52 text-center"
                >
                  <p className="text-xs font-bold text-slate-700 mb-3">Hapus history chat?<br /><span className="font-normal text-slate-400">(Favorit tetap tersimpan)</span></p>
                  <div className="flex gap-2">
                    <button onClick={() => setShowConfirmClear(false)} className="flex-1 py-1.5 text-xs border rounded-xl hover:bg-slate-50 font-bold">Batal</button>
                    <button onClick={clearHistory} className="flex-1 py-1.5 text-xs bg-red-500 text-white rounded-xl hover:bg-red-600 font-bold">Hapus</button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button onClick={onClose} className="p-2.5 hover:bg-muted rounded-xl transition-all text-muted-foreground">
            <X size={20} />
          </button>
        </div>
      </div>

      {/* CHAT AREA */}
      <div className="flex-1 min-h-0 relative">
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="h-full overflow-y-auto p-6 md:p-10 space-y-8 custom-scrollbar"
        >
          <AnimatePresence mode="popLayout" initial={false}>
            {filteredMessages.length > 0 ? filteredMessages.map((m, i) => (
              <motion.div
                key={m.id}
                ref={(el: HTMLDivElement | null) => { messageRefs.current[m.id] = el; }}
                layout
                initial={{ opacity: 0, y: 15, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                className={`flex flex-col ${m.role === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div className={cn(
                  'relative group max-w-[85%] p-4 md:px-6 md:py-4 text-sm leading-relaxed shadow-md',
                  m.role === 'user'
                    ? 'bg-primary text-white rounded-[2rem] rounded-tr-none ml-10'
                    : m.role === 'system'
                    ? 'bg-transparent text-red-500 italic text-center w-full border-none shadow-none text-xs font-medium'
                    : 'bg-white text-slate-700 border border-slate-100 rounded-[2rem] rounded-tl-none mr-10'
                )}>
                  {/* Konten pesan */}
                  <div className="whitespace-pre-wrap break-words font-medium">
                    {m.text.split('**').map((part, idx) =>
                      idx % 2 === 1
                        ? <strong key={idx} className="font-black text-inherit">{part}</strong>
                        : part
                    )}
                  </div>

                  {/* Action bar: Favorit + Bookmark (hanya untuk pesan model) */}
                  {m.role === 'model' && (
                    <div className={cn(
                      'absolute -bottom-7 flex items-center gap-1',
                      'opacity-0 group-hover:opacity-100 transition-opacity',
                      'left-2'
                    )}>
                      {/* Tombol favorit (lokal, tidak perlu login) */}
                      <button
                        onClick={() => toggleFavorite(m.id)}
                        className={cn(
                          'p-1 px-2.5 border rounded-full text-[10px] font-bold flex items-center gap-1.5',
                          m.isFavorite
                            ? 'bg-amber-50 border-amber-200 text-amber-600'
                            : 'bg-white border-slate-100 text-slate-500'
                        )}
                      >
                        <Star size={10} fill={m.isFavorite ? 'currentColor' : 'none'} />
                        <span>Favorit</span>
                      </button>

                      {/* Tombol bookmark (Firestore, butuh login) */}
                      <div className="bg-white border border-slate-100 rounded-full px-2 py-1 flex items-center gap-1 text-[10px] font-bold text-slate-500">
                        <Bookmark size={10} />
                        <BookmarkButton
                          type="chat"
                          messageId={m.id}
                          messageText={m.text}
                          chatDiseaseName={selectedDisease?.name}
                          chatDiseaseICD={selectedDisease?.icd}
                          size="sm"
                          className="p-0"
                        />
                        <span>Simpan</span>
                      </div>
                    </div>
                  )}

                  {/* Tombol user message (kanan) */}
                  {m.role === 'user' && (
                    <div className="absolute -bottom-7 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={() => toggleFavorite(m.id)}
                        className={cn(
                          'p-1 px-2.5 border rounded-full text-[10px] font-bold flex items-center gap-1.5',
                          m.isFavorite
                            ? 'bg-amber-50 border-amber-200 text-amber-600'
                            : 'bg-white border-slate-100 text-slate-500'
                        )}
                      >
                        <Star size={10} fill={m.isFavorite ? 'currentColor' : 'none'} />
                        <span>Favorit</span>
                      </button>
                    </div>
                  )}
                </div>
              </motion.div>
            )) : (
              <div className="flex flex-col items-center justify-center py-20 text-center opacity-30">
                <Star size={40} className="mb-4" />
                <p className="text-sm font-medium">Belum ada percakapan favorit.</p>
              </div>
            )}
          </AnimatePresence>

          {loading && (
            <div className="text-slate-500 text-xs text-center animate-pulse">
              Asisten sedang memikirkan diagnosis...
            </div>
          )}
        </div>
      </div>

      {/* INPUT AREA */}
      <div className="p-6 md:p-8 bg-white border-t border-slate-100 shadow-[0_-10px_20px_rgba(0,0,0,0.02)]">
        <div className="flex gap-3 mb-6 overflow-x-auto pb-4 scrollbar-none">
          {getSuggestedPrompts().map((q, i) => (
            <button
              key={i}
              onClick={() => setInput(q)}
              className="px-4 py-2.5 bg-white border border-slate-100 rounded-[1.25rem] text-[10px] font-bold uppercase hover:bg-primary/5 text-slate-500 transition-colors whitespace-nowrap"
            >
              {q}
            </button>
          ))}
        </div>
        <div className="relative flex items-center group">
          <input
            type="text"
            value={input}
            onKeyDown={e => e.key === 'Enter' && handleSend()}
            onChange={e => setInput(e.target.value)}
            placeholder="Ketik pertanyaan klinis Anda..."
            className="w-full bg-slate-50/50 border border-slate-200/60 py-4 pl-7 pr-20 rounded-[2.25rem] text-sm focus:outline-none focus:bg-white focus:border-primary/20 transition-all font-medium"
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || loading}
            className="absolute right-2.5 p-3.5 bg-primary text-white rounded-full hover:bg-primary/90 disabled:opacity-30 flex items-center justify-center"
          >
            <Send size={20} className="ml-0.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
