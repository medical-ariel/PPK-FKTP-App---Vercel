import React, { useState, useMemo } from 'react';
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from './ui/card';
import { Badge } from './ui/badge';
import { ShieldAlert, BookOpen, Stethoscope, ChevronDown, Check } from 'lucide-react';
import { cn } from '../lib/utils';
import { Button } from './ui/button';

// We implement GCS inside ScoreTools, so I'll just export it
export function ScoreToolsExt() {
  const [eye, setEye] = useState(4);
  const [verbal, setVerbal] = useState(5);
  const [motor, setMotor] = useState(6);

  const gcsScore = eye + verbal + motor;
  const gcsResult = 
    gcsScore >= 14 ? { cat: 'Compos Mentis (Normal)', type: 'bg-green-500' } :
    gcsScore >= 12 ? { cat: 'Apatis', type: 'bg-yellow-500' } :
    gcsScore >= 10 ? { cat: 'Delirium', type: 'bg-orange-400' } :
    gcsScore >= 7  ? { cat: 'Somnolen', type: 'bg-orange-500' } :
    gcsScore >= 4  ? { cat: 'Stupor', type: 'bg-red-500' } :
                     { cat: 'Koma', type: 'bg-slate-900' };

  return (
    <>
      <Card className="rounded-[2rem] shadow-sm border-slate-100 overflow-hidden lg:col-span-2">
        <CardHeader className="p-6 bg-slate-50/50">
           <CardTitle className="text-lg font-black">Glasgow Coma Scale (GCS)</CardTitle>
           <CardDescription className="text-xs">Penilaian tingkat kesadaran secara kuantitatif.</CardDescription>
        </CardHeader>
        <CardContent className="p-6">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             <div className="space-y-3">
                <h4 className="text-xs font-black uppercase text-slate-500">Eye (Mata)</h4>
                {[
                  { v: 4, l: 'Buka mata spontan' },
                  { v: 3, l: 'Buka mata thd suara' },
                  { v: 2, l: 'Buka mata thd nyeri' },
                  { v: 1, l: 'Tidak ada respon' }
                ].map(o => (
                  <button key={o.v} onClick={() => setEye(o.v)} className={cn("w-full text-left p-3 rounded-xl border text-xs font-bold transition-colors", eye === o.v ? "bg-emerald-500 border-emerald-500 text-white" : "bg-white border-slate-100 text-slate-600 hover:border-slate-300")}>
                     E{o.v}: {o.l}
                  </button>
                ))}
             </div>
             <div className="space-y-3">
                <h4 className="text-xs font-black uppercase text-slate-500">Verbal (Suara)</h4>
                {[
                  { v: 5, l: 'Orientasi baik' },
                  { v: 4, l: 'Bingung (Confused)' },
                  { v: 3, l: 'Kata-kata tidak tepat' },
                  { v: 2, l: 'Suara tidak jelas (Mengerang)' },
                  { v: 1, l: 'Tidak ada respon' }
                ].map(o => (
                  <button key={o.v} onClick={() => setVerbal(o.v)} className={cn("w-full text-left p-3 rounded-xl border text-xs font-bold transition-colors", verbal === o.v ? "bg-blue-500 border-blue-500 text-white" : "bg-white border-slate-100 text-slate-600 hover:border-slate-300")}>
                     V{o.v}: {o.l}
                  </button>
                ))}
             </div>
             <div className="space-y-3">
                <h4 className="text-xs font-black uppercase text-slate-500">Motorik (Gerak)</h4>
                {[
                  { v: 6, l: 'Patuh pd perintah' },
                  { v: 5, l: 'Melokalisir nyeri' },
                  { v: 4, l: 'Menarik dari nyeri' },
                  { v: 3, l: 'Fleksi abnormal (Dekortikasi)' },
                  { v: 2, l: 'Ekstensi abnormal (Deserebrasi)' },
                  { v: 1, l: 'Tidak ada respon' }
                ].map(o => (
                  <button key={o.v} onClick={() => setMotor(o.v)} className={cn("w-full text-left p-3 rounded-xl border text-xs font-bold transition-colors", motor === o.v ? "bg-purple-500 border-purple-500 text-white" : "bg-white border-slate-100 text-slate-600 hover:border-slate-300")}>
                     M{o.v}: {o.l}
                  </button>
                ))}
             </div>
           </div>
           
           <div className="mt-8 p-6 bg-slate-900 rounded-2xl flex items-center justify-between text-white">
              <div>
                <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">GCS Total Score</div>
                <div className="text-3xl font-black">
                   E<span className="text-emerald-400">{eye}</span>
                   V<span className="text-blue-400">{verbal}</span>
                   M<span className="text-purple-400">{motor}</span>
                   <span className="ml-2 text-slate-500">({gcsScore})</span>
                </div>
              </div>
              <div className="text-right">
                <Badge className={cn("font-black shadow-none", gcsResult.type)}>{gcsResult.cat}</Badge>
              </div>
           </div>
        </CardContent>
      </Card>
    </>
  );
}

