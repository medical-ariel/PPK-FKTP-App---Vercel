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

  const getFallbackInitial = (): Message[] => [
    {
      id: `initial-msg-${Date.now()}`,
      role: 'model',
      text: selectedDisease
        ? `Halo Dokter! 👋 Saya siap membantu konsultasi mengenai **${selectedDisease.name}**. Bertenaga Gemini AI 3, saya siap memberikan jawaban klinis yang cepat dan akurat.`
        : `Halo Dokter! 👋 Saya **dr. FKTP AI** — asisten klinis bertenaga **Gemini** yang siap membantu Anda dengan respons super cepat. Database 107+ PPK terintegrasi.`,
    },
  ];

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
      <div className="p-4 bg-white border-b flex items-center justify-between shadow-sm z-10">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-primary/5 rounded-2xl flex items-center justify-center text-primary border border-primary/20">
            <Bot size={20} />
          </div>
          <div>
            <div className="text-sm font-black uppercase tracking-widest leading-tight text-foreground">Asisten PPK AI</div>
            <div className="text-[10px] text-green-600 font-bold flex items-center gap-1.5 uppercase tracking-wider mt-0.5">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
              Gemini · Online
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1">
          {user ? (
            <button
              onClick={handleLogout}
              className="flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-bold text-slate-500 hover:bg-muted rounded-xl transition-all"
            >
              <LogOut size={13} />
              <span className="hidden sm:inline">Logout</span>
            </button>
          ) : (
            <button
              onClick={handleLogin}
              className="flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-bold text-primary bg-primary/5 hover:bg-primary/10 rounded-xl transition-all border border-primary/20"
            >
              <LogIn size={13} />
              <span>Login / Sync</span>
            </button>
          )}

          <button
            onClick={() => setShowOnlyFavorites(!showOnlyFavorites)}
            className={cn('p-2 rounded-xl transition-all', showOnlyFavorites ? 'bg-amber-50 text-amber-500' : 'hover:bg-muted text-muted-foreground')}
          >
            <Star size={16} fill={showOnlyFavorites ? 'currentColor' : 'none'} />
          </button>

          <div className="relative">
            <button
              onClick={() => setShowConfirmClear(!showConfirmClear)}
              className={cn('p-2 rounded-xl transition-all', showConfirmClear ? 'bg-red-500 text-white' : 'hover:bg-red-50 text-muted-foreground hover:text-red-500')}
            >
              <RotateCcw size={16} />
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

          <button onClick={onClose} className="p-2 hover:bg-muted rounded-xl transition-all text-muted-foreground">
            <X size={18} />
          </button>
        </div>
      </div>

      {/* CHAT AREA */}
      <div className="flex-1 min-h-0 overflow-y-auto p-4 md:p-8 space-y-6 custom-scrollbar" ref={scrollRef}>
        <AnimatePresence mode="popLayout" initial={false}>
          {filteredMessages.length > 0 ? filteredMessages.map((m) => (
            <motion.div
              key={m.id}
              layout
              initial={{ opacity: 0, y: 15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className={`flex flex-col ${m.role === 'user' ? 'items-end' : 'items-start'}`}
            >
              {/* Bubble */}
              <div className={cn(
                'relative group max-w-[85%] p-4 text-sm leading-relaxed shadow-md',
                m.role === 'user'
                  ? 'bg-primary text-white rounded-[2rem] rounded-tr-none ml-10'
                  : m.role === 'system'
                  ? 'bg-transparent text-red-500 italic text-center w-full border-none shadow-none text-xs font-medium'
                  : 'bg-white text-slate-700 border border-slate-100 rounded-[2rem] rounded-tl-none mr-10'
              )}>
                <div className="whitespace-pre-wrap break-words font-medium">
                  {m.text.split('**').map((part, idx) =>
                    idx % 2 === 1
                      ? <strong key={idx} className="font-black text-inherit">{part}</strong>
                      : part
                  )}
                </div>
              </div>

              {/* Action bar — DI BAWAH bubble, BUKAN overlay absolut */}
              {m.role === 'model' && (
                <div className="flex items-center gap-1 mt-1.5 ml-2 opacity-0 group-hover:opacity-100 focus-within:opacity-100 transition-opacity">
                  <button
                    onClick={() => toggleFavorite(m.id)}
                    className={cn(
                      'flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold border transition-colors',
                      m.isFavorite
                        ? 'bg-amber-50 border-amber-200 text-amber-600'
                        : 'bg-white border-slate-200 text-slate-400 hover:text-amber-500'
                    )}
                  >
                    <Star size={9} fill={m.isFavorite ? 'currentColor' : 'none'} />
                    Favorit
                  </button>

                  {/* Bookmark — wrapper rapi, tidak overlap apapun */}
                  <div className="flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold border bg-white border-slate-200 text-slate-400">
                    <Bookmark size={9} />
                    <BookmarkButton
                      type="chat"
                      messageId={m.id}
                      messageText={m.text}
                      chatDiseaseName={selectedDisease?.name}
                      chatDiseaseICD={selectedDisease?.icd}
                      size="sm"
                      className="p-0 text-[10px] font-bold"
                    />
                  </div>
                </div>
              )}

              {m.role === 'user' && (
                <div className="flex items-center gap-1 mt-1.5 mr-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={() => toggleFavorite(m.id)}
                    className={cn(
                      'flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold border transition-colors',
                      m.isFavorite
                        ? 'bg-amber-50 border-amber-200 text-amber-600'
                        : 'bg-white border-slate-200 text-slate-400 hover:text-amber-500'
                    )}
                  >
                    <Star size={9} fill={m.isFavorite ? 'currentColor' : 'none'} />
                    Favorit
                  </button>
                </div>
              )}
            </motion.div>
          )) : (
            <div className="flex flex-col items-center justify-center py-20 text-center opacity-30">
              <Star size={40} className="mb-4" />
              <p className="text-sm font-medium">Belum ada percakapan favorit.</p>
            </div>
          )}
        </AnimatePresence>

        {loading && (
          <div className="text-slate-500 text-xs text-center animate-pulse py-2">
            Asisten sedang memikirkan diagnosis...
          </div>
        )}
      </div>

      {/* INPUT AREA */}
      <div className="p-4 md:p-6 bg-white border-t border-slate-100 shadow-[0_-4px_12px_rgba(0,0,0,0.04)]">
        {/* Suggested prompts */}
        <div className="flex gap-2 mb-3 overflow-x-auto pb-1 scrollbar-none">
          {getSuggestedPrompts().map((q, i) => (
            <button
              key={i}
              onClick={() => setInput(q)}
              className="px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-full text-[10px] font-bold hover:bg-primary/5 hover:border-primary/20 text-slate-500 transition-colors whitespace-nowrap shrink-0"
            >
              {q}
            </button>
          ))}
        </div>

        {/* Input row — send button di dalam input, tidak bisa overlap action bar */}
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={input}
            onKeyDown={e => e.key === 'Enter' && handleSend()}
            onChange={e => setInput(e.target.value)}
            placeholder="Ketik pertanyaan klinis Anda..."
            className="flex-1 bg-slate-50 border border-slate-200 py-3 pl-4 pr-4 rounded-2xl text-sm focus:outline-none focus:bg-white focus:border-primary/30 transition-all font-medium"
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || loading}
            className="shrink-0 w-11 h-11 bg-primary text-white rounded-2xl hover:bg-primary/90 disabled:opacity-30 flex items-center justify-center transition-all"
          >
            <Send size={18} className="ml-0.5" />
          </button>
        </div>
      </div>
    </div>
  );
}