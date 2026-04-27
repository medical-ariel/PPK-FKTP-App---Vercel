import React, { useState, useEffect } from 'react';
import { Pill, Clock, Plus, Trash2, Activity, Info } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { CustomMedication } from '../types';
import { motion, AnimatePresence } from 'motion/react';

interface MedicationManagerProps {
  diseaseId: string;
}

export default function MedicationManager({ diseaseId }: MedicationManagerProps) {
  const [medications, setMedications] = useState<CustomMedication[]>([]);
  const [name, setName] = useState('');
  const [dosage, setDosage] = useState('');
  const [frequency, setFrequency] = useState('');
  const [notes, setNotes] = useState('');

  // Load medications on mount
  useEffect(() => {
    const stored = localStorage.getItem('custom_medications');
    if (stored) {
      try {
        const parsed: CustomMedication[] = JSON.parse(stored);
        setMedications(parsed.filter(m => m.diseaseId === diseaseId));
      } catch (e) {
        console.error('Error parsing medications', e);
      }
    }
  }, [diseaseId]);

  // Save when adding/removing
  const saveMedications = (newMeds: CustomMedication[]) => {
    setMedications(newMeds);
    
    // We need to merge with other diseases' medications
    const stored = localStorage.getItem('custom_medications');
    let allMeds: CustomMedication[] = [];
    if (stored) {
      try {
        allMeds = JSON.parse(stored);
      } catch (e) {
        // ignore
      }
    }

    // Filter out current disease meds, then add the new ones
    const merged = [
      ...allMeds.filter(m => m.diseaseId !== diseaseId),
      ...newMeds
    ];

    localStorage.setItem('custom_medications', JSON.stringify(merged));
  };

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !dosage.trim() || !frequency.trim()) return;

    const newMed: CustomMedication = {
      id: Date.now().toString(),
      diseaseId,
      name,
      dosage,
      frequency,
      notes: notes.trim(),
      createdAt: Date.now(),
    };

    saveMedications([...medications, newMed]);
    setName('');
    setDosage('');
    setFrequency('');
    setNotes('');
  };

  const handleDelete = (id: string) => {
    saveMedications(medications.filter(m => m.id !== id));
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
      <div className="p-6 md:p-8 border-b border-slate-100 bg-slate-50/50">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
            <Pill size={20} />
          </div>
          <div>
            <h3 className="text-lg font-black text-slate-900 tracking-tight">Manajemen Medikasi Khusus</h3>
            <p className="text-xs font-medium text-slate-500">
              Catat dan kelola obat-obatan khusus, dosis, dan frekuensi untuk kondisi ini.
            </p>
          </div>
        </div>
      </div>

      <div className="p-6 md:p-8 flex flex-col lg:flex-row gap-8">
        
        {/* FORM */}
        <div className="flex-1 max-w-sm">
          <form onSubmit={handleAdd} className="space-y-4">
            <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4">Tambah Resep/Obat Baru</h4>
            <div className="space-y-3">
              <div>
                 <Input 
                   value={name}
                   onChange={e => setName(e.target.value)}
                   placeholder="Nama Obat (Cth: Amoxicillin)"
                   className="h-11 bg-slate-50 rounded-xl border-slate-200 focus-visible:ring-primary focus-visible:border-primary"
                 />
              </div>
              <div className="grid grid-cols-2 gap-3">
                 <Input 
                   value={dosage}
                   onChange={e => setDosage(e.target.value)}
                   placeholder="Dosis (Cth: 500mg)"
                   className="h-11 bg-slate-50 rounded-xl border-slate-200 focus-visible:ring-primary focus-visible:border-primary"
                 />
                 <Input 
                   value={frequency}
                   onChange={e => setFrequency(e.target.value)}
                   placeholder="Frekuensi (Cth: 3x1)"
                   className="h-11 bg-slate-50 rounded-xl border-slate-200 focus-visible:ring-primary focus-visible:border-primary"
                 />
              </div>
              <div>
                 <Input 
                   value={notes}
                   onChange={e => setNotes(e.target.value)}
                   placeholder="Catatan Medis (Opsional)"
                   className="h-11 bg-slate-50 rounded-xl border-slate-200 focus-visible:ring-primary focus-visible:border-primary italic"
                 />
              </div>
            </div>
            <Button 
              type="submit" 
              disabled={!name.trim() || !dosage.trim() || !frequency.trim()}
              className="w-full h-11 bg-primary hover:bg-primary/90 text-white rounded-xl font-bold shadow-md shadow-primary/20"
            >
              <Plus size={16} className="mr-2" />
              Simpan Obat Khusus
            </Button>
          </form>
        </div>

        {/* LIST */}
        <div className="flex-1 lg:border-l lg:border-slate-100 lg:pl-8">
           <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4">Daftar Obat Tersimpan</h4>
           
           {medications.length === 0 ? (
             <div className="h-32 rounded-2xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-slate-400">
               <Info size={24} className="mb-2 opacity-50" />
               <span className="text-xs font-semibold">Belum ada obat khusus yang ditambahkan.</span>
             </div>
           ) : (
             <div className="space-y-3">
               <AnimatePresence mode="popLayout">
                 {medications.map(med => (
                   <motion.div 
                     layout
                     initial={{ opacity: 0, scale: 0.95 }}
                     animate={{ opacity: 1, scale: 1 }}
                     exit={{ opacity: 0, scale: 0.95 }}
                     key={med.id} 
                     className="bg-white border border-slate-200 rounded-2xl p-4 flex items-center justify-between shadow-sm group hover:border-primary/30 transition-colors"
                   >
                     <div className="flex gap-4 items-center flex-1 pr-4">
                       <div className="w-10 h-10 rounded-full shrink-0 bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-primary/10 group-hover:text-primary group-hover:border-primary/20 transition-colors">
                         <Pill size={16} />
                       </div>
                       <div className="flex-1 w-0">
                         <div className="font-bold text-sm text-slate-900 leading-none mb-2 truncate">{med.name}</div>
                         <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-slate-500 mb-0.5">
                           <span className="flex items-center gap-1.5"><Activity size={12} className="text-primary/60"/> <span className="bg-slate-100 px-2 py-0.5 rounded-md font-bold">{med.dosage}</span></span>
                           <span className="flex items-center gap-1.5"><Clock size={12} className="text-secondary/60"/> <span className="bg-slate-100 px-2 py-0.5 rounded-md font-bold">{med.frequency}</span></span>
                         </div>
                         {med.notes && (
                            <div className="mt-2 text-xs text-slate-500 italic flex items-start gap-1">
                                <Info size={10} className="mt-0.5 shrink-0" />
                                <span className="line-clamp-2">{med.notes}</span>
                            </div>
                         )}
                       </div>
                     </div>
                     <button
                       onClick={() => handleDelete(med.id)}
                       className="w-8 h-8 rounded-full flex items-center justify-center text-slate-300 hover:bg-red-50 hover:text-red-500 transition-colors"
                     >
                       <Trash2 size={14} />
                     </button>
                   </motion.div>
                 ))}
               </AnimatePresence>
             </div>
           )}
        </div>

      </div>
    </div>
  );
}
