import { useState } from 'react';
import { Bookmark, BookmarkCheck } from 'lucide-react';
import { useBookmarks, type BookmarkType } from '@/hooks/useBookmarks';
import { cn } from '@/lib/utils';

interface BookmarkButtonProps {
  type: BookmarkType;
  size?: 'sm' | 'md';
  className?: string;

  // --- props untuk type="disease" ---
  diseaseId?: string;
  diseaseName?: string;
  diseaseCat?: string;
  diseasePreview?: string;

  // --- props untuk type="chat" ---
  messageId?: string;
  messageText?: string;
  // konteks penyakit saat chat (opsional)
  chatDiseaseName?: string;
  chatDiseaseICD?: string;
}

export function BookmarkButton({
  type,
  size = 'sm',
  className,
  diseaseId,
  diseaseName,
  diseaseCat,
  diseasePreview,
  messageId,
  messageText,
  chatDiseaseName,
  chatDiseaseICD,
}: BookmarkButtonProps) {
  const { uid, addBookmark, removeBookmark, findBookmark } = useBookmarks();
  const [busy, setBusy] = useState(false);

  // Tidak render kalau belum login
  if (!uid) return null;

  const checkKey = type === 'disease' ? (diseaseId ?? '') : (messageId ?? '');
  const existing = checkKey ? findBookmark(checkKey, type) : undefined;
  const saved = Boolean(existing);

  const toggle = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (busy) return;
    setBusy(true);
    try {
      if (saved && existing) {
        await removeBookmark(existing.id);
      } else {
        if (type === 'disease' && diseaseId) {
          await addBookmark({
            type: 'disease',
            diseaseId,
            diseaseName,
            diseaseCat,
            diseasePreview: diseasePreview?.slice(0, 300),
          });
        } else if (type === 'chat' && messageId) {
          await addBookmark({
            type: 'chat',
            messageText: messageText?.slice(0, 500),
            diseaseName: chatDiseaseName,
            diseaseICD: chatDiseaseICD,
          });
        }
      }
    } catch (err) {
      console.error('Bookmark toggle error:', err);
    } finally {
      setBusy(false);
    }
  };

  const iconSize = size === 'sm' ? 14 : 18;

  return (
    <button
      onClick={toggle}
      disabled={busy}
      title={saved ? 'Hapus bookmark' : 'Simpan ke bookmark'}
      className={cn(
        'flex items-center justify-center rounded-lg transition-all duration-200',
        'hover:scale-110 active:scale-95',
        size === 'sm' ? 'p-1' : 'p-1.5',
        saved
          ? 'text-amber-500 hover:text-amber-600'
          : 'text-slate-400 hover:text-amber-500',
        busy && 'opacity-40 cursor-not-allowed',
        className
      )}
    >
      {saved
        ? <BookmarkCheck size={iconSize} fill="currentColor" />
        : <Bookmark size={iconSize} />
      }
    </button>
  );
}
