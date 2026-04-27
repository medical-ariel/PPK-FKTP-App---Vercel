export interface TatalaksanaItem {
  name: string;
  dose: string;
  note?: string;
  kategori?: string; // e.g. "Lini Pertama", "Lini Kedua", "Suportif"
}

export interface TatalaksanaDetailed {
  nonFarmakologi?: string[];
  farmakologi: {
    title: string;
    items: TatalaksanaItem[];
  }[];
  edukasiLanjut?: string[];
}

export interface Disease {
  id: string;
  name: string;
  icpc: string;
  icd: string;
  level: string;
  cat: string;
  icon: string;
  iconBg: string;
  image?: string;
  preview: string;
  masalah: string;
  overview?: {
    etiologi?: string;
    epidemiologi?: string;
    patofisiologi?: string;
    komplikasi?: string[];
  };
  anamnesis: string[];
  fisik: string[];
  penunjang: string[];
  penunjangDetail?: {
    nama: string;
    rasionalisasi: string;
  }[];
  diagnosis: string[];
  diagnosisBanding?: string[];
  tatalaksana: TatalaksanaItem[];
  tatalaksanaDetail?: TatalaksanaDetailed;
  edukasi: string[];
  rujukan: string[];
  peralatan?: string[];
  prognosis: {
    vitam: string;
    functionam: string;
    sanationam: string;
  };
  alerts?: AlertItem[];
  externalUrl?: string;
}

export interface AlertItem {
  type: 'danger' | 'warn' | 'ok';
  text: string;
}

export interface CustomMedication {
  id: string;
  diseaseId: string;
  name: string;
  dosage: string;
  frequency: string;
  notes?: string;
  createdAt: number;
}

export interface CategoryInfo {
  icon: string;
  color: string;
  variant?: 'blue' | 'purple' | 'red' | 'green' | 'amber' | 'emerald' | 'pink' | 'indigo' | 'cyan' | 'teal' | 'orange' | 'slate' | 'fuchsia';
}
