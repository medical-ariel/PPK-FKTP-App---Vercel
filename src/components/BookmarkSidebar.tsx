import { useState } from 'react';
import { X, Bookmark, MessageSquare, Stethoscope, Trash2, BookOpen, LogIn } from 'lucide-react';
import { useBookmarks, type Bookmark as BM } from '@/hooks/useBookmarks';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';

interface BookmarkSidebarProps {
  open: boolean;
  onClose: () => void;
  /** Dipanggil saat user klik item disease → buka DiseaseDetail */
  onSelectDisease?: (diseaseId: string) => void;
}

export function BookmarkSidebar({ open, onClose, onSelectDisease }: BookmarkSidebarProps) {
  const { bookmarks, loading, uid, removeBookmark } = useBookmarks();
  const [tab, setTab] = useState<'disease' | 'chat'>('disease');
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const diseaseBMs = bookmarks.filter(b => b.type === 'disease');
  const chatBMs = bookmarks.filter(b => b.type === 'chat');
  const current = tab === 'disease' ? diseaseBMs : chatBMs;

  const handleDelete = async (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setDeletingId(id);
    await removeBookmark(id);
    setDeletingId(null);
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 z-40 backdrop-blur-sm"
          />

          {/* Sidebar panel */}
          <motion.div
            key="sidebar"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            className="fixed right-0 top-0 h-full w-80 max-w-[92vw] bg-white z-50 shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <Bookmark size={17} className="text-amber-500" fill="currentColor" />
                <span className="font-black text-sm uppercase tracking-widest text-slate-800">Bookmark</span>
                <span className="text-[10px] bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-bold">
                  {bookmarks.length}
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-400 transition-colors"
              >
                <X size={16} />
              </button>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-slate-100">
              {(['disease', 'chat'] as const).map(t => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={cn(
                    'flex-1 flex items-center justify-center gap-1.5 py-3 text-[11px] font-bold uppercase tracking-widest transition-colors',
                    tab === t
                      ? 'text-primary border-b-2 border-primary'
                      : 'text-slate-400 hover:text-slate-600'
                  )}
                >
                  {t === 'disease' ? <Stethoscope size={13} /> : <MessageSquare size={13} />}
                  {t === 'disease' ? 'Penyakit' : 'Chat'}
                  <span className="opacity-60">
                    ({t === 'disease' ? diseaseBMs.length : chatBMs.length})
                  </span>
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto">
              {!uid ? (
                <EmptyState
                  icon={<LogIn size={30} />}
                  text="Login Google untuk menggunakan fitur bookmark"
                />
              ) : loading ? (
                <div className="flex items-center justify-center h-32">
                  <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                </div>
              ) : current.length === 0 ? (
                <EmptyState
                  icon={tab === 'disease' ? <Stethoscope size={30} /> : <MessageSquare size={30} />}
                  text={`Belum ada bookmark ${tab === 'disease' ? 'penyakit' : 'percakapan AI'}`}
                />
              ) : (
                <ul className="divide-y divide-slate-50">
                  <AnimatePresence initial={false}>
                    {current.map(bm => (
                      <motion.li
                        key={bm.id}
                        layout
                        initial={{ opacity: 0, x: 16 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 16, height: 0, paddingTop: 0, paddingBottom: 0 }}
                        transition={{ duration: 0.18 }}
                        className="px-4 py-3.5 hover:bg-slate-50 group cursor-pointer"
                        onClick={() => {
                          if (tab === 'disease' && bm.diseaseId) {
                            onSelectDisease?.(bm.diseaseId);
                            onClose();
                          }
                        }}
                      >
                        {tab === 'disease' ? (
                          <DiseaseItem bm={bm} />
                        ) : (
                          <ChatItem bm={bm} />
                        )}

                        {/* Footer: tanggal + delete */}
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-[10px] text-slate-400">
                            {bm.createdAt?.toDate?.()?.toLocaleDateString('id-ID', {
                              day: 'numeric', month: 'short', year: 'numeric',
                            }) ?? '—'}
                          </span>
                          <button
                            onClick={(e) => handleDelete(bm.id, e)}
                            disabled={deletingId === bm.id}
                            className="opacity-0 group-hover:opacity-100 p-1 rounded hover:bg-red-50 text-slate-400 hover:text-red-500 transition-all"
                          >
                            {deletingId === bm.id
                              ? <div className="w-3 h-3 border border-red-400 border-t-transparent rounded-full animate-spin" />
                              : <Trash2 size={12} />
                            }
                          </button>
                        </div>
                      </motion.li>
                    ))}
                  </AnimatePresence>
                </ul>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

/* ─── Sub-components ─── */

function DiseaseItem({ bm }: { bm: BM }) {
  return (
    <div className="flex items-start gap-2">
      <BookOpen size={13} className="text-primary mt-0.5 shrink-0" />
      <div className="min-w-0">
        <p className="text-sm font-bold text-slate-800 leading-tight line-clamp-1">
          {bm.diseaseName ?? 'Penyakit'}
        </p>
        {bm.diseaseCat && (
          <span className="inline-block mt-1 text-[10px] text-primary bg-primary/10 px-2 py-0.5 rounded-full font-bold">
            {bm.diseaseCat}
          </span>
        )}
        {bm.diseasePreview && (
          <p className="text-xs text-slate-500 line-clamp-2 mt-1 leading-relaxed">
            {bm.diseasePreview}
          </p>
        )}
      </div>
    </div>
  );
}

function ChatItem({ bm }: { bm: BM }) {
  return (
    <div>
      {bm.diseaseName && (
        <span className="inline-block mb-1.5 text-[10px] text-emerald-700 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-full font-bold">
          {bm.diseaseName}
          {bm.diseaseICD && ` · ${bm.diseaseICD}`}
        </span>
      )}
      <p className="text-sm text-slate-700 line-clamp-3 leading-relaxed font-medium">
        {bm.messageText ?? '—'}
      </p>
    </div>
  );
}

function EmptyState({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex flex-col items-center justify-center h-48 gap-3 text-slate-400 px-8 text-center">
      <div className="opacity-25">{icon}</div>
      <p className="text-xs font-medium">{text}</p>
    </div>
  );
}
