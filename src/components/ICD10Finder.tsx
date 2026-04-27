import React, { useState, useMemo } from 'react';
import { Search, LayoutGrid, X } from 'lucide-react';
import { DISEASES } from '../data/diseases';
import { EXTENDED_ICD10, getAllICD10 } from '../data/icd10';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

interface ICD10FinderProps {
  onClose?: () => void;
  isStandalone?: boolean;
}

export default function ICD10Finder({ onClose, isStandalone = true }: ICD10FinderProps) {
  const [search, setSearch] = useState('');
  
  const allIcd10 = useMemo(() => getAllICD10(DISEASES), []);

  const filtered = useMemo(() => {
    if (!search) return allIcd10.slice(0, 50);
    const q = search.toLowerCase();
    return allIcd10.filter(d => 
      d.name.toLowerCase().includes(q) || 
      d.icd.toLowerCase().includes(q) ||
      d.cat.toLowerCase().includes(q)
    );
  }, [search, allIcd10]);

  return (
    <div className={isStandalone ? "flex flex-col h-full bg-slate-50/50" : "space-y-6"}>
      {isStandalone && (
        <div className="p-6 bg-white border-b flex items-center justify-between shadow-sm z-10">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-slate-900/20">
              <LayoutGrid size={24} />
            </div>
            <div>
              <div className="text-base font-black uppercase tracking-widest leading-tight text-slate-800">ICD-10 Finder</div>
              <div className="text-[10px] text-slate-400 font-bold flex items-center gap-1.5 uppercase tracking-wider mt-1">
                Fast Lookup & Diagnostic Codes
              </div>
            </div>
          </div>
          {onClose && (
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={onClose}
              className="rounded-xl hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-all font-black"
            >
              <X size={20} />
            </Button>
          )}
        </div>
      )}

      <div className={isStandalone ? "flex-1 overflow-y-auto p-6 md:p-10 custom-scrollbar" : "space-y-6"}>
        <div className="bg-white p-6 rounded-[2.5rem] border border-slate-100 shadow-sm flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center text-white shrink-0">
               <LayoutGrid size={20} />
            </div>
            <div className="flex-1 relative">
               <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
               <input 
                  type="text" 
                  placeholder="Cari Diagnosa or Kode ICD-10..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full bg-slate-50 border-none rounded-xl py-3 pl-12 pr-4 text-sm font-bold focus:ring-2 focus:ring-slate-200 outline-none transition-all"
               />
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-12">
            {filtered.map(d => (
              <Card key={d.id} className="rounded-2xl border-slate-100 hover:border-slate-200 hover:shadow-md transition-all group cursor-pointer overflow-hidden">
                 <div className="p-4 flex items-center justify-between">
                    <div className="min-w-0">
                       <div className="text-[10px] font-black uppercase text-slate-400 mb-0.5">{d.cat}</div>
                       <h4 className="text-sm font-black text-slate-800 truncate">{d.name}</h4>
                    </div>
                    <Badge className="bg-slate-900 font-mono text-[11px] font-black">{d.icd}</Badge>
                 </div>
              </Card>
            ))}
        </div>
      </div>
    </div>
  );
}
