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
import React from 'react';
import { Disease } from '../types';
import { ChevronRight, ArrowUpRight, Heart } from 'lucide-react';
import { motion } from 'motion/react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { cn } from '../lib/utils';

interface DiseaseCardProps {
  disease: Disease;
  onClick: () => void;
  isBookmarked?: boolean;
  onToggleBookmark?: (e: React.MouseEvent) => void;
  key?: string;
}

export default function DiseaseCard({ disease, onClick, isBookmarked = false, onToggleBookmark }: DiseaseCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.2 } }}
      whileTap={{ scale: 0.98 }}
      transition={{ 
        layout: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
        scale: { duration: 0.2 }
      }}
      className="h-full"
    >
      <Card 
        onClick={onClick}
        className="overflow-hidden h-full cursor-pointer border shadow-sm hover:shadow-lg transition-all group bg-white hover:border-primary/20 relative"
      >
        <div className="relative h-32 overflow-hidden" style={{ backgroundColor: disease.iconBg || '#0f172a' }}>
          {/* Abstract professional pattern instead of noisy images */}
          <div className="absolute inset-0 opacity-20">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id={`pattern-${disease.id}`} width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M0 40L40 0H20L0 20M40 40V20L20 40" fill="currentColor" fillOpacity="0.4" />
                </pattern>
                <linearGradient id={`grad-${disease.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#000000" stopOpacity="0.2" />
                </linearGradient>
              </defs>
              <rect width="100%" height="100%" fill={`url(#pattern-${disease.id})`} />
              <rect width="100%" height="100%" fill={`url(#grad-${disease.id})`} />
            </svg>
          </div>
          
          {/* Medical icon large watermark */}
          <div className="absolute -bottom-8 -right-8 text-white/10 text-9xl font-black rotate-12 transform-gpu">
            {disease.icon}
          </div>
          
          <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
          
          <div 
            className="absolute bottom-3 left-4 w-10 h-10 rounded-xl flex items-center justify-center text-xl shadow-lg border border-white/20 backdrop-blur-md bg-white/10 text-white"
          >
            {disease.icon}
          </div>

          <div className="absolute top-3 left-3">
             <Badge variant="secondary" className="bg-white/90 backdrop-blur-sm text-[10px] font-bold uppercase tracking-wider text-slate-700">
              {disease.cat}
            </Badge>
          </div>
          
          <div className="absolute top-3 right-3 flex items-center gap-2">
             {onToggleBookmark && (
               <button 
                 onClick={(e) => {
                   e.stopPropagation();
                   onToggleBookmark(e);
                 }}
                 className={cn(
                   "p-1.5 rounded-full backdrop-blur-md border shadow-sm transition-all z-10",
                   isBookmarked ? "bg-red-500 border-red-500 text-white" : "bg-white/50 border-white/40 text-white hover:bg-white/80 hover:text-red-500"
                 )}
               >
                 <Heart size={14} className={cn(isBookmarked ? "fill-current" : "")} />
               </button>
             )}
             <Badge variant={disease.level === '4A' ? 'default' : 'secondary'} className="text-[10px] px-1.5 py-0 border-none shadow-sm">
               Lvl {disease.level}
             </Badge>
          </div>
        </div>
        
        <CardHeader className="p-5 pb-2">
           <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-1">{disease.icd}</span>
           <CardTitle className="text-base font-bold group-hover:text-primary transition-colors line-clamp-1 leading-tight">
            {disease.name}
          </CardTitle>
        </CardHeader>
        
        <CardContent className="px-5 py-2">
          <p className="text-xs text-muted-foreground line-clamp-3 leading-relaxed">
            {disease.preview}
          </p>
        </CardContent>
        
        <CardFooter className="px-5 py-4 pt-2 mt-auto border-t">
          <div className="flex items-center gap-2 text-xs font-bold text-primary group-hover:gap-3 transition-all">
            <span>Buka Modul</span>
            <ChevronRight size={14} />
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
