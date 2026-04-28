import { useState, useRef, useEffect } from 'react';
import { Search, Menu, X, Bell, LogOut, ChevronDown, LogIn, Shield, Info } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { DarkModeToggle } from './DarkModeToggle';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';
import { User as FirebaseUser } from 'firebase/auth';

interface HeaderProps {
  onSearch: (q: string) => void;
  onToggleSidebar: () => void;
  isSidebarOpen: boolean;
  user: FirebaseUser | null;
  onLogin: () => void;
  onLogout: () => void;
  darkModeToggle?: React.ReactNode;  // ← prop baru
}

export default function Header({
  onSearch, onToggleSidebar, isSidebarOpen,
  user, onLogin, onLogout, darkModeToggle,
}: HeaderProps) {
  const [showProfile, setShowProfile]           = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [toast, setToast]                       = useState<{ message: string; visible: boolean }>({ message: '', visible: false });
  const [scrolled, setScrolled]                 = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);
  const bellRef    = useRef<HTMLDivElement>(null);

  const showFeedback = (message: string) => {
    setToast({ message, visible: true });
    setTimeout(() => setToast({ message: '', visible: false }), 3000);
    setShowProfile(false);
    setShowNotifications(false);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(event.target as Node))
        setShowProfile(false);
      if (bellRef.current && !bellRef.current.contains(event.target as Node))
        setShowNotifications(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 h-20 flex items-center px-4 md:px-10 z-[1001] transition-all duration-300 border-b",
      scrolled
        ? "bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border-border/50 dark:border-slate-700/50 shadow-lg"
        : "bg-white dark:bg-slate-900 border-transparent"
    )}>

      {/* Toast */}
      <AnimatePresence>
        {toast.visible && (
          <motion.div
            initial={{ opacity: 0, y: -20, x: '-50%' }}
            animate={{ opacity: 1, y: 15,  x: '-50%' }}
            exit={{    opacity: 0, y: -20, x: '-50%' }}
            className="absolute top-20 left-1/2 bg-slate-900 dark:bg-slate-100 border border-white/20 dark:border-slate-300/20 text-white dark:text-slate-900 text-[11px] font-black uppercase tracking-widest px-6 py-3 rounded-full shadow-2xl z-[2000] flex items-center gap-3"
          >
            <div className="w-2 h-2 bg-primary rounded-full animate-ping" />
            {toast.message}
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Left: Logo ───────────────────────────────────────────── */}
      <div className="flex items-center gap-4 flex-shrink-0">
        <Button
          variant="ghost"
          size="icon"
          onClick={onToggleSidebar}
          className="md:hidden shrink-0 w-11 h-11 rounded-2xl bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300"
        >
          {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </Button>

        <div
          className="flex items-center gap-3.5 group cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-primary-foreground font-black text-xl shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
            A
          </div>
          <div className="hidden sm:block">
            <h1 className="text-lg font-black tracking-tighter leading-none flex items-baseline gap-1.5">
              <span className="uppercase text-slate-900 dark:text-slate-100">PPK FKTP</span>
              <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 italic tracking-normal">by dr. Aril</span>
            </h1>
            <div className="flex items-center gap-2 mt-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_5px_rgba(34,197,94,0.4)]" />
              <span className="text-[9px] uppercase font-bold text-slate-400 dark:text-slate-500 tracking-[0.2em]">Clinical Edition 2026</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Center: Search ───────────────────────────────────────── */}
      <div className="flex-1 max-w-2xl mx-auto px-4 sm:px-6 relative group flex items-center">
        <div className="absolute left-8 sm:left-10 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary group-focus-within:scale-110 transition-all duration-300 z-10 pointer-events-none">
          <Search size={18} />
        </div>
        <Input
          type="text"
          placeholder="Cari diagnosis (ICD-10) atau tata laksana klinis..."
          onChange={(e) => onSearch(e.target.value)}
          className="w-full h-11 md:h-12
            bg-slate-50 dark:bg-slate-800
            border-2 border-transparent
            dark:text-slate-100 dark:placeholder:text-slate-500
            pl-12 sm:pl-12
            ring-offset-background focus-visible:ring-0
            focus-visible:bg-white dark:focus-visible:bg-slate-700
            focus-visible:border-primary/30
            focus-visible:shadow-[0_0_20px_rgba(var(--primary),0.15)]
            focus-visible:scale-[1.01]
            transition-all rounded-2xl text-sm md:text-base font-medium
            placeholder:text-slate-400/80 placeholder:font-normal shadow-inner"
        />
      </div>

      {/* ── Right: Actions ───────────────────────────────────────── */}
      <div className="flex items-center gap-2 shrink-0">

        {/* Dark Mode Toggle — desktop only */}
        <div className="hidden md:block">
          {darkModeToggle}
        </div>

        {/* Notifications */}
        <div className="relative" ref={bellRef}>
          <button
            className={cn(
              "relative rounded-2xl w-11 h-11 flex items-center justify-center transition-all",
              showNotifications
                ? "bg-primary text-white shadow-lg shadow-primary/30"
                : "text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700"
            )}
            onClick={() => { setShowNotifications(!showNotifications); setShowProfile(false); }}
          >
            <Bell size={20} fill={showNotifications ? "currentColor" : "none"} />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-[8px] font-black text-white rounded-full flex items-center justify-center border-2 border-white dark:border-slate-900 shadow-lg">2</span>
          </button>

          <AnimatePresence>
            {showNotifications && (
              <motion.div
                initial={{ opacity: 0, y: 15, scale: 0.95 }}
                animate={{ opacity: 1, y: 0,  scale: 1    }}
                exit={{    opacity: 0, y: 15, scale: 0.95 }}
                className="absolute right-0 mt-5 w-80
                  bg-white dark:bg-slate-800
                  border border-slate-100 dark:border-slate-700
                  shadow-[0_20px_50px_rgba(0,0,0,0.15)]
                  rounded-3xl overflow-hidden z-[1002]"
              >
                <div className="p-5 bg-slate-50/80 dark:bg-slate-700/50 border-b border-slate-100 dark:border-slate-600 flex items-center justify-between">
                  <span className="font-black text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400">Pusat Informasi</span>
                  <span className="text-[9px] bg-red-500 text-white px-2 py-0.5 rounded-full font-black uppercase">Urgent</span>
                </div>
                <div className="max-h-[350px] overflow-y-auto custom-scrollbar">
                  {[
                    { id: 'notif-prot', icon: <Shield size={16} />, title: "Protokol Baru",  desc: "Update algoritma DBD v2026 telah tersedia.",   time: "2 Menit", color: "text-blue-500 bg-blue-50 dark:bg-blue-950" },
                    { id: 'notif-sink', icon: <Info size={16} />,   title: "Sistem Sinkron", desc: "Database dr. Aril telah sinkron 100%.",          time: "1 Jam",   color: "text-green-500 bg-green-50 dark:bg-green-950" },
                  ].map((n) => (
                    <div
                      key={n.id}
                      onClick={() => showFeedback(`Buka: ${n.title}`)}
                      className="p-5 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors cursor-pointer border-b border-slate-50 dark:border-slate-700 last:border-0 flex gap-4 group"
                    >
                      <div className={cn("w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 shadow-sm transition-transform group-hover:scale-110", n.color)}>
                        {n.icon}
                      </div>
                      <div>
                        <div className="text-xs font-black text-slate-800 dark:text-slate-200 leading-none mb-1.5">{n.title}</div>
                        <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium leading-relaxed">{n.desc}</div>
                        <div className="text-[9px] text-slate-400/80 mt-2 flex items-center gap-1.5 font-bold uppercase tracking-wider">
                          <span className="w-1 h-1 bg-slate-300 dark:bg-slate-600 rounded-full" />
                          {n.time} Lalu
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => showFeedback("Membuka Pusat Notifikasi...")}
                  className="w-full py-4 text-center text-[10px] font-black text-primary hover:bg-primary/5 transition-colors uppercase tracking-[0.2em] border-t border-slate-100 dark:border-slate-700"
                >
                  Buka Riwayat Notifikasi
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="h-8 w-px bg-slate-100 dark:bg-slate-700 mx-1 hidden md:block" />

        {/* Profile */}
        <div className="relative" ref={profileRef}>
          {user ? (
            <button
              className={cn(
                "hidden md:flex items-center gap-3.5 rounded-2xl p-1 pr-4 transition-all duration-300 border-2",
                showProfile
                  ? "bg-slate-900 dark:bg-slate-100 border-slate-900 dark:border-slate-100 text-white dark:text-slate-900 shadow-xl shadow-slate-900/30 scale-105"
                  : "bg-slate-50 dark:bg-slate-800 border-transparent text-slate-800 dark:text-slate-200 hover:border-slate-100 dark:hover:border-slate-600 hover:bg-white dark:hover:bg-slate-700"
              )}
              onClick={() => { setShowProfile(!showProfile); setShowNotifications(false); }}
            >
              <div className="w-9 h-9 bg-white dark:bg-slate-700 rounded-[0.85rem] flex items-center justify-center overflow-hidden shadow-inner p-0.5">
                <img
                  src={user.photoURL || "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=150&auto=format&fit=crop"}
                  alt="Avatar"
                  className="w-full h-full object-cover rounded-[0.65rem]"
                />
              </div>
              <div className="text-left">
                <div className="text-[11px] font-black tracking-tight leading-none">{user.displayName || "User"}</div>
                <div className={cn("text-[9px] font-bold uppercase tracking-widest mt-1 opacity-60",
                  showProfile ? "text-white dark:text-slate-900" : "text-primary"
                )}>
                  {user.email}
                </div>
              </div>
              <ChevronDown size={14} className={cn("transition-transform duration-300", showProfile ? "rotate-180" : "opacity-30")} />
            </button>
          ) : (
            <Button
              onClick={onLogin}
              className="hidden md:flex items-center gap-2 rounded-2xl bg-primary text-white font-bold text-xs uppercase tracking-widest px-5 h-11"
            >
              <LogIn size={16} />
              Login
            </Button>
          )}

          <AnimatePresence>
            {showProfile && user && (
              <motion.div
                initial={{ opacity: 0, y: 15, scale: 0.95 }}
                animate={{ opacity: 1, y: 0,  scale: 1    }}
                exit={{    opacity: 0, y: 15, scale: 0.95 }}
                className="absolute right-0 mt-5 w-64
                  bg-white dark:bg-slate-800
                  border border-slate-100 dark:border-slate-700
                  shadow-[0_20px_60px_rgba(0,0,0,0.18)]
                  rounded-3xl overflow-hidden z-[1002]"
              >
                <div className="p-6 bg-slate-950 dark:bg-slate-950 text-white">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center p-1 backdrop-blur-md">
                      <img
                        src={user.photoURL || "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=150&auto=format&fit=crop"}
                        alt="Profile"
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </div>
                    <div>
                      <div className="text-sm font-black tracking-tight">{user.displayName || "User"}</div>
                      <div className="text-[10px] opacity-70 mt-1">{user.email}</div>
                    </div>
                  </div>
                </div>
                <div className="p-3">
                  <button
                    onClick={() => { onLogout(); setShowProfile(false); }}
                    className="w-full flex items-center gap-4 px-4 py-3.5 hover:bg-red-50 dark:hover:bg-red-950/40 transition-all rounded-2xl text-red-600 font-bold group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-red-50 dark:bg-red-950/50 flex items-center justify-center text-red-400 group-hover:text-red-600 transition-colors shadow-sm">
                      <LogOut size={16} />
                    </div>
                    <span className="text-xs font-black uppercase tracking-widest">Logout Sesi</span>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}