// Emergency tools update
export function EmergencyToolsExt() {
  const [weight, setWeight] = useState('');
  
  const epiDose = useMemo(() => {
     const w = parseFloat(weight);
     if (!w) return null;
     const dose = Math.min(w * 0.01, 0.5);
     return dose.toFixed(2);
  }, [weight]);

  const kejangDose = useMemo(() => {
     const w = parseFloat(weight);
     if (!w) return null;
     if (w < 10) return '5 mg';
     return '10 mg';
  }, [weight]);
  
  const d40Dose = useMemo(() => {
    const w = parseFloat(weight);
    if (!w) return null;
    return (w * 2.5).toFixed(1); // roughly 1/4 or 1/2 ml per kg mapping standard or we just use simple 2ml/kg of D10 or approx for D40. Rumus fk: 1/4 dari Dextrose... Let's use standard adult bolus 1 flakon (25 ml) or kids 2ml/kgBB D10%. Let's just output text depending on adult vs kid.
  }, [weight]);

  return (
    <div className="space-y-6">
      <Card className="rounded-[2.5rem] bg-red-500 border-none text-white overflow-hidden relative shadow-lg shadow-red-500/20">
        <div className="absolute top-0 right-0 w-48 h-48 bg-white/20 blur-3xl rounded-full" />
        <CardHeader className="p-8">
           <CardTitle className="flex items-center gap-3 text-2xl font-black"><ShieldAlert size={28}/> Manajeman Syok Anafilaktik</CardTitle>
           <CardDescription className="text-white/80 font-medium">Algoritma Penanganan Anafilaksis FKTP & Kalkulator Epinefrin IM</CardDescription>
        </CardHeader>
        <CardContent className="p-8 pt-0 space-y-6 relative z-10">
           <div className="bg-black/10 p-6 rounded-2xl border border-white/10 space-y-4">
              <div className="flex gap-4 items-center">
                 <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center shrink-0">1</div>
                 <p className="text-sm font-bold">Posisikan pasien rekumben (Trendelenburg) dengan kaki diangkat bila tidak sesak.</p>
              </div>
              <div className="flex gap-4 items-center">
                 <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center shrink-0">2</div>
                 <p className="text-sm font-bold">Injeksi Epinefrin (Adrenalin) 1:1.000 secara IM (Intramuskular) di Mid-Anterolateral Paha.</p>
              </div>
              <div className="flex gap-4 items-center">
                 <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center shrink-0">3</div>
                 <p className="text-sm font-bold">Berikan O2 Aliran tinggi (10-15 L/m) & pasang jalur IV (Cairan RL/NaCl loading cepat).</p>
              </div>
           </div>

           <div className="pt-4 border-t border-white/20">
             <label className="text-xs tracking-widest uppercase text-white/70 mb-3 block font-bold">Kalkulator Dosis Epinefrin (1 mg/mL / 1:1.000)</label>
             <div className="flex items-center gap-4">
               <input type="number" placeholder="BB (Kg)" value={weight} onChange={e=>setWeight(e.target.value)} className="w-32 bg-white/10 p-4 rounded-2xl text-xl font-black outline-none placeholder:text-white/40 focus:ring-2 ring-white" />
               
               {epiDose ? (
                  <div className="flex-1 bg-white p-4 justify-between items-center flex rounded-2xl">
                     <div>
                        <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">Dosis IM</div>
                        <div className="text-3xl font-black text-red-500">{epiDose} <span className="text-sm text-slate-400">mL</span></div>
                     </div>
                     <div className="text-right text-slate-500">
                        <div className="text-xs font-bold leading-tight">Ulangi 5-15 mnt prn.</div>
                        <div className="text-[10px] font-black uppercase text-red-400">(Max 0.5 mL)</div>
                     </div>
                  </div>
               ) : (
                  <div className="flex-1 p-4 border border-dashed border-white/30 rounded-2xl flex items-center justify-center text-white/50 text-xs font-bold uppercase tracking-widest">
                     Masukkan BB
                  </div>
               )}
             </div>
           </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         <Card className="rounded-[2rem] border-orange-200 bg-orange-50/50">
            <CardHeader>
               <CardTitle className="text-orange-800 flex items-center gap-2"><Stethoscope size={20}/> Tata Laksana Kejang</CardTitle>
               <CardDescription>Kejang Demam / Status Epileptikus</CardDescription>
            </CardHeader>
            <CardContent>
              {weight ? (
                 <div className="bg-white p-4 rounded-xl border border-orange-100 mb-4">
                    <p className="text-[10px] font-black uppercase text-orange-400 mb-1">Dosis Diazepam Rektal</p>
                    <p className="text-2xl font-black text-orange-600">{kejangDose}</p>
                 </div>
              ) : (
                 <p className="text-xs text-orange-600/70 mb-4 font-bold border-b border-orange-200 pb-4">Masukkan Berat Badan di kartu atas untuk melihat dosis otomatis rektal.</p>
              )}
               <ul className="space-y-2 text-xs text-orange-800 font-medium">
                  <li>• Berikan Diazepam Rektal Maksimal 2x dengan jarak 5 menit.</li>
                  <li>• Bila kejang (+) pasca rektal ke-2, berikan Diazepam IV 0.2 - 0.5 mg/kgBB (Kec. 2mg/mnt).</li>
                  <li>• Segera Rujuk jika kejang tidak berhenti.</li>
               </ul>
            </CardContent>
         </Card>

         <Card className="rounded-[2rem] border-blue-200 bg-blue-50/50">
            <CardHeader>
               <CardTitle className="text-blue-800 flex items-center gap-2"><Stethoscope size={20}/> Hipoglikemia</CardTitle>
               <CardDescription>GDS &lt; 70 mg/dL dg Gejala (Keringat dingin, takikardi, labil)</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
               <div>
                  <h4 className="text-[10px] font-black uppercase text-blue-500 mb-1">Dewasa (Bolus Dextrose 40%)</h4>
                  <p className="text-xs text-blue-800 font-bold bg-white p-3 rounded-xl border border-blue-100">
                     Rumus (3-2-1): <br/>
                     GDS &lt; 30 : Bolus D40% 50cc (2 flakon) <br/>
                     GDS 30 - 60 : Bolus D40% 25cc (1 flakon) <br/>
                     GDS 60 - 90 : Bolus D40% 25cc (bila gejala kuat)
                  </p>
               </div>
               <div>
                  <h4 className="text-[10px] font-black uppercase text-blue-500 mb-1">Anak & Bayi (Dextrose 10%)</h4>
                  <p className="text-xs text-blue-800 font-bold bg-white p-3 rounded-xl border border-blue-100">
                     Bolus D10% 2 mL/kgBB IV pelan.<br/>
                     Jangan gunakan D40% rutin pada anak karena iritasi vena (phlebitis).
                  </p>
               </div>
            </CardContent>
         </Card>
      </div>
    </div>
  );
}

