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
