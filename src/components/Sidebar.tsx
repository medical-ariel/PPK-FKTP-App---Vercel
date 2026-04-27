import { CATEGORIES } from '../data/diseases';
import { Bot, Printer, LayoutGrid, ChevronRight, Heart, Calculator, Search } from 'lucide-react';
import { Disease } from '../types';
import { ScrollArea } from './ui/scroll-area';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

interface SidebarProps {
  currentCat: string;
  onSelectCat: (cat: string) => void;
  diseases: Disease[];
  onOpenAI: () => void;
  onOpenTools: () => void;
  onOpenICD: () => void;
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ currentCat, onSelectCat, diseases, onOpenAI, onOpenTools, onOpenICD, isOpen, onClose }: SidebarProps) {
  const getCatCount = (cat: string) => {
    if (cat === 'all') return diseases.length;
    return diseases.filter(d => d.cat === cat).length;
  };

  const categories = Object.entries(CATEGORIES).filter(([cat]) => getCatCount(cat) > 0);

  const getVariantStyles = (variant: string | undefined, isActive: boolean) => {
    switch (variant) {
      case 'blue': return isActive ? 'bg-blue-500 text-white' : 'text-blue-600 bg-blue-50 hover:bg-blue-100';
      case 'purple': return isActive ? 'bg-purple-500 text-white' : 'text-purple-600 bg-purple-50 hover:bg-purple-100';
      case 'red': return isActive ? 'bg-red-500 text-white' : 'text-red-600 bg-red-50 hover:bg-red-100';
      case 'green': return isActive ? 'bg-green-500 text-white' : 'text-green-600 bg-green-50 hover:bg-green-100';
      case 'amber': return isActive ? 'bg-amber-500 text-white' : 'text-amber-600 bg-amber-50 hover:bg-amber-100';
      case 'emerald': return isActive ? 'bg-emerald-500 text-white' : 'text-emerald-600 bg-emerald-50 hover:bg-emerald-100';
      case 'pink': return isActive ? 'bg-pink-500 text-white' : 'text-pink-600 bg-pink-50 hover:bg-pink-100';
      case 'fuchsia': return isActive ? 'bg-fuchsia-500 text-white' : 'text-fuchsia-600 bg-fuchsia-50 hover:bg-fuchsia-100';
      case 'indigo': return isActive ? 'bg-indigo-500 text-white' : 'text-indigo-600 bg-indigo-50 hover:bg-indigo-100';
      case 'cyan': return isActive ? 'bg-cyan-500 text-white' : 'text-cyan-600 bg-cyan-50 hover:bg-cyan-100';
      case 'teal': return isActive ? 'bg-teal-500 text-white' : 'text-teal-600 bg-teal-50 hover:bg-teal-100';
      case 'orange': return isActive ? 'bg-orange-500 text-white' : 'text-orange-600 bg-orange-50 hover:bg-orange-100';
      default: return isActive ? 'bg-slate-700 text-white' : 'text-slate-600 bg-slate-50 hover:bg-slate-100';
    }
  };

  const getBorderActiveStyle = (variant: string | undefined) => {
    switch (variant) {
      case 'blue': return 'border-blue-200';
      case 'purple': return 'border-purple-200';
      case 'red': return 'border-red-200';
      case 'green': return 'border-green-200';
      case 'amber': return 'border-amber-200';
      case 'emerald': return 'border-emerald-200';
      case 'pink': return 'border-pink-200';
      case 'fuchsia': return 'border-fuchsia-200';
      case 'indigo': return 'border-indigo-200';
      case 'cyan': return 'border-cyan-200';
      case 'teal': return 'border-teal-200';
      case 'orange': return 'border-orange-200';
      default: return 'border-slate-200';
    }
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-[1000] md:hidden backdrop-blur-md"
          onClick={onClose}
        />
      )}
      
      <aside className={`
        fixed md:sticky top-20 left-0 bottom-0 w-80 bg-background border-r border-border
        z-[1000] transition-all duration-500 ease-in-out shadow-2xl md:shadow-none
        ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        <ScrollArea className="h-full">
          <div className="p-6 space-y-10">
            <div>
              <div className="flex items-center justify-between mb-5 px-2">
                <h3 className="text-[10px] uppercase font-black text-muted-foreground tracking-[0.2em]">Sistem Navigasi</h3>
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
              </div>
              <div className="space-y-2">
                {[
                  { id: 'all', label: 'Dashboard Utama', icon: <LayoutGrid size={18} />, badge: getCatCount('all'), action: () => onSelectCat('all'), color: 'slate', activeColor: 'bg-primary border-primary text-white', iconActiveColor: 'bg-white/20' },
                  { id: 'icd10', label: 'ICD-10 Finder', icon: <Search size={18} />, badge: 'SEARCH', action: onOpenICD, color: 'slate', activeColor: 'bg-slate-900 border-slate-900 text-white', iconActiveColor: 'bg-white/20', iconBg: 'bg-slate-900', iconColor: 'text-white' },
                  { id: 'ai', label: 'Konsultasi AI', icon: <Bot size={18} />, badge: 'AI', badgeClass: 'bg-indigo-100 text-indigo-700', action: onOpenAI, color: 'indigo', activeColor: 'bg-indigo-50/50 border-indigo-100 text-indigo-700', iconActiveColor: 'bg-indigo-500 text-white', iconBg: 'bg-indigo-500', iconColor: 'text-white' },
                  { id: 'tools', label: 'Alat Medis & Kalkulator', icon: <Calculator size={18} />, badge: 'TOOLS', badgeClass: 'bg-emerald-50 text-emerald-600', action: onOpenTools, color: 'emerald', activeColor: 'bg-emerald-50/50 border-emerald-100 text-emerald-700', iconActiveColor: 'bg-emerald-500 text-white', iconBg: 'bg-emerald-500', iconColor: 'text-white' },
                  { id: 'favorites', label: 'Favorit & Tersimpan', icon: <Heart size={18} className={currentCat === 'favorites' ? 'fill-current' : ''} />, action: () => onSelectCat('favorites'), color: 'red', activeColor: 'bg-red-500 border-red-500 text-white', iconActiveColor: 'bg-white/20', iconColor: 'text-red-500' },
                ].map((item) => {
                  const isActive = currentCat === item.id;
                  return (
                    <Button
                      key={item.id}
                      variant="ghost"
                      onClick={() => { item.action(); onClose(); }}
                      className={cn(
                        "w-full h-14 px-4 rounded-2xl font-bold transition-all border-2 group relative overflow-hidden flex items-center justify-start gap-4",
                        isActive 
                          ? `${item.activeColor} shadow-md scale-[1.02]` 
                          : `text-slate-600 border-transparent hover:border-${item.color}-100 hover:bg-${item.color}-50/50`
                      )}
                    >
                      <div className={cn(
                        "w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300",
                        isActive 
                          ? item.iconActiveColor 
                          : item.iconBg ? `${item.iconBg} ${item.iconColor} shadow-lg shadow-${item.color}-500/20 group-hover:scale-110` : `bg-slate-100 ${item.iconColor || 'text-slate-500'} group-hover:bg-white border border-slate-200/50`
                      )}>
                        {item.icon}
                      </div>
                      
                      <span className={cn(
                        "tracking-tight text-sm text-left truncate flex-1",
                        item.iconBg && !isActive ? `text-${item.color}-700` : ""
                      )}>
                        {item.label}
                      </span>
                      
                      {item.badge && (
                        <div className="shrink-0 ml-auto">
                          {typeof item.badge === 'number' ? (
                            <Badge className={cn(
                              "text-[10px] rounded-lg font-black transition-colors px-2",
                              isActive ? "bg-white text-primary" : "bg-slate-100 text-slate-500"
                            )}>
                              {item.badge}
                            </Badge>
                          ) : (
                            <Badge variant="secondary" className={cn(
                              "text-[8px] px-1.5 font-black uppercase",
                              isActive ? "bg-white/20 text-white" : item.badgeClass || "bg-slate-100 text-slate-500"
                            )}>
                              {item.badge}
                            </Badge>
                          )}
                        </div>
                      )}
                    </Button>
                  );
                })}
              </div>
            </div>

            <Separator className="opacity-40" />

            <div>
              <div className="flex items-center justify-between mb-5 px-2">
                <h3 className="text-[10px] uppercase font-black text-muted-foreground tracking-[0.2em]">Klaster Diagnostik</h3>
                <span className="text-[10px] font-bold text-slate-300">v2.0</span>
              </div>
              <div className="grid grid-cols-1 gap-2.5">
                {categories.map(([cat, info]) => {
                  const count = getCatCount(cat);
                  const isActive = currentCat === cat;
                  return (
                    <Button
                      key={cat}
                      variant="ghost"
                      onClick={() => { onSelectCat(cat); onClose(); }}
                      className={cn(
                        "w-full justify-start gap-4 h-14 px-4 rounded-2xl font-bold transition-all border-2 group relative overflow-hidden",
                        isActive 
                          ? `${getVariantStyles(info.variant, true)} ${getBorderActiveStyle(info.variant)} shadow-lg shadow-black/5` 
                          : "text-slate-600 bg-white hover:bg-slate-50 border-slate-100/50 hover:border-slate-200"
                      )}
                    >
                      {isActive && (
                        <motion.div 
                          layoutId="active-bg"
                          className="absolute inset-0 bg-gradient-to-r opacity-10 from-white to-transparent" 
                        />
                      )}
                      
                      <div className={cn(
                        "w-10 h-10 rounded-2xl flex items-center justify-center text-xl shadow-md transition-all group-hover:scale-110",
                        getVariantStyles(info.variant, isActive && false)
                      )}>
                        {info.icon}
                      </div>

                      <div className="flex flex-col items-start min-w-0">
                        <span className="truncate text-[13px] tracking-tight leading-tight">{cat}</span>
                        <span className={cn(
                          "text-[9px] font-black uppercase tracking-widest mt-0.5 transition-colors",
                          isActive ? "text-white/60" : "text-slate-400"
                        )}>
                          {count} Modul
                        </span>
                      </div>

                      <div className={cn(
                        "ml-auto w-6 h-6 rounded-lg flex items-center justify-center transition-all",
                        isActive ? "bg-white/20" : "bg-slate-50 opacity-0 group-hover:opacity-100"
                      )}>
                        <ChevronRight size={12} />
                      </div>
                    </Button>
                  );
                })}
              </div>
            </div>

            <Separator className="opacity-40" />

            <div className="space-y-4">
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-6 shadow-2xl relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                 <h4 className="text-xs font-black text-white uppercase tracking-widest mb-2 flex items-center gap-2">
                    <Printer size={14} className="text-primary" />
                    Laporan PPK
                 </h4>
                 <p className="text-[10px] text-slate-400 leading-relaxed mb-5 font-medium">
                    Ekspor dataset diagnosa aktif ke format PDF/Print profesional.
                 </p>
                 <Button 
                    variant="ghost" 
                    className="w-full rounded-xl bg-white/10 hover:bg-white/20 text-white text-[11px] font-black uppercase tracking-wider h-11 border border-white/10" 
                    onClick={() => window.print()}
                 >
                    Cetak Modul
                 </Button>
              </div>

              <div className="py-6 text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-50 rounded-full border border-slate-100">
                  <span className="w-1 h-1 bg-slate-400 rounded-full" />
                  <p className="text-[8px] uppercase tracking-[0.2em] text-slate-500 font-black">Standard PPK FKTP v2026</p>
                  <span className="w-1 h-1 bg-slate-400 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </ScrollArea>
      </aside>
    </>
  );
}