export function GuidelineToolsExt() {
  const [openGuideline, setOpenGuideline] = useState<string | null>('HT');
  const toggle = (id: string) => setOpenGuideline(openGuideline === id ? null : id);

  const protocols = [
    {
      id: 'HT', title: 'Tatalaksana Hipertensi (JNC 8)',  category: 'Kardiovaskuler',
      content: (
        <div className="space-y-4 text-sm text-slate-600">
          <p><strong>Target Terapi Tekanan Darah:</strong></p>
          <ul className="list-disc pl-5 space-y-1">
             <li>Usia &lt; 60 thn atau dgn DM/CKD : <strong>&lt; 140/90 mmHg</strong></li>
             <li>Usia &ge; 60 thn tanpa DM/CKD : <strong>&lt; 150/90 mmHg</strong></li>
          </ul>
          <p><strong>Pilihan Obat Garis Pertama Lini-1:</strong></p>
          <ul className="list-disc pl-5 space-y-1">
             <li><strong>Non-Black:</strong> Thiazide, CCB (Amlodipine), ACEi (Captopril), or ARB (Candesartan).</li>
             <li><strong>Black:</strong> Thiazide or CCB.</li>
             <li><strong>CKD (Semua ras):</strong> ACEi atau ARB (Perlindungan ginjal).</li>
          </ul>
          <p className="text-xs bg-red-50 text-red-600 p-3 rounded-lg mt-2 border border-red-100">
             <strong>Peringatan PPI / ACEI + ARB:</strong> JANGAN mengkombinasikan ACE-I (misal Captopril) dengan ARB (misal Candesartan/Valsartan) secara bersamaan!
          </p>
        </div>
      )
    },
    {
      id: 'DM', title: 'Diabetes Mellitus Tipe 2 (PERKENI)', category: 'Endokrin',
      content: (
        <div className="space-y-4 text-sm text-slate-600">
           <p><strong>Pemeriksaan Diagnostic Awal:</strong></p>
           <ul className="list-disc pl-5 space-y-1">
              <li>GDP &ge; 126 mg/dL (Puasa min 8 jam)</li>
              <li>GDS &ge; 200 mg/dL + Gejala Klasik (Poliuria, Polidipsia, Polifagia)</li>
              <li>HbA1c &ge; 6.5%</li>
           </ul>
           <div className="overflow-hidden rounded-xl border border-slate-200 mt-2">
             <table className="w-full text-left text-xs">
                <thead className="bg-slate-50">
                   <tr>
                      <th className="p-2 border-b">HbA1c Awal</th>
                      <th className="p-2 border-b">Tatalaksana Utama</th>
                   </tr>
                </thead>
                <tbody className="divide-y">
                   <tr><td className="p-2">&lt; 7.5%</td><td className="p-2">Monoterapi (Metformin pilihan utama)</td></tr>
                   <tr><td className="p-2">7.5 - 9.0%</td><td className="p-2">Kombinasi 2 Obat (Metformin + Sulfonilurea)</td></tr>
                   <tr><td className="p-2">&gt; 9.0% dgn Gejala</td><td className="p-2">Insulin Basal +/- Obat Oral. Rujuk FKTRL.</td></tr>
                </tbody>
             </table>
           </div>
        </div>
      )
    },
    {
      id: 'ASTHMA', title: 'Asma Eksaserbasi Akut (GINA)', category: 'Respirasi',
      content: (
        <div className="space-y-4 text-sm text-slate-600">
           <p><strong>Triase Serangan Asma:</strong></p>
           <ul className="space-y-2">
             <li className="bg-green-50 p-3 rounded-lg border border-green-100">
               <strong className="text-green-800">Ringan - Sedang:</strong> Bisa bicara dalam kalimat. RR &lt; 30, Nadi &lt; 120.<br/>
               <em>Terapi:</em> SABA Inhalasi (Nebulisasi Salbutamol) 3 dosis dlm 1 jam pertama. Prednison Oral 40-50 mg (Anak: 1mg/kg).
             </li>
             <li className="bg-red-50 p-3 rounded-lg border border-red-100">
               <strong className="text-red-800">Berat:</strong> Bicara kata-per-kata. RR &gt; 30, Nadi &gt; 120, retraksi (+).<br/>
               <em>Terapi:</em> SABA + Ipratropium Bromide Nebulisasi. Kortikosteroid IV/Sistemik. Oksigen target SpO2 93-95%. <strong>RUJUK SEGERA.</strong>
             </li>
           </ul>
        </div>
      )
    }
  ];

  return (
    <Card className="rounded-[2.5rem] shadow-sm border-slate-100 overflow-hidden">
       <CardHeader className="bg-slate-50/80 p-8 border-b border-slate-100">
          <CardTitle className="text-xl font-black flex items-center gap-3"><BookOpen className="text-emerald-500" /> Panduan Klinis Praktis</CardTitle>
          <CardDescription>Rangkuman Pedoman Nasional Pelayanan Kedokteran (PNPK) & FKTP.</CardDescription>
       </CardHeader>
       <CardContent className="p-8">
          <div className="space-y-4">
             {protocols.map(p => (
               <div key={p.id} className="border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300">
                  <button 
                    onClick={() => toggle(p.id)}
                    className={cn(
                      "w-full flex items-center justify-between p-5 text-left transition-colors",
                      openGuideline === p.id ? "bg-emerald-50/50" : "hover:bg-slate-50"
                    )}
                  >
                     <div>
                        <Badge variant="outline" className="text-[9px] uppercase tracking-widest text-slate-400 mb-2 border-slate-200">{p.category}</Badge>
                        <h4 className="font-black text-slate-800">{p.title}</h4>
                     </div>
                     <div className={cn(
                        "w-8 h-8 rounded-full flex items-center justify-center transition-transform", 
                        openGuideline === p.id ? "bg-emerald-100 text-emerald-600 rotate-180" : "bg-slate-100 text-slate-400"
                     )}>
                        <ChevronDown size={16} />
                     </div>
                  </button>
                  {openGuideline === p.id && (
                     <div className="p-6 pt-2 bg-white border-t border-slate-100 animate-in slide-in-from-top-2">
                        {p.content}
                     </div>
                  )}
               </div>
             ))}
          </div>
       </CardContent>
    </Card>
  )
}
