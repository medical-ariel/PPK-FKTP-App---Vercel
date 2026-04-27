import React, { useState, useMemo } from 'react';
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from './ui/card';
import { Droplets, Calculator, Activity, HeartPulse, ShieldAlert, BadgeInfo } from 'lucide-react';
import { cn } from '../lib/utils';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

export function RenalTools() {
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [scr, setScr] = useState('');
  const [isFemale, setIsFemale] = useState(false);

  const egfr = useMemo(() => {
    const a = parseFloat(age);
    const w = parseFloat(weight);
    const s = parseFloat(scr);

    if (!a || !w || !s) return null;
    let val = ((140 - a) * w) / (72 * s);
    if (isFemale) val *= 0.85;
    
    let stage = '';
    let color = '';
    if (val >= 90) { stage = 'Stage 1 (Normal)'; color = 'text-emerald-500'; }
    else if (val >= 60) { stage = 'Stage 2 (Mild)'; color = 'text-green-500'; }
    else if (val >= 45) { stage = 'Stage 3a (Modereate)'; color = 'text-yellow-500'; }
    else if (val >= 30) { stage = 'Stage 3b (Moderate-Severe)'; color = 'text-orange-500'; }
    else if (val >= 15) { stage = 'Stage 4 (Severe)'; color = 'text-red-500'; }
    else { stage = 'Stage 5 (Kidney Failure)'; color = 'text-slate-900'; }

    return { value: val.toFixed(1), stage, color };
  }, [age, weight, scr, isFemale]);

  return (
    <Card className="rounded-[2.5rem] border-slate-100 shadow-sm">
       <CardHeader className="p-8">
          <CardTitle className="flex items-center gap-3"><Droplets className="text-blue-500" /> Cockcroft-Gault eGFR</CardTitle>
          <CardDescription>Estimasi fungsi ginjal untuk penyesuaian dosis obat.</CardDescription>
       </CardHeader>
       <CardContent className="p-8 pt-0 space-y-6">
          <div className="grid grid-cols-2 gap-4">
             <input type="number" placeholder="Umur (Thn)" value={age} onChange={e => setAge(e.target.value)} className="w-full text-lg p-3 bg-slate-50 border-transparent rounded-xl outline-none" />
             <input type="number" placeholder="Berat (Kg)" value={weight} onChange={e => setWeight(e.target.value)} className="w-full text-lg p-3 bg-slate-50 border-transparent rounded-xl outline-none" />
             <input type="number" placeholder="Scr (mg/dL)" value={scr} onChange={e => setScr(e.target.value)} className="w-full text-lg p-3 bg-slate-50 border-transparent rounded-xl outline-none" />
             <Button variant={isFemale ? 'default' : 'secondary'} className="h-auto p-3 rounded-xl" onClick={() => setIsFemale(!isFemale)}>
                {isFemale ? "Perempuan" : "Laki-laki (Klik Ubah)"}
             </Button>
          </div>
          {egfr && (
             <div className="bg-slate-900 p-6 rounded-3xl text-center text-white">
                <div className="text-xs uppercase tracking-widest text-slate-400 mb-2">eGFR (mL/min)</div>
                <div className="text-4xl font-black mb-2">{egfr.value}</div>
                <Badge className={cn("bg-white font-black", egfr.color)}>{egfr.stage}</Badge>
             </div>
          )}
       </CardContent>
    </Card>
  );
}

export function EmergencyTools() {
  const [weight, setWeight] = useState('');
  
  const epiDose = useMemo(() => {
     const w = parseFloat(weight);
     if (!w) return null;
     // 0.01 mg/kg IM max 0.5 mg
     const dose = Math.min(w * 0.01, 0.5);
     return dose.toFixed(2);
  }, [weight]);

  return (
    <div className="space-y-6">
      <Card className="rounded-[2.5rem] bg-red-500 border-none text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 blur-3xl rounded-full" />
        <CardHeader className="p-8">
           <CardTitle className="flex items-center gap-3"><ShieldAlert /> Anafilaksis (Epinefrin)</CardTitle>
           <CardDescription className="text-white/80">Kalkulator otomatis dosis Epinefrin IM (1:1000 atau 1mg/1ml).</CardDescription>
        </CardHeader>
        <CardContent className="p-8 pt-0 space-y-4">
           <div>
             <label className="text-xs tracking-widest uppercase text-white/70 mb-2 block">Berat Badan (Kg)</label>
             <input type="number" placeholder="Kg" value={weight} onChange={e=>setWeight(e.target.value)} className="w-32 bg-white/10 p-3 rounded-xl text-2xl font-black outline-none placeholder:text-white/30" />
           </div>
           {epiDose && (
              <div className="bg-slate-900 p-6 rounded-2xl flex items-center justify-between">
                 <div>
                    <div className="text-xs uppercase tracking-widest text-slate-400 mb-1">Dosis IM (1mg/mL)</div>
                    <div className="text-3xl font-black text-red-500">{epiDose} <span className="text-sm">mL</span></div>
                 </div>
                 <div className="text-xs text-slate-400 max-w-[120px] text-right">Maksimal 0.5 mL per suntikan.</div>
              </div>
           )}
        </CardContent>
      </Card>
    </div>
  );
}

// And score tools just return a placeholder for now to make sure UI does not crash
export function ScoreTools() {
  return <div className="p-10 text-center"><BadgeInfo className="mx-auto mb-2 text-slate-300" size={32}/>Fitur Kalkulator Skor Klinis (CURB-65, dll)</div>;
}

export function GuidelineTools() {
  return <div className="p-10 text-center"><BadgeInfo className="mx-auto mb-2 text-slate-300" size={32}/>Panduan Medis Faskes Tingkat 1</div>;
}
