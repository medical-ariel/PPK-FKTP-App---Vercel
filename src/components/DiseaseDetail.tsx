import { useState } from 'react';
import { Disease } from '../types';
import { ArrowLeft, Printer, AlertTriangle, Info, CheckCircle2, Share2, Clock, Sparkles, ExternalLink, Heart, Star, Target, Activity, ChevronDown, ListFilter, Droplet, Beaker, Scan, HeartPulse, Microscope, ClipboardList, TestTube } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { cn } from '../lib/utils';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Separator } from './ui/separator';
import { Card, CardContent } from './ui/card';
import { ScrollArea } from './ui/scroll-area';

interface DiseaseDetailProps {
  disease: Disease;
  onBack: () => void;
  onOpenAI?: () => void;
  isBookmarked?: boolean;
  onToggleBookmark?: () => void;
}

import MedicationManager from './MedicationManager';

const getTestIconAndColor = (text: string) => {
  const lowerText = text.toLowerCase();
  if (lowerText.includes('darah') || lowerText.includes('hematologi') || lowerText.includes('serologi') || lowerText.includes('serum') || lowerText.includes('widal') || lowerText.includes('tubex') || lowerText.includes('hb') || lowerText.includes('ig')) {
    return { icon: Droplet, color: 'text-rose-500', bg: 'bg-rose-500/10' };
  }
  if (lowerText.includes('urin') || lowerText.includes('urine') || lowerText.includes('sedimen')) {
    return { icon: Beaker, color: 'text-amber-500', bg: 'bg-amber-500/10' };
  }
  if (lowerText.includes('rontgen') || lowerText.includes('foto') || lowerText.includes('x-ray') || lowerText.includes('ct scan') || lowerText.includes('radiografi') || lowerText.includes('thorax')) {
    return { icon: Scan, color: 'text-slate-500', bg: 'bg-slate-500/10' };
  }
  if (lowerText.includes('ekg') || lowerText.includes('elektrokardiogram')) {
    return { icon: Activity, color: 'text-emerald-500', bg: 'bg-emerald-500/10' };
  }
  if (lowerText.includes('usg') || lowerText.includes('ekokardiografi') || lowerText.includes('ultrasonografi')) {
    return { icon: HeartPulse, color: 'text-cyan-500', bg: 'bg-cyan-500/10' };
  }
  if (lowerText.includes('kultur') || lowerText.includes('kerokan') || lowerText.includes('swab') || lowerText.includes('mikroskop') || lowerText.includes('gram') || lowerText.includes('koh') || lowerText.includes('ziehl') || lowerText.includes('bta') || lowerText.includes('sputum')) {
    return { icon: Microscope, color: 'text-violet-500', bg: 'bg-violet-500/10' };
  }
  if (lowerText.includes('skor') || lowerText.includes('kriteria') || lowerText.includes('kuesioner') || lowerText.includes('centor') || lowerText.includes('alvarado') || lowerText.includes('curb') || lowerText.includes('gad-7') || lowerText.includes('ppi trial') || lowerText.includes('ppi test')) {
    return { icon: ClipboardList, color: 'text-orange-500', bg: 'bg-orange-500/10' };
  }
  return { icon: TestTube, color: 'text-primary/60', bg: 'bg-primary/10' };
};

