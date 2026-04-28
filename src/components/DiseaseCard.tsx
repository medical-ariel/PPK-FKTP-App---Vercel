import React, { memo } from 'react';
import { Disease } from '../types';
import { Heart, Stethoscope } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

interface DiseaseCardProps {
  disease: Disease;
  onClick: () => void;
  isBookmarked?: boolean;
  onToggleBookmark?: (e: React.MouseEvent) => void;
}

// Level badge color map
const levelColors: Record<string, { bg: string; text: string; border: string }> = {
  '4A': { bg: 'bg-emerald-500', text: 'text-white', border: 'border-emerald-400' },
  '3B': { bg: 'bg-sky-500', text: 'text-white', border: 'border-sky-400' },
  '3A': { bg: 'bg-blue-500', text: 'text-white', border: 'border-blue-400' },
  '2':  { bg: 'bg-amber-500', text: 'text-white', border: 'border-amber-400' },
  '1':  { bg: 'bg-slate-400', text: 'text-white', border: 'border-slate-300' },
};

function getLevelColor(level: string) {
  return levelColors[level] ?? { bg: 'bg-slate-500', text: 'text-white', border: 'border-slate-400' };
}

const DiseaseCard = memo(function DiseaseCard({
  disease,
  onClick,
  isBookmarked = false,
  onToggleBookmark,
}: DiseaseCardProps) {
  const lv = getLevelColor(disease.level);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 12 }}
      whileHover={{ y: -3, transition: { duration: 0.18, ease: 'easeOut' } }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
      className="h-full"
    >
      <div
        onClick={onClick}
        className={cn(
          'relative flex flex-col h-full rounded-2xl overflow-hidden cursor-pointer',
          'bg-white border border-slate-200/80',
          'shadow-sm hover:shadow-md hover:border-slate-300',
          'transition-all duration-200 select-none',
        )}
      >
        {/* ── Hero strip ─────────────────────────────────── */}
        <div
          className="relative flex items-end justify-between px-4 pt-4 pb-3 overflow-hidden"
          style={{ backgroundColor: disease.iconBg || '#0f172a' }}
        >
          {/* Subtle geometric overlay — pure CSS, zero performance cost */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage: `repeating-linear-gradient(
                45deg,
                #fff 0px, #fff 1px,
                transparent 1px, transparent 12px
              )`,
            }}
          />
          {/* Bottom fade */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-black/30 to-transparent" />

          {/* Icon */}
          <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-xl bg-white/15 backdrop-blur-sm border border-white/20 text-2xl shadow-md">
            {disease.icon}
          </div>

          {/* Top-right: bookmark + level badge */}
          <div className="relative z-10 flex items-center gap-2">
            {onToggleBookmark && (
              <button
                onClick={(e) => { e.stopPropagation(); onToggleBookmark(e); }}
                aria-label={isBookmarked ? 'Hapus bookmark' : 'Tambah bookmark'}
                className={cn(
                  'p-1.5 rounded-full border transition-all duration-150',
                  isBookmarked
                    ? 'bg-rose-500 border-rose-400 text-white'
                    : 'bg-white/20 border-white/30 text-white/80 hover:bg-white/30',
                )}
              >
                <Heart size={13} className={isBookmarked ? 'fill-current' : ''} />
              </button>
            )}
            <span className={cn(
              'text-[10px] font-bold px-2 py-0.5 rounded-full border',
              lv.bg, lv.text, lv.border,
            )}>
              {disease.level}
            </span>
          </div>
        </div>

        {/* ── Body ───────────────────────────────────────── */}
        <div className="flex flex-col flex-1 px-4 pt-3 pb-4 gap-2">
          {/* Disease name */}
          <h3 className="text-sm font-bold text-slate-800 leading-snug line-clamp-2">
            {disease.name}
          </h3>

          {/* ICPC + ICD codes — compact pill row */}
          <div className="flex items-center flex-wrap gap-1.5">
            {disease.icpc && (
              <span className="inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-md bg-slate-100 text-slate-500 border border-slate-200">
                <Stethoscope size={9} />
                ICPC {disease.icpc}
              </span>
            )}
            {disease.icd && (
              <span className="inline-flex items-center text-[10px] font-semibold px-2 py-0.5 rounded-md bg-slate-100 text-slate-500 border border-slate-200">
                ICD {disease.icd}
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
});

export default DiseaseCard;