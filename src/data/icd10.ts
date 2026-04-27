// Expanded ICD-10 Database specifically mapped for primary care (FKTP) and typical BPJS referral needs.
export interface ICD10Entry {
  id: string;
  name: string;
  icd: string;
  cat: string;
}

export const EXTENDED_ICD10: ICD10Entry[] = [
  // Respiratory
  { id: 'ext1', name: 'Acute Nasopharyngitis (Common Cold)', icd: 'J00', cat: 'Respirasi' },
  { id: 'ext2', name: 'Acute Pharyngitis, unspecified', icd: 'J02.9', cat: 'Respirasi' },
  { id: 'ext3', name: 'Acute Tonsillitis, unspecified', icd: 'J03.9', cat: 'Respirasi' },
  { id: 'ext4', name: 'Acute Bronchitis, unspecified', icd: 'J20.9', cat: 'Respirasi' },
  { id: 'ext5', name: 'Asthma, unspecified', icd: 'J45.9', cat: 'Respirasi' },
  { id: 'ext6', name: 'Pneumonia, unspecified organism', icd: 'J18.9', cat: 'Respirasi' },
  { id: 'ext7', name: 'Pulmonary Tuberculosis', icd: 'A15.0', cat: 'Program TB' },

  // Cardiovascular
  { id: 'ext8', name: 'Essential (primary) Hypertension', icd: 'I10', cat: 'Kardiovaskuler' },
  { id: 'ext9', name: 'Hypertensive Heart Disease', icd: 'I11.9', cat: 'Kardiovaskuler' },
  { id: 'ext10', name: 'Angina Pectoris, unspecified', icd: 'I20.9', cat: 'Kardiovaskuler' },
  { id: 'ext11', name: 'Heart Failure, unspecified', icd: 'I50.9', cat: 'Kardiovaskuler' },

  // Endocrine & Metabolic
  { id: 'ext12', name: 'Type 2 Diabetes Mellitus without complications', icd: 'E11.9', cat: 'Endokrin' },
  { id: 'ext13', name: 'Hyperlipidaemia, unspecified', icd: 'E78.5', cat: 'Endokrin' },
  { id: 'ext14', name: 'Hyperuricaemia without signs of inflammatory arthritis', icd: 'E79.0', cat: 'Endokrin' },
  { id: 'ext15', name: 'Gout, unspecified', icd: 'M10.9', cat: 'Muskuloskeletal' },

  // Gastrointestinal
  { id: 'ext16', name: 'Dyspepsia', icd: 'K30', cat: 'Gastrointestinal' },
  { id: 'ext17', name: 'Gastritis, unspecified', icd: 'K29.7', cat: 'Gastrointestinal' },
  { id: 'ext18', name: 'Gastro-esophageal reflux disease (GERD)', icd: 'K21.9', cat: 'Gastrointestinal' },
  { id: 'ext19', name: 'Diarrhoea and gastroenteritis of presumed infectious origin', icd: 'A09', cat: 'Gastrointestinal' },
  { id: 'ext20', name: 'Typhoid fever', icd: 'A01.0', cat: 'Gastrointestinal' },

  // Neurological & Psychiatric
  { id: 'ext21', name: 'Tension-type headache', icd: 'G44.2', cat: 'Neurologi' },
  { id: 'ext22', name: 'Migraine, unspecified', icd: 'G43.9', cat: 'Neurologi' },
  { id: 'ext23', name: 'Vertigo of central origin', icd: 'H81.4', cat: 'Neurologi' },
  { id: 'ext24', name: 'Schizophrenia, unspecified', icd: 'F20.9', cat: 'Psikiatri' },
  { id: 'ext25', name: 'Anxiety disorder, unspecified', icd: 'F41.9', cat: 'Psikiatri' },

  // Musculoskeletal
  { id: 'ext26', name: 'Myalgia', icd: 'M79.1', cat: 'Muskuloskeletal' },
  { id: 'ext27', name: 'Low back pain', icd: 'M54.5', cat: 'Muskuloskeletal' },
  { id: 'ext28', name: 'Osteoarthritis, unspecified', icd: 'M19.9', cat: 'Muskuloskeletal' },

  // Skin & Appendages
  { id: 'ext29', name: 'Atopic dermatitis, unspecified', icd: 'L20.9', cat: 'Dermatologi' },
  { id: 'ext30', name: 'Allergic contact dermatitis', icd: 'L23.9', cat: 'Dermatologi' },
  { id: 'ext31', name: 'Tinea corporis', icd: 'B35.4', cat: 'Dermatologi' },
  { id: 'ext32', name: 'Scabies', icd: 'B86', cat: 'Dermatologi' },

  // Ophthalmology & ENT
  { id: 'ext33', name: 'Conjunctivitis, unspecified', icd: 'H10.9', cat: 'Mata' },
  { id: 'ext34', name: 'Hordeolum and other deep inflammation of eyelid', icd: 'H00.0', cat: 'Mata' },
  { id: 'ext35', name: 'Otitis externa, unspecified', icd: 'H60.9', cat: 'THT' },
  { id: 'ext36', name: 'Suppurative and unspecified otitis media', icd: 'H66.9', cat: 'THT' },

  // ObGyn & Urinary
  { id: 'ext37', name: 'Urinary tract infection, site not specified', icd: 'N39.0', cat: 'Urogenital' },
  { id: 'ext38', name: 'Calculus of kidney', icd: 'N20.0', cat: 'Urogenital' },
  { id: 'ext39', name: 'Antenatal screening, unspecified', icd: 'Z36.9', cat: 'Obsgin' },
  { id: 'ext40', name: 'Supervision of normal pregnancy', icd: 'Z34.9', cat: 'Obsgin' },

  // General & Infections
  { id: 'ext41', name: 'Fever, unspecified', icd: 'R50.9', cat: 'Umum' },
  { id: 'ext42', name: 'Dengue haemorrhagic fever', icd: 'A97.2', cat: 'Umum' }, // Custom or specific version
  { id: 'ext43', name: 'Malaria, unspecified', icd: 'B54', cat: 'Umum' },
  { id: 'ext44', name: 'Caries of dentine', icd: 'K02.1', cat: 'Gigi & Mulut' },
  { id: 'ext45', name: 'Pulpitis', icd: 'K04.0', cat: 'Gigi & Mulut' }
];

// Helper to merge extended ICD-10 with existing PPK diseases
export function getAllICD10(internalDiseases: any[]): ICD10Entry[] {
  const mappedInternal: ICD10Entry[] = internalDiseases.map(d => ({
    id: d.id,
    name: d.name,
    icd: d.icd,
    cat: d.cat
  }));

  // Combine and remove duplicates by ICD code (prefer internal PPK for duplicates if possible, or just append)
  const combined = [...mappedInternal, ...EXTENDED_ICD10];
  const unique = Array.from(new Map(combined.map(item => [item.icd, item])).values());
  
  // Sort alphabetically by category then name
  return unique.sort((a, b) => {
    if (a.cat === b.cat) {
      return a.name.localeCompare(b.name);
    }
    return a.cat.localeCompare(b.cat);
  });
}