export default function DiseaseDetail({ disease, onBack, onOpenAI, isBookmarked = false, onToggleBookmark }: DiseaseDetailProps) {
  const handleShare = async () => {
    const shareData = {
      title: `PPK FKTP: ${disease.name}`,
      text: `${disease.name} - ICD-10: ${disease.icd}. Modul Praktik Klinis Digital.`,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        alert('Tautan modul berhasil disalin ke clipboard!');
      }
    } catch (err) {
      if (err instanceof Error && err.name === 'AbortError') {
        return;
      }
      console.error('Error sharing:', err);
      // Fallback for other errors
      try {
        await navigator.clipboard.writeText(window.location.href);
        alert('Tautan modul berhasil disalin ke clipboard!');
      } catch (copyErr) {
        // silence
      }
    }
  };

  const handlePrint = () => {
    // Check if we are in an iframe
    const isIframe = window.self !== window.top;
    
    if (isIframe) {
      // In some iframe environments, print is restricted. 
      // We'll try to trigger it, but also warn the user.
      try {
        window.focus();
        window.print();
      } catch (e) {
        alert("Fitur print mungkin diblokir oleh browser di dalam pratinjau. Silakan buka aplikasi di 'Tab Baru' (ikon panah di pojok kanan atas) untuk mencetak modul dengan lancar.");
      }
    } else {
      window.print();
    }
  };

  return (
    <div className="flex flex-col min-h-full bg-background print:bg-white">
      {/* Printable-only Content (Hidden on screen) */}
      <div className="hidden print:block p-10 space-y-8 text-black bg-white">
        <div className="border-b-4 border-primary pb-6 mb-8 flex justify-between items-end">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-2">Panduan Praktik Klinis Digital</div>
            <h1 className="text-4xl font-black tracking-tighter">{disease.name}</h1>
            <div className="text-sm font-mono mt-2">ICD-10: {disease.icd} | Tingkat Kemampuan: {disease.level}</div>
          </div>
          <div className="text-right text-[10px] uppercase font-bold opacity-40">Verifikasi Terakhir: 2024</div>
        </div>

        <section className="space-y-4">
          <h2 className="text-lg font-bold border-b pb-2 uppercase tracking-widest text-primary">I. Definisi & Latar Belakang</h2>
          <p className="text-sm leading-relaxed italic">"{disease.masalah}"</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-bold border-b pb-2 uppercase tracking-widest text-primary">II. Anamnesis (Keluhan Utama)</h2>
          <ul className="list-disc pl-5 text-sm space-y-1">
            {disease.anamnesis.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-bold border-b pb-2 uppercase tracking-widest text-primary">III. Pemeriksaan Fisik & Penunjang</h2>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-xs font-bold mb-2 underline">Pemeriksaan Fisik:</h3>
              <ul className="list-disc pl-5 text-xs space-y-1">
                {disease.fisik.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-bold mb-2 underline">Pemeriksaan Penunjang:</h3>
              <ul className="list-disc pl-5 text-xs space-y-1">
                {disease.penunjang.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-bold border-b pb-2 uppercase tracking-widest text-primary">IV. Penegakan Diagnosis</h2>
          <div className="bg-muted/10 p-4 border-l-4 border-primary text-lg font-bold italic">
            {disease.diagnosis.join(", ")}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-bold border-b pb-2 uppercase tracking-widest text-primary">V. Tata Laksana Lini Pertama</h2>
          <table className="w-full border-collapse border">
            <thead>
              <tr className="bg-gray-100 italic">
                <th className="border p-2 text-left text-xs uppercase">Intervensi</th>
                <th className="border p-2 text-right text-xs uppercase">Dosis/Regimen</th>
              </tr>
            </thead>
            <tbody>
              {disease.tatalaksana.map((item, i) => (
                <tr key={i}>
                  <td className="border p-2 text-xs font-bold">{item.name} {item.note && <span className="block font-normal text-[10px] italic">{item.note}</span>}</td>
                  <td className="border p-2 text-xs font-mono text-right">{item.dose}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-bold border-b pb-2 uppercase tracking-widest text-primary">VI. Edukasi & Rujukan</h2>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-xs font-bold mb-2 underline">Edukasi Pasien:</h3>
              <ul className="list-decimal pl-5 text-[10px] space-y-1">
                {disease.edukasi.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-bold mb-2 underline">Kriteria Rujukan:</h3>
              <ul className="list-disc pl-5 text-[10px] space-y-1">
                {disease.rujukan.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>
          </div>
        </section>
      </div>

      {/* Detail Header / Hero (Screen only) */}
      <div className="relative h-[300px] md:h-[450px] flex-shrink-0 flex flex-col items-center justify-center border-b overflow-hidden px-8 print:hidden" style={{ backgroundColor: disease.iconBg || '#0f172a' }}>
        
        {/* Abstract professional pattern */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 opacity-20">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id={`pattern-detail-${disease.id}`} width="60" height="60" patternUnits="userSpaceOnUse">
                  <path d="M0 60L60 0H30L0 30M60 60V30L30 60" fill="currentColor" fillOpacity="0.3" />
                </pattern>
                <linearGradient id={`grad-detail-${disease.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#000000" stopOpacity="0.4" />
                </linearGradient>
              </defs>
              <rect width="100%" height="100%" fill={`url(#pattern-detail-${disease.id})`} />
              <rect width="100%" height="100%" fill={`url(#grad-detail-${disease.id})`} />
            </svg>
          </div>
          
          {/* Giant watermark icon */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/5 text-[400px] font-black rotate-12 pointer-events-none">
            {disease.icon}
          </div>
          <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/20 to-black/80" />
        </div>
        
        <div className="absolute top-6 left-6 right-6 flex justify-between items-center z-20">
          <Button variant="outline" size="icon" onClick={onBack} className="rounded-full bg-white/10 hover:bg-white/20 border-white/20 text-white backdrop-blur-md shadow-sm transition-all">
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div className="flex gap-2">
             {onToggleBookmark && (
               <Button 
                variant="outline" 
                size="icon" 
                onClick={onToggleBookmark} 
                className={cn(
                  "rounded-full border backdrop-blur-md shadow-sm transition-all",
                  isBookmarked
                    ? "bg-red-500/90 hover:bg-red-500 border-red-500 text-white"
                    : "bg-white/10 hover:bg-white/20 border-white/20 text-white hover:text-red-400"
                )}
                title={isBookmarked ? "Hapus dari Favorit" : "Tandai Favorit"}
               >
                 <Heart className={cn("w-4 h-4", isBookmarked ? "fill-current" : "")} />
               </Button>
             )}
             {onOpenAI && (
               <Button 
                onClick={onOpenAI} 
                className="rounded-full bg-primary text-white shadow-lg shadow-primary/30 flex gap-2 items-center px-6 py-6 font-bold hover:scale-105 active:scale-95 transition-all"
               >
                <Sparkles size={18} />
                <span className="text-xs uppercase tracking-widest">Tanya AI</span>
              </Button>
             )}
             <Button variant="outline" size="icon" onClick={handleShare} title="Bagikan Modul" className="rounded-full bg-white/10 hover:bg-white/20 border-white/20 text-white backdrop-blur-md shadow-sm">
              <Share2 className="w-4 h-4" />
            </Button>
             <Button variant="outline" size="icon" onClick={handlePrint} title="Cetak Modul" className="rounded-full bg-white/10 hover:bg-white/20 border-white/20 text-white backdrop-blur-md shadow-sm">
              <Printer className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="z-10 text-center max-w-4xl mt-12">
           <div className="flex items-center justify-center gap-2 mb-8">
              <div 
                className="w-20 h-20 rounded-[2rem] flex items-center justify-center text-5xl shadow-2xl shadow-black/40 border-4 border-white/20 backdrop-blur-xl transition-transform duration-700 hover:rotate-6"
                style={{ backgroundColor: disease.iconBg || 'rgba(255,255,255,0.2)' }}
              >
                {disease.icon}
              </div>
           </div>
           <div className="flex items-center justify-center gap-2 mb-4">
              <Badge variant="outline" className="bg-white/10 border-white/20 text-white uppercase tracking-[0.2em] text-[10px] font-black px-3 py-1 backdrop-blur-md">
                {disease.cat}
              </Badge>
              <Badge variant="outline" className="bg-white/10 border-white/20 text-white/70 font-mono text-[10px] px-3 py-1 backdrop-blur-md">
                ICD-10: {disease.icd}
              </Badge>
           </div>
           <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-6 px-4 leading-[0.95] flex items-center justify-center gap-4 drop-shadow-2xl">
              {disease.name}
              {disease.externalUrl && (
                <a 
                  href={disease.externalUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white/40 hover:text-white transition-all backdrop-blur-md border border-white/10"
                  title="Buka Referensi Alomedika"
                >
                  <ExternalLink className="w-6 h-6 md:w-7 md:h-7" />
                </a>
              )}
           </h2>
           <div className="flex items-center justify-center gap-8 text-[11px] uppercase font-black tracking-[0.25em] text-white/50">
              <div className="flex items-center gap-3">
                <Badge className={disease.level === '4A' ? 'bg-primary text-white border-none shadow-lg shadow-primary/20 scale-110' : 'bg-white/10 text-white border-white/20'}>Level {disease.level}</Badge>
              </div>
              <div className="flex items-center gap-2 text-white/60">
                <Clock className="w-3.5 h-3.5" />
                <span>Verified • 2024</span>
              </div>
           </div>
        </div>
      </div>

      {/* Tabs Layout */}
      <Tabs defaultValue="anamnesis" className="flex-1 flex flex-col w-full">
        {/* Sticky Tabs Navigation */}
        <div className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b">
          <div className="max-w-5xl mx-auto px-6 py-2">
            <TabsList className="bg-transparent p-0 rounded-none w-full justify-start overflow-x-auto no-scrollbar gap-8">
              {['intro', 'anamnesis', 'pemeriksaan', 'diagnosis', 'tatalaksana', 'followup'].map((val) => (
                <TabsTrigger 
                  key={val} 
                  value={val} 
                  className="rounded-none border-b-2 border-transparent data-[active]:border-primary data-[active]:bg-transparent px-1 py-4 text-xs font-bold uppercase tracking-widest"
                >
                  {val === 'intro' ? 'Overview' : val}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
        </div>

        <div className="max-w-5xl mx-auto w-full px-6 py-10 space-y-12">
            {/* Alerts - Global in detail page */}
            {disease.alerts && disease.alerts.length > 0 && (
              <div className="space-y-3">
                {disease.alerts.map((alert, i) => (
                  <div key={i} className={`p-4 rounded-2xl border-2 flex gap-4 ${
                    alert.type === 'danger' ? 'bg-destructive/5 border-destructive/10 text-destructive' :
                    alert.type === 'warn' ? 'bg-amber-500/10 border-amber-500/10 text-amber-900' :
                    'bg-emerald-500/10 border-emerald-500/10 text-emerald-900'
                  }`}>
                    <div className="flex-shrink-0 mt-0.5">
                      {alert.type === 'danger' ? <AlertTriangle className="w-5 h-5" /> : <Info className="w-5 h-5" />}
                    </div>
                    <p className="text-sm font-bold leading-relaxed">{alert.text}</p>
                  </div>
                ))}
              </div>
            )}

            <TabsContent value="intro" className="m-0 space-y-8 focus-visible:ring-0">
               <Card className="border-none shadow-none bg-muted/30 rounded-3xl overflow-hidden">
                  <CardContent className="p-8 md:p-10 relative">
                    <div className="absolute top-4 left-6 text-[10px] font-bold uppercase tracking-widest text-primary/40">Definisi Masalah</div>
                    <p className="text-xl md:text-2xl leading-relaxed text-foreground font-medium italic pt-4">"{disease.masalah}"</p>
                  </CardContent>
               </Card>

               {disease.overview && (
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   {disease.overview.etiologi && (
                     <div className="p-6 bg-background rounded-3xl border-2 border-primary/5 shadow-sm hover:border-primary/20 transition-colors">
                       <h4 className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest mb-4 text-primary">
                         <Star size={14} /> Etiologi & Penyebab
                       </h4>
                       <p className="text-sm font-medium leading-relaxed text-foreground/80">{disease.overview.etiologi}</p>
                     </div>
                   )}
                   {disease.overview.epidemiologi && (
                     <div className="p-6 bg-background rounded-3xl border-2 border-primary/5 shadow-sm hover:border-primary/20 transition-colors">
                       <h4 className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest mb-4 text-primary">
                         <Target size={14} /> Faktor Risiko
                       </h4>
                       <p className="text-sm font-medium leading-relaxed text-foreground/80">{disease.overview.epidemiologi}</p>
                     </div>
                   )}
                   {disease.overview.patofisiologi && (
                     <div className="p-6 bg-background rounded-3xl border-2 border-primary/5 shadow-sm hover:border-primary/20 transition-colors md:col-span-2">
                       <h4 className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest mb-4 text-primary">
                         <Activity size={14} /> Patofisiologi Singkat
                       </h4>
                       <p className="text-sm font-medium leading-relaxed text-foreground/80">{disease.overview.patofisiologi}</p>
                     </div>
                   )}
                   {disease.overview.komplikasi && disease.overview.komplikasi.length > 0 && (
                     <div className="p-6 bg-destructive/5 rounded-3xl border-2 border-destructive/10 shadow-sm md:col-span-2">
                       <h4 className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest mb-4 text-destructive">
                         <AlertTriangle size={14} /> Komplikasi Potensial
                       </h4>
                       <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                         {disease.overview.komplikasi.map((k, i) => (
                           <li key={i} className="text-sm font-bold text-destructive/80 flex items-start gap-2">
                             <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-destructive/50 shrink-0" />
                             <span className="leading-tight">{k}</span>
                           </li>
                         ))}
                       </ul>
                     </div>
                   )}
                 </div>
               )}

               {disease.peralatan && disease.peralatan.length > 0 && (
                 <div className="bg-background rounded-3xl p-6 md:p-8 border-2 border-dashed">
                    <h4 className="text-[10px] font-bold uppercase tracking-widest mb-6 opacity-40">Peralatan Pendukung FKTP</h4>
                    <div className="flex flex-wrap gap-2">
                       {disease.peralatan.map((p, i) => (
                         <Badge key={i} variant="secondary" className="px-4 py-2 rounded-xl text-xs font-bold">{p}</Badge>
                       ))}
                    </div>
                 </div>
               )}
            </TabsContent>

            <TabsContent value="anamnesis" className="m-0 space-y-6 focus-visible:ring-0">
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest mb-8 border-b pb-4 text-primary">Keluhan Utama & Riwayat</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {disease.anamnesis.map((item, i) => (
                      <div key={i} className="flex gap-4 items-start p-5 bg-muted/40 rounded-2xl text-sm group hover:bg-muted/60 transition-colors border border-transparent hover:border-border">
                        <CheckCircle2 className="w-5 h-5 mt-0.5 text-primary opacity-30 group-hover:opacity-100 transition-opacity" /> 
                        <span className="text-foreground leading-relaxed font-bold">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
            </TabsContent>

            <TabsContent value="pemeriksaan" className="m-0 space-y-16 focus-visible:ring-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                  <section>
                    <h4 className="text-[10px] font-bold uppercase tracking-widest mb-8 border-b pb-4 text-primary">Key Physical Findings</h4>
                    <div className="space-y-4">
                      {disease.fisik.map((item, i) => (
                        <div key={i} className="flex gap-4 items-start p-4 bg-background border-2 rounded-2xl text-sm shadow-sm">
                          <div className="w-6 h-6 rounded-lg bg-primary/10 flex-shrink-0 flex items-center justify-center text-[10px] font-bold text-primary">{i+1}</div>
                          <span className="text-foreground/80 leading-relaxed font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </section>
                  <section>
                    <h4 className="text-[10px] font-bold uppercase tracking-widest mb-8 border-b pb-4 text-primary">Pemeriksaan Penunjang</h4>
                    {disease.penunjangDetail && disease.penunjangDetail.length > 0 ? (
                      <div className="space-y-4">
                        {disease.penunjangDetail.map((item, i) => {
                           const { icon: Icon, color, bg } = getTestIconAndColor(item.nama);
                           return (
                           <div key={i} className="bg-muted/10 border-2 border-dashed border-primary/20 rounded-2xl overflow-hidden shadow-sm">
                             <div className="flex items-center gap-3 p-4 bg-background/50 border-b border-dashed">
                               <div className={`p-2 rounded-xl flex-shrink-0 ${bg}`}>
                                 <Icon size={16} className={color} />
                               </div>
                               <span className="text-sm font-bold text-foreground/90">{item.nama}</span>
                             </div>
                             <div className="px-5 py-4 text-sm leading-relaxed text-foreground/70 bg-muted/20">
                               <div className="text-[10px] font-bold uppercase tracking-widest mb-2 opacity-50">Rasionalisasi Klinis</div>
                               {item.rasionalisasi}
                             </div>
                           </div>
                           );
                        })}
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {disease.penunjang.map((item, i) => {
                          let title = item;
                          let desc = '';
                          if (item.includes(':')) {
                            const parts = item.split(':');
                            title = parts[0].trim();
                            desc = parts.slice(1).join(':').trim();
                          } else if (item.includes('→')) {
                            const parts = item.split('→');
                            title = parts[0].trim();
                            desc = parts.slice(1).join('→').trim();
                          } else if (item.includes(' - ')) {
                            const parts = item.split(' - ');
                            title = parts[0].trim();
                            desc = parts.slice(1).join(' - ').trim();
                          }

                          const { icon: Icon, color, bg } = getTestIconAndColor(title);
                          return (
                           <div key={i} className="bg-muted/10 border-2 border-dashed border-primary/20 rounded-2xl overflow-hidden shadow-sm">
                             <div className="flex items-center gap-3 p-4 bg-background/50 border-b border-dashed">
                               <div className={`p-2 rounded-xl flex-shrink-0 ${bg}`}>
                                 <Icon size={16} className={color} />
                               </div>
                               <span className="text-sm font-bold text-foreground/90">{title}</span>
                             </div>
                             {desc && (
                               <div className="px-5 py-4 text-sm leading-relaxed text-foreground/70 bg-muted/20">
                                 <div className="text-[10px] font-bold uppercase tracking-widest mb-2 opacity-50">Rasionalisasi Klinis</div>
                                 <span className="italic">{desc}</span>
                               </div>
                             )}
                           </div>
                          );
                        })}
                      </div>
                    )}
                  </section>
                </div>
            </TabsContent>

            <TabsContent value="diagnosis" className="m-0 focus-visible:ring-0">
               <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl">
                 <div className="lg:col-span-2 space-y-10">
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-primary border-b pb-4">Penegakan Diagnosis Kerja</h4>
                    <div className="space-y-6">
                      {disease.diagnosis.map((item, i) => (
                        <div key={i} className="text-2xl md:text-3xl font-black tracking-tighter leading-tight text-foreground border-l-[6px] border-primary pl-8 py-3">
                          {item}
                        </div>
                      ))}
                    </div>
                 </div>

                 {disease.diagnosisBanding && disease.diagnosisBanding.length > 0 && (
                   <div className="bg-muted/10 rounded-3xl p-8 border-2">
                      <h4 className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest mb-6 text-foreground/50">
                        <ListFilter size={14} /> Diagnosis Banding (DD)
                      </h4>
                      <ul className="space-y-3">
                        {disease.diagnosisBanding.map((dd, i) => (
                          <li key={i} className="text-sm font-semibold text-foreground/70 bg-background px-4 py-3 rounded-xl border border-primary/10 shadow-sm flex items-start gap-3">
                            <span className="opacity-40 select-none">DD.</span>
                            {dd}
                          </li>
                        ))}
                      </ul>
                   </div>
                 )}
               </div>
            </TabsContent>

            <TabsContent value="tatalaksana" className="m-0 space-y-12 focus-visible:ring-0">
                {disease.tatalaksanaDetail ? (
                  <div className="space-y-16">
                    {/* Non-Farmakologi Section */}
                    {disease.tatalaksanaDetail.nonFarmakologi && disease.tatalaksanaDetail.nonFarmakologi.length > 0 && (
                      <section>
                         <h4 className="text-[10px] font-bold uppercase tracking-widest text-primary mb-6 flex items-center gap-2">
                           <Target size={14} /> Terapi Non-Farmakologi / Tindakan Umum
                         </h4>
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                           {disease.tatalaksanaDetail.nonFarmakologi.map((item, i) => (
                             <div key={i} className="flex gap-4 items-center p-5 bg-muted/20 border-2 border-dashed rounded-3xl group hover:bg-background hover:border-primary transition-all shadow-sm">
                               <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">
                                 {i + 1}
                               </div>
                               <p className="text-sm font-bold text-foreground/80">{item}</p>
                             </div>
                           ))}
                         </div>
                      </section>
                    )}

                    {/* Farmakologi Section */}
                    {disease.tatalaksanaDetail.farmakologi.map((group, idx) => (
                      <section key={idx} className="space-y-6">
                        <div className="flex items-center gap-4">
                          <h4 className="text-[10px] font-bold uppercase tracking-widest text-primary whitespace-nowrap">{group.title}</h4>
                          <div className="h-px bg-primary/10 w-full" />
                        </div>
                        <div className="rounded-[2.5rem] border-2 shadow-xl shadow-primary/5 overflow-hidden bg-white">
                          <div className="block md:hidden divide-y">
                            {group.items.map((item, i) => (
                              <div key={i} className="p-6 space-y-4">
                                <div>
                                  <div className="text-lg font-bold text-foreground mb-2">{item.name}</div>
                                  {item.note && (
                                    <div className="text-xs text-primary font-bold bg-primary/5 border border-primary/10 w-fit px-3 py-1 rounded-full uppercase tracking-widest whitespace-normal">
                                      {item.note}
                                    </div>
                                  )}
                                </div>
                                <div className="flex justify-start">
                                  <span className="inline-block bg-primary text-white px-6 py-2.5 rounded-2xl text-lg font-black tracking-tighter shadow-lg shadow-primary/20">
                                    {item.dose}
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>
                          <div className="hidden md:block overflow-x-auto">
                            <table className="w-full text-left border-collapse min-w-[500px]">
                              <thead className="bg-muted/30 border-b">
                                <tr>
                                  <th className="px-8 py-6 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Medikasi & Note</th>
                                  <th className="px-8 py-6 text-[10px] font-bold uppercase tracking-widest text-muted-foreground text-right">Dosis & Regimen</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y">
                                {group.items.map((item, i) => (
                                  <tr key={i} className="hover:bg-muted/10 transition-colors">
                                    <td className="px-8 py-8 border-0">
                                      <div className="text-lg font-bold text-foreground mb-2">{item.name}</div>
                                      {item.note && (
                                        <div className="text-xs text-primary font-bold bg-primary/5 border border-primary/10 w-fit px-3 py-1 rounded-full uppercase tracking-widest">
                                          {item.note}
                                        </div>
                                      )}
                                    </td>
                                    <td className="px-8 py-8 text-right border-0">
                                      <span className="inline-block bg-primary text-white px-6 py-2.5 rounded-2xl text-lg font-black tracking-tighter shadow-lg shadow-primary/20">
                                        {item.dose}
                                      </span>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </section>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-10">
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-primary">Intervensi & Farmakoterapi Lini Pertama</h4>
                    <div className="rounded-[2.5rem] border-2 shadow-xl shadow-primary/5 overflow-hidden bg-white">
                      <div className="block md:hidden divide-y">
                        {disease.tatalaksana.map((item, i) => (
                          <div key={i} className="p-6 space-y-4">
                            <div>
                              <div className="text-lg font-bold text-foreground mb-1.5">{item.name}</div>
                              {item.note && <div className="text-xs text-muted-foreground italic bg-muted w-fit px-2 py-0.5 rounded-md">{item.note}</div>}
                            </div>
                            <div className="flex justify-start">
                              <span className="inline-block bg-primary/5 text-primary px-4 py-2 rounded-2xl text-lg font-black tracking-tight">{item.dose}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="hidden md:block overflow-x-auto">
                        <table className="w-full text-left border-collapse min-w-[500px]">
                          <thead className="bg-muted/50 border-b">
                            <tr>
                              <th className="px-8 py-6 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Medikasi & Note</th>
                              <th className="px-8 py-6 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground text-right">Dosis & Regimen</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y">
                            {disease.tatalaksana.map((item, i) => (
                              <tr key={i} className="hover:bg-muted/10 transition-colors">
                                <td className="px-8 py-8 border-0">
                                  <div className="text-lg font-bold text-foreground mb-1.5">{item.name}</div>
                                  {item.note && <div className="text-xs text-muted-foreground italic bg-muted w-fit px-2 py-0.5 rounded-md">{item.note}</div>}
                                </td>
                                <td className="px-8 py-8 text-right border-0">
                                  <span className="inline-block bg-primary/5 text-primary px-4 py-2 rounded-2xl text-lg font-black tracking-tight">{item.dose}</span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                )}

                <div className="mt-12 bg-muted/10 p-8 rounded-[2.5rem] border-2 border-dashed">
                   <MedicationManager diseaseId={disease.id} />
                </div>
            </TabsContent>

            <TabsContent value="followup" className="m-0 space-y-16 focus-visible:ring-0">
               <section>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest mb-10 text-primary">Panduan Edukasi & Konseling Pasien</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {disease.edukasi.map((item, i) => (
                      <div key={i} className="p-8 bg-background rounded-3xl shadow-sm border-2 flex flex-col gap-6 items-start group hover:border-primary transition-colors">
                        <div className="w-10 h-10 rounded-2xl bg-primary text-white flex items-center justify-center font-bold shadow-lg shadow-primary/20">
                          {i + 1}
                        </div>
                        <p className="text-sm font-bold text-foreground leading-relaxed italic">"{item}"</p>
                      </div>
                    ))}
                  </div>
               </section>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border rounded-[2.5rem] overflow-hidden border-2">
                  <div className="p-10 bg-background">
                    <h4 className="text-[10px] font-bold uppercase tracking-widest mb-8 text-primary">Kriteria Rujukan Lanjut</h4>
                    <ul className="space-y-4">
                      {disease.rujukan.map((item, i) => (
                        <li key={i} className="text-sm flex gap-3 p-4 bg-muted/40 rounded-2xl border border-transparent hover:border-border font-medium">
                          <AlertTriangle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-foreground/80 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-10 bg-muted/20">
                    <h4 className="text-[10px] font-bold uppercase tracking-widest mb-8 text-primary text-center">Prognosis Berdasarkan Kondisi</h4>
                    <div className="space-y-4">
                       {Object.entries(disease.prognosis).map(([key, val]) => (
                         <div key={key} className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-6 bg-background rounded-2xl border-2 shadow-sm group hover:scale-[1.02] transition-transform gap-4">
                            <span className="text-xs font-black uppercase opacity-60 min-w-24 shrink-0">Status {key}</span>
                            <Badge variant={val.toLowerCase().includes('bonam') ? 'default' : 'secondary'} className="px-4 py-2 sm:px-6 sm:py-1.5 rounded-xl sm:rounded-full uppercase font-black text-[10px] sm:text-xs tracking-tighter shadow-md text-center max-w-full leading-relaxed whitespace-normal h-auto w-full sm:w-auto">
                              {val}
                            </Badge>
                         </div>
                       ))}
                    </div>
                  </div>
               </div>
            </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
