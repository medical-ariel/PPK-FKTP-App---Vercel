import React, { useState, useMemo } from 'react';
import { 
  Calculator, 
  Table, 
  Baby, 
  Stethoscope, 
  Droplets, 
  Activity, 
  Calendar,
  ChevronRight,
  Info,
  Scale,
  Thermometer,
  Zap,
  Flame,
  ArrowRight,
  AlertCircle,
  AlertTriangle,
  Syringe,
  Clock,
  History,
  Brain,
  Search,
  X,
  ShieldAlert,
  BadgeInfo,
  Check,
  BookOpen,
  ChevronDown
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { cn } from '../lib/utils';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { DISEASES } from '../data/diseases';

interface MedicalToolsProps {
  onClose: () => void;
}

type ToolCategory = 'nutrition' | 'pregnancy' | 'pediatric' | 'renal' | 'scores' | 'guidelines' | 'drugs' | 'emergency';

export default function MedicalTools({ onClose }: MedicalToolsProps) {
  const [activeCat, setActiveCat] = useState<ToolCategory>('nutrition');

  return (
    <div className="flex flex-col h-full bg-slate-50/50">
      {/* Header */}
      <div className="p-6 bg-white border-b flex items-center justify-between shadow-sm z-10 transition-colors">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-emerald-500/20 translate-y-[-2px]">
            <Calculator size={24} />
          </div>
          <div>
            <div className="text-base font-black uppercase tracking-widest leading-tight text-slate-800">Alat Medis & Kalkulator</div>
            <div className="text-[10px] text-slate-400 font-bold flex items-center gap-1.5 uppercase tracking-wider mt-1">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full shadow-[0_0_5px_rgba(52,211,153,0.5)]" /> 
              FKTP Precision Toolkit v2.0
            </div>
          </div>
        </div>
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={onClose}
          className="rounded-xl hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-all"
        >
          <X size={20} />
        </Button>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Sub-Sidebar */}
        <aside className="w-20 md:w-[280px] bg-slate-50/50 border-r border-slate-200/60 overflow-y-auto hidden sm:block custom-scrollbar">
          <div className="p-4 md:p-6 space-y-8">
            {[
              {
                title: 'Alat & Kalkulator',
                items: [
                  { id: 'nutrition', icon: <Scale size={18} />, label: 'Gizi & IMT' },
                  { id: 'pregnancy', icon: <Calendar size={18} />, label: 'Obsgin & HPL' },
                  { id: 'pediatric', icon: <Baby size={18} />, label: 'Dosis Anak' },
                  { id: 'renal', icon: <Droplets size={18} />, label: 'Renal & eGFR' },
                ]
              },
              {
                title: 'Keputusan Klinis',
                items: [
                  { id: 'scores', icon: <Activity size={18} />, label: 'Skoring Klinis' },
                  { id: 'emergency', icon: <Flame size={18} />, label: 'Kegawatdaruratan' },
                ]
              },
              {
                title: 'Pustaka Medis',
                items: [
                  { id: 'guidelines', icon: <Stethoscope size={18} />, label: 'Panduan Dosis' },
                  { id: 'drugs', icon: <Table size={18} />, label: 'Formularium FKTP' },
                ]
              }
            ].map((group, idx) => (
              <div key={idx} className="space-y-3">
                <h4 className="hidden md:block pl-2 text-[10px] font-black tracking-[0.2em] uppercase text-slate-400">
                  {group.title}
                </h4>
                <div className="space-y-1">
                  {group.items.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCat(cat.id as ToolCategory)}
                      className={cn(
                        "w-full flex flex-col md:flex-row items-center gap-3 p-3 md:px-4 md:py-3 rounded-2xl transition-all group",
                        activeCat === cat.id 
                          ? "bg-white text-slate-900 shadow-md shadow-slate-200/50 ring-1 ring-slate-200/50" 
                          : "text-slate-500 hover:bg-slate-200/50 hover:text-slate-700"
                      )}
                    >
                      <div className={cn(
                        "shrink-0 transition-all",
                        activeCat === cat.id 
                          ? "text-emerald-500 scale-110 drop-shadow-sm" 
                          : "text-slate-400 group-hover:scale-110 group-hover:text-slate-500"
                      )}>
                        {cat.icon}
                      </div>
                      <span className={cn(
                        "hidden md:block text-xs uppercase tracking-widest transition-all",
                        activeCat === cat.id ? "font-black" : "font-bold"
                      )}>
                        {cat.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </aside>

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto p-6 md:p-10 custom-scrollbar">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCat}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {activeCat === 'nutrition' && <NutritionTools />}
              {activeCat === 'pregnancy' && <PregnancyTools />}
              {activeCat === 'pediatric' && <PediatricTools />}
              {activeCat === 'renal' && <RenalTools />}
              {activeCat === 'scores' && <ScoreToolsExt />}
              {activeCat === 'emergency' && <EmergencyToolsExt />}
              {activeCat === 'guidelines' && <GuidelineToolsExt />}
              {activeCat === 'drugs' && <DrugRegistry />}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}

function DrugRegistry() {
  const [search, setSearch] = useState('');
  const [filterCat, setFilterCat] = useState('All');
  const [expandedDrug, setExpandedDrug] = useState<string | null>(null);

  const drugs = [
    // Hipertensi & Jantung
    { name: 'Amlodipine', dose: '5 mg, 10 mg', usage: '1 x 1 (Pagi)', cat: 'Hipertensi & Jantung', note: 'Calcium Channel Blocker (CCB). Lini 1.' },
    { name: 'Candesartan', dose: '8 mg, 16 mg', usage: '1 x 1 (Malam)', cat: 'Hipertensi & Jantung', note: 'Angiotensin Receptor Blocker (ARB).' },
    { name: 'Captopril', dose: '12.5 mg, 25 mg', usage: '2-3 x 1 (1 Jam ac)', cat: 'Hipertensi & Jantung', note: 'ACE Inhibitor. Risiko batuk kering.' },
    { name: 'HCT', dose: '25 mg', usage: '1 x 0.5 - 1 (Pagi)', cat: 'Hipertensi & Jantung', note: 'Tiazid Diuretik. Perhatian elektrolit.' },
    { name: 'Nifedipine OROS', dose: '30 mg', usage: '1 x 1 (Pagi)', cat: 'Hipertensi & Jantung', note: 'Long-acting CCB.' },
    { name: 'Bisoprolol', dose: '2.5 mg, 5 mg', usage: '1 x 1 (Pagi)', cat: 'Hipertensi & Jantung', note: 'Beta Blocker kardioselektif. Baik untuk CHF.' },
    { name: 'Isosorbide Dinitrate (ISDN)', dose: '5 mg', usage: '3 x 1 (prn / sublingual)', cat: 'Hipertensi & Jantung', note: 'Angina pektoris, vasodilator.' },
    { name: 'Furosemide', dose: '40 mg', usage: '1 x 1 (Pagi)', cat: 'Hipertensi & Jantung', note: 'Loop diuretik. Untuk edema hepar/ginjal/jantung.' },
    { name: 'Spironolactone', dose: '25 mg, 100 mg', usage: '1 x 1', cat: 'Hipertensi & Jantung', note: 'Potassium-sparing diuretik.' },
    { name: 'Clopidogrel', dose: '75 mg', usage: '1 x 1', cat: 'Hipertensi & Jantung', note: 'Antiplatelet. Pencegahan sekunder aterotrombosis.' },
    { name: 'Aspirin (Mini-aspi)', dose: '80 mg', usage: '1 x 1 (PC)', cat: 'Hipertensi & Jantung', note: 'Antiplatelet. Risiko iritasi lambung.' },
    
    // Diabetes, Kolesterol & Endokrin
    { name: 'Metformin', dose: '500 mg', usage: '2-3 x 1 (Bersama makan)', cat: 'Endokrin & Metabolik', note: 'Biguanid. Lini 1 DM tipe 2.' },
    { name: 'Glimepiride', dose: '1 mg, 2 mg, 3 mg', usage: '1 x 1 (ac porsi 1)', cat: 'Endokrin & Metabolik', note: 'Sulfonilurea (Generasi 3).' },
    { name: 'Glibenclamide', dose: '5 mg', usage: '1-2 x 1 (ac)', cat: 'Endokrin & Metabolik', note: 'Sulfonilurea (Generasi lama). Risiko hipoglikemia sangat tinggi.' },
    { name: 'Acarbose', dose: '50 mg, 100 mg', usage: '3 x 1 (Suapan pertama)', cat: 'Endokrin & Metabolik', note: 'Penghambat alpha-glukosidase.' },
    { name: 'Gliclazide', dose: '80 mg', usage: '1-2 x 1 (ac)', cat: 'Endokrin & Metabolik', note: 'Sulfonilurea Generasi 2.' },
    { name: 'Simvastatin', dose: '10 mg, 20 mg', usage: '1 x 1 (Malam)', cat: 'Endokrin & Metabolik', note: 'Statin.' },
    { name: 'Atorvastatin', dose: '10 mg, 20 mg', usage: '1 x 1 (Kapan saja)', cat: 'Endokrin & Metabolik', note: 'Statin long-acting.' },
    { name: 'Gemfibrozil', dose: '300 mg, 600 mg', usage: '2 x 1 (30 menit ac)', cat: 'Endokrin & Metabolik', note: 'Fibrat. Hipertrigliseridemia.' },
    { name: 'Allopurinol', dose: '100 mg, 300 mg', usage: '1 x 1 (pc)', cat: 'Endokrin & Metabolik', note: 'Xanthine Oxidase Inhibitor. Jangan mula saat akut.' },
    { name: 'Propylthiouracil (PTU)', dose: '100 mg', usage: 'Titrasi', cat: 'Endokrin & Metabolik', note: 'Hipertiroid. Bisa toksik pada gijal (rujuk).' },

    // Lambung & Digestif
    { name: 'Omeprazole', dose: '20 mg', usage: '1-2 x 1 (ac)', cat: 'Gastrointestinal', note: 'Proton Pump Inhibitor (PPI).' },
    { name: 'Lansoprazole', dose: '30 mg', usage: '1 x 1 (ac)', cat: 'Gastrointestinal', note: 'PPI. Efek lebih long-acting.' },
    { name: 'Sucralfate', dose: '500 mg/5 ml', usage: '4 x 10 ml (ac)', cat: 'Gastrointestinal', note: 'Muco-protectant.' },
    { name: 'Antasida Doen', dose: 'Tablet / Syrup', usage: '3-4 x 1 (ac)', cat: 'Gastrointestinal', note: 'Netralisir asam lambung segera.' },
    { name: 'Domperidone', dose: '10 mg / 5 mg/5ml', usage: '3 x 1 (ac)', cat: 'Gastrointestinal', note: 'Prokinetik & Anti-emetic.' },
    { name: 'Loperamide', dose: '2 mg', usage: 'Maks 16mg/hari', cat: 'Gastrointestinal', note: 'Antimotilitas diare (hanya u/ non-disentri).' },
    { name: 'Hyoscine Butylbromide', dose: '10 mg', usage: '3-4 x 1', cat: 'Gastrointestinal', note: 'Antispasmodik (kram perut).' },

    // Analgetik & Kortikosteroid
    { name: 'Paracetamol', dose: '500 mg', usage: '3-4 x 1 (prn)', cat: 'Analgetik & Steroid', note: 'Antipiretik & Analgetik Lini 1.' },
    { name: 'Ibuprofen', dose: '200 mg, 400 mg', usage: '3 x 1 (pc)', cat: 'Analgetik & Steroid', note: 'NSAID. Hati-hati gastritis.' },
    { name: 'Asam Mefenamat', dose: '500 mg', usage: '3 x 1 (pc)', cat: 'Analgetik & Steroid', note: 'NSAID (disminore, nyeri gigi).' },
    { name: 'Natrium Diklofenak', dose: '25 mg, 50 mg', usage: '2-3 x 1 (pc)', cat: 'Analgetik & Steroid', note: 'NSAID kuat u/ OA/Rheumatoid.' },
    { name: 'Dexamethasone', dose: '0.5 mg', usage: '2-3 x 1 (pc)', cat: 'Analgetik & Steroid', note: 'Kortikosteroid sistemik kuat.' },
    { name: 'Prednisone', dose: '5 mg', usage: 'Titrasi/Tapering', cat: 'Analgetik & Steroid', note: 'Kortikosteroid sistemik sedang (mis: alergi berat).' },

    // Antibiotik & Anti-infeksi Lain
    { name: 'Amoxicillin', dose: '500 mg', usage: '3 x 1', cat: 'Antibiotik & Infeksi', note: 'Penisilin Broad Spectrum.' },
    { name: 'Cefadroxil', dose: '500 mg', usage: '2 x 1', cat: 'Antibiotik & Infeksi', note: 'Sefalosporin Gen 1. Kulit/Jar Lunak.' },
    { name: 'Cefixime', dose: '100 mg, 200 mg', usage: '2 x 1', cat: 'Antibiotik & Infeksi', note: 'Sefalosporin Gen 3. ISK, tifoid non-komplikata.' },
    { name: 'Ciprofloxacin', dose: '500 mg', usage: '2 x 1', cat: 'Antibiotik & Infeksi', note: 'Kuinolon. Lini 1 ISK dewasa.' },
    { name: 'Azithromycin', dose: '500 mg', usage: '1 x 1 (Hari 1), dst', cat: 'Antibiotik & Infeksi', note: 'Makrolid (Atipikal pneumoni, ISPA).' },
    { name: 'Metronidazole', dose: '250 mg, 500 mg', usage: '3 x 1', cat: 'Antibiotik & Infeksi', note: 'Anti-amuba & anaerob. Hindari alkohol.' },
    { name: 'Cotrimoxazole', dose: '480 mg, 960 mg', usage: '2 x 1', cat: 'Antibiotik & Infeksi', note: 'Sulfa. Perhatian SJS allergy.' },
    { name: 'Acyclovir', dose: '200 mg, 400 mg', usage: '5 x 1', cat: 'Antibiotik & Infeksi', note: 'Antivirus u/ Herpes Simplex / Zoster.' },
    { name: 'Albendazole', dose: '400 mg', usage: 'Single dose', cat: 'Antibiotik & Infeksi', note: 'Antelmintik (cacingan). Tidak u/ ibu hamil tri-1.' },

    // Respirasi & Alergi
    { name: 'Salbutamol', dose: '2 mg, 4 mg', usage: '3 x 1 (prn)', cat: 'Respirasi & Alergi', note: 'SABA inhalasi oral (Asma).' },
    { name: 'Ambroxol', dose: '30 mg', usage: '3 x 1', cat: 'Respirasi & Alergi', note: 'Mukolitik.' },
    { name: 'GG (Guaifenesin)', dose: '100 mg', usage: '3 x 1', cat: 'Respirasi & Alergi', note: 'Ekspektoran.' },
    { name: 'Cetirizine', dose: '10 mg', usage: '1 x 1 (Malam)', cat: 'Respirasi & Alergi', note: 'Antihistamin Gen 2. Ringan sedasi.' },
    { name: 'Loratadine', dose: '10 mg', usage: '1 x 1', cat: 'Respirasi & Alergi', note: 'Antihistamin Gen 2. Non-sedasi.' },
    { name: 'CTM', dose: '4 mg', usage: '3 x 1', cat: 'Respirasi & Alergi', note: 'Antihistamin Gen 1. Sangat mengantuk.' },

    // Psikiatri & Saraf
    { name: 'Haloperidol', dose: '0.5 mg, 1.5 mg, 5 mg', usage: '2 x 1.5 - 5 mg', cat: 'Psikiatri & Saraf', note: 'Antipsikotik tipikal. Waspada EPS.' },
    { name: 'Risperidone', dose: '1 mg, 2 mg', usage: '2 x 2 mg', cat: 'Psikiatri & Saraf', note: 'Antipsikotik atipikal.' },
    { name: 'Diazepam', dose: '2 mg, 5 mg', usage: '1-2 x 1 (prn)', cat: 'Psikiatri & Saraf', note: 'Psikotropika. Kontrol ketat.' },
    { name: 'Amitriptyline', dose: '25 mg', usage: '1 x 1 (Malam)', cat: 'Psikiatri & Saraf', note: 'TCA u/ nyeri neuropatik / depresi mnr.' },
    { name: 'Betahistine Mesylate', dose: '6 mg', usage: '3 x 1', cat: 'Psikiatri & Saraf', note: 'Anti-vertigo sentral / perifer.' },

    // Kulit, Mata, Obsgin, Bedah Minor
    { name: 'Ketoconazole', dose: 'Krim 2% / Tab 200mg', usage: '2 x 1', cat: 'Spesialistik FKTP', note: 'Anti-jamur.' },
    { name: 'Hydrocortisone', dose: 'Krim 1%, 2.5%', usage: '2-3 x 1 (Oles)', cat: 'Spesialistik FKTP', note: 'Kortikosteroid topikal ringan.' },
    { name: 'Permethrin 5%', dose: 'Cream', usage: '1 x Oles (Night)', cat: 'Spesialistik FKTP', note: 'Skabies (diamkan 8-12 jam).' },
    { name: 'Mupirocin', dose: 'Cream 2%', usage: '3 x 1 (Oles)', cat: 'Spesialistik FKTP', note: 'Antibiotik topikal (Impetigo).' },
    { name: 'Chloramphenicol', dose: 'Eye / Ear Drops', usage: '3-4 x 1 (Tetes)', cat: 'Spesialistik FKTP', note: 'Antibiotik lokal.' },
    { name: 'Epinephrine', dose: '1 mg / ml', usage: '0.3-0.5 ml IM', cat: 'Spesialistik FKTP', note: 'Lini 1 Anafilaksis (Mid-outer thigh).' },
    { name: 'Lidocaine 2%', dose: 'Ampul / Vial', usage: 'Infiltrasi', cat: 'Spesialistik FKTP', note: 'Anestesi lokal.' },

    // Program TB (OAT)
    { name: 'OAT Kat 1 (FDC)', dose: 'Tablet (RHZE)', usage: '1 x Dosis (ac)', cat: 'Program TB', note: '2HRZE/4H3R3. Perut kosong (pagi).' },
    { name: 'OAT Kat 2 (FDC)', dose: 'Tablet (+ Inj S)', usage: '1 x Dosis (ac)', cat: 'Program TB', note: 'Kasus kambuh.' },
    { name: 'OAT Anak (FDC)', dose: 'Tablet Dispersible', usage: '1 x Dosis (ac)', cat: 'Program TB', note: 'Dosis disesuaikan tabel BB program.' },
    { name: 'Rifampisin', dose: '300 mg, 450 mg', usage: '1 x day (ac)', cat: 'Program TB', note: 'Urin kemerahan (Edukasi).' },
    { name: 'Isoniazid (INH)', dose: '100 mg, 300 mg', usage: '1 x day (ac)', cat: 'Program TB', note: 'Berikan Vit B6 u/ cegah neuropati.' },

    // Vitamin & Suplemen
    { name: 'Vitamin B-Complex', dose: 'Tablet', usage: '1-2 x 1', cat: 'Suplemen & Vitamin', note: 'Neurotropik.' },
    { name: 'Vitamin C', dose: '50 mg, 250 mg, 500 mg', usage: '1 x 1', cat: 'Suplemen & Vitamin', note: 'Antioksidan.' },
    { name: 'Tablet Tambah Darah (Fe)', dose: 'Tablet', usage: '1 x 1 (Malam)', cat: 'Suplemen & Vitamin', note: 'Pencegahan anemia (Feses hitam).' },
  ];

  const categories = ['All', ...new Set(drugs.map(d => d.cat))];

  const handleGenerateRx = (drug: any) => {
    const rx = `R/ ${drug.name} ${drug.dose} No. X\nS. ${drug.usage} pc`;
    navigator.clipboard.writeText(rx);
    // Removed alert to avoid iframe restriction issues; assume UI handles notification
    console.log(`Format resep disalin: ${rx}`);
  };

  const handleViewMonograph = (drug: any) => {
    // Basic implementation placeholder
    console.log(`Viewing monograph for: ${drug.name}`);
    alert(`Monograf untuk ${drug.name}: ${drug.note || 'Informasi tidak tersedia.'}`);
  };

  const filtered = drugs.filter(d => {
    const matchesSearch = d.name.toLowerCase().includes(search.toLowerCase()) || 
                          d.cat.toLowerCase().includes(search.toLowerCase()) ||
                          d.note.toLowerCase().includes(search.toLowerCase());
    const matchesCat = filterCat === 'All' || d.cat === filterCat;
    return matchesSearch && matchesCat;
  });

  return (
    <div className="space-y-6">
      {/* High Density Filter & Search */}
      <div className="bg-white p-4 rounded-3xl border border-slate-100 shadow-sm space-y-4">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
          <input 
            type="text"
            placeholder="Cari obat, kategori, or indikasi..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-slate-50/50 border-none rounded-xl py-3 pl-12 pr-6 text-sm font-medium focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
          />
        </div>
        <div className="flex gap-1.5 overflow-x-auto pb-1 no-scrollbar">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilterCat(cat)}
              className={cn(
                "px-4 py-2 rounded-lg text-[9px] font-black uppercase tracking-widest whitespace-nowrap transition-all",
                filterCat === cat 
                  ? "bg-slate-900 text-white shadow-md shadow-black/5" 
                  : "bg-slate-50 text-slate-500 hover:bg-slate-100"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Main Registry List */}
      <Card className="rounded-[2rem] border-slate-100 shadow-xl shadow-black/[0.02] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="bg-slate-50/80 border-b border-slate-100">
                <th className="p-5 text-[10px] font-black uppercase tracking-widest text-slate-400 w-12">#</th>
                <th className="p-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Nama Generik</th>
                <th className="p-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Kategori</th>
                <th className="p-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Sediaan</th>
                <th className="p-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Dosis / Pakai</th>
                <th className="p-5 text-[10px] font-black uppercase tracking-widest text-slate-400 text-right">Info</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              <AnimatePresence mode="popLayout">
                {filtered.map((drug, idx) => (
                  <React.Fragment key={drug.name}>
                    <motion.tr
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className={cn(
                        "group hover:bg-slate-50/50 transition-colors cursor-pointer",
                        expandedDrug === drug.name && "bg-emerald-50/30"
                      )}
                      onClick={() => setExpandedDrug(expandedDrug === drug.name ? null : drug.name)}
                    >
                      <td className="p-5 text-[10px] font-bold text-slate-300 font-mono">{(idx + 1).toString().padStart(2, '0')}</td>
                      <td className="p-5">
                        <div className="text-sm font-black text-slate-800 group-hover:text-emerald-600 transition-colors">{drug.name}</div>
                      </td>
                      <td className="p-5">
                        <Badge variant="outline" className="text-[8px] font-black uppercase tracking-tighter bg-white/50 text-slate-500 border-slate-200">
                          {drug.cat}
                        </Badge>
                      </td>
                      <td className="p-5 text-xs text-slate-500 font-medium">{drug.dose}</td>
                      <td className="p-5">
                        <div className="flex items-center gap-2">
                          <Clock size={12} className="text-slate-300" />
                          <span className="text-[11px] font-black text-slate-700">{drug.usage}</span>
                        </div>
                      </td>
                      <td className="p-5 text-right">
                        <div className={cn(
                          "inline-flex items-center justify-center w-6 h-6 rounded-lg transition-all",
                          expandedDrug === drug.name ? "bg-slate-900 text-white rotate-180" : "bg-slate-50 text-slate-300 group-hover:bg-slate-100"
                        )}>
                          <ChevronRight size={14} />
                        </div>
                      </td>
                    </motion.tr>
                    
                    {expandedDrug === drug.name && (
                      <motion.tr
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="bg-slate-50/50"
                      >
                        <td colSpan={6} className="p-0">
                           <div className="p-6 pt-0 ml-12 mr-12 space-y-3">
                              <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm relative overflow-hidden">
                                 <div className="absolute top-0 right-0 w-32 h-full bg-emerald-500/5 rotate-12 translate-x-12 translate-y-4" />
                                 <div className="text-[9px] font-black uppercase tracking-widest text-emerald-600 mb-2 flex items-center gap-2">
                                    <Info size={12} />
                                    Clinical Insight & Warning
                                 </div>
                                 <p className="text-xs text-slate-600 font-medium leading-relaxed italic pr-12">
                                    "{drug.note}"
                                 </p>
                              </div>
                              <div className="flex justify-end gap-2">
                                <Button 
                                  variant="ghost" 
                                  className="h-7 text-[8px] font-black uppercase tracking-widest text-emerald-600 hover:bg-emerald-50"
                                  onClick={(e) => { e.stopPropagation(); handleGenerateRx(drug); }}
                                >
                                  <Zap size={10} className="mr-1" />
                                  Generate Rx Format
                                </Button>
                                <Button 
                                  variant="ghost" 
                                  className="h-7 text-[8px] font-black uppercase tracking-widest text-slate-400 hover:text-emerald-600"
                                  onClick={(e) => { e.stopPropagation(); handleViewMonograph(drug); }}
                                >
                                  Lihat Monografi
                                </Button>
                              </div>
                           </div>
                        </td>
                      </motion.tr>
                    )}
                  </React.Fragment>
                ))}
              </AnimatePresence>
            </tbody>
          </table>
        </div>
      </Card>

      {/* Footer Info */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 bg-slate-100/50 rounded-3xl border border-slate-200/50 border-dashed">
         <div className="flex items-center gap-3">
           <Zap size={16} className="text-amber-500" />
           <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Database terintegrasi dengan PPK FKTP Standard 2026</p>
         </div>
         <Button 
            variant="default" 
            className="rounded-xl h-10 px-6 text-[10px] font-black uppercase tracking-widest shadow-lg shadow-slate-900/10"
            onClick={() => window.print()}
          >
           Export Formularium (PDF)
         </Button>
      </div>

      {filtered.length === 0 && (
        <div className="py-20 text-center flex flex-col items-center opacity-30">
          <Search size={48} className="mb-4 text-slate-300" />
          <h3 className="text-lg font-bold">Data tidak ditemukan</h3>
          <p className="text-sm">Coba kata kunci or filter kategori yang berbeda.</p>
        </div>
      )}
    </div>
  );
}



function NutritionTools() {
  const [weight, setWeight] = useState<string>('');
  const [height, setHeight] = useState<string>('');

  const bmiData = useMemo(() => {
    const w = parseFloat(weight);
    const h = parseFloat(height) / 100;
    if (isNaN(w) || isNaN(h) || h <= 0) return null;
    
    const bmi = w / (h * h);
    
    let statusAsia = '';
    let colorAsia = '';
    
    if (bmi < 18.5) { statusAsia = 'Sangat Kurus (Underweight)'; colorAsia = 'text-blue-500'; }
    else if (bmi < 23) { statusAsia = 'Normal'; colorAsia = 'text-green-500'; }
    else if (bmi < 25) { statusAsia = 'Overweight (At Risk)'; colorAsia = 'text-yellow-500'; }
    else if (bmi < 30) { statusAsia = 'Obesitas I'; colorAsia = 'text-orange-500'; }
    else { statusAsia = 'Obesitas II'; colorAsia = 'text-red-500'; }

    return { bmi: bmi.toFixed(1), statusAsia, colorAsia };
  }, [weight, height]);

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="rounded-[2.5rem] shadow-xl shadow-black/[0.02] border-slate-100 overflow-hidden">
          <CardHeader className="bg-slate-50/50 p-8">
            <CardTitle className="text-xl font-black tracking-tight flex items-center gap-3">
              <Scale className="text-emerald-500" /> Kalkulator IMT
            </CardTitle>
            <CardDescription className="text-xs font-medium">Standard Asia-Pasifik (Kemenkes RI)</CardDescription>
          </CardHeader>
          <CardContent className="p-8 space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Berat Badan (kg)</label>
                <input 
                  type="number" 
                  value={weight} 
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder="00"
                  className="w-full text-2xl font-black p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-emerald-200 focus:bg-white outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Tinggi Badan (cm)</label>
                <input 
                  type="number" 
                  value={height} 
                  onChange={(e) => setHeight(e.target.value)}
                  placeholder="000"
                  className="w-full text-2xl font-black p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-emerald-200 focus:bg-white outline-none transition-all"
                />
              </div>
            </div>

            {bmiData ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-slate-900 rounded-3xl p-8 text-center relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 mb-2">Index Massa Tubuh</div>
                <div className="text-6xl font-black text-white mb-4 tracking-tighter">
                  {bmiData.bmi}
                </div>
                <div className={cn("text-sm font-black uppercase tracking-widest px-4 py-2 bg-white/5 rounded-full inline-block", bmiData.colorAsia)}>
                  {bmiData.statusAsia}
                </div>
              </motion.div>
            ) : (
              <div className="p-8 border-2 border-dashed border-slate-100 rounded-3xl text-center text-slate-300">
                <p className="text-xs font-bold uppercase tracking-widest">Masukkan Data Antropometri</p>
              </div>
            )}
          </CardContent>
        </Card>

        <Card className="rounded-[2.5rem] shadow-xl shadow-black/[0.02] border-slate-100">
          <CardHeader className="p-8">
            <CardTitle className="text-lg font-black tracking-tight">Referensi Klasifikasi Asian</CardTitle>
          </CardHeader>
          <CardContent className="px-8 pb-8">
            <div className="space-y-2">
              {[
                { range: '< 18.5', label: 'Underweight', color: 'bg-blue-500' },
                { range: '18.5 - 22.9', label: 'Normal Weight', color: 'bg-green-500' },
                { range: '23.0 - 24.9', label: 'Overweight (At Risk)', color: 'bg-yellow-500' },
                { range: '25.0 - 29.9', label: 'Obese Class I', color: 'bg-orange-500' },
                { range: '≥ 30.0', label: 'Obese Class II', color: 'bg-red-500' },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between p-3 rounded-xl bg-slate-50/50">
                  <div className="flex items-center gap-3">
                    <div className={cn("w-2 h-2 rounded-full", item.color)} />
                    <span className="text-[11px] font-bold text-slate-700">{item.label}</span>
                  </div>
                  <span className="text-[11px] font-black font-mono text-slate-400">{item.range}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Separator />

      <section className="space-y-6">
        <h3 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 flex items-center gap-3 px-2">
          <Table size={14} /> Interpretasi Antropometri Anak
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { id: 'bbu', title: 'BB / U (Berat Badan menurut Umur)', desc: 'Menilai Berat Badan anak saat ini tanpa membedakan kurus/pendek.', tags: ['Gizi Kurang', 'Gizi Buruk', 'Berat Lebih'] },
            { id: 'tbu', title: 'PB-TB / U (Panjang-Tinggi menurut Umur)', desc: 'Mengidentifikasi anak yang pendek (stunting) or sangat pendek.', tags: ['Sangat Pendek', 'Pendek', 'Normal'] },
            { id: 'bbtb', title: 'BB / PB-TB (Berat menurut Tinggi)', desc: 'Indikator status gizi saat ini (akut). Menentukan WASTING.', tags: ['Gizi Buruk', 'Gizi Kurang', 'Gizi Baik'] },
          ].map((inf) => (
            <Card key={inf.id} className="rounded-3xl border-slate-100 hover:border-emerald-100 transition-all group overflow-hidden">
               <div className="p-6">
                  <h4 className="text-xs font-black text-slate-800 leading-snug mb-2 group-hover:text-emerald-600 transition-colors">{inf.title}</h4>
                  <p className="text-[10px] text-slate-500 leading-relaxed mb-4">{inf.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {inf.tags.map(t => <Badge key={t} variant="secondary" className="text-[8px] uppercase tracking-wider bg-slate-50">{t}</Badge>)}
                  </div>
               </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}

function PregnancyTools() {
  const [hpht, setHpht] = useState<string>('');

  const pregnancyData = useMemo(() => {
    if (!hpht) return null;
    const lmpDate = new Date(hpht);
    if (isNaN(lmpDate.getTime())) return null;

    const today = new Date();
    
    // GA Calculation
    const timeDiff = today.getTime() - lmpDate.getTime();
    const totalDays = Math.floor(timeDiff / (1000 * 3600 * 24));
    const weeks = Math.floor(totalDays / 7);
    const remainingDays = totalDays % 7;

    // HPL (Naegele)
    // +7 days, -3 months, +1 year
    const hplDate = new Date(lmpDate);
    hplDate.setDate(hplDate.getDate() + 7);
    hplDate.setMonth(hplDate.getMonth() - 3);
    hplDate.setFullYear(hplDate.getFullYear() + 1);

    const formatter = new Intl.DateTimeFormat('id-ID', { dateStyle: 'long' });

    return {
      weeks,
      days: remainingDays,
      totalDays,
      hpl: formatter.format(hplDate),
      isPostTerm: weeks >= 40
    };
  }, [hpht]);

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="rounded-[2.5rem] shadow-xl shadow-black/[0.02] border-slate-100 overflow-hidden">
          <CardHeader className="p-8 bg-slate-50/50">
             <CardTitle className="text-xl font-black tracking-tight flex items-center gap-3">
              <Calendar className="text-fuchsia-500" /> Usia Kehamilan & HPL
            </CardTitle>
            <CardDescription className="text-xs font-medium">Rumus Naegele (Siklus 28 Hari)</CardDescription>
          </CardHeader>
          <CardContent className="p-8 space-y-6">
            <div className="space-y-3">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Hari Pertama Haid Terakhir (HPHT)</label>
              <input 
                type="date" 
                value={hpht} 
                onChange={(e) => setHpht(e.target.value)}
                className="w-full text-lg font-bold p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-fuchsia-200 focus:bg-white outline-none transition-all"
              />
            </div>

            {pregnancyData ? (
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-fuchsia-600 to-pink-600 rounded-3xl p-8 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl" />
                  <div className="text-[10px] font-black uppercase tracking-[0.3em] opacity-60 mb-2">Current Gestational Age</div>
                  <div className="text-5xl font-black tracking-tighter mb-1">
                    {pregnancyData.weeks} <span className="text-xl opacity-60">Minggu</span> {pregnancyData.days} <span className="text-xl opacity-60">Hari</span>
                  </div>
                  <div className="text-[11px] font-bold opacity-80">Total: {pregnancyData.totalDays} Hari</div>
                </div>

                <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Taksiran Persalinan (HPL)</div>
                    <div className="text-lg font-black text-slate-800">{pregnancyData.hpl}</div>
                  </div>
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-fuchsia-500 shadow-sm">
                    <Baby size={24} />
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-12 border-2 border-dashed border-slate-100 rounded-3xl text-center text-slate-300">
                <p className="text-xs font-bold uppercase tracking-widest">Pilih Tanggal HPHT</p>
              </div>
            )}
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card className="rounded-[2.5rem] border-slate-100 shadow-sm">
            <CardHeader className="p-6">
              <CardTitle className="text-sm font-black tracking-tight uppercase tracking-widest">Milestone Kehamilan</CardTitle>
            </CardHeader>
            <CardContent className="px-6 pb-6 mt-[-10px]">
              <div className="space-y-4">
                {[
                  { range: '0 - 13 Mg', label: 'Trimester I', desc: 'Organogenesis & Risiko Keguguran tertinggi.' },
                  { range: '14 - 27 Mg', label: 'Trimester II', desc: 'Sering disebut \'The Golden Period\'.' },
                  { range: '28 - 40 Mg', label: 'Trimester III', desc: 'Persiapan persalinan & pematangan paru.' },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4 p-3 rounded-2xl hover:bg-slate-50 transition-colors">
                    <div className="w-1.5 h-full self-stretch bg-fuchsia-100 rounded-full shrink-0 overflow-hidden">
                       <div className="h-1/3 bg-fuchsia-500" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[11px] font-black text-slate-800">{item.label}</span>
                        <span className="text-[9px] font-bold text-fuchsia-500 bg-fuchsia-50 px-2 py-0.5 rounded-full">{item.range}</span>
                      </div>
                      <p className="text-[10px] text-slate-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

function PediatricTools() {
  const [globalWeight, setGlobalWeight] = useState<string>('');

  const pediatricGroups = [
    {
      category: 'Antipiretik & Analgesik',
      color: 'rose',
      drugs: [
        {
          title: 'Paracetamol',
          doseMg: 10,
          note: '10-15 mg/kgBB/kali, 3-4 x sehari',
          clinicalPearl: 'Aman untuk neonatus. Jika < 2 bulan gunakan dosis 10mg/kgBB.',
          maxDailyDose: '60 mg/kgBB/hari',
          formulations: [
            { type: 'Syrup', mg: 120, vol: 5 },
            { type: 'Forte', mg: 250, vol: 5 },
            { type: 'Drops', mg: 100, vol: 1 },
            { type: 'Tablet', mg: 500, vol: 1 },
          ]
        },
        {
          title: 'Ibuprofen',
          doseMg: 5,
          note: '5-10 mg/kgBB/kali, 3-4 x sehari. Sebaiknya sesudah makan.',
          clinicalPearl: 'KONTRAINDIKASI untuk bayi < 6 bulan, dehidrasi berat, atau curiga Demam Berdarah Dengue (DBD).',
          maxDailyDose: '40 mg/kgBB/hari',
          formulations: [
            { type: 'Syrup', mg: 100, vol: 5 },
            { type: 'Forte', mg: 200, vol: 5 },
            { type: 'Tablet', mg: 400, vol: 1 },
          ]
        }
      ]
    },
    {
      category: 'Antibiotik Lini Pertama FKTP',
      color: 'blue',
      drugs: [
        {
          title: 'Amoxicillin',
          doseMg: 15,
          note: '15-25 mg/kgBB/kali, 3 x sehari (Standard)',
          clinicalPearl: 'Pilihan utama ISPA bacterial. Dosis tinggi (90mg/kgBB/hari) untuk Otitis Media Akut.',
          maxDailyDose: 'Max 3 gram/hari',
          formulations: [
            { type: 'Syrup', mg: 125, vol: 5 },
            { type: 'Forte', mg: 250, vol: 5 },
            { type: 'Drops', mg: 100, vol: 1 },
          ]
        },
        {
          title: 'Cefadroxil',
          doseMg: 15,
          note: '15 mg/kgBB/kali, 2 x sehari',
          clinicalPearl: 'Alternatif lini pertama infeksi kulit & jaringan lunak. Cukup diminum 2x sehari sehingga kepatuhan pasien lebih baik.',
          maxDailyDose: 'Max 1 gram/hari',
          formulations: [
            { type: 'Syrup', mg: 125, vol: 5 },
            { type: 'Forte', mg: 250, vol: 5 },
          ]
        },
        {
          title: 'Kotrimoksazol',
          doseMg: 4,
          note: 'Dosis berdasarkan TMP: 4 mg/kgBB/kali, 2 x sehari',
          clinicalPearl: 'Jangan digunakan pada bayi < 2 bulan (risiko kern-icterus). Hindari pada defisiensi G6PD.',
          formulations: [
            { type: 'Syrup', mg: 40, vol: 5 }, 
            { type: 'Pediatric Tab', mg: 20, vol: 1 },
          ]
        }
      ]
    },
    {
      category: 'Respirasi & Alergi',
      color: 'emerald',
      drugs: [
        {
          title: 'Cetirizine',
          doseMg: 0.25,
          note: '0.25 mg/kgBB/hari (sekali sehari)',
          clinicalPearl: 'Antihistamin generasi 2. Aman, tidak bikin kantuk berlebih. Hindari usia < 6 bulan.',
          formulations: [
            { type: 'Syrup', mg: 5, vol: 5 },
            { type: 'Drops', mg: 10, vol: 1 },
          ]
        },
        {
          title: 'Salbutamol',
          doseMg: 0.1,
          note: '0.1 - 0.15 mg/kgBB/kali, 3-4 x sehari',
          clinicalPearl: 'SABA oral kurang disarankan jika ada sediaan inhalasi. Sering menyebabkan takikardia dan tremor pada anak.',
          maxDailyDose: 'Max 12 mg/hari',
          formulations: [
            { type: 'Syrup', mg: 2, vol: 5 },
            { type: 'Puyer/Tablet', mg: 2, vol: 1 },
            { type: 'Puyer/Tablet', mg: 4, vol: 1 },
          ]
        },
        {
          title: 'Ambroxol',
          doseMg: 0.5,
          note: '0.5 mg/kgBB/kali, 2-3 x sehari',
          clinicalPearl: 'Mukolitik, dapat dicampur dengan sediaan racik / puyer asalkan stabil.',
          formulations: [
            { type: 'Syrup', mg: 15, vol: 5 },
            { type: 'Drops', mg: 15, vol: 1 },
          ]
        }
      ]
    },
    {
      category: 'Gastrointestinal & Rehidrasi',
      color: 'amber',
      drugs: [
        {
          title: 'Domperidone',
          doseMg: 0.25,
          note: '0.25 mg/kgBB/kali, 3 x sehari (sebelum makan)',
          clinicalPearl: 'KONTRAINDIKASI untuk bayi < 1 tahun kecuali diresepkan Spesialis. Max terapi 3-7 hari (risiko aritmia).',
          maxDailyDose: 'Max 1 mg/kgBB/hari',
          formulations: [
            { type: 'Syrup', mg: 5, vol: 5 },
            { type: 'Drops', mg: 5, vol: 1 },
          ]
        },
        {
          title: 'Zinc',
          doseMg: 0, 
          isFixed: true,
          note: '<6 bulan: 10mg (1/2 tab) 1x1. >6 bln: 20mg (1 tab) 1x1',
          clinicalPearl: 'WAJIB diberikan 10 hari berturut-turut meskipun diare sudah berhenti, untuk meregenerasi vili usus.',
          formulations: []
        },
        {
          title: 'Oralit',
          doseMg: 0,
          isFixed: true,
          note: '<1 th: 50-100ml. >1 th: 100-200ml setiap kali BAB. Plan B: 75 ml/kgBB/4 jam.',
          clinicalPearl: 'Jangan hentikan ASI/Susu formula selama diare. Kunci keberhasilan penanganan diare bukan pada henti mencret, tapi mencegah dehidrasi.',
          formulations: []
        }
      ]
    }
  ];

  return (
    <div className="space-y-10">
       <header className="bg-white p-6 md:p-8 rounded-[2.5rem] border border-slate-100 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
            <div>
              <h3 className="text-2xl font-black text-slate-800 tracking-tight leading-tight">Master Dosis Anak</h3>
              <p className="text-sm text-slate-500 mt-1 font-medium">Kalkulasi 1-klik untuk seluruh spektrum pediatrik.</p>
            </div>
            <div className="flex items-center gap-4 bg-slate-50 p-2 pr-6 rounded-2xl border border-slate-100/50">
               <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-slate-400 shadow-sm">
                  <Scale size={20} />
               </div>
               <div className="relative">
                 <p className="text-[10px] font-black uppercase tracking-widest text-emerald-500 mb-1">Berat Badan</p>
                 <div className="flex items-end gap-2">
                   <input 
                      type="number" 
                      placeholder="0.0" 
                      value={globalWeight}
                      onChange={(e) => setGlobalWeight(e.target.value)}
                      className="w-20 bg-transparent border-b-2 border-slate-200 focus:border-emerald-500 text-2xl font-black text-slate-800 outline-none p-0 pb-1 rounded-none transition-colors"
                   />
                   <span className="text-sm font-bold text-slate-400 pb-1.5">kg</span>
                 </div>
               </div>
            </div>
          </div>
       </header>

             <div className="space-y-8">
        {pediatricGroups.map((group, grpIdx) => (
          <div key={grpIdx} className="space-y-4">
            <div className="flex items-center gap-3 px-2">
               <div className={`w-8 h-8 rounded-xl bg-${group.color}-100 flex items-center justify-center`}>
                  <div className={`w-2 h-2 rounded-full bg-${group.color}-500`} />
               </div>
               <h4 className={`text-sm font-black uppercase tracking-widest text-${group.color}-600`}>{group.category}</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
               {group.drugs.map((drug, idx) => (
                  <CompactDrugCard key={idx} drug={drug} weight={globalWeight} color={group.color} />
               ))}
            </div>
          </div>
        ))}
      </div>

       <section className="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-[100px]" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-black tracking-tight mb-4 leading-tight">Rehidrasi WHO <span className="text-emerald-400 italic">Plan B & C</span></h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-8">Panduan penanganan dehidrasi sedang (Plan B) and berat (Plan C) sesuai standard WHO pafa pasien diare anak.</p>
              
              <div className="space-y-4">
                <div className="p-5 bg-white/5 rounded-2xl border border-white/10">
                   <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400">
                        <Droplets size={16} />
                      </div>
                      <span className="text-xs font-black uppercase tracking-widest text-blue-400">Diare Plan B</span>
                   </div>
                   <p className="text-[11px] leading-relaxed text-slate-300">
                      Berikan <strong>75 ml/kgBB Oralit</strong> selama 4 jam pertama. Evaluasi derajat dehidrasi setelah 4 jam.
                   </p>
                </div>
                
                <div className="p-5 bg-white/5 rounded-2xl border border-white/10">
                   <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-xl bg-red-500/20 flex items-center justify-center text-red-400">
                        <Activity size={16} />
                      </div>
                      <span className="text-xs font-black uppercase tracking-widest text-red-400">Diare Plan C (Shock)</span>
                   </div>
                   <p className="text-[11px] leading-relaxed text-slate-300">
                      IV Kristaloid. <strong>100 ml/kgBB</strong>. <br/>
                      - &lt; 1 thn: 1 Jam pertama (30ml/kg), 5 Jam sisa (70ml/kg). <br/>
                      - &gt; 1 thn: 30 Menit pertama (30ml/kg), 2.5 Jam sisa (70ml/kg).
                   </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 rounded-[2rem] p-8 border border-white/5">
                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-400 mb-6">Status Gizi (WHO-Z) Interpretasi</h4>
                <div className="space-y-4">
                  {[
                    { val: '> +3 SD', label: 'Obesitas', style: 'text-red-400' },
                    { val: '+2 s/d +3 SD', label: 'Overweight', style: 'text-orange-400' },
                    { val: '-2 s/d +2 SD', label: 'Normal / Gizi Baik', style: 'text-green-400' },
                    { val: '-3 s/d -2 SD', label: 'Gizi Kurang (Wasted)', style: 'text-yellow-400' },
                    { val: '< -3 SD', label: 'Gizi Buruk (Sev. Wasted)', style: 'text-red-500' },
                  ].map(z => (
                    <div key={z.label} className="flex items-center justify-between text-[11px] font-bold">
                       <span className="text-slate-400">{z.val}</span>
                       <span className={z.style}>{z.label}</span>
                    </div>
                  ))}
                </div>
            </div>
          </div>
       </section>
    </div>
  );
}

function CompactDrugCard({ drug, weight }: { key?: number; drug: any; weight: string | number; color?: string }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const selected = drug.formulations[activeIndex];

  const result = useMemo(() => {
    if (drug.isFixed || !selected) return null;
    const w = parseFloat(weight.toString());
    if (isNaN(w) || w <= 0) return null;
    
    const doseTotalMg = w * drug.doseMg;
    let value = (doseTotalMg / selected.mg) * selected.vol;
    
    return {
      mg: doseTotalMg.toFixed(1),
      value: value.toFixed(selected.type === 'Tablet' ? 2 : 1),
      unit: selected.type === 'Tablet' ? 'Tab' : 'ml'
    };
  }, [weight, selected, drug]);

  return (
    <Card className="rounded-[1.5rem] border-slate-100 shadow-sm hover:shadow-md transition-shadow">
      <div className="p-5 space-y-4">
         <div className="flex justify-between items-start">
            <div>
               <h4 className="text-sm font-black text-slate-800 tracking-tight">{drug.title}</h4>
               {!drug.isFixed && <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">{drug.doseMg} mg/kgBB</span>}
            </div>
         </div>
         
         {!drug.isFixed && drug.formulations.length > 0 && (
           <div className="flex flex-wrap gap-1.5">
             {drug.formulations.map((f: any, i: number) => (
               <button
                 key={i}
                 onClick={() => setActiveIndex(i)}
                 className={cn(
                   "px-2 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest transition-colors border",
                   activeIndex === i ? "bg-slate-900 border-slate-900 text-white" : "border-slate-100 bg-slate-50 text-slate-400 hover:border-slate-300"
                 )}
               >
                 {f.type} {f.mg}/{f.vol > 1 ? f.vol : ''}{f.type === 'Tablet' ? '' : 'ml'}
               </button>
             ))}
           </div>
         )}

         {drug.isFixed ? (
            <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl relative overflow-hidden">
               <p className="text-[11px] font-medium text-slate-600 leading-relaxed italic">{drug.note}</p>
            </div>
         ) : result ? (
           <div className="p-3 bg-emerald-50 border border-emerald-100/50 rounded-xl flex items-center justify-between">
              <div className="text-2xl font-black text-emerald-600 tracking-tighter">
                {result.value} <span className="text-xs lowercase">{result.unit}</span>
              </div>
              <div className="text-right">
                <div className="text-[9px] font-black uppercase text-emerald-500/60 mb-0.5">Total Dosis</div>
                <div className="text-xs font-bold text-emerald-700">{result.mg} mg</div>
              </div>
           </div>
         ) : (
           <div className="p-3 border-2 border-dashed border-slate-100 rounded-xl text-center">
             <span className="text-[10px] font-black uppercase tracking-widest text-slate-300">Masukkan BB</span>
           </div>
         )}
        
         {/* Clinical Pearl section upgraded for FKTP! */}
         {drug.clinicalPearl && (
           <div className="bg-amber-50 text-amber-700 p-3 rounded-xl border border-amber-100 text-[10px] leading-relaxed relative overflow-hidden">
             <div className="absolute top-0 right-0 w-8 h-8 bg-amber-500/10 rounded-full blur-md" />
             <strong className="block mb-1 text-amber-800 uppercase tracking-wider text-[9px]">Clinical Pearl</strong>
             {drug.clinicalPearl}
           </div>
         )}
         {drug.maxDailyDose && (
           <div className="text-[9px] uppercase font-bold text-red-500 tracking-widest px-1">
              Max: {drug.maxDailyDose}
           </div>
         )}
         
         {!drug.isFixed && (
            <p className="text-[10px] text-slate-400 mt-2 font-medium italic">{drug.note}</p>
         )}
      </div>
    </Card>
  );
}


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

export function GuidelineTools() {
  return <div className="p-10 text-center"><BadgeInfo className="mx-auto mb-2 text-slate-300" size={32}/>Panduan Medis Faskes Tingkat 1</div>;
}




function UniversalScoreCard({ 
  title, 
  desc, 
  options, 
  getInterpretation, 
  defaultSelectedIds = [] 
}: { 
  title: string; 
  desc: string; 
  options: { id: string; label: string; points: number; default?: boolean }[]; 
  getInterpretation: (score: number) => { text: string; color: string; action: string };
  defaultSelectedIds?: string[];
}) {
  const [selected, setSelected] = useState<string[]>(defaultSelectedIds);

  const toggle = (id: string) => {
    if (selected.includes(id)) {
      setSelected(selected.filter(x => x !== id));
    } else {
      setSelected([...selected, id]);
    }
  };

  const totalScore = options.filter(o => selected.includes(o.id)).reduce((acc, curr) => acc + curr.points, 0);
  const result = getInterpretation(totalScore);

  return (
    <Card className="rounded-[2rem] shadow-sm border-slate-100 overflow-hidden">
       <CardHeader className="p-6 bg-slate-50/50">
          <CardTitle className="text-lg font-black">{title}</CardTitle>
          <CardDescription className="text-xs">{desc}</CardDescription>
       </CardHeader>
       <CardContent className="p-6 space-y-4">
          <div className="space-y-2">
            {options.map(opt => {
               const isSel = selected.includes(opt.id);
               return (
                 <button 
                   key={opt.id} 
                   onClick={() => toggle(opt.id)}
                   className={cn(
                     "w-full flex items-center justify-between p-3 rounded-xl border text-left transition-all",
                     isSel ? "border-emerald-500 bg-emerald-50" : "border-slate-100 bg-white hover:border-slate-300"
                   )}
                 >
                   <div className="flex items-center gap-3">
                      <div className={cn("w-5 h-5 flex items-center justify-center rounded-md border", isSel ? "bg-emerald-500 border-emerald-500 text-white" : "border-slate-300")}>
                        {isSel && <Check size={14} />}
                      </div>
                      <span className={cn("text-xs font-bold", isSel ? "text-emerald-900" : "text-slate-600")}>{opt.label}</span>
                   </div>
                   <Badge variant="secondary" className={cn("font-black", isSel ? "bg-white text-emerald-600" : "bg-slate-100 text-slate-400")}>+{opt.points}</Badge>
                 </button>
               )
            })}
          </div>
          <div className="mt-6 pt-6 border-t border-slate-100 flex items-center justify-between">
             <div>
                <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Total Skor</div>
                <div className="text-3xl font-black text-slate-800">{totalScore}</div>
             </div>
             <div className="text-right">
                <Badge className={cn("mb-2 text-[10px]", result.color)}>{result.text}</Badge>
                <div className="text-xs font-bold text-slate-500 leading-tight max-w-[150px]">{result.action}</div>
             </div>
          </div>
       </CardContent>
    </Card>
  );
}


// We implement GCS inside ScoreTools, so I'll just export it
export function ScoreToolsExt() {
  const [activeTab, setActiveTab] = useState('GCS');

  const [eye, setEye] = useState(4);
  const [verbal, setVerbal] = useState(5);
  const [motor, setMotor] = useState(6);

  const gcsScore = eye + verbal + motor;
  const gcsResult = 
    gcsScore >= 14 ? { cat: 'Compos Mentis', type: 'bg-green-500' } :
    gcsScore >= 12 ? { cat: 'Apatis', type: 'bg-yellow-500' } :
    gcsScore >= 10 ? { cat: 'Delirium', type: 'bg-orange-400' } :
    gcsScore >= 7  ? { cat: 'Somnolen', type: 'bg-orange-500' } :
    gcsScore >= 4  ? { cat: 'Stupor', type: 'bg-red-500' } :
                     { cat: 'Koma', type: 'bg-slate-900' };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="rounded-[2rem] shadow-sm border-slate-100 overflow-hidden lg:col-span-2">
        <CardHeader className="p-6 bg-slate-50/50">
           <CardTitle className="text-lg font-black">Glasgow Coma Scale (GCS)</CardTitle>
           <CardDescription className="text-xs">Penilaian tingkat kesadaran pasien.</CardDescription>
        </CardHeader>
        <CardContent className="p-6">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             <div className="space-y-3">
                <h4 className="text-xs font-black uppercase text-slate-500">Eye (Mata)</h4>
                {[
                  { v: 4, l: 'Buka mata spontan' },
                  { v: 3, l: 'Buka thd suara' },
                  { v: 2, l: 'Buka thd nyeri' },
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
                  { v: 3, l: 'Kata tdk tepat' },
                  { v: 2, l: 'Mengerang' },
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
                  { v: 4, l: 'Menarik dr nyeri' },
                  { v: 3, l: 'Fleksi abnormal' },
                  { v: 2, l: 'Ekstensi abnormal' },
                  { v: 1, l: 'Tidak respon' }
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
                   E{eye} V{verbal} M{motor} <span className="ml-2 text-slate-500">({gcsScore})</span>
                </div>
              </div>
              <div className="text-right">
                <Badge className={cn("font-black shadow-none", gcsResult.type)}>{gcsResult.cat}</Badge>
              </div>
           </div>
        </CardContent>
      </Card>

      <UniversalScoreCard
        title="Centor Score (Modifikasi McIsaac)"
        desc="Menilai probabilitas faringitis streptokokal untuk indikasi antibiotik."
        options={[
          { id: 'f', label: 'Suhu > 38°C', points: 1 },
          { id: 'c', label: 'Tdk ada batuk (Absence of Cough)', points: 1 },
          { id: 'n', label: 'Limfadenopati servikal anterior', points: 1 },
          { id: 'e', label: 'Eksudat/pembengkakan Tonsil', points: 1 },
          { id: 'a1', label: 'Usia 3 - 14 Tahun', points: 1 },
          { id: 'a2', label: 'Usia > 45 Tahun', points: -1 }
        ]}
        getInterpretation={(s) => {
           if (s <= 1) return { text: 'Risiko Rendah (1-10%)', color: 'bg-green-500', action: 'Tidak perlu antibiotik.' };
           if (s <= 3) return { text: 'Risiko Sedang (11-35%)', color: 'bg-yellow-500', action: 'Pertimbangkan Kultur/Rapid Test.' };
           return { text: 'Risiko Tinggi (>50%)', color: 'bg-red-500', action: 'Berikan Antibiotik empiris.' }
        }}
      />
      <UniversalScoreCard
        title="Alvarado Score"
        desc="Sistem skoring klinis apendisitis akut di IGD/Puskesmas."
        options={[
          { id: 'm', label: 'Migrasi Nyeri ke Kanan Bawah', points: 1 },
          { id: 'a', label: 'Anoreksia', points: 1 },
          { id: 'n', label: 'Mual / Muntah', points: 1 },
          { id: 't', label: 'Nyeri Tekan RLQ (Tender)', points: 2 },
          { id: 'r', label: 'Nyeri Lepas (Rebound)', points: 1 },
          { id: 'e', label: 'Peningkatan Suhu (Elevated Temp)', points: 1 },
          { id: 'l', label: 'Leukositosis (>10.000)', points: 2 },
          { id: 's', label: 'Shift to the Left (Neutrofil Segmen)', points: 1 },
        ]}
        getInterpretation={(s) => {
           if (s <= 4) return { text: 'Bukan Apendisitis', color: 'bg-green-500', action: 'Observasi rawat jalan.' };
           if (s <= 6) return { text: 'Curiga Apendisitis', color: 'bg-yellow-500', action: 'Observasi ketat / rujuk USG.' };
           if (s <= 8) return { text: 'Probabel Apendisitis', color: 'bg-orange-500', action: 'Rujuk Spesialis Bedah.' };
           return { text: 'Apendisitis Pasti', color: 'bg-red-500', action: 'Persiapan Operasi RUJUK CITO.' }
        }}
      />
      <UniversalScoreCard
        title="CURB-65"
        desc="Menentukan tingkat perawatan pasien Community-Acquired Pneumonia (CAP)."
        options={[
          { id: 'c', label: 'Confusion (Disorientasi, GCS turun)', points: 1 },
          { id: 'u', label: 'Urea > 7 mmol/L (atau BUN > 19)', points: 1 },
          { id: 'r', label: 'Respiratory rate ≥ 30 x/menit', points: 1 },
          { id: 'b', label: 'Blood pressure (Sistolik <90 atau Diastolik ≤60)', points: 1 },
          { id: '65', label: 'Usia ≥ 65 Tahun', points: 1 }
        ]}
        getInterpretation={(s) => {
           if (s <= 1) return { text: 'Risiko Rendah', color: 'bg-green-500', action: 'Rawat Jalan (Edukasi).' };
           if (s === 2) return { text: 'Risiko Sedang', color: 'bg-yellow-500', action: 'Pertimbangkan Rawat Inap/Observasi.' };
           return { text: 'Risiko Berat', color: 'bg-red-500', action: 'Rawat Inap/ICU. RUJUK!' }
        }}
      />
      <UniversalScoreCard
        title="Wells Score (DVT)"
        desc="Menilai probabilitas klinis Deep Vein Thrombosis."
        options={[
          { id: '1', label: 'Kanker Aktif (Terapi dalam 6 bln)', points: 1 },
          { id: '2', label: 'Paresis/Imobilisasi ekstremitas bawah', points: 1 },
          { id: '3', label: 'Bedridden >3 hari / Operasi mayor <12 mg', points: 1 },
          { id: '4', label: 'Bengkak lokal sepanjang sistem vena dalam', points: 1 },
          { id: '5', label: 'Bengkak seluruh kaki (satu sisi)', points: 1 },
          { id: '6', label: 'Lingkar betis sakit >3cm vs sisi sehat', points: 1 },
          { id: '7', label: 'Pitting edema pada kaki bergejala', points: 1 },
          { id: '8', label: 'Vena superfisial kolateral (Non-varises)', points: 1 },
          { id: '9', label: 'Riwayat DVT sebelumnya', points: 1 },
          { id: '10', label: 'Diagnosis alternatif Paling Mungkin', points: -2 },
        ]}
        getInterpretation={(s) => {
           if (s < 1) return { text: 'Probabilitas Rendah', color: 'bg-green-500', action: 'D-Dimer jika tersedia.' };
           if (s <= 2) return { text: 'Probabilitas Sedang', color: 'bg-yellow-500', action: 'USG Doppler / Rujuk Penyakit Dalam.' };
           return { text: 'Probabilitas Tinggi', color: 'bg-red-500', action: 'Mulai Antikoagulan. Segera Rujuk.' }
        }}
      />
      <UniversalScoreCard
        title="qSOFA (Sepsis)"
        desc="Deteksi cepat risiko perburukan pasien Sepsis / curiga infeksi berat."
        options={[
          { id: 'q1', label: 'Laju Napas (RR) ≥ 22 x/menit', points: 1 },
          { id: 'q2', label: 'Perubahan Kesadaran (GCS < 15)', points: 1 },
          { id: 'q3', label: 'Tekanan Darah Sistolik ≤ 100 mmHg', points: 1 }
        ]}
        getInterpretation={(s) => {
           if (s < 2) return { text: 'Risiko Rendah', color: 'bg-green-500', action: 'Lanjutkan observasi klinis.' };
           return { text: 'Risiko Tinggi (Sepsis)', color: 'bg-red-500', action: 'Curiga peringatan mortalitas tinggi. Segera Rujuk IGD/ICU.' }
        }}
      />
    </div>
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
               <input type="number" placeholder="BB (Kg)" value={weight} onChange={e=>setWeight(e.target.value)} className="w-32 bg-white/10 p-4 rounded-2xl text-xl font-black text-white outline-none placeholder:text-white/40 focus:ring-2 ring-white" />
               
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
