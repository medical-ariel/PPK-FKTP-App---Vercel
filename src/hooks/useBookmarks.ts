import { useState, useEffect, useCallback } from 'react';
import { db, auth } from '@/lib/firebase';
import {
  collection, doc, setDoc, deleteDoc,
  onSnapshot, query, orderBy, serverTimestamp
} from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';

export type BookmarkType = 'chat' | 'disease';

export interface Bookmark {
  id: string;
  type: BookmarkType;
  createdAt: any;
  // chat bookmark
  messageText?: string;
  diseaseName?: string;
  diseaseICD?: string;
  // disease bookmark
  diseaseId?: string;
  diseaseCat?: string;
  diseasePreview?: string;
}

export function useBookmarks() {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
  const [uid, setUid] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setUid(user?.uid ?? null);
      if (!user) {
        setBookmarks([]);
        setLoading(false);
      }
    });
    return unsub;
  }, []);

  useEffect(() => {
    if (!uid) return;

    // Tanpa orderBy di query — sort di client-side
    // Alasan: serverTimestamp() = null di client saat pending,
    // orderBy Firestore skip dokumen dengan field null → bookmark hilang sampai refresh
    const q = query(collection(db, 'bookmarks', uid, 'items'));

    const unsub = onSnapshot(
      q,
      { includeMetadataChanges: false },
      (snap) => {
        const items = snap.docs.map(d => ({ id: d.id, ...d.data() } as Bookmark));

        // Sort client-side: handle null createdAt (pending serverTimestamp)
        items.sort((a, b) => {
          const tsA = a.createdAt?.toMillis?.() ?? Date.now();
          const tsB = b.createdAt?.toMillis?.() ?? Date.now();
          return tsB - tsA; // desc
        });

        setBookmarks(items);
        setLoading(false);
      },
      (err) => {
        console.error('Bookmark snapshot error:', err);
        setLoading(false);
      }
    );
    return unsub;
  }, [uid]);

  const addBookmark = useCallback(async (bookmark: Omit<Bookmark, 'id' | 'createdAt'>) => {
    if (!uid) return null;
    const ref = doc(collection(db, 'bookmarks', uid, 'items'));
    await setDoc(ref, { ...bookmark, createdAt: serverTimestamp() });
    return ref.id;
  }, [uid]);

  const removeBookmark = useCallback(async (id: string) => {
    if (!uid) return;
    await deleteDoc(doc(db, 'bookmarks', uid, 'items', id));
  }, [uid]);

  const findBookmark = useCallback((key: string, type: BookmarkType): Bookmark | undefined => {
    if (type === 'disease') return bookmarks.find(b => b.type === 'disease' && b.diseaseId === key);
    return bookmarks.find(b => b.type === 'chat' && b.id === key);
  }, [bookmarks]);

  return { bookmarks, loading, uid, addBookmark, removeBookmark, findBookmark };
}