import { Disease, CategoryInfo } from '../types';

export const DISEASES: Disease[] = [
  {
    id: 'tb',
    name: 'Tuberkulosis Paru Dewasa',
    icpc: 'A70',
    icd: 'A15',
    level: '4A',
    cat: 'Umum & Infeksi',
    icon: '🫁',
    iconBg: '#fff3cd',
    image: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&q=80&w=800',
    preview: 'Penyakit infeksi kronik oleh Mycobacterium tuberculosis, ditandai batuk ≥2 minggu, keringat malam, dan penurunan BB.',
    masalah: 'TB paru adalah penyakit infeksi kronik yang disebabkan Mycobacterium tuberculosis. Indonesia adalah negara dengan beban TB tertinggi ke-3 di dunia. FKTP menjadi garda terdepan dalam penemuan kasus dan pengobatan TB melalui program DOTS.',
    overview: {
      etiologi: 'Infeksi spesifik oleh basil tahan asam (BTA) Mycobacterium tuberculosis. Menular melalui droplet nucleus saat penderita batuk, bersin, atau berbicara.',
      epidemiologi: 'Indonesia menyumbang >8% dari total kasus global. Faktor risiko meliputi gizi buruk, status imunokompromis (terutama koinfeksi HIV), diabetes melitus, dan lingkungan padat penduduk dengan ventilasi buruk.',
      patofisiologi: 'Inhalasi droplet yang membawa M. tuberculosis sampai ke alveolus, memicu makrofag alveolar. Tuberkel / granuloma tuberkulosis terbentuk karena respon imunitas seluler yang gagal mengeliminasi total bakteri, menyebabkan nekrosis perkejuan (caseous necrosis) dan kavitas.',
      komplikasi: ['Kor pulmonale (gagal jantung kanan sekunder akibat kerusakan paru)', 'Efusi pleura masif', 'Hemoptisis masif yang dapat mengancam jalan napas', 'Pneumotoraks spontan', 'Penyebaran ekstra-paru (meningitis TB, spondilitis, TB usus)']
    },
    anamnesis: ['Batuk ≥ 2 minggu (berdahak / tidak berdahak)', 'Batuk darah (hemoptisis)', 'Sesak napas', 'Nyeri dada', 'Demam tidak tinggi / meriang, terutama sore-malam', 'Keringat malam tanpa aktivitas', 'Nafsu makan menurun, berat badan turun', 'Riwayat kontak dengan pasien TB', 'Riwayat TB dan pengobatan sebelumnya', 'Riwayat HIV/AIDS, DM, gizi buruk'],
    fisik: ['Keadaan umum: tampak sakit, BB menurun', 'Demam subfebris (37,5–38°C)', 'Ronki basah halus di apeks paru', 'Suara napas melemah (efusi pleura / destruksi)', 'Tanda-tanda HIV/AIDS bila ada komorbiditas', 'Lymphadenopati regional'],
    penunjang: ['Rontgen thorax PA: infiltrat / kavitas apeks paru', 'Pemeriksaan dahak BTA SPS (Sewaktu-Pagi-Sewaktu) minimal 2 spesimen', 'TCM (Tes Cepat Molekuler) / Xpert MTB-RIF bila tersedia', 'Tes HIV wajib pada semua suspek TB', 'Gula darah (skrining DM)', 'LED / DL bila diperlukan'],
    penunjangDetail: [
      { nama: 'TCM (Tes Cepat Molekuler) GeneXpert', rasionalisasi: 'Gold standard diagnostik TB di FKTP saat ini karena sensitivitasnya jauh lebih tinggi dari mikroskopik dan mampu mendeteksi resistensi Rifampisin dalam waktu <2 jam.' },
      { nama: 'Rontgen Thorax PA', rasionalisasi: 'Membantu diagnosis pada kasus dengan suspek TB namun BTA/TCM negatif, melihat komplikasi (efusi, pneumotoraks), dan menilai luas lesi (mis. kavitas di lapangan atas).' },
      { nama: 'Pemeriksaan HIV', rasionalisasi: 'Koinfeksi HIV mempercepat progresi TB menjadi penyakit aktif. Mengetahui status HIV krusial untuk manajemen ARV dan profilaksis Kotrimoksazol.' }
    ],
    diagnosis: ['TB terkonfirmasi bakteriologis: BTA(+) atau TCM(+)', 'TB terdiagnosis klinis: BTA(-) tapi klinis & radiologi mendukung', 'Klasifikasi: TB paru baru / kambuh / gagal terapi / putus berobat', 'Pastikan status resistensi obat (RO-TB bila TCM resisten rifampisin)'],
    diagnosisBanding: ['Pneumonia (bakterial atipikal)', 'Karsinoma paru (keganasan, batuk disertai hemoptisis dan BB turun)', 'Bronkiektasis terinfeksi', 'Abses paru', 'Infeksi jamur paru (Aspergilloma / Histoplasmosis)'],
    tatalaksana: [
      { name: 'Fase Intensif (2 bulan): RHZE', dose: 'R:10, H:5, Z:25, E:15 mg/kgBB/hari', note: 'OAT KDT (Kombinasi Dosis Tetap) lebih dianjurkan' },
      { name: 'Fase Lanjutan (4 bulan): RH', dose: 'R:10, H:5 mg/kgBB/hari', note: 'Minum OAT didepan petugas (DOT/DOTS)' },
      { name: 'Pyridoxin (B6)', dose: '10–25 mg/hari', note: 'Untuk pencegahan neuropati perifer akibat INH' },
      { name: 'Nutrisi', dose: 'Diet TKTP', note: 'Perbaikan status gizi sangat penting' }
    ],
    tatalaksanaDetail: {
      nonFarmakologi: [
        'Program DOTS (Pengawasan Minum Obat langsung oleh PMO)',
        'Diet TKTP (Tinggi Kalori Tinggi Protein)',
        'Edukasi Etika Batuk dan penggunaan masker',
        'Optimasi ventilasi dan pencahayaan sinar matahari di rumah'
      ],
      farmakologi: [
        {
          title: 'Regimen OAT Kategori I (Fase Intensif - 2 Bulan)',
          items: [
            { name: 'RHZE (Kombinasi Dosis Tetap)', dose: 'Sesuai BB (2-5 tablet/hari)', note: 'Diminum pagi hari saat perut kosong' }
          ]
        },
        {
          title: 'Regimen OAT Kategori I (Fase Lanjutan - 4 Bulan)',
          items: [
            { name: 'RH (Kombinasi Dosis Tetap)', dose: 'Sesuai BB', note: '3 kali seminggu atau setiap hari (sesuai pedoman)' }
          ]
        },
        {
          title: 'Terapi Suportif',
          items: [
            { name: 'Vitamin B6 (Piridoksin)', dose: '10 - 25 mg /hari', note: 'Cegah efek samping neuropati dari INH' }
          ]
        }
      ]
    },
    edukasi: ['Minum OAT teratur setiap hari tanpa putus selama minimal 6 bulan', 'Tidak menghentikan obat meski sudah merasa sembuh', 'Gunakan masker saat batuk, tutup mulut dengan tisu', 'Meningkatkan ventilasi rumah dan paparan sinar matahari', 'Identifikasi dan periksa kontak serumah (terutama anak <5 tahun)', 'Pemantauan efek samping: gangguan hati, neuropati, gangguan penglihatan', 'Tidak merokok dan konsumsi alkohol'],
    rujukan: ['TB-RO (resisten obat) atau gagal TCM rifampisin', 'TB dengan komplikasi berat (hemoptisis masif, efusi masif, pneumotoraks)', 'TB-HIV dengan CD4 rendah atau klinis buruk', 'Suspek TB ekstra paru berat (meningitis, perikarditis)', 'Efek samping OAT berat (hepatotoksisitas, Steven-Johnson)', 'TB pada kehamilan (pertimbangan khusus)'],
    peralatan: ['Pot dahak, kaca objek', 'OAT KDT sesuai kategori', 'Timbangan BB', 'Kartu TB 01 dan 02'],
    prognosis: { vitam: 'Bonam', functionam: 'Bonam', sanationam: 'Bonam bila pengobatan tuntas' },
    alerts: [
      { type: 'danger', text: 'STOP OAT segera dan rujuk bila: ikterus, nyeri abdomen hebat, penurunan kesadaran, atau gangguan penglihatan mendadak!' },
      { type: 'warn', text: 'Periksa fungsi hati baseline sebelum terapi bila ada riwayat penyakit hati.' },
      { type: 'ok', text: 'Angka kesembuhan >85% dengan DOTS yang benar. Pastikan PMO (Pengawas Minum Obat) ada.' }
    ],
    externalUrl: 'https://www.alomedika.com/penyakit/pulmonologi/tuberkulosis-paru'
  },
  {
    id: 'anafilaktik',
    name: 'Reaksi Anafilaktik',
    icpc: 'A92',
    icd: 'T78.2',
    level: '4A',
    cat: 'Umum & Infeksi',
    icon: '⚡',
    iconBg: '#f8d7da',
    image: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&q=80&w=800',
    preview: 'Reaksi hipersensitivitas sistemik berat yang mengancam jiwa. Harus ditangani dalam hitungan menit.',
    masalah: 'Anafilaksis adalah reaksi hipersensitivitas sistemik yang berat dan mengancam jiwa, terjadi dalam hitungan menit setelah paparan alergen. Paling sering dipicu oleh obat (penisilin, NSAID), makanan (kacang, seafood), sengatan serangga, atau lateks.',
    anamnesis: ['Riwayat paparan alergen: obat, makanan, sengatan serangga, lateks', 'Onset gejala < 1 jam setelah paparan', 'Gatal-gatal, urtikaria, angioedema', 'Sesak napas, mengi, stridor', 'Mual, muntah, nyeri perut, diare', 'Pusing, sinkop, penurunan kesadaran', 'Riwayat alergi / anafilaksis sebelumnya', 'Penggunaan beta-bloker (dapat memperburuk)'],
    fisik: ['Hipotensi (SBP <90 mmHg atau turun >30% dari baseline)', 'Takikardia, lemah', 'Urtikaria dan angioedema', 'Stridor (edema laring), mengi (bronkospasme)', 'Sianosis, SpO2 turun', 'Akral dingin, capillary refill >2 detik', 'Penurunan kesadaran'],
    penunjang: ['Klinis utama — diagnosis dan terapi tidak boleh ditunda!', 'EKG (monitoring aritmia)', 'SpO2 continuous monitoring', 'Serum triptase (bukan syarat, nilai forensik)', 'Gula darah (DD hipoglikemia)'],
    diagnosis: ['Anafilaksis bila ≥1 dari: (1) kulit/mukosa + kompromis napas/sirkulasi; (2) hipotensi setelah paparan alergen; (3) ≥2 sistem organ terlibat setelah paparan', 'Derajat I: reaksi lokal; II: sistemik ringan; III: sistemik berat; IV: henti kardiopulmoner'],
    tatalaksana: [
      { name: 'EPINEFRIN (1:1000)', dose: '0,3–0,5 mg IM paha lateral, dapat ulang tiap 5–15 menit', note: 'OBAT UTAMA — JANGAN TUNDA! IM lebih cepat dari SC' },
      { name: 'Oksigen', dose: '8–10 L/mnt via masker NRM', note: 'Target SpO2 >95%' },
      { name: 'Posisi', dose: 'Supine + elevasi kaki (kecuali distres napas)', note: 'Jangan biarkan berdiri/duduk tiba-tiba' },
      { name: 'Cairan IV', dose: 'NaCl 0,9% atau RL bolus 500–1000 mL cepat', note: 'Bila hipotensi persisten' },
      { name: 'Difenhidramin', dose: '25–50 mg IV/IM', note: 'Antihistamin H1 — sebagai adjuvan, BUKAN terapi utama' },
      { name: 'Metilprednisolon', dose: '125 mg IV bolus', note: 'Untuk mencegah reaksi bifasik — onset lambat' }
    ],
    tatalaksanaDetail: {
      nonFarmakologi: [
        'Hentikan paparan alergen segera',
        'Posisi berbaring telentang dengan kaki ditinggikan (Trendelenburg modifikasi)',
        'Pemberian Oksigen aliran tinggi (NRM 10-15 Lpm)',
        'Monitoring ketat TTV setiap 5 menit (TD, Nadi, Respirasi)'
      ],
      farmakologi: [
        {
          title: 'Pilihan Utama (Life-Saving)',
          items: [
            { name: 'Epinefrin (Adrenalin) 1:1000', dose: '0.3 - 0.5 mg (IM)', note: 'Suntikkan pada Paha Lateral (M. Vastus Lateralis)' }
          ]
        },
        {
          title: 'Resusitasi Cairan (Jika Hipotensi)',
          items: [
            { name: 'Cairan Isotonik (NaCl 0.9% / RL)', dose: '1 - 2 Liter (Grojog/Cepat)', note: 'Gunakan akses IV jarum besar' }
          ]
        },
        {
          title: 'Terapi Adjuvan (Pencegahan Reaksi Lambat)',
          items: [
            { name: 'Dexamethasone / Metilprednisolon', dose: '125 mg (IV)', note: 'Cegah reaksi bifasik (onset 4-6 jam)' },
            { name: 'Diphenhydramine (Antihistamin)', dose: '25 - 50 mg (IV/IM)', note: 'Kurangi gejala urtikaria/angioedema' }
          ]
        }
      ]
    },
    edukasi: ['Pasien wajib membawa epinefrin auto-injector (EpiPen) bila tersedia', 'Hindari alergen yang sudah teridentifikasi', 'Kenakan gelang medis alergi', 'Edukasi keluarga cara penggunaan epinefrin auto-injector', 'Konsultasi ke spesialis alergi-imunologi', 'Jangan konsumsi beta-bloker tanpa konsultasi dokter'],
    rujukan: ['Semua kasus anafilaksis → stabilisasi di FKTP lalu RUJUK SEGERA ke IGD RS', 'Hipotensi tidak respons setelah 2 dosis epinefrin', 'Penurunan kesadaran', 'Stridor atau gagal napas', 'Henti jantung → RJP + epinefrin IV'],
    prognosis: { vitam: 'Malam bila tidak ditangani cepat', functionam: 'Bonam bila respons epinefrin baik', sanationam: 'Bonam dengan edukasi dan identifikasi alergen' },
    alerts: [
      { type: 'danger', text: 'EPINEFRIN adalah satu-satunya terapi definitif anafilaksis. Jangan tunda dengan menunggu hasil lab atau mencoba antihistamin lebih dulu!' }
    ],
    externalUrl: 'https://www.alomedika.com/penyakit/penyakit-infeksi/anafilaksis'
  },
  {
    id: 'dbd',
    name: 'Demam Berdarah Dengue',
    icpc: 'A77',
    icd: 'A91',
    level: '4A',
    cat: 'Umum & Infeksi',
    icon: '🦟',
    iconBg: '#d4edda',
    image: 'https://images.unsplash.com/photo-1502472855673-fb153d6193b5?auto=format&fit=crop&q=80&w=800',
    preview: 'Infeksi virus dengue oleh Aedes aegypti. Waspada tanda bahaya pada hari ke-4–6.',
    masalah: 'DBD adalah infeksi virus dengue yang ditularkan Aedes aegypti. Puncak beratnya penyakit terjadi pada fase kritis (hari 4–6) dengan risiko kebocoran plasma, perdarahan, dan syok.',
    overview: {
      etiologi: 'Infeksi Virus Dengue (DENV 1-4) yang ditularkan utamanya melalui gigitan nyamuk Aedes aegypti betina, dan sebagian kecil Aedes albopictus.',
      epidemiologi: 'Endemis di daerah tropis seperti Indonesia. Insidensi meningkat selama musim hujan. Sering terjadi pada anak-anak hingga dewasa muda, namun dapat mengenai semua umur.',
      patofisiologi: 'Virus bereplikasi di makrofag, memicu pelepasan badai sitokin (TNF-alpha, IL-6) yang menyebabkan kerusakan endotel vaskular. Hal ini memicu peningkatan permeabilitas kapiler (kebocoran plasma) yang berujung pada hemokonsentrasi, efusi, asites, dan akhirnya syok hipovolemik (DSS).',
      komplikasi: ['Dengue Shock Syndrome (DSS)', 'Perdarahan masif intrakranial/gastrointestinal', 'Ensefalopati Dengue', 'Gagal hati akut', 'Gagal ginjal akut (AKI)']
    },
    anamnesis: ['Demam mendadak tinggi 2–7 hari', 'Nyeri kepala, retro-orbital, mialgia, artralgia', 'Mual, muntah, nyeri perut', 'Perdarahan kulit: petekie, purpura, ekimosis', 'Perdarahan mukosa: epistaksis, gusi berdarah', 'Tanda bahaya: nyeri perut hebat, muntah terus-menerus, perdarahan masif, gelisah/lesu, tidak BAK >6 jam'],
    fisik: ['Febris ≥38°C', 'Uji torniquet positif (≥10 petekie/1 inch²)', 'Petekie/purpura spontan', 'Hepatomegali nyeri tekan', 'Tanda syok: TD turun, nadi cepat lemah, akral dingin', 'Tanda efusi pleura / asites'],
    penunjang: ['Darah lengkap serial: hemokonsentrasi (Ht naik ≥20%), trombositopenia', 'NS1 antigen (positif hari 1–5)', 'IgM/IgG dengue (positif hari 5+)'],
    penunjangDetail: [
      { nama: 'Darah Lengkap Serial', rasionalisasi: 'Pemeriksaan paling krusial. Peningkatan Hematokrit (Ht) >20% dari baseline menandakan adanya kebocoran plasma yang aktif. Trombositopenia <100.000 menyertai perjalanan penyakit.' },
      { nama: 'Uji NS1 Antigen Dengue', rasionalisasi: 'Sangat spesifik untuk mendeteksi infeksi akut jika diperiksa pada demam hari ke 1 sampai 5. Menurun drastis akurasinya setelah hari ke-5.' },
      { nama: 'IgM dan IgG Anti-Dengue', rasionalisasi: 'IgM muncul mulai hari ke-4/5 menandakan infeksi akut. IgG(+) dengan IgM(+) menandakan infeksi sekunder yang berisiko lebih letal memicu DBD/DSS dibanding infeksi primer.' }
    ],
    diagnosis: ['DBD derajat I: demam + uji torniquet(+), trombosit <100.000', 'DBD derajat II: derajat I + perdarahan spontan', 'DBD derajat III: tanda syok (nadi lemah, hipotensi)', 'DBD derajat IV: syok berat, TD tidak terukur'],
    diagnosisBanding: ['Demam Typhoid (biasanya step-ladder, bradikardi relatif)', 'Malaria (pola demam intermiten, riwayat bepergian ke daerah endemis)', 'Chikungunya (nyeri sendi sangat dominan, demam mendadak)', 'Measles/Campak (ruam koplik, batuk pilek dominan)', 'Leptospirosis (nyeri betis, riwayat kontak banjir/tikus)'],
    tatalaksana: [
      { name: 'Cairan oral / IV', dose: 'Paracetamol 10-15 mg/kgBB/dosis q6h (JANGAN aspirin/ibuprofen)', note: 'Cairan 2L/hari oral bila grade I-II tanpa tanda bahaya' },
      { name: 'Rehidrasi IV — Fase Non-Kritis', dose: 'Kristaloid (RL/NaCl 0,9%) 6–7 mL/kgBB/jam', note: 'Sesuaikan kecepatan berdasarkan Ht serial' },
      { name: 'Rehidrasi IV — Fase Syok (DSS)', dose: 'Bolus cairan 10–20 mL/kgBB dalam 30 menit', note: 'Bila tidak respons: pertimbangkan koloid' }
    ],
    tatalaksanaDetail: {
      nonFarmakologi: [
        'Tirah baring (Bed rest) total',
        'Monitoring asupan cairan (oralit, jus buah, air putih)',
        'Monitor TTV setiap 4-6 jam (Fase febris)',
        'Monitor tanda bahaya (abdominal pain, muntah, perdarahan)'
      ],
      farmakologi: [
        {
          title: 'Managemen Simtomatis (Demam/Nyeri)',
          items: [
            { name: 'Paracetamol', dose: '500 mg (Dewasa) / 10mg/kg (Anak)', note: 'Satu-satunya antipiretik aman. NO NSAID!' }
          ]
        },
        {
          title: 'Terapi Cairan Maintenance (Lini 1)',
          items: [
            { name: 'Cairan Kristaloid (RL / RA)', dose: 'Tetesan sesuai maintenance', note: 'Target Urine Output 0.5 - 1 ml/kg/jam' }
          ]
        }
      ]
    },
    edukasi: ['Pantau tanda bahaya di rumah: muntah terus-menerus, nyeri perut, gelisah, tidak kencing', 'Minum cairan adekuat: air putih, jus, oralit', '3M Plus: Menguras, Menutup, Mendaur ulang + lotion anti-nyamuk'],
    rujukan: ['DBD derajat III/IV (syok dengue)', 'Tanda bahaya: nyeri perut hebat, hematemesis, melena, hematuria masif', 'Trombosit <20.000 atau turun cepat'],
    prognosis: { vitam: 'Bonam bila tidak ada syok', functionam: 'Bonam', sanationam: 'Bonam' },
    alerts: [
      { type: 'danger', text: 'JANGAN berikan aspirin atau ibuprofen — risiko perdarahan fatal! Hanya paracetamol untuk antipiretik.' }
    ],
    externalUrl: 'https://www.alomedika.com/penyakit/penyakit-infeksi/dengue-hemorrhagic-fever'
  },
  {
    id: 'dm',
    name: 'Diabetes Mellitus Tipe 2',
    icpc: 'T90',
    icd: 'E11',
    level: '4A',
    cat: 'Metabolik',
    icon: '🩸',
    iconBg: '#fff3e0',
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=800',
    preview: 'GDS ≥200 atau GDP ≥126 atau HbA1c ≥6,5%. Target HbA1c <7%. Edukasi diabetes adalah terapi utama.',
    masalah: 'DM tipe 2 adalah penyakit metabolik kronik akibat resistensi insulin dan penurunan produksi insulin.',
    overview: {
      etiologi: 'Kegagalan sel beta pankreas secara progresif seiring dengan resistensi insulin pada jaringan (otot, liver, lemak). Sering berkaitan erat dengan mutasi poligenik dan gaya hidup sedentari.',
      epidemiologi: 'Prevalensi di Indonesia mencapai lebih dari 10% orang dewasa. Didominasi oleh usia >40 tahun, namun belakangan makin sering dijumpai pada dewasa muda akibat obesitas (epidemi diabesity).',
      patofisiologi: 'Kondisi kelebihan asupan kalori kronis dan obesitas sentral menyebabkan lipotoksisitas dan respon peradangan derajat rendah. Hal ini memicu resistensi receptor insulin. Pankreas dipaksa memproduksi insulin eksesif (hiperinsulinemia) hingga sel beta mengalami kelelahan apopotosis, yang berujung pada defisiensi insulin relatif dan hiperglikemia menahun.',
      komplikasi: ['Penyakit Jantung Koroner / Infark Miokard', 'Nefropati Diabetik (Gagal Ginjal Kronis)', 'Retinopati Diabetik (Kebutaan)', 'Kaki Diabetik (Amputasi ekstremitas bawah)', 'Neuropati Perifer (Hilangnya sensasi saraf protektif)']
    },
    anamnesis: ['Poliuri, polidipsi, polifagi (gejala klasik)', 'Penurunan berat badan tidak jelas sebabnya', 'Kelemahan, kelelahan', 'Pandangan kabur', 'Luka sulit sembuh', 'Kesemutan / baal di kaki (neuropati)'],
    fisik: ['BB, TB, IMT, lingkar pinggang', 'TD (komorbiditas HT sangat sering)', 'Sensasi kaki: monofilamen 10g', 'Pemeriksaan kaki komprehensif'],
    penunjang: ['GDS, GDP, GD2PP', 'HbA1c (target <7%)', 'Fungsi ginjal: ureum, kreatinin, eGFR', 'Lipid profil: LDL target <100'],
    penunjangDetail: [
      { nama: 'Pemeriksaan HbA1c', rasionalisasi: 'Memberikan gambaran kadar rerata glukosa darah selama 2-3 bulan terakhir. Tidak dipengaruhi puasa sesaat. Nilai ≥6.5% tegak diagnostik DM.' },
      { nama: 'Glukosa Darah Puasa (GDP) & 2 Jam PP', rasionalisasi: 'GDP ≥126 mg/dL setelah puasa 8 jam sangat sugestif DM. Tes Toleransi Glukosa Oral (TTGO/GD2PP) melihat kemampuan tubuh merespons beban kalori glukosa.' },
      { nama: 'Pemeriksaan Profil Lipid & Fungsi Ginjal', rasionalisasi: 'Pasien DM memiliki risiko kardiovaskular tinggi. Deteksi Dislipidemia (LDL tinggi) dan kerusakan mikrovaskular ginjal (Kreatinin naik, eGFR turun) sangat penting di awal.' }
    ],
    diagnosis: ['DM: GDS ≥200 + gejala, ATAU GDP ≥126 (2x), ATAU GD2PP ≥200, ATAU HbA1c ≥6,5%'],
    diagnosisBanding: ['Diabetes Mellitus Tipe 1 (usia sangat muda, autoimun, sangat kurus, rentan KAD)', 'Diabetes Gestasional (terdeteksi saat kehamilan trimester 2-3)', 'Diabetes Tipe Lain (akibat pankreatitis kronis, kista pankreas, atau efek obat-obatan steroid kronis)', 'Prediabetes (Impaired Fasting Glucose/Impaired Glucose Tolerance)'],
    tatalaksana: [
      { name: 'Modifikasi gaya hidup', dose: 'Diet diabetes, olahraga 150 mnt/minggu', note: 'Target penurunan BB 5-10%' },
      { name: 'Metformin (lini pertama)', dose: '2-3 x 500-1000 mg/hari', note: 'Makan bersama makanan. STOP bila eGFR <30.' },
      { name: 'Sulfonilurea (Glibenklamid/Glimepirid)', dose: 'Glimepirid 1-8 mg/hari', note: 'Risiko hipoglikemia! Hindari pada lansia' }
    ],
    tatalaksanaDetail: {
      nonFarmakologi: [
        'Edukasi Nutrisi (Pola makan 3J: Jadwal, Jumlah, Jenis)',
        'Aktivitas fisik aerobik 150 menit/minggu (Jalan cepat)',
        'Perawatan kaki (gunakan alas kaki yang nyaman, periksa luka setiap hari)',
        'Penurunan berat badan target IMT normal'
      ],
      farmakologi: [
        {
          title: 'Monoterapi (Lini Pertama)',
          items: [
            { name: 'Metformin', dose: '500 mg (2 - 3x sehari)', note: 'Obat utama. Diminum bersama/setelah makan' }
          ]
        },
        {
          title: 'Terapi Kombinasi (Lini Kedua)',
          items: [
            { name: 'Sulfonilurea (Glimepirid)', dose: '1 - 4 mg (1x sehari)', note: 'Waspada Hipoglikemia (terutama lansia)' },
            { name: 'Acarbose', dose: '50 - 100 mg (3x sehari)', note: 'Diminum bersama suapan pertama makanan' }
          ]
        }
      ]
    },
    edukasi: ['Perawatan kaki: cuci, keringkan, periksa setiap hari', 'Tanda hipoglikemia dan cara penanganan', 'Monitoring GD mandiri (SMBG)'],
    rujukan: ['DM dengan komplikasi berat', 'Krisis hiperglikemia (KAD / HHS)', 'Kehamilan dengan DM'],
    prognosis: { vitam: 'Bonam bila terkontrol baik', functionam: 'Bonam bila komplikasi dicegah', sanationam: 'Seumur hidup' },
    alerts: [
      { type: 'danger', text: 'Hipoglikemia (GDS <70): beri 15g karbohidrat cepat (3 tablet glukosa, 150 mL jus buah).' }
    ],
    externalUrl: 'https://www.alomedika.com/penyakit/endokrinologi/diabetes-melitus-tipe-2'
  },
  {
    id: 'hipertensi',
    name: 'Hipertensi Esensial',
    externalUrl: 'https://www.alomedika.com/penyakit/kardiologi/hipertensi',
    icpc: 'K86',
    icd: 'I10',
    level: '4A',
    cat: 'Kardiovaskular',
    icon: '❤️',
    iconBg: '#fce4ec',
    preview: 'TD ≥140/90 mmHg. Silent killer — target TD <130/80 mmHg pada sebagian besar pasien.',
    masalah: 'Hipertensi adalah penyebab utama penyakit kardiovaskular, stroke, dan gagal ginjal di Indonesia.',
    overview: {
      etiologi: 'Lebih dari 90% kasus adalah Hipertensi Esensial (primer) tanpa penyabab yang jelas secara klinis, dipengaruhi oleh genetik, disfungsi endotel, dan faktor gaya hidup. Kurang dari 10% adalah Hipertensi Sekunder.',
      epidemiologi: 'Prevalensi sangat tinggi, mencapai ±34% penduduk usia dewasa di Indonesia (Riskesdas). Kasus meningkat dramatis seiring bertambahnya usia.',
      patofisiologi: 'Terjadi peningkatan Systemic Vascular Resistance (SVR) dan/atau curah jantung. Mekanisme utama melibatkan hiperaktivitas sistem saraf simpatik, over-aktivitas sistem Renin-Angiotensin-Aldosteron (RAAS) yang menahan natrium & air, dan remodeling vaskular (kekakuan dinding pembuluh darah).',
      komplikasi: ['Stroke Hemoragik/Iskemik', 'Penyakit Jantung Koroner / Gagal Jantung Kongestif (CHF)', 'Penyakit Ginjal Kronik (ESRD)', 'Retinopati Hipertensif', 'Hipertrofi Ventrikel Kiri (LVH)']
    },
    anamnesis: ['Seringkali asimtomatik', 'Nyeri kepala, terutama pagi hari (oksipital)', 'Penglihatan kabur', 'Bengkak kaki'],
    fisik: ['TD bilateral (posisi duduk)', 'Auskultasi jantung: murmur, S3/S4', 'Edema perifer'],
    penunjang: ['Urinalisis (proteinuria)', 'Ureum, kreatinin (fungsi ginjal)', 'EKG (LVH)'],
    penunjangDetail: [
      { nama: 'Elektrokardiogram (EKG) 12-lead', rasionalisasi: 'Penting untuk mendeteksi pembesaran jantung kiri (Left Ventricular Hypertrophy - LVH), iskemia kronik, atau aritmia yang mungkin tidak bergejala akibat hipertensi berkepanjangan.' },
      { nama: 'Urinalisis Lengkap', rasionalisasi: 'Mendeteksi mikroalbuminuria / proteinuria sisa. Jika protein (+), ini merupakan tanda awal kerusakan "target organ" pada ginjal (Nefropati hipertensif).' },
      { nama: 'Pemeriksaan Darah (Ureum, Kreatinin, Profil Lipid)', rasionalisasi: 'Menilai estimasi fungsi filtrasi (eGFR) serta sindrom metabolik komorbid. Karena hipertensi dan dislipidemia mempercepat aterosklerosis.' }
    ],
    diagnosis: ['Hipertensi: TD ≥140/90 mmHg dari ≥2 pengukuran berbeda'],
    diagnosisBanding: ['Hipertensi Sekunder (Penyakit Ginjal Parenkimal, Stenosis Arteri Renalis)', 'Hipertiroidisme (memicu hipertensi sistolik)', 'Sleep Apnea Syndrome (OSA)', 'Efek Samping Obat (NSAID kronis, KB Hormonal)'],
    tatalaksana: [
        { name: 'CCB (Amlodipine)', dose: '5-10 mg/hari', note: 'Lini pertama' },
        { name: 'ARB (Candesartan)', dose: '8-32 mg/hari', note: 'Lini pertama' },
        { name: 'ACEi (Captopril)', dose: '3x12,5-50 mg', note: 'Alternatif' }
    ],
    tatalaksanaDetail: {
      nonFarmakologi: [
        'Diet DASH (Rendah garam < 2 gram/hari)',
        'Olahraga rutin 30 menit/hari, 5x seminggu',
        'Berhenti merokok dan batasi konsumsi alkohol',
        'Managemen stres dan pola tidur yang baik'
      ],
      farmakologi: [
        {
          title: 'Monoterapi Lini Pertama',
          items: [
            { name: 'Amlodipine (CCB)', dose: '5 mg atau 10 mg (1x sehari)', note: 'Pilihan utama lansia. Waspada bengkak kaki' },
            { name: 'Candesartan (ARB)', dose: '8 mg atau 16 mg (1x sehari)', note: 'Drug of choice pada pasien DM/Gagal Ginjal' }
          ]
        },
        {
          title: 'Lini Alternatif / Kombinasi',
          items: [
            { name: 'HCT (Diuretik)', dose: '12.5 mg atau 25 mg (1x pagi)', note: 'Waspada hipokalemia' },
            { name: 'Captopril (ACEi)', dose: '12.5 mg - 25 mg (2-3x sehari)', note: 'Diminum 1 jam sebelum makan. Efek batuk.' }
          ]
        }
      ]
    },
    edukasi: ['Minum obat teratur seumur hidup', 'Diet rendah garam (<5g/hari)', 'Olahraga aerobik 30 menit, 5x/minggu'],
    rujukan: ['Hipertensi krisis (emergensi)', 'Resistensi terapi (≥3 obat)', 'Hipertensi sekunder'],
    prognosis: { vitam: 'Bonam bila terkontrol', functionam: 'Bonam', sanationam: 'Baik dengan kepatuhan' },
    alerts: [
      { type: 'danger', text: 'Hipertensi emergensi (TD >180/120 + kerusakan organ): RUJUK CITO!' }
    ]
  },
  {
    id: 'asma',
    name: 'Asma Bronkial (Eksaserbasi Akut)',
    externalUrl: 'https://www.alomedika.com/penyakit/pulmonologi/asma-bronkial',
    icpc: 'R96',
    icd: 'J45',
    level: '4A',
    cat: 'Respirasi',
    icon: '🌬️',
    iconBg: '#e6fffa',
    preview: 'Penyempitan saluran napas reversibel. Gejala mengi, sesak, dan batuk yang memburuk pada malam/dini hari.',
    masalah: 'Asma adalah inflamasi kronik saluran napas yang menyebabkan hipereaktivitas bronkus terhadap berbagai rangsangan.',
    overview: {
      etiologi: 'Didorong oleh faktor genetik (atopi) dan lingkungan. Pemicu akut (trigger) tersering meliputi debu tungau, serbuk sari, udara dingin, infeksi virus saluran napas (ISPA), stres emosional, dan aktivitas fisik (Exercise-Induced Asthma).',
      epidemiologi: 'Banyak ditemukan pada usia anak hingga remaja, sering menetap hingga dewasa. Wanita dewasa memiliki risiko agak lebih besar dibanding pria.',
      patofisiologi: 'Paparan alergen memicu sel Th2 melepaskan sitokin (IL-4, IL-5) yang merekrut eosinofil dan mengikat IgE di sel mast. Terjadi degranulasi histamin dan mediator inflamasi akut lain. Hal ini mengakibatkan tiga kelainan utama secara serentak: 1) Bronkospasme (otot polos menyempit), 2) Edema mukosa bronkus, dan 3) Hipersekresi mukus kental.',
      komplikasi: ['Status Asmatikus / Serangan Asma Berat Mengancam Jiwa', 'Gagal Napas', 'Pneumotoraks/Pneumomediastinum (akibat barotrauma)', 'Kor Pulmonale (bila terjadi PPOK kronik)', 'Gangguan pertumbuhan anak akibat terapi steroid tak terkontrol']
    },
    anamnesis: ['Sesak napas episodik', 'Mengi (wheezing)', 'Batuk (terutama malam/dini hari)', 'Dada terasa berat', 'Faktor pencetus: debu, rinitas, udara dingin, aktivitas fisik, emosi', 'Riwayat atopi pada pasien atau keluarga'],
    fisik: ['Ekspirasi memanjang', 'Wheezing pada kedua lapangan paru', 'Penggunaan otot bantu napas (pada serangan berat)', 'Sianosis atau silent chest (serangan sangat berat/mengancam jiwa)'],
    penunjang: ['Peak Flow Meter (APE)', 'Spirometri (bila tersedia)', 'Uji bronkodilator (reversibilitas >12% FEV1)'],
    penunjangDetail: [
      { nama: 'Peak Expiratory Flow Rate (PEFR)', rasionalisasi: 'Cara termudah dan objektif di faskes primer. Dilakukan sebelum dan 15 menit setelah pemberian bronkodilator SABA kompresor inhalasi. Peningkatan PEFR >20% membuktikan diagnosis asma.' },
      { nama: 'Spirometri (Bila Memungkinkan)', rasionalisasi: 'Menilai VEP1/KVP. Pola obstruksi akan terlihat (rasio VEP1/KVP <75%). Pada asma, kelainan ini bersifat reversibel setelah di nebulisasi dibanding pola PPOK.' },
      { nama: 'Saturasi Oksigen (Pulse Oximetry)', rasionalisasi: 'Wajib pada fase akut serangan. SpO2 <90% menandakan hipoksemia berat yang harus di rujuk atau mendapat O2 aliran tinggi.' }
    ],
    diagnosis: ['Asma: Variabilitas gejala + bukti keterbatasan aliran udara ekspirasi yang reversibel.'],
    diagnosisBanding: ['PPOK / COPD (usia >40 tahun, riwayat merokok kronis, penyempitan saluran napas tidak reversibel sepenuhnya)', 'Gagal Jantung Akut (Asma kardiak, disertai ronki basah basal, paroxysmal nocturnal dyspnea)', 'Benda Asing Saluran Napas (onset mendadak tersedak)', 'Tuberkulosis (batuk produktif kronik, penurunan BB, keringat malam)'],
    tatalaksana: [
      { name: 'SABA (Salbutamol inhalasi)', dose: '2-4 semprot q20m (jam pertama), lalu tiap 3-4 jam', note: 'Obat pelega utama (reliever)' },
      { name: 'Kortikosteroid Oral', dose: 'Prednison 0,5-1 mg/kgBB selama 5 hari', note: 'Mencegah kekambuhan dini' },
      { name: 'ICS (Budesonide/Fluticasone)', dose: 'Dosis rendah-sedang q12h', note: 'Terapi pengontrol (controller)' }
    ],
    tatalaksanaDetail: {
      nonFarmakologi: [
        'Identifikasi dan hindari alergen/pencetus (Debu, Dingin, Serangga, dll)',
        'Edukasi cara penggunaan inhaler (MDI) dan spacer yang benar',
        'Berhenti merokok dan hindari paparan asap rokok (perokok pasif)',
        'Latihan pernapasan dan aktivitas fisik terukur'
      ],
      farmakologi: [
        {
          title: 'Terapi Pelega (Reliever) - Saat Serangan',
          items: [
            { name: 'Salbutamol (SABA) Inhalasi', dose: '100 mcg (2 - 4 semprot)', note: 'Bisa diulang setiap 20 menit pada jam pertama' },
            { name: 'Ipratropium Bromida (SAMA)', dose: 'Nebulisasi (per 8 jam)', note: 'Bila tidak respons dengan SABA tunggal' }
          ]
        },
        {
          title: 'Terapi Pengontrol (Controller) - Jangka Panjang',
          items: [
            { name: 'Budesonide (ICS)', dose: '200 mcg - 400 mcg (q12h)', note: 'Wajib kumur air setelah menggunakan inhaler steroid' },
            { name: 'Prednisone (Oral)', dose: '40 mg - 60 mg /hari (5 hari)', note: 'Hanya untuk eksaserbasi akut (Short Course)' }
          ]
        }
      ]
    },
    edukasi: ['Identifikasi dan hindari pencetus', 'Teknik penggunaan inhaler/spacer yang benar', 'Pentingnya obat pengontrol meskipun tidak ada gejala'],
    rujukan: ['Gagal napas / ancaman henti napas', 'Tidak respons dengan terapi inisial inhalasi', 'Riwayat asma berat (pernah intubasi)'],
    prognosis: { vitam: 'Bonam bila terkontrol', functionam: 'Bonam', sanationam: 'Bonam' },
    alerts: [
      { type: 'danger', text: 'Silent chest (wheezing hilang pada pasien sesak berat) = Bahaya henti napas! Segera lakukan stabilisasi dan RUJUK!' }
    ],
  },
  {
    id: 'gastritis',
    name: 'Gastritis & Dispepsia',
    externalUrl: 'https://www.alomedika.com/penyakit/gastroentero-hepatologi/gastritis',
    icpc: 'D07',
    icd: 'K29.7',
    level: '4A',
    cat: 'Gastrointestinal',
    icon: '🤢',
    iconBg: '#fff5f5',
    preview: 'Nyeri ulu hati, mual, dan kembung. Waspada "Alarm Symptoms" untuk keganasan.',
    masalah: 'Gastritis adalah proses inflamasi pada mukosa dan submukosa lambung.',
    overview: {
      etiologi: 'Lebih dari 80% disebabkan oleh infeksi bakteri H. pylori. Penyebab lainnya termasuk penggunaan NSAID kronis, stres fisik/psikologis berat, konsumsi alkohol, dan empedu refluks.',
      epidemiologi: 'Dispepsia adalah salah satu diagnosis terbanyak di rawat jalan faskes primer. Gastritis akibat H. pylori sangat terkait dengan sanitasi lingkungan.',
      patofisiologi: 'Terjadi ketidakseimbangan antara faktor agresif (asam lambung, pepsin, infeksi) dan faktor defensif paru (mukus, bikarbonat, aliran darah mukosa). NSAID menghambat sintesis prostaglandin yang sangat penting untuk melindungi mukosa lambung. H. pylori memproduksi urease yang merusak epitel.',
      komplikasi: ['Ulkus Peptikum (Tukak Lambung / Tukak Duodenum)', 'Perdarahan Saluran Cerna Bagian Atas (Hematemesis/Melena)', 'Anemia Pernisiosa (pada gastritis autoimun)', 'Kanker Lambung (Karsinoma / MALT Limfoma)']
    },
    anamnesis: ['Nyeri ulu hati (epigastrium)', 'Mual, muntah', 'Kembung, cepat kenyang', 'Sendawa', 'Riwayat konsumsi NSAID atau jamu pegel linu', 'Riwayat konsumsi alkohol/kopi berlebih'],
    fisik: ['Nyeri tekan epigastrium', 'Konjungtiva anemis (bila ada komplikasi perdarahan kronik)', 'Tanda-tanda dehidrasi bila muntah masif'],
    penunjang: ['Tes H. pylori (bila tersedia)', 'Uji urea napas (UBT)', 'Endoskopi (bukan di FKTP, kecuali rujukan)'],
    penunjangDetail: [
      { nama: 'Darah Lengkap', rasionalisasi: 'Untuk menyingkirkan anemia akibat perdarahan mikroskopis kronis dari kerusakan mukosa (Hematokrit turun).' },
      { nama: 'Uji H. Pylori (Urea Breath Test / Serologi)', rasionalisasi: 'Mendeteksi ada/tidaknya infeksi H. pylori untuk menentukan perlunya terapi antibiotik eradikasi.' },
      { nama: 'Endoskopi (Esophagogastroduodenoscopy - EGD)', rasionalisasi: 'Gold standard. Hanya dilakukan atas rujukan (terutama pasien >45 tahun dengan gejala baru) untuk melihat ulkus, tumor, dan melakukan biopsi.' }
    ],
    diagnosis: ['Dispepsia: Kumpulan gejala nyeri ulu hati, kembung, mual.', 'Gastritis: Diagnosis definitif via histopatologi/endoskopi.'],
    diagnosisBanding: ['Infark Miokard Akut / Angina (rasa terbakar di dada menjalar)', 'Pankreatitis Akut (nyeri epigastrium tembus ke punggung)', 'Kolesistitis / Batu Empedu (nyeri kuadran kanan atas, memburuk setelah makan berlemak)', 'GERD (manifestasi lebih dominan heartburn & regurgitasi)'],
    tatalaksana: [
      { name: 'Antasida', dose: '500-1000 mg q8h ac', note: 'Gejala ringan' },
      { name: 'H2 Receptor Blocker (Ranitidin)', dose: '150 mg q12h', note: 'Hati-hati dosis pada lansia' },
      { name: 'Proton Pump Inhibitor (Omeprazole)', dose: '20 mg q12h atau 40 mg q24h ac', note: 'Paling efektif untuk penekanan asam lambung' }
    ],
    tatalaksanaDetail: {
      nonFarmakologi: [
        'Makan porsi kecil tetapi sering (Small frequent meals)',
        'Hindari makanan pemicu (Pedas, Asam, Lemak/Bersantan)',
        'Hindari Kopi, Soda, dan Alkohol',
        'Makan terakhir minimal 2-3 jam sebelum tidur'
      ],
      farmakologi: [
        {
          title: 'Penekan Asam Lambung (Lini Utama)',
          items: [
            { name: 'Omeprazole / Lansoprazole (PPI)', dose: '20 mg (q12h) atau 40 mg (q24h)', note: 'Obat paling kuat. Diminum 30-60 menit SEBELUM makan' },
            { name: 'Ranitidine / Famotidine (H2B)', dose: '150 mg (q12h)', note: 'Pilihan alternatif yang lebih terjangkau' }
          ]
        },
        {
          title: 'Terapi Simtomatis & Mucoprotectant',
          items: [
            { name: 'Antasida Syrup (AlOH3 / MgOH2)', dose: '5 - 10 ml (q8h ac)', note: 'Bekerja cepat menetralkan asam. Diminum saat lambung kosong.' },
            { name: 'Sucralfate Syrup', dose: '500 mg - 1 gram (q6h)', note: 'Membentuk lapisan pelindung di dinding lambung' }
          ]
        }
      ]
    },
    edukasi: ['Makan teratur dengan porsi kecil tapi sering', 'Hindari makanan pedas, asam, dan bersantan', 'Hindari kopi, soda, dan alkohol', 'Jangan langsung berbaring setelah makan (minimal 2 jam)', 'Kelola stres'],
    rujukan: ['Alarm symptoms: BB turun drastis, anemia, muntah darah, BAB hitam, usia >45 th baru muncul gejala', 'Gejala persisten setelah terapi 2-4 minggu'],
    prognosis: { vitam: 'Bonam', functionam: 'Bonam', sanationam: 'Bonam' },
    alerts: [
      { type: 'warn', text: 'Waspadai keluhan nyeri ulu hati pada pasien risiko tinggi PJK — bisa merupakan manifestasi Infark Miokard Inferior!' }
    ],
  },
  {
    id: 'stroke_nh',
    name: 'Stroke Non-Hemoragik',
    externalUrl: 'https://www.alomedika.com/penyakit/neurologi/stroke-iskemik',
    icpc: 'K90',
    icd: 'I63',
    level: '3B',
    cat: 'Neurologi',
    icon: '🧠',
    iconBg: '#f3e5f5',
    preview: 'Defisit neurologis fokal mendadak. Gunakan metode FAST. Periode emas <4,5 jam.',
    masalah: 'Stroke iskemik adalah gangguan fungsi saraf mendadak akibat sumbatan aliran darah otak.',
    overview: {
      etiologi: 'Penyumbatan pembuluh darah otak (oklusi) oleh trombus (plak aterosklerosis yang pecah) atau embolus kardiogenik (bekuan darah yang lepas dari jantung, misal pada kelainan Atrial Fibrilasi).',
      epidemiologi: 'Penyebab utama kecacatan permanen (disabilitas) dan salah satu dari tiga pembunuh terbesar manusia modern di dunia.',
      patofisiologi: 'Terhentinya aliran darah regional otak selama hitungan menit akan menghentikan persediaan oksigen dan glukosa mutlak sel saraf neuron. Terjadi kegagalan pompa ion Na+/K+ menyebabkan edema sel (sitotoksik), kematian jaringan tak dapat pulih (infark inti), namun area tepiannya (penumbra) masih mungkin diselamatkan bila aliran reperfusi secepatnya dikembalikan. Defisit motorik/sensorik terjadi kontralateral menyelang mengikuti titik silang traktus otak rusak.',
      komplikasi: ['Edema Serebri Masif & Herniansi Otak (mematikan)', 'Aspirasi Pneumonia (karena tersedak sekunder akibat sulit telan/disfagia)', 'Ulkus Dekubitus (akibat tirah baring/lumpuh)']
    },
    anamnesis: ['Kelemahan anggota gerak sesisi (hemiparesis)', 'Bicara pelo atau tidak jelas (disartria)', 'Mulut mencong', 'Kebas/kesemutan sesisi tubuh', 'Gangguan penglihatan mendadak', 'Pusing berputar hebat'],
    fisik: ['Tekanan darah seringkali tinggi', 'Kelumpuhan N. cranialis VII & XII tipe sentral', 'Kekuatan otot menurun pada satu sisi', 'Refleks patologis (Babinski) positif'],
    penunjang: ['CT-Scan kepala (wajib untuk bedakan iskemik/hemoragik)', 'Gula darah sewaktu (eksklusi hipoglikemia)', 'EKG (identifikasi AF sebagai sumber emboli)'],
    penunjangDetail: [
      { nama: 'CT-Scan Kepala Tanpa Kontras', rasionalisasi: 'Standard Emas Pertama kali datang IGD. Mutlak untuk membedakan pecah perdarahan (Hemoragik = putih) dengan sumbatan buntu (Iskemik = normal di awal, lama kelamaan akan menghitam infark). Jika tidak ada pendarahan, terapi pengencer darah / rTPA baru boleh dieksekusi.' },
      { nama: 'GDS (Gula Darah Sewaktu) Cito', rasionalisasi: 'Hipoglikemia berat mendadak (False Stroke) bisa merusakkan / meniru defisit fokal koma persis mirip stroke beneran.' },
      { nama: 'Elektrokardiogram (EKG)', rasionalisasi: 'Mencari tahu asal muasal Trombosis darah apakah bersumber dari Atrial Fibrilasi / kelainan klep / pasca jantungan, guna pencegahan sekunder.' }
    ],
    diagnosis: ['Stroke: Defisit neurologis fokal yang berlangsung >24 jam (atau <24 jam bila ada bukti infark di imaging).'],
    diagnosisBanding: ['Stroke Hemoragik (Gejala sama fokal lumpuh, tapi lebih diserta nyeri kepala super mendadak, muntah menyemprot proyektil tajam, dan penurunan kesadaran amblas seketika)', 'TIA / Transient Ischemic Attack (Mini Stroke = Defisit stroke yang anehnya sembuh balik normal sendiri total perlahan di bawah pantauan < 24 Jan)', 'Hipoglikemia Berat (Gula drop total menyerupai mati sel otak lokal sementara)', 'Bells Palsy (Lumpuh wajah separuh perifer komplit beserta mata melek total tak bisa tertutup, tapi kekuatan Tangan & Kaki AMAN)'],
    tatalaksana: [
      { name: 'Stabilisasi ABC', dose: 'Oksigen target SpO2 94%, IV line', note: 'Jangan turunkan TD kecuali >220/120 mmHg' },
      { name: 'Antiplatelet (Aspirin)', dose: '160-325 mg (loading)', note: 'Hanya setelah dipastikan bukan hemoragik via CT-Scan' },
      { name: 'Terapi Cairan', dose: 'NaCl 0,9%', note: 'Hindari cairan mengandung glukosa kecuali hipoglikemi' }
    ],
    tatalaksanaDetail: {
      nonFarmakologi: [
        'Aktivasi sistem Gawat Darurat (FAST)',
        'Stabilisasi jalan napas dan sirkulasi (ABC)',
        'Posisi kepala elevasi 30 derajat (Head Up)',
        'Pasang IV line (Jangan gunakan cairan hipotonis)',
        'Evaluasi fungsi telan (Cegah aspirasi)'
      ],
      farmakologi: [
        {
          title: 'Fase Akut (FKTP/Emergensi)',
          items: [
            { name: 'Oksigen Suplementasi', dose: '2-4 Lpm (Bila SpO2 < 94%)', note: 'Maintain oksigenasi cerebral' },
            { name: 'Aspirin (Antiplatelet)', dose: '160 - 325 mg (Loading)', note: 'Eksklusi perdarahan dulu via CT Scan!' },
            { name: 'Cairan Isotonik (NaCl 0.9%)', dose: 'Tetesan Maintenance', note: 'Hindari G5/D5 kecuali hipoglikemia' }
          ]
        },
        {
          title: 'Kontrol Tekanan Darah (Jika Sesuai Indikasi)',
          items: [
            { name: 'Antihipertensi (IV atau Oral)', dose: 'Indikasi Bila TD > 220/120 mmHg', note: 'Hati-hati penurunan TD agresif' }
          ]
        }
      ]
    },
    edukasi: ['Kenali FAST: Face drooping, Arm weakness, Speech difficulty, Time to call 119', 'Kontrol faktor risiko: Hipertensi, DM, Kolesterol', 'Jangan tunda membawa ke RS — Time is Brain'],
    rujukan: ['SEMUA suspek stroke harus dirujuk SEGERA ke RS yang memiliki fasilitas CT-Scan.'],
    prognosis: { vitam: 'Dubia', functionam: 'Dubia', sanationam: 'Dubia' },
    alerts: [
      { type: 'danger', text: 'Periode emas trombolisis IV adalah 4,5 jam sejak onset. Jangan biarkan pasien menunggu di FKTP!' }
    ]
  },
  {
    id: 'vertigo',
    name: 'Vertigo (BPPV)',
    icpc: 'N17',
    icd: 'H81.1',
    level: '4A',
    cat: 'Neurologi',
    icon: '🌀',
    iconBg: '#e8eaf6',
    preview: 'Sensasi berputar yang dipicu perubahan posisi kepala. Manuver reposisi adalah terapi utama.',
    masalah: 'Vertigo perifer (BPPV) adalah penyebab tersering pusing berputar, disebabkan oleh otolit yang lepas di kanalis semisirkularis.',
    overview: {
      etiologi: 'Lepasnya kristal batu keseimbangan telinga (Kalsium Karbonat / Otokonia) masuk nyasar ke saluran cincin berair telinga dalam (paling sering Kanalis Semisirkularis Posterior).',
      epidemiologi: 'BPPV (Benign Paroxysmal Positional Vertigo) adalah kausa 50% seluruh insiden kepala pusing bumi muter dunia. Umum terjadi di wanita, prevalensi meningkat tajam menembus batasan manula >50 th.',
      patofisiologi: 'Ketika pasien mengubah kemiringan as/poros kepalanya, batu otokonia kalsium patologis yang mengendap bebas tersebut akan memicu pergerakan gelombang getar mekanik cairan telinga (Endolimfa) di dalam kanal. Ombak buatan ini melengkungkan sistem reseptor Kupu-kupu (Cupula), membuahkan ilusi mal-informasi sinyal bahwa kepala sedang dirotasi kuat kearah yang salah. Otak tertipu, memaksa ritme mata bergerak korektif melompat-lompat menari bergetar hebat (Nistagmus) yang dirasakan sebagai Pusing Muter Kencang (Vertigo).',
      komplikasi: ['Trauma Fisik Akibat Jatuh / Fraktur Tulang', 'Dehidrasi Parah & Syok (Karena penderita memuntahkan cairan hebat pasca serangan muntaber)', 'Gangguan Kecemasan (Ansietas Antipsipatorik takut kambuh)']
    },
    anamnesis: ['Pusing berputar mendadak', 'Dipicu perubahan posisi kepala (menoleh, bangun tidur)', 'Durasi singkat (<1 menit per episode)', 'Mual, kadang muntah', 'Tidak ada keluhan pendengaran (tinitus/tuli)'],
    fisik: ['Uji Dix-Hallpike: nistagmus (dengan latensi, crescendo-decrescendo, tiring)', 'Uji Romberg', 'Pemeriksaan saraf kranial normal'],
    penunjang: ['Bukan syarat diagnosis di FKTP'],
    penunjangDetail: [
      { nama: 'Manuver Provokatif Dix-Hallpike', rasionalisasi: 'Uji klinis fisik bed-side gold standard. Dokter membaringkan badan pasien menggantung memutar kepala 45 derajat melihat meja periksa menukik belakang dada cepat. Bila mata memicu getaran baling rotatori Nistagmus vertikal menyiksa < 1 menit, sah Vertigo Posisi (BPPV).' }
    ],
    diagnosis: ['BPPV: Vertigo posisi paroksismal benigna.'],
    diagnosisBanding: ['Vertigo Sentral / Sindrom Serebelar CVA Stroke (Telinga tak berdenging amblas, pusing muter TAK ada hubungannya pergerakan kemiringan kepala sama sekali, disertai lumpuh defisit n.kranial mencong dsb)', 'Penyakit Meniere (Vertigo dibarengi penurunan visus Tuli / pendengaran hilang dan Berdenging nyaring parah)', 'Hipotensi Ortostatik / Anemia (Rasa kliyengan ringan bukan berputar melainkan mau pingsan murni pasca bangkit dari jongkok berdiri)'],
    tatalaksana: [
      { name: 'Manuver Epley', dose: '1 kali sesi (dapat diulang)', note: 'Terapi definitif untuk BPPV kanalis posterior' },
      { name: 'Betahistin Mesilat', dose: '6-12 mg q8h', note: 'Supresan vestibular, bukan kuratif' },
      { name: 'Dimenhidrinat', dose: '50 mg q8h', note: 'Antiemetik bila mual hebat' }
    ],
    tatalaksanaDetail: {
      nonFarmakologi: [
        'Manuver Reposisi (Epley/Semont/Lempert)',
        'Latihan Vestibular (Brandt-Daroff) untuk di rumah',
        'Hindari gerakan kepala mendadak atau ekstrem',
        'Pastikan lantai rumah aman (Cegah jatuh)'
      ],
      farmakologi: [
        {
          title: 'Terapi Suportif / Vestibulosupresan',
          items: [
            { name: 'Betahistin Mesilat', dose: '6 mg atau 12 mg (q8h)', note: 'Lini pertama simtomatis' },
            { name: 'Dimenhidrinat', dose: '50 mg (bila perlu)', note: 'Antihistamin untuk mual muntah berat' },
            { name: 'Metoclopramide', dose: '10 mg (bila perlu)', note: 'Prokinetik untuk mual hebat' }
          ]
        }
      ]
    },
    edukasi: ['Jangan melakukan gerakan kepala mendadak', 'Lakukan latihan Brand-Daroff di rumah', 'Bangun tidur secara bertahap'],
    rujukan: ['Vertigo tipe sentral (nistagmus vertikal, gangguan serebelar, defisit saraf kranial)', 'Vertigo tidak membaik dengan manuver repetisi'],
    prognosis: { vitam: 'Bonam', functionam: 'Bonam', sanationam: 'Bonam' },
    alerts: [
      { type: 'warn', text: 'Bedakan Vertigo Perifer vs Sentral. Vertigo sentral sering tidak dipicu posisi kepala dan disertai gejala neurologis lain.' }
    ],
    externalUrl: 'https://www.alomedika.com/penyakit/neurologi/vertigo'
  },
  {
    id: 'pre_eklampsia',
    name: 'Pre-Eklampsia (Tanpa Gejala Berat)',
    icpc: 'W81',
    icd: 'O14.0',
    level: '3B',
    cat: 'Obsgin',
    icon: '🤰',
    iconBg: '#fdf2f8',
    preview: 'TD ≥140/90 mmHg + proteinuria pada usia kehamilan >20 minggu. Pantau ketat tanda-tanda "Impending Eclampsia".',
    masalah: 'Pre-eklampsia adalah gangguan multi-sistem pada kehamilan yang ditandai hipertensi dan kerusakan organ (paling sering ginjal).',
    overview: {
      etiologi: 'Secara patologis disebabkan inkompetensi invasi imunologis sel selaput jaringan pembuluh janin/ari uri ibu yang gagal membangun jaringan perfusi.',
      epidemiologi: 'Ancaman paling mematikan pertama dari trias kematian martenal Ibu Hamil Indonesia saat melahirkan. Paling rentan menyerang ibu mengandung usia ekstrim kemudaan / ketuaan atau mengidap Obesitas dan Hipertensi Kronis Primer.',
      patofisiologi: 'Pembuluh darah rahim (Arteri Spiralis) maternal ibu hamil yang gagal direhab / direnovasi lebar oleh invasi trofoblas si Anak embrio menjadikannya terlalu sempit. Si ARI-ARI / Plasenta menjadi Iskemik kekurangan nutrisi Oksigen kronik. Plasenta yang "Sesak napas" ini pun melepaskan ledakan granat faktor sitokin inflamator dan anti-angiogenik jahat (sFlt-1) yang langsung meracuni bocor menyeluruh sistem sirkulasi endotel bulu darah sistemik seluruh IBU; menyulut kompensasi Hipertensi sistemik kencang ekstrim (TD naik), serta kebocoran cairan kapiler sistem saringan ginjal yang rusak merembeskan protein (Proteinuria) sekaligus menjadikannya bengkak sekujur tubuh anasarka (Edema).',
      komplikasi: ['Eklampsia Seizure / Kejang Ibu Fatal Henti Jantung', 'Sindrom HELLP (Hemolysis, Elevated Liver enzymes, Low Platelets)', 'Ablasio / Solusio Placenta (Ari-ari coplok meneteskan pedarahan internal mati ibu bayi)', 'Fetal Distress & Perlambatan Tumbuh Janin (IUGR) kerdil']
    },
    anamnesis: ['Usia kehamilan >20 minggu', 'Nyeri kepala (tidak hilang dengan analgesik)', 'Pandangan kabur atau bintik gelap (skotoma)', 'Nyeri ulu hati (epigastrium)', 'Bengkak mendadak pada ekstremitas dan wajah'],
    fisik: ['Tekanan darah ≥140/90 mmHg', 'Edema pretibia/wajah', 'Refleks fisiologis sering meningkat (hiperrefleksia)'],
    penunjang: ['Proteinuria (dipstick ≥ +1)', 'Ureum, kreatinin (meningkat pada kasus berat)', 'Tes fungsi hati (SGOT/SGPT)'],
    penunjangDetail: [
      { nama: 'Pemeriksaan Urin Dipstick Kimiawi (Urin Porsi Tengah)', rasionalisasi: 'Patokan emas penegakan objektif diagnosis di garis terdepan FKTP. Trobosan protein +1 atau +2 memastikan rusaknya filter glomerulus kapiler memisahkan HT biasa vs PreEklampsia absolut.' },
      { nama: 'Darah Lengkap & Fungsi Organ (Trombosit, Ureum, Kreatinin, SGOT/SGPT)', rasionalisasi: 'Mendeteksi perburukan mendadak Sindrom HELLP prematur (Dimana trombosit menukik drop berdarah-darah, disertai hati membengkak transaminitis dan rusak). Jika terjadi, kehamilan harus langsung dihentikan lahir sesar segera.' }
    ],
    diagnosis: ['Pre-eklampsia: TD ≥140/90 mmHg dan Proteinuria ≥+1 pada usia kehamilan >20 minggu.'],
    diagnosisBanding: ['Hipertensi Gestasional (Ibu hamil darah tinggi kronis TAPI TANPA DITEMUKAN SETETES PUN protein bocor pada kencing dipstick Urine)', 'Hipertensi Kronik Murni (Darah tinggi memang sudah ada menahun SEBELUM IBU ITU MENGANDUNG ANAK usia di bawah 20 minggu kehamilan)', 'Gagal Ginjal Kronik Murni Lanjut Obgyn (Urin keruh dan Proteinuria menahun)'],
    tatalaksana: [
      { name: 'Rawat jalan / tirah baring', dose: 'Pantau TD 2x sehari', note: 'Ibu harus paham tanda bahaya' },
      { name: 'Metildopa', dose: '250-500 mg q8h', note: 'Antihipertensi pilihan pada kehamilan' },
      { name: 'Aspirin dosis rendah', dose: '80-150 mg/hari', note: 'Pencegahan pada risiko tinggi, dimulai <16 minggu' }
    ],
    tatalaksanaDetail: {
      nonFarmakologi: [
        'Tirah baring miring ke kiri (Left lateral recumbent)',
        'Diet tinggi protein, rendah lemak dan garam secukupnya',
        'Pantau tekanan darah mandiri di rumah (2-3 kali sehari)',
        'Pantau gerakan janin (Kick counts) secara berkala'
      ],
      farmakologi: [
        {
          title: 'Kontrol Tekanan Darah (Lini Pertama)',
          items: [
            { name: 'Methyldopa', dose: '250 mg - 500 mg (q8h)', note: 'Obat pilihan utama keamanan janin terjaga' },
            { name: 'Nifedipine (Extended Release)', dose: '10 mg - 20 mg (q12h)', note: 'Gunakan tablet pelepasan lambat' }
          ]
        },
        {
          title: 'Suplemen & Pencegahan Sekunder',
          items: [
            { name: 'Calcium Carbonate', dose: '1.5 gram - 2 gram /hari', note: 'Menurunkan risiko pre-eklampsia lanjut' },
            { name: 'Low Dose Aspirin', dose: '80 mg - 150 mg (1x malam)', note: 'Hanya jika faktor risiko tinggi + mulai sebelum 16 mgg' }
          ]
        }
      ]
    },
    edukasi: ['Segera ke RS bila: nyeri ulu hati hebat, pandangan kabur, nyeri kepala berat, janin kurang bergerak', 'Kontrol kehamilan lebih sering', 'Cukup nutrisi protein'],
    rujukan: ['TD ≥160/110 mmHg (Pre-eklampsia berat)', 'Terjadi kejang (Eklampsia)', 'Ada gejala neurologis berat / penglihatan kabur', 'Proteinuria ≥ +2'],
    prognosis: { vitam: 'Dubia', functionam: 'Bonam', sanationam: 'Bonam pasca persalinan' },
    alerts: [
      { type: 'danger', text: 'EKLAMPSIA: Berikan loading dose MgSO4 4g IV lalu RUJUK CITO dengan pendamping tenaga medis!' }
    ],
    externalUrl: 'https://www.alomedika.com/penyakit/obstetrik-dan-ginekologi/preeklampsia'
  },
  {
    id: 'morbili',
    name: 'Morbili (Campak)',
    icpc: 'A71',
    icd: 'B05',
    level: '4A',
    cat: 'Pediatri',
    icon: '🔴',
    iconBg: '#fff5f5',
    preview: 'Demam tinggi + 3C (Cough, Coryza, Conjunctivitis) + Bercak Koplik. Ruam muncul dari belakang telinga.',
    masalah: 'Campak adalah penyakit virus sangat menular yang dapat berkomplikasi menjadi pneumonia, ensefalitis, dan buta.',
    overview: {
      etiologi: 'Paramyxoviridae (Morbillivirus). Virus dengan tingkat penularan paling tinggi di dunia melalui droplet udara (Airborne).',
      epidemiologi: 'Utamanya menyerang bayi dan balita yang belum atau menunda cakupan vaksinasi MR/MMR massal. Pasien dapat menularkan 4 hari sebelum hingga 4 hari setelah onset ruam.',
      patofisiologi: 'Masuk secara inhalasi menginfeksi mukosa respiratori dan limfonodus regional, terjadi viremia primer. Saat viremia sekunder (hari ke-5 hingga 7), virus menyebar luas ke epitel konjungtiva mata, saluran cerna, paru, dan kulit. Hal ini bermanifestasi sebagai sel raksasa Warthin-Finkeldey di jaringan limfoid dan ruam merah.',
      komplikasi: ['Pneumonia Morbili (penyebab kematian utama infeksi primer)', 'Otitis Media Akut (OMA)', 'Ensefalitis Inklusi Subakut (fatal neurologis)', 'Xerophthalmia ulkus kornea yang berakibat buta permanen', 'Gizi Buruk sekunder akibat diare/stomatitis parah']
    },
    anamnesis: ['Demam tinggi mendadak', 'Batuk, pilek, mata merah (konjungtivitis)', 'Napsu makan turun', 'Ruam makulopapular mulai dari belakang telinga menyebar ke badan (setelah 3-5 hari demam)'],
    fisik: ['Bercak Koplik (putih di mukosa pipi) — patognomonis (hari 2-3 demam)', 'Ruam kemerahan (makulopapular erythematous)', 'Suara napas ronkhi (bila ada pneumonia)'],
    penunjang: ['Klinis utama', 'Serologi IgM campak (bila tersedia)'],
    penunjangDetail: [
      { nama: 'Darah Lengkap', rasionalisasi: 'Virus campak menekan sumsum tulang sementara, sehingga dapat ditemukan pansitopenia ringan (Leukopenia, Trombositopenia, Anemia).' },
      { nama: 'Pemeriksaan Serum Vitamin A', rasionalisasi: 'Morbili secara tajam menguras cadangan Vitamin A hepatik. Kekurangan seketika ini yang menyebabkan kebutaan pada anak penderita campak (karena ulkus mukosa kornea).' }
    ],
    diagnosis: ['Morbili / Campak / Measles.'],
    diagnosisBanding: ['Rubella / Campak Jerman (ruam lebih pucat, limfadenopati retroaurikular dominan, jarang deman tinggi)', 'Roseola Infantum / Exanthema Subitum (demam tinggi mendadak 3 hari, begitu demam reda baru ruam muncul)', 'Demam Skarlatina / Scarlet fever (ruam seperti kertas pasir ampelas)', 'Dengue Fever / DBD (petekie lebih dominan daripada makulopapuler merata)'],
    tatalaksana: [
      { name: 'VITAMIN A', dose: 'Usia <6 bln: 50rb IU; 6-11 bln: 100rb IU; ≥1 thn: 200rb IU', note: 'Sangat krusial untuk mencegah komplikasi mata/kematian. Beri 2 dosis (hari 1 & 2)' },
      { name: 'Paracetamol', dose: '10-15 mg/kgBB/dosis', note: 'Penurun panas' },
      { name: 'Cairan & Nutrisi', dose: 'Makan-minum seperti biasa', note: 'Cegah dehidrasi' }
    ],
    tatalaksanaDetail: {
      nonFarmakologi: [
        'Isolasi mandiri minimal 4 hari pasca muncul ruam',
        'Asupan cairan oral yang adekuat (cegah dehidrasi)',
        'Nutrisi TKTP sesuai usia',
        'Kebersihan kulit dan mukosa mulut'
      ],
      farmakologi: [
        {
          title: 'Nutrisi Spesifik (Wajib)',
          items: [
            { name: 'Kapsul Vitamin A dosis tinggi', dose: '200.000 IU (>1 thn)', note: 'Beri dosis kedua di hari berikutnya (H1 & H2)' }
          ]
        },
        {
          title: 'Terapi Simtomatis',
          items: [
            { name: 'Paracetamol Syrup/Drop', dose: '10 - 15 mg/kgBB (q4-6h)', note: 'Kontrol demam tinggi' }
          ]
        }
      ]
    },
    edukasi: ['Isolasi pasien agar tidak menularkan ke anak lain (terutama yang belum vaksin)', 'Lengkapi imunisasi anggota keluarga lain', 'Segera kembali bila sesak napas atau kesadaran turun'],
    rujukan: ['Campak dengan komplikasi: Pneumonia, Ensefalitis (kejang/penurunan kesadaran)', 'Campak dengan gizi buruk', 'Kebutaan / luka kornea'],
    prognosis: { vitam: 'Bonam bila tanpa komplikasi', functionam: 'Bonam', sanationam: 'Bonam' },
    alerts: [
      { type: 'warn', text: 'Pastikan pemberian VITAMIN A sesuai dosis usia untuk mencegah kebutaan akibat xerophthalmia pasca campak.' }
    ],
    externalUrl: 'https://www.alomedika.com/penyakit/pediatri/morbili'
  },
  {
    id: 'isk',
    name: 'Infeksi Saluran Kemih (Sistitis)',
    icpc: 'U71',
    icd: 'N30.9',
    level: '4A',
    cat: 'Urologi & Nefrologi',
    icon: '🚽',
    iconBg: '#ebf8ff',
    preview: 'Anyang-anyangan, nyeri saat kencing, dan sering kencing. Lebih sering pada wanita.',
    masalah: 'ISK bawah (sistitis) adalah inflamasi mukosa kandung kemih yang paling sering disebabkan oleh E. coli.',
    overview: {
      etiologi: '90% disebabkan oleh Escherichia coli (UPEC) autoinfeksi dari flora normal perineum/feses. Lainnya: Staphylococcus saprophyticus, Proteus spp, Klebsiella.',
      epidemiologi: 'Sangat lazim terjadi pada perempuan usia reproduksi (anatomi uretra perempuan lebih pendek/3-4 cm dibanding laki-laki). Sangat rentan pasca-aktivitas seksual (Honeymoon cystitis).',
      patofisiologi: 'Bakteri uropatogenik naik (ascending pathway) dari uretra ke buli-buli. Pili bakteri berikatan kuat pada reseptor epitel transisional, memproteksi kuman dari bilasan air seni (washing out). Ini memicu pelepasan interleukin, menarik neutrofil, sehingga timbullah inflamasi lokal, piuria, dan sensasi mendesak kencing iritatif (urgency).',
      komplikasi: ['Pielonefritis Akut (Infeksi menyebar naik ke ginjal)', 'Urosepsis (khususnya pasien geriatri, bedridden, kateter)', 'Lahir prematur / persalinan preterm pada penderita hamil', 'Batu Struvit']
    },
    anamnesis: ['Disuria (nyeri saat kencing)', 'Polakisuria (sering kencing)', 'Anyang-anyangan (urgency)', 'Nyeri suprapubik', 'Kencing keruh atau berbau menyengat'],
    fisik: ['Nyeri tekan suprapubik', 'Nyeri ketok CVA (Costovertebral angle) — negatif pada sistitis sederhana, positif pada pielonefritis'],
    penunjang: ['Urinalisis: Leukosituria (>5/lpb), Nitrit (+) — cukup spesifik untuk bakteriuria'],
    penunjangDetail: [
      { nama: 'Urinalisis Makroskopik & Mikroskopik', rasionalisasi: 'Terlihat Piuria (leukosit esterase positif, atau sedimen leukosit >5/LPB). Hematuria ringan kadang terlihat akibat iritasi vaskular.' },
      { nama: 'Kultur Urin', rasionalisasi: 'Gold Standar. Pengambilan sampel melalui Midstream Clean Catch (urin porsi tengah). Wajib dilakukan jika ISK berulang, curiga MDR (bakteri resisten), atau pada Pria dan Anak.' },
      { nama: 'Tes Kimia Urin: Uji Nitrit', rasionalisasi: 'Tes nitrit POSITIF membuktikan infeksi bakteri enterobacteriaceae pemecah reduktase (seperti E.coli). Sensitivitas sedang, tapi Spesifisitas sangat tinggi (hampir 100%).' }
    ],
    diagnosis: ['ISK Bawah Sederhana (Sistitis)'],
    diagnosisBanding: ['Pielonefritis Akut (sistitis yang diserta nyeri pinggang hebat + demam menggigil)', 'Uretritis Gonore / Chlamydia (sering pada laki-laki, ada riwayat seks berisiko, keluar nanah pagi hari)', 'Batu Saluran Kemih Bagian Bawah (nyeri kolik menjalar pelvik)', 'Vaginitis (Candidiasis/Bacterial Vaginosis - sering disalahpahami pasien sebagai ISK)'],
    tatalaksana: [
      { name: 'Antibiotik (Ciprofloxacin)', dose: '500 mg q12h selama 3-5 hari', note: 'Lini pertama pada non-hamil' },
      { name: 'Antibiotik (Amoxicillin-Clavulanate)', dose: '500 mg q8h', note: 'Pilihan pada ibu hamil' },
      { name: 'Analgesik (Fenazopiridin)', dose: '100-200 mg q8h', note: 'Untuk meredakan nyeri disuria' }
    ],
    tatalaksanaDetail: {
      nonFarmakologi: [
        'Minum air putih banyak (minimal 2-3 liter/hari) untuk membilas bakteri',
        'Buang air kecil (BAK) sesegera mungkin saat terasa ingin',
        'Bersihkan area genital dari depan ke belakang setelah BAK/BAB untuk mencegah kontaminasi bakteri fekal',
        'Bilas area genital setelah berhubungan seksual'
      ],
      farmakologi: [
        {
          title: 'Antibiotik Lini Pertama (Tanpa Faktor Risiko)',
          items: [
            { name: 'Nitrofurantoin', dose: '100 mg (q12h) selama 5 hari', note: 'Obat pilihan utama untuk sistitis tanpa komplikasi' },
            { name: 'Fosfomycin', dose: '3 gram (dosis tunggal)', note: 'Efisien, kepatuhan tinggi' }
          ]
        },
        {
          title: 'Antibiotik Alternatif / Pada Kehamilan',
          items: [
            { name: 'Amoxicillin-Clavulanate', dose: '500 mg (q8h) selama 7 hari', note: 'Aman untuk kehamilan & ibu menyusui' },
            { name: 'Cefixime', dose: '400 mg (q24h) selama 5-7 hari', note: 'Alternatif jika alergi penisilin' }
          ]
        }
      ]
    },
    edukasi: ['Minum air putih banyak (>2 liter/hari)', 'Jangan menahan kencing', 'Cara membersihkan area genital dari depan ke belakang (pada wanita)', 'Kencing setelah berhubungan seksual'],
    rujukan: ['ISK pada laki-laki (selalu dianggap ISK komplitas)', 'ISK dengan tanda pielonefritis (demam tinggi, muntah, nyeri pinggang)', 'ISK berulang (>3x dalam setahun)'],
    prognosis: { vitam: 'Bonam', functionam: 'Bonam', sanationam: 'Bonam' },
    alerts: [
      { type: 'warn', text: 'Hati-hati pada ISK dengan nyeri pinggang dan demam tinggi — kemungkinan besar Pielonefritis yang memerlukan antibiotik parenteral!' }
    ],
    externalUrl: 'https://www.alomedika.com/penyakit/urologi/infeksi-saluran-kemih'
  },
  {
    id: 'kejang_demam',
    name: 'Kejang Demam (Sederhana)',
    icpc: 'N07',
    icd: 'R56.0',
    level: '4A',
    cat: 'Pediatri',
    icon: '👶',
    iconBg: '#fff5f5',
    preview: 'Kejang akibat kenaikan suhu tubuh (T >38°C) tanpa infeksi intrakranial. Durasi <15 menit, tidak berulang dalam 24 jam.',
    masalah: 'Kejang demam adalah kejang yang terjadi pada anak usia 6 bulan hingga 5 tahun yang berhubungan dengan demam.',
    overview: {
      etiologi: 'Loncatan arus listrik ireguler mendadak di otak yang dipicu secara spesifik oleh ambang rangsang suhu tubuh yang naik ekstrim akibat infeksi ekstrakranial (paling sering ISPA virus, Roseola, otitis media, faringitis, atau respons imunisasi).',
      epidemiologi: 'Kelainan saraf tersering pada dunia anak, menyerang sekitar 2-5% balita usia emas 6 bulan hingga 5 tahun.',
      patofisiologi: 'Anak balita memiliki susunan anatomi saraf otak yang belum matang sepenuhnya (imaturitas mielinisasi) serta sistem termoregulasi reseptor hipotalamus yang agresif. Saat suhu darah mendadak naik drastis (Febris >38C), metabolisme basal korteks otak memuncak dan menggeser keseimbangan ion Natrium/Kalium transmembran. Ambang batas rangsang neuron yang sudah asalnya rendah pada anak-anak pun jebol, melepaskan badai hiperaktifitas depolarisasi massal otot bermanifestasi sebagai kejang tonik (kaku) - klonik (kelojotan ayam).',
      komplikasi: ['Apnea (Henti napas saat kejang lama memicu kebiruan serebri hipoksia)', 'Trauma Aspirasi Tersedak Ludah Sendiri', 'Status Epileptikus (Kejang rentet tanpa sadar > 30 menit parah)']
    },
    anamnesis: ['Kejang terjadi saat anak demam (suhu rektal >38°C)', 'Durasi kejang <15 menit', 'Kejang bersifat umum (tonik-klonik)', 'Tidak ada riwayat kejang tanpa demam sebelumnya', 'Setelah kejang anak langsung sadar'],
    fisik: ['Suhu tubuh tinggi ≥38°C', 'Mencari sumber infeksi extrakranial (otitis media, faringitis, ISK)', 'Tidak ada tanda rangsang meningeal (Brudzinski/Kernig negatif)'],
    penunjang: ['Pemeriksaan elektrolit, gula darah, dan darah lengkap (cari sumber infeksi)', 'Lumbal pungsi (hanya bila ada kecurigaan meningitis)'],
    penunjangDetail: [
      { nama: 'GDS (Gula Darah Sewaktu)', rasionalisasi: 'Kejang pada anak balita sangat rentan disebabkan oleh hipoglikemia berat (terutama yang rewel sulit makan saat demam). Wajib dicoret/eksklusi di unit gawat darurat pertama kali datang.' },
      { nama: 'Darah Lengkap & Hitung Jenis', rasionalisasi: 'Menelisik kausa demam: Apakah murni virus (Limfositosis/demam self-limiting) ataukah bakteri (Leukositosis menuntut antibiotik).' },
      { nama: 'Lumbal Pungsi (Cairan Otak CSF)', rasionalisasi: 'HANYA DILAKUKAN bila ada tanda Kaku Kuduk Positif terang terangan, atau anak di bawah <12 bulan dimana defisit meningitis terselubung rapat tanpa sadar.' }
    ],
    diagnosis: ['Kejang Demam Sederhana (KDS)'],
    diagnosisBanding: ['Meningitis / Ensefalitis (Sama sama kejang demam TAPI kaku kuduk sangat tegang, ubun-ubun menonjol kencang, dan pasca kejang pun anak tetap tertidur koma delirium)', 'Epilepsi Anak (Kejang muncul mendadak asik-asik main, SUHU TUBUH NORMAL DINGIN murni <38C)', 'Tetani Hipokalsemia / Gangguan Elektrolit (Kejang mulut mengkrut tanpa infeksi febris)'],
    tatalaksana: [
      { name: 'Diazepam Rektal', dose: '5 mg (BB <12kg) atau 10 mg (BB ≥12kg)', note: 'Hanya jika anak sedang kejang' },
      { name: 'Paracetamol', dose: '10-15 mg/kgBB/dosis q4-6h', note: 'Penurun panas' },
      { name: 'Diazepam Oral', dose: '0,3 mg/kgBB q8h', note: 'Beri profilaksis intermiten hanya saat anak demam tinggi >38,5°C' }
    ],
    tatalaksanaDetail: {
      nonFarmakologi: [
        'Jangan panik, longgarkan pakaian ketat',
        'Miringkan posisi kepala untuk cegah aspirasi',
        'Jangan masukkan benda apa pun (sendok/jari) ke mulut',
        'Kompres hangat (tepid sponge) pada ketiak dan selangkangan',
        'Monitor suhu tubuh secara berkala'
      ],
      farmakologi: [
        {
          title: 'Managemen Kejang (Emergency)',
          items: [
            { name: 'Diazepam Rektal', dose: '5mg (<12kg) / 10mg (>12kg)', note: 'Stop kejang di rumah/IGD' },
            { name: 'Diazepam IV', dose: '0.3 - 0.5 mg/kgBB', note: 'Jika akses IV tersedia di Klinik' }
          ]
        },
        {
          title: 'Kontrol Demam (Antipiretik)',
          items: [
            { name: 'Paracetamol Syrup/Drop', dose: '10-15 mg/kgBB (q4-6h)', note: 'Mainstay penurun panas' },
            { name: 'Ibuprofen Syrup', dose: '5-10 mg/kgBB (q6-8h)', note: 'Alternatif antiinflamasi' }
          ]
        },
        {
          title: 'Profilaksis Intermiten (Saat Demam)',
          items: [
            { name: 'Diazepam Oral', dose: '0.3 mg/kgBB (q8h)', note: 'Hanya selama anak demam tinggi' }
          ]
        }
      ]
    },
    edukasi: ['Jangan panik saat anak kejang', 'Longgarkan pakaian, baringkan di tempat rata, miringkan kepala', 'Jangan memasukkan apa pun ke dalam mulut', 'Kejang demam sederhana tidak menyebabkan kerusakan otak atau epilepsi'],
    rujukan: ['Kejang demam kompleks (durasi >15 menit, fokal, atau berulang >1x dalam 24 jam)', 'Ada tanda meningitis / ensefalitis', 'Kejang tidak berhenti dengan 2 dosis diazepam rektal'],
    prognosis: { vitam: 'Bonam', functionam: 'Bonam', sanationam: 'Bonam' },
    alerts: [
      { type: 'ok', text: 'KDS umumnya memiliki prognosis sangat baik. Fokus utama adalah edukasi orang tua agar tidak cemas berlebihan.' }
    ],
    externalUrl: 'https://www.alomedika.com/penyakit/pediatri/kejang-demam'
  },
  {
    id: 'skabies',
    name: 'Skabies',
    externalUrl: 'https://www.alomedika.com/penyakit/dermatovenerologi/skabies',
    icpc: 'S72',
    icd: 'B86',
    level: '4A',
    cat: 'Dermatologi',
    icon: '🐜',
    iconBg: '#f6e05e',
    preview: 'Infestasi parasit pada kulit yang menyebabkan gatal hebat terutama malam hari dan menyerang kelompok orang yang tinggal bersama.',
    masalah: 'Skabies adalah penyakit kulit menular yang disebabkan oleh infestasi dan sensitisasi terhadap tungau Sarcoptes scabiei var. hominis. Kondisi ini sangat berkaitan dengan tingkat kebersihan diri (personal hygiene) dan kepadatan hunian.',
    overview: {
      etiologi: 'Parasit Sarcoptes scabiei var. hominis. Tungau ini berukuran mikroskopis dan hidup dengan menggali terowongan di stratum korneum.',
      epidemiologi: 'Sangat sering dijumpai di lingkungan padat seperti asrama, pondok pesantren, panti asuhan, dan keluarga dengan banyak anggota.',
      patofisiologi: 'Tungau betina menggali terowongan → Bertelur → Larva menetas → Sensitasi imun (Tipe IV) terhadap kotoran/produk tungau memicu gatal hebat (Pruritus Nokturna).',
      komplikasi: ['Infeksi Kulit Sekunder (Impetiginisasi oleh Staph/Strep)', 'Glomerulonefritis Akut Pasca Streptokokus (bila terinfeksi sekunder)', 'Skabies Krustosa (Norwegian Scabies) pada imunokompromais']
    },
    anamnesis: [
      'Gatal hebat terutama pada malam hari (Pruritus Nokturna)',
      'Riwayat penyakit yang sama pada anggota keluarga atau teman satu asrama/pondok',
      'Area gatal: Sela jari tangan, pergelangan tangan, ketiak, sekitar pusat, area genital, dan pantat',
      'Pada bayi, lesi dapat mengenai telapak tangan/kaki dan wajah'
    ],
    fisik: [
      'Kanalikulus (Terowongan): Garis putih/abu-abu tipis sedikit meninggi (sulcus)',
      'Lesi Polimorf: Papul, vesikel, ekskoriasi (bekas garukan), dan kadang pustul',
      'Tanda Cardinal: Ditemukan terowongan atau tungau pada pemeriksaan mikroskopis'
    ],
    penunjang: [
      'Skin Scraping (Kerokan Kulit): Melihat tungau/telur di bawah mikroskop',
      'Burrow Ink Test: Mengoleskan tinta untuk memperjelas bentuk terowongan'
    ],
    penunjangDetail: [
      { nama: 'Kerokan Kulit (Skin Scraping)', rasionalisasi: 'Prosedur standar emas dengan mengambil sampel di ujung terowongan baru untuk divisualisasi dengan KOH 10% guna menemukan parasit hidup.' }
    ],
    diagnosis: [
      'Skabies'
    ],
    diagnosisBanding: ['Dermatitis Atopik', 'Prurigo Nodularis', 'Pedikulosis Korporis', 'Impetigo'],
    tatalaksana: [
      { name: 'Permetrin 5% (Krim)', dose: 'Oleskan ke seluruh tubuh (leher ke bawah)', note: 'Diamkan 8-12 jam, bilas pagi. Ulangi setelah 1 minggu.' },
      { name: 'Sulfur Presipitatum 6-10%', dose: 'Oleskan 3 malam berturut-turut', note: 'Pilihan aman untuk bayi < 2 bulan' },
      { name: 'Cetirizine', dose: '10 mg q24h', note: 'Meredakan gatal (simtomatis)' }
    ],
    tatalaksanaDetail: {
      nonFarmakologi: [
        'Terapi Serentak: Obati seluruh penghuni rumah/asrama pada waktu yang sama meskipun tidak bergejala gatal.',
        'Dekontaminasi: Cuci sprei, handuk, dan baju dengan air panas (>60°C) dan setrika panas.',
        'Isolasi Barang: Barang yang tidak bisa dicuci masukkan kantong plastik kedap udara selama 3-5 hari.',
        'Jaga kebersihan diri dan hindari berbagi handuk/pakaian.'
      ],
      farmakologi: [
        {
          title: 'Skabisida (Utama)',
          items: [
            { name: 'Permethrin Krim 5%', dose: 'Aplikasi tunggal (malam hari)', note: 'Oleskan dari belakang telinga hingga sela-sela jari kaki. Jangan ada yang terlewat.' },
            { name: 'Ivermectin (Oral)', dose: '200 mcg/kgBB (Single dose)', note: 'Hanya jika terapi topikal gagal atau skabies krustosa' }
          ]
        },
        {
          title: 'Manajemen Gatal & Infeksi',
          items: [
            { name: 'Ceterizine / Loratadine', dose: '10 mg', note: 'Beri malam hari untuk kurangi gatal malam' },
            { name: 'Mupirocin Krim', dose: 'Oleskan 2x sehari', note: 'Bila terdapat tanda infeksi sekunder (nanah/madu)' }
          ]
        }
      ]
    },
    edukasi: [
      'Penyakit ini sangat menular, jika satu orang tidak diobati maka akan menulari kembali yang lain (fenomena ping-pong)',
      'Gatal mungkin masih terasa hingga 2 minggu setelah tungau mati karena sisa kotorannya di kulit',
      'Jangan gunakan handuk atau baju bergantian',
      'Pastikan kuku dipotong pendek agar tidak melukai kulit saat menggaruk'
    ],
    rujukan: [
      'Skabies krustosa (Norwegian Scabies): Kerak tebal, sangat menular, dan sulit diobati',
      'Infeksi sekunder berat seperti selulitis',
      'Pasien tidak menunjukkan perbaikan setelah 2 kali siklus pengobatan adekuat'
    ],
    prognosis: { vitam: 'Bonam', functionam: 'Bonam', sanationam: 'Bonam (bila terapi serentak berhasil)' },
    alerts: [
      { type: 'danger', text: 'KEGAGALAN TERAPI sering disebabkan karena pengobatan yang TIDAK SERENTAK di dalam satu asrama/keluarga.' }
    ]
  },
  {
    id: 'konjungtivitis',
    name: 'Konjungtivitis Bakterial',
    icpc: 'F70',
    icd: 'H10',
    level: '4A',
    cat: 'Mata',
    icon: '👁️',
    iconBg: '#e0f2f1',
    preview: 'Mata merah dengan sekret purulen/lengket. Tidak ada penurunan visus. Sering tertular dari tangan.',
    masalah: 'Konjungtivitis adalah peradangan konjungtiva yang disebabkan infeksi bakteri (Staph, Strep, Haemophilus).',
    overview: {
      etiologi: 'Infeksi kuman bakteri piogenik klasik: Staphylococcus aureus (paling umum pada dewasa), Streptococcus pneumoniae, atau Haemophilus influenzae (terutama anak).',
      epidemiologi: 'Penularan super cepat kilat melalui jari tangan kotor yang dikucekkan ke sela bola mata.',
      patofisiologi: 'Jaringan halus lendir putih pelindung permukaan kelopak dan kornea mata (konjungtiva) disusupi flora patogen kuman nanah. Pembuluh vaskular tipis mikro mata lantas memompa sistem kekebalan dengan vasodilatasi dilatasi pembuluh darah kencang hiperemik (seolah Mata Merah darah membara). Serbuan PMN neutrofil membunuh kuman dan menjadi kotoran debris lengket purulen menguning yang sering merekatkan bulu mata kering menutup kaku di subuh dinihari bangun tidur.',
      komplikasi: ['Ulkus Kornea Tembus (Jika dibumbui obat sembarangan isi dexamethasone steroid picu bolong meletus penetrasi nanah tebal)', 'Keratitis Kataral', 'Konjungtivitis Gonokokus Pendarahan fatal nanah deras bayi buta menahun']
    },
    anamnesis: ['Mata merah', 'Sekret mata purulen (kuning/hijau) dan lengket (terutama saat bangun tidur)', 'Terasa mengganjal / berpasir', 'Tidak ada penurunan tajam penglihatan (visus normal)', 'Mata berair (epifora)'],
    fisik: ['Injeksi konjungtiva (berkelok-kelok, memudar ke arah kornea)', 'Sekret mukopurulen di forniks', 'Edema palpebra (ringan)', 'Kornea tetap jernih, pupil normal'],
    penunjang: ['Pewarnaan Gram sekret mata (bila persisten)'],
    penunjangDetail: [
      { nama: 'Pewarnaan Gram Apusan Sekret Nanah Mata', rasionalisasi: 'Tidak wajib bagi FKTP kasus dangkal. Dilakukan bila keluhan bernanah makin parah bengkak. Memastikan strain Bakteri Gram (Gram Positif staph vs Gram negatif kuman kelamin gonore).' }
    ],
    diagnosis: ['Konjungtivitis Bakterial Akut'],
    diagnosisBanding: ['Konjungtivitis Viral Epidemik (Penyebab terbanyak pada anak sekolah membludak; sekresi bukan nanah tapi cairan air wudhu bening encer meluap; Pemicu jelas = baru kena batuk pilek ISPA parah)', 'Konjungtivitis Alergi (Murni gatal menyiksa gila menahun; putih mata bengkak kantung balon / kemosis; tidak ada nanah tebal dan menularnya kemusiman debu)', 'Keratitis Akut (Saraf kornea lecet; Pasien menyipit ngilu ketarik tak kuat menatap terangnya sinar silau lampu (Fotofobia), Visus pandang langsung buram berkabut)'],
    tatalaksana: [
      { name: 'Chloramphenicol (Salep Mata 1%)', dose: '3-4 kali sehari', note: 'Bersihkan sekret sebelum aplikasi' },
      { name: 'Gentamicin (Tetes Mata)', dose: '1 tetes q4-6h', note: 'Cuci tangan sebelum dan sesudah' },
      { name: 'Kompres Dingin', dose: '3 kali sehari selama 5-10 menit', note: 'Mengurangi ketidaknyamanan' }
    ],
    tatalaksanaDetail: {
      nonFarmakologi: [
        'Kompres dingin 10-15 menit (mengurangi edema/nyeri)',
        'Jangan mengucek mata dengan tangan',
        'Gunakan handuk/bantal terpisah',
        'Irigasi mata dengan NaCl 0.9% jika sekret sangat tebal'
      ],
      farmakologi: [
        {
          title: 'Antibiotik Topikal (Lini Pertama)',
          items: [
            { name: 'Chloramphenicol Eye Drops 0.5%', dose: '1 tetes setiap 2-4 jam', note: 'Ujung penetes jangan menyentuh mata' },
            { name: 'Chloramphenicol Eye Ointment 1%', dose: 'Aplikasi sebelum tidur', note: 'Lebih efektif menempel lama di malam hari' }
          ]
        }
      ]
    },
    edukasi: ['Jangan mengucek mata', 'Sering cuci tangan', 'Gunakan handuk dan bantal terpisah', 'Jangan gunakan tetes mata bersama-sama'],
    rujukan: ['Nyeri mata hebat atau fotofobia (curiga keratitis/uveitis)', 'Penurunan visus mendadak', 'Tidak membaik setelah 7 hari terapi'],
    prognosis: { vitam: 'Bonam', functionam: 'Bonam', sanationam: 'Bonam' },
    alerts: [
      { type: 'danger', text: 'HATI-HATI: Jangan berikan tetes mata mengandung Steroid jika dicurigai ada infeksi — risiko ulkus kornea dan kebutaan!' }
    ]
  },
  {
    id: 'apendisitis',
    name: 'Apendisitis Akut',
    icpc: 'D88',
    icd: 'K35',
    level: '3B',
    cat: 'Bedah & Emergensi',
    icon: '🚑',
    iconBg: '#fff5f5',
    preview: 'Nyeri perut kanan bawah mendadak. Positif tanda peritonitis lokal. Memerlukan tindakan bedah segera.',
    masalah: 'Apendisitis adalah peradangan akut pada apendiks vermiformis yang merupakan kedaruratan bedah abdomen paling umum.',
    overview: {
      etiologi: 'Sumbatan lumen usus buntu (Apendiks) oleh hiperplasia limfoid (terbanyak anak/remaja), fekalit (kotoran mengeras pada orang dewasa), dan benda asing (biji buah).',
      epidemiologi: 'Tingkat kejadian mencapai puncaknya di rentang usia 10 dampai 30 tahun.',
      patofisiologi: 'Sumbatan mekanik pada dasar apendiks mencegah aliran mukus keluar, sehingga akumulasi lendir menaikkan tekanan intralumen. Tekanan yang ekstrem menyebabkan kongesti aliran balik vena lalu iskemia dinding apendiks. Kondisi ini merangsang nosiseptor dinding perut memicu nyeri viseral kolik dari ulu hati menjalar ke kanan perut bawah. Trombosis pembuluh darah akhirnya membuahkan infark nekrosis dan gangren jaringan (Apendisitis Komplikata), yang rentan pecah menumpahkan kuman ke rongga peritoneum.',
      komplikasi: ['Apendisitis Perforata (Pecah)', 'Peritonitis Generalisata', 'Abses Apendiks', 'Sepsis Berat']
    },
    anamnesis: ['Nyeri perut berpindah: mulai dari sekitar pusat (umbilikus) lalu menetap di kanan bawah', 'Nafsu makan menurun (anoreksia)', 'Mual, muntah', 'Demam ringan - sedang', 'Diare atau konstipasi'],
    fisik: ['Nyeri tekan di titik McBurney', 'Nyeri lepas (Rebound tenderness / Blumberg sign)', 'Rovsing sign (nyeri kanan bawah saat perut kiri bawah ditekan)', 'Psoas sign atau Obturator sign positif'],
    penunjang: ['Alvarado Score (≥7 sangat mendukung)', 'Darah lengkap: Leukosituria (>10.000)', 'USG abdomen (imaging pilihan utama)'],
    penunjangDetail: [
      { nama: 'Skoring Alvarado', rasionalisasi: 'Sistem skoring objektif MANTRELS (Migration of pain, Anorexia, Nausea/vomiting, Tenderness RLQ, Rebound pain, Elevation of temp, Leukocytosis, Shift to left). Skor 7-10 indikasi kuat operasi Cito.' },
      { nama: 'USG Abdomen / CT Scan', rasionalisasi: 'USG berguna menyingkirkan penyakit ovarium/kandungan pada anak perempuan/wanita muda. CT Scan memiliki akurasi superior memvisualisasikan radang apendiks pada orang besar (obesitas) atau apendiks terpencil retrosekal.' }
    ],
    diagnosis: ['Apendisitis Akut'],
    diagnosisBanding: ['Kehamilan Ektopik Terganggu (wanita usia subur lambat haid)', 'Batu Ureter / Saluran Kemih Dextra (nyeri pinggang menjalar paha, nyeri pelvik)', 'Kista Ovarium terpuntir (Torsi Ovarium)', 'Gastroenteritis (nyeri perut menyeluruh dibarengi muntaber dominan)'],
    tatalaksana: [
      { name: 'Puasa (NPO)', dose: '-', note: 'Persiapan operasi' },
      { name: 'Cairan IV', dose: 'NaCl 0,9% atau RL', note: 'Mencegah dehidrasi' },
      { name: 'Analgesik IV (Ketorolac)', dose: '30 mg IV', note: 'Setelah dipastikan diagnosis oleh ahli bedah' }
    ],
    edukasi: ['Pasien harus segera dibawa ke RS bedah', 'Jangan memberikan kompres panas pada perut (risiko perforasi)', 'Jangan memberikan pencahar (laksatif)'],
    rujukan: ['SEMUA kasus suspek apendisitis harus dirujuk ke dokter spesialis bedah / RS segera.'],
    prognosis: { vitam: 'Bonam bila dioperasi cepat', functionam: 'Bonam', sanationam: 'Bonam' },
    alerts: [
      { type: 'danger', text: 'KEJADIAN PERFORASI meningkat tajam setelah 24-48 jam. Diagnosis dini dan rujukan cepat sangat krusial.' }
    ]
  },
  {
    id: 'tonsilitis',
    name: 'Tonsilitis Akut',
    externalUrl: 'https://www.alomedika.com/penyakit/telinga-hidung-tenggorokan/tonsilitis',
    icpc: 'R76',
    icd: 'J03.9',
    level: '4A',
    cat: 'THT',
    icon: '👅',
    iconBg: '#fed7e2',
    preview: 'Peradangan pada amandel. Gejala: nyeri menelan hebat, demam, and pembengkakan kelenjar getah bening leher.',
    masalah: 'Tonsilitis akut adalah inflamasi pada cincin Waldeyer, terutama tonsil palatina. Kondisi ini sangat umum pada anak-anak and dapat disebabkan oleh virus atau bakteri (GABHS).',
    overview: {
      etiologi: 'Lebih dari 70% kasus pada anak usia sekolah disebabkan oleh Rhinovirus, Adenovirus, atau EBV. Penyebab bakterial tersering (sekitar 15-30%) adalah Group A Beta-Hemolytic Streptococcus (GABHS) atau Streptococcus pyogenes.',
      epidemiologi: 'Sangat sering dijumpai di prasekolah dan usia sekolah dasar (5-15 tahun). Jarang ditemui pada anak <2 tahun.',
      patofisiologi: 'Tonsil (amandel) adalah garis pertahanan pertama limfatik cincin Waldeyer terhadap patogen pernapasan (inhalasi) maupun pencernaan (ingesti). Ketika beban patogen melebihi kapasitas imunitas fokal, terjadi peradangan parenkima tonsil, yang dibarengi infiltrasi sel PMN purulen membentuk detritus putih/kuning di kripta tonsil (tonsilitis folikularis).',
      komplikasi: ['Abses Peritonsil (Quinsy)', 'Demam Reumatik Akut (Rheumatic Fever)', 'Glomerulonefritis Akut Pasca Streptokokus', 'Penyakit Jantung Reumatik (RHD) kronis', 'Obstructive Sleep Apnea (OSA) pada pembesaran tonsil T4']
    },
    anamnesis: [
      'Nyeri tenggorokan (sore throat)',
      'Nyeri menelan (odynophagia)',
      'Demam tinggi dan menggigil',
      'Bau mulut (halitosis)',
      'Suara serak atau menggumam (hot potato voice)',
      'Anak mungkin menolak makan/minum karena sakit'
    ],
    fisik: [
      'Tonsil Hiperemis (merah) dan Edema (bengkak)',
      'Detritus: Bercak putih kekuningan pada permukaan tonsil (Tonsilitis Folikuler/Lakunaris)',
      'Pembesaran Kelenjar Getah Bening leher (limfadenopati servikal) yang nyeri tekan',
      'Derajat tonsil: T1 (normal), T2 (lebar), T3 (hampir bertemu), T4 (kissing tonsils)'
    ],
    penunjang: [
      'Skoring Centor: Menilai probabilitas etiologi bakteri',
      'Rapid Antigen Detection Test (RADT) atau Kultur Swab Tenggorok (bila tersedia)'
    ],
    penunjangDetail: [
      { nama: 'Skor Kriteria Centor Modifikasi', rasionalisasi: 'Prediktor GABHS tanpa lab. Masing-masing 1 poin: 1. Demam >38C, 2. Tidak ada batuk, 3. Pembengkakan KGB cervical anterior nyeri, 4. Eksudat/detritus Tonsil, 5. Usia 3-14 tahun. Total skor 4-5 sangat disarankan langsung beri antibiotik empiris profilaksis.' },
      { nama: 'Rapid Strep Antigen Test (RSAT)', rasionalisasi: 'Swab tenggorokan yang sangat spesifik (namun sensitivitas menengah) untuk streptokokus, mencegah penggunaan antibiotik sembarangan.' },
      { nama: 'ASTO (Anti-Streptolysin O)', rasionalisasi: 'Biasanya untuk melacak jejak infeksi pasca-tonsilitis bila dicurigai komplikasi Demam Reumatik akut/Sendi/Jantung beberapa bulan kemudian.' }
    ],
    diagnosis: [
      'Tonsilitis Akut Bakterial',
      'Tonsilitis Akut Viral'
    ],
    diagnosisBanding: ['Faringitis Akut', 'Abses Peritonsil (uvula terdorong ke satu sisi)', 'Difteri (ada selaput putih keabuan/pseudomembran yang mudah berdarah)', 'Mononukleosis Infeksiosa'],
    tatalaksana: [
      { name: 'Antibiotik (Amoxicillin)', dose: '500 mg q8h', note: 'Pilihan utama jika curiga bakteri (selama 10 hari)' },
      { name: 'Paracetamol', dose: '500 mg q6-8h', note: 'Analgetik and antipiretik' },
      { name: 'Obat Kumur Antiseptik', dose: 'Kumur q8-12h', note: 'Meredakan nyeri lokal' }
    ],
    tatalaksanaDetail: {
      nonFarmakologi: [
        'Istirahat cukup (Bed rest).',
        'Makan makanan lunak dan tidak merangsang (pedas/panas).',
        'Banyak minum air putih (hidrasi adekuat).',
        'Gunakan kompres hangat pada leher jika kelenjar getah bening sangat nyeri.'
      ],
      farmakologi: [
        {
          title: 'Antibiotik (Target GABHS)',
          items: [
            { name: 'Amoxicillin', dose: '50 mg/kgBB/hari divided q12h', note: 'Harus dihabiskan untuk cegah demam reumatik' },
            { name: 'Eritromisin', dose: 'Sesuai BB', note: 'Pilihan jika ada alergi penisilin (makrolid)' }
          ]
        },
        {
          title: 'Manajemen Gejala',
          items: [
            { name: 'Ibuprofen / Paracetamol', dose: 'Dosis standar', note: 'Meredakan demam and nyeri telan' }
          ]
        }
      ]
    },
    edukasi: [
      'Cuci tangan rutin dan jangan berbagi alat makan karena penyakit ini menular',
      'Antibiotik harus dihabiskan meskipun tenggorokan sudah terasa sembuh untuk cegah komplikasi jantung',
      'Ganti sikat gigi setelah sembuh untuk cegah reinfeksi',
      'Segera ke RS bila anak sesak napas atau tidak bisa menelan air liur sama sekali'
    ],
    rujukan: [
      'Abses Peritonsil: Nyeri hebat sepihak, mulut sulit dibuka (trismus), uvula miring',
      'Sumbatan jalan napas (T4/kissing tonsils dengan sesak)',
      'Tonsilitis kronis rekuren (indikasi tonsilektomi)',
      'Tidak ada perbaikan klinis dalam 48 jam'
    ],
    prognosis: { vitam: 'Bonam', functionam: 'Bonam', sanationam: 'Bonam' },
    alerts: [
      { type: 'ok', text: 'Tonsilitis virus biasanya sembuh sendiri dalam 5-7 hari hanya dengan terapi suportif.' },
      { type: 'danger', text: 'WASPADA DIFTERI: Selaput putih yang sulit dilepas dan mudah berdarah di tenggorokan adalah keadaan darurat. ISOLASI & RUJUK!' }
    ]
  },
  {
    id: 'anxietas',
    name: 'Gangguan Cemas (Generalized Anxiety)',
    icpc: 'P74',
    icd: 'F41.1',
    level: '4A',
    cat: 'Psikiatri',
    icon: '😰',
    iconBg: '#e9d8fd',
    preview: 'Kecemasan berlebihan pada berbagai aspek kehidupan ≥6 bulan. Disertai ketegangan otot dan sulit tidur.',
    masalah: 'GAD ditandai dengan kekhawatiran berlebihan (anxiety) dan ketegangan motorik hampir setiap hari selama minimal 6 bulan.',
    overview: {
      etiologi: 'Disregulasi sirkuit neurobiologis saraf otak (utamanya pada neurotransmiter serotonin, GABA, dan norepinefrin di amigdala otak). Seringkali tercetus oleh akumulasi stressor bertubi-tubi.',
      epidemiologi: 'Tingkat kejadian lebih tinggi dua kali lipat pada pada kaum wanita dibanding laki-laki. Puncaknya pada pertengahan usia dewasa produktif.',
      patofisiologi: 'Amigdala sebagai pusat reseptor ancaman di otak menjadi hiper-reaktif terhadap stimulus normal sehari-hari. Gangguan modulasi GABA (inhibitor sinyal) menyebabkan respon alarm tubuh "Fight-or-Flight" (Sistem simpatik) aktif terus menerus, membanjiri sirkuit dengan katekolamin yang diwujudkan lewat hiperkinesia (otot tegang bergetar), takikardi, diaphoresis (keringat deras), dan kelelahan saraf permanen.',
      komplikasi: ['Depresi Berat (Major Depressive Disorder)', 'Penyalahgunaan Napza (Self-medicating lewat rokok/alkohol/benzodiazepin)', 'Disfungsi Sistemik (Insomnia akut, kebotakan)']
    },
    anamnesis: ['Rasa cemas/khawatir berlebihan pada banyak hal', 'Sulit mengendalikan rasa khawatir', 'Mudah lelah', 'Sulit konsentrasi', 'Iritabilitas (mudah marah)', 'Ketegangan otot', 'Gangguan tidur'],
    fisik: ['Sering tampak gelisah / tremor halus', 'Tanda otonom: takikardia, berkeringat, napas cepat', 'Ketegangan otot leher/bahu'],
    penunjang: ['Kuesioner GAD-7 (skoring keparahan)'],
    penunjangDetail: [
      { nama: 'Kuesioner GAD-7', rasionalisasi: 'Standard Emas Skrining Cepat Faskes 1. Skala skoring untuk memetakan tingkat keparahan fungsional. Skor ≥ 10 membutuhkan intervensi.' }
    ],
    diagnosis: ['Gangguan Cemas Menyeluruh (GAD)'],
    diagnosisBanding: ['Hipertiroidisme (tremor, mata melotot exophthalmos, detak jantung sangat kencang, hormon tiroid melonjak)', 'Agorafobia / Panic Disorder (serangan panik meledak tiba-tiba tanpa pemicu tertentu yang bersifat sementara)', 'Skizofrenia (anxietas yang menempel dibalik waham / paras halusinasi)', 'Penyakit Jantung Iskemik (rasa cemas karena sensasi dada berat kronik)'],
    tatalaksana: [
      { name: 'Psikoterapi (CBT)', dose: 'Sesi mingguan', note: 'Terapi lini pertama yang sangat efektif' },
      { name: 'SSRI (Sertraline)', dose: '25-50 mg q24h', note: 'Efek terapeutik baru muncul setelah 2-4 minggu' },
      { name: 'Benzodiazepine (Diazepam)', dose: '2 mg q12h (jangka pendek)', note: 'Hanya untuk gejala fisik berat, risiko ketergantungan' }
    ],
    edukasi: ['Latihan pernapasan dan relaksasi otot', 'Olahraga teratur', 'Hindari kafein dan alkohol', 'Penyakit ini bisa dikontrol dengan kepatuhan terapi'],
    rujukan: ['Gejala makin berat / risiko bunuh diri', 'Tidak respons dengan terapi lini pertama di FKTP', 'Butuh diagnosa banding dengan gangguan somatoform berat'],
    prognosis: { vitam: 'Bonam', functionam: 'Bonam bila terkontrol', sanationam: 'Dubia (sering kronis)' },
    alerts: [
      { type: 'warn', text: 'Hindari penggunaan Benzodiazepine jangka panjang (>2-4 minggu) karena potensi adiksi yang tinggi.' }
    ]
  },
  {
    id: 'tifoid',
    name: 'Demam Tifoid',
    icpc: 'A70',
    icd: 'A01.0',
    level: '4A',
    cat: 'Umum & Infeksi',
    icon: '🌡️',
    iconBg: '#fffaced',
    preview: 'Demam bertahap (step-ladder), gangguan saluran cerna, dan gangguan kesadaran. Lidah kotor (tifoid tongue) adalah ciri khas.',
    masalah: 'Demam tifoid adalah penyakit infeksi sistemik akut yang disebabkan oleh Salmonella typhi.',
    overview: {
      etiologi: 'Infeksi bakteri gram-negatif Salmonella enterica serotype Typhi. Ditularkan melalui jalur fekal-oral perifer akut (makanan/minuman yang terkontaminasi).',
      epidemiologi: 'Penyakit endemis di negara berkembang dengan sistem sanitasi kurang memadai. Puncak insidensi pada anak sekolah hingga penderita dengan usia dewasa muda.',
      patofisiologi: 'Bakteri masuk saluran cerna, menginvasi sel M di plakat Peyer usus halus, lalu masuk ke makrofag. Bersembunyi dan bereplikasi dalam makrofag untuk menghindari antibodi (bakteremia primer). Menuju hati, limpa, sumsum tulang (bakteremia sekunder). Reaksi peradangan di usus halus inilah yang memicu risiko perforasi.',
      komplikasi: ['Perforasi Usus (Tifoid abdominalis mematikan)', 'Perdarahan Saluran Cerna', 'Ensefalopati Tifosa (Delirium, koma)', 'Miokarditis Toksik', 'Karier Kronik Typhi (kuman menetap di kandung empedu)']
    },
    anamnesis: ['Demam naik secara bertahap terutama malam hari (>7 hari)', 'Gangguan saluran cerna: konstipasi atau diare', 'Nyeri kepala, pusing, nyeri otot', 'Gangguan kesadaran ringan (apatis/somnolen)', 'Batuk kering, epistaksis'],
    fisik: ['Lidah tifoid: kotor di tengah, tepi merah, tremor', 'Bradikardia relatif (TD naik tapi nadi tidak naik proporsional)', 'Hepatomegali / Splenomegali', 'Nyeri tekan perut (rose spots jarang terlihat pada kulit gelap)'],
    penunjang: ['Darah lengkap: leukopenia, aneosinofilia', 'Uji Widal (titer O ≥ 1/320)', 'Tes TUBEX (skor ≥4 positif) — lebih sensitif dari Widal'],
    penunjangDetail: [
      { nama: 'Darah Lengkap', rasionalisasi: 'Sering menunjukkan profil unik: Leukopenia, Limfositosis relatif, dan Aneosinofilia (eosinofil 0%).' },
      { nama: 'Tubex TF', rasionalisasi: 'Mendeteksi antibodi IgM spesifik terhadap antigen O9 Salmonella Typhi. Lebih akurat & spesifik di lapangan disbanding Widal. Skor ≥ 4 membuktikan infeksi aktif.' },
      { nama: 'Kultur Darah', rasionalisasi: 'Gold standar. Spesifik mendeteksi kuman di minggu pertama demam. Kultur feses/urin lebih positif di minggu ke-2/3.' }
    ],
    diagnosis: ['Demam Tifoid.'],
    diagnosisBanding: ['Demam Berdarah Dengue / DBD (fase awal sering mirip demam tifoid)', 'Malaria (pola demam bisa tumpang tindih)', 'Leptospirosis (demam, ikterik, nyeri otot/betis betis)', 'Gastroenteritis Akut', 'Brucellosis atau Demam Kuning (area tertentu)'],
    tatalaksana: [
      { name: 'Kloramfenikol (Lini Pertama)', dose: '50-100 mg/kgBB/hari q6h selama 10-14 hari', note: 'Obat standar emas' },
      { name: 'Ciprofloxacin', dose: '500 mg q12h selama 7 hari', note: 'Lini pertama pada dewasa non-hamil' },
      { name: 'Tiamfenikol', dose: '50 mg/kgBB/hari', note: 'Alternatif bila ada gangguan sumsum tulang' }
    ],
    edukasi: ['Tirah baring (bed rest) total hingga bebas demam 7 hari', 'Diet lunak rendah serat', 'Jaga higienitas makanan dan cuci tangan', 'Minum obat hingga tuntas meski sudah merasa sehat'],
    rujukan: ['Tifoid dengan komplikasi: perforasi usus, perdarahan intestinal', 'Tifoid toksik (kesadaran menurun drastis)', 'Tidak respons dengan terapi oral setelah 5 hari'],
    prognosis: { vitam: 'Bonam', functionam: 'Bonam', sanationam: 'Bonam' },
    alerts: [
      { type: 'danger', text: 'Waspadai nyeri perut hebat mendadak dan tanda peritonitis — kemungkinan terjadi Perforasi Usus!' }
    ]
  },
  {
    id: 'gerd',
    name: 'GERD (Gastroesophageal Reflux)',
    icpc: 'D84',
    icd: 'K21.9',
    level: '4A',
    cat: 'Gastrointestinal',
    icon: '🔥',
    iconBg: '#fff5f5',
    preview: 'Rasa terbakar di dada (heartburn) dan aliran balik asam (regurgitasi). Gejala memburuk setelah makan atau berbaring.',
    masalah: 'GERD adalah gangguan aliran balik isi lambung ke esofagus yang menyebabkan gejala mengganggu.',
    overview: {
      etiologi: 'Kelemahan atau inkompetensi persendian (sfingter) otot Lower Esophageal Sphincter (LES).',
      epidemiologi: 'Prevalensi melonjak bersamaan dengan pandemi sekunder gaya hidup moderen dan kejadian obesitas.',
      patofisiologi: 'Kejadian asam cairan lambung menciprat berbalik mengalir (reflux) menaiki tabung esofagus secara patologis normalnya dicegah oleh otot berbentuk cincin (Sfingter esofagus bawah). Saat otot LES relaksasi memendek/melemah akibat tekanan lambung berlebih (obesitas, kehamilan, makanan berlemak memicu gas), cairan asam lambung akan merusak dan mengiritasi kronis jaringan tipis mukosa squamosa esofagus; Mencetuskan sensasi panas menusuk tajam merambat di dada (heartburn) meniru serangan jantung.',
      komplikasi: ['Barrett’s Esophagus (perubahan sel normal jadi pracancer, risiko karsinoma adenomatosa esofagus tinggi)', 'Striktur Esofagus (esofagus perih menyempit sehingga makanan menelan seret / tersedak)', 'Batuk / Asma bronkial ekstrinsik (regurgitasi asam masuk cabang trakea paru malam hari)']
    },
    anamnesis: ['Heartburn: rasa panas/terbakar di dada menjalar ke leher', 'Regurgitasi: rasa asam/pahit di mulut', 'Disfonia (suara serak) pagi hari', 'Batuk kronis', 'Gejala muncul setelah makan atau saat berbaring'],
    fisik: ['Seringkali normal', 'Nyeri tekan epigastrium ringan', 'Erosi gigi (asam lambung kronis)'],
    penunjang: ['PPI Test: respon positif terhadap terapi PPI dosis ganda selama 1-2 minggu'],
    penunjangDetail: [
      { nama: 'PPI Trial (Terapi Diagnostik)', rasionalisasi: 'Cara termudah (dan standar primer) dengan memberi Inhibitor Pompa Proton (Omeprazol dosis tinggi 14 hari). Bila heartburn amblas, diagnosis GERD kuat.' },
      { nama: 'Esofagogastroduodenoskopi (EGD/Endoskopi)', rasionalisasi: 'Pemeriksaan alat selang berkamera invasif yang mutlak diwajibkan bila GERD disertai "ALARM SIGNS": Pasien sulit/sakit menelan berat, Muntah Darah (Hematemesis), Kurus Tiba Tiba, Usia Lanjut terindikasi Keganasan Saluran Cerna.' }
    ],
    diagnosis: ['GERD (Gastroesophageal Reflux Disease)'],
    diagnosisBanding: ['Penyakit Jantung Koroner / Angina Pektoris (nyeri dada amblas saat istirahat, menjalar ke lengan kiri atau rahang)', 'Ulkus Peptikum (nyeri di lambung fokus (bukan esofagus) diperparah makanan (Ulkus gaster) atau membaik sesaat sesudah makan (ulkus duodenum)', 'Esofagitis Eosinofilik', 'Akalasia (katup LES malah kaku mencekik keras kronis)'],
    tatalaksana: [
      { name: 'PPI (Omeprazole / Lansoprazole)', dose: '20 mg q24h (30-60 menit sebelum sarapan)', note: 'Minimal 4 minggu' },
      { name: 'Antasida', dose: '10 mL q8h prn', note: 'Untuk pereda gejala cepat' },
      { name: 'Prokinetik (Domperidone)', dose: '10 mg q8h ac', note: 'Membantu pengosongan lambung' }
    ],
    edukasi: ['Turunkan berat badan bagi yang obesitas', 'Jangan langsung tidur setelah makan (menunggu 3 jam)', 'Tidur dengan bantal lebih tinggi', 'Hindari makanan pemicu: lemak, cokelat, kopi, peppermint, alkohol'],
    rujukan: ['Ada tanda bahaya (dysphagia, BB turun, anemia)', 'Gejala menetap meski terapi PPI dosis ganda selama 4 minggu'],
    prognosis: { vitam: 'Bonam', functionam: 'Bonam', sanationam: 'Bonam' },
    alerts: [
      { type: 'warn', text: 'Singkirkan kemungkinan Nyeri Dada Kardiogenik (Angina Pektoris) terutama pada pasien dengan faktor risiko jantung.' }
    ]
  },
  {
    id: 'gagal_jantung',
    name: 'Gagal Jantung Kronik',
    externalUrl: 'https://www.alomedika.com/penyakit/kardiologi/gagal-jantung-kronik',
    icpc: 'K77',
    icd: 'I50.9',
    level: '3B',
    cat: 'Kardiovaskular',
    icon: '🫀',
    iconBg: '#fce4ec',
    preview: 'Sesak napas saat aktivitas atau berbaring (ortopnea). Bengkak di kedua kaki dan cepat lelah.',
    masalah: 'Gagal jantung adalah sindrom klinis akibat kelainan struktur atau fungsi jantung.',
    overview: {
      etiologi: 'Penyebab primer kardiak terbanyak: Jantung Koroner (Iskemia kronis), dan kelainan otot kardiomiopati bawaan. Pemicu beban kerja jantung yang berat (afterload kronis): Hipertensi Esensial Kronis tak tertangani.',
      epidemiologi: 'Risiko gagal jantung berasosiasi proporsional sebanding seiring pertambahan tuanya umur.',
      patofisiologi: 'Mekanisme pompa kontraktil jantung melemah/tidak fleksibel secara anatomi, membuat curah fraksi darah segar (Cardiac Output) merosot tidak mampu memenuhi nutrisi vaskulatur perfusi organ tubuh. Untuk mengkompensasinya, baroreseptor ginjal dan pembuluh merespon lewat konstriksi Sistem RAA hiperaktif, yang menahan air/garam di darah mati-matian; justru menumpuk bendungan cairan air (Kongesti) berbalik meledak di bilik Paru-Paru (Sesak Napas Ortopnea / Edema Paru) dan Tungkai Kaki (Ascites bengkak), mencekik jantung makin berat masuk pusaran setan perburukan.',
      komplikasi: ['Sepsis Kardio-Ginjal / Sindrom Kardiorenal (ginjal ikut mati bersama jantung layu)', 'Aritmia Ventrikel Fatal (Henti Jantung mendadak)', 'Edema Paru Akut Fulminan', 'Syok Kardiogenik', 'Trombosis/Stroke Emboli']
    },
    anamnesis: ['Sesak napas saat aktivitas (dyspnea on exertion)', 'Sesak saat berbaring (orthopnea) — butuh bantal tinggi', 'Terbangun malam hari karena sesak (PND)', 'Bengkak di pergelangan kaki (edema)', 'Cepat lelah'],
    fisik: ['JVP meningkat', 'Ronki basah halus di basal paru', 'Kardiomegali (iktus kordis bergeser lateral)', 'Edema pitting di pergelangan kaki / pretibia', 'S3 Gallop'],
    penunjang: ['EKG: tanda LVH, iskemia, atau aritmia', 'Rontgen Thorax: kardiomegali, edema paru', 'Ekokardiografi (rujukan Sp.JP)'],
    penunjangDetail: [
      { nama: 'Radiografi Rontgen Thorax', rasionalisasi: 'Memperlihatkan rasio cor (jantung) terhadapa rongga dada membengkak masif membesar (Kardiomegali / CTR > 50%), serta uap serbuan bendungan putih air murni di paru-paru (Edema Kongesti Bat Sign / Kerley B).' },
      { nama: 'Ekokardiografi (USG Jantung)', rasionalisasi: 'Golden parameter mutlak. Menunjukkan fungsi LVEF (Ejection Fraction / Fraksi darah terpompa kontraksi jantung) apakah terpangkas melemah reduksi <40% (HFrEF) atau kaku menebal hipertrofi ≥50% (HFpEF).' },
      { nama: 'NT-proBNP / BNP Plasma', rasionalisasi: 'Enzim yang dirembeskan akibat regangan dinding jantung membengkak. Alat ukur definitif memilah diagnosis pasti sumber penyakit paru akut vs penyakit gagal jantung sesak sekunder. Nilai tinggi konfirmasi telak Gagal Jantung.' },
      { nama: 'Elektrokardiogram (EKG)', rasionalisasi: 'EKG Normal meminimalisir kemungkinan Gagal Jantung. EKG berguna mendeteksi dalang Pemicunya: Gelombang Q (pasca Infark), Deviasi Atrial Fibrilasi, LVH.' }
    ],
    diagnosis: ['Gagal Jantung Kronik (HFpEF atau HFrEF)'],
    diagnosisBanding: ['PPOK / Penyakit Paru Obstruktif (sesak napas dibarengi mengi memanjang, riwayat rokok tebal, tanpa gejala edem perifer mendominasi)', 'Pneumonia (sesak dibarengi demam kencang berjam jam, radang, leukositosis)', 'Gagal Ginjal Kronis Akhir / CKD (Bengkak tubuh dibarengi peningkatan Urea/Creatinine mendominasi, tanpa kerusakan LV fungsi struktural spesifik primer jantung)', 'Asma', 'Anemia Berat (Pasien loyo lemah, Pucat)'],
    tatalaksana: [
      { name: 'Furosemide (Loop Diuretic)', dose: '20-40 mg q24h', note: 'Bila ada tanda retensi cairan (bengkak/sesak)' },
      { name: 'Ramipril (ACEi)', dose: '2,5-10 mg q24h', note: 'Lini pertama untuk remodeling jantung' },
      { name: 'Bisoprolol (Beta blocker)', dose: '1,25-10 mg q24h', note: 'Mulai hanya saat kondisi stabil (tidak sesak/bengkak)' }
    ],
    tatalaksanaDetail: {
      nonFarmakologi: [
        'Batasi asupan garam (Diet rendah garam < 2g/hari)',
        'Batasi asupan cairan jika edem berat (± 1.5 - 2 Liter/hari)',
        'Timbang berat badan setiap pagi (Waspada naik > 2kg dalam 3 hari)',
        'Aktivitas fisik ringan teratur sesuai toleransi (tidak boleh memforsir)'
      ],
      farmakologi: [
        {
          title: 'Managemen Kongesti (Jika Bengkak/Sesak)',
          items: [
            { name: 'Furosemide (Loop Diuretic)', dose: '20 mg - 40 mg (Pagi Hari)', note: 'Meningkatkan urin output. Waspada Hipokalemia.' }
          ]
        },
        {
          title: 'Modifikasi Penyakit (Gold Standard)',
          items: [
            { name: 'Ramipril / Lisinopril (ACEi)', dose: '2.5 mg - 5 mg (q24h)', note: 'Mencegah pembengkakan jantung (remodeling)' },
            { name: 'Bisoprolol (Beta Blocker)', dose: '1.25 mg - 5 mg (q24h)', note: 'Hanya dimulai jika pasien STABIL (Euvolemik)' },
            { name: 'Spironolactone (MRA)', dose: '25 mg (q24h)', note: 'Tambahan jika gejala menetap' }
          ]
        }
      ]
    },
    edukasi: ['Batasi asupan garam (<2g/hari)', 'Batasi asupan cairan bila bengkak berat (±1,5 L/hari)', 'Timbang berat badan setiap pagi', 'Segera kontrol bila BB naik >2kg dalam 3 hari'],
    rujukan: ['Onset baru gagal jantung', 'Worsening Heart Failure (sesak makin berat)', 'Gagal jantung dengan aritmia (Atrial Fibrilasi)'],
    prognosis: { vitam: 'Dubia', functionam: 'Dubia', sanationam: 'Chronic condition' },
    alerts: [
      { type: 'danger', text: 'Sesak hebat mendadak + ronki basah seluruh lapangan paru = Edema Paru Akut. RUJUK CITO dengan oksigen dan posisi duduk!' }
    ]
  },
  {
    id: 'tension_headache',
    name: 'Tension Type Headache (TTH)',
    icpc: 'N01',
    icd: 'G44.2',
    level: '4A',
    cat: 'Neurologi',
    icon: '💆',
    iconBg: '#f3e5f5',
    preview: 'Nyeri kepala seperti diikat atau ditekan. Bersifat bilateral dan tidak dipengaruhi aktivitas fisik.',
    masalah: 'TTH adalah jenis nyeri kepala primer yang paling umum, sering berhubungan dengan stres dan ketegangan otot.',
    overview: {
      etiologi: 'Spasme fasia dan ketegangan otot-otot di sekitar tengkuk leher, bahu, rahang, dan kulit tempurung perikranial akibat stres mental, postur buruk depan komputer (Text-neck syndrome), atau kurang tidur.',
      epidemiologi: 'Tipe pusing andalan penderita sejuta umat merajai 80% total kasus nyeri kepala sedunia. Berpredileksi merata menyerang usia produktif.',
      patofisiologi: 'Kontraksi tonus isometrik hipertonik serabut otot secara kronis menyempitkan mikrovaskular jaringannya sendiri dan menjebak asam laktat sisa tenaga. Penumpukan iritan kimiawi jaringan perifer otot ini mengirim rentetan hantaran sinyal rangsang nosiseptif nyeri konstan menuju saraf Trigemino-servikalis naik ke otak. Otak menerjemahkannya sebagai rasa "Berat seperti ditekan helm atau ditarik karet gelang ketat penuh beban kepala".',
      komplikasi: ['Menjadi TTH Kronik (Pusing tiada henti >15 hari penuh per bulan)', 'Medication Overuse Headache (MOH / Nyeri Kepala Akibat Rebound Konsumsi Painkiller Paracetamol/NSAID harian brutal melebihi batas dosis warung)', 'Insomnia Psikosomatik Cemas']
    },
    anamnesis: ['Nyeri kepala seperti ditekan, diikat, atau rasa berat', 'Lokasi bilateral (kedua sisi)', 'Intensitas ringan-sedang', 'Tidak diperburuk oleh tangga atau aktivitas rutin', 'Dapat berlangsung 30 menit hingga beberapa hari'],
    fisik: ['Normal', 'Kadang ada nyeri tekan pada otot pericranial (leher, bahu, dahi)'],
    penunjang: ['Tidak diperlukan imaging rutin'],
    penunjangDetail: [
      { nama: 'Diagnosis 100% Klinis Anamnesis Fisik', rasionalisasi: 'Pada TTH murni episodik dan klasik, Pindaian Rontgen/CT-Scan Otak TIDAK DIREKOMENDASIKAN secara baku, buang biaya saja karena akan dipastikan anatominya 100% normal sempurna.' }
    ],
    diagnosis: ['Tension Type Headache (Episodik atau Kronik)'],
    diagnosisBanding: ['Migren Tanpa Aura (Nyeri dominan Unilateral separuh pelipis, sifatnya bertebang denyut mendebar Jantung keras, dan penderita benci mati liat lampu terang Fotofobia)', 'Cluster Headache (Sakit mata menohok sesisi seolah mau ditikam congkel matanya dari dalam, disertai ingusan hidung mampet sesisi & mata keluar air mata sendiri)', 'Space Occupying Lesion / Tumor Otak (Nyeri parah memburuk progresif mematikan pagi hari + Mual Nyemprot Proyektil tak tertahankan, ada Papiledema)'],
    tatalaksana: [
      { name: 'Paracetamol', dose: '500-1000 mg q6-8h prn', note: 'Analgesik lini pertama' },
      { name: 'Ibuprofen', dose: '400 mg q8h prn', note: 'Minum setelah makan' },
      { name: 'Amitriptyline', dose: '10-25 mg nocte', note: 'Untuk profilaksis TTH kronik' }
    ],
    tatalaksanaDetail: {
      nonFarmakologi: [
        'Istirahat cukup dan managemen stres',
        'Koreksi postur tubuh (ergonomis saat bekerja)',
        'Relaksasi / kompres hangat pada area otot tegang (tengkuk)'
      ],
      farmakologi: [
        {
          title: 'Managemen Fase Akut (Abortif)',
          items: [
            { name: 'Paracetamol', dose: '500 mg - 1000 mg (q6-8h)', note: 'Analgesik paling aman' },
            { name: 'Ibuprofen / NSAID', dose: '400 mg (q8h)', note: 'Pilihan jika paracetamol kurang respons' }
          ]
        },
        {
          title: 'Profilaksis (Jika Kronik > 15 hari/bulan)',
          items: [
            { name: 'Amitriptyline', dose: '10 mg - 25 mg (Malam)', note: 'Dimulai dosis rendah nocte' }
          ]
        }
      ]
    },
    edukasi: ['Kelola stres dan emosi', 'Istirahat dan tidur yang cukup', 'Peregangan otot leher dan bahu', 'Hindari penggunaan obat antinyeri berlebih (>2-3 hari/minggu)'],
    rujukan: ['Terjadi perubahan pola nyeri kepala', 'Nyeri kepala makin berat dan tidak respons terapi', 'Nyeri kepala disertai defisit neurologis'],
    prognosis: { vitam: 'Bonam', functionam: 'Bonam', sanationam: 'Bonam' },
    alerts: [
      { type: 'warn', text: 'Waspadai "Medication Overuse Headache" akibat konsumsi analgesik berlebihan setiap hari.' }
    ]
  },
  {
    id: 'tinea_corporis',
    name: 'Tinea Corporis (Kurap)',
    externalUrl: 'https://www.alomedika.com/penyakit/dermatovenerologi/tinea-corporis',
    icpc: 'S74',
    icd: 'B35.4',
    level: '4A',
    cat: 'Dermatologi',
    icon: '🍄',
    iconBg: '#f6e05e',
    preview: 'Infeksi jamur pada kulit tubuh yang ditandai dengan bercak merah bersisik berbentuk cincin (Anular) dengan tepi aktif.',
    masalah: 'Tinea Corporis adalah infeksi jamur dermatofita pada kulit halus (glabrous skin). Jamur menyerang jaringan keratin pada kulit and sangat sering terjadi di iklim tropis yang lembap.',
    overview: {
      etiologi: 'Jamur Dermatofita (Trichophyton rubrum, T. mentagrophytes, or Microsporum canis).',
      epidemiologi: 'Terjadi pada semua usia. Faktor risiko meliputi kelembapan tinggi, keringat berlebih, obesitas, and penggunaan pakaian ketat.',
      patofisiologi: 'Jamur melepaskan enzim keratinase → Merusak keratin kulit → Peradangan di pinggir lesi (tepi aktif) sementara bagian tengah mulai membaik (central healing).',
      komplikasi: ['Infeksi Bakteri Sekunder', 'Tinea Incognito (akibat salah penggunaan steroid)', 'Majocchi Granuloma (jamur masuk ke folikel rambut)']
    },
    anamnesis: [
      'Gatal hebat terutama saat berkeringat',
      'Muncul bercak merah yang meluas and membentuk lingkaran',
      'Riwayat berenang di tempat umum, berbagi handuk, or kontak dengan hewan peliharaan (kucing/anjing)',
      'Penggunaan krim gatal yang dibeli bebas (seringkali mengandung steroid)'
    ],
    fisik: [
      'Lesi Anular: Bercak bulat/lonjong berbatas tegas',
      'Tepi Aktif: Bagian pinggir lesi lebih merah, meninggi, bersisik (skuama), and terkadang ada vesikel kecil',
      'Central Healing: Bagian tengah lesi tampak lebih bersih or menyembuh',
      'Polisiklik: Beberapa lesi yang bergabung membentuk konfigurasi seperti bunga/awan'
    ],
    penunjang: [
      'Pemeriksaan KOH 10-20% dari kerokan tepi lesi',
      'Lampu Wood (hanya untuk spesies tertentu): Fluoresensi hijau (jarang pada tinea corporis)'
    ],
    penunjangDetail: [
      { nama: 'Pemeriksaan KOH', rasionalisasi: 'Mencari hifa panjang, bercabang, and bersekat (septate hyphae) di bawah mikroskop untuk memastikan infeksi jamur dermatofita.' }
    ],
    diagnosis: [
      'Tinea Corporis'
    ],
    diagnosisBanding: ['Pityriasis Rosea (Herald Patch)', 'Dermatitis Numularis', 'Psoriasis Vulgaris', 'Eritema Anulare Sentrifugum'],
    tatalaksana: [
      { name: 'Ketoconazole 2% (Krim)', dose: 'Oleskan 2x sehari (2-4 minggu)', note: 'Oleskan hingga 2cm di luar tepi lesi' },
      { name: 'Terbinafine 1% (Krim)', dose: 'Oleskan 1-2x sehari (1-2 minggu)', note: 'Efikasi lebih tinggi, waktu lebih singkat' },
      { name: 'Griseofulvin (Oral)', dose: '500 mg per hari', note: 'Hanya jika lesi sangat luas or resisten topikal' }
    ],
    tatalaksanaDetail: {
      nonFarmakologi: [
        'Jaga area kulit tetap kering and tidak lembap.',
        'Gunakan pakaian berbahan katun yang menyerap keringat.',
        'Jangan berbagi handuk, baju, or alat mandi dengan orang lain.',
        'Cuci handuk and sprei secara rutin dengan air panas.'
      ],
      farmakologi: [
        {
          title: 'Antijamur Topikal (Lini Pertama)',
          items: [
            { name: 'Mikonazol / Klotrimazol / Ketokonazol', dose: 'Aplikasi 2x sehari', note: 'Lanjutkan hingga 1-2 minggu setelah gejala hilang untuk cegah kekambuhan' },
            { name: 'Terbinafine Krim', dose: 'Aplikasi 1x sehari', note: 'Pilihan jika ingin durasi terapi lebih singkat (7-14 hari)' }
          ]
        },
        {
          title: 'Antijamur Sistemik (Indikasi Khusus)',
          items: [
            { name: 'Griseofulvin', dose: '500 mg (Dewasa) / 10-20 mg/kgBB (Anak)', note: 'Diminum bersama makanan berlemak untuk absorbsi maksimal' },
            { name: 'Itrakonazol', dose: '100 mg 1x sehari (15 hari)', note: 'Alternatif untuk kasus kronis/luas' }
          ]
        }
      ]
    },
    edukasi: [
      'Krim jamur harus dioleskan melewati tepi merah yang aktif (lebarkan sekitar 2cm)',
      'Jangan menghentikan krim segera setelah gatal hilang; selesaikan sesuai durasi (biasanya 2-4 minggu)',
      'Hindari penggunaan krim racikan yang mengandung steroid karena akan memperparah jamur',
      'Obati anggota keluarga or hewan peliharaan yang juga terkena'
    ],
    rujukan: [
      'Tinea incognito (lesi menjadi tidak khas akibat steroid)',
      'Infeksi jamur yang sangat luas (generalisata)',
      'Tidak ada perbaikan dengan pengobatan antivirus oral adekuat selama 2-4 minggu',
      'Pasien dengan imunosupresi (HIV or penggunaan steroid jangka panjang)'
    ],
    prognosis: { vitam: 'Bonam', functionam: 'Bonam', sanationam: 'Bonam bila eliminasi sumber penularan dilakukan' },
    alerts: [
      { type: 'danger', text: 'WASPADA Tinea Incognito: Lesi jamur yang bentuknya berubah menjadi tidak khas akibat penggunaan krim steroid berlebihan.' }
    ]
  },
  {
    id: 'malaria',
    name: 'Malaria',
    icpc: 'A73',
    icd: 'B54',
    level: '4A',
    cat: 'Umum & Infeksi',
    icon: '🦟',
    iconBg: '#fff3cd',
    preview: 'Demam menggigil secara periodik (trias malaria). Riwayat perjalanan ke daerah endemis adalah kunci diagnosis.',
    masalah: 'Malaria adalah penyakit infeksi yang disebabkan oleh parasit Plasmodium yang ditularkan melalui gigitan nyamuk Anopheles betina.',
    overview: {
      etiologi: 'Parasit mikroskopis tipe Protozoa ganas spesies Plasmodium (P. falciparum, P. vivax, P. malariae, P. ovale). Ditularkan oleh suntikan liur serangga vektor hisap malam hari Nyamuk Anopheles betina.',
      epidemiologi: 'Penyakit mematikan eksotis endemis garis katulistiwa Indonesia dan afrika timur ekuatorial rimba lebat (Papua, Riau, pulau Maluku, batas kalimantan). Sering menimpa pendatang/wisatawan pasca pulang traveling (Imported Case Malaria).',
      patofisiologi: 'Nyamuk mencoblos kulit menumpahkan larva nyamuk pipih peluru (Sporozoit) yang nyusup tak terdeteksi imun menuju singgasana persembunyian organ Hati. Setelah membelah diri ratusan ribu anak (Skizogoni Hati), mereka melompat membedah keluar mencaplok & merusak rumah baru yaitu Sel Darah Merah Inti Oksigen (Eritrositik skizogoni). Hancurnya pecah lisis sel darah merah serentak ini melepaskan racun antigen parasit membanjiri reseptor Imun, membuahkan peradangan panas mendidih tinggi menggigil ngilu tubuh pasien berulang bergelora secara sinkron selang seling ritmis khas Trias Dengue Demam-Menggigil-Keringat Tiap 48/72 jam.',
      komplikasi: ['Malaria Serebral Koma / Cerebral Malaria (Plasmodium Falciparum membajak sel darah merah memblokir gumpalan kaku lengket roset aliran mikrovaskulatur oksigen sentral otak)', 'Anemia Hemolitik Akut', 'Sindrom Gagal Ginjal Kehitaman (Blackwater fever akibat urin penuh endapan limbah darah merah hancur)', 'Syok ARDS Paru']
    },
    anamnesis: ['Trias Malaria: Demam, Menggigil, Berkeringat', 'Demam bersifat periodik (tiap 48 atau 72 jam)', 'Nyeri kepala, mual, muntah', 'Nyeri otot / pegal-pegal', 'Riwayat berkunjung ke daerah endemis (Papua, NTT, Maluku) dalam 2-4 minggu terakhir'],
    fisik: ['Konjungtiva anemis', 'Sklera ikterik (pada kasus berat)', 'Suhu tubuh >37,5°C', 'Splenomegali (Spleen membesar)', 'Hepatomegali'],
    penunjang: ['RDT (Rapid Diagnostic Test) Malaria', 'Mikroskopis (Sediaan Darah Tebal & Tipis): ditemukan parasit Plasmodium'],
    penunjangDetail: [
      { nama: 'Sediaan Apus Darah Tetes Tebal & Tetes Tipis Mikroskopis', rasionalisasi: 'Gold-Standard Wajib Diagnosis Konfirmasi. Darah tepi dioles dengan Giemsa. Tetes kuat/tebal: Deteksi eksistensi malaria ada atau nol. Tetes pelan/tipis menampakan jelas parasit (cincin ring, bulan sabit trofozoit dewasa) untuk identifikasi tipe Spesies Falciparum pembunuh atau Vivax jinak relaps.' },
      { nama: 'Rapid Diagnostic Malaria Test (Malaria RDT)', rasionalisasi: 'Standar deteksi Antigen ganda cepat akurat setara Tes Uji Kehamilan untuk area hutan rural tak beraliran listrik mikroskopis FKTP terpencil. Dapat membedakan spesimen PF (falciparum) dengan plasmodium minor.' }
    ],
    diagnosis: ['Malaria Falsiparum / Vivax / Ovale / Malariae / Mixed.'],
    diagnosisBanding: ['Demam Berdarah Dengue / DBD (Sama sama disuntik serangga nyamuk, tapi suhu tinggi mendidih tanpa siklus ritmis trias jelas, dan dibarengi trombosit merosot pendarahan purpura jentik kulit)', 'Demam Tifoid Kuman Tipes (Demam konsisten menaik perlahan murni menyerang lambung / feses)', 'Leptospirosis (Kontak genangan air banjir kencing tikus, ikterik kuning murni, nyeri meradang paha betis mendominasi parah)'],
    tatalaksana: [
      { name: 'DHP (Dihydroartemisinin-Piperaquine)', dose: 'Sekali sehari selama 3 hari (dosis sesuai BB)', note: 'Obat lini pertama saat ini' },
      { name: 'Primaquin', dose: '0,25-0,75 mg/kgBB', note: 'Dosis tunggal untuk Falsiparum; 14 hari untuk Vivax (cegah relaps)' },
      { name: 'Paracetamol', dose: '500 mg q6-8h prn', note: 'Demam' }
    ],
    tatalaksanaDetail: {
      nonFarmakologi: [
        'Tirah baring dan monitoring tanda bahaya (Malaria Berat)',
        'Gunakan kelambu saat tidur',
        'Asupan cairan dan nutrisi yang baik'
      ],
      farmakologi: [
        {
          title: 'Terapi Artemisinin-based Combination (ACT)',
          items: [
            { name: 'DHP (Dihydroartemisinin + Piperaquine)', dose: 'Dosis sesuai BB (3 hari)', note: 'Wajib diminum sekali sehari tanpa putus' }
          ]
        },
        {
          title: 'Terapi Radikal (Anti-Relaps / Gametosidal)',
          items: [
            { name: 'Primaquin', dose: '0.25 - 0.75 mg/kgBB', note: '14 hari (Vivax/Ovale); Dosis tunggal (Falsiparum)' }
          ]
        }
      ]
    },
    edukasi: ['Minum obat hingga tuntas sesuai jadwal untuk cegah resistensi dan relaps', 'Gunakan kelambu berinsektisida saat tidur', 'Gunakan repelen nyamuk saat beraktivitas malam hari', 'Segera kembali bila kencing warna teh pekat atau kesadaran turun'],
    rujukan: ['Malaria Berat: kejang, penurunan kesadaran, sesak napas, perdarahan, ikterik berat, gagal ginjal', 'Malaria pada ibu hamil (harus dipantau ketat)', 'Tidak respons dengan pengobatan lini pertama'],
    prognosis: { vitam: 'Bonam bila tanpa komplikasi', functionam: 'Bonam', sanationam: 'Bonam' },
    alerts: [
      { type: 'danger', text: 'MALARIA BERAT adalah kegawatdaruratan. Berikan ARTESUNAT IV/IM dosis awal jika tersedia, lalu segera RUJUK!' }
    ]
  },
  {
    id: 'hiv_uncomplicated',
    name: 'HIV/AIDS Tanpa Komplikasi',
    icpc: 'A79',
    icd: 'Z21',
    level: '4A',
    cat: 'Umum & Infeksi',
    icon: '🎗️',
    iconBg: '#ffebee',
    preview: 'Infeksi Human Immunodeficiency Virus. Skrining pada kelompok berisiko atau pasien TB/IMS.',
    masalah: 'HIV menyerang sistem kekebalan tubuh. Fokus FKTP adalah penemuan kasus, inisiasi ARV pada kondisi stabil, dan retensi pengobatan.',
    anamnesis: ['Sering tanpa gejala pada tahap awal', 'Demam hilang timbul >1 bulan', 'Diare kronis >1 bulan', 'Penurunan BB >10% tanpa sebab jelas', 'Riwayat perilaku berisiko (seks tidak aman, penusukan jarum suntik bergantian)', 'Riwayat IMS atau TB'],
    fisik: ['Kandidiasis oral (jamur di mulut)', 'Limfadenopati generalisata (pembengkakan KGB di >2 area non-inguinal)', 'Wasting syndrome (tampak sangat kurus)', 'Infeksi oportunistik kulit: PPE, dermatitis seboroik berat'],
    penunjang: ['Tes Cepat (RDT) HIV menggunakan 3 reagen berbeda (Strategi 3)', 'Pemeriksaan CD4 (bila tersedia)', 'Skrining TB (X-ray, TCM)', 'Skrining IMS (Sifilis, dll)'],
    diagnosis: ['Terinfeksi HIV.'],
    tatalaksana: [
      { name: 'ARV (TLE / TLD)', dose: '1 tablet sekali sehari (malam hari)', note: 'Kombinasi Tenofovir, Lamivudine, Efavirenz/Dolutegravir' },
      { name: 'Kotrimoksazol Profilaksis', dose: '960 mg q24h', note: 'Bila CD4 <200 atau gejala klinis stad 2/3/4' },
      { name: 'Isoniazid (PPH)', dose: '300 mg q24h + B6', note: 'Profilaksis TB selama 6-12 bulan' }
    ],
    edukasi: ['Minum obat ARV seumur hidup dan tepat waktu (kepatuhan >95% sangat penting)', 'Gunakan kondom saat berhubungan seks', 'Edukasi pasangan untuk tes HIV', 'Makan makanan bergizi dan jaga kebersihan diri'],
    rujukan: ['HIV dengan infeksi oportunistik berat (Meningitis Kriptokokus, PCP, Toksoplasmosis)', 'Muncul efek samping ARV berat (Steven-Johnson Syndrome, hepatitis induksi obat)', 'Ibu hamil dengan HIV'],
    prognosis: { vitam: 'Bonam dengan ARV rutin', functionam: 'Bonam', sanationam: 'Chronic condition' },
    alerts: [
      { type: 'warn', text: 'ARV dimulai segera setelah diagnosis ditegakkan (Test and Treat), kecuali pada kondisi meningitis TB/Kriptokokus.' }
    ]
  },
  {
    id: 'migraine',
    name: 'Migrain',
    icpc: 'N89',
    icd: 'G43',
    level: '4A',
    cat: 'Neurologi',
    icon: '🧠',
    iconBg: '#f3e5f5',
    preview: 'Nyeri kepala berdenyut sesisi (unilateral). Disertai mual, fotofobia, atau fonofobia.',
    masalah: 'Migrain adalah nyeri kepala primer berulang dengan intensitas sedang hingga berat.',
    anamnesis: ['Nyeri kepala berdenyut (throbbing)', 'Lokasi sesisi (unilateral) — bisa bergantian', 'Disertai mual dan/atau muntah', 'Sensitif terhadap cahaya (fotofobia) atau suara (fonofobia)', 'Diperberat oleh aktivitas fisik rutin', 'Durasi 4-72 jam', 'Kadang didahului aura (kilatan cahaya, bintik gelap)'],
    fisik: ['Normal', 'Mencari tanda peningkatan tekanan intrakranial (papiledema) untuk menyingkirkan penyebab sekunder'],
    penunjang: ['Seringkali tidak diperlukan imaging'],
    diagnosis: ['Migrain Tanpa Aura (paling umum) atau Migrain Dengan Aura.'],
    tatalaksana: [
      { name: 'Paracetamol / NSAID', dose: 'Ibuprofen 400 mg atau Aspirin 600-900 mg', note: 'Minum segera saat serangan muncul' },
      { name: 'Triptan (Sumatriptan)', dose: '50-100 mg (oral)', note: 'Spesifik untuk serangan migrain sedang-berat' },
      { name: 'Lini Profilaksis (Propranolol)', dose: '40-120 mg/hari (terbagi)', note: 'Jika serangan >3x/bulan atau sangat mengganggu' }
    ],
    edukasi: ['Kenali dan hindari pencetus (kurang tidur, stres, cokelat, MSG, telat makan)', 'Istirahat di ruangan yang gelap dan tenang saat serangan', 'Catat pola nyeri kepala dalam buku harian'],
    rujukan: ['Status migrainosus (serangan >72 jam)', 'Migrain dengan defisit neurologis menetap', 'Nyeri kepala hebat mendadak (thunderclap) — curiga perdarahan subaraknoid'],
    prognosis: { vitam: 'Bonam', functionam: 'Bonam', sanationam: 'Recurrent condition' },
    alerts: [
      { type: 'warn', text: 'Waspadai migrain pada wanita pengguna kontrasepsi hormonal — risiko stroke iskemik sedikit meningkat.' }
    ]
  },
  {
    id: 'ppok',
    name: 'PPOK (Penyakit Paru Obstruktif Kronik)',
    icpc: 'R95',
    icd: 'J44.9',
    level: '3B',
    cat: 'Respirasi',
    icon: '🚬',
    iconBg: '#e2e8f0',
    preview: 'Sesak napas kronik progresif pada perokok/mantan perokok. Batuk berdahak kronis dan dada terasa berat.',
    masalah: 'PPOK adalah keterbatasan aliran udara yang persisten, biasanya disebabkan oleh pajanan asap rokok atau polusi.',
    overview: {
      etiologi: 'Pajanan kronis inhalasi partikel gas beracun: paling absolut Asap Rokok Kretek/Putih (perokok aktif & pasif), diikuti polutan partikulat industri asap knalpot, pembakaran biomasa kayu dapur tungku, atau defisiensi genetik Alpha-1 Antitrypsin.',
      epidemiologi: 'Penyakit mematikan pria lansia. Risiko melonjak linear dengan satuan indeks Brinkman (jumlah hisap sebuku x durasi tahun).',
      patofisiologi: 'Asap rokok membakar saluran napas dengan stress oksidatif merusak harian menahun. Terjadi Bronkitis Kronis: Paru muntah mukus lendir berlebih akibat kelenjar goblet menebal, membendung aliran Oksigen leher napas. Disertai Emfisema: Asap melelehkan fondasi elastis alveoli kantung napas ujung, menjadikannya melar, jembreng, dan kehilangan daya tolak balik (Elastic Recoil). Pasien bisa menarik napas masuk, tapi tidak bisa meniup CO2 limbah busuk keluar karena kantungnya kempes menjebak udara. Dada menggembung Barrel-Chest.',
      komplikasi: ['Cor Pulmonale (Gagal Jantung Kanan bengkak liver sekunder krn hipertensi tahanan paru sempit kronik)', 'Pneumothorak Spontan Sekunder (Kantung udara bleb membesar meletus bocor kompresi paru kempes)', 'Kanker Paru / Karsinoma Bronkogenik (Dampak sampingan asap rokok DNA mutasi karsinogenik)', 'Eksaserbasi Gagal Napas Asidosis']
    },
    anamnesis: ['Sesak napas progresif (makin berat seiring waktu)', 'Batuk kronis (produktif / tidak)', 'Produksi dahak (sputum) kronis', 'Riwayat pajanan faktor risiko: rokok (terutama), polusi udara, debu industri'],
    fisik: ['Bentuk dada "Barrel Chest" (diameter AP meningkat)', 'Pemeriksaan paru: hipersonor, suara napas melemah, wheezing ekspirasi', 'Penggunaan otot bantu napas', 'Bibir mengerucu saat buang napas (pursed-lip breathing)'],
    penunjang: ['Spirometri (Post-Bronkodilator FEV1/FVC < 0.70): Baku emas diagnosis', 'Rontgen Thorax: hiperinflasi paru, diafragma mendatar'],
    penunjangDetail: [
      { nama: 'Spirometri Uji Fungsi Paru (Post-Bronkodilator)', rasionalisasi: 'Golden Standar Mutlak. Pasien disuruh tiup kencang ke selang usai disedot Salbutamol. Bila ratio hisap tiup FEV1/FVC < 70% dan tak membaik normal, SAH disebut Paru Obstruktif ireversibel.' },
      { nama: 'Foto Rontgen Thorax PA', rasionalisasi: 'Dada depan membesar menonjol melengkung tong (Barrel chest), jantung ciut terjepit bandul menggantung (Tear drop heart), dan kubah otot diafragma sangat ceper mendatar gara-gara tertindih puluhan tahun oleh massa paru yang terperangkap angin terus menerus (Hiperinflasi Emfisema).' }
    ],
    diagnosis: ['PPOK Stabil atau PPOK Eksaserbasi Akut.'],
    diagnosisBanding: ['Asma Bronkial (Sama sama sesak bunyi Ngik wheezing, TAPI asma ada riwayat keturunan alergi sejak Anak Anak, dan fungsi spirometri bisa sembuh reversibel kembali memuaskan usai diuap)', 'Tuberkulosis / TB Paru Lanjut (Batuk menahun berkeringat demam sore dengan dahak gumpal berdarah tanpa radang hiperinflasi)', 'Gagal Jantung Kongestif CHF (Sesaknya dipicu bila direbahkan dimalam hari / Ortopnea, rontgen paru didominasi warna putih banjir air cairan cardiomegaly batas jantung besar)'],
    tatalaksana: [
      { name: 'Bronkodilator SABA/SAMA', dose: 'Salbutamol / Ipratropium prn', note: 'Untuk pelega gejala sesak' },
      { name: 'LAMA (Tioptropium)', dose: '18 mcg sekali sehari (inhalasi)', note: 'Lini utama pengontrol PPOK' },
      { name: 'Rehabilitasi Paru', dose: '-', note: 'Latihan pernapasan dan aktivitas fisik terukur' }
    ],
    tatalaksanaDetail: {
      nonFarmakologi: [
        'Penyuluhan Berhenti Merokok (Konseling)',
        'Vaksinasi Influenza dan Pneumokokus',
        'Rehabilitasi Paru (Latihan Pursed-lip breathing)',
        'Nutrisi TKTP mencegah cachexia'
      ],
      farmakologi: [
        {
          title: 'Terapi Pelega (Reliever) - Saat Sesak',
          items: [
            { name: 'Salbutamol (SABA)', dose: 'Inhaler / Nebulizer prn', note: 'Bekerja cepat melegakan napas' }
          ]
        },
        {
          title: 'Terapi Pengontrol (Maintenance)',
          items: [
            { name: 'Tiotropium (LAMA)', dose: '18 mcg Inhalasi (1x sehari)', note: 'Meningkatkan fungsi paru harian' }
          ]
        }
      ]
    },
    edukasi: ['BERHENTI MEROKOK adalah intervensi paling krusial', 'Gunakan masker bila terpapar polusi', 'Vaksinasi Influenza dan Pneumonokok (bila mampu)', 'Nutrisi yang baik (cegah wasting)'],
    rujukan: ['Diagnosis awal PPOK (konfirmasi spirometri)', 'Eksaserbasi berat / tidak respons terapi', 'Onset PPOK pada usia muda (<40 tahun)'],
    prognosis: { vitam: 'Dubia (progresif)', functionam: 'Dubia', sanationam: 'Irreversible but manageable' },
    alerts: [
      { type: 'danger', text: 'Eksaserbasi Akut Berat: sesak napas hebat saat istirahat, sianosis, kesadaran turun → Beri Oksigen (aliran rendah) & RUJUK!' }
    ]
  },
  {
    id: 'hemoroid',
    name: 'Hemoroid Interna',
    externalUrl: 'https://www.alomedika.com/penyakit/bedah-umum/hemoroid/penatalaksanaan',
    icpc: 'D95',
    icd: 'I84',
    level: '4A',
    cat: 'Bedah & Emergensi',
    icon: '🚽',
    iconBg: '#fff5f5',
    preview: 'Pelebaran vena pada pleksus hemoroidalis interna. Gejala utama: buang air besar berdarah merah segar (hematoskezia) yang tidak nyeri.',
    masalah: 'Hemoroid merupakan bantalan vaskular yang normal pada kanalis analis, namun menjadi patologis ketika membengkak, meradang, atau melorot (prolaps). Kondisi ini sangat mempengaruhi kualitas hidup namun seringkali dapat dikelola dengan modifikasi gaya hidup.',
    overview: {
      etiologi: 'Peningkatan tekanan intraabdominal yang kronis: Konstipasi (mengejan lama), kehamilan, obesitas, sering mengangkat beban berat, atau kebiasaan duduk terlalu lama di toilet.',
      epidemiologi: 'Menyerang sekitar 50% populasi di atas usia 50 tahun. Prevalensi meningkat pada masyarakat dengan pola makan rendah serat.',
      patofisiologi: 'Degenerasi jaringan ikat penyokong (Ligamentum Treitz) dan hipertrofi pleksus vaskular menyebabkan bantalan hemoroid meluncur ke bawah (prolaps). Mukosa yang menipis di atas pembuluh darah yang melebar mudah robek oleh gesekan feses yang keras.',
      komplikasi: ['Anemia Defisiensi Besi (akibat perdarahan kronis)', 'Hemoroid Inkarserata/Strangulata (terjepit)', 'Trombosis (nyeri hebat mendadak)', 'Infeksi/Sepsis (jarang)']
    },
    anamnesis: [
      'BAB berdarah merah segar (menetes atau menyemprot) di akhir defekasi',
      'Benjolan yang keluar dari anus (prolaps)',
      'Grade I: Berdarah tanpa benjolan',
      'Grade II: Benjolan keluar saat mengejan, masuk spontan',
      'Grade III: Benjolan harus didorong jari untuk masuk',
      'Grade IV: Benjolan menetap di luar (prolaps permanen)',
      'Rasa tidak nyaman, gatal (pruritus ani), atau rasa tidak puas setelah BAB'
    ],
    fisik: [
      'Inspeksi (Posisi miring/litotomi): Evaluasi adanya benjolan, kulit di sekitar anus, atau skin tag.',
      'Colok Dubur (DRE): Menilai tonus sfingter dan menyingkirkan massa tumor (Rectal Cancer). Hemoroid interna biasanya tidak teraba kecuali jika trombosis.',
      'Anoskopi (Gold Standard di FKTP): Visualisasi langsung pelebaran vena interna di atas garis dentata.'
    ],
    penunjang: [
      'Anoskopi / Proktoskopi',
      'Darah Lengkap (cek Kadar Hb bila perdarahan lama)',
      'Sigmoidoskopi / Kolonoskopi (Wajib bila usia >50 thn untuk skrining kanker colun)'
    ],
    penunjangDetail: [
      { nama: 'Anoskopi', rasionalisasi: 'Melihat langsung lokasi, ukuran, dan derajat (grade) hemoroid interna dan membedakannya dari hemoroid eksterna.' },
      { nama: 'Darah Lengkap', rasionalisasi: 'Mengevaluasi anemia mikrositik hipokrom akibat kehilangan darah kronis yang sering tidak disadari pasien.' }
    ],
    diagnosis: [
      'Hemoroid Interna Grade I - IV',
      'Hemoroid Eksterna'
    ],
    diagnosisBanding: ['Kanker Rektum (darah campur lendir, penurunan BB, perubahan pola BAB)', 'Fisura Ani (nyeri sangat hebat saat BAB)', 'Polip Rektum', 'Prolaps Rektum'],
    tatalaksana: [
      { name: 'Modifikasi Diet & Cairan', dose: 'Serat 25-30g/hari + Air >2L', note: 'Kunci utama pencegahan kekambuhan' },
      { name: 'Rendam Pantat (Sitz Bath)', dose: '10-15 menit (2-3x sehari)', note: 'Gunakan air hangat untuk relaksasi sfingter' },
      { name: 'Anti-hemoroid Suppositoria', dose: '1 supp q12-24h', note: 'Kombinasi anestetik dan anti-inflamasi lokal' }
    ],
    tatalaksanaDetail: {
      nonFarmakologi: [
        'Konsumsi makanan tinggi serat (sayur, buah, gandum) secara konsisten.',
        'Sitz Bath: Rendam area bokong dalam air hangat untuk mengurangi edema dan nyeri.',
        'Toilet Habits: Jangan menunda BAB dan jangan duduk di toilet terlalu lama (>5 menit).',
        'Hindari mengejan (straining) yang dipaksakan.'
      ],
      farmakologi: [
        {
          title: 'Terapi Topikal & Supositoria',
          items: [
            { name: 'Ultraproct-N / Faktu Supp', dose: 'Masukkan ke anus', note: 'Mengandung steroid/lidokain untuk fase akut' }
          ]
        },
        {
          title: 'Flebotonik',
          items: [
            { name: 'Diosmin / Hesperidin (Ardium/Micardium)', dose: '500-1000 mg/hari', note: 'Meningkatkan tonus vena' }
          ]
        },
        {
          title: 'Laksatif (Pelunak Feses)',
          items: [
            { name: 'Laktulosa Sirup', dose: '15-30 ml nocte', note: 'Hanya bila konstipasi berat' }
          ]
        }
      ]
    },
    edukasi: [
      'Hemoroid bisa dicegah dengan tidak membiarkan tinja menjadi keras',
      'Jangan duduk jongkok terlalu lama sambil bermain HP di toilet',
      'Segera ke dokter jika perdarahan menjadi sangat banyak atau benjolan tidak bisa masuk kembali',
      'Ingat: BAB berdarah pada orang tua harus selalu dicurigai kanker sampai terbukti bukan'
    ],
    rujukan: [
      'Hemoroid Grade III dan IV (perlu tindakan bedah/prosedur)',
      'Hemoroid tercekik (inkarserata) atau trombosis akut yang sangat nyeri',
      'Perdarahan masif yang menyebabkan anemia',
      'Curiga keganasan (Kanker Kolorektal)'
    ],
    prognosis: { vitam: 'Bonam', functionam: 'Bonam', sanationam: 'Bonam (bisa kambuh bila pola hidup salah)' },
    alerts: [
      { type: 'ok', text: 'Diet tinggi serat dan air putih adalah "obat" terpenting untuk penderita ambeien.' },
      { type: 'danger', text: 'Perdarahan anus disertai penurunan berat badan dan perubahan pola BAB adalah tanda bahaya KANKER. Rujuk segera!' }
    ]
  },
  {
    id: 'anc_normal',
    name: 'Kehamilan Normal (ANC)',
    icpc: 'W78',
    icd: 'Z34.9',
    level: '4A',
    cat: 'Obsgin',
    icon: '🤰',
    iconBg: '#fdf2f8',
    preview: 'Pelayanan antenatal minimal 6x selama kehamilan. Skrining risiko tinggi dan persiapan persalinan.',
    masalah: 'ANC terpadu bertujuan memantau pertumbuhan janin dan kesehatan ibu serta mencegah komplikasi.',
    anamnesis: ['HPHT (Hari Pertama Haid Terakhir) → Tentukan TP (Tafsiran Persalinan)', 'Gerakan janin (mulai terasa mgg 18-20)', 'Keluhan: mual muntah, lemas, nyeri pinggang', 'Skrining tanda bahaya di setiap kunjungan'],
    fisik: ['TD, BB, TB (LILA ≥23,5 cm)', 'TFU (Tinggi Fundus Uteri)', 'Leopold I-IV (mulai TM 2 akhir)', 'DJJ (Denyut Jantung Janin)'],
    penunjang: ['Tes kehamilan (HCG)', 'Hb baseline, Golongan darah', 'Skrining Tripel Eliminasi: HIV, Sifilis, HBsAg (Wajib!)', 'Urinalisis protein/reduksi'],
    diagnosis: ['Ibu hamil G...P...A... Usia kehamilan ... minggu.'],
    tatalaksana: [
      { name: 'Tablet Tambah Darah (TTD)', dose: 'Minimal 90 tablet selama hamil', note: 'Cegah anemia defisiensi besi' },
      { name: 'Asam Folat', dose: '400 mcg / hari', note: 'Cegah defek tabung saraf janin' },
      { name: 'Imunisasi Tetanus Tauroid (TT)', dose: 'Sesuai status imunisasi', note: 'Cegah tetanus neonatorum' }
    ],
    edukasi: ['Pola makan bergizi seimbang', 'Istirahat cukup', 'Persiapan persalinan (P4K): siapa penolong, di mana, transportasi, donor darah', 'Kenali tanda bahaya kehamilan'],
    rujukan: ['Ditemukan risiko tinggi (HT, DM, asma berat)', 'Tanda bahaya: perdarahan jalan lahir, pecah ketuban dini, kejang, janin tidak bergerak'],
    prognosis: { vitam: 'Bonam', functionam: 'Bonam', sanationam: 'Bonam' },
    alerts: [
      { type: 'ok', text: 'Lakukan K1-K6: minimal 2x di TM1 (1x dokter), 1x di TM2, 3x di TM3 (1x dokter).' }
    ]
  },
  {
    id: 'anemia_defisiensi_besi',
    name: 'Anemia Defisiensi Besi',
    externalUrl: 'https://www.alomedika.com/penyakit/hematologi/anemia-defisiensi-besi',
    icpc: 'B80',
    icd: 'D50',
    level: '4A',
    cat: 'Umum & Infeksi',
    icon: '🩸',
    iconBg: '#fff5f5',
    preview: 'Penurunan kadar hemoglobin akibat kekurangan cadangan zat besi. Gejala khas: lemas (5L), konjungtiva anemis, and lidah licin.',
    masalah: 'Anemia Defisiensi Besi (ADB) adalah jenis anemia yang paling umum dijumpai, terutama pada wanita usia subur, ibu hamil, dan anak-anak. Kondisi ini seringkali merupakan manifestasi dari masalah mendasari seperti malnutrisi, malabsorpsi, atau perdarahan kronis.',
    overview: {
      etiologi: 'Kehilangan darah kronis (menstruasi berlebih, cacingan, wasir), peningkatan kebutuhan (kehamilan, pertumbuhan), atau kurangnya asupan besi dalam diet.',
      epidemiologi: 'Menyerang lebih dari 2 miliar orang di seluruh dunia. Di Indonesia, prevalensi pada ibu hamil and balita masih cukup tinggi.',
      patofisiologi: 'Cadangan besi (ferritin) habis → Produksi hemoglobin terganggu → Sel darah merah yang dihasilkan berukuran kecil (mikrositik) dan pucat (hipokrom) → Transportasi oksigen ke jaringan menurun.',
      komplikasi: ['Gangguan perkembangan kognitif and motorik pada anak', 'Persalinan prematur and BBLR pada ibu hamil', 'Gagal jantung output tinggi (pada anemia berat)', 'Penurunan produktivitas kerja']
    },
    anamnesis: [
      'Lemas, letih, lesu, lunglai, lalai (5L)',
      'Cepat lelah saat beraktivitas ringan',
      'Pusing atau mata berkunang-kunang',
      'PICA: Keinginan makan benda aneh (es batu, tanah, kertas)',
      'Riwayat haid lama/banyak atau riwayat BAB berdarah',
      'Riwayat diet rendah protein hewani'
    ],
    fisik: [
      'Konjungtiva Anemis: Bagian dalam kelopak mata pucat',
      'Koilonya: Kuku tampak cekung seperti sendok (Spoon Nails)',
      'Atrofi Papil Lidah: Permukaan lidah nampak licin and kemerahan',
      'Stomatitis Angularis: Luka di sudut bibir',
      'Takikardia: Denyut jantung cepat sebagai kompensasi'
    ],
    penunjang: [
      'Darah Lengkap: Hb rendah, MCV < 80 fL, MCH < 27 pg',
      'Sediaan Apus Darah Tepi (SADT): Mikrositik Hipokromik',
      'Profil Besi: Ferritin Serum rendah (< 15-30 ng/mL), Serum Iron rendah'
    ],
    penunjangDetail: [
      { nama: 'Darah Lengkap & MCV/MCH', rasionalisasi: 'Langkah pertama konfirmasi anemia dan menentukan tipe morfologinya (misal: mikrositik) guna mengarahkan diagnosis ke defisiensi besi.' }
    ],
    diagnosis: [
      'Anemia Defisiensi Besi'
    ],
    diagnosisBanding: ['Talasemia (keturunan, pemeriksaan Hb Elektroforesis)', 'Anemia Penyakit Kronis', 'Anemia Sideroblastik'],
    tatalaksana: [
      { name: 'Sulfas Ferrosus', dose: '200 mg q8h', note: 'Setara 60 mg besi elemental. Minum saat perut kosong / bersama Vit C' },
      { name: 'Asam Askorbat (Vit C)', dose: '100 - 200 mg', note: 'Meningkatkan absorbsi zat besi' },
      { name: 'Obat Cacing (Albendazole)', dose: '400 mg (Dosis Tunggal)', note: 'Hanya jika dicurigai infeksi cacing tambang' }
    ],
    tatalaksanaDetail: {
      nonFarmakologi: [
        'Diet Kaya Besi: Tingkatkan konsumsi daging merah, hati, unggas, and ikan (sumber heme iron).',
        'Sumber Nabati: Konsumsi bayam, kacang-kacangan, and sereal (sumber non-heme iron).',
        'Hindari Penghambat: Jangan minum teh, kopi, atau susu dalam waktu 1-2 jam setelah minum obat besi.',
        'Sanitasi: Gunakan alas kaki untuk cegah infeksi cacing tambang.'
      ],
      farmakologi: [
        {
          title: 'Suplementasi Besi Oral',
          items: [
            { name: 'Sulfas Ferrosus', dose: '3 x 200 mg', note: 'Beri minimal 3-6 bulan untuk mengisi cadangan besi' },
            { name: 'Iron Polymaltose Complex (IPC)', dose: '100 mg/hari', note: 'Alternatif bila efek samping Sulfas Ferrosus berat (lebih nyaman di lambung)' }
          ]
        },
        {
          title: 'Adjuvan Penyerapan',
          items: [
            { name: 'Vitamin C', dose: '100 mg', note: 'Diminum bersamaan dengan tablet besi' }
          ]
        }
      ]
    },
    edukasi: [
      'Warna BAB akan berubah menjadi hitam setelah minum obat besi, ini normal dan bukan perdarahan',
      'Obat harus diminum selama berbulan-bulan meskipun Hb sudah normal untuk mengisi "gudang" (cadangan) besi',
      'Hati-hati mual - jika sangat mual, obat boleh dikonsumsi setelah makan minimal',
      'Pastikan anak-anak sekolah menggunakan alas kaki saat bermain di tanah'
    ],
    rujukan: [
      'Anemia berat (Hb < 7 g/dL) yang membutuhkan transfusi darah',
      'Anemia yang tidak merespons terapi besi oral setelah 4 minggu (Hb tidak naik ≥ 1 g/dL)',
      'Dicurigai adanya keganasan atau perdarahan tersembunyi yang membutuhkan endoskopi',
      'Anemia pada pria atau wanita menopause (potensi serius)'
    ],
    prognosis: { vitam: 'Bonam', functionam: 'Bonam', sanationam: 'Bonam (bila penyebab dasar teratasi)' },
    alerts: [
      { type: 'ok', text: 'Zat besi paling baik diserap dalam kondisi asam (perut kosong atau dengan Vitamin C).' },
      { type: 'warn', text: 'Teh dan Kopi mengandung tanin yang menghambat penyerapan zat besi hingga 50-70%.' }
    ]
  },
  {
    id: 'otitis_media_akut',
    name: 'Otitis Media Akut',
    externalUrl: 'https://www.alomedika.com/penyakit/telinga-hidung-tenggorokan/otitis-media-akut',
    icpc: 'H71',
    icd: 'H66.0',
    level: '4A',
    cat: 'THT',
    icon: '👂',
    iconBg: '#edf2f7',
    preview: 'Infeksi pada telinga tengah. Gejala: nyeri telinga hebat, demam, and telinga terasa penuh setelah batuk pilek.',
    masalah: 'Otitis Media Akut (OMA) adalah peradangan akut sebagian atau seluruh mukosa telinga tengah yang berlangsung kurang dari 3 minggu. Kondisi ini sangat sering terjadi pada bayi and anak-anak karena struktur tuba eustachius yang lebih pendek and horizontal.',
    overview: {
      etiologi: 'Infeksi Bakteri (S. pneumoniae, H. influenzae, M. catarrhalis) atau Virus. Seringkali didahului oleh ISPA.',
      epidemiologi: 'Sekitar 80% anak pernah mengalami setidaknya satu kali episode OMA sebelum usia sekolah. Puncak insidensi pada usia 6-24 bulan.',
      patofisiologi: 'Disfungsi Tuba Eustachius → Tekanan negatif di telinga tengah → Efusi cairan (media pertumbuhan kuman) → Infeksi and supurasi → Tekanan pada membrana timpani mengakibatkan nyeri hebat.',
      komplikasi: ['Perforasi Membrana Timpani', 'Mastoiditis Akut', 'Otitis Media Supuratif Kronik (OMSK)', 'Labirintitis', 'Meningitis / Abses Otak']
    },
    anamnesis: [
      'Nyeri telinga hebat (otalgia) — pada anak ditunjukkan dengan menarik telinga atau menangis rewel',
      'Demam (seringkali tinggi pada fase supurasi)',
      'Riwayat batuk pilek (ISPA) sebelumnya',
      'Pendengaran terasa berkurang atau telinga terasa penuh',
      'Otorhea: Keluar cairan/nanah (hanya bila gendang telinga sudah pecah/perforasi)'
    ],
    fisik: [
      'Pemeriksaan Otoskopi (Sesuai Stadium):',
      'Stadium Oklusi: Membran timpani retraksi (tertarik ke dalam)',
      'Stadium Presupurasi: Membran timpani hiperemis (merah) and edema',
      'Stadium Supurasi: Membran timpani bulging (menonjol) and berwarna kuning keruh',
      'Stadium Perforasi: Tampak lubang (perforasi) and adanya sekret/pus di MAE',
      'Stadium Resolusi: Membran timpani mengarah ke normal'
    ],
    penunjang: [
      'Diagnosis klinis murni',
      'Timpanometri (bila diperlukan untuk menilai efusi)'
    ],
    penunjangDetail: [
      { nama: 'Otoskop', rasionalisasi: 'Alat diagnostik utama untuk visualisasi membrana timpani guna menentukan stadium OMA and terapi yang sesuai.' }
    ],
    diagnosis: [
      'Otitis Media Akut (Stadium Oklusi/Supurasi/Perforasi)'
    ],
    diagnosisBanding: ['Otitis Eksterna (nyeri tarik aurikula +)', 'Otitis Media Efusi (tidak ada tanda radang akut/demam)', 'Miringitis Bulosa'],
    tatalaksana: [
      { name: 'Antibiotik (Amoxicillin)', dose: '40-50 mg/kgBB q12h', note: 'Pilihan utama selama 7-10 hari' },
      { name: 'Dekongestan Oral (Pseudoefedrin)', dose: 'Sesuai BB', note: 'Membantu memperbaiki fungsi tuba' },
      { name: 'Analgetik (Paracetamol)', dose: '10-15 mg/kgBB q6-8h', note: 'Wajib untuk atasi nyeri hebat' },
      { name: 'Tetes Telinga Ofloxacin', dose: '3 tetes q12h', note: 'HANYA jika sudah fase perforasi' }
    ],
    tatalaksanaDetail: {
      nonFarmakologi: [
        'Istirahat cukup dan hidrasi yang baik.',
        'Mandi dengan hati-hati: Jangan biarkan air masuk ke telinga jika sudah ada perforasi.',
        'Jangan berenang sampai membrana timpani menutup sempurna.',
        'Edukasi cara membuang ingus yang benar (jangan terlalu keras).'
      ],
      farmakologi: [
        {
          title: 'Terapi Antibiotik (Wajib)',
          items: [
            { name: 'Amoxicillin', dose: '80-90 mg/kgBB/hari (High dose) divided q12h', note: 'Dipertimbangkan pada daerah risiko resistensi' },
            { name: 'Amoxiclav', dose: 'Sesuai BB', note: 'Jika tidak responsif dengan amoxicillin biasa' }
          ]
        },
        {
          title: 'Manajemen Gejala',
          items: [
            { name: 'Paracetamol / Ibuprofen', dose: 'Per oral', note: 'Sesuai berat badan' }
          ]
        },
        {
          title: 'Terapi Topikal (Stadium Perforasi)',
          items: [
            { name: 'Tetes Telinga (H2O2 3%)', dose: 'Cuci telinga', note: 'Hanya jika sekret sangat kental' }
          ]
        }
      ]
    },
    edukasi: [
      'Penyakit ini sangat nyeri, anak akan rewel sampai gendang telinganya pecah atau diobati antibiotik',
      'Jangan mengorek telinga dengan cotton bud saat sakit',
      'Jika keluar cairan dari telinga, bersihkan dengan kain bersih tapi jangan menusuk ke dalam',
      'Vaksinasi PCV dan Influenza dapat menurunkan risiko kejadian OMA berulang'
    ],
    rujukan: [
      'Tanda-tanda komplikasi: Nyeri tekan mastoid (belakang telinga), daun telinga terdorong ke depan',
      'OMA rekuren (≥ 3 episode dalam 6 bulan)',
      'Perforasi membrana timpani yang tidak menutup setelah 6 minggu',
      'Penurunan pendengaran yang menetap'
    ],
    prognosis: { vitam: 'Bonam', functionam: 'Bonam', sanationam: 'Bonam' },
    alerts: [
      { type: 'ok', text: 'Pada stadium supurasi (MT Bulging), nyeri sangat hebat dan akan menghilang seketika saat gendang telinga pecah.' },
      { type: 'danger', text: 'Waspadai BENJOLAN MERAH di belakang telinga (Mastoiditis). Harus segera RUJUK!' }
    ]
  },
  {
    id: 'insomnia',
    name: 'Insomnia',
    icpc: 'P06',
    icd: 'F51.0',
    level: '4A',
    cat: 'Psikiatri',
    icon: '🌙',
    iconBg: '#e9d8fd',
    preview: 'Kesulitan memulai atau mempertahankan tidur. Gangguan fungsi di siang hari (lelah, sulit konsentrasi).',
    masalah: 'Insomnia adalah ketidakpuasan terhadap kuantitas atau kualitas tidur yang disertai dengan satu atau lebih keluhan di siang hari.',
    anamnesis: ['Sulit mulai tidur (initial insomnia)', 'Sering terbangun malam hari (middle insomnia)', 'Bangun terlalu dini dan sulit tidur kembali (late insomnia)', 'Tidur tidak menyegarkan (non-restorative sleep)', 'Keluhan siang hari: lelah, mengantuk, konsentrasi buruk, iritabilitas'],
    fisik: ['Mencari tanda penyakit medis yang mendasari (sesak, nyeri, gatal)', 'Tanda-tanda ansietas atau depresi'],
    penunjang: ['Sleep Diary (Catatan Tidur) selama 1-2 minggu'],
    diagnosis: ['Insomnia Non-Organik.'],
    tatalaksana: [
      { name: 'Sleep Hygiene', dose: '-', note: 'Terapi non-farmakologi utama' },
      { name: 'Stimulus Control Therapy', dose: '-', note: 'Hanya ke tempat tidur bila benar-benar mengantuk' },
      { name: 'Diazepam', dose: '2-5 mg (sebelum tidur)', note: 'Jangka pendek (max 2-4 minggu) bila gejala berat' },
      { name: 'Zolpidem', dose: '5-10 mg', note: 'Non-benzodiazepine hypnotics' }
    ],
    edukasi: ['Jadwal tidur-bangun yang konsisten', 'Hindari kafein, alkohol, dan rokok dekat waktu tidur', 'Batasi penggunaan gadget sebelum tidur', 'Jangan tidur siang lebih dari 30 menit'],
    rujukan: ['Insomnia kronik yang tidak responsif terapi di FKTP', 'Dicurigai ada kelainan tidur lain (Sleep Apnea, Narcolepsy)', 'Gangguan psikiatri berat yang mendasari'],
    prognosis: { vitam: 'Bonam', functionam: 'Bonam', sanationam: 'Bonam' }
  },
  {
    id: 'otitis_eksterna',
    name: 'Otitis Eksterna',
    externalUrl: 'https://www.alomedika.com/penyakit/telinga-hidung-tenggorokan/otitis-eksterna',
    icpc: 'H70',
    icd: 'H60',
    level: '4A',
    cat: 'THT',
    icon: '👂',
    iconBg: '#ebf8ff',
    preview: 'Inflamasi pada liang telinga luar. Gejala khas: nyeri telinga (otalgia) yang hebat saat daun telinga ditarik atau tragus ditekan.',
    masalah: 'Infeksi atau peradangan pada Meatus Akustikus Eksternus (MAE). Sering disebut "Swimmer\'s Ear" karena kelembapan berlebih merupakan faktor risiko utama yang mengubah pH liang telinga sehingga kuman mudah berkembang biak.',
    overview: {
      etiologi: 'Bakteri (paling sering Pseudomonas aeruginosa and Staphylococcus aureus) atau Jamur (Otomikosis). Faktor pemicu: berenang, mengorek telinga dengan cotton bud, alat bantu dengar, atau trauma lokal.',
      epidemiologi: 'Sangat sering dijumpai pada anak dan dewasa, terutama di daerah dengan kelembapan tinggi.',
      patofisiologi: 'Mekanisme proteksi serumen terganggu → kulit liang telinga maserasi → kuman masuk ke dermis/subkutis → inflamasi masif pada saluran sempit MAE mengakibatkan nyeri hebat karena kulit melekat erat pada tulang rawan.',
      komplikasi: ['Selulitis periaurikular', 'Otitis Eksterna Maligna (osteomielitis basis kranii)', 'Stenosis (penyempitan) liang telinga']
    },
    anamnesis: [
      'Nyeri telinga hebat (otalgia) — seringkali tidak sebanding dengan temuan klinis',
      'Nyeri bertambah saat mengunyah atau berbicara',
      'Telinga terasa penuh (fullness) atau tersumbat',
      'Gatal (sering pada otitis eksterna sirkumskripta/jamur)',
      'Mungkin disertai cairan telinga encer atau kental berbau'
    ],
    fisik: [
      'Nyeri Tarik Aurikula (+) dan Nyeri Tekan Tragus (+) — Tanda Kardinal',
      'Liang Telinga (MAE) edema (bengkak) dan hiperemis (merah)',
      'Sekret di liang telinga (serous atau purulen)',
      'Otitis Eksterna Sirkumskripta: Tampak bisul (furunkel) pada 1/3 luar MAE',
      'Otitis Eksterna Difus: Seluruh liang telinga bengkak dan menyempit',
      'Membran timpani biasanya intake (normal), namun sering sulit divisualisasi'
    ],
    penunjang: [
      'Diagnosis klinis murni',
      'Kultur sekret (hanya pada kasus rekuren atau curiga maligna)'
    ],
    penunjangDetail: [
      { nama: 'Pemeriksaan Otoskop', rasionalisasi: 'Menilai derajat edema liang telinga dan memastikan membran timpani dalam kondisi baik (menyingkirkan Otitis Media).' }
    ],
    diagnosis: [
      'Otitis Eksterna Akut Difus',
      'Otitis Eksterna Sirkumskripta (Furunkel)'
    ],
    diagnosisBanding: ['Otitis Media Akut (nyeri didahului batuk pilek, tidak ada nyeri tarik daun telinga)', 'Perikondritis (infeksi tulang rawan daun telinga)', 'Otomikosis (infeksi jamur, ada bintik hitam/putih seperti kapas)'],
    tatalaksana: [
      { name: 'Toilet Telinga (Ear Toilet)', dose: '-', note: 'Bersihkan sekret/debris di liang telinga agar obat topikal masuk' },
      { name: 'Tetes Telinga Ofloxacin', dose: '3-4 tetes q12h', note: 'Antibiotik topikal pilihan' },
      { name: 'Analgesik (Asam Mefenamat)', dose: '500 mg q8h', note: 'Wajib karena nyeri otitis eksterna sangat hebat' }
    ],
    tatalaksanaDetail: {
      nonFarmakologi: [
        'Ear Toilet: Pembersihan liang telinga oleh petugas medis menggunakan lidi kapas atau irigasi (hati-hati bila ada perforasi MT).',
        'Imobilisasi: Hindari mengorek telinga selama masa penyembuhan.',
        'Water Precaution: Jangan biarkan air masuk ke telinga saat mandi (gunakan earplug atau kapas berlembab vaseline).',
        'Jangan berenang selama 7-10 hari.'
      ],
      farmakologi: [
        {
          title: 'Tetes Telinga Topikal',
          items: [
            { name: 'Ofloxacin Ear Drops', dose: '3 tetes (2x sehari)', note: 'Minimal selama 7 hari' },
            { name: 'Polimiksin B + Neomisin + Hidrokortison', dose: 'Tetes telinga kombinasi', note: 'Efektif untuk kurangi bengkak masif' }
          ]
        },
        {
          title: 'Kontrol Nyeri',
          items: [
            { name: 'Ibuprofen / Asam Mefenamat', dose: 'Sesuai BB', note: 'Diberikan secara teratur di 3 hari pertama' }
          ]
        },
        {
          title: 'Antibiotik Oral (Bila Perlu)',
          items: [
            { name: 'Amoxiclav / Ciprofloxacin', dose: 'Hanya jika ada selulitis atau pada pasien DM', note: 'Bukan pilihan utama kasus ringan' }
          ]
        }
      ]
    },
    edukasi: [
      'Jangan mengorek telinga dengan cotton bud, jari, atau benda logam (kunci/peniti)',
      'Telinga memiliki mekanisme pembersihan mandiri, tidak perlu dibersihkan setiap hari',
      'Pastikan telinga kering setelah mandi atau berenang menggunakan pengering rambut (jar Jauh) atau handuk lembut',
      'Obat tetes harus diteteskan dengan posisi kepala miring dan didiamkan selama 5 menit'
    ],
    rujukan: [
      'Otitis Eksterna Maligna: Nyeri sangat hebat, ada jaringan nekrotik/granulasi, pasien Lansia dengan DM',
      'Peradangan menyebar ke daun telinga (Selulitis Aurikula)',
      'Obstruksi liang telinga total sehingga obat tetes tidak dapat masuk',
      'Tidak ada perbaikan klinis setelah 48-72 jam pengobatan adekuat'
    ],
    prognosis: { vitam: 'Bonam', functionam: 'Bonam', sanationam: 'Bonam' },
    alerts: [
      { type: 'danger', text: 'CURIGA MALIGNA pada lansia dengan Diabetes Melitus yang mengeluh nyeri telinga hebat berlebihan. Segera RUJUK!' },
      { type: 'ok', text: 'Tetes telinga lebih efektif daripada antibiotik minum karena bekerja langsung pada sumber infeksi.' }
    ]
  },
  {
    id: 'parotitis',
    name: 'Parotitis Epidemika (Mumps/Gondongan)',
    icpc: 'D71',
    icd: 'B26',
    level: '4A',
    cat: 'Umum & Infeksi',
    icon: '🐹',
    iconBg: '#fff3cd',
    preview: 'Pembengkakan kelenjar air liur (parotis). Nyeri saat mengunyah dan menelan. Sangat menular.',
    masalah: 'Gondongan adalah infeksi virus sistemik yang ditandai dengan pembengkakan satu atau kedua kelenjar parotis.',
    anamnesis: ['Demam', 'Nyeri saat mengunyah atau menelan', 'Pembengkakan di area sudut rahang (depan bawah telinga)', 'Suara serak', 'Malaise'],
    fisik: ['Pembengkakan kelenjar parotis (unilateral atau bilateral)', 'Sudut mandibula tidak terlihat jelas (terhapus pembengkakan)', 'Hiperemis pada muara duktus Stensen'],
    penunjang: ['Amilase serum (meningkat)', 'Serologi mumps (bila diperlukan)'],
    diagnosis: ['Parotitis Epidemika.'],
    tatalaksana: [
      { name: 'Paracetamol', dose: '10-15 mg/kgBB q6-8h', note: 'Penurun panas dan anti nyeri' },
      { name: 'Imunomodulator', dose: 'Sesuai indikasi', note: 'Mendukung sistem imun' },
      { name: 'Kompres hangat/dingin', dose: 'prn', note: 'Mengurangi ketidaknyamanan' }
    ],
    edukasi: ['Istirahat cukup sampai bengkak hilang (isolasi 9 hari sejak bengkak)', 'Makan makanan lunak', 'Banyak minum air putih', 'Vaksinasi MMR untuk anggota keluarga lain (prevensi)'],
    rujukan: ['Komplikasi: Orkitis (bengkak testis), Ooforitis (nyeri perut), Meningitis, Pankreatitis'],
    prognosis: { vitam: 'Bonam', functionam: 'Bonam', sanationam: 'Bonam' },
    alerts: [
      { type: 'warn', text: 'Waspadai keluhan nyeri testis setelah gondongan — tanda Orkitis yang dapat menyebabkan infertilitas.' }
    ]
  },
  {
    id: 'pulpitis',
    name: 'Pulpitis',
    icpc: 'D82',
    icd: 'K04.0',
    level: '4A',
    cat: 'Gigi & Mulut',
    icon: '🦷',
    iconBg: '#e1f5fe',
    preview: 'Nyeri gigi berdenyut yang hebat. Dipicu oleh makanan panas, dingin, atau manis.',
    masalah: 'Pulpitis adalah peradangan pulpa gigi akibat karies yang tidak tertangani.',
    anamnesis: ['Nyeri gigi berdenyut mendadak', 'Nyeri menjalar ke daerah rahang/telinga', 'Dipicu makanan/minuman dingin, panas, asam, atau manis', 'Nyeri memburuk saat malam hari'],
    fisik: ['Karies profunda (lubang gigi dalam) mencapai pulpa', 'Gigi berlubang', 'Sakit saat perkusi (ketok gigi) atau palpasi'],
    penunjang: ['Foto Rontgen Periapikal (bila tersedia)'],
    diagnosis: ['Pulpitis Reversibel atau Ireversibel.'],
    tatalaksana: [
      { name: 'Analgesik (Asam Mefenamat)', dose: '500 mg q8h', note: 'Meredakan nyeri' },
      { name: 'Eugenol (Topikal)', dose: 'Teteskan pada kapas, masukkan ke lubang', note: 'Pereda nyeri lokal sementara' },
      { name: 'Antibiotik (Amoxicillin)', dose: '500 mg q8h', note: 'Hanya jika ada tanda infeksi sistemik/abses' }
    ],
    edukasi: ['Segera ke Dokter Gigi untuk perawatan saluran akar (root canal)', 'Jaga kebersihan gigi: sikat gigi 2x sehari', 'Kurangi asupan gula'],
    rujukan: ['Memerlukan spesialis kedokteran gigi (Endodontis)', 'Terdapat abses luas atau selulitis'],
    prognosis: { vitam: 'Bonam', functionam: 'Bonam dengan perawatan gigi', sanationam: 'Bonam' },
    alerts: [
      { type: 'warn', text: 'Obat minum hanya menghilangkan gejala sementara. Masalah utama (lubang gigi) harus ditangani oleh Dokter Gigi.' }
    ]
  },
  {
    id: 'leptospirosis',
    name: 'Leptospirosis',
    icpc: 'A78',
    icd: 'A27.9',
    level: '4A',
    cat: 'Umum & Infeksi',
    icon: '🐁',
    iconBg: '#ffecb3',
    preview: 'Infeksi bakteri dari kencing tikus. Nyeri betis hebat, mata kuning, dan riwayat terpapar banjir atau selokan.',
    masalah: 'Leptospirosis adalah penyakit zoonosis yang disebabkan oleh bakteri Leptospira sp. Penularan melalui kontak kulit dengan air/tanah yang tercemar kencing hewan penderita (tikus).',
    anamnesis: ['Demam mendadak tinggi, menggigil', 'Nyeri kepala hebat, mual, muntah', 'Nyeri otot yang sangat hebat, khas pada otot betis (gastrocnemius)', 'Mata merah (conjunctival suffusion) tanpa sekret', 'Riwayat kontak dengan banjir, selokan, atau tikus dalam 2 minggu'],
    fisik: ['Sklera ikterik (kuning)', 'Conjunctival suffusion (mata merah tanpa kotoran)', 'Nyeri tekan pada otot betis', 'Hepatomegali / Splenomegali', 'Bradikardia relatif'],
    penunjang: ['Darah Lengkap: leukositosis, trombositopenia', 'Urinalisis: proteinuria, hematuria', 'RDT Leptospira (IgM)', 'Bilirubin meningkat (pada kasus berat/Weil Disease)'],
    diagnosis: ['Leptospirosis (Ringan atau Berat).'],
    tatalaksana: [
      { name: 'Doxycycline', dose: '100 mg q12h selama 7 hari', note: 'Pilihan utama pada dewasa non-hamil' },
      { name: 'Amoxicillin', dose: '500 mg q8h', note: 'Pilihan pada anak atau ibu hamil' },
      { name: 'Doxycycline Profilaksis', dose: '200 mg sekali seminggu', note: 'Hanya jika terpapar risiko tinggi (banjir/selokan)' }
    ],
    edukasi: ['Hindari kontak dengan air banjir atau selokan', 'Gunakan sepatu boot dan sarung tangan bila bekerja di area berisiko', 'Jaga kebersihan lingkungan rumah dari tikus', 'Segera ke RS bila kencing berkurang atau kuning hebat'],
    rujukan: ['Leptospirosis berat (Weil Disease): kuning hebat, gagal ginjal (oliguria), perdarahan, sesak napas'],
    prognosis: { vitam: 'Bonam bila ringan, Menurun pada berat', functionam: 'Bonam', sanationam: 'Bonam' },
    alerts: [
      { type: 'danger', text: 'Waspadai sindrom Weil (Trias: Ikterus, Gagal Ginjal, Perdarahan) — angka kematian tinggi, harus segera dirujuk!' }
    ]
  },
  {
    id: 'filariasis',
    name: 'Filariasis (Kaki Gajah)',
    icpc: 'B71',
    icd: 'B74',
    level: '4A',
    cat: 'Umum & Infeksi',
    icon: '🐘',
    iconBg: '#e2e8f0',
    preview: 'Pembengkakan tungkai atau skrotum akibat cacing filaria. Gejala awal berupa demam berulang dan radang kelenjar getah bening.',
    masalah: 'Penyakit menular kronik yang disebabkan infeksi cacing filaria dan ditularkan oleh berbagai jenis nyamuk.',
    anamnesis: ['Demam berulang (1-2 hari) yang timbul setelah bekerja berat', 'Pembengkakan lipat paha atau ketiak tanpa luka (limfadenitis)', 'Timbul jalur merah yang nyeri di kulit (limfangitis retrograd)', 'Pembengkakan tungkai, lengan, payudara, atau skrotum yang menetap'],
    fisik: ['Limfadenitis (pembengkakan KGB)', 'Limfangitis (garis merah meradang)', 'Edema (bengkak) tungkai: awalnya pitting, lama kelamaan non-pitting dengan kulit menebal (elephantiasis)', 'Hidrokel (cairan di skrotum)'],
    penunjang: ['Pemeriksaan Mikroskopis (Darah Jari): ditemukan Mikrofilaria', 'Pengambilan darah harus dilakukan MALAM HARI (pukul 22.00 - 02.00) dikarenakan periodisitas cacing.'],
    diagnosis: ['Filariasis Limfatik.'],
    tatalaksana: [
      { name: 'DEC (Diethylcarbamazine)', dose: '6 mg/kgBB selama 12 hari', note: 'Dosis tunggal pada program massal (POPM)' },
      { name: 'Albendazole', dose: '400 mg (dosis tunggal)', note: 'Dikombinasikan dengan DEC' },
      { name: 'Paracetamol', dose: '500 mg prn', note: 'Bila ada reaksi demam pasca obat' }
    ],
    edukasi: ['Minum obat pencegahan masal (POPM) setahun sekali', 'Gunakan kelambu dan repelen nyamuk', 'Jaga kebersihan area yang bengkak agar tidak infeksi sekunder', 'Lakukan perawatan mandiri (kebersihan, elevasi anggota gerak)'],
    rujukan: ['Kasus filariasis dengan komplikasi berat atau kronis yang butuh tindakan bedah (misal: hidrokel besar)'],
    prognosis: { vitam: 'Bonam', functionam: 'Dubia (jika sudah stadium lanjut)', sanationam: 'Bonam bila diobati dini' },
    alerts: [
      { type: 'warn', text: 'Reaksi Mazzotti (pusing, mual, demam pasca minum DEC) adalah tanda cacing mati — tidak perlu panik, beri antipiretik.' }
    ]
  },
  {
    id: 'demam_dengue',
    name: 'Demam Dengue / DBD',
    icpc: 'A77',
    icd: 'A90 / A91',
    level: '4A',
    cat: 'Umum & Infeksi',
    icon: '🦟',
    iconBg: '#ff8a80',
    preview: 'Demam tinggi mendadak dengan nyeri sendi (break-bone fever). Waspadai fase kritis pada hari ke-3 s/d ke-5.',
    masalah: 'Penyakit virus yang ditularkan nyamuk Aedes aegypti. Dapat bermanifestasi dari demam ringan (DD) hingga syok berat (DSS).',
    anamnesis: ['Demam tinggi mendadak (kontinu) 2-7 hari', 'Nyeri kepala, nyeri belakang mata (retro-orbital)', 'Nyeri otot dan sendi hebat', 'Mual, muntah, nafsu makan turun', 'Manifestasi perdarahan: mimisan, gusi berdarah, bintik merah (petekie)'],
    fisik: ['Wajah kemerahan (flushing)', 'Uji Rumple Leede positif (≥10 petekie di area 1 inch persegi)', 'Petekie, purpura, atau ekimosis', 'Hepatomegali (nyeri tekan perut kanan atas)'],
    penunjang: ['Darah Lengkap: Leukopenia (awal), Trombositopenia (<100.000), Hemokonsentrasi (Ht naik ≥20%)', 'Serologi: NS1 (hari 1-3), IgM/IgG Dengue (setelah hari ke-5)'],
    diagnosis: ['Demam Dengue (DD) atau Demam Berdarah Dengue (DBD) Grade I-IV.'],
    tatalaksana: [
      { name: 'Cairan Oral', dose: 'Minum sebanyak mungkin (air, oralit, jus)', note: 'Paling penting untuk cegah dehidrasi' },
      { name: 'Paracetamol', dose: '10-15 mg/kgBB q6h', note: 'HANYA gunakan paracetamol. Jangan Aspirin/Ibuprofen!' },
      { name: 'Monitoring Harian', dose: '-', note: 'Pantau Hb, Ht, Trombosit setiap 24 jam' }
    ],
    edukasi: ['Fase kritis adalah saat demam turun (H3-5) — waspadai tanda syok', 'Lakukan 3M Plus (Menguras, Menutup, Mengubur)', 'Gunakan kelambu dan repelen nyamuk'],
    rujukan: ['Warning Signs: Nyeri perut hebat, muntah persisten, akumulasi cairan, perdarahan mukosa, letargi, hematokrit naik drastis dengan trombosit turun cepat', 'Tanda Syok (DSS): Nadi cepat lemah, akral dingin, kencing berkurang'],
    prognosis: { vitam: 'Bonam bila tertangani, Buruk pada DSS', functionam: 'Bonam', sanationam: 'Bonam' },
    alerts: [
      { type: 'danger', text: 'Waspadai FASE KRITIS (saat demam turun). Jika pasien justru tampak lemas/dingin saat demam mereda, itu tanda SYOK!' }
    ]
  },
  {
    id: 'varicella',
    name: 'Varisela (Cacar Air)',
    externalUrl: 'https://www.alomedika.com/penyakit/dermatovenerologi/varisela',
    icpc: 'S70',
    icd: 'B01.9',
    level: '4A',
    cat: 'Dermatologi',
    icon: '🧴',
    iconBg: '#fff9c4',
    preview: 'Infeksi virus sistemik yang ditandai dengan vesikel (bintil air) "tear drops" yang sangat gatal dan menyebar dari badan ke wajah.',
    masalah: 'Varisela adalah infeksi primer dari virus Varicella Zoster (VZV). Kondisi ini sangat menular melalui droplet udara atau kontak langsung dengan cairan vesikel.',
    overview: {
      etiologi: 'Virus Varicella Zoster (VZV). Setelah infeksi primer sembuh, virus akan menetap secara laten di ganglion saraf sensoris.',
      epidemiologi: 'Terutama menyerang anak-anak, namun gejala pada dewasa biasanya lebih berat. Insidensi meningkat pada musim hujan atau pergantian musim.',
      patofisiologi: 'Inhalasi droplet → Replikasi di saluran napas → Viremia primer → Replikasi di organ (hati/limpa) → Viremia sekunder → Erupsi kulit berupa vesikel jernih di atas dasar eritema.',
      komplikasi: ['Infeksi Bakteri Sekunder (paling sering Staph/Strep)', 'Pneumonia Varisela (terutama pada dewasa/perokok)', 'Ensefalitis (peradangan otak)', 'Varisela Kongenital (bila terinfeksi saat hamil)']
    },
    anamnesis: [
      'Demam ringan, lemas (malaise), dan nyeri sendi sebelum muncul ruam (prodromal)',
      'Ruam dimulai di badan, lalu menyebar ke wajah dan anggota gerak (Sentrifugal)',
      'Gatal hebat (pruritus)',
      'Vesikel terasa panas atau nyeri jika pecah/terinfeksi'
    ],
    fisik: [
      'Pleomorfisme: Ditemukan berbagai stadium lesi (papul, vesikel jernih, dan krusta) secara bersamaan di satu area tubuh',
      'Vesikel "Tear Drops": Lenting jernih di atas dasar kemerahan (Dew drop on a rose petal)',
      'Penyebaran sentrifugal: Padat di badan, lebih sedikit di tangan dan kaki'
    ],
    penunjang: [
      'Pemeriksaan klinis murni',
      'Tzanck Test: Mencari sel datia berinti banyak'
    ],
    penunjangDetail: [
      { nama: 'Tzanck Smear', rasionalisasi: 'Mencari sel datia berinti banyak (multinucleated giant cells) untuk membuktikan etiologi virus herpes (Varicella/Herpes Simplex).' }
    ],
    diagnosis: [
      'Varisela'
    ],
    diagnosisBanding: ['Variola (Smallpox - sudah punah)', 'Herpes Simpleks Desiminata', 'Hand Foot Mouth Disease (HFMD)', 'Dermatitis Kontak'],
    tatalaksana: [
      { name: 'Asiklovir (Antivirus)', dose: '800 mg 5x sehari (7 hari)', note: 'Efektif bila dimulai < 24 jam sejak ruam' },
      { name: 'Paracetamol', dose: '500 mg q6-8h', note: 'Analgetik dan antipiretik' },
      { name: 'Bedak Salisil / Losion Kalamin', dose: 'Taburkan pada lesi', note: 'Meredakan gatal dan cegah vesikel pecah' }
    ],
    tatalaksanaDetail: {
      nonFarmakologi: [
        'Istirahat Cukup: Membantu meningkatkan sistem imun.',
        'Mandi Teratur: Tetap mandi untuk cegah infeksi bakteri, namun gunakan sabun bayi dan keringkan dengan ditepuk (jangan digosok).',
        'Cegah Garukan: Potong kuku untuk cegah bekas luka permanen (bopeng) atau infeksi sekunder.',
        'Isolasi: Tetap di rumah sampai seluruh vesikel mengering menjadi krusta (biasanya 7 hari).'
      ],
      farmakologi: [
        {
          title: 'Terapi Antivirus',
          items: [
            { name: 'Asiklovir (Anak)', dose: '20 mg/kgBB (max 800mg) 4x sehari', note: 'Beri selama 5 hari' },
            { name: 'Asiklovir (Dewasa)', dose: '800 mg 5x sehari', note: 'Beri selama 7 hari' }
          ]
        },
        {
          title: 'Terapi Suportif',
          items: [
            { name: 'Cetirizine / Loratadine', dose: '10 mg', note: 'Mengurangi gatal agar pasien tidak menggaruk' },
            { name: 'Salep Mupirosin', dose: 'Oleskan 2x sehari', note: 'Hanya jika vesikel pecah dan terinfeksi bakteri' }
          ]
        }
      ]
    },
    edukasi: [
      'Jangan memecahkan bintil air karena akan meninggalkan bekas luka permanen',
      'Penyakit ini sangat menular melalui udara, hindari kontak dengan orang hamil atau orang dengan imun lemah',
      'Minum banyak air untuk cegah dehidrasi saat demam',
      'Vaksinasi varisela direkomendasikan setelah sembuh untuk penguatan imun jangka panjang'
    ],
    rujukan: [
      'Varisela pada neonatus atau ibu hamil TM1 (risiko cacat janin)',
      'Tanda komplikasi: Sesak napas, kesadaran menurun, atau kejang',
      'Infeksi bakteri sekunder yang meluas (selulitis)'
    ],
    prognosis: { vitam: 'Bonam', functionam: 'Bonam', sanationam: 'Bonam' },
    alerts: [
      { type: 'ok', text: 'Mandi TIDAK dilarang pada penderita cacar air, justru penting untuk menjaga kebersihan kulit.' },
      { type: 'danger', text: 'JANGAN berikan Aspirin pada anak dengan Varisela karena risiko Sindrom Reye (gagal hati akut) yang fatal.' }
    ]
  },
  {
    id: 'herpes_zoster',
    name: 'Herpes Zoster (Shingles)',
    externalUrl: 'https://www.alomedika.com/penyakit/dermatovenereologi/herpes-zoster',
    icpc: 'S70',
    icd: 'B02',
    level: '4A',
    cat: 'Dermatologi',
    icon: '🩹',
    iconBg: '#ffcdd2',
    preview: 'Nyeri saraf hebat (pedih/panas) diikuti munculnya vesikel berkelompok dengan dasar eritema sesuai dermatom.',
    masalah: 'Reaktivasi virus Varicella Zoster yang menetap di ganglion saraf sensoris pasca infeksi cacar air.',
    overview: {
      etiologi: 'Virus Varicella Zoster (VZV). Virus ini bersifat laten di ganglion radiks dorsalis setelah seseorang sembuh dari cacar air.',
      epidemiologi: 'Terutama menyerang lansia >50 tahun atau kondisi imunokompromis. Penularan terjadi melalui kontak langsung dengan cairan vesikel.',
      patofisiologi: 'Saat imunitas seluler menurun, virus yang dorman akan aktif kembali. Virus berjalan menuruni serabut saraf sensorik menuju kulit, menyebabkan peradangan saraf (Neuritis) yang sangat nyeri, diikuti munculnya vesikel di area kulit yang dipersarafi (Dermatom).',
      komplikasi: ['Post Herpetic Neuralgia (PHN) - Nyeri kronis pasca lesi sembuh', 'Herpes Zoster Ophtalmicus (Risiko kebutaan)', 'Ramsay Hunt Syndrome (Lumpuh wajah & gangguan pendengaran)']
    },
    anamnesis: ['Nyeri radikular (seperti terbakar, disayat, atau tertusuk) sesuai dermatom', 'Muncul gelembung air (vesikel) setelah 1-3 hari nyeri', 'Biasanya hanya sesisi tubuh (Unilateral)', 'Demam ringan, lemas (Malaise)'],
    fisik: ['Vesikel berkelompok di atas dasar eritematosa', 'Distribusi sesuai dermatom saraf (unilateral)', 'Tanda Hutchinson (vesikel di ujung hidung) - Waspada keterlibatan mata!'],
    penunjang: ['Tzanck Test (positif sel datia)'],
    penunjangDetail: [
      { nama: 'Tes Tzanck Smear', rasionalisasi: 'Melihat sel datia berinti banyak (Multinucleated Giant Cells). Membedakan infeksi virus herpes vs penyakit kulit lepuh lainnya.' }
    ],
    diagnosis: ['Herpes Zoster.'],
    tatalaksana: [
      { name: 'Acyclovir', dose: '800 mg 5x sehari selama 7-10 hari', note: 'Lini utama pengobatan' },
      { name: 'Valacyclovir (Alternatif)', dose: '1000 mg 3x sehari', note: 'Dosis lebih praktis' },
      { name: 'Gabapentin / Amitriptyline', dose: 'q24h nocte', note: 'Meredakan nyeri saraf (neuralgia)' }
    ],
    tatalaksanaDetail: {
      nonFarmakologi: [
        'Jangan memecahkan vesikel (cegah bekas luka dan infeksi sekunder)',
        'Gunakan pakaian longgar dan lembut untuk meminimalkan gesekan pada lesi',
        'Kompres terbuka dengan NaCl 0.9% jika lesi basah/pecah'
      ],
      farmakologi: [
        {
          title: 'Terapi Antivirus (Wajib < 72 jam)',
          items: [
            { name: 'Acyclovir', dose: '800 mg (5x sehari selama 7 hari)', note: 'Efikasi terbaik jika dimulai sesegera mungkin' },
            { name: 'Valacyclovir', dose: '1000 mg (3x sehari)', note: 'Dosis praktis dengan absorpsi stabil' }
          ]
        },
        {
          title: 'Managemen Nyeri',
          items: [
            { name: 'Paracetamol', dose: '500 mg (q8h)', note: 'Analgetik standar' },
            { name: 'Gabapentin', dose: '300 mg (1x malam)', note: 'Untuk nyeri neuropatik (neuralgia)' }
          ]
        }
      ]
    },
    edukasi: ['Jangan pecahkan vesikel', 'Jaga area lesi tetap bersih dan kering', 'Segera berobat bila muncul di area mata', 'Neuralgia pasca herpes (nyeri setelah luka sembuh) bisa menetap lama'],
    rujukan: ['Herpes Zoster Oftalmikus (mengenai area mata): Risiko Kebutaan!', 'Mengenai telinga dengan gangguan pendengaran/keseimbangan', 'Lesi tersebar luas (diseminata) pada orang dengan daya tahan tubuh lemah'],
    prognosis: { vitam: 'Bonam', functionam: 'Bonam', sanationam: 'Dubia (nyeri bisa menetap)' },
    alerts: [
      { type: 'danger', text: 'HERPES ZOSTER DI AREA MATA (Oftalmikus) adalah kondisi darurat mata — harus segera dirujuk ke Spesialis Mata!' }
    ]
  },
  {
    id: 'herpes_simplex',
    name: 'Herpes Simpleks (Labiialis/Genitalis)',
    icpc: 'S71 / X90',
    icd: 'A60 / B00',
    level: '4A',
    cat: 'Dermatologi',
    icon: '👄',
    iconBg: '#f8bbd0',
    preview: 'Bintil air berkelompok di bibir atau alat kelamin yang sering kambuh. Terasa gatal dan perih sebelum muncul lesi.',
    masalah: 'Infeksi virus Herpes Simplex (HSV Type 1 untuk mulut, Type 2 untuk kelamin).',
    anamnesis: ['Rasa gatal, panas, atau kesemutan di lokasi lesi (prodormal)', 'Bintil air berkelompok yang cepat pecah jadi luka terbuka dangkal (erosi)', 'Nyeri saat BAK (bila di saluran kencing)', 'Sering kambuh pada lokasi yang sama'],
    fisik: ['Vesikel berkelompok atau erosi berbatas tegas (pinggir berkelok-kelok)', 'Limfadenopati (bengkak KGB) regional'],
    penunjang: ['Tzanck Test (positif sel datia berinti banyak)'],
    diagnosis: ['Herpes Simpleks Labialis / Orofasial / Genitalis.'],
    tatalaksana: [
      { name: 'Acyclovir Oral', dose: '200 mg 5x sehari (7-10 hari)', note: 'Terapi episode pertama' },
      { name: 'Acyclovir Salep (5%)', dose: 'Oleskan 5-6 kali sehari', note: 'Hanya efektif tambahan atau lesi ringan' },
      { name: 'Acyclovir Profilaksis', dose: '400 mg q12h', note: 'Bila sering kambuh (>6x dalam setahun)' }
    ],
    edukasi: ['Gunakan kondom saat berhubungan seks (meski tidak ada luka)', 'Hindari kontak kulit/seksual saat lesi aktif', 'Beritahu pasangan seksual', 'Stres dan daya tahan tubuh turun bisa memicu kekambuhan'],
    rujukan: ['Herpes genitalis pada ibu hamil tua (risiko menular ke bayi saat lahir)', 'Infeksi pada bayi baru lahir', 'Resistensi obat asiklovir'],
    prognosis: { vitam: 'Bonam', functionam: 'Bonam', sanationam: 'Recurrent' },
    alerts: [
      { type: 'warn', text: 'Virus herpes menetap di saraf seumur hidup. Pengobatan hanya menghilangkan gejala dan memperpendek masa penularan.' }
    ]
  },
  {
    id: 'impetigo',
    name: 'Impetigo (Krstosa/Bulosa)',
    icpc: 'S84',
    icd: 'L01',
    level: '4A',
    cat: 'Dermatologi',
    icon: '🍯',
    iconBg: '#ffecb3',
    preview: 'Infeksi kulit bakteri pada anak. Luka dengan kerak berwarna "kuning madu" atau melepuh berisi nanah.',
    masalah: 'Infeksi kulit superfisial oleh Staphylococcus aureus atau Streptococcus pyogenes.',
    anamnesis: ['Luka di wajah (sekitar hidung/mulut) yang berkerak (Impetigo Krustosa)', 'Kulit melepuh berisi cairan (Impetigo Bulosa)', 'Rasa gatal, tidak nyeri', 'Sangat menular pada anak-anak'],
    fisik: ['Impetigo Krustosa: krusta warna kuning madu (honey-colored crust) yang mudah lepas', 'Impetigo Bulosa: bula (gelembung air) kendur yang berisi cairan keruh/nanah', 'Eritema (merah) di sekitar lesi'],
    penunjang: ['Pengecatan Gram: ditemukan bakteri kokus Gram positif berkelompok/rantai'],
    diagnosis: ['Impetigo Krustosa / Bulosa.'],
    tatalaksana: [
      { name: 'Mupirocin 2% (Salep)', dose: 'Oleskan 3 kali sehari (7 hari)', note: 'Antibiotik topikal pilihan utama' },
      { name: 'Asam Fusidat 2% (Salep)', dose: 'Oleskan 3 kali sehari', note: 'Alternatif antibiotik topikal' },
      { name: 'Cloxacillin / Amoxiclav', dose: 'Sesuai dosis usia', note: 'Hanya jika lesi sangat banyak atau luas' }
    ],
    edukasi: ['Bersihkan krusta dengan air hangat sebelum salep dioles', 'Cuci tangan secara rutin', 'Jangan berbagi handuk/baju', 'Gunting kuku anak agar tidak menggaruk'],
    rujukan: ['Lesi meluas sangat cepat (risiko Staphylococcal Scalded Skin Syndrome)', 'Disertai gejala sistemik hebat (demam tinggi, lemas)'],
    prognosis: { vitam: 'Bonam', functionam: 'Bonam', sanationam: 'Bonam' },
    alerts: [
      { type: 'ok', text: 'Krusta kuning madu adalah kunci diagnosis klinis impetigo krustosa.' }
    ]
  },
  {
    id: 'furunkel',
    name: 'Furunkel & Karbunkel (Bisul)',
    icpc: 'S85',
    icd: 'L02',
    level: '4A',
    cat: 'Dermatologi',
    icon: '🔴',
    iconBg: '#ffcdd2',
    preview: 'Bisul bernanah yang nyeri, merah, dan menonjol. Karbunkel adalah kumpulan bisul yang menyatu.',
    masalah: 'Infeksi dalam pada folikel rambut yang disebabkan oleh bakteri Staphylococcus aureus.',
    anamnesis: ['Bisul yang makin membesar dan sangat nyeri', 'Tampak mata bisul (pus)', 'Bisa muncul demam bila lesi luas (karbunkel)'],
    fisik: ['Nodul eritem (merah menonjol), hangat, nyeri tekan', 'Terdapat punctum (mata bisul) berisi nanah (pus)', 'Karbunkel: kumpulan beberapa bisul yang saling berhubungan (multimata)'],
    penunjang: ['Gram nanah: kokus Gram positif berkelompok'],
    diagnosis: ['Furunkel / Karbunkel.'],
    tatalaksana: [
      { name: 'Kompres Hangat', dose: '3 kali sehari 10 menit', note: 'Mempercepat pecahnya bisul secara alami' },
      { name: 'Mupirocin (Salep)', dose: 'Oleskan 3 kali sehari', note: 'Topikal antibiotik' },
      { name: 'Insisi & Drainase', dose: '-', note: 'Dilakukan bila bisul sudah matang (fluktuasi positif)' },
      { name: 'Cloxacillin / Clindamycin', dose: '500 mg q8h', note: 'Bila ada demam atau lesi di wajah/karbunkel' }
    ],
    edukasi: ['Jangan memencet bisul sendiri', 'Jaga kebersihan kulit', 'Ganti perban secara rutin setelah insisi', 'Kelola faktor risiko seperti diabetes mellitus'],
    rujukan: ['Bisul di area "Danger Triangle" wajah (sekitar hidung) — risiko infeksi ke otak', 'Karbunkel pada penderita diabetes/imunosupresi'],
    prognosis: { vitam: 'Bonam', functionam: 'Bonam', sanationam: 'Bonam' },
    alerts: [
      { type: 'warn', text: 'Furunkel di wajah harus ditangani dengan antibiotik sistemik karena risiko komplikasi Trombosis Sinus Kavernosus.' }
    ]
  },
  {
    id: 'ascariasis',
    name: 'Ascariasis (Cacing Gelang)',
    icpc: 'D89',
    icd: 'B77.9',
    level: '4A',
    cat: 'Umum & Infeksi',
    icon: '🪱',
    iconBg: '#e2e8f0',
    preview: 'Infeksi cacing usus besar. Sering tanpa gejala, namun dapat menyebabkan gangguan gizi atau sumbatan usus pada anak.',
    masalah: 'Infeksi yang disebabkan oleh cacing Ascaris lumbricoides. Penularan melalui tanah (Soil Transmitted Helminths).',
    anamnesis: ['Sering tanpa gejala', 'Perut buncit, mual, nafsu makan turun', 'Riwayat keluar cacing dari mulut atau dubur', 'Batuk kering dan sesak (Sindrom Loeffler) saat larva lewat paru'],
    fisik: ['Gejala anemia (pucat)', 'Tanda malnutrisi / KEP', 'Massa lunak di perut (bila terjadi obstruksi usus/ileus)'],
    penunjang: ['Pemeriksaan Feses: ditemukan telur cacing A. lumbricoides'],
    diagnosis: ['Ascariasis.'],
    tatalaksana: [
      { name: 'Albendazole', dose: '400 mg (Dosis Tunggal)', note: 'Pilihan utama, diminum sesudah makan' },
      { name: 'Mebendazole', dose: '500 mg (Dosis Tunggal)', note: 'Alternatif' },
      { name: 'Pyrantel Pamoate', dose: '10 mg/kgBB (Dosis Tunggal)', note: 'Aman untuk anak kecil' }
    ],
    edukasi: ['Cuci tangan dengan sabun sebelum makan', 'Potong kuku dan jaga kebersihan diri', 'Cuci bersih sayuran dan buah sebelum dimakan', 'Selalu gunakan alas kaki saat di luar rumah'],
    rujukan: ['Komplikasi: Ileus Obstruktif (sumbatan usus), perforasi usus, atau cacing masuk ke empedu (kolik bilier)'],
    prognosis: { vitam: 'Bonam', functionam: 'Bonam', sanationam: 'Bonam dengan higienitas baik' },
    alerts: [
      { type: 'ok', text: 'Albendazole 400mg dosis tunggal adalah standar WHO untuk pengobatan cacing massal.' }
    ]
  },
  {
    id: 'ankilostomiasis',
    name: 'Ankilostomiasis (Cacing Tambang)',
    icpc: 'D89',
    icd: 'B76.9',
    level: '4A',
    cat: 'Umum & Infeksi',
    icon: '🪱',
    iconBg: '#ffebee',
    preview: 'Penyebab utama anemia defisiensi besi di daerah tropis. Cacing menghisap darah dari dinding usus.',
    masalah: 'Infeksi cacing Necator americanus atau Ancylostoma duodenale. Larva masuk menembus kulit kaki yang telanjang.',
    anamnesis: ['Lemas, pucat, cepat lelah (gejala anemia)', 'Nyeri perut, diare', 'Gatal di kaki (Ground itch) pada tempat masuknya larva', 'Batuk (saat larva lewat paru)'],
    fisik: ['Konjungtiva sangat pucat', 'Edema (bengkak) jika kadar albumin turun drastis', 'Koilonychia (kuku sendok) pada kasus kronis'],
    penunjang: ['Feses: ditemukan telur cacing tambang', 'Darah Lengkap: Anemia mikrositik hipokrom, Eosinofilia'],
    diagnosis: ['Ankilostomiasis.'],
    tatalaksana: [
      { name: 'Albendazole', dose: '400 mg (Dosis Tunggal)', note: 'Membunuh cacing dewasa' },
      { name: 'Sulfas Ferrosus', dose: '3x200 mg', note: 'Wajib diberikan untuk terapi anemia' },
      { name: 'Mebendazole', dose: '100 mg q12h selama 3 hari', note: 'Efektif untuk cacing tambang' }
    ],
    edukasi: ['SELALU gunakan alas kaki saat di luar rumah', 'Jaga kebersihan jamban keluarga', 'Makan makanan kaya zat besi', 'Penyuluhan kebersihan lingkungan'],
    rujukan: ['Anemia sangat berat (Hb <7 g/dL) yang butuh transfusi darah'],
    prognosis: { vitam: 'Bonam', functionam: 'Bonam', sanationam: 'Bonam' },
    alerts: [
      { type: 'warn', text: 'Waspadai "Ground Itch" — rasa gatal dan ruam kemerahan di kaki setelah kontak dengan tanah lembap.' }
    ]
  },
  {
    id: 'dermatitis_seboroik',
    name: 'Dermatitis Seboroik',
    externalUrl: 'https://www.alomedika.com/penyakit/dermatovenerologi/dermatitis-seboroik',
    icpc: 'S86',
    icd: 'L21.9',
    level: '4A',
    cat: 'Dermatologi',
    icon: '🧴',
    iconBg: '#e2e8f0',
    preview: 'Kelainan kulit kemerahan and bersisik kekuningan (berminyak) pada area kaya kelenjar lemak (wajah, kepala, dada).',
    masalah: 'Dermatitis Seboroik (DS) adalah kondisi inflamasi kulit kronis residif yang berhubungan dengan aktivitas kelenjar sebasea and proliferasi jamur Malassezia furfur. Sering muncul pada bayi (Cradle cap) and dewasa.',
    overview: {
      etiologi: 'Multifaktorial: Reaksi inflamasi terhadap Malassezia, faktor genetik, stres emosional, and iklim lembap.',
      epidemiologi: 'Menyerang sekitar 3-5% populasi. Puncak insidensi pada 3 bulan pertama kehidupan, usia remaja, and usia 40-60 tahun.',
      patofisiologi: 'Asam lemak hasil degradasi sebum oleh Malassezia merusak sawar kulit → Memicu pelepasan sitokin proinflamasi → Hiperproliferasi epidermis and sisik berminyak.',
      komplikasi: ['Infeksi sekunder bakteri', 'Eritroderma (jarang)', 'Alopecia (bila mengenai kulit kepala secara berat)']
    },
    anamnesis: [
      'Bercak kemerahan yang gatal di area berminyak',
      'Sisik putih atau kekuningan yang berminyak',
      'Lokasi: Kulit kepala (ketombe parah), alis mata, cuping hidung (lipatan nasolabial), belakang telinga, and dada',
      'Gejala sering kambuh saat kelelahan atau stres'
    ],
    fisik: [
      'Makula/Plak Eritema (merah) dengan batas yang tidak tegas',
      'Skuama (sisik) halus berwarna kuning and berminyak (Greasy scales)',
      'Ketombe (Pityriasis sicca) pada rambut kepala',
      'Cradle Cap: Kerak tebal kuning pada kepala bayi'
    ],
    penunjang: [
      'Diagnosis klinis murni',
      'Pemeriksaan KOH (singkirkan Tinea Fasialis/Kepala)'
    ],
    penunjangDetail: [
      { nama: 'Pemeriksaan KOH 10-20%', rasionalisasi: 'Membantu membedakan dari infeksi jamur dermatofit (Tinea) yang memiliki pengobatan berbeda.' }
    ],
    diagnosis: [
      'Dermatitis Seboroik Dewasa / Bayi'
    ],
    diagnosisBanding: ['Psoriasis (sisik tebal putih keperakan, batas tegas)', 'Dermatitis Atopik', 'Tinea Kapitis (jamur kepala)', 'Rosacea (di wajah, tanpa sisik)'],
    tatalaksana: [
      { name: 'Ketoconazole 2% (Shampoo)', dose: 'Gunakan 2-3x seminggu', note: 'Diamkan 5 menit sebelum bilas' },
      { name: 'Ketoconazole 2% (Krim)', dose: 'Oleskan q12h', note: 'Untuk area wajah/badan' },
      { name: 'Desonide 0.05% (Krim)', dose: 'Oleskan q12h', note: 'Steroid potensi rendah (max 1 minggu)' }
    ],
    tatalaksanaDetail: {
      nonFarmakologi: [
        'Menjaga kebersihan kulit dengan sabun lembut.',
        'Hindari stres emosional yang berlebihan.',
        'Gunakan pakaian yang menyerap keringat.',
        'Sering keramas (shampooing) teratur untuk kontrol sebum kepala.'
      ],
      farmakologi: [
        {
          title: 'Terapi Antijamur (Utama)',
          items: [
            { name: 'Shampoo Ketoconazole / Selenium Sulfida', dose: 'Setiap 2 hari', note: 'Untuk kulit kepala' },
            { name: 'Krim Ketoconazole', dose: 'Area non-rambut', note: 'Beri bila ada plak eritema' }
          ]
        },
        {
          title: 'Anti-Inflamasi (Jangka Pendek)',
          items: [
            { name: 'Krim Hidrokortison 1-2.5%', dose: '2x sehari', note: 'Gunakan hanya sampai peradangan reda' }
          ]
        }
      ]
    },
    edukasi: [
      'Penyakit ini bersifat kambuh-kambuhan, tujuannya adalah kontrol gejala, bukan sembuh total',
      'Shampoo antijamur harus didiamkan di kulit kepala minimal 5-10 menit agar bekerja efektif',
      'Jangan menggaruk area yang sakit karena bisa memicu infeksi bakteri',
      'Matahari (sinar UV) dalam dosis ringan kadang membantu perbaikan gejala'
    ],
    rujukan: [
      'Diagnosis meragukan (mirip psoriasis atau lupus)',
      'Kasus berat yang tidak respons dengan pengobatan topikal standar',
      'Meluas ke seluruh tubuh (Eritroderma)'
    ],
    prognosis: { vitam: 'Bonam', functionam: 'Bonam', sanationam: 'Dubia ad Bonam (sering residif)' },
    alerts: [
      { type: 'ok', text: 'Ketombe (Pityriasis Sicca) adalah bentuk paling ringan dari Dermatitis Seboroik.' },
      { type: 'warn', text: 'Hindari penggunaan steroid potensi tinggi di wajah karena risiko atrofi kulit and telangiektasis.' }
    ]
  },
  {
    id: 'dermatitis_atopik',
    name: 'Dermatitis Atopik (Eksim Susu)',
    icpc: 'S87',
    icd: 'L20',
    level: '4A',
    cat: 'Dermatologi',
    icon: '👶',
    iconBg: '#fffaced',
    preview: 'Gatal kronis berulang pada anak dengan riwayat alergi keluarga. Lokasi khas di pipi (bayi) atau lipatan siku/lutut (anak).',
    masalah: 'Peradangan kulit kronis-residif yang berhubungan dengan atopi (asma, rhinitis alergi).',
    overview: {
      etiologi: 'Interaksi kompleks antara disfungsi skin barrier (mutasi gen filaggrin) dan disregulasi imun sistemik (sel Th2 yang hiperaktif memproduksi IgE).',
      epidemiologi: 'Tingkat kejadian mencapai 10-20% pada anak, dan menurun jadi 1-3% pada dewasa. Merupakan titik awal dari "Fenomena Pawai Atopik" (Atopic March).',
      patofisiologi: 'Disfungsi barrier epidermis menyebabkan penurunan kadar ceramide dan penguapan air berlebihan (Transepidermal Water Loss - TEWL), yang bermanifestasi sebagai kulit sangat kering (xerosis). Mikrolesi struktural ini mempermudah penetrasi alergen lingkungan (debu, bulu). Hal tersebut merangsang kaskade inflamasi imun (IgE mediated) yang melepaskan neuropeptida pembuat gatal. Garukan mekanis memperburuk mikrotrauma, memicu "Itch-Scratch Cycle" tanpa ujung.',
      komplikasi: ['Infeksi Kulit Bakterial Skunder (Impetiginisasi Staph/Strep)', 'Eksim Herpetikum (Emergensi penyebaran virus HSV)', 'Stres Psikologis & Gangguan Tidur (pada anak & orang tua)', 'Eritroderma eksfoliatif umum']
    },
    anamnesis: ['Gatal yang sangat hebat terutama malam hari', 'Riwayat atopi pada diri sendiri atau keluarga', 'Sudah berlangsung lama atau sering kambuh'],
    fisik: ['Fase Bayi: Pipi kemerahan, basah, berkrusta', 'Fase Anak: Likenifikasi (penebalan kulit) di lipat siku (fossa cubiti) dan lipat lutut (fossa poplitea)', 'Kulit tampak sangat kering (xerosis)'],
    penunjang: ['Kriteria Hanifin-Rajka (min 3 kriteria mayor)'],
    penunjangDetail: [
      { nama: 'Darah Lengkap & Uji IgE Total', rasionalisasi: 'Bisa ditemukan Eosinofilia dan serum IgE yang sangat tinggi, walau ini bukan prasyarat diagnosis mutlak melainkan penguat kecenderungan atopinya.' },
      { nama: 'Kultur Swab Lesi Kulit', rasionalisasi: 'Hanya jika ditemukan krusta tebal kekuningan, madu basah pus (nanah), atau bau busuk untuk mengidentifikasi Superinfeksi Bakteri (Staphylococcus aureus paling sering).' }
    ],
    diagnosis: ['Dermatitis Atopik.'],
    diagnosisBanding: ['Dermatitis Seboroik (skuama cenderung kekuningan/berminyak, banyak di lipatan kulit dan kepala/cradle cap bayi)', 'Dermatitis Kontak Alergi (riwayat terpapar alergen bahan kimia menempel)', 'Skabies / Kudis (gatal malam hari parah, menyerang keluarga satu rumah, papul di sela jari)'],
    tatalaksana: [
      { name: 'Pelembap (Emolien)', dose: 'Gunakan segera setelah mandi', note: 'Paling penting untuk menjaga sawar kulit' },
      { name: 'Hidrokortison 1-2.5% (Krim)', dose: 'Oleskan 2 kali sehari', note: 'Gunakan saat ada peradangan/kambuh' },
      { name: 'Cetirizine / Loratadine', dose: 'Sesuai dosis usia', note: 'Meredakan gatal agar tidak digaruk' }
    ],
    edukasi: ['Mandilah sebentar (5-10 menit) dengan air suam kuku', 'Gunakan sabun bayi yang lembut (non-deterjen)', 'Hindari pencetus (debu, bulu hewan, stres, suhu ekstrem)', 'Gunting kuku agar tidak luka saat menggaruk'],
    rujukan: ['Dermatitis atopik berat yang tidak terkontrol', 'Muncul komplikasi infeksi bakteri (impetiginisasi) atau virus (eksim herpeticum)'],
    prognosis: { vitam: 'Bonam', functionam: 'Bonam', sanationam: 'Dubia (cenderung membaik saat dewasa)' },
    alerts: [
      { type: 'danger', text: 'Eksim Herpeticum (infeksi herpes pada kulit atopik) adalah kegawatdaruratan dermatologi — segera RUJUK!' }
    ]
  },
  {
    id: 'pneumonia_adult',
    name: 'Pneumonia Komunitas (Dewasa)',
    icpc: 'R81',
    icd: 'J18.9',
    level: '4A',
    cat: 'Respirasi',
    icon: '🫁',
    iconBg: '#e0f2f1',
    preview: 'Infeksi paru akut dengan gejala batuk, demam, dan sesak. Terdengar ronki pada pemeriksaan paru.',
    masalah: 'Peradangan parenkim paru yang didapat di masyarakat (bukan di RS).',
    overview: {
      etiologi: 'Bakteri tipikal terbanyak: Streptococcus pneumoniae. Patogen atipikal: Mycoplasma pneumoniae, Chlamydophila pneumoniae. Virus (Rhinovirus, Influenza) juga signifikan memicu pneumonia primer atau infeksi koinfeksi bakterial sekunder.',
      epidemiologi: 'Penyebab utama mortalitas infeksi di dunia. Kelompok rentan: geriatri (>65 thn) dan pasien imunosupresi (HIV, pasca-kemo, DM tidak terkontrol).',
      patofisiologi: 'Inokulasi inhalasi mikroba menyerbuki alveolus. Multiplikasi patogen yang lolos dari makrofag alveolar dan pertahanan mukosiliar akan memicu respon pro-inflamasi masif alveoli. Eksudat cairan bernanah penuh leukosit PMN tumpah ruah mengisi ruang alveolus (konsolidasi paru), menenggelamkan alveoli, sehingga menghambat proses pertukaran oksigen dan difusi karbon dioksida. Akibatnya pasien mengalami hipoksia darah dan sesak napas keras.',
      komplikasi: ['Efusi Pleura / Empiema (Parapneumonik, nanah dalam rongga pleura)', 'Gagal Napas Akut (ARDS)', 'Bakteremia & Sepsis', 'Abses Paru (terutama dari K. pneumoniae atau anaerob)']
    },
    anamnesis: ['Batuk (produktif/non-produktif)', 'Demam tinggi, menggigil', 'Sesak napas', 'Nyeri dada saat tarik napas (pleuritic pain)', 'Lemas, nafsu makan turun'],
    fisik: ['Takipnea (napas cepat), Takikardia', 'Perkusi: Redup (pada area konsolidasi)', 'Auskultasi: Ronki basah halus/kasar, Suara napas bronkial'],
    penunjang: ['Rontgen Thorax: Infiltrat atau konsolidasi baru', 'Darah Lengkap: Leukositosis (Shift to the left)', 'Skoring CURB-65 untuk menentukan rawat jalan vs inap'],
    penunjangDetail: [
      { nama: 'Rontgen Thorax PA', rasionalisasi: 'Gold-Standard. Mendeteksi bercak infiltrat/konsolidasi pada bayangan radiolusen paru normal. Membantu menilai luasnya efusi pleura penyerta.' },
      { nama: 'Darah Lengkap & Prokalsitonin (PCT)', rasionalisasi: 'Leukositosis Neutrofilia signifikan menandakan infeksi bakterial berat. PCT > 0.25 mcg/L memperkuat kecurigaan etiologi bakteri dibanding virus murni.' },
      { nama: 'Saturasi Oximetry (SpO2)', rasionalisasi: 'Untuk stratifikasi risiko bahaya, SpO2 <90% menandakan hipoksemia mutlak indikasi terapi suplemen oksigen medis dan mondok rawat inap.' }
    ],
    diagnosis: ['Pneumonia Komunitas (CAP).'],
    diagnosisBanding: ['TB Paru (batuk kronik >2 minggu progresif, hemoptisis, keringat malam)', 'PPOK Eksaserbasi Akut (riwayat merokok lama berat, hiperinflasi dada, wheezing memanjang dominan)', 'Bronkitis Akut (batuk berat tanpa sesak berat, Rontgen Paru Bening)', 'Gagal Jantung Kiri / Edema Paru Akut (ortopnea, ronki cairan simetris bilateral basah, JVP naik)'],
    tatalaksana: [
      { name: 'Azithromycin', dose: '500 mg q24h selama 3-5 hari', note: 'Lini pertama rawat jalan tanpa komorbid' },
      { name: 'Claritromycin', dose: '500 mg q12h selama 5-7 hari', note: 'Alternatif makrolid' },
      { name: 'Amoxiclav (Dosis Tinggi)', dose: '1 g q12h (5-7 hari)', note: 'Pilihan pada pasien dengan komorbid' }
    ],
    edukasi: ['Istirahat cukup', 'Minum banyak air putih', 'Minum antibiotik hingga tuntas', 'Kontrol kembali 48-72 jam bila tidak ada perbaikan'],
    rujukan: ['Skor CURB-65 ≥ 2', 'Saturasi Oksigen <92% atau Sianosis', 'Komorbid berat yang tidak terkontrol', 'Intoleransi obat oral'],
    prognosis: { vitam: 'Bonam (bila terapi tepat)', functionam: 'Bonam', sanationam: 'Bonam' },
    alerts: [
      { type: 'warn', text: 'Gunakan Skor CURB-65: Confusion, Uremia (>7), Respirasi (≥30), Blood Pressure (<90/60), Age (≥65).' }
    ]
  },
  {
    id: 'influenza',
    name: 'Influenza (Flu)',
    icpc: 'R80',
    icd: 'J11',
    level: '4A',
    cat: 'Respirasi',
    icon: '🤧',
    iconBg: '#bbdefb',
    preview: 'Demam tinggi, nyeri sendi, batuk, dan pilek hebat. Gejala sistemik lebih berat dibanding selesma (Common Cold).',
    masalah: 'Penyakit virus sistemik akut yang disebabkan virus Influenza A atau B.',
    anamnesis: ['Demam mendadak tinggi (>38°C)', 'Nyeri otot (myalgia) dan nyeri sendi hebat', 'Nyeri kepala, lemas hebat (prostration)', 'Batuk kering, nyeri tenggorokan, pilek'],
    fisik: ['Wajah kemerahan', 'Konjungtiva injeksi (merah) ringan', 'Faring hiperemis', 'Paru umumnya bersih (bila tanpa komplikasi)'],
    penunjang: ['Rapid Test Antigen Influenza (bila diperlukan/curiga wabah)'],
    diagnosis: ['Influenza Like Illness (ILI).'],
    tatalaksana: [
      { name: 'Istirahat & Cairan', dose: '-', note: 'Terapi paling utama' },
      { name: 'Paracetamol', dose: '500 mg q6-8h', note: 'Meredakan demam dan nyeri otot' },
      { name: 'Oseltamivir', dose: '75 mg q12h (5 hari)', note: 'Beri HANYA pada kelompok risiko tinggi (Lansia, Bumil, Komorbid)' }
    ],
    edukasi: ['Etika batuk dan bersin (gunakan tisu/lengan dalam)', 'Gunakan masker agar tidak menulari orang lain', 'Vaksinasi influenza tahunan (prevensi)'],
    rujukan: ['Sesak napas (curiga pneumonia)', 'Kesadaran menurun', 'Demam menetap >5 hari'],
    prognosis: { vitam: 'Bonam', functionam: 'Bonam', sanationam: 'Bonam' },
    alerts: [
      { type: 'ok', text: 'Antibiotik TIDAK diperlukan pada influenza tanpa infeksi bakteri sekunder.' }
    ]
  },
  {
    id: 'dermatitis_napkin',
    name: 'Dermatitis Popok (Napkin Eczema)',
    icpc: 'S87',
    icd: 'L22',
    level: '4A',
    cat: 'Dermatologi',
    icon: '👶',
    iconBg: '#fff5f5',
    preview: 'Ruam merah pada area yang tertutup popok. Sering disebabkan oleh kelembapan atau kontak lama dengan urin/feses.',
    masalah: 'Peradangan kulit akibat kontak dengan popok yang lembap dalam waktu lama.',
    anamnesis: ['Bercak merah pada area popok (bokong, sekitar kelamin)', 'Bayi tampak rewel saat popok diganti atau saat BAK/BAB'],
    fisik: ['Eritema (merah) cerah berbatas tegas mengikuti area kontak popok', 'Seringkali lipatan kulit tidak terkena (kecuali terinfeksi jamur Candidiasis)'],
    penunjang: ['KOH 10% (bila curiga infeksi jamur Candida)'],
    diagnosis: ['Dermatitis Popok.'],
    tatalaksana: [
      { name: 'Zinc Oxide (Krim)', dose: 'Oleskan tebal setiap ganti popok', note: 'Sebagai barrier / pelindung kulit' },
      { name: 'Hidrokortison 1% (Krim)', dose: 'Oleskan 2 kali sehari', note: 'Hanya jangka pendek (3-5 hari) bila radang berat' },
      { name: 'Miconazole (Krim)', dose: 'Oleskan 2 kali sehari', note: 'Bila ada tanda infeksi jamur (satelit papul)' }
    ],
    edukasi: ['Ganti popok sesering mungkin (setiap bayi BAK/BAB)', 'Bersihkan kulit dengan air hangat dan keringkan dengan ditepuk-tepuk lembut', 'Biarkan bayi "bebas popok" selama beberapa waktu setiap hari', 'Jangan gunakan popok terlalu ketat'],
    rujukan: ['Ruam tidak membaik setelah 7 hari', 'Muncul luka terbuka/borok yang bernanah'],
    prognosis: { vitam: 'Bonam', functionam: 'Bonam', sanationam: 'Bonam dengan perawatan popok yang baik' },
    alerts: [
      { type: 'warn', text: 'Waspadai infeksi sekunder Candida: Ruam sangat merah terang hingga ke lipatan dengan bintik merah (satelit) di sekitarnya.' }
    ]
  },
  {
    id: 'faringitis',
    name: 'Faringitis Akut',
    externalUrl: 'https://www.alomedika.com/penyakit/telinga-hidung-tenggorokan/faringitis',
    icpc: 'R74',
    icd: 'J02.9',
    level: '4A',
    cat: 'THT',
    icon: '🧣',
    iconBg: '#fed7e2',
    preview: 'Radang tenggorokan yang menyebabkan nyeri telan, gatal, and kering. Sering merupakan bagian dari gejala ISPA.',
    masalah: 'Faringitis akut adalah peradangan pada mukosa faring and jaringan limfoid di sekitarnya. Sebagian besar kasus (80%) disebabkan oleh virus, sehingga penggunaan antibiotik harus sangat selektif.',
    overview: {
      etiologi: 'Virus (kebanyakan): Rhinovirus, Adenovirus, Influenza. Bakteri: Streptococcus beta hemolyticus Grup A (GABHS).',
      epidemiologi: 'Sangat umum pada semua usia, terutama saat pergantian musim (pancaroba).',
      patofisiologi: 'Droplet kuman menempel di mukosa faring → Replikasi virus/bakteri → Inflamasi lokal → Vasodilatasi and edema mukosa → Stimulasi reseptor nyeri di tenggorokan.',
      komplikasi: ['Sinusitis', 'Otitis Media Akut', 'Abses Retrofaringeal (terutama pada anak)', 'Demam Reumatik']
    },
    anamnesis: [
      'Nyeri tenggorokan (Sore throat)',
      'Rasa gatal, kering, atau mengganjal di tenggorokan',
      'Nyeri saat menelan (odynophagia)',
      'Batuk, pilek, and suara serak (gejala khas virus)',
      'Demam ringan hingga tinggi'
    ],
    fisik: [
      'Faring Hiperemis: Mukosa dinding belakang tenggorok nampak merah and berbenjol (Granular)',
      'Eksudat: Bercak putih (sering pada faringitis bakterial)',
      'Uvula edema and hiperemis',
      'Pembesaran kelenjar getah bening leher (submandibula)'
    ],
    penunjang: [
      'Skoring Centor: Membantu membedakan Bakteri vs Virus',
      'Swab Tenggorok (bila diperlukan)'
    ],
    penunjangDetail: [
      { nama: 'Skoring Centor', rasionalisasi: 'Kriteria (Demam, Tanpa batuk, Limfadenopati anterior, Eksudat tonsil) untuk menilai peluang infeksi Streptococcus yang butuh antibiotik.' }
    ],
    diagnosis: [
      'Faringitis Akut Viral',
      'Faringitis Akut Bakterial'
    ],
    diagnosisBanding: ['Tonsilitis Akut', 'GERD (Nyeri tenggorokan kronis pagi hari, sering sendawa asam)', 'Faringitis Gonore (riwayat seks oral)', 'Esofagitis'],
    tatalaksana: [
      { name: 'Paracetamol', dose: '500 mg q6-8h', note: 'Analgetik pilihan utama' },
      { name: 'Obat Kumur / Hisap Antiseptik', dose: 'prn', note: 'Bantuan simptomatik lokal' },
      { name: 'Antibiotik (Amoxicillin)', dose: '500 mg q8h', note: 'Hanya jika memenuhi kriteria Centor (curiga bakteri)' }
    ],
    tatalaksanaDetail: {
      nonFarmakologi: [
        'Hidrasi Tinggi: Minum banyak cairan hangat untuk jaga mukosa tetap lembap.',
        'Kumur Air Garam Hangat: Membantu mengurangi edema mukosa faring.',
        'Hindari Iritan: Berhenti merokok and hindari makanan yang terlalu panas/pedas.',
        'Istirahat Suara: Tidak banyak bicara jika suara serak.'
      ],
      farmakologi: [
        {
          title: 'Manajemen Nyeri',
          items: [
            { name: 'Ibuprofen', dose: '400 mg (3x sehari)', note: 'Anti-inflamasi and analgetik yang kuat' },
            { name: 'Methylprednisolone', dose: '4-8 mg', note: 'Shot tunggal dipertimbangkan pada nyeri telan sangat berat (short course)' }
          ]
        },
        {
          title: 'Antibiotik (Jika Perlu)',
          items: [
            { name: 'Amoxicillin', dose: '50 mg/kgBB/hari', note: 'Beri selama 10 hari' }
          ]
        }
      ]
    },
    edukasi: [
      'Sebagian besar radang tenggorokan disebabkan oleh virus dan akan sembuh sendiri dalam 3-5 hari tanpa antibiotik',
      'Jangan menuntut antibiotik jika dokter merasa itu disebabkan oleh flu/virus biasa',
      'Tetap makan makanan bergizi meskipun sakit saat menelan',
      'Gunakan masker untuk cegah penularan ke orang lain'
    ],
    rujukan: [
      'Kesulitan bernapas atau suara seperti tercekik',
      'Kesulitan menelan air liur (drooling)',
      'Tidak ada perbaikan setelah 5-7 hari',
      'Dicurigai adanya Abses Retrofaringeal'
    ],
    prognosis: { vitam: 'Bonam', functionam: 'Bonam', sanationam: 'Bonam' },
    alerts: [
      { type: 'ok', text: 'Adanya gejala batuk, pilek, and suara serak lebih mengarah ke infeksi VIRUS daripada bakteri.' }
    ]
  },
  {
    id: 'rhinitis_akut',
    name: 'Rhinitis Akut (Common Cold)',
    icpc: 'R74',
    icd: 'J00',
    level: '4A',
    cat: 'Respirasi',
    icon: '👃',
    iconBg: '#e0f2f1',
    preview: 'Hidung tersumbat, bersin, dan ingus encer. Seringkali sembuh sendiri dalam 7-10 hari.',
    masalah: 'Peradangan mukosa hidung akut yang disebabkan oleh virus (Rhinovirus).',
    anamnesis: ['Bersin-bersin', 'Hidung tersumbat', 'Ingus encer (rhinorhea) jernih', 'Nyeri kepala ringan atau rasa penuh di daerah sinus'],
    fisik: ['Konka nasi edema dan hiperemis', 'Sekret serous (encer jernih) di kavum nasi', 'Suhu tubuh normal atau demam ringan'],
    penunjang: ['Klinis utama'],
    diagnosis: ['Rhinitis Akut / Selesma.'],
    tatalaksana: [
      { name: 'Pseudoefedrin', dose: '30-60 mg q6-8h', note: 'Dekongestan untuk hidung tersumbat' },
      { name: 'Paracetamol', dose: '500 mg prn', note: 'Nyeri kepala' },
      { name: 'Irigasi Hidung (NaCl 0.9%)', dose: '2-3 kali sehari', note: 'Membantu membersihkan mukus hidung' }
    ],
    edukasi: ['Istirahat cukup', 'Makan makanan bergizi dan minum cukup', 'Gunakan masker', 'Hindari paparan asap rokok atau debu'],
    rujukan: ['Gejala menetap >10-14 hari (curiga sinusitis)', 'Demam tinggi mendadak setelah kondisi membaik (infeksi sekunder)'],
    prognosis: { vitam: 'Bonam', functionam: 'Bonam', sanationam: 'Bonam' },
    alerts: [
      { type: 'ok', text: 'Rhinitis akut adalah self-limiting disease. Terapi hanya bersifat suportif/simtomatis.' }
    ]
  },
  {
    id: 'epistaksis',
    name: 'Epistaksis (Mimisan)',
    icpc: 'R06',
    icd: 'R04.0',
    level: '4A',
    cat: 'THT',
    icon: '🩸',
    iconBg: '#fff5f5',
    preview: 'Perdarahan dari hidung. Sering terjadi pada anak akibat trauma atau udara kering.',
    masalah: 'Perdarahan yang berasal dari kavum nasi, paling sering dari Pleksus Kiesselbach (Epistaksis Anterior).',
    anamnesis: ['Keluarnya darah dari lubang hidung (unilateral/bilateral)', 'Riwayat trauma (mengorek hidung), benturan, atau bersin kuat', 'Riwayat hipertensi atau gangguan pembekuan darah (pada dewasa/lansia)'],
    fisik: ['Sumber perdarahan tampak di septum anterior (Pleksus Kiesselbach)', 'Darah mengalir ke faring (pada epistaksis posterior)'],
    penunjang: ['Darah Lengkap & Profil Koagulasi (bila berulang/berat)'],
    diagnosis: ['Epistaksis Anterior / Posterior.'],
    tatalaksana: [
      { name: 'Metode Trotter', dose: '-', note: 'Duduk tegak, menunduk, pencet cuping hidung 10-15 menit' },
      { name: 'Tampon Anterior', dose: 'Kapas + Vaselin / Epinefrin', note: 'Bila perdarahan tidak berhenti dengan penekanan' },
      { name: 'Kompres Dingin', dose: '-', note: 'Di pangkal hidung untuk vasokonstriksi' }
    ],
    edukasi: ['Jangan mengorek hidung berlebihan', 'Gunakan humidifier bila udara kering', 'Kontrol tekanan darah bagi penderita hipertensi'],
    rujukan: ['Perdarahan tidak berhenti dengan tampon anterior 2x24 jam', 'Epistaksis Posterior (darah mengalir banyak ke tenggorokan)', 'Epistaksis berulang tanpa penyebab jelas'],
    prognosis: { vitam: 'Bonam', functionam: 'Bonam', sanationam: 'Bonam' },
    alerts: [
      { type: 'warn', text: 'HATI-HATI pada dewasa/lansia penderita hipertensi — epistaksis bisa menjadi tanda tekanan darah yang sangat tinggi.' }
    ]
  },
  {
    id: 'disentri',
    name: 'Disentri (Basiler / Amuba)',
    icpc: 'D70',
    icd: 'A03 / A06',
    level: '4A',
    cat: 'Gastrointestinal',
    icon: '🚽',
    iconBg: '#fffaced',
    preview: 'Diare berdarah disertai lendir dan nyeri perut hebat (tenesmus). Sangat penting membedakan penyebab bakteri vs amuba.',
    masalah: 'Infeksi saluran cerna yang ditandai dengan diare berdarah dan berlendir.',
    anamnesis: ['Diare berdarah dan berlendir', 'Nyeri perut hebat saat akan BAB (tenesmus)', 'Demam tinggi (lebih menonjol pada disentri basiler/Shigella)', 'Mual, muntah, lemas'],
    fisik: ['Nyeri tekan abdomen (terutama kiri bawah)', 'Tanda dehidrasi (mata cekung, turgor lambat)', 'Demam (Suhu >38°C)'],
    penunjang: ['Makroskopis Feses: lendir (+), darah (+)', 'Mikroskopis Feses: ditemukan Eritrosit, Leukosit, atau Tropozoit Entamoeba histolytica'],
    diagnosis: ['Disentri Basiler (Shigella) atau Disentri Amuba (Amoebiasis).'],
    tatalaksana: [
      { name: 'Ciprofloxacin', dose: '500 mg q12h selama 3-5 hari', note: 'Lini pertama untuk Disentri Basiler' },
      { name: 'Metronidazole', dose: '500 mg q8h selama 5-10 hari', note: 'Lini pertama untuk Disentri Amuba' },
      { name: 'Oralit / Cairan Cairan', dose: 'ad libitum', note: 'Cegah dehidrasi' }
    ],
    edukasi: ['Jaga kebersihan makanan dan air minum', 'Cuci tangan dengan sabun setelah BAB dan sebelum makan', 'Gunakan jamban yang sehat'],
    rujukan: ['Dehidrasi berat / syok', 'Anak-anak dengan disentri yang tampak sangat sakit / toksik', 'Perdarahan saluran cerna masif'],
    prognosis: { vitam: 'Bonam', functionam: 'Bonam', sanationam: 'Bonam' },
    alerts: [
      { type: 'warn', text: 'Disentri Basiler (Shigella) biasanya datang dengan demam tinggi, sedangkan Disentri Amuba demamnya lebih ringan/subfebris.' }
    ]
  },
  {
    id: 'hepatitis_a',
    name: 'Hepatitis A',
    icpc: 'D72',
    icd: 'B15',
    level: '4A',
    cat: 'Gastrointestinal',
    icon: '🟡',
    iconBg: '#fff9c4',
    preview: 'Infeksi hati virus yang menular melalui makanan/minuman (fecal-oral). Gejala khas: mata kuning dan urin warna teh pekat.',
    masalah: 'Infeksi hati akut oleh Virus Hepatitis A (HAV). Sering terjadi dalam bentuk KLB (Kejadian Luar Biasa).',
    anamnesis: ['Demam ringan, lemas, mual, muntah', 'Nyeri perut kanan atas', 'Nafsu makan hilang (anoreksia) drastis', 'Urin berwarna gelap seperti teh pekat', 'Mata dan kulit tampak kuning (ikterus)'],
    fisik: ['Sklera ikterik (kuning)', 'Hepatomegali (hati membesar dan nyeri tekan)', 'Warna tinja bisa menjadi pucat (akolik)'],
    penunjang: ['Serologi: Anti-HAV IgM (+) — diagnosis pasti', 'SGOT/SGPT meningkat (sering >1000 U/L)', 'Bilirubin total & direk meningkat'],
    diagnosis: ['Hepatitis A Akut.'],
    tatalaksana: [
      { name: 'Tirah Baring (Bed Rest)', dose: '-', note: 'Hingga keluhan mual dan lemas berkurang' },
      { name: 'Diet Tinggi Kalori', dose: '-', note: 'Bila tidak mual, prioritaskan asupan nutrisi' },
      { name: 'Antiemetik (Domperidone)', dose: '10 mg q8h prn', note: 'Bila mual muntah hebat' }
    ],
    edukasi: ['Jaga kebersihan makanan dan air minum', 'Cuci tangan secara rutin', 'Jangan berbagi alat makan/minum dengan orang lain', 'Vaksinasi Hepatitis A (prevensi)'],
    rujukan: ['Gagal Hati Fulminan: kesadaran menurun (ensefalopati), perdarahan hebat, kuning yang sangat dalam', 'Ibu hamil dengan hepatitis akut'],
    prognosis: { vitam: 'Bonam', functionam: 'Bonam', sanationam: 'Bonam' },
    alerts: [
      { type: 'ok', text: 'Hepatitis A bersifat "self-limiting" dan tidak akan menjadi kronis.' }
    ]
  },
  {
    id: 'gout_arthritis',
    name: 'Artritis Gout Akut',
    externalUrl: 'https://www.alomedika.com/penyakit/reumatologi/artritis-gout',
    icpc: 'L99',
    icd: 'M10',
    level: '4A',
    cat: 'Metabolik',
    icon: '🦶',
    iconBg: '#fff1f0',
    preview: 'Peradangan sendi mendadak yang sangat nyeri, bengkak, dan merah, biasanya pada pangkal ibu jari kaki (Podagra).',
    masalah: 'Artritis Gout adalah penyakit sendi yang disebabkan oleh penumpukan kristal Monosodium Urat (MSU) di dalam sendi akibat kadar asam urat darah yang tinggi (hiperurisemia) kronis.',
    overview: {
      etiologi: 'Hiperurisemia (Kadar asam urat > 7 mg/dL). Pemicu utama: Diet tinggi purin (jeroan, daging merah), alkohol, dehidrasi, atau penggunaan obat diuretik.',
      epidemiologi: 'Lebih sering menyerang pria dewasa (>40 tahun) dan wanita pasca-menopause. Sangat sering berkaitan dengan sindrom metabolik.',
      patofisiologi: 'Kadar asam urat jenuh → Kristal MSU mengendap di sendi → Memicu respon inflamasi hebat oleh neutrofil → Nyeri dan bengkak hebat (Flare).',
      komplikasi: ['Tofus (benjolan kristal urat permanen)', 'Batu Ginjal Asam Urat', 'Artropati Gout Kronis (kerusakan sendi menetap)']
    },
    anamnesis: [
      'Nyeri sendi hebat mendadak (puncaknya dalam 12-24 jam)',
      'Lokasi Predileksi: Pangkal ibu jari kaki (MTP-1), pergelangan kaki, dan lutut',
      'Sendi tampak merah, bengkak, dan terasa panas',
      'Faktor Pemicu: Konsumsi jeroan, seafood, atau alkohol beberapa jam sebelumnya',
      'Nyeri sering muncul pada malam atau dini hari'
    ],
    fisik: [
      'Artritis Akut: Bengkak (edema), merah (eritema), hangat, dan nyeri tekan sangat hebat (disentuh selimut saja sakit)',
      'Tofus: Benjolan keras pada daun telinga, sikut, atau sekitar sendi (pada kasus kronis)',
      'Keterbatasan gerak sendi akibat nyeri dan bengkak'
    ],
    penunjang: [
      'Kadar Asam Urat Serum: Biasanya > 7 mg/dL (namun bisa normal saat serangan akut)',
      'Analisis Cairan Sendi (Gold Standard): Melihat kristal MSU berbentuk jarum',
      'USG Sendi / Dual Energy CT (DECT): Melihat deposit urat'
    ],
    penunjangDetail: [
      { nama: 'Kadar Asam Urat Serum', rasionalisasi: 'Membantu diagnosis, namun kadar rendah saat serangan tidak menyingkirkan gout karena urat sedang mengendap di sendi.' },
      { nama: 'Aspirasi Cairan Sendi', rasionalisasi: 'Pemeriksaan standar emas untuk menemukan kristal monosodium urat yang memiliki sifat birefringent negatif di bawah mikroskop polarisasi.' }
    ],
    diagnosis: [
      'Artritis Gout Akut'
    ],
    diagnosisBanding: ['Artritis Septik (harus disingkirkan karena gawat)', 'Pseudogout', 'Artritis Reumatoid', 'Selulitis'],
    tatalaksana: [
      { name: 'Kolkhisin', dose: '0.5 mg q8-12h', note: 'Lini pertama serangan akut' },
      { name: 'NSAID (Natrium Diklofenak)', dose: '50 mg q8-12h', note: 'Pilihan jika tidak ada kontraindikasi lambung/ginjal' },
      { name: 'Allopurinol', dose: '100 - 300 mg q24h', note: 'Profilaksis, JANGAN dimulai saat flare' }
    ],
    tatalaksanaDetail: {
      nonFarmakologi: [
        'Joint Rest: Istirahatkan sendi yang meradang, gunakan kruk jika perlu.',
        'Kompres Dingin: Aplikasi es/air dingin selama 15-20 menit beberapa kali sehari untuk kurangi bengkak.',
        'Diet Rendah Purin: Hindari jeroan (hati, ampela), seafood, daging merah, dan pemanis fruktosa.',
        'Hidrasi Adekuat: Minum air putih 2-3 liter per hari untuk bantu ekskresi asam urat.'
      ],
      farmakologi: [
        {
          title: 'Serangan Akut (Flare Management)',
          items: [
            { name: 'Colchicine', dose: 'Awal 1.2 mg, lanjut 0.6 mg setelah 1 jam', note: 'Sangat efektif bila diberikan dalam 12-24 jam pertama' },
            { name: 'NSAID (Natrium Diklofenak)', dose: '50 mg 2-3x sehari', note: 'Berikan bersama pelindung lambung jika perlu' },
            { name: 'Metilprednisolon', dose: '16 - 32 mg sehari', note: 'Pilihan jika ada kontraindikasi NSAID/Kolkhisin' }
          ]
        },
        {
          title: 'Terapi Jangka Panjang (Profilaksis)',
          items: [
            { name: 'Allopurinol', dose: 'Mulai 100 mg/hari, titrasi naik', note: 'JANGAN dimulai saat serangan akut sedang berlangsung. Beri kolkhisin dosis rendah saat memulai Allopurinol untuk cegah flare.' }
          ]
        }
      ]
    },
    edukasi: [
      'Asam urat tinggi tidak selalu berarti Gout, namun Gout hampir selalu diawali asam urat tinggi',
      'Modifikasi diet dan gaya hidup adalah kunci mencegah serangan berulang',
      'Allopurinol harus diminum rutin jangka panjang, bukan hanya saat sakit',
      'Turunkan berat badan secara bertahap jika obesitas'
    ],
    rujukan: [
      'Diagnosis meragukan (curiga artritis septik)',
      'Gout yang resisten terhadap terapi standar',
      'Pasien dengan komplikasi batu ginjal urat atau gangguan ginjal lanjut',
      'Terdapat tofus yang mengganggu fungsi sendi atau terinfeksi'
    ],
    prognosis: { vitam: 'Bonam', functionam: 'Bonam', sanationam: 'Bonam bila kadar urat terkontrol < 6 mg/dL' },
    alerts: [
      { type: 'danger', text: 'JANGAN menghentikan Allopurinol jika serangan akut muncul saat sedang mengonsumsinya. Namun, JANGAN memulai Allopurinol saat sedang serangan akut.' }
    ]
  },
  {
    id: 'obesitas',
    name: 'Obesitas',
    icpc: 'T82',
    icd: 'E66',
    level: '4A',
    cat: 'Metabolik',
    icon: '⚖️',
    iconBg: '#e2e8f0',
    preview: 'Indeks Massa Tubuh (IMT) ≥ 25 kg/m². Faktor risiko utama berbagai penyakit metabolik dan degeneratif.',
    masalah: 'Akumulasi lemak tubuh berlebih yang mengganggu kesehatan.',
    anamnesis: ['Peningkatan berat badan yang signifikan', 'Mudah lelah, sesak saat aktivitas', 'Nyeri sendi (karena beban berat)', 'Sering mengantuk di siang hari (OSAS)'],
    fisik: ['IMT ≥ 25 kg/m² (Kriteria Asia Pasifik)', 'Lingkar Pinggang: >90 cm (pria), >80 cm (wanita)', 'Acanthosis Nigricans (leher hitam) — tanda resistensi insulin'],
    penunjang: ['IMT = BB (kg) / TB² (m²)', 'Profil Lipid, Gula Darah Puasa'],
    diagnosis: ['Obesitas Grade 1 (IMT 25-29,9) atau Grade 2 (IMT ≥ 30).'],
    tatalaksana: [
      { name: 'Diet Rendah Kalori', dose: '-', note: 'Defisit 500-1000 kkal/hari' },
      { name: 'Aktivitas Fisik', dose: '150 menit/minggu', note: 'Jalan cepat, renang, atau sepeda statis' },
      { name: 'Modifikasi Perilaku', dose: '-', note: 'Konseling gizi dan manajemen makan' }
    ],
    edukasi: ['Penurunan BB 5-10% saja sudah sangat bermanfaat untuk kesehatan', 'Pilih karbohidrat kompleks dan tinggi serat', 'Batasi gorengan dan minuman manis'],
    rujukan: ['Obesitas Morbid (IMT >35) dengan komplikasi berat', 'Gagal dengan terapi non-farmakologi selama 6 bulan'],
    prognosis: { vitam: 'Menurun bila tidak terkontrol', functionam: 'Bonam', sanationam: 'Dubia' },
    alerts: [
      { type: 'ok', text: 'Target penurunan BB yang sehat adalah 0,5 - 1 kg per minggu.' }
    ]
  },
  {
    id: 'mep',
    name: 'Malnutrisi Energi Protein (KEP)',
    icpc: 'T91',
    icd: 'E40-E46',
    level: '4A',
    cat: 'Metabolik',
    icon: '🦴',
    iconBg: '#fff5f5',
    preview: 'Kondisi kurang gizi kronis atau akut pada anak. Dapat berupa Marasmus (sangat kurus) atau Kwashiorkor (bengkak).',
    masalah: 'Gangguan kesehatan akibat kekurangan asupan energi dan protein dalam jangka waktu lama.',
    anamnesis: ['Anak tampak sangat kurus atau justru bengkak di wajah/kaki', 'Nafsu makan sangat kurang', 'Sering sakit-sakitan (diare/batuk pilek)', 'Perkembangan anak terlambat'],
    fisik: ['Marasmus: wajah seperti orang tua (old man face), iga bangbang (baggy pants)', 'Kwashiorkor: edema (bengkak) pada punggung kaki/wajah, rambut jagung (mudah dicabut), crazy pavement dermatosis (kulit mengelupas)', 'Marasmic-Kwashiorkor: campuran keduanya'],
    penunjang: ['Grafik Pertumbuhan (Z-score BB/PB atau BB/TB < -3 SD)', 'Hb, Gula Darah (cek hipoglikemia)'],
    diagnosis: ['Gizi Buruk / Marasmus / Kwashiorkor.'],
    tatalaksana: [
      { name: 'F75 / F100 (Formula WHO)', dose: 'Bertahap', note: 'Hanya untuk fase stabilitas dan rehabilitasi' },
      { name: 'ReSoMal', dose: 'Oral', note: 'Rehidrasi khusus gizi buruk' },
      { name: 'Zink & Multivitamin', dose: 'q24h', note: 'Mendukung pemulihan' }
    ],
    edukasi: ['Pemberian ASI Eksklusif dan MP-ASI yang tepat', 'Kebersihan lingkungan dan air bersih', 'Pemberian makanan padat energi pasca pemulihan'],
    rujukan: ['Gizi buruk dengan komplikasi: sepsis, dehidrasi berat, syok, gagal jantung, atau anemia berat', 'Gizi buruk tanpa komplikasi yang tidak membaik di Puskesmas'],
    prognosis: { vitam: 'Dubia (risiko kematian tinggi)', functionam: 'Dubia (risiko stunting)', sanationam: 'Bonam bila tertangani dini' },
    alerts: [
      { type: 'danger', text: 'WASPADA HIPOGLIKEMIA & HIPOTERMIA pada anak gizi buruk — merupakan penyebab kematian tersering!' }
    ]
  },
  {
    id: 'keracunan_makanan',
    name: 'Keracunan Makanan (Food Poisoning)',
    icpc: 'D73',
    icd: 'A05',
    level: '4B',
    cat: 'Umum & Infeksi',
    icon: '🤢',
    iconBg: '#ffebee',
    preview: 'Mual, muntah, dan diare akut setelah mengonsumsi makanan/minuman yang terkontaminasi. Sering terjadi pada lebih dari 1 orang.',
    masalah: 'Gejala klinis yang timbul akibat menelan makanan yang mengandung racun hayati, bakteri, atau bahan kimia.',
    anamnesis: ['Mual, muntah, diare, nyeri perut mendadak', 'Riwayat makan bersama sebelumnya yang mengalami keluhan serupa', 'Waktu onset gejala (dari jam s/d hari setelah makan)'],
    fisik: ['Nyeri tekan perut', 'Tanda dehidrasi (selalu cek turgor dan kesadaran)', 'Tanda syok (nadi cepat lemah) pada kasus berat'],
    penunjang: ['Identifikasi sisa makanan (bila perlu untuk investigasi KLB)'],
    diagnosis: ['Keracunan Makanan.'],
    tatalaksana: [
      { name: 'Rehidrasi (Oralit)', dose: 'Setiap kali muntah/diare', note: 'Terapi terpenting' },
      { name: 'Karbon Aktif (Norit)', dose: '5-10 tablet', note: 'Menyerap racun dalam saluran cerna' },
      { name: 'Antiemetik (Metoclopramide)', dose: '10 mg prn', note: 'Membantu menghentikan muntah' }
    ],
    edukasi: ['Masak makanan hingga matang sempurna', 'Cuci bahan makanan dan alat masak dengan air bersih', 'Hindari makan di tempat yang kebersihan lingkungannya diragukan'],
    rujukan: ['Dehidrasi berat', 'Keracunan bahan kimia / jengkol / jamur yang menyebabkan gagal ginjal', 'Gejala neurologis (kelumpuhan/kejang)'],
    prognosis: { vitam: 'Bonam', functionam: 'Bonam', sanationam: 'Bonam' },
    alerts: [
      { type: 'warn', text: 'KERACUNAN JENGKOL bermanifestasi sebagai nyeri pinggang hebat dan sulit BAK (anuria) — RUJUK!' }
    ]
  },
  {
    id: 'dermatitis_kontak_iritan',
    name: 'Dermatitis Kontak Iritan',
    icpc: 'S88',
    icd: 'L24',
    level: '4A',
    cat: 'Dermatologi',
    icon: '🧼',
    iconBg: '#e2e8f0',
    preview: 'Peradangan kulit akibat kontak langsung dengan bahan iritan (sabun, deterjen, bahan kimia). Gejala muncul segera setelah terpapar.',
    masalah: 'Reaksi peradangan kulit non-imunologik yang disebabkan oleh pajanan bahan iritan dari luar.',
    anamnesis: ['Kulit terasa perih, panas, atau pedih', 'Riwayat kontak dengan bahan iritan (sabun cuci, pemutih, minyak tanah, debu semen)', 'Sering terjadi pada tangan (dermatitis tangan)', 'Keluhan muncul segera setelah kontak pertama (iritan kuat) atau berulang (iritan lemah)'],
    fisik: ['Kulit merah (eritema), edema, terasa kering, atau pecah-pecah (fissure)', 'Batas lesi biasanya tegas mengikuti area kontak'],
    penunjang: ['Patch Test (uji tempel) — dilakukan setelah fase akut mereda untuk menyingkirkan alergi'],
    diagnosis: ['Dermatitis Kontak Iritan Akut / Kronik.'],
    tatalaksana: [
      { name: 'Hidrokortison 2.5% (Krim)', dose: 'Oleskan 2 kali sehari', note: 'Kortikosteroid potensi rendah-sedang' },
      { name: 'Pelembap (Emolien)', dose: 'Sering digunakan', note: 'Memperbaiki sawar kulit yang rusak' },
      { name: 'Cetirizine', dose: '10 mg q24h', note: 'Meredakan rasa tidak nyaman' }
    ],
    edukasi: ['HINDARI kontak dengan bahan iritan pemicu', 'Gunakan sarung tangan atau alat pelindung saat bekerja', 'Ganti sabun mandi dengan yang lebih lembut (pH balanced)', 'Segera cuci area yang terkena zat kimia dengan air mengalir'],
    rujukan: ['Lesi luas (>20% luas tubuh)', 'Keluhan tidak membaik dengan pengobatan standar 2 minggu'],
    prognosis: { vitam: 'Bonam', functionam: 'Bonam', sanationam: 'Bonam bila pemicu dihindari' },
    alerts: [
      { type: 'ok', text: 'Kunci pengobatan adalah ELIMINASI bahan iritan dari aktivitas sehari-hari.' }
    ]
  },
  {
    id: 'dermatitis_kontak_alergi',
    name: 'Dermatitis Kontak Alergi',
    icpc: 'S88',
    icd: 'L23',
    level: '4A',
    cat: 'Dermatologi',
    icon: '💍',
    iconBg: '#fffaced',
    preview: 'Reaksi alergi kulit setelah kontak dengan bahan tertentu (logam, kosmetik, karet). Gejala biasanya muncul 24-48 jam setelah terpapar.',
    masalah: 'Reaksi peradangan kulit tipe lambat (Tipe IV) akibat sensitivitas terhadap bahan alergen.',
    anamnesis: ['Gatal yang sangat hebat', 'Riwayat kontak dengan bahan tertentu (perhiasan logam/nikel, jam tangan, karet sandal, cat rambut, kosmetik)', 'Lokasi lesi sesuai area kontak (misal: di telinga karena anting, di perut karena ikat pinggang)'],
    fisik: ['Eritema (merah), papul, vesikel (bintil air) yang sering pecah dan basah (eksudasi)', 'Batas lesi tegas, kadang meluas sedikit dari area kontak'],
    penunjang: ['Patch Test (Uji Tempel): Standar emas untuk identifikasi alergen'],
    diagnosis: ['Dermatitis Kontak Alergi.'],
    tatalaksana: [
      { name: 'Desoximetasone (Krim)', dose: 'Oleskan 2 kali sehari', note: 'Kortikosteroid potensi sedang-kuat' },
      { name: 'Cetirizine', dose: '10 mg q24h', note: 'Antihistamin untuk kurangi gatal' },
      { name: 'Kompres NaCl 0.9%', dose: '3 kali sehari 15 menit', note: 'Bila lesi dalam fase basah/eksudatif' }
    ],
    edukasi: ['Identifikasi dan hindari alergen penyebab seumur hidup', 'Hati-hati saat mencoba kosmetik atau produk kulit baru', 'Reaksi bisa muncul lebih berat pada pajanan berikutnya'],
    rujukan: ['Untuk pemeriksaan Patch Test', 'Keluhan berat atau melibatkan area wajah/alat kelamin'],
    prognosis: { vitam: 'Bonam', functionam: 'Bonam', sanationam: 'Dubia (kambuh bila kontak lagi)' },
    alerts: [
      { type: 'warn', text: 'Reaksi alergi pada kulit seringkali baru mulai terasa GATAL HEBAT setelah 1-2 hari terpapar bahan pemicu.' }
    ]
  },
  {
    id: 'liken_simpleks_kronis',
    name: 'Liken Simpleks Kronis (Neurodermatitis)',
    icpc: 'S92',
    icd: 'L28.0',
    level: '4A',
    cat: 'Dermatologi',
    icon: '🖐️',
    iconBg: '#e2e8f0',
    preview: 'Kulit menebal dan kasar (likenifikasi) akibat garukan kronis. Sering dipicu oleh stres dan siklus gatal-garuk.',
    masalah: 'Peradangan kulit kronis ditandai dengan penebalan kulit akibat garukan berulang.',
    anamnesis: ['Gatal yang sangat hebat, terutama saat santai atau stres', 'Riwayat sering menggaruk area yang sama dalam waktu lama', 'Lokasi tersering: tengkuk, punggung kaki, pergelangan tangan'],
    fisik: ['Likenifikasi: penebalan kulit dengan garis-garis kulit yang tampak sangat jelas (seperti kulit gajah)', 'Warna kulit nampak lebih gelap (hiperpigmentasi)', 'Terlihat bekas garukan'],
    penunjang: ['Klinis utama'],
    diagnosis: ['Liken Simpleks Kronis.'],
    tatalaksana: [
      { name: 'Betamethasone 0.1% (Salep)', dose: 'Oleskan 2 kali sehari', note: 'Kortikosteroid potensi kuat agar bisa menembus kulit tebal' },
      { name: 'Cetirizine', dose: '10 mg q24h', note: 'Membantu memutus siklus gatal' },
      { name: 'Karet / Verban Inklusif', dose: '-', note: 'Kadang diperlukan untuk mencegah garukan langsung' }
    ],
    edukasi: ['HENTIKAN GARUKAN! Garukan adalah penyebab utama penyakit ini', 'Kelola stres dan cemas', 'Potong kuku pendek'],
    rujukan: ['Lesi tidak membaik dengan salep kortikosteroid potensi kuat', 'Membutuhkan injeksi kortikosteroid intralesi'],
    prognosis: { vitam: 'Bonam', functionam: 'Bonam', sanationam: 'Dubia (sering kambuh bila stres)' },
    alerts: [
      { type: 'warn', text: 'Siklus "Gatal-Garuk" harus diputus agar kulit bisa kembali normal.' }
    ]
  },
  {
    id: 'acne_vulgaris',
    name: 'Acne Vulgaris (Jerawat)',
    icpc: 'S96',
    icd: 'L70.0',
    level: '4A',
    cat: 'Dermatologi',
    icon: '🧴',
    iconBg: '#fff5f5',
    preview: 'Peradangan kelenjar lemak yang ditandai dengan komedo, papul, atau pustul. Sering muncul di wajah, dada, dan punggung.',
    masalah: 'Penyakit peradangan kronis pada unit pilosebasea yang sangat umum pada remaja.',
    anamnesis: ['Bintil-bintil di wajah yang kadang nyeri', 'Sering muncul saat pubertas, menjelang haid, atau saat stres', 'Riwayat penggunaan kosmetik berminyak'],
    fisik: ['Komedo (terbuka/tertutup) — syarat diagnosis akne', 'Papul (bintil merah), Pustul (bintil bernanah)', 'Nodul atau Kista pada kasus berat', 'Jaringan parut (scars) bekas jerawat'],
    penunjang: ['Klinis utama'],
    diagnosis: ['Acne Vulgaris (Ringan, Sedang, atau Berat).'],
    tatalaksana: [
      { name: 'Benzoyl Peroxide 2.5-5%', dose: 'Oleskan 1-2 kali sehari', note: 'Antibakteri topikal' },
      { name: 'Tretinoin 0.025% (Krim)', dose: 'Oleskan MALAM HARI saja', note: 'Retinoid topikal, membantu bersihkan komedo' },
      { name: 'Doxycycline', dose: '100 mg q24h', note: 'Antibiotik oral, hanya untuk akne sedang-berat minimal 4-6 minggu' }
    ],
    edukasi: ['Jangan memencet jerawat (risiko infeksi dan bekas permanen)', 'Cuci wajah 2 kali sehari dengan sabun lembut', 'Pilih kosmetik "non-comedogenic"', 'Diet rendah gula dan lemak (masih diperdebatkan tapi dianjurkan)'],
    rujukan: ['Akne kistik atau konglobata (sangat berat)', 'Gagal dengan terapi standar dalam 3 bulan', 'Menyebabkan gangguan psikologis hebat'],
    prognosis: { vitam: 'Bonam', functionam: 'Bonam', sanationam: 'Bonam dengan perawatan rutin' },
    alerts: [
      { type: 'danger', text: 'Retinoid topikal (Tretinoin) dilarang keras untuk ibu hamil karena risiko cacat janin (teratogenik)!' }
    ]
  },
  {
    id: 'urtikaria',
    name: 'Urtikaria (Biduran)',
    externalUrl: 'https://www.alomedika.com/penyakit/dermatovenereologi/urtikaria',
    icpc: 'S98',
    icd: 'L50',
    level: '4A',
    cat: 'Dermatologi',
    icon: '🧴',
    iconBg: '#fff1f0',
    preview: 'Bercak merah yang menimbul dan sangat gatal. Lesi bisa menghilang dalam 24 jam dan muncul di tempat lain.',
    masalah: 'Reaksi vaskular pada kulit ditandai dengan edema setempat yang cepat muncul dan menghilang.',
    overview: {
      etiologi: 'Pelepasan mediator kimiawi (terutama Histamin) dari sel mast kulit. Pemicu meliputi: 1) Makanan (telur, udang, kacang), 2) Obat (NSAID, Penisilin), 3) Kontak Fisik (dingin, tekanan, panas), 4) Infeksi fokal.',
      epidemiologi: 'Terjadi pada sekitar 20% populasi setidaknya sekali seumur hidup. Lebih sering pada wanita dan penderita atopi.',
      patofisiologi: 'Histamin yang dilepaskan meningkatkan permeabilitas vaskular di dermis, menyebabkan cairan merembes ke jaringan sekitarnya (Edema lokal). Stimulasi ujung saraf oleh histamin juga memicu rasa gatal (Pruritus) dan kemerahan (Aksos refleks vaskular). Karakteristik utamanya adalah "Transient": satu bendungan biasanya hilang dakam 24 jam tanpa bekas.',
      komplikasi: ['Angioedema (pembengkakan jaringan dalam yang menyakitkan)', 'Anafilaksis (kegagalan sirkulasi dan napas)', 'Gangguan kualitas tidur akibat gatal kronis']
    },
    anamnesis: ['Bentol-bentol merah (kaligata)', 'Gatal hebat, rasa panas atau menyengat', 'Riwayat pajanan pemicu: makanan (seafood, telur), obat, udara dingin, stres, gigitan serangga', 'Lesi berpindah-pindah tempat'],
    fisik: ['Urtika: edema (bengkak) berbatas tegas, warna merah (eritema) atau lebih pucat dari kulit sekitar', 'Uji Dermografisme positif (pada urtikaria fisik)'],
    penunjang: ['Pemeriksaan kadar IgE total atau Skin Prick Test (bila kronis)'],
    penunjangDetail: [
      { nama: 'Darah Lengkap (Eosinofil)', rasionalisasi: 'Mencari tanda atopi atau infeksi parasit yang mungkin menjadi pemicu urtikaria kronik.' },
      { nama: 'Skin Prick Test (Tes Tusuk Kulit)', rasionalisasi: 'Gold standard identifikasi alergen spesifik (bukan dilakukan di fase akut).' }
    ],
    diagnosis: ['Urtikaria Akut (<6 minggu) atau Kronis.'],
    diagnosisBanding: ['Dermatitis Kontak (Ruam biasanya menetap, bersisik, dan sesuai area kontak)', 'Gigitan Serangga (Biasa ditemukan titik gigitan / punctum di tengah, gatal menetap berhari-hari)', 'Eritema Multiforme (Lesi target / targetoid lesion, biasanya lebih persisten)'],
    tatalaksana: [
      { name: 'Cetirizine', dose: '10 mg q24h', note: 'Antihistamin lini pertama' },
      { name: 'Loratadine', dose: '10 mg q24h', note: 'Antihistamin non-sedatif' },
      { name: 'Prednison', dose: '20-40 mg (tapering off)', note: 'Hanya jangka pendek bila gejala sangat berat' }
    ],
    tatalaksanaDetail: {
      nonFarmakologi: [
        'Identifikasi dan hindari faktor pencetus (E-Diary makanan/kegiatan)',
        'Gunakan pakaian longgar dan berbahan sejuk (katun)',
        'Kompres dingin untuk mengurangi rasa gatal',
        'Managemen stres'
      ],
      farmakologi: [
        {
          title: 'Antihistamin (Lini Pertama)',
          items: [
            { name: 'Cetirizine', dose: '10 mg (1x sehari)', note: 'Antihistamin Generasi 2 (Non-sedatif/Minim kantuk)' },
            { name: 'Loratadine', dose: '10 mg (1x sehari)', note: 'Alternatif jika cetirizine kurang cocok' }
          ]
        },
        {
          title: 'Terapi Adjuvan (Kasus Berat)',
          items: [
            { name: 'Dexamethasone / Prednisone', dose: '20 mg (tapering off)', note: 'HANYA untuk urtikaria berat yang mengganggu atau disertai gejala jalan napas' }
          ]
        }
      ]
    },
    edukasi: ['Identifikasi dan hindari pencetus', 'Segera ke Puskesmas/RS bila bengkak pada bibir atau sulit napas', 'Gunakan baju yang longgar dan tidak panas'],
    rujukan: ['Angioedema (bengkak bibir/kelopak mata)', 'Urtikaria kronik yang sulit dikontrol'],
    prognosis: { vitam: 'Bonam', functionam: 'Bonam', sanationam: 'Bonam bila pemicu dihindari' },
    alerts: [
      { type: 'danger', text: 'Waspadai kemungkinan ANAFILAKSIS: Urtikaria disertai sesak napas, bunyi mengi (wheezing), atau pingsan — DARURAT!' }
    ]
  },
  {
    id: 'hordeolum',
    name: 'Hordeolum',
    externalUrl: 'https://www.alomedika.com/penyakit/oftalmologi/hordeolum',
    icpc: 'F72',
    icd: 'H00.0',
    level: '4A',
    cat: 'Mata',
    icon: '👁️',
    iconBg: '#e0f2f1',
    preview: 'Infeksi supuratif akut pada kelenjar kelopak mata. Menimbulkan benjolan merah, hangat, dan nyeri tekan (seperti jerawat di kelopak mata).',
    masalah: 'Infeksi bakteri (seringkali Staphylococcus aureus) pada kelenjar Zeis/Moll (Hordeolum Eksternum) atau kelenjar Meibom (Hordeolum Internum). Kondisi ini sangat umum dan sering disebabkan oleh kurangnya kebersihan tangan.',
    overview: {
      etiologi: 'Staphylococcus aureus merupakan penyebab pada 90-95% kasus.',
      epidemiologi: 'Sangat umum dijumpai pada semua usia. Prevalensi meningkat pada pasien dengan blefaritis kronis, dermatitis seboroik, atau rosacea.',
      patofisiologi: 'Obstruksi pada muara kelenjar kelopak mata menyebabkan stasis sekret, yang kemudian diikuti oleh kolonisasi dan infeksi bakteri, memicu respon peradangan akut dan pembentukan abses kecil.',
      komplikasi: ['Kalazion (inflamasi granulomatosa kronis)', 'Selulitis Preseptal (infeksi meluas ke jaringan lunak kelopak)', 'Abses palpebra']
    },
    anamnesis: [
      'Benjolan pada kelopak mata atas atau bawah',
      'Nyeri tajam, rasa panas, dan bengkak pada area benjolan',
      'Rasa mengganjal saat berkedip',
      'Mata merah dan sering berair (lakrimasi)',
      'Kadang ada riwayat sering berganti-ganti kosmetik mata atau jarang mencuci muka'
    ],
    fisik: [
      'Nodul eritem (benjolan merah) fokal pada palpebra',
      'Nyeri tekan (+) — Point of tenderness yang jelas',
      'Tampak bintik kuning (pustul/pus) di puncak benjolan (pointing)',
      'Hordeolum Eksternum: Penonjolan ke arah kulit margo palpebra',
      'Hordeolum Internum: Penonjolan ke arah konjungtiva palpebra (perlu eversi kelopak)'
    ],
    penunjang: [
      'Diagnosis klinis murni',
      'Kultur pus (hanya jika infeksi rekuren atau tidak respons terapi)'
    ],
    penunjangDetail: [
      { nama: 'Pemeriksaan Klinis', rasionalisasi: 'Mata merah dengan benjolan nyeri tekan adalah tanda kardinal hordeolum yang membedakannya dari kalazion (tidak nyeri).' }
    ],
    diagnosis: [
      'Hordeolum Eksternum',
      'Hordeolum Internum'
    ],
    diagnosisBanding: ['Kalazion (benjolan TIDAK NYERI, kronis)', 'Blefaritis', 'Selulitis Preseptal (bengkak seluruh mata, demam)', 'Karsinoma sel sebasea (pada lansia, benjolan tidak sembuh-sembuh)'],
    tatalaksana: [
      { name: 'Kompres Hangat', dose: '10-15 menit (4x sehari)', note: 'Tindakan paling krusial untuk melunakkan pus' },
      { name: 'Chloramphenicol / Gentamicin Salep Mata', dose: 'Oleskan q8h', note: 'Antibiotik topikal untuk eradikasi bakteri' },
      { name: 'Eritromisin Oral', dose: '250-500 mg q6h', note: 'Diberikan bila ada selulitis atau rekurensi luas' }
    ],
    tatalaksanaDetail: {
      nonFarmakologi: [
        'Kompres Hangat: Gunakan kain bersih atau kasa yang dibasahi air hangat (bukan panas). Lakukan sesering mungkin untuk mempercepat pecahnya abses secara alami.',
        'Lid Hygiene: Bersihkan tepi kelopak mata dari kerak.',
        'Hentikan penggunaan lensa kontak sementara.',
        'Hentikan penggunaan make-up mata (eyeliner, maskara) sampai sembuh total.',
        'Jangan pernah memencet benjolan secara paksa.'
      ],
      farmakologi: [
        {
          title: 'Antibiotik Topikal',
          items: [
            { name: 'Oxytetracycline / Chloramphenicol Salep Mata', dose: 'Oleskan pada area benjolan', note: 'Gunakan selama 7 hari' }
          ]
        },
        {
          title: 'Analgetik',
          items: [
            { name: 'Paracetamol / Ibuprofen', dose: '500 mg prn', note: 'Bila nyeri sangat mengganggu' }
          ]
        }
      ]
    },
    edukasi: [
      'Jangan memencet "bintitan" sendiri karena kuman bisa masuk ke aliran darah otak',
      'Biasakan cuci tangan sebelum menyentuh area mata',
      'Bersihkan make-up mata secara tuntas sebelum tidur',
      'Ganti handuk dan sarung bantal secara rutin untuk mencegah penularan ke mata sebelah'
    ],
    rujukan: [
      'Hordeolum tidak pecah atau mengempis setelah 2 minggu (perlu insisi oleh spesialis)',
      'Benjolan sangat besar hingga menutupi penglihatan',
      'Tanda selulitis preseptal: bengkak meluas ke seluruh kelopak mata, nyeri hebat, atau demam'
    ],
    prognosis: { vitam: 'Bonam', functionam: 'Bonam', sanationam: 'Bonam (namun sering residif)' },
    alerts: [
      { type: 'ok', text: 'Kompres hangat sesering mungkin adalah kunci agar bintitan cepat pecah dan sembuh.' },
      { type: 'warn', text: 'Hordeolum yang tidak ditangani dengan benar dapat menjadi benjolan keras yang permanen (Kalazion).' }
    ]
  },
  {
    id: 'dry_eye',
    name: 'Mata Kering (Dry Eye Syndrome)',
    icpc: 'F99',
    icd: 'H04.1',
    level: '4A',
    cat: 'Mata',
    icon: '👁️',
    iconBg: '#e0f7fa',
    preview: 'Mata terasa berpasir, merah, dan pedih akibat kurangnya produksi air mata. Sering pada pengguna gadget lama.',
    masalah: 'Gangguan lapisan air mata yang menyebabkan ketidaknyamanan pada permukaan mata.',
    anamnesis: ['Rasa berpasir atau mengganjal', 'Mata merah dan pedih (seperti terbakar)', 'Mata cepat lelah', 'Penglihatan kadang kabur yang membaik saat berkedip', 'Riwayat penggunaan gadget lama atau berada di ruangan ber-AC'],
    fisik: ['Injeksi konjungtiva ringan', 'Sekret mukus yang kental / berbuih di forniks'],
    penunjang: ['Schirmer Test (uji produksi air mata)'],
    diagnosis: ['Dry Eye Syndrome / Keratokonjungtivitis Sikca.'],
    tatalaksana: [
      { name: 'Artificial Tears (Air Mata Buatan)', dose: '1 tetes q4-6h prn', note: 'Lubrikan mata utama' },
      { name: 'Modifikasi Lingkungan', dose: '-', note: 'Kurangi durasi screen time' }
    ],
    edukasi: ['Terapkan aturan 20-20-20: setiap 20 menit menatap layar, lihat sejauh 20 kaki selama 20 detik', 'Sering berkedip saat menatap layar', 'Hindari paparan langsung AC atau kipas angin ke wajah'],
    rujukan: ['Gejala menetap meski sudah dikelola', 'Dicurigai terkait penyakit sistemik (Sjogren Syndrome)'],
    prognosis: { vitam: 'Bonam', functionam: 'Bonam', sanationam: 'Dubia (kronis)' },
    alerts: [
      { type: 'ok', text: 'Mata kering kronis bila dibiarkan dapat menyebabkan luka kecil pada kornea (keratitis).' }
    ]
  },
  {
    id: 'hiperemesis_gravidarum',
    name: 'Hiperemesis Gravidarum',
    icpc: 'W05',
    icd: 'O21.0',
    level: '4A',
    cat: 'Obsgin',
    icon: '🤢',
    iconBg: '#fce4ec',
    preview: 'Mual muntah berlebihan pada awal kehamilan yang menyebabkan penurunan berat badan dan gangguan elektrolit.',
    masalah: 'Mual muntah hebat pada awal kehamilan yang mengganggu aktivitas sehari-hari dan status nutrisi.',
    anamnesis: ['Muntah terus menerus (>5-10 kali sehari)', 'Nafsu makan hilang sama sekali', 'Nyeri ulu hati', 'Berat badan turun drastis (biasanya >5% BB awal)', 'Riwayat mual muntah pada kehamilan sebelumnya'],
    fisik: ['Turgor kulit menurun (tanda dehidrasi)', 'Mata cekung', 'Lidah kering', 'Nadi cepat dan lemah', 'Bau keton pada napas'],
    penunjang: ['Urin Lengkap: ditemukan Aseton/Keton (+) — kunci diagnosis', 'Tes Kehamilan: Konfirmasi kehamilan'],
    diagnosis: ['Hiperemesis Gravidarum (Tingkat I, II, atau III).'],
    tatalaksana: [
      { name: 'Ondansetron', dose: '4-8 mg q8h', note: 'Pilihan utama bila mual muntah berat' },
      { name: 'Vitamin B6 (Pyridoxine)', dose: '10-25 mg q8h', note: 'Lini pertama manajemen mual' },
      { name: 'Cairan IV (Infus)', dose: 'RL / D5%', note: 'Bila ada tanda dehidrasi sedang-berat' }
    ],
    edukasi: ['Makan porsi kecil tapi sering (per 2-3 jam)', 'Makan makanan kering (biskuit, roti) di pagi hari sebelum beranjak dari tempat tidur', 'Hindari makanan berlemak, pedas, dan berbau tajam', 'Minum air jahe hangat'],
    rujukan: ['Muntah tidak berhenti dengan obat oral', 'Ketosis (Keton urin ≥ 2+)', 'Icterus (kuning)', 'Gangguan kesadaran'],
    prognosis: { vitam: 'Bonam', functionam: 'Bonam', sanationam: 'Bonam setelah trimester 1' },
    alerts: [
      { type: 'warn', text: 'Hati-hati kekurangan Vitamin B1 (Tiamin) — risiko Ensefalopati Wernicke pada kasus muntah sangat hebat.' }
    ]
  },
  {
    id: 'anemia_kehamilan',
    name: 'Anemia dalam Kehamilan',
    icpc: 'W15',
    icd: 'O99.0',
    level: '4A',
    cat: 'Obsgin',
    icon: '🩸',
    iconBg: '#ffebee',
    preview: 'Kadar Hemoglobin (Hb) < 11 g/dL pada ibu hamil. Dapat menyebabkan keguguran, BBLR, atau perdarahan pasca salin.',
    masalah: 'Kekurangan sel darah merah atau hemoglobin pada masa gestasi.',
    anamnesis: ['Lemas, letih, lesu, lunglai', 'Sering pusing atau mata berkunang-kunang', 'Sesak napas saat aktivitas ringan', 'Riwayat kurang asupan zat besi'],
    fisik: ['Konjungtiva palpebra pucat', 'Telapak tangan pucat', 'Takikardia (nadi cepat)'],
    penunjang: ['Pemeriksaan Hb: < 11 g/dL (Trimester I & III) atau < 10.5 g/dL (Trimester II)'],
    diagnosis: ['Anemia Defisiensi Besi dalam Kehamilan.'],
    tatalaksana: [
      { name: 'Tablet Tambah Darah (TTD)', dose: '1 tablet q24h', note: 'Mengandung 60 mg besi elemental & 0.4 mg asam folat' },
      { name: 'Vitamin C', dose: '50-100 mg', note: 'Meningkatkan penyerapan zat besi' },
      { name: 'Diet Tinggi Besi', dose: '-', note: 'Daging merah, hati ayam, bayam' }
    ],
    edukasi: ['Minum TTD dengan air putih atau jus buah, JANGAN dengan teh/kopi/susu', 'Minum TTD di malam hari sebelum tidur untuk kurangi mual', 'Edukasi pentingnya ANC rutin'],
    rujukan: ['Hb < 8 g/dL (Anemia Berat)', 'Anemia yang tidak membaik dengan suplementasi besi dalam 1 bulan'],
    prognosis: { vitam: 'Bonam', functionam: 'Bonam', sanationam: 'Bonam dengan suplementasi tepat' },
    alerts: [
      { type: 'ok', text: 'Ibu hamil dianjurkan minum minimal 90 tablet tambah darah selama masa kehamilan.' }
    ]
  },
  {
    id: 'mastitis',
    name: 'Mastitis',
    icpc: 'W94',
    icd: 'N61',
    level: '4A',
    cat: 'Obsgin',
    icon: '🍼',
    iconBg: '#fce4ec',
    preview: 'Infeksi payudara pada ibu yang sedang menyusui. Payudara terasa bengkak, merah, nyeri, dan ibu sering mengalami demam.',
    masalah: 'Peradangan pada jaringan payudara yang sering melibatkan infeksi bakteri (S. aureus).',
    anamnesis: ['Payudara bengkak, nyeri, dan terasa panas', 'Ibu mengalami demam (>38.5°C) dan menggigil', 'Rasa tidak enak badan (malaise) seperti flu'],
    fisik: ['Payudara eritema (merah), bengkak, dan ada area yang indurasi (keras)', 'Nyeri tekan positif hebat', 'Demam'],
    penunjang: ['Klinis utama'],
    diagnosis: ['Mastitis Laktasional.'],
    tatalaksana: [
      { name: 'Cloxacillin / Dicloxacillin', dose: '500 mg q6h selama 10-14 hari', note: 'Antibiotik pilihan' },
      { name: 'Paracetamol', dose: '500 mg q6-8h', note: 'Meredakan nyeri dan demam' },
      { name: 'Kompres Hangat', dose: '-', note: 'Membantu pengosongan payudara' }
    ],
    edukasi: ['TETAP MENYUSUI dari payudara yang terkena (ASI aman untuk bayi)', 'Pastikan teknik menyusui benar (pelekatan)', 'Kosongkan payudara sesering mungkin (pompa bila perlu)', 'Istirahat cukup dan minum banyak cairan'],
    rujukan: ['Terbentuk abses (teraba fluktuasi/cairan di dalam)', 'Tidak ada perbaikan dalam 48 jam dengan antibiotik'],
    prognosis: { vitam: 'Bonam', functionam: 'Bonam', sanationam: 'Bonam' },
    alerts: [
      { type: 'warn', text: 'Jangan berhenti menyusui secara mendadak saat mastitis karena dapat memperburuk kondisi bendungan ASI.' }
    ]
  },
  {
    id: 'gastroenteritis_pediatrik',
    name: 'Diare Akut pada Anak',
    icpc: 'D70',
    icd: 'A09',
    level: '4A',
    cat: 'Pediatri',
    icon: '👶',
    iconBg: '#e0f2f1',
    preview: 'BAB cair lebih dari 3 kali sehari pada anak. Fokus utama adalah mencegah dan mengatasi dehidrasi.',
    masalah: 'Infeksi atau gangguan saluran cerna yang menyebabkan peningkatan frekuensi BAB pada anak.',
    anamnesis: ['BAB cair berulangkali', 'Anak rewel atau lemas', 'Muntah', 'Rasa haus meningkat atau anak sulit minum', 'Buang air kecil (BAK) berkurang'],
    fisik: ['Kesadaran: Sadar, Gelisah, atau Letargi/Koma', 'Mata Cekung', 'Turgor (cubitan kulit perut) kembali lambat / sangat lambat', 'Nadi cepat (takikardia)'],
    penunjang: ['Makroskopis Feses (cek lendir/darah)', 'Mikroskopis Feses (bila dicurigai parasit/bakteri)'],
    diagnosis: ['Diare Akut tanpa Dehidrasi / Dehidrasi Ringan-Sedang / Dehidrasi Berat.'],
    tatalaksana: [
      { name: 'Oralit (Zat Zinc)', dose: '10-20 mg q24h (10 hari)', note: ' Zinc wajib diberikan untuk semua diare anak' },
      { name: 'Lanjutkan ASI & Makan', dose: '-', note: 'Jangan puasakan anak' },
      { name: 'Oralit', dose: '75 ml/kgBB dalam 3 jam', note: 'Untuk Dehidrasi Ringan-Sedang (Rencana B)' }
    ],
    edukasi: ['Segera bawa ke dokter bila diare semakin sering, muntah berulang, anak tidak mau minum, atau BAK sedikit', 'Pentingnya kebersihan tangan dan makanan', 'Jangan berikan obat anti-diare / Loperamide pada anak'],
    rujukan: ['Diare Dehidrasi Berat (Syok)', 'Diare Persisten (>14 hari)', 'Diare disertai darah masif atau malnutrisi'],
    prognosis: { vitam: 'Bonam (bila dehidrasi tertangani)', functionam: 'Bonam', sanationam: 'Bonam' },
    alerts: [
      { type: 'danger', text: 'Pemberian Zink selama 10 hari TETAP dilanjutkan meskipun diare sudah berhenti.' }
    ]
  },
  {
    id: 'konjungtivitis_alergi',
    name: 'Konjungtivitis Alergi',
    icpc: 'F71',
    icd: 'H10.1',
    level: '4A',
    cat: 'Mata',
    icon: '👁️',
    iconBg: '#fffaced',
    preview: 'Mata gatal, merah, dan berair akibat reaksi alergi terhadap debu, serbuk sari, atau bulu hewan.',
    masalah: 'Peradangan konjungtiva akibat reaksi hipersensitivitas tipe I.',
    anamnesis: ['GATAL adalah keluhan utama', 'Mata merah, berair (epifora)', 'Kedua mata biasanya terkena', 'Riwayat atopi (asma/bersin pagi hari)', 'Rasa mengganjal tapi tidak terlalu nyeri'],
    fisik: ['Injeksi konjungtiva (merah muda/pink)', 'Kemosis (konjungtiva bengkak seperti agar-agar)', 'Papul pada konjungtiva palpebra (Cobblestone) pada kasus berat / Vernal'],
    penunjang: ['Eosinofil pada pemeriksaan sekret mata (jarang diperlukan)'],
    diagnosis: ['Konjungtivitis Alergi.'],
    tatalaksana: [
      { name: 'Antihistamin (Tetes Mata)', dose: '1 tetes q8-12h', note: 'Lini pertama' },
      { name: 'Artificial Tears', dose: '1 tetes prn', note: 'Membantu mencuci alergen dari mata' },
      { name: 'Cetirizine / Loratadine', dose: '10 mg q24h', note: 'Antihistamin oral bila gatal sistemik' }
    ],
    edukasi: ['Identifikasi dan hindari pemicu alergi', 'Jangan mengucek mata (dapat perparah bengkak)', 'Kompres dingin pada mata untuk kurangi gatal'],
    rujukan: ['Gejala menetap atau penglihatan menurun', 'Curiga Konjungtivitis Vernal yang membutuhkan steroid topikal'],
    prognosis: { vitam: 'Bonam', functionam: 'Bonam', sanationam: 'Dubia (residif)' },
    alerts: [
      { type: 'ok', text: 'Gatal yang hebat adalah ciri khas yang membedakan alergi dari infeksi bakteri/viral.' }
    ]
  },
  {
    id: 'candidiasis_vaginalis',
    name: 'Kandidiasis Vulvovaginal',
    icpc: 'X72',
    icd: 'B37.3',
    level: '4A',
    cat: 'Obsgin',
    icon: '🥛',
    iconBg: '#fce4ec',
    preview: 'Keputihan gumpal seperti susu basi/keju dan sangat gatal. Sering pada ibu hamil, pengguna steroid, atau penderita diabetes.',
    masalah: 'Infeksi jamur Candida sp. pada area vagina dan vulva.',
    anamnesis: ['Keputihan yang sangat gatal', 'Keputihan kental, putih, menggumpal (seperti keju/curded milk)', 'Rasa panas atau perih setelah BAK atau bersenggama'],
    fisik: ['Vulva dan vagina tampak eritema (merah) dan edema', 'Ditemukan "Cottage cheese-like discharge" pada dinding vagina', 'Kadang ada luka lecet bekas garukan'],
    penunjang: ['KOH 10%: ditemukan Pseudohifa dan blastospora'],
    diagnosis: ['Kandidiasis Vulvovaginalis.'],
    tatalaksana: [
      { name: 'Fluconazole', dose: '150 mg (Dosis Tunggal)', note: 'Pilihan oral yang praktis' },
      { name: 'Nystatin (Vaginal Tablet)', dose: '100.000 IU q24h (7 hari)', note: 'Dimasukkan ke dalam vagina, pilihan aman untuk Bumil' },
      { name: 'Miconazole (Krim)', dose: 'Oleskan 2 kali sehari', note: 'Untuk meredakan gatal pada area luar/vulva' }
    ],
    edukasi: ['Jaga area kewanitaan tetap kering dan tidak lembap', 'Gunakan pakaian dalam bahan katun, jangan terlalu ketat', 'Basuh dari arah depan ke belakang setelah BAK/BAB', 'Kontrol kadar gula darah bagi penderita DM'],
    rujukan: ['Kandidiasis berulang (recurrent) >4 kali setahun', 'Tidak membaik dengan terapi standar'],
    prognosis: { vitam: 'Bonam', functionam: 'Bonam', sanationam: 'Bonam' },
    alerts: [
      { type: 'ok', text: 'Pasangan seksual tidak perlu diobati secara rutin kecuali ada gejala balanitis jamur.' }
    ]
  },
  {
    id: 'gonore',
    name: 'Gonore (Kencing Nanah)',
    icpc: 'Y71',
    icd: 'A54.9',
    level: '4A',
    cat: 'Urologi & Nefrologi',
    icon: '💧',
    iconBg: '#ffebee',
    preview: 'Keluar nanah dari saluran kencing disertai rasa nyeri saat BAK. Termasuk Infeksi Menular Seksual (IMS).',
    masalah: 'Infeksi bakteri Neisseria gonorrhoeae pada saluran urogenital.',
    anamnesis: ['Keluar nanah dari lubang kencing (urethral discharge)', 'Nyeri saat buang air kecil (disuria)', 'Ujung penis tampak merah dan bengkak', 'Riwayat hubungan seksual berisiko (berganti pasangan/tanpa pengaman)'],
    fisik: ['Oue (lubang penis) tampak udem dan kemerahan', 'Tampak Duh tubuh mukopurulen (nanah kental kuning/hijau) keluar dari uretra'],
    penunjang: ['Pewarnaan Gram: ditemukan Diplokokus Gram Negatif (biji kopi) di dalam sel polimorfonuklear (inklusif intra-seluler)'],
    diagnosis: ['Uretritis Gonore / Servisitis Gonore.'],
    tatalaksana: [
      { name: 'Cefixime', dose: '400 mg (Dosis Tunggal)', note: 'Lini pertama antibiotik oral' },
      { name: 'Azithromycin', dose: '1 g (Dosis Tunggal)', note: 'Wajib diberikan untuk terapi koinfeksi Chlamydia' },
      { name: 'Ceftriaxone', dose: '250 mg (Injeksi IM)', note: 'Alternatif dosis tunggal' }
    ],
    edukasi: ['Obati juga pasangan seksual (partner notification)', 'Abstinensia (jangan berhubungan seks) sampai pengobatan tuntas', 'Gunakan kondom sebagai pencegahan IMS'],
    rujukan: ['Komplikasi: Prostatitis, Orkitis (testis bengkak), Bartholinitis, PID (penyakit radang panggul)'],
    prognosis: { vitam: 'Bonam', functionam: 'Bonam', sanationam: 'Bonam' },
    alerts: [
      { type: 'danger', text: 'Wajib memberikan terapi ganda (DUAL THERAPY) untuk Gonore + Chlamydia secara bersamaan!' }
    ]
  },
  {
    id: 'pediculosis_capitis',
    name: 'Pedikulosis Kapitis (Kutu Rambut)',
    icpc: 'S73',
    icd: 'B85.0',
    level: '4A',
    cat: 'Dermatologi',
    icon: '💇',
    iconBg: '#e2e8f0',
    preview: 'Gatal hebat di kulit kepala akibat infestasi kutu rambut. Sering menyerang anak sekolah dan menular cepat.',
    masalah: 'Infestasi kulit kepala dan rambut oleh Pediculus humanus capitis.',
    anamnesis: ['Gatal hebat pada kulit kepala, terutama di belakang telinga dan tengkuk', 'Riwayat keluarga atau teman sekolah dengan keluhan serupa', 'Terasa ada yang berjalan di kulit kepala'],
    fisik: ['Ditemukan telur kutu (nits) yang melekat erat pada batang rambut (warna putih abu-abu)', 'Terlihat kutu dewasa yang bergerak (jarang)', 'Bekas garukan (ekskoriasi) atau infeksi sekunder'],
    penunjang: ['Melihat telur atau kutu dengan bantuan sisir serit'],
    diagnosis: ['Pedikulosis Kapitis.'],
    tatalaksana: [
      { name: 'Permethrin 1% (Lotion)', dose: 'Oleskan ke rambut & kulit kepala 10 menit', note: 'Ulangi dalam 7-10 hari untuk membunuh telur yang baru menetas' },
      { name: 'Sisir Serit', dose: '-', note: 'Membantu melepaskan telur kutu mekanik' },
      { name: 'Antibiotik Salep', dose: 'prn', note: 'Hanya jika ada infeksi sekunder bernanah' }
    ],
    edukasi: ['Periksa seluruh anggota keluarga/teman dekat', 'Cuci handuk, seprai, dan sisir dengan air panas (>60°C)', 'Pakaian yang tidak bisa dicuci simpan dalam plastik tertutup selama 2 minggu', 'Jangan berbagi sisir, topi, atau kerudung'],
    rujukan: ['Infestasi luas yang tidak membaik dengan 2 siklus pengobatan'],
    prognosis: { vitam: 'Bonam', functionam: 'Bonam', sanationam: 'Bonam' },
    alerts: [
      { type: 'ok', text: 'Pengobatan ke-2 (7-10 hari kemudian) sangat krusial karena Permethrin tidak membunuh telur kutu secara sempurna.' }
    ]
  },
  {
    id: 'low_back_pain',
    name: 'Nyeri Punggung Bawah (LBP)',
    icpc: 'L02',
    icd: 'M54.5',
    level: '4A',
    cat: 'Neurologi',
    icon: '🧘',
    iconBg: '#fffced',
    preview: 'Rasa nyeri atau pegal di punggung bawah. Seringkali disebabkan oleh otot yang tegang atau posisi duduk yang salah.',
    masalah: 'Nyeri yang dirasakan di daerah antara sudut iga terbawah sampai lipat bokong bawah.',
    anamnesis: ['Nyeri punggung bawah yang dipicu aktivitas atau posisi tertentu', 'Rasa kaku saat bangun tidur', 'Nyeri yang menjalar ke kaki (sciatica) — bila ada jepitan saraf', 'Riwayat trauma atau mengangkat beban berat dengan posisi salah'],
    fisik: ['Spasme (kaku) otot punggung', 'Nyeri tekan pada otot/tulang belakang', 'Tes Lasegue (Straight Leg Raise) (+) — bila ada kecurigaan HNP (saraf terjepit)'],
    penunjang: ['Rontgen Vertebra Lumbosakral (bila ada Red Flags)', 'MRI (bila ada tanda defisit neurologis berat)'],
    diagnosis: ['LBP Mekanik / Ischialgia.'],
    tatalaksana: [
      { name: 'NSAID (Meloxicam)', dose: '7.5-15 mg q24h', note: 'Meredakan nyeri dan radang' },
      { name: 'Eperisone', dose: '50 mg q8h', note: 'Relaksan otot ( muscle relaxant)' },
      { name: 'Vitamin B Neurotropik', dose: 'q24h', note: 'Membantu nutrisi saraf' }
    ],
    edukasi: ['Turunkan berat badan bagi yang obesitas', 'Lakukan olahraga penguatan otot perut & punggung (misal: berenang)', 'Hindari mengangkat beban berat secara mendadak', 'Perbaiki posisi duduk dan tidur'],
    rujukan: ['RED FLAGS: Trauma berat, penurunan BB mendadak tanpa sebab, demam, kelemahan tungkai yang progresif, sulit BAK/BAB ( Saddle Anesthesia)'],
    prognosis: { vitam: 'Bonam', functionam: 'Bonam', sanationam: 'Dubia (sering kambuh)' },
    alerts: [
      { type: 'warn', text: 'Waspadai RED FLAGS LBP! Segera rujuk bila ada tanda gangguan saraf berat atau curiga kanker/infeksi tulang.' }
    ]
  },
  {
    id: 'osteoartritis',
    name: 'Osteoartritis',
    externalUrl: 'https://www.alomedika.com/penyakit/reumatologi/osteoartritis',
    icpc: 'L91',
    icd: 'M19.9',
    level: '4A',
    cat: 'Metabolik',
    icon: '🦵',
    iconBg: '#e2e8f0',
    preview: 'Penyakit sendi degeneratif (pengikisan tulang rawan). Gejala utama: nyeri lutut bertambah saat aktivitas dan kaku di pagi hari (<30 menit).',
    masalah: 'Osteoartritis (OA) merupakan bentuk artritis yang paling umum, melibatkan degradasi kartilago sendi, pembentukan osteofit, dan remodelisasi tulang subkondral. OA adalah penyebab utama disabilitas pada populasi lansia.',
    overview: {
      etiologi: 'Degeneratif (penuaan). Faktor risiko: Obesitas (peningkatan beban mekanik), trauma sendi sebelumnya, genetik, and riwayat pekerjaan yang membebani sendi secara repetitif.',
      epidemiologi: 'Terutama menyerang usia > 50 tahun. Prevalensi pada wanita lebih tinggi daripada pria setelah masa menopause.',
      patofisiologi: 'Ketidakseimbangan antara degradasi dan sintesis matriks tulang rawan oleh kondrosit, menyebabkan penipisan kartilago. Hal ini memicu gesekan antar tulang yang menyebabkan osteofit (taji tulang) dan sinovitis ringan.',
      komplikasi: ['Nyeri kronis dan disabilitas fungsi gerak', 'Deformitas sendi (Genu Varus/Valgus)', 'Depresi akibat keterbatasan aktivitas', 'Peningkatan risiko jatuh pada lansia']
    },
    anamnesis: [
      'Nyeri lutut yang memberat saat aktivitas (naik/turun tangga, jongkok) dan membaik dengan istirahat',
      'Kaku sendi pagi hari yang berlangsung singkat (< 30 menit)',
      'Bunyi gemeretak (krepitasi) saat sendi digerakkan',
      'Riwayat berat badan berlebih (obesitas)',
      'Penurunan fungsi jalan atau hambatan dalam beribadah (sholat berlutut)'
    ],
    fisik: [
      'Hambatan gerak sendi (Range of Motion terbatas)',
      'Krepitasi: Teraba sensasi gesekan saat lutut digerakkan pasif',
      'Nyeri tekan pada garis sendi (joint line tenderness)',
      'Pembengkakan sendi (bony enlargement) — teraba keras',
      'Deformitas Genu Varus (Kaki O) atau Valgus (Kaki X) pada stadium lanjut',
      'Atrofi otot Quadriceps karena jarang digunakan'
    ],
    penunjang: [
      'Rontgen Genu (AP/Lat) "Weight Bearing": Tampak penyempitan celah sendi, osteofit, dan sklerosis subkondral.',
      'Analisis Cairan Sendi (bila ada efusi masif untuk menyingkirkan infeksi/gout).'
    ],
    penunjangDetail: [
      { nama: 'Rontgen Genu', rasionalisasi: 'Membantu klasifikasi derajat keparahan (Kellgren-Lawrence Grade I-IV) sebagai dasar pemilihan terapi konservatif vs bedah.' }
    ],
    diagnosis: [
      'Osteoartritis Genu Grade I - IV',
      'Osteoartritis Koksa (Panggul)'
    ],
    diagnosisBanding: ['Artritis Reumatoid (kaku pagi >1 jam, simetris, sendi kecil)', 'Artritis Gout (nyeri akut mendadak, merah, bengkak panas)', 'Artritis Septik (disertai demam tinggi, nyeri hebat berdenyut)'],
    tatalaksana: [
      { name: 'Penurunan Berat Badan', dose: 'Target BMI Normal', note: 'Intervensi paling efektif untuk mengurangi nyeri' },
      { name: 'Paracetamol', dose: '500 mg - 1 g q6-8h', note: 'Analgetik pilihan pertama (aman jangka panjang)' },
      { name: 'NSAID Topikal (Gel/Spray)', dose: 'Oleskan q6-8h', note: 'NSAID oral hanya untuk fase nyeri akut' }
    ],
    tatalaksanaDetail: {
      nonFarmakologi: [
        'Diet Rendah Kalori: Menurunkan beban pada sendi lutut.',
        'Fisioterapi / Strengthening: Latihan penguatan otot quadriceps untuk menstabilkan lutut.',
        'Alas Kaki: Gunakan sepatu bertumit rendah dan empuk.',
        'Alat Bantu: Penggunaan tongkat pada sisi yang sehat untuk kurangi beban lutut yang sakit.',
        'Edukasi Perlindungan Sendi: Hindari jongkok atau duduk di lantai terlalu lama.'
      ],
      farmakologi: [
        {
          title: 'Manajemen Nyeri (Analgetik)',
          items: [
            { name: 'Paracetamol', dose: 'Maksimal 4 gram/hari', note: 'Obat lini pertama' },
            { name: 'Natrium Diklofenak / Meloxicam', dose: 'Sesuai kebutuhan', note: 'Gunakan dosis terendah dengan durasi singkat (waspadai efek lambung/ginjal)' }
          ]
        },
        {
          title: 'Suplemen Sendi (Opsional)',
          items: [
            { name: 'Glukosamin & Kondroitin', dose: 'Asupan harian', note: 'Hanya membantu pada stadium awal' }
          ]
        },
        {
          title: 'Injeksi Intra-artikular (Sesuai Rujukan)',
          items: [
            { name: 'Asam Hialuronat / Kortikosteroid', dose: '-', note: 'Hanya oleh dokter ahli' }
          ]
        }
      ]
    },
    edukasi: [
      'Penyakit ini adalah proses alami penuaan sendi, namun gejalanya bisa dikontrol',
      'Paling penting adalah menurunkan berat badan untuk mengurangi beban mesin hidup (lutut)',
      'Rajin jalan santai atau renang, tapi jangan dipaksakan saat lutut sangat nyeri',
      'Jangan sering dipijat atau ditarik paksa bagian sendinya'
    ],
    rujukan: [
      'Nyeri menetap walaupun sudah diterapi standar (Paracetamol/NSAID)',
      'Deformitas sendi yang berat (Kaki O/X sangat nyata)',
      'Indikasi operasi (Total Knee Replacement) pada Grade IV dengan kualitas hidup buruk'
    ],
    prognosis: { vitam: 'Bonam', functionam: 'Dubia (kronis progresif)', sanationam: 'Malam' },
    alerts: [
      { type: 'ok', text: 'Penurunan berat badan 5kg dapat mengurangi beban lutut sebesar 20-30kg saat berjalan.' },
      { type: 'warn', text: 'Penggunaan obat nyeri (NSAID) jangka panjang pada lansia berisiko tinggi menyebabkan gagal ginjal dan luka lambung.' }
    ]
  },
  {
    id: 'psikotik_akut',
    name: 'Gangguan Psikotik Akut',
    icpc: 'P74',
    icd: 'F23.9',
    level: '3A',
    cat: 'Psikiatri',
    icon: '🌀',
    iconBg: '#f3e5f5',
    preview: 'Perubahan perilaku mendadak, bicara kacau, atau meyakini hal yang tidak nyata (waham). Berlangsung kurang dari 1 bulan.',
    masalah: 'Gangguan mental yang ditandai dengan onset cepat gejala psikotik (delusi, halusinasi, disorganisasi bicara).',
    anamnesis: ['Bicara kacau (tidak nyambung)', 'Melihat atau mendengar hal yang tak ada (halusinasi)', 'Mempunyai keyakinan salah yang kuat (waham/delusi), misal merasa dikejar-kejar', 'Perubahan perilaku mendadak, gaduh gelisah, atau mengurung diri', 'Onseet gejala biasanya < 2 minggu'],
    fisik: ['Pemeriksaan status mental: disorientasi, afek tidak seruai, arus pikir terganggu', 'Singkirkan penyebab organik (demam, trauma kepala, narkoba)'],
    penunjang: ['Urin rutin (tes narkoba bila curiga penyalahgunaan zat)'],
    diagnosis: ['Gangguan Psikotik Akut.'],
    tatalaksana: [
      { name: 'Haloperidol (Tablet)', dose: '2-5 mg q8-12h', note: 'Antipsikotik lini pertama' },
      { name: 'Risperidone', dose: '1-2 mg q12h', note: 'Alternatif antipsikotik atipikal' },
      { name: 'Diazepam (Injeksi)', dose: '5-10 mg IM', note: 'Hanya jika pasien sangat gaduh gelisah (agitasi)' }
    ],
    edukasi: ['Keluarga harus memastikan pasien minum obat teratur', 'Pastikan lingkungan aman (jauhkan benda tajam)', 'Jangan membantah waham pasien secara kasar, tawarkan bantuan'],
    rujukan: ['Pasien membahayakan diri sendiri atau orang lain (risiko bunuh diri/agresi)', 'Gejala tidak membaik setelah 1-2 minggu pengobatan'],
    prognosis: { vitam: 'Bonam', functionam: 'Dubia', sanationam: 'Bonam (banyak yang sembuh sempurna)' },
    alerts: [
      { type: 'warn', text: 'Waspadai Efek Samping Ekstrapiramidal (kaku kuduk, mata melirik ke atas/distonia) akibat Haloperidol.' }
    ]
  },
  {
    id: 'depresi',
    name: 'Gangguan Depresi',
    icpc: 'P76',
    icd: 'F32',
    level: '3A',
    cat: 'Psikiatri',
    icon: '😔',
    iconBg: '#e1f5fe',
    preview: 'Perasaan sedih mendalam, hilang minat, dan lemas yang berlangsung minimal 2 minggu.',
    masalah: 'Gangguan suasana perasaan (mood) yang menetap dan mengganggu fungsi kehidupan.',
    anamnesis: ['Murung, sedih, atau merasa hampa hampir setiap hari', 'Hilang minat pada hobi (anhedonia)', 'Mudah lelah, kurang energi (fatigue)', 'Gangguan tidur (insomnia/hipersomnia)', 'Pikiran tentang kematian atau bunuh diri'],
    fisik: ['Tampilan lesu, bicara lambat, kontak mata kurang', 'Penurunan atau kenaikan berat badan signifikan'],
    penunjang: ['Kuesioner PHQ-9 (Patient Health Questionnaire)'],
    diagnosis: ['Episode Depresi Ringan, Sedang, atau Berat.'],
    tatalaksana: [
      { name: 'Fluoxetine', dose: '20 mg q24h (pagi)', note: 'Antidepresan golongan SSRI (lini pertama)' },
      { name: 'Sertraline', dose: '50 mg q24h', note: 'Alternatif SSRI' },
      { name: 'Psikoterapi Supportif', dose: '-', note: 'Mandatori dilakukan bersamaan dengan obat' }
    ],
    edukasi: ['Obat antidepresan butuh waktu 2-4 minggu untuk mulai bekerja', 'Jangan menghentikan obat tanpa saran dokter (risiko withdrawal)', 'Libatkan dukungan keluarga'],
    rujukan: ['Ada ide atau rencana bunuh diri yang kuat', 'Depresi dengan gejala psikotik', 'Tidak ada respons dengan obat dosis maksimal selama 4-6 minggu'],
    prognosis: { vitam: 'Bonam', functionam: 'Dubia', sanationam: 'Dubia (risiko rekurensi)' },
    alerts: [
      { type: 'danger', text: 'Tanyakan secara langsung: "Apakah Anda ada pikiran untuk mengakhiri hidup?" — Menanyakan TIDAK meningkatkan risiko bunuh diri.' }
    ]
  },
  {
    id: 'bells_palsy',
    name: "Bell's Palsy",
    icpc: 'N91',
    icd: 'G51.0',
    level: '4A',
    cat: 'Neurologi',
    icon: '🥴',
    iconBg: '#e2e8f0',
    preview: 'Kelumpuhan otot wajah sebelah secara mendadak. Mulut mencong dan mata tidak bisa menutup sempurna.',
    masalah: 'Kelumpuhan saraf fasialis (N. VII) tipe perifer yang penyebabnya idiopatik.',
    anamnesis: ['Mulut mencong ke satu sisi mendadak', 'Mata pada sisi yang sakit tidak bisa menutup rapat', 'Alis tidak bisa diangkat, kerutan dahi hilang', 'Rasa kebas atau nyeri di belakang telinga (kadang)'],
    fisik: ['Kelumpuhan otot wajah sesisi (LMN type)', 'Lagoftalmus (mata tidak bisa menutup)', 'Fenomena Bell (bola mata ke atas saat menutup mata)', 'Pengecapan 2/3 depan lidah terganggu'],
    penunjang: ['Klinis utama (skala House-Brackmann)'],
    diagnosis: ["Bell's Palsy."],
    tatalaksana: [
      { name: 'Prednison', dose: '60 mg (tapering off selama 10 hari)', note: 'Pemberian < 72 jam pertama sangat krusial' },
      { name: 'Acyclovir', dose: '400 mg 5x sehari', note: 'Bila ada kecurigaan infeksi virus (Varicella/HSV)' },
      { name: 'Artificial Tears', dose: '1 tetes q4h', note: 'Mencegah kornea mata kering karena tidak bisa menutup' }
    ],
    edukasi: ['Gunakan pelindung mata (eyepatch) saat tidur dan kacamata saat keluar rumah', 'Lakukan fisioterapi wajah (senyum, mengernyit dahi) di depan cermin', 'Penyakit biasanya membaik dalam 2-4 minggu'],
    rujukan: ['Kelumpuhan wajah tidak membaik dalam 3 bulan', 'Ada kelumpuhan saraf kranial lain'],
    prognosis: { vitam: 'Bonam', functionam: 'Bonam (80-90% sembuh total)', sanationam: 'Bonam' },
    alerts: [
      { type: 'ok', text: "Bell's Palsy berbeda dengan Stroke. Pada Bell's Palsy, otot dahi IKUT lumpuh (kerutan dahi hilang)." }
    ]
  },
  {
    id: 'dm_type2',
    name: 'Diabetes Mellitus Tipe 2',
    icpc: 'T90',
    icd: 'E11',
    level: '4A',
    cat: 'Metabolik',
    icon: '🩸',
    iconBg: '#ffebee',
    preview: 'Kadar gula darah tinggi kronis akibat resistensi insulin. Gejala klasik: sering haus, lapar, dan sering kencing.',
    masalah: 'Gangguan metabolik yang ditandai dengan hiperglikemia progresif.',
    anamnesis: ['Sering kencing malam hari (poliuria)', 'Sering merasa haus (polidipsia)', 'Cepat lapar (polifagia)', 'Berat badan turun drastis tanpa sebab jelas', 'Luka sulit sembuh, gatal di kemaluan, atau pandangan kabur'],
    fisik: ['Acanthosis Nigricans (lipatan leher/ketiak hitam berudu)', 'Luka/Ulkus pada kaki (diabetic foot)', 'Penurunan sensasi rasa pada kaki (neuropati)'],
    penunjang: ['Gula Darah Puasa (GDP) ≥ 126 mg/dL', 'Gula Darah 2 Jam PP ≥ 200 mg/dL', 'HbA1c ≥ 6.5%', 'Gula Darah Sewaktu ≥ 200 mg/dL + Gejala Klasik'],
    diagnosis: ['Diabetes Mellitus Tipe 2.'],
    tatalaksana: [
      { name: 'Metformin', dose: '500 mg q8-12h', note: 'Lini pertama (bersama modifikasi gaya hidup)' },
      { name: 'Gliclazide / Glimepiride', dose: '1-4 mg q24h', note: 'Golongan Sulfonilurea (merangsang insulin)' },
      { name: 'Diet Rendah GI', dose: '-', note: 'Batasi nasi putih, roti putih, dan gula' }
    ],
    edukasi: ['Olahraga teratur minimal 30 menit sehari', 'Perawatan kaki (gunakan alas kaki yang nyaman, gunting kuku hati-hati)', 'Edukasi cara minum obat dan kontrol rutin'],
    rujukan: ['Krisis Hiperglikemia (KAD/HONK): mual muntah, sesak, kesadaran turun', 'HbA1c tidak mencapai target setelah 3-6 bulan terapi', 'Adanya komplikasi berat (ginjal, jantung, mata)'],
    prognosis: { vitam: 'Bonam (bila terkontrol)', functionam: 'Dubia (risiko komplikasi)', sanationam: 'Malam (kronis seumur hidup)' },
    alerts: [
      { type: 'danger', text: 'Waspadai HIPOGLIKEMIA (GDS < 70 mg/dL): lemas, keringat dingin, gemetar — segera beri air gula!' }
    ]
  },
  {
    id: 'dislipidemia',
    name: 'Dislipidemia',
    externalUrl: 'https://www.alomedika.com/penyakit/endokrinologi/dislipidemia',
    icpc: 'T93',
    icd: 'E78.5',
    level: '4A',
    cat: 'Metabolik',
    icon: '🍳',
    iconBg: '#fffaced',
    preview: 'Kadar lemak darah (kolesterol/trigliserida) yang abnormal. Faktor risiko utama penyakit jantung koroner.',
    masalah: 'Abnormalitas profil lipid darah yang bersifat pro-aterogenik.',
    overview: {
      etiologi: 'Primer (genetik) atau Sekunder (diet tinggi lemak jenuh, obesitas, diabetes, hipotiroid).',
      epidemiologi: 'Faktor risiko utama aterosklerosis di masyarakat urban.',
      patofisiologi: 'Kelebihan LDL dalam darah teroksidasi dan masuk ke dinding sel pembuluh darah, memicu pembentukan Plak (Aterosklerosis) yang bisa menyumbat aliran darah.',
      komplikasi: ['Penyakit Jantung Koroner (PJK)', 'Stroke Iskemik', 'Penyakit Arteri Perifer']
    },
    anamnesis: ['Biasanya tanpa gejala (silent killer)', 'Kadang terasa pegal di tengkuk (tidak spesifik)', 'Riwayat pola makan tinggi lemak jenuh'],
    fisik: ['Xanthelasma (benjolan lemak di kelopak mata)', 'Xanthoma pada tendon', 'Arcus Senilis (lingkaran putih di pinggir kornea mata) pada usia < 45 th'],
    penunjang: ['Profil Lipid (setelah puasa 10-12 jam): Kolesterol Total, LDL, HDL, Trigliserida'],
    penunjangDetail: [
      { nama: 'Profil Lipid Lengkap (Puasa 9-12 jam)', rasionalisasi: 'Melihat LDL sebagai target utama terapi. Trigliserida butuh puasa agar nilainya tidak dipengaruhi makanan terakhir.' }
    ],
    diagnosis: ['Hiperkolesterolemia / Hipertrigliseridemia.'],
    tatalaksana: [
      { name: 'Simvastatin', dose: '10-20 mg q24h (Malam)', note: 'Golongan Statin, menurunkan LDL' },
      { name: 'Gemfibrozil', dose: '600 mg q12h', note: 'Terutama bila Trigliserida > 500 mg/dL' },
      { name: 'Atorvastatin', dose: '10-40 mg q24h', note: 'Statin poten untuk risiko tinggi' }
    ],
    tatalaksanaDetail: {
      nonFarmakologi: [
        'Diet rendah lemak jenuh (kurangi gorengan, santan, kuning telur)',
        'Tingkatkan aktivitas fisik aerobik 150 menit/minggu',
        'Berhenti merokok',
        'Konsumsi serat tinggi'
      ],
      farmakologi: [
        {
          title: 'Terapi Statin (Lini Pertama)',
          items: [
            { name: 'Simvastatin', dose: '20 mg (Malam)', note: 'Konsumsi malam saat sintesis kolesterol puncak' },
            { name: 'Atorvastatin', dose: '20 mg - 40 mg', note: 'Statin poten' }
          ]
        }
      ]
    },
    edukasi: ['Kurangi gorengan, santan, kuning telur, dan jeroan', 'Makan makanan berserat tinggi (buah dan sayur)', 'Olahraga aerobik secara rutin', 'Hentikan merokok'],
    rujukan: ['Dislipidemia berat yang tidak membaik dengan statin dosis maksimal', 'Dislipidemia familial (keturunan)'],
    prognosis: { vitam: 'Bonam', functionam: 'Bonam', sanationam: 'Dubia' },
    alerts: [
      { type: 'warn', text: 'Statin sebaiknya dikonsumsi pada MALAM HARI karena sintesis kolesterol tubuh maksimal di malam hari.' }
    ]
  },
  {
    id: 'luka_bakar',
    name: 'Luka Bakar Degree I & II',
    icpc: 'S14',
    icd: 'T30',
    level: '4A',
    cat: 'Bedah & Emergensi',
    icon: '🔥',
    iconBg: '#fff1f0',
    preview: 'Kerusakan kulit akibat panas (api, air panas, sinar matahari). Derajat I (merah) dan II (lepuh).',
    masalah: 'Trauma jaringan kulit akibat termal, kimia, atau elektrik.',
    anamnesis: ['Nyeri hebat pada area yang terkena', 'Riwayat kontak dengan benda panas, air panas, atau api', 'Waktu kejadian dan durasi paparan'],
    fisik: ['Derajat I: Kulit merah (eritema), nyeri tekan, tidak ada lepuh', 'Derajat II: Ada bula/lepuh (vesikel), dasar luka merah atau pucat, sangat nyeri', 'Hitung luas luka bakar dengan Rule of Nines'],
    penunjang: ['Klinis utama'],
    diagnosis: ['Luka Bakar Grade I / II.'],
    tatalaksana: [
      { name: 'Irigasi Air Mengalir', dose: '15-20 menit', note: 'Segera lakukan setelah kejadian, suhu ruang' },
      { name: 'Silver Sulfadiazine (Krim)', dose: 'Oleskan tipis', note: 'Antibiotik topikal untuk cegah infeksi' },
      { name: 'Paracetamol / Ibuprofen', dose: '500 mg q6-8h', note: 'Meredakan nyeri' }
    ],
    edukasi: ['Jangan gunakan odol, mentega, atau kopi pada luka bakar', 'Jangan memecahkan lepuh (bula) sendiri', 'Tutup luka dengan kasa steril lembap atau bersih'],
    rujukan: ['Luka bakar derajat II > 10% (anak/lansia) atau > 15% (dewasa)', 'Luka bakar derajat III (kulit putih/gosong)', 'Luka bakar di area "khusus": wajah, tangan, kaki, kemaluan, atau sendi', 'Luka bakar listrik atau kimia'],
    prognosis: { vitam: 'Bonam', functionam: 'Bonam', sanationam: 'Bonam' },
    alerts: [
      { type: 'danger', text: 'Waspadai trauma inhalasi (saluran napas) pada luka bakar di ruang tertutup: ada jelaga di hidung, suara serak, atau sesak napas — DARURAT!' }
    ]
  },
  {
    id: 'veruka_vulgaris',
    name: 'Veruka Vulgaris (Kutil)',
    icpc: 'S03',
    icd: 'B07',
    level: '4A',
    cat: 'Dermatologi',
    icon: '🍄',
    iconBg: '#e2e8f0',
    preview: 'Benjolan kecil, kasar, dan keras pada kulit akibat infeksi virus HPV. Sering di tangan atau kaki.',
    masalah: 'Hiperproliferasi kulit akibat Human Papilloma Virus.',
    anamnesis: ['Benjolan kecil yang permukaannya kasar', 'Biasanya tidak nyeri, kecuali pada telapak kaki (veruka plantaris)', 'Bisa bertambah banyak atau menular ke bagian tubuh lain'],
    fisik: ['Nodul berwarna keabu-abuan, permukaan verukosa (kasar/berjonjot)', 'Bila permukaannya dikerok, tampak titik perdarahan (punctate bleeding/Auspitz sign)'],
    penunjang: ['Klinis utama'],
    diagnosis: ['Veruka Vulgaris.'],
    tatalaksana: [
      { name: 'Asam Salisilat 10-40%', dose: 'Oleskan 1 kali sehari', note: 'Keratolitik, lindungi kulit sehat di sekitarnya' },
      { name: 'Bedah Beku (Krioterapi)', dose: '-', note: 'Bila tersedia di FKTP' },
      { name: 'Bedah Kauter / Eksisi', dose: '-', note: 'Bila lesi besar dan tidak respon obat topikal' }
    ],
    edukasi: ['Jangan menggaruk atau mencungkil kutil sendiri (dapat menular)', 'Jangan berganti alat pribadi (handuk/alas kaki)', 'Jaga kebersihan kulit'],
    rujukan: ['Lesi sangat banyak atau luas', 'Salah satu bentuk veruka filiformis di area wajah'],
    prognosis: { vitam: 'Bonam', functionam: 'Bonam', sanationam: 'Dubia (risiko residif tinggi)' },
    alerts: [
      { type: 'ok', text: 'Kutil pada kulit (Veruka) berbeda dengan Kutil Kelamin (Kondiloma Akuminata) yang merupakan IMS.' }
    ]
  },
  {
    id: 'serumen_prop',
    name: 'Serumen Prop (Kotoran Telinga)',
    icpc: 'H81',
    icd: 'H61.2',
    level: '4A',
    cat: 'THT',
    icon: '👂',
    iconBg: '#fffaced',
    preview: 'Gumpalan kotoran telinga yang menyumbat dan menyebabkan pendengaran menurun serta rasa penuh di telinga.',
    masalah: 'Akumulasi serumen yang membeku dan menyumbat liang telinga.',
    anamnesis: ['Telinga terasa penuh (budeg)', 'Pendengaran menurun secara mendadak (terutama setelah mandi/berenang)', 'Kadang terasa gatal atau nyeri ringan', 'Kadang terdengar bunyi berdengung (tinnitus)'],
    fisik: ['Otoskopi: liang telinga tertutup oleh massa warna kuning kecokelatan atau hitam (konsistensi lunak/keras)'],
    penunjang: ['Klinis utama'],
    diagnosis: ['Serumen Prop.'],
    tatalaksana: [
      { name: 'Karbogliserin 10% (Obat Tetes)', dose: '3 tetes q8h selama 3-5 hari', note: 'Melunakkan serumen yang keras' },
      { name: 'Irigasi Telinga', dose: '-', note: 'Hanya setelah serumen lunak dan pastikan Gendang Telinga TIDAK bolong/perforasi' },
      { name: 'Kuretase Serumen', dose: '-', note: 'Pengambilan manual dengan alat hook/loop oleh dokter' }
    ],
    edukasi: ['Jangan membersihkan telinga dengan Cotton Bud (malah mendorong kotoran masuk)', 'Telinga punya mekanisme bersih mandiri, kotoran akan keluar sendiri ke pinggir', 'Hati-hati saat berenang bila punya kecenderungan serumen menumpuk'],
    rujukan: ['Serumen sangat keras dan menempel di gendang telinga', 'Irigasi gagal atau terjadi komplikasi luka pada liang telinga'],
    prognosis: { vitam: 'Bonam', functionam: 'Bonam (pendengaran langsung pulih)', sanationam: 'Bonam' },
    alerts: [
      { type: 'warn', text: 'Pastikan tidak ada riwayat keluar cairan/telinga berair sebelum melakukan IRIGASI telinga.' }
    ]
  },
  {
    id: 'stomatitis_aftosa',
    name: 'Stomatitis Aftosa (Sariawan)',
    icpc: 'D82',
    icd: 'K12.0',
    level: '4A',
    cat: 'Gigi & Mulut',
    icon: '👅',
    iconBg: '#fff5f5',
    preview: 'Luka kecil putih/kuning di area mulut yang sangat nyeri. Sering dipicu stres, trauma gigitan, atau kurang vitamin.',
    masalah: 'Ulkus atau luka terbuka yang nyeri pada mukosa mulut.',
    anamnesis: ['Luka di mulut yang terasa sangat perih/nyeri (terutama saat makan/bicara)', 'Riwayat trauma (tergigit, kawat gigi)', 'Riwayat stres atau kelelahan'],
    fisik: ['Ulkus dengan dasar putih kekuningan, pinggir kemerahan, bentuk oval/bulat', 'Paling sering di bibir dalam, pipi dalam, atau lidah'],
    penunjang: ['Klinis utama'],
    diagnosis: ['Stomatitis Aftosa Rekuren (SAR).'],
    tatalaksana: [
      { name: 'Aloclair / Triamcinolone Acetonide (Oral Paste)', dose: 'Oleskan 2-3 kali sehari', note: 'Membentuk lapisan pelindung luka' },
      { name: 'Obat Kumur Antiseptik', dose: '3 kali sehari', note: 'Menjaga kebersihan mulut' },
      { name: 'Vitamin B12 / C', dose: 'q24h', note: 'Mendukung penyembuhan' }
    ],
    edukasi: ['Hindari makanan pedas, asam, dan panas sementara', 'Minum cukup air putih', 'Istirahat cukup', 'Gunakan sikat gigi yang lembut'],
    rujukan: ['Luka tidak sembuh > 2-3 minggu (curiga keganasan/kanker mulut)', 'Ulkus sangat besar (>1 cm) atau sangat banyak'],
    prognosis: { vitam: 'Bonam', functionam: 'Bonam', sanationam: 'Bonam' },
    alerts: [
      { type: 'ok', text: 'Sariawan biasa akan sembuh sendiri dalam 7-14 hari.' }
    ]
  },
  {
    id: 'pterygium',
    name: 'Pterigium',
    icpc: 'F84',
    icd: 'H11.0',
    level: '3A',
    cat: 'Mata',
    icon: '👁️',
    iconBg: '#e0f2f1',
    preview: 'Tumbuhnya selaput berbentuk segitiga pada bagian putih mata yang lama-kelamaan menutup kornea. Sering dipicu sinar UV.',
    masalah: 'Pertumbuhan fibrovaskular konjungtiva yang bersifat invasif.',
    anamnesis: ['Ada selaput di mata', 'Mata sering terasa mengganjal, merah, dan pedih', 'Penglihatan mulai terganggu bila selaput mencapai tengah kornea', 'Riwayat banyak aktivitas di luar ruangan tanpa kacamata pelindung'],
    fisik: ['Selaput berbentuk segitiga (v-shape) dari sisi nasal/temporal menuju kornea', 'Grade 1-4 (berdasarkan seberapa jauh masuk ke kornea)'],
    penunjang: ['Klinis utama'],
    diagnosis: ['Pterigium Grade...'],
    tatalaksana: [
      { name: 'Artificial Tears', dose: 'q6h', note: 'Meredakan rasa mengganjal' },
      { name: 'Kacamata Hitam (Sunglasses)', dose: '-', note: 'Wajib digunakan untuk mencegah perkembangan selaput' },
      { name: 'Steroid Topikal Ringan', dose: 'prn', note: 'Hanya jika terjadi peradangan (Pterigium Iritan)' }
    ],
    edukasi: ['Gunakan topi atau kacamata pelindung saat di luar ruangan', 'Hindari paparan debu dan asap'],
    rujukan: ['Pterigium Grade 2 (mendekati pupil) atau lebih', 'Mengganggu penglihatan secara signifikan'],
    prognosis: { vitam: 'Bonam', functionam: 'Dubia (bila menutup pupil)', sanationam: 'Dubia (sering tumbuh lagi setelah operasi)' },
    alerts: [
      { type: 'warn', text: 'Pterigium tidak bisa hilang dengan obat tetes mata, operasi adalah satu-satunya cara untuk menghilangkannya.' }
    ]
  },
  {
    id: 'rabies',
    name: 'Rabies (Gigitan Hewan)',
    icpc: 'N71',
    icd: 'A82',
    level: '3B',
    cat: 'Umum & Infeksi',
    icon: '🐕',
    iconBg: '#fff1f0',
    preview: 'Manajemen luka setelah gigitan hewan penular rabies (anjing, kucing, kera). Rabies fatal jika gejala sudah muncul.',
    masalah: 'Penyakit infeksi virus akut pada susunan saraf pusat yang bersifat fatal.',
    anamnesis: ['Riwayat digigit, dicakar, atau dijilat pada luka oleh hewan penular rabies (HPR)', 'Kondisi hewan: lari, mati, hilang, atau berkelakuan aneh (takut air/cahaya)', 'Status vaksinasi hewan'],
    fisik: ['LUKA GIGITAN: lokasi, kedalaman, dan banyaknya luka', 'Gejala Rabies pada Manusia (bila sudah lanjut): Hidrofobia (takut air), Fotofobia, aerofobia, gelisah, spasme otot tenggorokan'],
    penunjang: ['Observasi hewan selama 14 hari'],
    diagnosis: ['Luka Gigitan Hewan Penular Rabies / Suspek Rabies.'],
    tatalaksana: [
      { name: 'Cuci Luka Segera', dose: '15 menit', note: 'Gunakan air mengalir dan SABUN / deterjen (sangat penting!)' },
      { name: 'Vaksin Anti Rabies (VAR)', dose: 'H0: 2 dosis, H7: 1, H21: 1', note: 'Beri segera pada luka risiko tinggi' },
      { name: 'Serum Anti Rabies (SAR)', dose: '20 IU/kgBB', note: 'Hanya untuk luka kategori III (luka dalam/banyak/dekat otak)' }
    ],
    edukasi: ['Segera cuci luka dengan sabun setelah digigit hewan', 'Jangan membunuh hewan yang menggigit, tangkap dan observasi', 'Vaksinasi hewan peliharaan secara rutin'],
    rujukan: ['Wajib lapor Dinas Kesehatan/Puskesmas Rabies Center', 'Pasien dengan gejala klinis rabies (untuk perawatan paliatif/isolasi)'],
    prognosis: { vitam: 'Malam (bila gejala muncul)', functionam: 'Malam', sanationam: 'Malam' },
    alerts: [
      { type: 'danger', text: 'Mencuci luka dengan SABUN di air mengalir selama 15 menit dapat mematikan virus rabies yang masih di permukaan luka!' }
    ]
  },
  {
    id: 'tb_dewasa',
    name: 'Tuberkulosis (TB) Paru Dewasa',
    icpc: 'R70',
    icd: 'A15',
    level: '4A',
    cat: 'Respirasi',
    icon: '🫁',
    iconBg: '#e2e8f0',
    preview: 'Batuk berdahak >2 minggu, berat badan turun, dan keringat malam. Penularan melalui droplet udara.',
    masalah: 'Infeksi kronis yang disebabkan oleh bakteri Mycobacterium tuberculosis.',
    anamnesis: ['Batuk berdahak ≥ 2 minggu', 'Batuk darah (hemoptoe)', 'Sesak napas dan nyeri dada', 'Demam subfebris lama', 'Nafsu makan turun & Berat badan turun', 'Keringat malam tanpa aktivitas fisik'],
    fisik: ['Keadaan umum bisa tampak kurus (kaheksia)', 'Auskultasi: suara napas bronkial, amforik, atau ronki basah kasar di apeks paru'],
    penunjang: ['Tes Cepat Molekuler (TCM) / GeneXpert — Pemeriksaan utama', 'BTA Mikroskopis (bila TCM tidak tersedia)', 'Rontgen Thorax: infiltrat, kavitas, atau efusi pleura'],
    diagnosis: ['TB Paru Terkonfirmasi Bakteriologis / Terdiagnosis Klinis.'],
    tatalaksana: [
      { name: 'OAT Kat 1 (2RHZE / 4R3H3)', dose: 'Sesuai BB', note: 'Fase Intensif 2 bulan, Fase Lanjutan 4 bulan' },
      { name: 'Pyridoxine (Vit B6)', dose: '10-25 mg q24h', note: 'Mencegah neuropati akibat Isoniazid' }
    ],
    edukasi: ['Minum obat TERATUR dan TUNTAS (min 6 bulan)', 'Etika batuk yang benar (masker/tisu)', 'Ventilasi rumah harus baik (sinar matahari masuk)', 'Periksa anggota keluarga serumah (skrining kontak)'],
    rujukan: ['TB dengan komplikasi: Batuk darah masif, sesak napas berat (pneumotoraks/efusi)', 'Suspek TB Resistan Obat (TB-RO)', 'TB dengan HIV atau DM'],
    prognosis: { vitam: 'Bonam (bila patuh)', functionam: 'Bonam', sanationam: 'Bonam' },
    alerts: [
      { type: 'danger', text: 'JANGAN menghentikan obat sebelum waktunya meskipun tubuh sudah terasa enak karena risiko TB-RO (Kebal Obat)!' }
    ]
  },
  {
    id: 'frambusia',
    name: 'Frambusia (Patek)',
    icpc: 'S70',
    icd: 'A66',
    level: '4A',
    cat: 'Umum & Infeksi',
    icon: '🍓',
    iconBg: '#ffebee',
    preview: 'Penyakit kulit kronis yang dapat menyebabkan cacat tulang. Gejala khas: luka seperti buah berry (framboesia).',
    masalah: 'Infeksi tropis kronis yang disebabkan oleh bakteri Treponema pallidum pertenue.',
    anamnesis: ['Luka atau koreng yang tidak nyeri', 'Bentuk luka seperti tonjolan bunga kol atau buah berry', 'Riwayat tinggal di daerah endemis frambusia', 'Nyeri tulang (pada tahap lanjut)'],
    fisik: ['Papul atau granuloma (papuloma) dengan permukaan kasar (raspberry-like)', 'Crab yaws (penebalan kulit telapak kaki yang nyeri saat jalan)'],
    penunjang: ['RDT Frambusia (+)'],
    diagnosis: ['Frambusia.'],
    tatalaksana: [
      { name: 'Azithromycin (Dosis Tunggal)', dose: '30 mg/kgBB (Max 2g)', note: 'Eradikasi massal lewat POPM' },
      { name: 'Benzathine Penicillin G (Injeksi IM)', dose: '1.2 - 2.4 juta unit', note: 'Alternatif bila Azithro tidak tersedia' }
    ],
    edukasi: ['Jaga kebersihan diri (mandi dengan sabun)', 'Jangan berbagi pakaian atau handuk', 'Laporkan kasus ke petugas kesehatan untuk program pemberantasan'],
    rujukan: ['Kelainan tulang atau sendi yang berat'],
    prognosis: { vitam: 'Bonam', functionam: 'Bonam (bila dini)', sanationam: 'Bonam' },
    alerts: [
      { type: 'ok', text: 'Azithromycin dosis tunggal adalah standar baru WHO untuk eliminasi frambusia.' }
    ]
  },
  {
    id: 'abses_gigi',
    name: 'Abses Gigi (Abses Periapikal)',
    icpc: 'D82',
    icd: 'K04.7',
    level: '4A',
    cat: 'Gigi & Mulut',
    icon: '🦷',
    iconBg: '#fff5f5',
    preview: 'Kumpulan nanah di sekitar akar gigi. Menyebabkan nyeri berdenyut hebat dan pembengkakan gusi atau wajah.',
    masalah: 'Infeksi bakteri pada pulpa gigi yang meluas ke jaringan periapikal.',
    anamnesis: ['Nyeri gigi hebat yang berdenyut (throbbing pain)', 'Nyeri makin parah saat mengunyah atau menghisap panas/dingin', 'Rasa pahit di mulut atau bau mulut tidak sedap', 'Gusi bengkak atau wajah bengkak'],
    fisik: ['Gigi karies (lubang) besar', 'Gusi bengkak, merah, dan fluktuatif (ada nanah)', 'Linfadenopati (KGB leher bengkak)', 'Uji perkusi: sangat sakit'],
    penunjang: ['Rontgen Gigi (Periapikal): gambaran radiolusen di ujung akar'],
    diagnosis: ['Abses Periapikal / Abses Periodontal.'],
    tatalaksana: [
      { name: 'Amoxicillin', dose: '500 mg q8h (5 hari)', note: 'Antibiotik lini pertama' },
      { name: 'Metronidazole', dose: '500 mg q8h', note: 'Tambahkan bila curiga infeksi anaerob' },
      { name: 'Asam Mefenamat', dose: '500 mg q8h prn', note: 'Meredakan nyeri' }
    ],
    edukasi: ['Jangan memencet gusi yang bengkak', 'Kumur air garam hangat', 'Jaga kebersihan mulut'],
    rujukan: ['Wajib ke Dokter Gigi setelah fase akut mereda untuk drainase / cabut gigi / perawatan saluran akar', 'Bila bengkak meluas ke leher/dasar mulut (Angina Ludwig) — Segera ke UGD!'],
    prognosis: { vitam: 'Bonam', functionam: 'Bonam', sanationam: 'Bonam dengan tindakan definitif' },
    alerts: [
      { type: 'danger', text: 'Penyebaran infeksi ke dasar mulut (Angina Ludwig) dapat menyumbat jalan napas — merupakan kegawatdaruratan!' }
    ]
  },
  {
    id: 'oral_thrush',
    name: 'Kandidiasis Mulut (Oral Thrush)',
    icpc: 'D82',
    icd: 'B37.0',
    level: '4A',
    cat: 'Gigi & Mulut',
    icon: '👅',
    iconBg: '#e2e8f0',
    preview: 'Bercak putih di lidah atau pipi dalam yang seperti sisa susu dan sulit dibersihkan. Sering pada bayi atau pengguna steroid.',
    masalah: 'Infeksi jamur Candida albicans pada mukosa mulut.',
    anamnesis: ['Bercak putih di mulut', 'Rasa nyeri atau tidak nyaman saat makan/menyusu', 'Sudut mulut pecah-pecah (Angular Cheilitis)'],
    fisik: ['Pseudomembran putih (seperti dadih susu) yang bila dikerok meninggalkan dasar merah/berdarah'],
    penunjang: ['KOH 10%: ditemukan ragi dan pseudohifa'],
    diagnosis: ['Kandisiasis Oral.'],
    tatalaksana: [
      { name: 'Nystatin Drop (Suspensi)', dose: '1 ml 4x sehari', note: 'Teteskan ke area lesi, diamkan sejenak sebelum menelan' },
      { name: 'Gentian Violet 1%', dose: 'Oleskan', note: 'Alternatif murah untuk FKTP' }
    ],
    edukasi: ['Bersihkan dot/botol susu bayi dengan air mendidih', 'Bilas mulut dengan air putih setelah menggunakan inhaler steroid (bagi penderita asma)', 'Jaga kebersihan mulut'],
    rujukan: ['Kandidiasis oral berulang pada dewasa tanpa penyebab jelas (skrining HIV/DM)', 'Lesi meluas ke kerongkongan (Oesofageal Candidiasis)'],
    prognosis: { vitam: 'Bonam', functionam: 'Bonam', sanationam: 'Bonam' },
    alerts: [
      { type: 'ok', text: 'Oral thrush pada bayi seringkali berhubungan dengan kebersihan alat makan/menyusu.' }
    ]
  },
  {
    id: 'vulnus_laceratum',
    name: 'Vulnus Laceratum (Luka Robek)',
    icpc: 'S18',
    icd: 'S91.3',
    level: '4A',
    cat: 'Bedah & Emergensi',
    icon: '🩹',
    iconBg: '#fff1f0',
    preview: 'Luka terbuka akibat benda tajam atau tumpul yang memerlukan pembersihan dan penjahitan luka.',
    masalah: 'Diskuitas jaringan kulit yang disebabkan oleh trauma mekanik.',
    anamnesis: ['Penyebab luka (benda tajam/tumpul/kaca)', 'Waktu kejadian (jam)', 'Status imunisasi Tetanus (dalam 5-10 tahun terakhir)', 'Lokasi dan perdarahan'],
    fisik: ['Luka terbuka dengan tepi tidak rata atau rata (tergantung penyebab)', 'Kedalaman luka (mencapai otot/fascia/tulang)', 'Ada tidaknya kotoran atau benda asing di dalam luka', 'Perdarahan aktif'],
    penunjang: ['Klinis utama'],
    diagnosis: ['Vulnus Laceratum.'],
    tatalaksana: [
      { name: 'Irigasi Luka (NaCl 0.9%)', dose: 'Hingga bersih', note: 'Sangat krusial untuk cegah infeksi' },
      { name: 'Debridement', dose: '-', note: 'Buang jaringan mati dan kotoran' },
      { name: 'Hecting (Penjahitan)', dose: '-', note: 'Bila luka >1 cm atau perdarahan sulit berhenti' },
      { name: 'ATS / Toksoid Tetanus', dose: 'Sesuai status imunisasi', note: 'Profilaksis tetanus' }
    ],
    edukasi: ['Jaga luka tetap kering dan bersih', 'Kontrol kembali untuk ganti perban dan angkat jahitan (biasanya 7-10 hari)', 'Segera kembali bila luka bengkak, merah, nyeri hebat, atau bernanah'],
    rujukan: ['Luka dengan cedera saraf, tendon, atau pembuluh darah besar', 'Luka di wajah (pertimbangan kosmetik)', 'Luka terkontaminasi hebat'],
    prognosis: { vitam: 'Bonam', functionam: 'Bonam', sanationam: 'Bonam' },
    alerts: [
      { type: 'ok', text: 'Luka yang kotor harus diirigasi dengan cairan yang cukup banyak sebelum dilakukan penjahitan.' }
    ]
  },
  {
    id: 'syok_anafilaktik',
    name: 'Syok Anafilaktik',
    icpc: 'A92',
    icd: 'T78.2',
    level: '4B',
    cat: 'Bedah & Emergensi',
    icon: '🚨',
    iconBg: '#fff1f0',
    preview: 'Reaksi alergi berat yang mengancam nyawa. Gejala: sesak napas, bengkak bibir, dan tekanan darah turun drastis.',
    masalah: 'Reaksi hipersensitivitas tipe I sistemik yang sangat cepat dan bersifat fatal.',
    anamnesis: ['Paparan pemicu alergi mendadak (obat suntik, makanan, sengatan serangga)', 'Rasa gatal hebat, sesak napas, detak jantung cepat, merasa ingin pingsan'],
    fisik: ['Urtikaria (biduran) luas, Angioedema (bengkak bibir/mata)', 'Hipotensi (TD <90/60)', 'Takikardia (nadi cepat lemah)', 'Wheezing (mengi) atau stridor'],
    penunjang: ['Klinis utama (Diagnosis harus CEPAT!)'],
    diagnosis: ['Syok Anafilaktik.'],
    tatalaksana: [
      { name: 'Epinefrin (Adrenalin) 1:1000', dose: '0.3 - 0.5 ml (IM) di paha lateral', note: 'OBAT UTAMA, segera berikan!' },
      { name: 'Oksigen', dose: '6-10 L/menit', note: 'Pastikan jalan napas paten' },
      { name: 'Cairan Kristaloid (Infus)', dose: 'Guyur / Cepat', note: 'Mengatasi hipotensi' }
    ],
    edukasi: ['Identifikasi pemicu dan hindari seumur hidup', 'Selalu bawa tanda pengenal alergi (gelang/kartu)', 'Beritahu petugas medis tentang riwayat alergi obat sebelum disuntik'],
    rujukan: ['Wajib dirujuk ke RS setelah stabilisasi awal untuk observasi (risiko reaksi bifasik)'],
    prognosis: { vitam: 'Dubia ad Bonam (bila cepat tertangani)', functionam: 'Bonam', sanationam: 'Bonam' },
    alerts: [
      { type: 'danger', text: 'JANGAN MENUNDA EPINEFRIN! Epinefrin adalah satu-satunya obat yang menyelamatkan nyawa pada syok anafilaktik.' }
    ]
  },
  {
    id: 'katarak_senilis',
    name: 'Katarak Senilis',
    externalUrl: 'https://www.alomedika.com/penyakit/oftalmologi/katarak-senilis',
    icpc: 'F92',
    icd: 'H25.9',
    level: '2',
    cat: 'Mata',
    icon: '👁️',
    iconBg: '#e2e8f0',
    preview: 'Kekeruhan pada lensa mata akibat proses penuaan. Gejala: penglihatan kabur perlahan seperti tertutup awan/kabut.',
    masalah: 'Katarak senilis merupakan penyebab utama gangguan penglihatan dan kebutaan yang dapat disembuhkan di seluruh dunia. Seiring bertambahnya usia, protein lensa mengalami denaturasi sehingga menghalangi cahaya mencapai retina.',
    overview: {
      etiologi: 'Proses degeneratif (penuaan). Faktor risiko: Paparan sinar ultraviolet, Merokok, Diabetes Melitus, dan penggunaan Kortikosteroid jangka panjang.',
      epidemiologi: 'Terutama pada populasi usia > 50 tahun. Di Indonesia, katarak merupakan penyumbang angka kebutaan tertinggi.',
      patofisiologi: 'Terjadi kegagalan pompa natrium-kalium pada lensa menyebabkan akumulasi air, oksidasi protein kristalin, and pembentukan agregat protein masif yang membiaskan cahaya secara tidak teratur.',
      komplikasi: ['Glaukoma Sekunder (Fakolitik/Fakomorfik)', 'Uveitis terinduksi lensa', 'Kebutaan']
    },
    anamnesis: [
      'Penglihatan buram perlahan dan progresif tanpa rasa nyeri',
      'Seperti melihat asap, kabut, atau awan dalam pandangan',
      'Silau (glare) saat melihat sinar matahari atau lampu mobil di malam hari',
      'Melihat bayangan ganda (diplopia monokuler)',
      'Sering mengganti ukuran kacamata (second sight phenomenon)'
    ],
    fisik: [
      'Penurunan tajam penglihatan (Visus): Tidak membaik dengan koreksi kacamata/pinhole',
      'Shadow Test: (+) pada katarak imatur, (-) pada katarak matur',
      'Pupil: Tampak berwarna putih atau keabu-abuan (leukokoria) pada stadium lanjut',
      'Funduskopi: Red reflex (refleks fundus) melemah atau hilang sama sekali'
    ],
    penunjang: [
      'Slit Lamp: Menilai lokasi kekeruhan (nuklear, kortikal, atau subkapsular)',
      'Biometri: Menentukan power lensa Intraokular (IOL) sebelum operasi'
    ],
    penunjangDetail: [
      { nama: 'Shadow Test', rasionalisasi: 'Mengarahkan senter ke arah iris untuk melihat bayangan pada kekeruhan lensa guna menentukan stadium katarak imatur vs matur.' }
    ],
    diagnosis: [
      'Katarak Imatur (Kekeruhan sebagian)',
      'Katarak Matur (Kekeruhan seluruh lensa)',
      'Katarak Hipermatur (Lensa mencair / morgagni)'
    ],
    diagnosisBanding: ['Kelainan Refraksi (membaik dengan kacamata)', 'Glaukoma Kronis (disertai penyempitan lapang pandang)', 'Abrasi Kornea', 'Retinopati Diabetik'],
    tatalaksana: [
      { name: 'Operasi Katarak (Phacoemulsification)', dose: '-', note: 'Satu-satunya terapi kuratif' },
      { name: 'Kacamata Koreksi', dose: '-', note: 'Hanya membantu pada stadium sangat dini' },
      { name: 'Tetes Mata (Opsional)', dose: '-', note: 'Tidak menyembuhkan, hanya memperlambat progresivitas' }
    ],
    tatalaksanaDetail: {
      nonFarmakologi: [
        'Edukasi pasien: Tidak ada obat tetes yang bisa menghilangkan katarak selain operasi.',
        'Kacamata Gelap: Mengurangi keluhan silau saat siang hari.',
        'Operasi: Dianjurkan jika penglihatan sudah sangat mengganggu aktivitas sehari-hari (visus biasanya < 6/12 atau 6/18).'
      ],
      farmakologi: [
        {
          title: 'Pra-Operasi',
          items: [
            { name: 'Pilocarpine / Midriatikum', dose: 'Tetes mata', note: 'Persiapan visualisasi lensa saat operasi' }
          ]
        },
        {
          title: 'Pasca-Operasi',
          items: [
            { name: 'Tetes Mata Kombinasi Steroid + Antibiotik', dose: 'q3-4h', note: 'Mencegah endoftalmitis dan peradangan' }
          ]
        }
      ]
    },
    edukasi: [
      'Katarak adalah penyakit yang bisa disembuhkan melalui operasi singkat (15-20 menit)',
      'Jangan menunda operasi sampai buta total karena risiko komplikasi glaukoma meningkat',
      'Gunakan kacamata pelindung jika sering terpapar sinar matahari ekstrem',
      'Kontrol gula darah jika Anda menderita Diabetes Melitus'
    ],
    rujukan: [
      'Wajib dirujuk ke Dokter Spesialis Mata pada semua kasus katarak yang mengganggu penglihatan untuk evaluasi bedah'
    ],
    prognosis: { vitam: 'Bonam', functionam: 'Bonam (pasca operasi)', sanationam: 'Bonam' },
    alerts: [
      { type: 'ok', text: 'Teknik operasi Phacoemulsification memungkinkan penyembuhan luka sangat cepat tanpa jahitan.' },
      { type: 'warn', text: 'Waspadai nyeri hebat mendadak pada penderita katarak lama, bisa jadi tanda glaukoma sekunder.' }
    ]
  },
  {
    id: 'pielonefritis',
    name: 'Pielonefritis Akut (Infeksi Ginjal)',
    externalUrl: 'https://www.alomedika.com/penyakit/urologi/pielonefritis-akut',
    icpc: 'U70',
    icd: 'N10',
    level: '4A',
    cat: 'Urologi & Nefrologi',
    icon: '🫘',
    iconBg: '#ffebee',
    preview: 'Nyeri pinggang hebat, demam tinggi menggigil, dan nyeri saat berkemih. Waspada urosepsis.',
    masalah: 'Infeksi bakteri pada parenkim dan pelvis ginjal.',
    overview: {
      etiologi: 'Bakteri gram negatif (paling sering E. coli). Rutenya Ascending (naik dari uretra/kandung kemih).',
      epidemiologi: 'Lebih banyak pada wanita. Faktor risiko: kehamilan, diabetes, batu ginjal.',
      patofisiologi: 'Bakteri menginfeksi ginjal, memicu respon inflamasi hebat (mikroabses dan udem parenkim) dan respon sistemik kuat (Demam, Menggigil).',
      komplikasi: ['Urosepsis (Mematikan)', 'Abses Ginjal', 'Skar Ginjal Permanen']
    },
    anamnesis: ['Demam tinggi mendadak (>38.5°C), menggigil', 'Nyeri pinggang (flank pain) unilateral atau bilateral', 'Mual, muntah', 'Gejala sistitis (nyeri BAK, anyang-anyangan)'],
    fisik: ['Nyeri ketok CVA (Costovertebral Angle) positif', 'Takikardia', 'Nyeri tekan suprapubik'],
    penunjang: ['Urin Lengkap: Bakteriuria, Piuria (banyak leukosit), Silinder Leukosit (khas)', 'Kultur Urin (bila memungkinkan)'],
    penunjangDetail: [
      { nama: 'Urinalisis Lengkap', rasionalisasi: 'Melihat banjirnya sel darah putih (Piuria > 10/LPB). Nitrit + menguatkan ISK bakterial.' }
    ],
    diagnosis: ['Pielonefritis Akut Non-Komplikata.'],
    tatalaksana: [
      { name: 'Ciprofloxacin', dose: '500 mg q12h selama 7-10 hari', note: 'Antibiotik lini pertama' },
      { name: 'Cefixime', dose: '200 mg q12h selama 10-14 hari', note: 'Alternatif' },
      { name: 'Paracetamol', dose: '500 mg q6-8h prn', note: 'Meredakan demam dan nyeri' }
    ],
    tatalaksanaDetail: {
      nonFarmakologi: [
        'Hidrasi cairan oral tinggi (> 2.5 liter/hari)',
        'Tirah baring (Bed rest) selama fase demam',
        'Kosongkan kandung kemih segera saat ingin berkemih'
      ],
      farmakologi: [
        {
          title: 'Antibiotik (Wajib Tuntas)',
          items: [
            { name: 'Ciprofloxacin', dose: '500 mg (2x sehari)', note: 'Penetrasi jaringan ginjal sangat baik' },
            { name: 'Cefixime', dose: '200 mg (2x sehari)', note: 'Lini alternatif' }
          ]
        },
        {
          title: 'Terapi Suportif',
          items: [
            { name: 'Paracetamol', dose: '500 mg (q6-8h)', note: 'Kontrol demam dan nyeri' }
          ]
        }
      ]
    },
    edukasi: ['Minum banyak air putih (>2-3 L/hari)', 'Jangan menahan kencing', 'Minum antibiotik sampai habis meskipun sudah merasa sehat'],
    rujukan: ['Pielonefritis Komplikata (pada Bumil, DM, batu ginjal, atau anak)', 'Tanda syok sepsis / penurunan kesadaran', 'Intoleransi obat minum (muntah terus)'],
    prognosis: { vitam: 'Bonam', functionam: 'Bonam', sanationam: 'Bonam' },
    alerts: [
      { type: 'warn', text: 'Nyeri ketok CVA adalah tanda fisik kunci yang membedakan infeksi ginjal dari infeksi kandung kemih biasa.' }
    ]
  },
  {
    id: 'tetanus',
    name: 'Tetanus',
    externalUrl: 'https://www.alomedika.com/penyakit/penyakit-infeksi/tetanus',
    icpc: 'N72',
    icd: 'A35',
    level: '3B',
    cat: 'Umum & Infeksi',
    icon: '🦷',
    iconBg: '#fff1f0',
    preview: 'Kekakuan otot hebat akibat eksotoksin Clostridium tetani. Gejala khas: kaku rahang (trismus), perut papan, dan kejang yang dipicu rangsang.',
    masalah: 'Penyakit sistem saraf yang disebabkan oleh tetanospasmin (eksotoksin) dari bakteri anaerob Clostridium tetani. Meskipun jarang berkat imunisasi, tetanus tetap memiliki angka mortalitas yang tinggi (10-20%) terutama bila terjadi gangguan otonom atau henti napas.',
    overview: {
      etiologi: 'Infeksi Clostridium tetani, basil gram positif anaerob pembentuk spora. Bakteri masuk melalui luka yang terkontaminasi tanah, debu, atau kotoran hewan.',
      epidemiologi: 'Sering terjadi pada individu yang tidak memiliki imunitas lengkap atau belum mendapatkan booster. Di Indonesia, kasus tetanus sering dikaitkan dengan luka tusuk paku kotor atau perlukaan saat bekerja di kebun/sawah.',
      patofisiologi: 'Spora bakteri memproduksi tetanospasmin yang berikatan dengan interneuron inhibitorik di medula spinalis dan batang otak. Hal ini memblokade pelepasan neurotransmitter GABA dan glisin, menyebabkan hiperaktivitas saraf motorik (spasme otot tak terkendali).',
      komplikasi: ['Asfiksia (spasme laring/otot pernapasan)', 'Aspirasi pneumonia', 'Fraktur kompresi vertebra akibat kejang hebat', 'Instabilitas otonom (hipertensi/takikardia mendadak)', 'Gagal ginjal akut (akibat rhabdomiolisis)']
    },
    anamnesis: [
      'Riwayat luka dalam 1-3 minggu terakhir (seringkali luka tusuk paku, luka bakar, atau pasca pembedahan kotor)',
      'Kaku rahang (Trismus) — sulit membuka mulut',
      'Kesulitan menelan (Disfagia)',
      'Kaku kuduk dan otot punggung',
      'Kaku perut (perut papan/abdominal rigidity)',
      'Kejang otot hebat (spasme) yang dipicu oleh cahaya, suara, atau sentuhan',
      'Kesadaran tetap CM (Compos Mentis) kecuali ada asfiksia',
      'Riwayat imunisasi TT/DPT yang tidak lengkap atau tidak pernah'
    ],
    fisik: [
      'Trismus (kaku otot masseter)',
      'Risus Sardonicus (ekspresi wajah meringis akibat kontraksi otot fasialis)',
      'Opistotonus (tubuh melengkung ke belakang akibat kaku otot punggung)',
      'Perut papan (rigiditas otot abdomen)',
      'Spatula Test (+) : refleks menggigit kuat saat faring dirangsang spatula',
      'Demam ringan hingga tinggi',
      'Hipertensi dan takikardia (tanda ketidakseimbangan otonom)'
    ],
    penunjang: [
      'Klinis — Diagnosis utama didasarkan pada temuan fisik',
      'Spatula Test (sensitivitas 94%, spesifisitas 100%)',
      'Kultur dari jaringan luka (sulit dan sering negatif)',
      'Analisa Gas Darah (bila ada gangguan napas)'
    ],
    penunjangDetail: [
      { nama: 'Spatula Test', rasionalisasi: 'Tes fungsional sederhana di FKTP. Rangsangan pada orofaring memicu spasme masseter (menggigit) bukannya refleks muntah.' }
    ],
    diagnosis: [
      'Tetanus Generalisata (derajat I - IV berdasarkan skor Ablett)',
      'Tetanus Lokal (spasme terbatas pada area luka)',
      'Tetanus Neofatal (pada bayi baru lahir akibat pemotongan tali pusat tidak steril)'
    ],
    diagnosisBanding: ['Meningitis / Ensefalitis (ada penurunan kesadaran)', 'Abses peritonsilar (trismus fokal, nyeri telan hebat)', 'Rabies (riwayat gigitan hewan, hidrofobia)', 'Intoksikasi Striknin'],
    tatalaksana: [
      { name: 'Diazepam', dose: '10 mg IV (bolus pelan) untuk kejang akut', note: 'Maintenance 0.5-10 mg/kgBB/hari via infus' },
      { name: 'Metronidazole', dose: '500 mg q8h (IV/Oral)', note: 'Antibiotik pilihan (lebih unggul dari Penisilin)' },
      { name: 'HTIG (Human Tetanus IG)', dose: '3000-6000 IU IM', note: 'Berikan segera untuk netralisasi toksin' },
      { name: 'Debridement Luka', dose: '-', note: 'Bersihkan jaringan nekrotik sumber kuman' }
    ],
    tatalaksanaDetail: {
      nonFarmakologi: [
        'Isolasi di ruangan tenang dan gelap (minimalisir rangsang cahaya/suara)',
        'Pembersihan luka secara radikal setelah stabilisasi',
        'Pertahankan jalan napas (posisi, suction)',
        'Nutrisi TKTP via NGT (bila trismus berat)'
      ],
      farmakologi: [
        {
          title: 'Kontrol Kejang (Sedasi)',
          items: [
            { name: 'Diazepam', dose: '10 mg IV bolus pelan', note: 'Dapat diulang setiap 3-5 menit sampai kejang berhenti' },
            { name: 'Magnesium Sulfat', dose: 'Maintenance', note: 'Untuk instabilitas otonom di RS' }
          ]
        },
        {
          title: 'Eradikasi Bakteri',
          items: [
            { name: 'Metronidazole', dose: '500 mg q8h', note: 'Berikan selama 7-10 hari' }
          ]
        },
        {
          title: 'Netralisasi Toksin',
          items: [
            { name: 'HTIG (Human Tetanus Immunoglobulin)', dose: '3000-6000 unit', note: 'Berikan IM dosis tunggal segera' },
            { name: 'Vaksin Tetanus Toksoid (TT)', dose: '0.5 ml IM', note: 'Suntikkan pada sisi berbeda dari HTIG' }
          ]
        }
      ]
    },
    edukasi: [
      'Lengkapi imunisasi dasar untuk anak dan booster bagi orang dewasa',
      'Segera ke fasilitas kesehatan bila ada luka yang kotor atau tertusuk benda tajam',
      'Jangan mengobati luka secara mandiri dengan bahan yang tidak steril (bubuk kopi, daun-daun)',
      'Tetanus bukan penyakit menular antar manusia'
    ],
    rujukan: [
      'WAJIB segera dirujuk ke RS setelah stabilisasi awal (Diazepam, Oksigen, HTIG jika ada)',
      'Prioritaskan RS dengan fasilitas ICU dan isolasi tenang'
    ],
    prognosis: { vitam: 'Dubia ad Malam', functionam: 'Dubia', sanationam: 'Dubia' },
    alerts: [
      { type: 'danger', text: 'TETANUS ADALAH EMERGENCY MEDIS. JANGAN MENUNDA RUJUKAN demi pemeriksaan penunjang!' },
      { type: 'warn', text: 'Spasme laring dapat terjadi mendadak dan menyebabkan henti napas fatal.' }
    ]
  },
  {
    id: 'laringitis_akut',
    name: 'Laringitis Akut',
    externalUrl: 'https://www.alomedika.com/penyakit/telinga-hidung-tenggorokan/laringitis-akut',
    icpc: 'R77',
    icd: 'J04.0',
    level: '4A',
    cat: 'Respirasi',
    icon: '🗣️',
    iconBg: '#e2e8f0',
    preview: 'Peradangan pita suara ditandai dengan suara serak (hoarseness), nyeri tenggorokan, dan batuk kering. Sering dipicu oleh infeksi virus atau penggunaan suara berlebihan.',
    masalah: 'Inflamasi pada mukosa laring dan pita suara yang berlangsung < 3 minggu. Kondisi ini sangat umum ditemukan di FKTP, biasanya sebagai bagian dari Infeksi Saluran Napas Atas (ISPA).',
    overview: {
      etiologi: 'Penyebab tersering adalah virus (Rhinovirus, Influenza, Parainfluenza). Penyebab non-infeksi meliputi penggunaan suara berlebihan (vocal abuse), trauma, atau paparan iritan (asap rokok, refluks lambung).',
      epidemiologi: 'Terjadi pada semua usia, namun lebih sering pada dewasa muda dan individu dengan pekerjaan yang menuntut penggunaan suara tinggi (guru, penyanyi).',
      patofisiologi: 'Inflamasi menyebabkan edema dan hiperemia pada pita suara, sehingga getaran pita suara menjadi tidak normal (asimetris). Hal ini menghasilkan perubahan kualitas suara menjadi serak atau hilang sama sekali.',
      komplikasi: ['Stridor laring (pada kasus edema berat)', 'Superinfeksi bakteri', 'Laringitis kronis (bila faktor risiko tidak dihilangkan)']
    },
    anamnesis: [
      'Suara serak (hoarseness) hingga suara hilang (aphonia)',
      'Nyeri tenggorokan (odynophagia) ringan saat bicara atau menelan',
      'Batuk kering (iritatif)',
      'Rasa mengganjal di tenggorokan (globus sensation)',
      'Gejala prodromal: demam ringan, pilek, atau malaise',
      'Riwayat penggunaan suara berlebihan atau paparan debu/asap'
    ],
    fisik: [
      'Faring hiperemis (merah) ringan',
      'Pembengkakan kelenjar getah bening leher (jarang)',
      'Kualitas suara terdengar parau, kasar, atau lemah',
      'Stridor inspiratoir (bila ada sumbatan jalan napas atas — sangat jarang pada dewasa)'
    ],
    penunjang: [
      'Laringoskopi indirek (bila ada fasilitas): pita suara tampak merah, udem, dan terdapat mukus',
      'Kultur usap tenggorokan (bila curiga infeksi bakteri)',
      'Pemeriksaan fungsi vokal (bila kronis)'
    ],
    penunjangDetail: [
      { nama: 'Laringoskopi Indirek', rasionalisasi: 'Melihat langsung kondisi pita suara yang meradang. Dilakukan bila suara serak tidak membaik dalam 2 minggu.' }
    ],
    diagnosis: [
      'Laringitis Akut (diagnosis klinis utama)',
      'Laringotrakeitis (bila melibatkan trakea)'
    ],
    diagnosisBanding: ['Faringitis Akut', 'Epi-glotitis (Darurat! Nyeri hebat + drooling)', 'Refluks Laringofaringeal (GERD)', 'Keganasan laring (suara serak menetap >2 minggu)'],
    tatalaksana: [
      { name: 'Istirahat Suara (Vocal Rest)', dose: '-', note: 'Wajib: Jangan bicara sama sekali, jangan berbisik' },
      { name: 'Hidrasi Cairan', dose: '2-3 L/hari', note: 'Mencegah pita suara kering' },
      { name: 'Dexamethasone', dose: '0.5 mg q8h (5 hari)', note: 'Membantu merakit udem pita suara' },
      { name: 'Paracetamol', dose: '500 mg q6-8h prn', note: 'Meredakan nyeri tenggorokan' }
    ],
    tatalaksanaDetail: {
      nonFarmakologi: [
        'Vocal Rest: Hindari penggunaan suara (bicara, bernyanyi, berteriak) selama minimal 3-5 hari. Berbisik dilarang karena regangan otot pita suara lebih tinggi.',
        'Inhalasi Uap Hangat: Membantu melembabkan saluran napas.',
        'Hindari iritan: Berhenti merokok, hindari alkohol dan makanan pedas.',
        'Hidrasi adekuat: Minum air hangat yang banyak.'
      ],
      farmakologi: [
        {
          title: 'Anti-Inflamasi (Short Course)',
          items: [
            { name: 'Dexamethasone/Prednison', dose: '0,5 - 1 mg/hari', note: 'Untuk kasus dengan suara hilang total (kasus khusus)' }
          ]
        },
        {
          title: 'Simtomatik',
          items: [
            { name: 'Paracetamol / Ibuprofen', dose: '500 mg (bila nyeri)', note: 'Kontrol ketidaknyamanan faring' },
            { name: 'Antitusif', dose: 'prn', note: 'Bila batuk kering sangat mengganggu' }
          ]
        },
        {
          title: 'Antibiotik (Hanya bila diperlukan)',
          items: [
            { name: 'Amoxicillin', dose: '500 mg q8h', note: 'Bila ada tanda infeksi bakteri (sekret purulen, demam tinggi)' }
          ]
        }
      ]
    },
    edukasi: [
      'Suara serak biasanya akan membaik spontan dalam 7-10 hari dengan istirahat suara',
      'Dilarang merokok dan minum alkohol selama penyembuhan',
      'Hindari makanan yang memicu refluks (coklat, peppermint, pedas, berminyak)',
      'Gunakan masker di lingkungan berdebu'
    ],
    rujukan: [
      'Suara serak tidak membaik atau menetap > 2 minggu (evaluasi tumor/nodul)',
      'Adanya sesak napas atau stridor laringeal',
      'Curiga epistaksis atau benda asing'
    ],
    prognosis: { vitam: 'Bonam', functionam: 'Bonam', sanationam: 'Bonam' },
    alerts: [
      { type: 'ok', text: 'BERBISIK justru meningkatkan beban pada pita suara. Lebih baik diam total.' },
      { type: 'warn', text: 'Waspadai sumbatan jalan napas bila keluhan disertai sesak napas (Stridor).' }
    ]
  },
  {
    id: 'angina_pektoris',
    name: 'Angina Pektoris Stabil',
    externalUrl: 'https://www.alomedika.com/penyakit/kardiologi/angina-pektoris-stabil',
    icpc: 'K74',
    icd: 'I20.9',
    level: '3A',
    cat: 'Kardiovaskular',
    icon: '💔',
    iconBg: '#fff1f0',
    preview: 'Nyeri dada transien akibat iskemia otot jantung. Muncul saat aktivitas berat (exertional pain) dan membaik sepenuhnya dengan istirahat atau nitrat.',
    masalah: 'Klinis yang ditandai dengan rasa tidak nyaman di dada akibat ketidakseimbangan antara kebutuhan oksigen miokard dengan suplai oksigen melalui aliran darah koroner.',
    overview: {
      etiologi: 'Aterosklerosis arteri koroner merupakan penyebab tersering. Penyempitan lumen mengurangi cadangan aliran darah saat beban jantung meningkat.',
      epidemiologi: 'Meningkat seiring usia, riwayat hipertensi, DM, merokok, dan dislipidemia. Lebih sering pada laki-laki atau wanita pasca-menopause.',
      patofisiologi: 'Penitipan lumen koroner >50-70% menyebabkan aliran darah tidak mampu mencukupi kebutuhan oksigen saat aktivitas (takikardia). Terjadi metabolisme anaerob dan penumpukan asam laktat yang merangsang saraf nyeri di jantung.',
      komplikasi: ['Infark Miokard Akut (STEMI/NSTEMI)', 'Gagal Jantung Kongestif', 'Aritmia (Fibrilasi Atrium/Ventrikel)', 'Sudden Cardiac Death']
    },
    anamnesis: [
      'Nyeri dada retrosternal (di belakang tulang dada) seperti ditekan beban berat, diremas, atau dicekik',
      'Penjalaran nyeri ke leher, rahang, bahu, atau lengan kiri',
      'Durasinya singkat (biasanya 2-5 menit, jarang > 20 menit)',
      'Pemicu: Aktivitas fisik (jalan jauh/tangga), emosi, udara dingin, atau makan kenyang',
      'Pereda: Istirahat atau penggunaan tablet Nitrogliserin/ISDN di bawah lidah',
      'Keluhan penyerta: Sesak napas, mual, atau keringat dingin',
      'Identifikasi faktor risiko: Merokok, DM, riwayat keluarga sakit jantung'
    ],
    fisik: [
      'Biasanya normal saat tidak terjadi serangan nyeri',
      'Sering ditemukan kenaikan Tekanan Darah (Hipertensi)',
      'Cari tanda komorbiditas: arkus senilis (dislipidemia), xantelasma',
      'Auskultasi jantung: mungkin terdengar suara S4 (akibat kekakuan ventrikel)'
    ],
    penunjang: [
      'EKG 12-lead: saat tidak nyeri bisa normal, saat nyeri mungkin ada depresi ST atau inversi gelombang T',
      'Laboratorium: Profil lipid, Gula darah, Ureum/Kreatinin',
      'EKG Treadmill (uji beban): bila diagnosis meragukan',
      'Troponin (marker jantung): Harus NEGATIF (membedakan dengan Infark Miokard)'
    ],
    penunjangDetail: [
      { nama: 'EKG 12-Lead', rasionalisasi: 'Mendeteksi tanda iskemia kronis atau lama. EKG normal tidak menyingkirkan kemungkinan angina.' },
      { nama: 'Profil Lipid & Glukosa', rasionalisasi: 'Manajemen faktor risiko kardiovaskular adalah kunci pencegahan sekunder.' }
    ],
    diagnosis: [
      'Angina Pektoris Stabil (diagnosis berdasarkan kriteria CCS)',
      'Bedakan dengan ACS (Sindrom Koroner Akut) yang nyerinya tidak hilang dengan istirahat'
    ],
    diagnosisBanding: ['GERD (nyeri dada rasa terbakar, diperberat posisi baring)', 'Pleulitis / Pneumonia', 'Mialgia / Kostokondritis (nyeri tekan dinding dada)', 'Diseksi Aorta (nyeri tajam seperti robek)'],
    tatalaksana: [
      { name: 'Isosorbide Dinitrate (ISDN)', dose: '5 mg (Sublingual)', note: 'Gunakan HANYA saat serangan nyeri muncul' },
      { name: 'Aspirin', dose: '80 - 160 mg q24h', note: 'Antiplatelet seumur hidup untuk cegah trombosis' },
      { name: 'Atorvastatin', dose: '20 - 40 mg q24h', note: 'Stabilisasi plak aterosklerosis' },
      { name: 'Bisoprolol', dose: '2.5 - 5 mg q24h', note: 'Beta blocker untuk menurunkan konsumsi oksigen jantung' }
    ],
    tatalaksanaDetail: {
      nonFarmakologi: [
        'Hentikan merokok secara total',
        'Diet Rendah Lemak Jenuh dan Garam (DASH diet)',
        'Olahraga aerobik intensitas rendah – sedang secara rutin (3-5 kali seminggu)',
        'Kontrol Berat Badan (BMI < 25)',
        'Manajemen stres dan kontrol penyakit penyerta (HT/DM)'
      ],
      farmakologi: [
        {
          title: 'Manajemen Akut (Pereda Nyeri)',
          items: [
            { name: 'ISDN (Isosorbid Dinitrat)', dose: '5 mg Sublingual', note: 'Dapat diulang 3x dengan interval 5 menit' }
          ]
        },
        {
          title: 'Pencegahan Sekunder (Wajib)',
          items: [
            { name: 'Aspirin', dose: '75 - 100 mg q24h', note: 'Diminum setelah makan untuk proteksi lambung' },
            { name: 'Statin (Atorvastatin/Simvastatin)', dose: '20 mg', note: 'Target LDL < 70 mg/dL' }
          ]
        },
        {
          title: 'Anti-iskemia (Lini Pertama)',
          items: [
            { name: 'Beta Blocker (Bisoprolol/Atenolol)', dose: '5 mg q24h', note: 'Sesuaikan dosis untuk target HR 55-60 bpm' },
            { name: 'ACE-Inhibitor (Captopril/Ramipril)', dose: 'prn', note: 'Pilihan utama bila ada DM atau Hipertensi' }
          ]
        }
      ]
    },
    edukasi: [
      'Angina adalah alarm bahwa jantung butuh oksigen lebih. Segera berhenti beraktivitas saat nyeri muncul',
      'Selalu bawa obat ISDN sublingual di tas/kantong',
      'Bila nyeri dada > 20 menit dan tidak membaik dengan 3 tab ISDN, segera ke IGD (curiga serangan jantung)',
      'Disiplin dalam kontrol faktor risiko (Gula darah, Tensi, Kolesterol)'
    ],
    rujukan: [
      'Pasien baru dengan suspek angina (konfirmasi diagnosis awal spesialis)',
      'Pasien dengan CCS grade 3-4 (aktivitas ringan sudah nyeri)',
      'Nyeri dada tidak membaik dengan terapi standar',
      'Curiga Angina Tidak Stabil (UAP)'
    ],
    prognosis: { vitam: 'Bonam', functionam: 'Dubia', sanationam: 'Malam (kondisi degeneratif kronis)' },
    alerts: [
      { type: 'danger', text: 'SEGERA ke IGD jika nyeri dada menetap > 20 menit (Curiga INFARK MIOKARD/Serangan Jantung)!' },
      { type: 'warn', text: 'Obat ISDN harus diletakkan di bawah lidah, jangan ditelan karena metabolisme hati yang cepat.' }
    ]
  },
  {
    id: 'karsinoma_sel_basal',
    name: 'Karsinoma Sel Basal (KSB)',
    externalUrl: 'https://www.alomedika.com/penyakit/dermatovenereologi/karsinoma-sel-basal',
    icpc: 'S77',
    icd: 'C44',
    level: '2',
    cat: 'Dermatologi',
    icon: '🧫',
    iconBg: '#e2e8f0',
    preview: 'Keganasan kulit tersering, tumbuh lambat, lokal destruktif namun jarang bermetastasis. Gejala khas: papul pearly dengan tepi rolled edge.',
    masalah: 'Karsinoma yang berasal dari sel germinativum basal epidermis. KSB merupakan kanker tersering di dunia. Meskipun jarang mengancam nyawa karena pertumbuhannya yang lambat dan jarang menyebar ke organ jauh, KSB dapat menyebabkan kerusakan (destruksi) jaringan sekitar mata, hidung, dan telinga yang parah bila diabaikan.',
    overview: {
      etiologi: 'Paparan kronis sinar ultraviolet (UV) terutama UV-B. Faktor risiko meliputi kulit putih (tipe Fitzpatrick I & II), riwayat radiasi, atau paparan arsenik.',
      epidemiologi: 'Sering pada individu di atas 50 tahun dengan riwayat pekerjaan *outdoor* intens (nelayan, petani). Insidens meningkat seiring peningkatan paparan sinar matahari.',
      patofisiologi: 'Terjadi mutasi pada gen supresor tumor *PTCH1* (pathway Hedgehog) akibat paparan UV, menyebabkan proliferasi sel basal yang tidak terkendali.',
      komplikasi: ['Destruksi jaringan lokal (hidung, mata, tulang tengkorak)', 'Perdarahan kronis', 'Infeksi sekunder pada ulkus']
    },
    anamnesis: [
      'Benjolan atau bintil kecil di wajah yang tidak kunjung sembuh',
      'Mudah berdarah walaupun hanya terkena gesekan ringan (misal saat handukan)',
      'Tumbuh lambat selama bertahun-tahun',
      'Riwayat luka atau borok yang tidak sembuh setelah lebih dari 4 minggu',
      'Lokasi tersering: Wajah (hidung, pipi, kelopak mata), telinga, dan kulit kepala'
    ],
    fisik: [
      'Pearly Papule: bintil warna seperti mutiara atau lilin (mengkilap)',
      'Telangiektasis: terlihat pembuluh darah kecil yang melebar di permukaan bintil',
      'Rolled Edge: tepi lesi yang meninggi dan menggulung',
      'Central Ulceration (Ulkus Rodent): bagian tengah yang mencekung atau berubah menjadi borok',
      'Pigmentasi variasi: kadang berwarna coklat/hitam (KSB Pigmentasi)'
    ],
    penunjang: [
      'Biopsi kulit (Punch biopsy atau Eksisi): Standar baku emas diagnostik',
      'Dermoskopi (oleh ahli): menunjukkan pola khas arborizing vessels'
    ],
    penunjangDetail: [
      { nama: 'Biopsi Eksisional/Insisional', rasionalisasi: 'Konfirmasi histopatologi wajib dilakukan sebelum rencana terapi definitif.' }
    ],
    diagnosis: [
      'Suspek Karsinoma Sel Basal (tipe nodular adalah yang tersering)',
      'Klasifikasi berdasarkan lokasi (high risk vs low risk)'
    ],
    diagnosisBanding: ['Karsinoma Sel Skuamosa (tumbuh lebih cepat, lebih bersisik)', 'Melanoma Maligna (pigmentasi tidak teratur, kriteria ABCDE)', 'Keratosis Seboroik (seperti ditempel, berminyak)', 'Nevus Pigmentosus'],
    tatalaksana: [
      { name: 'Tiras Definitif (Rujukan)', dose: '-', note: 'Bedah Eksisi, Bedah Mohs, atau Kuretase-Kauterisasi' },
      { name: 'Sunblock / Sunscreen', dose: 'SPF > 30', note: 'Prevensi sekunder untuk cegah lesi baru' },
      { name: 'Antibiotik Topikal', dose: 'prn', note: 'Bila ada infeksi sekunder pada ulkus' }
    ],
    tatalaksanaDetail: {
      nonFarmakologi: [
        'Edukasi proteksi sinar matahari (Topi lebar, pakaian lengan panjang).',
        'Gunakan sunscreen secara rutin setiap pagi dan siang.',
        'Jangan memencet atau mengobati borok dengan ramuan tradisional herbal yang tidak jelas.',
        'Kontrol rutin pasca operasi setiap 6-12 bulan.'
      ],
      farmakologi: [
        {
          title: 'Terapi Utama (Di RS/Spesialis)',
          items: [
            { name: 'Bedah Eksisi dengan Margin', dose: '-', note: 'Margin minimal 4mm untuk lesi risiko rendah' },
            { name: 'Imiquimod 5% (Krim)', dose: '-', note: 'Hanya untuk tipe superfisial di area tertentu' }
          ]
        },
        {
          title: 'Pencegahan',
          items: [
            { name: 'Tabir Surya (Sunscreen)', dose: 'Re-apply q2-3h', note: 'Wajib digunakan saat beraktivitas outdoor' }
          ]
        }
      ]
    },
    edukasi: [
      'KSB jarang menyebar ke paru atau hati, tapi BISA merusak wajah secara luas jika tidak segera dioperasi',
      'Operasi dini memberikan hasil kosmetik yang jauh lebih baik',
      'Hindari berjemur di antara jam 10 pagi hingga jam 4 sore',
      'Periksakan seluruh area kulit secara rutin bila pernah terkena kanker kulit sebelumnya'
    ],
    rujukan: [
      'WAJIB dirujuk ke Spesialis Kulit (Dermatovenereologi) atau Bedah Onkologi untuk penanganan definitif',
      'Jangan mencoba mengangkat lesi di fasilitas yang tidak memadai'
    ],
    prognosis: { vitam: 'Bonam (metastasis < 0.1%)', functionam: 'Dubia (tergantung lokasi lesi)', sanationam: 'Bonam bila eksisi komplit' },
    alerts: [
      { type: 'warn', text: 'Diagnosis klinis KSB seringkali tertunda karena dianggap sebagai luka biasa atau jerawat yang tidak sembuh.' },
      { type: 'ok', text: 'Tingkat kesembuhan pasca bedah eksisi mencapai >95%.' }
    ]
  },
  {
    id: 'hipoglikemia',
    name: 'Hipoglikemia',
    externalUrl: 'https://www.alomedika.com/penyakit/endokrinologi/hipoglikemia',
    icpc: 'T90',
    icd: 'E16.2',
    level: '4B',
    cat: 'Metabolik',
    icon: '🧊',
    iconBg: '#e1f5fe',
    preview: 'Kadar glukosa darah < 70 mg/dL. Kondisi gawat darurat klinis yang bermanifestasi sebagai gejala otonom (berdebar, keringat dingin) hingga neuroglikopenik (bingung, pingsan).',
    masalah: 'Penurunan kadar glukosa plasma yang menyebabkan kegagalan pasokan energi ke otak dan memicu aktivasi sistem saraf simpatis. Jika tidak segera diatasi, hipoglikemia dapat menyebabkan kerusakan otak permanen (ensefalopati) atau kematian.',
    overview: {
      etiologi: 'Sering akibat obat DM (Sulfonilurea/Insulin) dosis berlebihan, kurang makan setelah minum obat DM, atau aktivitas fisik berlebihan. Penyebab lain: sepsis total, sirosis hati, atau tumor insulinoma.',
      epidemiologi: 'Sangat sering terjadi pada pasien DM Tipe 1 dan DM Tipe 2. Pasien geriatri dengan gagal ginjal memiliki risiko tertinggi karena klirens obat DM yang melambat.',
      patofisiologi: 'Saat gula darah turun < 70 mg/dL, tubuh merespon dengan sekresi glukagon dan epinefrin (gejala otonom). Saat turun < 50 mg/dL, pasokan glukosa ke otak gagal (gejala neuroglikopenik) menyebabkan gangguan kesadaran.',
      komplikasi: ['Aritmia jantung fatal', 'Stroke iskemik fokal', 'Kejang', 'Kerusakan otak permanen (Koma hipoglikemik persisten)']
    },
    anamnesis: [
      'Onset Gejala Mendadak',
      'Gejala Otonom: Keringat dingin (diaphoresis), gemetar, jantung berdebar, rasa sangat lapar, kecemasan',
      'Gejala Neuroglikopenik: Pusing, penglihatan kabur, bicara pelo, bingung/disorientasi, perilaku aneh, hingga tidak sadar',
      'Riwayat DM dan penggunaan obat penurun gula (Akarbose, Metformin, Glibenklamid, atau Insulin)',
      'Tanyakan waktu makan terakhir dan aktivitas fisik yang tidak biasa'
    ],
    fisik: [
      'Pucat dan keringat dingin di seluruh tubuh (basah)',
      'Takikardia (nadi cepat)',
      'Tekanan darah bisa normal atau hipertensi (respon stres)',
      'Penurunan kesadaran (mulai dari apatis hingga koma)',
      'Focal neurological deficit (kadang menyerupai stroke)'
    ],
    penunjang: [
      'Glukosa Darah Sewaktu (GDS) / POCT: < 70 mg/dL adalah diagnostik',
      'Trias Whipple: Ada gejala hipoglikemia, GDS rendah, dan gejala hilang setelah GDS dinaikkan'
    ],
    penunjangDetail: [
      { nama: 'GDS (Glukosa Darah Sewaktu)', rasionalisasi: 'Satu-satunya tes krusial. Hasil harus segera diketahui dalam <1 menit untuk inisiasi terapi.' }
    ],
    diagnosis: [
      'Hipoglikemia Ringan (sadar, bisa makan sendiri)',
      'Hipoglikemia Berat (butuh bantuan orang lain / tidak sadar)'
    ],
    diagnosisBanding: ['Stroke Iskemik (defisit neurologis menetap)', 'Sinkop Vasovagal', 'Intoksikasi Alkohol', 'Gagal Ginjal Akut (Uremia)'],
    tatalaksana: [
      { name: 'Larutan Glukosa (Sadar)', dose: '15-20 gram glukosa oral', note: 'Misal: 1.5 - 2 sdm gula dilarutkan air atau permen manis' },
      { name: 'Dextrose 40% (Tidak Sadar)', dose: '2-3 flakon (50-75 ml) IV Bolus', note: 'Lama pemberian 5-10 menit' },
      { name: 'Infus D10%', dose: 'Maintenance', note: 'Kecepatan sesuai target GDS > 100 mg/dL' }
    ],
    tatalaksanaDetail: {
      nonFarmakologi: [
        'Hentikan sementara semua obat DM.',
        'Monitor GDS setiap 15, 30, dan 60 menit setelah tindakan.',
        'Edukasi pasien: JANGAN minum obat DM jika tidak makan.',
        'Identifikasi pemicu (misal: dosis obat tertukar, lupa makan).'
      ],
      farmakologi: [
        {
          title: 'Manajemen Akut (Pasien Sadar)',
          items: [
            { name: 'Air Gula / Jus Buah / Permen', dose: '15-20 gram glukosa', note: 'Ulangi setiap 15 menit jika GDS masih < 80' }
          ]
        },
        {
          title: 'Manajemen Akut (Pasien Tidak Sadar)',
          items: [
            { name: 'Glukosa 40% (D40)', dose: '2 flakon (50 ml) IV', note: 'Jangan tunggu pemeriksaan GDS bila klinis sangat meyakinkan' },
            { name: 'Glukagon (Injeksi)', dose: '1 mg IM/SC', note: 'Pilihan bila jalur IV sulit didapat (jarang di FKTP)' }
          ]
        },
        {
          title: 'Pemeliharaan (Maintenance)',
          items: [
            { name: 'Infus D10% / D5%', dose: '100 - 150 ml/jam', note: 'Penting terutama untuk hipoglikemia akibat sulfonilurea long-acting' }
          ]
        }
      ]
    },
    edukasi: [
      'Pahami tanda awal hipoglikemia (lapar, gemetar)',
      'Identifikasi "Obat pemicu" dan cara meminimalkan risiko',
      'Selalu bawa "Gula emergency" (permen/cokelat) ke mana saja',
      'Gunakan gelang atau kartu identitas penderita DM'
    ],
    rujukan: [
      'Pasien tidak sadar setelah pemberian bokus D40% sebanyak 3 kali',
      'Hipoglikemia akibat Sulfonilurea long-acting (e.g. Glibenklamid) karena risiko relaps tinggi',
      'Hipoglikemia dengan komorbiditas berat (Gagal jantung/ginjal)'
    ],
    prognosis: { vitam: 'Bonam (bila cepat)', functionam: 'Bonam', sanationam: 'Bonam (namun risiko relaps tinggi)' },
    alerts: [
      { type: 'danger', text: 'JANGAN MEMBERI MINUM pada pasien tidak sadar! Risiko ASPIRASI fatal!' },
      { type: 'ok', text: 'Target GDS pasca tindakan adalah >100 mg/dL untuk keamanan otak.' }
    ]
  },
  {
    id: 'bronkopneumonia_anak',
    name: 'Bronkopneumonia (Anak)',
    externalUrl: 'https://www.alomedika.com/penyakit/pediatri/pneumonia-pada-anak',
    icpc: 'R81',
    icd: 'J18.0',
    level: '4A',
    cat: 'Pediatri',
    icon: '👶',
    iconBg: '#e0f2f1',
    preview: 'Infeksi akut pada parenkim paru (bronkiolus dan alveolus) yang ditandai dengan batuk, demam, napas cepat, serta tarikan dinding dada ke dalam.',
    masalah: 'Pneumonia merupakan penyebab tunggal terbesar kematian anak di seluruh dunia. Penyakit ini seringkali berawal dari infeksi saluran napas atas yang kemudian menjalar ke parenkim paru, menyebabkan gangguan pertukaran gas.',
    overview: {
      etiologi: 'Bakteri (paling sering Streptococcus pneumoniae dan Haemophilus influenzae tipe b) atau Virus (RSV, Influenza). Bakteri atipikal seperti Mycoplasma pneumoniae lebih sering pada anak yang lebih tua.',
      epidemiologi: 'Terutama menyerang anak usia < 5 tahun, dengan faktor risiko meliputi gizi buruk, paparan polusi udara/asap rokok, dan status imunisasi yang tidak lengkap.',
      patofisiologi: 'Eksudat inflamasi mengisi bronkiolus dan alveoli (konsolidasi bercak), menyebabkan hipoksia, penurunan komplians paru, dan peningkatan kerja pernapasan (napas cepat dan retraksi).',
      komplikasi: ['Efusi pleura / Empiema (nanah di rongga pleura)', 'Abses paru', 'Pneumotoraks', 'Sepsis', 'Gagal napas']
    },
    anamnesis: [
      'Batuk dan demam tinggi',
      'Napas cepat (Takipnea) — gejala paling sensitif',
      'Sesak napas (Dyspnea)',
      'Anak tampak lemas, malas minum, atau merintih',
      'Mungkin ada riwayat tersedak atau paparan asap rokok',
      'Tanyakan status imunisasi: DPT-HB-Hib (Pentabio) dan PCV'
    ],
    fisik: [
      'Frekuensi Napas Cepat (Cut-off WHO): <2 bln (≥60x), 2-12 bln (≥50x), 1-5 thn (≥40x)',
      'Retraksi Dinding Dada: Tarikan dinding dada bagian bawah ke dalam saat inspirasi',
      'Auskultasi: Ronki basah halus nyaring (crackles) pada area yang terinfeksi',
      'Sianosis: Warna biru pada bibir atau lidah (tanda kegawatan)',
      'Kepala terangguk-angguk (Head nodding) seirama napas — tanda distres berat',
      'Suara napas bronkial (bila ada konsolidasi luas)'
    ],
    penunjang: [
      'Oksimetri Nadi (SpO2): Target >92% (udara kamar)',
      'Rontgen Thorax PA/Lat: Menunjukkan infiltrat bercak (patchy infiltrat) / konsolidasi',
      'Pemeriksaan Darah Lengkap: Mungkin ada leukositosis (bila penyebab bakteri)'
    ],
    penunjangDetail: [
      { nama: 'Oksimetri (SpO2)', rasionalisasi: 'Menilai derajat hipoksia secara non-invasif. Nilai <92% adalah indikasi mutlak pemberian oksigen dan rawat inap.' },
      { nama: 'Rontgen Thorax', rasionalisasi: 'Membantu membedakan lokasi infeksi dan mendeteksi komplikasi seperti efusi pleura atau pneumotoraks.' }
    ],
    diagnosis: [
      'Pneumonia: Napas cepat + Ronki',
      'Pneumonia Berat: Gejala pneumonia + retraksi dinding dada kuat atau tanda bahaya umum (sianosis, tidak bisa minum)'
    ],
    diagnosisBanding: ['Bronkiolitis (wheezing dominan, usia <2 thn)', 'Asma Bronkial (riwayat atopi, wheezing berulang)', 'Aspirasi Benda Asing (onset mendadak)', 'Gagal Jantung Kongestif'],
    tatalaksana: [
      { name: 'Amoxicillin (Dosis Tinggi)', dose: '80 - 90 mg/kgBB/hari', note: 'Dibagi 2 dosis (setiap 12 jam) selama 5 hari' },
      { name: 'Oksigen (bila SpO2 <92%)', dose: '1-2 L/menit via nasal kanul', note: 'Berikan jika ada tanda distress napas' },
      { name: 'Paracetamol', dose: '10-15 mg/kgBB q6-8h', note: 'Meredakan demam' }
    ],
    tatalaksanaDetail: {
      nonFarmakologi: [
        'Teruskan pemberian ASI dan nutrisi cair lainnya.',
        'Pemberian cairan oral ekstra untuk mencegah dehidrasi.',
        'Pembersihan jalan napas dari lendir (suction bila perlu).',
        'Posisikan anak setengah duduk untuk mempermudah pernapasan.'
      ],
      farmakologi: [
        {
          title: 'Antibiotik Lini Pertama (Rawat Jalan)',
          items: [
            { name: 'Amoxicillin Sirup / Tablet', dose: '40-45 mg/kgBB (per kali minum)', note: 'Regimen 5 hari terbukti efektif for pneumonia non-berat' }
          ]
        },
        {
          title: 'Antibiotik (Rawat Inap/Rujukan)',
          items: [
            { name: 'Ampicillin IV', dose: '50 mg/kgBB q6h', note: 'Kombinasi dengan Gentamisin sering digunakan' }
          ]
        },
        {
          title: 'Manajemen Suportif',
          items: [
            { name: 'Paracetamol', dose: '10-15 mg/kgBB', note: 'Hanya bila demam > 38.5°C' }
          ]
        }
      ]
    },
    edukasi: [
      'Ajarkan orang tua cara memantau napas cepat dan retraksi dinding dada sebagai tanda bahaya',
      'Obat harus diminum tepat waktu dan sampai habis (jangan berhenti meski demam turun)',
      'Jauhkan anak dari paparan asap rokok, asap dapur, dan polusi',
      'Pentingnya imunisasi PCV untuk mencegah pneumonia berulang'
    ],
    rujukan: [
      'Pneumonia Berat (retraksi dinding dada sangat kuat)',
      'Tanda Bahaya Umum: Anak tidak mau minum/menetek, muntah semuanya, kejang, merintih, atau kesadaran turun',
      'Saturasi oksigen < 92% atau sianosis',
      'Bayi usia < 2 bulan (risiko henti napas tinggi)',
      'Pneumonia yang tidak membaik setelah 48-72 jam antibiotik oral'
    ],
    prognosis: { vitam: 'Bonam (bila cepat)', functionam: 'Bonam', sanationam: 'Bonam' },
    alerts: [
      { type: 'warn', text: 'Hitung frekuensi napas selama 1 menit penuh saat anak tenang. Napas cepat adalah indikator klinis terpenting.' },
      { type: 'danger', text: 'SIANOSIS (biru) dan RETRAKSI kuat adalah tanda gagal napas. RUJUK SEGERA!' }
    ]
  },
  {
    id: 'selulitis',
    name: 'Selulitis & Erisipelas',
    externalUrl: 'https://www.alomedika.com/penyakit/dermatovenereologi/selulitis/penatalaksanaan',
    icpc: 'S76',
    icd: 'L03',
    level: '4A',
    cat: 'Dermatologi',
    icon: '🦵',
    iconBg: '#ffebee',
    preview: 'Infeksi bakteri pada lapisan dermis dan hipodermis. Erisipelas ditandai merah cerah batas tegas, sedangkan selulitis merah batas tidak tegas dan lebih dalam.',
    masalah: 'Infeksi jaringan lunak (SSTI) akibat invasi bakteri melalui diskontinuitas kulit. Selulitis sering melibatkan ekstremitas bawah dan dapat berkembang menjadi selulitis supuratif atau nekrosis bila tidak diterapi adekuat.',
    overview: {
      etiologi: 'Paling sering Streptococcus beta-hemolyticus grup A dan Staphylococcus aureus.',
      epidemiologi: 'Sering terjadi pada dewasa di atas 50 tahun. Faktor risiko meliputi obesitas, limfedema kronis, tinea pedis (sebagai port d\'entry), dan diabetes melitus.',
      patofisiologi: 'Bakteri masuk melalui luka kecil, gigitan serangga, atau eksim, memicu respon inflamasi hebat pada dermis dan subkutan yang menyebabkan udem lokal, nyeri, dan panas.',
      komplikasi: ['Abses subkutan', 'Tromboflebitis', 'Limfangitis (garis merah menjalar)', 'Sepsis', 'Gangren / Fasiaitis Nekrotikans (Darurat!)']
    },
    anamnesis: [
      'Bengkak merah pada kulit yang terasa panas dan nyeri',
      'Area kemerahan meluas dengan cepat dalam hitungan jam/hari',
      'Riwayat luka sebelumnya (lecet, bekas garukan, gigitan serangga, atau sela jari kaki pecah-pecah)',
      'Sering disertai gejala sistemik: demam, menggigil, dan malaise'
    ],
    fisik: [
      'Erisipelas: Plak eritema warna merah cerah, batas TEGAS, permukaan menimbul, nyeri tekan (+)',
      'Selulitis: Eritema dengan batas TIDAK TEGAS, udem bengkak (pitting edema), kalor (terasa panas), dan nyeri tekan hebat',
      'Mungkin ada bulla atau lepuh di atas area yang meradang',
      'Limfadenopati regional (benjolan di lipat paha/ketiak sesuai lokasi infeksi)'
    ],
    penunjang: [
      'Pemeriksaan klinis adalah dasar diagnosis utama',
      'Darah Lengkap: Leukositosis dengan shift to the left',
      'LED / CRP: Meningkat sebagai penanda inflamasi',
      'Kultur cairan bulla atau pus (bila ada)'
    ],
    penunjangDetail: [
      { nama: 'Darah Lengkap', rasionalisasi: 'Melihat respon sistemik tubuh. Leukositosis yang tinggi mengindikasikan infeksi berat yang mungkin butuh rawat inap.' }
    ],
    diagnosis: [
      'Selulitis (Non-komplikata / Komplikata)',
      'Erisipelas'
    ],
    diagnosisBanding: ['Dermatitis Stasis (merah kronis pada kaki akibat gangguan katup vena)', 'DVT (Deep Vein Thrombosis — bengkak tungkai satu sisi, nyeri saat betis ditekan)', 'Dermatitis Kontak', 'Fasiaitis Nekrotikans (nyeri luar biasa jauh melampaui temuan klinis)'],
    tatalaksana: [
      { name: 'Cloxacillin / Amoxiclav', dose: '500 mg q8h (7-10 hari)', note: 'Antibiotik lini pertama pilihan' },
      { name: 'Clindamycin', dose: '300 mg q8h', note: 'Pilihan jika curiga infeksi MRSA atau alergi penisilin' },
      { name: 'Elevasi Tungkai', dose: '-', note: 'Wajib: Kaki diposisikan lebih tinggi dari jantung saat berbaring' }
    ],
    tatalaksanaDetail: {
      nonFarmakologi: [
        'Imobilisasi dan Elevasi: Sangat penting untuk mengurangi udem dan nyeri.',
        'Bed rest (istirahat total) selama fase akut.',
        'Kompres terbuka dengan NaCl 0.9% untuk mendinginkan area yang panas.',
        'Manajemen gatal atau penyakit penyerta (seperti tinea pedis) agar tidak menjadi port d\'entry lagi.'
      ],
      farmakologi: [
        {
          title: 'Antibiotik Oral (Lini Pertama)',
          items: [
            { name: 'Amoxicillin-Clavulanate', dose: '500-625 mg (3 kali sehari)', note: 'Efisien untuk spektrum luas kulit' },
            { name: 'Cloxacillin', dose: '500 mg (4 kali sehari)', note: 'Sangat baik untuk Staphylococcus sensitif penisilin' }
          ]
        },
        {
          title: 'Simtomatik',
          items: [
            { name: 'Ibuprofen', dose: '400 mg q8h', note: 'Anti-inflamasi dan analgetik' },
            { name: 'Paracetamol', dose: '500 mg q8h', note: 'Antipiretik' }
          ]
        }
      ]
    },
    edukasi: [
      'Antibiotik harus diminum habis sesuai resep meskipun bengkak sudah hilang',
      'Tandai batas kemerahan dengan spidol permanen untuk memantau apakah infeksi mengecil atau meluas ke arah jantung',
      'Upayakan tungkai yang sakit tetap lebih tinggi saat tidur',
      'Segera kembali jika demam sangat tinggi, bengkak makin hebat, atau muncul area kulit hitam/kebiruan'
    ],
    rujukan: [
      'Pasien dengan tanda sepsis (hipotensi, takikardia)',
      'Curiga Fasiaitis Nekrotikans (nyeri sangat hebat, kulit nekrosis/hitam, krepitasi)',
      'Selulitis di area wajah (risiko komplikasi otak)',
      'Gagal respon terhadap antibiotik oral setelah 48 jam',
      'Pasien dengan DM yang tidak terkontrol atau imunokompromis'
    ],
    prognosis: { vitam: 'Bonam', functionam: 'Bonam', sanationam: 'Bonam' },
    alerts: [
      { type: 'warn', text: 'Tandai batas merah dengan spidol. Jika dalam 24 jam meluas melewati batas tersebut, pertimbangkan ganti antibiotik atau RUJUK.' },
      { type: 'danger', text: 'Waspadai Fasiaitis Nekrotikans jika nyeri terasa amat sangat hebat namun tampilan kulit hanya merah ringan!' }
    ]
  },
  {
    id: 'ikterus_neonatorum',
    name: 'Ikterus Neonatorum',
    externalUrl: 'https://www.alomedika.com/penyakit/pediatri/ikterus-neonatorum',
    icpc: 'A95',
    icd: 'P59.9',
    level: '3A',
    cat: 'Pediatri',
    icon: '👶',
    iconBg: '#fff9c4',
    preview: 'Hiperbilirubinemia pada bayi baru lahir. Perlu skrining ketat untuk membedakan ikterus fisiologis dari patologis yang mengancam saraf pusat (Kernikterus).',
    masalah: 'Manifestasi klinis berupa pewarnaan kuning pada kulit dan sklera akibat akumulasi bilirubin indirek maupun direk. Muncul pada sekitar 60% bayi cukup bulan dan 80% bayi prematur.',
    overview: {
      etiologi: 'Produksi bilirubin meningkat (hemolisis), gangguan ambilan di hati, atau gangguan konjugasi (defisiensi enzim G6PD, inkompatibilitas ABO/Rh).',
      epidemiologi: 'Sangat sering ditemukan pada minggu pertama kehidupan. Risiko meningkat pada bayi prematur, BBLR, dan ketiadaan inisiasi menyusui dini (IMD).',
      patofisiologi: 'Pecahnya eritrosit melepaskan bilirubin indirek yang bersifat larut lemak (lipofilik). Jika kadar sangat tinggi dan melewati sawar darah otak, terjadi deposit di basal ganglia yang menyebabkan kerusakan permanen.',
      komplikasi: ['Kernikterus (Ensefalopati Bilirubin — ireversibel)', 'Gangguan pendengaran (tuli sensorineural)', 'CP (Cerebral Palsy) atetoid']
    },
    anamnesis: [
      'Kapan kuning pertama kali terlihat? (PENTING: <24 jam pertama = PATOLOGIS)',
      'Riwayat pemberian makan: Apakah bayi malas minum? Frekuensi BAK/BAB?',
      'Riwayat kelahiran: Berat badan lahir, trauma persalinan (sefalhematom)',
      'Riwayat Ibu: Golongan darah (ABO/Rh), riwayat anak sebelumnya yang kuning hebat',
      'Riwayat keluarga: Adanya penyakit kuning saat lahir atau penyakit darah'
    ],
    fisik: [
      'Pemeriksaan Visual dengan cara menekan kulit (Kramer Score):',
      'Kramer 1: Kepala & leher (total bilirubun ~5 mg/dL)',
      'Kramer 2: Sampai pusar (~9 mg/dL)',
      'Kramer 3: Sampai paha (~11 mg/dL)',
      'Kramer 4: Sampai lengan/tungkai bawah (~12-14 mg/dL)',
      'Kramer 5: Sampai telapak tangan/kaki (>15 mg/dL)',
      'Sklera ikterik, mukosa mulut kuning',
      'Tanda neurotoksisitas: Menangis melengking, letargi (bayi lunglai), atau opistotonus (tubuh melengkung)'
    ],
    penunjang: [
      'Kadar Bilirubin Total di Serum (TSB): Membandingkan dengan kurva Bhutani',
      'Glukosa Darah (cek hipoglikemia)',
      'Cek Golongan Darah Ibu dan Bayi (ABO/Rhesus)',
      'Pemeriksaan G6PD (bila tersedia)'
    ],
    penunjangDetail: [
      { nama: 'Bilirubin Serum Total', rasionalisasi: 'Satu-satunya parameter objektif untuk menentukan ambang batas dimulainya fototerapi atau transfusi tukar.' }
    ],
    diagnosis: [
      'Ikterus Fisiologis: Muncul hari ke-2/3, hilang hari ke-7, bilirubin <15',
      'Ikterus Patologis: Muncul <24 jam, atau tetap kuning >14 hari, atau kenaikan bilirubin >5 mg/dL/hari'
    ],
    diagnosisBanding: ['Breast Milk Jaundice (muncul minggu ke-2)', 'Breastfeeding Jaundice (akibat intake kurang)', 'Atresia Bilier (bilirubin direk naik, tinja dempul)', 'Sepsis Neonatorum'],
    tatalaksana: [
      { name: 'ASI Intensif', dose: 'Minim 8-12 kali per hari', note: 'Meningkatkan ekskresi bilirubin di feses' },
      { name: 'Fototerapi (Di RS)', dose: 'Sesuai ambang batas TSB', note: 'Mengubah bilirubin menjadi lumirubin yang larut air' }
    ],
    tatalaksanaDetail: {
      nonFarmakologi: [
        'Optimalisasi asupan ASI: Jangan memberikan cairan lain (air putih/dekstrosa) karena menghambat laktasi.',
        'Pemberian ASI setiap 2-3 jam sekali.',
        'Pemantauan berat badan harian dan jumlah popok (BAK minimal 6x/hari).',
        'Menjemur bayi di bawah matahari pagi (pukul 7-9): Berikan manfaat minimal untuk menurunkan bilirubin, tapi membantu pemenuhan Vitamin D.'
      ],
      farmakologi: [
        {
          title: 'Terapi Spesifik (Di Fasilitas Rujukan)',
          items: [
            { name: 'Fototerapi Intensif', dose: '-', note: 'Wajib menggunakan pelindung mata' },
            { name: 'Transfusi Tukar (Exchange Transfusion)', dose: '-', note: 'Bila bilirubin sangat tinggi mendekati kadar racun otak' }
          ]
        }
      ]
    },
    edukasi: [
      'Kuning pada bayi baru lahir adalah hal yang lumrah, NAMUN butuh pengawasan ketat di minggu pertama',
      'Segera lapor jika bayi malas menetek atau kuning sudah mencapai pusat (Kramer 3)',
      'Kuning di hari pertama (24 jam pertama) adalah kondisi bahaya',
      'Pastikan bayi mendapatkan ASI yang cukup banyak agar bilirubin keluar lewat tinja'
    ],
    rujukan: [
      'Kuning muncul < 24 jam setelah lahir (indikasi mutlak!)',
      'Bilirubin Total Serum ≥ 15 mg/dL (atau sesuai kurva rujukan)',
      'Ikterus menetap > 14 hari',
      'Tanda klinis berat: Bayi malas menetek, letargis, atau tangisan melengking',
      'Tinja berwarna putih seperti demul (curiga atresia bilier)'
    ],
    prognosis: { vitam: 'Bonam', functionam: 'Bonam (bila cepat)', sanationam: 'Bonam' },
    alerts: [
      { type: 'danger', text: 'Kuning < 24 jam pertama adalah Gawat Darurat Medik Pediatri!' },
      { type: 'warn', text: 'Tunda memandikan bayi di hari awal jika suhu belum stabil, namun jangan tunda pemeriksaan kuning.' }
    ]
  },
  {
    id: 'blefaritis',
    name: 'Blefaritis',
    externalUrl: 'https://www.alomedika.com/penyakit/oftalmologi/blefaritis',
    icpc: 'F72',
    icd: 'H01.0',
    level: '4A',
    cat: 'Mata',
    icon: '👁️',
    iconBg: '#e0f2f1',
    preview: 'Inflamasi kronis pada margo (tepi) kelopak mata. Menimbulkan rasa gatal, panas, dan adanya skuama (kerak) seperti ketombe di dasar bulu mata.',
    masalah: 'Peradangan pada kelopak mata yang seringkali bersifat kronis dan kambuhan. Kondisi ini dapat mengganggu stabilitas air mata, menyebabkan mata kering, dan meningkatkan risiko hordeolum (bintitan).',
    overview: {
      etiologi: 'Blefaritis Anterior (Stafilokokus atau Seboroik) and Blefaritis Posterior (disfungsi kelenjar Meibom). Sering terkait dengan dermatitis seboroik atau rosacea.',
      epidemiologi: 'Sangat umum dijumpai, menyerang semua kelompok usia. Sering dianggap sebagai iritasi mata biasa oleh pasien.',
      patofisiologi: 'Produksi kelenjar minyak abnormal atau kolonisasi bakteri Stafilokokus berlebih pada tepi kelopak menyebabkan iritasi kimiawi dan inflamasi pada permukaan konjungtiva dan kornea.',
      komplikasi: ['Mata kering (Dry Eye Syndrome)', 'Hordeolum / Kalazion', 'Keratitis (radang kornea)', 'Trikiasis (bulu mata tumbuh ke dalam)']
    },
    anamnesis: [
      'Gatal dan rasa panas pada tepi kelopak mata',
      'Rasa mengganjal atau seperti berpasir',
      'Kelopak mata tampak merah dan bengkak kering',
      'Kotoran mata yang kering (kerak) saat bangun pagi',
      'Mata cepat lelah saat membaca atau melihat gadget',
      'Riwayat berketombe pada rambut (sering menyertai blefaritis seboroik)'
    ],
    fisik: [
      'Eritema (merah) pada margo palpebra (tepi kelopak)',
      'Skuama (kerak) pada dasar bulu mata — menyerupai ketombe atau krusta kekuningan',
      'Kelingkingan kelenjar Meibom (pada blefaritis posterior)',
      'Injeksi konjungtiva (mata merah)',
      'Kerusakan bulu mata (rontok / Madarosis)'
    ],
    penunjang: [
      'Diagnosis utama berdasarkan pemeriksaan slit lamp atau lup',
      'Kultur usap margo palpebra (bila terapi standar gagal)'
    ],
    penunjangDetail: [
      { nama: 'Pemeriksaan Loop / Slit Lamp', rasionalisasi: 'Melihat detil skuama dan muara kelenjar Meibom untuk menentukan jenis blefaritis.' }
    ],
    diagnosis: [
      'Blefaritis Anterior (Stafilokokus / Seboroik)',
      'Blefaritis Posterior (Disfungsi Kelenjar Meibom)'
    ],
    diagnosisBanding: ['Konjungtivitis (merah dominan pada konjungtiva)', 'Hordeolum', 'Selulitis Preseptal (nyeri hebat, bengkak masif kelopak)', 'Tumor palpebra'],
    tatalaksana: [
      { name: 'Kompres Hangat', dose: '5-10 menit (2x sehari)', note: 'Melunakkan sumbatan kelenjar minyak' },
      { name: 'Lid Hygiene (Sampo Bayi)', dose: 'Setiap mandi', note: 'Bersihkan tepi kelopak dengan kasa/cotton bud' },
      { name: 'Eritromisin Salep Mata', dose: 'Oleskan q12h', note: 'Antibiotik topikal bila ada krusta purulen' }
    ],
    tatalaksanaDetail: {
      nonFarmakologi: [
        'Kompres Hangat: Gunakan waslap bersih yang dibasahi air hangat, tempelkan di mata tertutup. Membantu melunakkan kerak.',
        'Lid Hygiene: Membersihkan tepi kelopak mata menggunakan kapas yang dicelupkan ke air hangat yang dicampur sampo bayi (pH netral).',
        'Hindari penggunaan make-up mata (eyeliner/maskara) saat meradang.',
        'Hindari paparan debu dan asap.'
      ],
      farmakologi: [
        {
          title: 'Antibiotik Topikal',
          items: [
            { name: 'Eritromisin / Bacitracin Salep Mata', dose: 'Oleskan pada margo palpebra', note: 'Gunakan selama 7-14 hari' }
          ]
        },
        {
          title: 'Lubrikasi',
          items: [
            { name: 'Artificial Tears (Air Mata Buatan)', dose: '1 tetes q4-6h', note: 'Atasi gejala mata kering penyerta' }
          ]
        }
      ]
    },
    edukasi: [
      'Blefaritis seringkali bersifat kronis, pengobatan lid hygiene mungkin dibutuhkan seumur hidup agar tidak kambuh',
      'Cuci tangan sebelum menyentuh area mata',
      'Jangan mengucek mata karena bisa menyebabkan luka pada kornea',
      'Segera kembali jika pandangan menjadi kabur'
    ],
    rujukan: [
      'Gejala menetap atau memburuk setelah 2 minggu terapi',
      'Terjadi penurunan tajam penglihatan',
      'Muncul luka (ulkus) pada kornea mata'
    ],
    prognosis: { vitam: 'Bonam', functionam: 'Bonam', sanationam: 'Malam (kambuhan)' },
    alerts: [
      { type: 'ok', text: 'Kunci kesembuhan blefaritis adalah RUTINITAS membersihkan tepi kelopak mata setiap hari.' }
    ]
  },
  {
    id: 'perikondritis',
    name: 'Perikondritis',
    externalUrl: 'https://www.alomedika.com/penyakit/telinga-hidung-tenggorokan/perikondritis',
    icpc: 'H70',
    icd: 'H60.4',
    level: '3A',
    cat: 'THT',
    icon: '👂',
    iconBg: '#fff1f0',
    preview: 'Infeksi pada perikondrium (jaringan pelindung tulang rawan) daun telinga. Telinga tampak merah, bengkak, sangat nyeri, namun lobulus (cuping) tetap normal.',
    masalah: 'Infeksi yang berpotensi destruktif terhadap tulang rawan aurikula. Daun telinga yang terinfeksi dapat mengalami nekrosis karena pasokan darah dari perikondrium terputus.',
    overview: {
      etiologi: 'Pseudomonas aeruginosa (paling sering) atau Staphylococcus aureus. Faktor pemicu: tindik telinga (piercing), cedera saat olahraga kontak, atau infeksi telinga luar (otitis eksterna) yang tidak tertangani.',
      epidemiologi: 'Meningkat pada individu muda seiring tren tindik pada tulang rawan telinga.',
      patofisiologi: 'Bakteri masuk melalui luka kulit mencapai perikondrium, menyebabkan akumulasi pus (nanah) di antara perikondrium dan tulang rawan. Tekanan dari pus ini menyebabkan iskemia dan kematian tulang rawan.',
      komplikasi: ['Abses daun telinga', 'Nekrosis tulang rawan', 'Cauliflower Ear (Deformitas telinga permanen)', 'Kondritis']
    },
    anamnesis: [
      'Daun telinga bengkak dambil merah cerah',
      'Nyeri tekan yang hebat (sangat sensitif saat tersentuh)',
      'Riwayat tindik baru (< 1 bulan), trauma, atau gigitan serangga di telinga',
      'Gejala prodromal: demam ringan'
    ],
    fisik: [
      'Daun telinga (heliks, antiheliks) edema, hiperemis (merah), dan panas',
      'Tanda Kunci: Lobulus (cuping telinga) TIDAK MERAH/BENGKAK (karena lobulus tidak mengandung tulang rawan)',
      'Fluktuasi (+) bila sudah terbentuk abses daun telinga'
    ],
    penunjang: [
      'Pemeriksaan klinis',
      'Kultur dari pus (jika dilakukan insisi)'
    ],
    penunjangDetail: [
      { nama: 'Kultur dan Sensitivitas', rasionalisasi: 'Penting untuk memastikan apakah kuman Pseudomonas sensitif terhadap antibiotik yang diberikan.' }
    ],
    diagnosis: [
      'Perikondritis Aurikula',
      'Abses Daun Telinga'
    ],
    diagnosisBanding: ['Selulitis Daun Telinga (lobulus ikut terkena)', 'Relapsing Polychondritis (autoimun, mengenai kedua telinga)', 'Hematoma Aurikula (riwayat trauma pendarahan tanpa infeksi)'],
    tatalaksana: [
      { name: 'Ciprofloxacin', dose: '500 - 750 mg q12h', note: 'Wajib: Antibiotik anti-pseudomonas' },
      { name: 'Asam Mefenamat', dose: '500 mg q8h', note: 'Kontrol nyeri' },
      { name: 'Kompres Rivanol / Betadine', dose: 'prn', note: 'Kompres dingin untuk radang' }
    ],
    tatalaksanaDetail: {
      nonFarmakologi: [
        'Kompres dingin untuk mengurangi edema dan nyeri.',
        'Jangan tidur miring pada sisi telinga yang sakit.',
        'Bila ada bengkak fluktuatif, jangan mencoba memecah sendiri.'
      ],
      farmakologi: [
        {
          title: 'Antibiotik Spesifik',
          items: [
            { name: 'Ciprofloxacin Oral', dose: '500 mg (2-3 kali sehari)', note: 'Minimal selama 10 hari' }
          ]
        },
        {
          title: 'Penanganan Bedah (Di Rujukan)',
          items: [
            { name: 'Insisi dan Drainase', dose: '-', note: 'Bila terkumpul nanah/abses' }
          ]
        }
      ]
    },
    edukasi: [
      'Penyakit ini berbahaya bagi bentuk telinga, bisa menyebabkan "Telinga Bunga Kol" (berkerut/ciut) secara permanen',
      'Hindari tindik pada area tulang rawan (daun telinga atas)',
      'Obat harus diminum tepat waktu dan tuntas',
      'Jangan membongkar perban jika sudah diderainase oleh dokter'
    ],
    rujukan: [
      'Bila terbentuk ABSES (bengkak empuk/fluktuasi) — butuh insisi segera',
      'Pasien tidak membaik dengan antibiotik oral dalam 48 jam',
      'Kecurigaan keterlibatan tulang rawan yang lebih luas (kondritis)'
    ],
    prognosis: { vitam: 'Bonam', functionam: 'Dubia (risiko deformitas)', sanationam: 'Dubia (risiko residif)' },
    alerts: [
      { type: 'danger', text: 'Tanda khas: Lobulus (daun telinga bawah) bebas dari bengkak. Ini membedakan perikondritis dari selulitis biasa.' },
      { type: 'warn', text: 'Penundaan antibiotik yang tepat (Anti-Pseudomonas) dapat menyebabkan kehilangan bentuk telinga permanen.' }
    ]
  },
  {
    id: 'episkleritis',
    name: 'Episkleritis',
    externalUrl: 'https://www.alomedika.com/penyakit/oftalmologi/episkleritis',
    icpc: 'F81',
    icd: 'H15.1',
    level: '4A',
    cat: 'Mata',
    icon: '👁️',
    iconBg: '#ffebee',
    preview: 'Mata merah fokal (terbatas pada satu area putih mata). Terasa mengganjal, namun tidak disertai nyeri hebat atau gangguan penglihatan.',
    masalah: 'Inflamasi pada episklera, yaitu jaringan ikat vaskular antara konjungtiva dan sklera. Kondisi ini umumnya bersifat jinak, sembuh sendiri, dan tidak mengancam penglihatan.',
    overview: {
      etiologi: 'Sebagian besar idiopatik. Dapat dikaitkan dengan penyakit sistemik seperti Artritis Reumatoid, SLE, atau infeksi sistemik pada sebagian kecil kasus.',
      epidemiologi: 'Lebih sering pada wanita dewasa muda. Sering bersifat rekuren.',
      patofisiologi: 'Vasodilatasi pembuluh darah episklera superficialis akibat respon imun non-spesifik. Hal ini menyebabkan kemerahan yang terlokalisasi.',
      komplikasi: ['Skleritis (jarang progresif)', 'Iritis ringan (sangat jarang)']
    },
    anamnesis: [
      'Mata merah yang muncul mendadak pada satu mata',
      'Rasa mengganjal, seperti berpasir, atau nyeri tekan ringan',
      'Mata tidak berair banyak dan tidak ada kotoran mata yang lengket (membedakan dari konjungtivitis)',
      'Pandangan TETAP JELAS (tidak buram)',
      'Tidak ada riwayat trauma mata sebelumnya'
    ],
    fisik: [
      'Injeksi Episklera: Kemerahan terlokalisasi (sektoral), biasanya berbentuk segitiga dengan dasar di margo',
      'Pembuluh darah episklera tampak lebar, lurus, dan radier',
      'Tes Fenilefrin 2.5%: Pembuluh darah segera mengecil/memucat (membedakan dengan skleritis)',
      'Nodul (+) pada tipe episkleritis nodular (nodul dapat digerakkan dari dasarnya)',
      'Palpasi: Nyeri tekan minimal'
    ],
    penunjang: [
      'Pemeriksaan fisik mata (Lup / Slit lamp)',
      'Tes Fenilefrin (bila diperlukan)'
    ],
    penunjangDetail: [
      { nama: 'Tes Fenilefrin 2.5%', rasionalisasi: 'Membantu membedakan episkleritis (pembuluh darah menyempit) dari skleritis (pembuluh darah tetap merah) yang lebih berbahaya.' }
    ],
    diagnosis: [
      'Episkleritis Simple (Sektoral)',
      'Episkleritis Nodular'
    ],
    diagnosisBanding: ['Skleritis (Nyeri sangat hebat, mata merah gelap/ungu, tes fenilefrin negatif)', 'Konjungtivitis (merah merata, ada sekret/kotoran mata)', 'Pterygium meradang', 'Pinguekulitis'],
    tatalaksana: [
      { name: 'Artificial Tears', dose: '1 tetes (4-6 kali sehari)', note: 'Memberikan efek sejuk dan mengurangi gesekan' },
      { name: 'NSAIDs Oral (misal: Ibuprofen)', dose: '400 mg q8h', note: 'Diberikan bila ada rasa nyeri atau nodul yang mengganggu' },
      { name: 'Kortikosteroid Topikal Ringan', dose: '-', note: 'Hanya di bawah pengawasan spesialis untuk kasus berat' }
    ],
    tatalaksanaDetail: {
      nonFarmakologi: [
        'Observasi: Karena bersifat self-limiting, kasus ringan tidak butuh obat spesifik.',
        'Kompres Dingin: Membantu kenyamanan dan mengurangi vasodilatasi.',
        'Gunakan kacamata pelindung untuk menghindari iritasi angin atau debu.',
        'Jangan mengucek mata.'
      ],
      farmakologi: [
        {
          title: 'Lubrikasi',
          items: [
            { name: 'Air Mata Buatan (Artificial Tears)', dose: 'q2-4h prn', note: 'Pilih sediaan tanpa pengawet jika pemakaian sering' }
          ]
        },
        {
          title: 'Anti-Inflamasi (Bila Perlu)',
          items: [
            { name: 'Ibuprofen / Natrium Diklofenak', dose: 'Oral q8-12h', note: 'Membantu resolusi peradangan lebih cepat' }
          ]
        }
      ]
    },
    edukasi: [
      'Kemerahan ini tidak menular dan bukan infeksi kuman',
      'Penyakit ini biasanya akan sembuh sendiri dalam 7-14 hari tanpa pengobatan khusus',
      'Segera kembali ke dokter jika mata terasa makin nyeri, silau, atau pandangan menjadi kabur',
      'Hindari pemicu seperti debu atau asap rokok'
    ],
    rujukan: [
      'Nyeri okular sangat hebat dan dalam (deep boring pain) — curiga skleritis',
      'Mata merah tidak membaik setelah 14 hari',
      'Pandangan mendadak menjadi kabur',
      'Pasien dengan riwayat penyakit autoimun sistemik'
    ],
    prognosis: { vitam: 'Bonam', functionam: 'Bonam', sanationam: 'Bonam (namun sering kambuh)' },
    alerts: [
      { type: 'ok', text: 'Episkleritis bersifat jinak dan TIDAK menyebabkan kebutaan.' },
      { type: 'warn', text: 'Waspadai SKLERITIS bila mata merah disertai nyeri hebat yang membangunkan pasien di malam hari.' }
    ]
  },
  {
    id: 'hfmd',
    name: 'HFMD (Flu Singapura)',
    externalUrl: 'https://www.alomedika.com/penyakit/penyakit-infeksi/hand-foot-and-mouth-disease',
    icpc: 'S99',
    icd: 'B08.4',
    level: '4A',
    cat: 'Pediatri',
    icon: '👶',
    iconBg: '#fffaced',
    preview: 'Penyakit Tangan, Kaki, dan Mulut. Gejala khas: demam ringan, sariawan di mulut, serta bintil/vesikel merah di telapak tangan dan kaki.',
    masalah: 'Penyakit virus menular (Hand, Foot, and Mouth Disease) yang umumnya menyerang anak-anak. Meski jarang berbahaya, HFMD menyebabkan anak sangat tidak nyaman karena sariawan yang menyakitkan.',
    overview: {
      etiologi: 'Enterovirus, paling sering Coxsackievirus A16 dan Enterovirus 71 (telah dikaitkan dengan komplikasi neurologis).',
      epidemiologi: 'Terutama pada anak usia < 5 tahun, namun bisa terjadi pada dewasa. Penularan melalui rute fekal-oral atau sekresi pernapasan (droplet).',
      patofisiologi: 'Virus bereplikasi di orofaring dan saluran cerna, kemudian menyebar secara sistemik melalui pembuluh darah (viremia), menimbulkan lesi di area spesifik yang memiliki reseptor virus tersebut.',
      komplikasi: ['Dehidrasi (akibat anak tidak mau minum karena sariawan)', 'Meningitis aseptik (jarang)', 'Ensefalitis (sangat jarang)', 'Onychomadesis (kuku lepas beberapa minggu pasca sakit)']
    },
    anamnesis: [
      'Demam ringan hingga sedang yang muncul mendadak',
      'Nyeri tenggorokan dan lesi mulut (sariawan)',
      'Napsu makan dan minum sangat menurun (anak rewel)',
      'Muncul bintik merah atau lentingan (vesikel) di telapak tangan, telapak kaki, dan bokong',
      'Riwayat teman sekolah atau saudara yang menderita sakit serupa'
    ],
    fisik: [
      'Enantema (lesi mulut): Vesikel kecil yang cepat pecah menjadi ulkus (borok) di lidah, palatum, dan mukosa pipi',
      'Eksantema (lesi kulit): Makula eritema menuju vesikel lonjong warna abu-abu (greyish) dengan dasar merah pada tangan, kaki, dan area popok',
      'Ruam biasanya TIDAK gatal',
      'Tanda dehidrasi: turgor lambat, mata cowong, atau ubun-ubun cekung (pada bayi)'
    ],
    penunjang: [
      'Diagnosis klinis (berdasarkan lokasi ruam yang khas)',
      'Tenggorok usap / kultur tinja (hanya untuk penelitian/epidemiologi)'
    ],
    penunjangDetail: [
      { nama: 'Pemeriksaan Klinis', rasionalisasi: 'Trias demam, sariawan mulut, dan ruam ekstremitas adalah diagnostik kuat HFMD.' }
    ],
    diagnosis: [
      'Hand, Foot, and Mouth Disease'
    ],
    diagnosisBanding: ['Herpangina (lesi hanya di mulut)', 'Varisela (ruam seluruh tubuh, gatal, lenting lebih bulat)', 'Aptous Stomatitis (sariawan biasa tanpa ruam kaki/tangan)', 'Campak (gejala respiratorik dominan, bercak koplik)'],
    tatalaksana: [
      { name: 'Paracetamol', dose: '10 - 15 mg/kgBB q6-8h', note: 'Kontrol demam dan nyeri mulut (paling utama)' },
      { name: 'Cairan Dingin / Es Krim', dose: '-', note: 'Es krim/yogurt membantu meredakan nyeri mulut and asupan kalori' },
      { name: 'Susu / Air Putih', dose: 'Ad libitum', note: 'Pastikan hidrasi setiap jam' }
    ],
    tatalaksanaDetail: {
      nonFarmakologi: [
        'Isolasi di rumah: Jangan sekolah sampai bintil mengering (biasanya 7-10 hari).',
        'Hidrasi Aktif: Berikan minuman dingin atau suhu ruang seteguk demi seteguk jika anak sulit menelan.',
        'Modifikasi Diet: Makanan lembut, lunak, tidak pedas, dan tidak asam (hindari jeruk).',
        'Cuci tangan dengan sabun bagi pengasuh setelah mengganti popok.'
      ],
      farmakologi: [
        {
          title: 'Manajemen Gejala',
          items: [
            { name: 'Paracetamol / Ibuprofen', dose: 'Sesuai BB', note: 'Obat utama untuk membantu anak mau makan kembali' }
          ]
        },
        {
          title: 'Topikal Mulut (Bila Perlu)',
          items: [
            { name: 'Aloclair / Salicin Oral Gel', dose: 'Oleskan pada ulkus', note: 'Membantu melapisi sariawan' }
          ]
        }
      ]
    },
    edukasi: [
      'Penyakit ini disebabkan virus dan akan sembuh sendiri (tidak butuh antibiotik)',
      'Bahaya utama adalah DEHIDRASI bukan ruamnya. Berikan es krim jika anak mogok minum air putih',
      'Hindari berbagi peralatan makan dengan anak lain',
      'Virus masih bisa ditemukan di tinja sampai beberapa minggu setelah sembuh — tetap disiplin cuci tangan'
    ],
    rujukan: [
      'Tanda dehidrasi berat (tidak kencing >6 jam)',
      'Intake cairan tidak masuk sama sekali akibat nyeri hebat',
      'Terjadi Kejang',
      'Kelumpuhan otot mendadak atau tremor hebat',
      'Demam tinggi menetap > 39°C yang sulit turun'
    ],
    prognosis: { vitam: 'Bonam', functionam: 'Bonam', sanationam: 'Bonam' },
    alerts: [
      { type: 'ok', text: 'ES KRIM atau YOGURT DINGIN sangat disarankan untuk membantu anak mendapatkan cairan and kalori tanpa rasa sakit.' },
      { type: 'warn', text: 'Jangan memberikan antibiotik atau steroid karena HFMD murni disebabkan oleh virus.' }
    ]
  },
  {
    id: 'lepra',
    name: 'Lepra (Morbus Hansen)',
    externalUrl: 'https://www.alomedika.com/penyakit/penyakit-infeksi/lepra',
    icpc: 'S71',
    icd: 'A30',
    level: '4A',
    cat: 'Dermatologi',
    icon: '🌿',
    iconBg: '#e2e8f0',
    preview: 'Penyakit infeksi kronis yang menyerang kulit dan saraf tepi. Gejala utama: bercak kulit mati rasa (baal) dan penebalan saraf perifer.',
    masalah: 'Infeksi tuberkuloid akibat Mycobacterium leprae. Tanpa deteksi dini, lepra menyebabkan kecacatan permanen yang menyebabkan stigma sosial yang berat.',
    overview: {
      etiologi: 'Mycobacterium leprae, bakteri tahan asam (BTA) obligat intraseluler yang memiliki afinitas terhadap sel Schwann saraf tepi dan sel kulit.',
      epidemiologi: 'Indonesia termasuk salah satu negara dengan jumlah kasus baru yang masih tinggi di dunia. Penularan melalui droplet saluran napas dalam kontak lama dan erat.',
      patofisiologi: 'Bakteri merusak serabut saraf otonom, sensorik, dan motorik. Kerusakan ini menyebabkan kulit kering (tidak berkeringat), mati rasa, dan kelemahan otot yang mengarah pada kontraktur dan ulkus.',
      komplikasi: ['Cacat permanen (Lagophthalmos, claw hand, drop foot)', 'Reaksi Lepra tipe 1 & 2', 'Ulkus kornea (karena tidak bisa menutup mata)', 'Gagal ginjal (amiloidosis sekunder)']
    },
    anamnesis: [
      'Bercak kulit yang bertambah banyak dan mati rasa (tidak bisa merasakan panas/sentuhan)',
      'Adanya anggota keluarga atau tetangga yang menderita bercak serupa',
      'Keluhan tangan atau kaki terasa kesemutan, baal, atau lemah',
      'Luka (borok) di kaki yang tidak kunjung sakit dan tidak sembuh-sembuh',
      'Alis mata rontok (Madarosis)'
    ],
    fisik: [
      'Bercak kulit (Makula): Hipopigmentasi (putih) atau eritermatosa (merah). Tes rasa raba (-) menggunakan kapas.',
      'Saraf Tepi: Penebalan saraf (N. ulnaris, N. auricularis magnus, N. peroneus communis) yang sering disertai nyeri tekan.',
      'Gangguan Fungsi Saraf: Kulit kering (tidak berkeringat), kelemahan otot (atropi), gangguan sensorik.',
      'Facies Leonina: Wajah berbenjol-benjol (pada tipe MB berat).'
    ],
    penunjang: [
      'Skin Smear (BTA): Kerokan jaringan lobulus telinga dan lesi kulit aktif.',
      'Biopsi Kulit (bila diagnosis meragukan).'
    ],
    penunjangDetail: [
      { nama: 'BTA (Skin Smear)', rasionalisasi: 'Membantu klasifikasi tipe kusta (PB vs MB) dan memantau respon pengobatan.' }
    ],
    diagnosis: [
      'Lepra tipe PB (Pausibasiler): Bercak 1-5, saraf menebal 1, BTA (-)',
      'Lepra tipe MB (Multibasiler): Bercak >5, saraf menebal >1, BTA (+)'
    ],
    diagnosisBanding: ['Tinea Corporis (gatal, tepi aktif kemerahan)', 'Pityriasis Versicolor (panu — ada gatal)', 'Pityriasis Alba', 'Vitiligo (putih susu murni, rasa raba normal)'],
    tatalaksana: [
      { name: 'MDT-PB (Regimen 6 Bulan)', dose: 'Rifampisin + Dapsone', note: 'Diminum selama 6-9 bulan' },
      { name: 'MDT-MB (Regimen 12 Bulan)', dose: 'Rifampisin + Dapsone + Clofazimine', note: 'Diminum selama 12-18 bulan' }
    ],
    tatalaksanaDetail: {
      nonFarmakologi: [
        'Perawatan Diri: Rendam kaki/tangan yang baal di air tiap hari untuk melembabkan kulit.',
        'Pemberian pelembab (minyak kelapa/lotion) agar kulit tidak pecah-pecah.',
        'Gunakan pelindung: Sepatu/alas kaki yang empuk, kacamata untuk cegah debu ke mata.',
        'Jangan melakukan pekerjaan yang berisiko luka saat tangan mati rasa.'
      ],
      farmakologi: [
        {
          title: 'Multi Drug Therapy (MDT) Gratis Puskesmas',
          items: [
            { name: 'Rifampisin', dose: '600 mg (1x sebulan diawasi)', note: 'Bakterisid kuat' },
            { name: 'Dapsone (DDS)', dose: '100 mg (setiap hari)', note: 'Bakteriostatik' },
            { name: 'Clofazimine (Lamprene)', dose: '300 mg (sebulan) & 50 mg (harian)', note: 'Hanya untuk tipe MB' }
          ]
        }
      ]
    },
    edukasi: [
      'Obat harus diminum disiplin tanpa putus agar tidak kebal kuman dan tidak cacat',
      'Lepra bukan kutukan atau penyakit keturunan, kuman ini menular tapi obatnya tersedia gratis',
      'Pemeriksaan kontak: Semua orang serumah harus diperiksa oleh petugas kesehatan',
      'MDT akan mengubah warna kulit/urin menjadi kecoklatan/merah, itu NORMAL'
    ],
    rujukan: [
      'Reaksi Kusta: Adanya benjolan merah nyeri baru, demam, atau kelemahan saraf mendadak',
      'Efek samping obat MDT (misal: anemia berat, kelainan fungsi hati)',
      'Luka (ulkus) yang menetap dan berbau',
      'Kecacatan yang membutuhkan rekonstruksi bedah'
    ],
    prognosis: { vitam: 'Bonam', functionam: 'Dubia (tergantung cacat)', sanationam: 'Dubia (risiko reaksi)' },
    alerts: [
      { type: 'danger', text: 'BERCAK PUTIH BAAL/MATI RASA adalah KUSTA sampai terbukti bukan. Segera periksakan saraf tepi!' },
      { type: 'warn', text: 'Reaksi Kusta (Reversal/ENL) adalah kondisi emergency yang butuh steroid segera untuk cegah cacat permanen.' }
    ]
  },
  {
    id: 'fraktur_suspek',
    name: 'Fraktur (Suspek / Tertutup)',
    externalUrl: 'https://www.alomedika.com/penyakit/ortopedi/fraktur/penatalaksanaan',
    icpc: 'L76',
    icd: 'T14.2',
    level: '3B',
    cat: 'Bedah & Emergensi',
    icon: '🦴',
    iconBg: '#fff1f0',
    preview: 'Patah atau retak pada tulang akibat trauma. Ditandai dengan nyeri hebat, deformitas (perubahan bentuk), dan krepitasi.',
    masalah: 'Terputusnya kontinuitas jaringan tulang (fraktur). Manajemen awal difokuskan pada imobilisasi saraf dan pembuluh darah agar tidak terjadi cedera sekunder sekunder fatal sampai dilakukan tindakan bedah definitif.',
    overview: {
      etiologi: 'Trauma langsung (benturan), trauma tidak langsung (rotasi/putar), atau fraktur patologis (tulang rapuh akibat osteoporosis/kanker).',
      epidemiologi: 'Sangat sering akibat kecelakaan lalu lintas atau jatuh dari ketinggian.',
      patofisiologi: 'Energi kinetik besar merusak struktur kalsium tulang dan merobek periosteum serta otot sekitar, menyebabkan perdarahan dan pembengkakan hebat.',
      komplikasi: ['Syok hipovolemik (pada fraktur femur/pelvis)', 'Compartment Syndrome (darurat bedah)', 'Emboli lemak', 'Cedera saraf & pembuluh darah', 'Malunion / Non-union']
    },
    anamnesis: [
      'Riwayat trauma yang jelas: jatuh, kecelakaan, atau tertimpa benda berat',
      'Nyeri yang amat sangat tajam dan mendalam di area cedera',
      'Anggota gerak tidak bisa digerakkan atau menumpu beban',
      'Mati rasa atau dingin pada anggota tubuh bagian bawah lokasi patah (waspada cedera pembuluh darah)',
      'Tanyakan mekanisme trauma secara detil'
    ],
    fisik: [
      'LOOK (Inspeksi): Deformitas (angulasi, rotasi, perpendekan), bengkak masif, memar kebiruan, atau luka terbuka.',
      'FEEL (Palpasi): Nyeri tekan titik (point tenderness), diskontinuitas tulang, atau krepitasi (jangan dicari sengaja).',
      'MOVE (Gerak): Pasien tidak sanggup melakukan gerakan aktif (loss of function).',
      'Status Neurovaskular: Cek denyut nadi distal dan pengisian kapiler (CRT).'
    ],
    penunjang: [
      'Rontgen (X-Ray): Wajib mengikuti prinsip "RULE OF TWO" (2 Posisi-AP/Lat, 2 Sendi di atas dan bawah, 2 Waktu, 2 Sisi).',
      'Darah Lengkap: Bila dicurigai perdarahan internal hebat.'
    ],
    penunjangDetail: [
      { nama: 'Rontgen Tulang (X-Ray)', rasionalisasi: 'Melihat garis patahan, pergeseran tulang, dan jenis fraktur untuk rencana pembidaian or operasi.' }
    ],
    diagnosis: [
      'Fraktur Tertutup (Grade I - III)',
      'Fraktur Terbuka (Grade I - III berdasarkan Gustilo-Anderson)'
    ],
    diagnosisBanding: ['Dislokasi Sendi (perubahan bentuk pada area sendi)', 'Sprain (keseleo ligamen)', 'Kontusio Otot / Hematoma'],
    tatalaksana: [
      { name: 'Pembidaian (Splinting)', dose: '-', note: 'Wajib: Bidai melewati 2 sendi yang mengapit tulang yang patah' },
      { name: 'Analgetik Kuat', dose: 'Ketorolac 30 mg IV / Petidin', note: 'Mengatasi nyeri hebat pasca trauma' },
      { name: 'Antibiotik Profilaksis', dose: 'Sefazolin 2 gram IV', note: 'Hanya untuk FRAKTUR TERBUKA' }
    ],
    tatalaksanaDetail: {
      nonFarmakologi: [
        'Prinsip 4R: Recognition (diagnosis), Reduction (reposisi), Retention (imobilisasi), Rehabilitation.',
        'Initial Assessment: Cek Airway, Breathing, Circulation (ABC).',
        'Imobilisasi: Pasang bidai segera setelah diagnosa suspek tegak untuk cegah syok nyeri dan kerusakan saraf/vaskular.',
        'Elevasi Ekstremitas: Kurangi pembengkakan.',
        'Hentikan Perdarahan: Tekan langsung (direct pressure) jika ada luka terbuka.'
      ],
      farmakologi: [
        {
          title: 'Manajemen Nyeri (Pain Control)',
          items: [
            { name: 'Ketorolac / Asam Mefenamat / Morfin', dose: 'Sesuai intensitas nyeri', note: 'Nyeri hebat butuh analgetik injeksi' }
          ]
        },
        {
          title: 'Emergency Medis (Fraktur Terbuka)',
          items: [
            { name: 'Anti Tetanus (ATS/TT)', dose: 'Injeksi IM', note: 'Wajib pada semua luka terbuka kotor' },
            { name: 'Ceftriaxone / Cefazolin', dose: 'IV Dosis Awal', note: 'Pencegahan infeksi tulang (osteomielitis)' }
          ]
        }
      ]
    },
    edukasi: [
      'JANGAN melakukan pemijatan atau urut, karena bisa menyebabkan patahan tulang menusuk pembuluh darah atau saraf utama',
      'Upayakan bagian yang patah jangan banyak digerakkan sampai dirujuk',
      'Bila bidai terasa terlalu kencang atau jari kaki/tangan terasa dingin/kebas, segera lapor petugas',
      'Kebutuhan operasi akan ditentukan oleh dokter spesialis bedah tulang'
    ],
    rujukan: [
      'SEMUA kasus suspek fraktur harus dirujuk ke Rumah Sakit dengan fasilitas Rontgen dan Spesialis Orthopedi',
      'Kondisi Darurat (RUJUK SEGERA): Fraktur terbuka, fraktur dengan gangguan nadi distal, atau Compartment Syndrome (nyeri sangat hebat saat jari digerakkan pasif)'
    ],
    prognosis: { vitam: 'Bonam', functionam: 'Dubia (tergantung presisi reposisi)', sanationam: 'Bonam' },
    alerts: [
      { type: 'danger', text: 'FRAKTUR TERBUKA adalah ancaman infeksi tulang kronis. Jangan menunda antibiotik dan rujukan!' },
      { type: 'warn', text: 'Waspadai Compartment Syndrome: Nyeri amat sangat hebat, pucat, dan nadi tidak teraba di bagian bawah lokasi patah!' }
    ]
  },
  {
    id: 'snake_bite',
    name: 'Gigitan Ular (Snake Bite)',
    icpc: 'S12',
    icd: 'T63.0',
    level: '3B',
    cat: 'Bedah & Emergensi',
    icon: '🐍',
    iconBg: '#fff1f0',
    preview: 'Manajemen awal gigitan ular. Perlu identifikasi ular berbisa (venomous) dan tanda reaksi sistemik.',
    masalah: 'Penyebab keracunan (envenomation) akibat masuknya bisa ular ke jaringan tubuh.',
    anamnesis: ['Kapan dan di mana digigit?', 'Jenis ular (bila tahu): warna, bentuk kepala, pola kulit', 'Gejala: rasa terbakar, bengkak meluas, lemas, sesak napas'],
    fisik: ['LUKA GIGITAN: bekas taring (fang marks), bengkak lokal, perdarahan merembes, atau lepuh', 'Gejala Sistemik: pusing, mual, kelemahan otot, kencing warna gelap, atau perdarahan di gusi'],
    penunjang: ['Waktu Pembekuan Darah (20 Minute Whole Blood Clotting Test/WBCT20)'],
    diagnosis: ['Gigitan Ular Berbisa / Tidak Berbisa.'],
    tatalaksana: [
      { name: 'Imobilisasi Sendi', dose: '-', note: 'Pasang bidai agar bagian tubuh yang digigit TIDAK BERGERAK (mencegah penyebaran bisa lewat getah bening)' },
      { name: 'SABU (Serum Anti Bisa Ular)', dose: '2-5 flakon dalam NaCl', note: 'Hanya beri jika ada tanda sistemik atau bengkak meluas cepat' },
      { name: 'TIDAK BOLEH: Dihisap, Diikat kuat (Tourniquet), Disayat', dose: '-', note: 'Tindakan salah yang berbahaya' }
    ],
    edukasi: ['Tetap tenang dan jangan banyak bergerak', 'Jangan buang waktu dengan pengobatan alternatif', 'Segera ke RS yang memiliki stok SABU'],
    rujukan: ['Wajib dirujuk bila ada tanda bisa (Venom) sistemik atau bengkak yang meluas melampaui sendi'],
    prognosis: { vitam: 'Dubia', functionam: 'Bonam', sanationam: 'Bonam' },
    alerts: [
      { type: 'danger', text: 'SABU Polivalen di Indonesia hanya untuk ular: Kobra, Belang (Krait), dan Tanah. Tidak efektif untuk ular Hijau atau King Kobra.' }
    ]
  },
  {
    id: 'artritis_reumatoid',
    name: 'Artritis Reumatoid',
    externalUrl: 'https://www.alomedika.com/penyakit/reumatologi/artritis-reumatoid',
    icpc: 'L88',
    icd: 'M06.9',
    level: '3A',
    cat: 'Neurologi',
    icon: '🤲',
    iconBg: '#f3e5f5',
    preview: 'Penyakit autoimun sistemik yang menyebabkan peradangan sendi secara kronis and simetris (kanan-kiri).',
    masalah: 'Artritis Reumatoid (RA) adalah gangguan autoimun di mana sistem imun tubuh menyerang jaringan sendinya sendiri, terutama pada persendian kecil di tangan dan kaki. Jika tidak diobati dengan DMARDs sejak dini, RA dapat menyebabkan kerusakan sendi permanen dan kecacatan berat.',
    overview: {
      etiologi: 'Autoimun (interaksi antara kerentanan genetik/HLA-DRB1 dan faktor lingkungan seperti merokok).',
      epidemiologi: 'Menyerang sekitar 0.5-1% populasi dunia. Lebih sering pada wanita (rasio 3:1) dengan onset usia 30-50 tahun.',
      patofisiologi: 'Sinovitis kronis yang merusak kartilago and erosi tulang di tepian sendi akibat hiperplasia membran sinovial (Pannus) yang dipicu oleh sitokin proinflamasi (TNF-α, IL-1, IL-6).',
      komplikasi: ['Deformitas sendi permanen (Swan neck, Boutonniere)', 'Ankilosis (kekakuan sendi parah)', 'Sindrom Sjogren (mata/mulut kering)', 'Vaskulitis', 'Risiko penyakit kardiovaskular meningkat']
    },
    anamnesis: [
      'Nyeri dan bengkak sendi yang bersifat simetris (pada kedua tangan/lutut/pergelangan)',
      'Kaku sendi pada pagi hari yang berlangsung lama (> 60 menit)',
      'Nyeri membaik bila digunakan untuk beraktivitas (berlawanan dengan Osteoartritis)',
      'Mudah lelah, demam ringan, dan penurunan berat badan (gejala sistemik)',
      'Hambatan dalam melakukan pekerjaan halus (misal: mengancingkan baju, memegang koin)'
    ],
    fisik: [
      'Sinovitis aktif: Bengkak sendi yang terasa lunak/spongey (seperti spons)',
      'Nyeri tekan pada sendi MCP (metakarpofalangeal) and PIP (proximal interfalangeal)',
      'Penurunan kekuatan genggaman tangan',
      'Deformitas lanjut: Ulnar deviation (tangan mengarah ke kelingking), boutonniere deformity, nodul reumatoid di bawah kulit.'
    ],
    penunjang: [
      'Faktor Reumatoid (RF) atau Anti-CCP (Paling spesifik) (+)',
      'LED dan CRP meningkat tajam saat fase aktif radang',
      'Rontgen Manus / Pedis: Tampak erosi tulang di tepi sendi and penyempitan celah sendi.'
    ],
    penunjangDetail: [
      { nama: 'Anti-Cyclic Citrullinated Peptide (Anti-CCP)', rasionalisasi: 'Penanda diagnostik paling sensitif dan spesifik untuk Artritis Reumatoid dibandingkan Faktor Reumatoid biasa.' }
    ],
    diagnosis: [
      'Artritis Reumatoid (berdasarkan kriteria ACR/EULAR 2010)'
    ],
    diagnosisBanding: ['Osteoartritis (kaku pagi <30 menit, mengenai sendi besar beban berat)', 'Artritis Gout Kronis', 'SLE (Lupus — ruam wajah malar rash)', 'Artritis Septik (akut, monoartritis, demam tinggi)'],
    tatalaksana: [
      { name: 'Methotrexate (MTX)', dose: '7.5 - 20 mg (1x Per MINGGU)', note: 'DMARDs lini pertama wajib dengan Asam Folat' },
      { name: 'Natrium Diklofenak', dose: '50 mg q12h prn', note: 'NSAID hanya untuk kurangi nyeri saat flare' },
      { name: 'Methylprednisolone', dose: '4 - 8 mg/hari', note: 'Dosis rendah sebagai bridging therapy sampai MTX bekerja' }
    ],
    tatalaksanaDetail: {
      nonFarmakologi: [
        'Istirahatkan sendi saat fase akut peradangan (Flare).',
        'Fisioterapi dan latihan lingkup gerak sendi untuk cegah kontraktur.',
        'Gunakan alat bantu jika mobilitas terganggu.',
        'Kompres hangat atau mandi air hangat di pagi hari untuk bantu mengurangi kekakuan.'
      ],
      farmakologi: [
        {
          title: 'DMARDs (Pencapai Remisi)',
          items: [
            { name: 'Methotrexate', dose: '1x seminggu', note: 'Monitor fungsi hati and darah rutin' },
            { name: 'Sulfasalazine / Leflunomide', dose: 'Sesuai indikasi dokter spesialis', note: 'Alternatif atau kombinasi MTX' }
          ]
        },
        {
          title: 'Analgetik & Anti-Inflamasi',
          items: [
            { name: 'Meloxicam / Celecoxib', dose: 'Pilih NSAID selektif cox-2 bila ada riwayat lambung', note: 'Gunakan saat nyeri hebat' },
            { name: 'Asam Folat', dose: '1-5 mg/minggu', note: 'Wajib diberikan 24 jam SETELAH minum Methotrexate' }
          ]
        }
      ]
    },
    edukasi: [
      'Methotrexate HANYA diminum SATU KALI SEMINGGU. Kesalahan minum setiap hari sangat berbahaya (toksisitas sumsum tulang)',
      'Tujuan terapi adalah mencapai remisi (bebas nyeri) dan mencegah cacat, bukan sekadar hilangkan nyeri sesaat',
      'RA adalah kondisi jangka panjang yang membutuhkan kepatuhan berobat bertahun-tahun',
      'Segera lapor jika ada sariawan banyak atau rambut rontok saat minum Methotrexate'
    ],
    rujukan: [
      'Semua kasus baru suspek RA harus dirujuk ke Dokter Spesialis Penyakit Dalam (Konsultan Reumatologi) untuk inisiasi penatalaksanaan DMARDs segera (Window of opportunity)'
    ],
    prognosis: { vitam: 'Bonam', functionam: 'Dubia (risiko deformitas)', sanationam: 'Malam (membutuhkan terapi jangka panjang)' },
    alerts: [
      { type: 'danger', text: 'Hati-hati: Methotrexate HANYA dikonsumsi seminggu sekali. Hindari pemberian pada wanita hamil (teratogenik).' },
      { type: 'warn', text: 'Kerusakan sendi ireversibel pada RA terjadi dalam 2 tahun pertama jika tidak diberikan DMARDs.' }
    ]
  },
  {
    id: 'xeroftalmia',
    name: 'Xeroftalmia (Kurang Vitamin A)',
    icpc: 'F85',
    icd: 'E50',
    level: '4A',
    cat: 'Mata',
    icon: '👁️',
    iconBg: '#fff9c4',
    preview: 'Kerusakan mata akibat kekurangan Vitamin A. Gejala: buta senja dan muncul bercak Bitot (putih berbusa) di bagian putih mata.',
    masalah: 'Manifestasi mata akibat defisiensi vitamin A sistemik.',
    anamnesis: ['Buta Senja (Hemeralopia): sulit melihat saat senja atau di tempat gelap', 'Mata terasa kering dan gatal', 'Riwayat kurang gizi atau diare kronis'],
    fisik: ['Bercak Bitot: bercak putih seperti busa sabun pada konjungtiva bulbi', 'Konjungtiva kering (Xerosis)', 'Bila berat: kornea keruh (Xerosis kornea) hingga melunak (Keratomalasia)'],
    penunjang: ['Tes fungsi penglihatan di tempat gelap'],
    diagnosis: ['Xeroftalmia Stadium...'],
    tatalaksana: [
      { name: 'Kapsul Vitamin A (Dosis Tinggi)', dose: '200.000 IU (Merah) / 100.000 IU (Biru)', note: 'Jadwal: Hari 1, Hari 2, dan 2 minggu kemudian' },
      { name: 'Artificial Tears', dose: 'q4h', note: 'Membasahi mata' }
    ],
    edukasi: ['Makan makanan tinggi Vitamin A: wortel, bayam, pepaya, hati ayam, telur', 'Pentingnya kapsul Vitamin A saat bulan imunisasi Vitamin A (Februari & Agustus)', 'Jaga kebersihan lingkungan dan gizi anak'],
    rujukan: ['Sudah terjadi kekeruhan atau pelunakan kornea (Keratomalasia)'],
    prognosis: { vitam: 'Bonam', functionam: 'Dubia (risiko kebutaan)', sanationam: 'Bonam (bila dini)' },
    alerts: [
      { type: 'danger', text: 'Kekurangan Vitamin A adalah penyebab utama kebutaan yang DAPAT dicegah pada anak-anak.' }
    ]
  },
  {
    id: 'kpd',
    name: 'Ketuban Pecah Dini (KPD)',
    icpc: 'W92',
    icd: 'O42',
    level: '3A',
    cat: 'Obsgin',
    icon: '🤰',
    iconBg: '#fce4ec',
    preview: 'Pecahnya ketuban sebelum tanda persalinan dimulai. Ditandai keluar air ketuban banyak dari jalan lahir.',
    masalah: 'Pecahnya selaput ketuban secara spontan sebelum adanya tanda-tanda inpartu.',
    anamnesis: ['Keluar cairan (air-air) jernih dari jalan lahir secara tiba-tiba/merembes', 'Bau cairan khas (anyir)', 'Tanyakan usia kehamilan (minggu)'],
    fisik: ['Inspekulo (Gunakan spekulom steril!): tampak cairan menggenang di forniks posterior atau mengalir dari kanalis servikalis'],
    penunjang: ['Tes Nitrazin (Kertas Lakmus): Berubah warna jadi BIRU (alkalis)', 'Tes Pakis (Fern Test): Gambaran seperti daun pakis di bawah mikroskop'],
    diagnosis: ['Ketuban Pecah Dini.'],
    tatalaksana: [
      { name: 'Bed Rest Total', dose: '-', note: 'Mencegah prolaps tali pusat' },
      { name: 'Eritromisin / Amoxicillin', dose: '500 mg q8h', note: 'Profilaksis infeksi pada KPD > 12-18 jam' }
    ],
    edukasi: ['Jangan melakukan hubungan seksual', 'Segera ke RS bila muncul demam atau air ketuban berbau busuk'],
    rujukan: ['Wajib dirujuk ke Rumah Sakit untuk pemantauan janin dan rencana persalinan (induksi atau SC)'],
    prognosis: { vitam: 'Bonam', functionam: 'Bonam', sanationam: 'Bonam' },
    alerts: [
      { type: 'danger', text: 'HINDARI pemeriksaan dalam (Vaginal Toucher) berulang pada KPD karena meningkatkan risiko infeksi (Korionamnionitis)!' }
    ]
  },
  {
    id: 'ruptur_perineum',
    name: 'Ruptur Perineum (Luka Jalan Lahir)',
    icpc: 'W92',
    icd: 'O70',
    level: '4A',
    cat: 'Obsgin',
    icon: '🩹',
    iconBg: '#fff1f0',
    preview: 'Robekan pada jalan lahir setelah proses persalinan. Grade 1 & 2 dapat dijahit di FKTP.',
    masalah: 'Terputusnya kontinuitas jaringan perineum pasca persalinan pervaginam.',
    anamnesis: ['Riwayat baru saja melahirkan', 'Nyeri dan perdarahan pada area kelamin'],
    fisik: ['Grade 1: Hanya mukosa atau kulit (tidak perlu jahit bila tidak berdarah)', 'Grade 2: Mengenai otot perineum (WAJIB jahit)', 'Grade 3: Mengenai otot anus (RUJUK)', 'Grade 4: Mengenai mukosa rektum (RUJUK)'],
    penunjang: ['Lampu tindakan yang terang'],
    diagnosis: ['Ruptur Perineum Grade...'],
    tatalaksana: [
      { name: 'Lidocaine 1% (Injeksi)', dose: 'Infiltrasi lokal', note: 'Anestesi sebelum penjahitan' },
      { name: 'Hecting Perineum', dose: '-', note: 'Gunakan benang Chromic Catgut (absorbable)' },
      { name: 'Amoxicillin', dose: '500 mg q8h (3 hari)', note: 'Profilaksis infeksi' }
    ],
    edukasi: ['Jaga kebersihan area kelamin (cebok dari depan ke belakang)', 'Keringkan area setelah BAK/BAB', 'Makan makanan tinggi protein agar luka cepat sembuh'],
    rujukan: ['Ruptur Perineum Grade 3 atau 4 (mengenai dubur)', 'Perdarahan tidak berhenti dengan penjahitan biasa'],
    prognosis: { vitam: 'Bonam', functionam: 'Bonam', sanationam: 'Bonam' },
    alerts: [
      { type: 'ok', text: 'Teknik penjahitan jelujur biasanya memberikan hasil kosmetik dan nyeri yang lebih sedikit.' }
    ]
  },
  {
    id: 'perdarahan_subkonjungtiva',
    name: 'Perdarahan Subkonjungtiva',
    icpc: 'F75',
    icd: 'H11.3',
    level: '4A',
    cat: 'Mata',
    icon: '👁️',
    iconBg: '#ffebee',
    preview: 'Bercak merah darah yang kontras pada bagian putih mata. Biasanya tidak nyeri dan penglihatan normal.',
    masalah: 'Pecahnya pembuluh darah kecil di bawah konjungtiva.',
    anamnesis: ['Mata merah mendadak (seperti darah menggenang)', 'TIDAK ADA nyeri, gatal, atau rasa mengganjal yang berat', 'Penglihatan TIDAK kabur', 'Riwayat batuk rejan, bersin keras, mengejan, atau trauma ringan'],
    fisik: ['Bercak merah darah homogen pada konjungtiva bulbi (warna merah terang)', 'Batas tegas', 'Tidak ada injeksi siliar (merah di sekitar kornea)'],
    penunjang: ['Cek tekanan darah (singkirkan hipertensi sebagai pemicu)'],
    diagnosis: ['Perdarahan Subkonjungtiva.'],
    tatalaksana: [
      { name: 'Artificial Tears', dose: 'q6h prn', note: 'Meredakan rasa mengganjal ringan' },
      { name: 'Observasi', dose: '-', note: 'Biasanya terserap sendiri dalam 1-2 minggu' }
    ],
    edukasi: ['Jangan khawatir, ini seperti "memar" di mata', 'Warna akan berubah dari merah menjadi kuning lalu hilang sendiri', 'Hindari mengejan atau mengucek mata'],
    rujukan: ['Perdarahan sangat luas dan tidak terserap dalam 3 minggu', 'Disertai penurunan penglihatan atau nyeri hebat'],
    prognosis: { vitam: 'Bonam', functionam: 'Bonam', sanationam: 'Bonam' },
    alerts: [
      { type: 'ok', text: 'Perdarahan subkonjungtiva seringkali terlihat lebih menakutkan daripada bahaya yang sebenarnya.' }
    ]
  },
  {
    id: 'glaukoma_akut',
    name: 'Glaukoma Akut (Sudut Tertutup)',
    icpc: 'F93',
    icd: 'H40.2',
    level: '3B',
    cat: 'Mata',
    icon: '👁️',
    iconBg: '#fff1f0',
    preview: 'Mata merah, nyeri sangat hebat, pandangan kabur menjurus mendadak, dan melihat pelangi di sekitar lampu. DARURAT!',
    masalah: 'Peningkatan tekanan intraokular (TIO) yang mendadak akibat hambatan aliran humor akuos.',
    anamnesis: ['Mata sangat nyeri (seperti mau pecah)', 'Pusing hebat, mual, hingga muntah', 'Pandangan kabur mendadak', 'Melihat pelangi atau lingkaran cahaya (halo) di sekitar lampu'],
    fisik: ['Mata merah (injeksi siliar)', 'Kornea udem (keruh/berkabut)', 'Pupil mid-dilatasi (setengah melebar) dan malas bereaksi terhadap cahaya', 'Palpasi: bola mata terasa keras (seperti meraba batu)'],
    penunjang: ['Tonometri Digital (bila ada): TIO meningkat tajam (>30-40 mmHg)'],
    diagnosis: ['Glaukoma Akut Sudut Tertutup.'],
    tatalaksana: [
      { name: 'Timolol 0.5% (Tetes Mata)', dose: '1 tetes q12h', note: 'Menurunkan produksi cairan mata' },
      { name: 'Acetazolamide', dose: '500 mg (Awal), lalu 250 mg q8h', note: 'Menurunkan TIO secara sistemik' },
      { name: 'Analgetik Kuat', dose: 'prn', note: 'Meredakan nyeri hebat' }
    ],
    edukasi: ['Ini adalah kegawatdaruratan mata yang bisa menyebabkan kebutaan permanen dalam hitungan jam/hari'],
    rujukan: ['WAJIB RUJUK SEGERA ke Spesialis Mata setelah pemberian terapi awal untuk tindakan iridotomi'],
    prognosis: { vitam: 'Bonam', functionam: 'Malam (bila terlambat)', sanationam: 'Malam' },
    alerts: [
      { type: 'danger', text: 'Jangan memberikan tetes mata atropin pada suspek glaukoma karena dapat memperburuk kondisi!' }
    ]
  },
  {
    id: 'insect_bite',
    name: 'Insect Bite (Sengatan Serangga)',
    icpc: 'S12',
    icd: 'T63.4',
    level: '4A',
    cat: 'Bedah & Emergensi',
    icon: '🐝',
    iconBg: '#fffced',
    preview: 'Reaksi kulit akibat gigitan atau sengatan serangga. Gejala: merah, bengkak, gatal, dan nyeri di lokasi gigitan.',
    masalah: 'Reaksi inflamasi lokal terhadap toksin atau air liur serangga.',
    anamnesis: ['Riwayat digigit atau disengat (lebah, semut, nyamuk, kutu)', 'Nyeri, gatal, atau rasa terbakar di lokasi kejadian', 'Tanyakan adakah rasa sesak atau bengkak di wajah (curiga anafilaksis)'],
    fisik: ['Urtika (biduran) fokal', 'Papul eritema dengan titik gigitan di tengah (puncta)', 'Edema (bengkak) lokal'],
    penunjang: ['Klinis utama'],
    diagnosis: ['Insect Bite / Sengatan Lebah.'],
    tatalaksana: [
      { name: 'Kompres Dingin', dose: '10-15 menit', note: 'Meredakan nyeri dan bengkak' },
      { name: 'Cetirizine', dose: '10 mg q24h', note: 'Meredakan gatal' },
      { name: 'Hidrokortison 1% (Krim)', dose: 'Oleskan q12h', note: 'Kortikosteroid topikal untuk radang' }
    ],
    edukasi: ['Cabut sengat dengan hati-hati (bila masih ada) menggunakan kartu plastik/pinset', 'Jangan menggaruk area gigitan (risiko infeksi sekunder)', 'Waspadai tanda alergi berat (sesak napas)'],
    rujukan: ['Reaksi anafilaksis (sesak, pusing, pingsan)', 'Sengatan sangat banyak pada anak atau lansia'],
    prognosis: { vitam: 'Bonam', functionam: 'Bonam', sanationam: 'Bonam' },
    alerts: [
      { type: 'ok', text: 'Sebagian besar gigitan serangga hanya menyebabkan reaksi lokal yang akan hilang dalam hitungan hari.' }
    ]
  },
  {
    id: 'syok_hipovolemik',
    name: 'Syok Hipovolemik',
    icpc: 'K99',
    icd: 'R57.1',
    level: '3B',
    cat: 'Bedah & Emergensi',
    icon: '🚨',
    iconBg: '#fff1f0',
    preview: 'Kegagalan sirkulasi akibat kekurangan cairan atau darah yang hebat. Gejala: nadi cepat-lemah, akral dingin, dan kesadaran turun.',
    masalah: 'Penurunan volume intravaskular yang menyebabkan hipoperfusi jaringan organ vital.',
    overview: {
      etiologi: 'Perdarahan masif (trauma, gastrointestinal, persalinan), kehilangan cairan ekstravaskular (luka bakar, dehidrasi berat).',
      epidemiologi: 'Dapat terjadi pada segala usia, terutama pada kasus trauma atau penyakit dengan kehilangan cairan berat.',
      patofisiologi: 'Volume darah/cairan rendah → Penurunan venous return → Penurunan cardiac output → Hipoksia jaringan → Asidosis laktat → Kegagalan multiorgan.',
      komplikasi: ['Gagal ginjal akut (AKI)', 'Koagulopati intravascular (DIC)', 'ARDS (Acute Respiratory Distress Syndrome)', 'Kematian']
    },
    anamnesis: [
      'Riwayat perdarahan hebat (kecelakaan, mimisan masif, persalinan)', 
      'Riwayat kehilangan cairan (Diare berat, muntah terus menerus, luka bakar luas)',
      'Keluhan pusing, pandangan kabur, merasa haus hebat'
    ],
    fisik: [
      'Tanda Dehidrasi Berat (mata sangat cekung, cubitan kulit sangat lambat)', 
      'Akral dingin, pucat, basah', 
      'Nadi cepat dan lemah (Takikardia)', 
      'Tekanan darah turun (Hipotensi)', 
      'Produksi urin menurun/anuria',
      'Penurunan kesadaran (somnolen hingga koma)'
    ],
    penunjang: ['Klinis utama', 'Darah Lengkap (evaluasi Hb/Ht)', 'Elektrolit', 'Laktat (bila ada)'],
    diagnosis: ['Syok Hipovolemik Klasifikasi (I-IV berdasarkan persentase kehilangan darah)'],
    diagnosisBanding: ['Syok Kardiogenik', 'Syok Septik', 'Syok Neurogenik'],
    tatalaksana: [
      { name: 'Posisi Trendelenburg (modifikasi)', dose: '-', note: 'Elevasi kaki 15-30 derajat' },
      { name: 'Oksigenasi', dose: '10-15 L/menit (NRM)', note: 'Pasang akses IV 2 jarum besar' },
      { name: 'Kristaloid (RL/NaCl 0.9%)', dose: '20 ml/kgBB (guyur)', note: 'Evaluasi respon setiap 15-30 menit' }
    ],
    tatalaksanaDetail: {
      nonFarmakologi: [
        'ABC (Airway, Breathing, Circulation)',
        'Hentikan sumber perdarahan aktif (penekanan, torniquet jika perlu)',
        'Pasang kateter urin untuk target produksi urin >0.5 mL/kgBB/jam'
      ],
      farmakologi: [
        {
          title: 'Resusitasi Cairan Darurat',
          items: [
             { name: 'Cairan Kristaloid (RL/NaCl 0.9%)', dose: '20 ml/kg (Dewasa), 20 ml/kg (Anak)', note: 'Berikan cepat/guyur. Ulangi sampai MAP > 65' }
          ]
        }
      ]
    },
    edukasi: ['Pasien dalam kondisi kritis dan memerlukan pengawasan ketat saat rujukan', 'Identifikasi dini tanda syok pada penderita trauma/perdarahan'],
    rujukan: ['WAJIB RUJUK SEGERA ke IGD RS setelah stabilisasi awal (jika memungkinkan)'],
    prognosis: { vitam: 'Dubia ad Malam (bila tidak segera ditangani)', functionam: 'Dubia', sanationam: 'Dubia' },
    alerts: [
      { type: 'danger', text: 'Jangan berikan cairan berlebih pada syok hipovolemik tanpa memastikan jalan napas aman (risiko aspirasi/edema paru).' },
      { type: 'warn', text: 'Evaluasi tanda hipoperfusi (nadi, TD, akral, kesadaran) secara periodik setiap 15 menit.' }
    ]
  },
  {
    id: 'gagal_jantung_akut',
    name: 'Gagal Jantung Akut (ADHF)',
    icpc: 'K77',
    icd: 'I50.9',
    level: '3B',
    cat: 'Kardiovaskular',
    icon: '🫀',
    iconBg: '#fff1f0',
    preview: 'Sesak napas berat mendadak, terutama saat berbaring. Kaki bengkak dan suara napas basah. DARURAT!',
    masalah: 'Kegagalan pompa jantung yang terjadi secara mendadak menyebabkan kongesti paru.',
    overview: {
      etiologi: 'Penyakit jantung koroner (infark miokard), krisis hipertensi, aritmia, miokarditis, atau gagal jantung kronis yang mengalami dekompensasi.',
      epidemiologi: 'Sering terjadi pada usia lanjut dengan riwayat hipertensi atau penyakit jantung koroner.',
      patofisiologi: 'Peningkatan tekanan pengisian ventrikel → Kongesti vena pulmonalis → Edema paru → Hipoksia sistemik.',
      komplikasi: ['Syok kardiogenik', 'Aritmia fatal (VT/VF)', 'Kematian mendadak']
    },
    anamnesis: ['Sesak napas hebat mendadak', 'Ortopnea (sesak memberat saat berbaring)', 'Paroxysmal Nocturnal Dyspnea (terbangun malam hari karena sesak)', 'Riwayat hipertensi/penyakit jantung'],
    fisik: ['Takipnea (napas cepat)', 'JVP (nadi leher) meningkat', 'Ronki basah halus di kedua basal paru', 'Edema tungkai, asites, S3 gallop'],
    penunjang: ['EKG: Hipertrofi ventrikel, iskemia, atau aritmia', 'Rontgen Thorax: Kardiomegali, edema paru', 'NT-ProBNP (jika tersedia)'],
    diagnosis: ['Acute Decompensated Heart Failure (ADHF)'],
    diagnosisBanding: ['Pneumonia', 'PPOK Eksaserbasi', 'Sepsis', 'Emboli Paru'],
    tatalaksana: [
      { name: 'Posisi High Fowler', dose: '-', note: 'Duduk tegak, kaki tergantung' },
      { name: 'Oksigenasi', dose: 'Masker/kanul 4-6 L/mnt', note: 'Target SpO2 >95%' },
      { name: 'Furosemide IV', dose: '20-40 mg (bolus)', note: 'Diuretik' }
    ],
    tatalaksanaDetail: {
      nonFarmakologi: [
        'ABC (Airway, Breathing, Circulation)',
        'Edukasi posisi duduk tegak untuk mengurangi preload',
        'Pembatasan asupan cairan ketat'
      ],
      farmakologi: [
        {
          title: 'Manajemen Kongesti',
          items: [
             { name: 'Furosemide', dose: '20 - 40 mg (Bolus IV)', note: 'Dapat diulang sesuai output urin' }
          ]
        },
        {
          title: 'Terkait Tekanan Darah (Jika Sistolik >100 mmHg)',
          items: [
             { name: 'ISDN', dose: '5 mg (Sublingual)', note: 'Vasodilator - waspadai hipotensi' }
          ]
        }
      ]
    },
    edukasi: ['Batasi cairan dan garam secara ketat', 'Pentingnya kepatuhan kontrol penyakit jantung', 'Segera ke RS jika sesak napas saat istirahat'],
    rujukan: ['WAJIB SEGERA DIRUJUK ke RS setelah stabilisasi awal (O2 & Furosemide)'],
    prognosis: { vitam: 'Dubia ad Malam', functionam: 'Dubia ad Malam', sanationam: 'Malam' },
    alerts: [
      { type: 'danger', text: 'Sesak napas yang memberat saat berbaring datar adalah tanda klasik gagal jantung kiri.' },
      { type: 'warn', text: 'Jangan berikan ISDN Jika tekanan darah sistolik < 90-100 mmHg.' }
    ]
  },
  {
    id: 'retensi_urin',
    name: 'Retensi Urin Akut',
    icpc: 'U05',
    icd: 'R33',
    level: '4A',
    cat: 'Urologi & Nefrologi',
    icon: '🫘',
    iconBg: '#e1f5fe',
    preview: 'Ketidakmampuan mengeluarkan urin dari kandung kemih. Kandung kemih terasa penuh, tegang, dan sangat nyeri.',
    masalah: 'Hambatan pengosongan kandung kemih yang terjadi secara mendadak.',
    anamnesis: ['Tidak bisa kencing sama sekali', 'Nyeri hebat di perut bagian bawah', 'Perasaan ingin kencing tapi tidak keluar', 'Riwayat pembesaran prostat (pada lansia pria)'],
    fisik: ['Distensi (pembengkakan) regio suprapubik', 'Nyeri tekan suprapubik', 'Perkusi: pekak di atas simfisis (kandung kemih penuh)'],
    penunjang: ['USG Kandung Kemih (bila tersedia)'],
    diagnosis: ['Retensi Urin Akut e.c ...'],
    tatalaksana: [
      { name: 'Pemasangan Kateter Urin (Foley)', dose: '-', note: 'Tindakan utama untuk dekompresi' },
      { name: 'Analgetik', dose: 'prn', note: 'Meredakan nyeri' }
    ],
    edukasi: ['Jaga kebersihan kantong urin (urine bag)', 'Posisi kantong urin harus lebih rendah dari kandung kemih', 'Kontrol kembali untuk mengevaluasi penyebab sumbatan'],
    rujukan: ['Gagal dipasang kateter (memerlukan sistostomi oleh spesialis)', 'Retensi urin berulang'],
    prognosis: { vitam: 'Bonam', functionam: 'Bonam', sanationam: 'Dubia (tergantung penyebab)' },
    alerts: [
      { type: 'ok', text: 'Pelepasan urin melalui kateter harus dilakukan secara bertahap (tidak boleh dikosongkan sekaligus secara masif) untuk cegah perdarahan (Ex-vacuo).' }
    ]
  },
  {
    id: 'batu_saluran_kemih',
    name: 'Batu Saluran Kemih (Colic Renal)',
    icpc: 'U71',
    icd: 'N20.9',
    level: '3A',
    cat: 'Urologi & Nefrologi',
    icon: '🫘',
    iconBg: '#ffebee',
    preview: 'Nyeri pinggang hebat hilang-timbul (kolik) yang menjalar ke lipat paha. Kadang disertai kencing berdarah atau berpasir.',
    masalah: 'Adanya massa keras (batu) di ginjal, ureter, atau kandung kemih.',
    anamnesis: ['Nyeri pinggang (flank pain) sangat hebat yang hilang timbul (kolik)', 'Nyeri menjalar ke lipat paha atau skrotum', 'Kencing berdarah (hematuria)', 'Riwayat kencing berpasir atau berbatu'],
    fisik: ['Nyeri ketok CVA (Costovertebral Angle) (+) pada sisi yang sakit', 'Kondisi umum gelisah mencari posisi yang enak (pacing activity)'],
    penunjang: ['Urin Lengkap: Hematuria / Kristaluria', 'USG Abdomen / BNO: tampak bayangan radioopak (batu)'],
    diagnosis: ['Urolitiasis / Nefrolitiasis.'],
    tatalaksana: [
      { name: 'Natrium Diklofenak', dose: '50 mg q8h', note: 'NSAID untuk meredakan nyeri kolik' },
      { name: 'Hyoscine Butylbromide', dose: '10 mg q8h', note: 'Antispasmodik untuk rileksasi otot ureter' },
      { name: 'Minum Air Putih', dose: '>2-3 L/hari', note: 'Membantu pengeluaran batu kecil' }
    ],
    edukasi: ['Minum banyak air putih secara rutin', 'Kurangi makanan tinggi oksalat atau purin (tergantung jenis batu)', 'Jangan menahan kencing'],
    rujukan: ['Nyeri kolik tidak membaik dengan obat', 'Ada tanda infeksi (demam) disertai batu', 'Batu berdiameter > 5 mm'],
    prognosis: { vitam: 'Bonam', functionam: 'Bonam', sanationam: 'Dubia (risiko residif tinggi)' },
    alerts: [
      { type: 'ok', text: 'Nyeri kolik renal sering digambarkan sebagai salah satu nyeri paling hebat yang pernah dirasakan manusia.' }
    ]
  },
  {
    id: 'hipertiroid',
    name: 'Hipertiroid (Penyakit Graves)',
    icpc: 'T82',
    icd: 'E05.9',
    level: '3A',
    cat: 'Metabolik',
    icon: '🦋',
    iconBg: '#fffced',
    preview: 'Kelenjar tiroid yang terlalu aktif. Gejala: berat badan turun meskipun makan banyak, berdebar, dan tangan gemetar.',
    masalah: 'Kelebihan hormon tiroid dalam sirkulasi darah.',
    anamnesis: ['Berat badan turun meskipun nafsu makan meningkat', 'Jantung berdebar-debar (palpitasi)', 'Tangan gemetar (tremor)', 'Tidak tahan panas dan banyak berkeringat', 'Mudah lelah, emosi tidak stabil', 'Buang air besar jadi lebih sering'],
    fisik: ['Takikardia / Fibrilasi Atrial', 'Tremor halus pada jari tangan', 'Eksoftalmus (mata menonjol)', 'Penebalan kelenjar tiroid (Gondok) yang difus'],
    penunjang: ['TSH rendah, T4 Bebas (FT4) tinggi'],
    diagnosis: ['Hipertiroidisme / Penyakit Graves.'],
    tatalaksana: [
      { name: 'Thiamizole / PTU', dose: '10-30 mg q24h', note: 'Obat antitiroid utama' },
      { name: 'Propranolol', dose: '10-20 mg q8h', note: 'Mengurangi gejala berdebar dan tremor' }
    ],
    edukasi: ['Obat harus diminum rutin jangka panjang (1-2 tahun)', 'Hindari stres berlebih', 'Kontrol kadar hormon secara berkala'],
    rujukan: ['Wajib dirujuk ke Spesialis Penyakit Dalam (Endokrin) untuk evaluasi dosis dan rencana terapi definitif (nuklir/bedah)'],
    prognosis: { vitam: 'Bonam', functionam: 'Bonam (bila terkontrol)', sanationam: 'Dubia' },
    alerts: [
      { type: 'danger', text: 'Waspadai BADAI TIROID (Thyroid Storm): demam sangat tinggi, nadi sangat cepat, dan kesadaran turun — DARURAT!' }
    ]
  },
  {
    id: 'speech_delay',
    name: 'Keterlambatan Bicara (Speech Delay)',
    icpc: 'P24',
    icd: 'F80.9',
    level: '2',
    cat: 'Pediatri',
    icon: '👶',
    iconBg: '#e0f2f1',
    preview: 'Kemampuan bicara anak yang tidak sesuai dengan tahapan usianya. Penting untuk deteksi dini masalah pendengaran atau autisme.',
    masalah: 'Gangguan perkembangan bahasa dan bicara pada anak.',
    anamnesis: ['Anak belum bisa babbling (6-9 bln), belum ada kata berarti (12-15 bln), atau belum ada kalimat 2 kata (2 thn)', 'Apakah anak menoleh jika dipanggil?', 'Riwayat kehamilan, persalinan, dan paparan gadget (screen time) berlebih'],
    fisik: ['Pemeriksaan status lokalis mulut (lingua, palatum, pendengaran)', 'Evaluasi interaksi sosial anak'],
    penunjang: ['Tes Pendengaran (BERA/OAE)', 'Kuesioner Pra-Skrining Perkembangan (KPSP)'],
    diagnosis: ['Suspek Keterlambatan Bicara dan Bahasa.'],
    tatalaksana: [
      { name: 'Terapi Wicara', dose: '-', note: 'Stimulasi bahasa secara profesional' },
      { name: 'Hentikan Screen Time', dose: '-', note: 'Total stop gadget untuk anak < 2 tahun' },
      { name: 'Stimulasi Di Rumah', dose: '-', note: 'Ajak anak bicara, membacakan buku, dan bernyanyi' }
    ],
    edukasi: ['Orang tua harus rajin mengajak anak berinteraksi lisan', 'Jangan biarkan anak menonton TV/HP sendirian', 'Deteksi dini sangat membantu hasil terapi'],
    rujukan: ['WAJIB RUJUK ke Spesialis Anak (Tumbuh Kembang) dan Rehabilitasi Medik untuk evaluasi menyeluruh'],
    prognosis: { vitam: 'Bonam', functionam: 'Dubia (tergantung penyebab)', sanationam: 'Dubia' },
    alerts: [
      { type: 'warn', text: 'Screen time (gadget/TV) berlebih pada balita adalah salah satu faktor risiko utama speech delay saat ini.' }
    ]
  },
  {
    id: 'keracunan_organofosfat',
    name: 'Keracunan Organofosfat (Pestisida)',
    icpc: 'A92',
    icd: 'T60.0',
    level: '3B',
    cat: 'Bedah & Emergensi',
    icon: '🧪',
    iconBg: '#fff1f0',
    preview: 'Keracunan akibat pestisida. Gejala khas: bau bawang putih, pupil mengecil (pinpoint), dan banyak cairan keluar (liur, keringat).',
    masalah: 'Hambatan enzim kolinesterase akibat paparan bahan kimia organofosfat.',
    anamnesis: ['Riwayat terpapar pestisida (menyemprot sawah, terminum, atau percobaan bunuh diri)', 'Gejala: mual, muntah, perut mulas, sesak napas, liur berlebih'],
    fisik: ['Pupil mengecil (pinpoint pupil)', 'Bradikardia (nadi lambat)', 'Hipersekresi: hipersalivasi (liur banyak), lakrimasi (air mata), keringat dingin, diare', 'Fasikulasi otot (otot bergetar sendiri)'],
    penunjang: ['Klinis utama + Bau khas organofosfat (seperti bawang putih/garlic-like)'],
    diagnosis: ['Keracunan Organofosfat.'],
    tatalaksana: [
      { name: 'Sulfas Atropin (SA)', dose: '2 mg IV', note: 'Ulangi setiap 5-10 menit sampai terjadi ATROPINISASI (nadi cepat, wajah merah, mata lebar)' },
      { name: 'Dekontaminasi', dose: '-', note: 'Mandikan pasien, buang pakaian yang terkena pestisida' },
      { name: 'Bilang Lambung (Gastric Lavage)', dose: '-', note: 'Bila racun terminum < 1-2 jam' }
    ],
    edukasi: ['Pestisida harus disimpan di tempat aman dan terkunci', 'Gunakan APD lengkap saat menyemprot pestisida'],
    rujukan: ['WAJIB RUJUK SEGERA setelah stabilisasi awal dengan Sulfas Atropin'],
    prognosis: { vitam: 'Dubia', functionam: 'Bonam', sanationam: 'Bonam' },
    alerts: [
      { type: 'danger', text: 'Target terapi bukan dosis maksimal, tapi sampai muncul tanda ATROPINISASI (nadi >100, kulit hangat, pupil lebar).' }
    ]
  },
  {
    id: 'hematemesis_melena',
    name: 'Hematemesis Melena (Muntah/Berak Darah)',
    icpc: 'D15',
    icd: 'K92.0',
    level: '3B',
    cat: 'Gastrointestinal',
    icon: '🤮',
    iconBg: '#fff1f0',
    preview: 'Muntah darah (merah/hitam) dan BAB warna hitam aspal. Tanda perdarahan saluran cerna bagian atas. DARURAT!',
    masalah: 'Perdarahan pada saluran cerna bagian atas (atas ligamentum Treitz).',
    anamnesis: ['Muntah darah merah segar atau seperti warna kopi (coffee ground)', 'BAB warna hitam seperti aspal, lengket, dan bau sangat busuk (Melena)', 'Riwayat nyeri lambung kronis, minum obat pereda nyeri (NSAID) lama, atau sakit kuning'],
    fisik: ['Tanda syok (nadi cepat lemah, akral dingin, tensi turun)', 'Konjungtiva pucat', 'Nyeri tekan epigastrium', 'Colok dubur (Rectal Toucher): melena (+) pada sarung tangan'],
    penunjang: ['Kadar Hemoglobin (Hb): biasanya turun signifikan'],
    diagnosis: ['Hematemesis Melena e.c Suspek Gastritis Erosif / Varises Esophagus.'],
    tatalaksana: [
      { name: 'Puasa Total', dose: '-', note: 'Mengistirahatkan saluran cerna' },
      { name: 'Cairan Kristaloid (Guyur)', dose: '-', note: 'Bila ada tanda syok' },
      { name: 'Omeprazole (Injeksi)', dose: '40 mg IV q12h', note: 'Menekan asam lambung untuk bantu pembekuan' }
    ],
    edukasi: ['Kondisi ini gawat dan memerlukan rawat inap di Rumah Sakit'],
    rujukan: ['WAJIB SEGERA DIRUJUK ke RS karena risiko syok hipovolemik dan butuh endoskopi'],
    prognosis: { vitam: 'Dubia ad Malam', functionam: 'Bonam', sanationam: 'Dubia' },
    alerts: [
      { type: 'danger', text: 'Melena (BAB hitam) menandakan perdarahan minimal 50-100 ml di saluran cerna bagian atas.' }
    ]
  },
  {
    id: 'aki_suspek',
    name: 'Suspek Gagal Ginjal Akut (AKI)',
    icpc: 'U99',
    icd: 'N17.9',
    level: '2',
    cat: 'Urologi & Nefrologi',
    icon: '🫘',
    iconBg: '#e2e8f0',
    preview: 'Penurunan fungsi ginjal secara mendadak. Gejala: urin berkurang drastis atau tidak ada sama sekali, serta bengkak seluruh tubuh.',
    masalah: 'Penurunan Laju Filtrasi Glomerulus (LFG) yang berlangsung cepat.',
    anamnesis: ['Produksi urin berkurang (Oliguria < 400ml/24jam) atau tidak ada kencing (Anuria)', 'Bengkak pada kelopak mata, kaki, atau seluruh tubuh', 'Sesak napas (akibat penumpukan cairan)', 'Riwayat diare berat, perdarahan hebat, atau minum obat toksik ginjal'],
    fisik: ['Edema (bengkak) tungkai atau palpebra', 'Tanda kelebihan cairan (ronki di paru)', 'Hipotensi (bila penyebabnya prerenal/syok) atau Hipertensi'],
    penunjang: ['Ureum dan Kreatinin meningkat tajam', 'Urin Lengkap'],
    diagnosis: ['Suspek Acute Kidney Injury (AKI).'],
    tatalaksana: [
      { name: 'Monitor Balance Cairan', dose: '-', note: 'Catat input dan output cairan secara ketat' },
      { name: 'Koreksi Penyebab', dose: '-', note: 'Rehidrasi bila penyebabnya kurang cairan (syok)' }
    ],
    edukasi: ['Batasi asupan garam dan protein sementara', 'Jangan mengonsumsi obat sembarangan'],
    rujukan: ['WAJIB RUJUK ke Spesialis Penyakit Dalam untuk evaluasi dan kemungkinan cuci darah (hemodialisa) darurat'],
    prognosis: { vitam: 'Dubia', functionam: 'Dubia', sanationam: 'Dubia' },
    alerts: [
      { type: 'danger', text: 'AKI adalah kondisi yang mengancam nyawa. Deteksi dini "kurang kencing" sangat krusial!' }
    ]
  },
  {
    id: 'kolesistitis_akut',
    name: 'Kolesistitis Akut (Radang Kandung Empedu)',
    icpc: 'D98',
    icd: 'K81.0',
    level: '3B',
    cat: 'Gastrointestinal',
    icon: '🤢',
    iconBg: '#fff1f0',
    preview: 'Nyeri perut kanan atas yang menjalar ke bahu kanan, disertai demam dan mual. Sering dipicu makanan berlemak.',
    masalah: 'Inflamasi pada dinding kandung empedu, biasanya karena sumbatan batu.',
    anamnesis: ['Nyeri perut kanan atas yang terus-menerus dan hebat', 'Nyeri dapat menjalar ke bahu kanan atau punggung (scapula)', 'Demam, mual, dan muntah', 'Nyeri sering muncul setelah makan makanan berlemak'],
    fisik: ['Murphy Sign (+): nyeri tekan pada perut kanan atas yang menyebabkan henti napas saat inspirasi dalam', 'Nyeri lepas (pada kasus berat)', 'Ikterus (kuning) — bila ada sumbatan duktus koledokus'],
    penunjang: ['USG Abdomen: penebalan dinding kandung empedu, adanya batu (kolelitiasis), atau cairan perikolesistik'],
    diagnosis: ['Kolesistitis Akut.'],
    tatalaksana: [
      { name: 'Puasa / Diet Lemak Rendah', dose: '-', note: 'Mengurangi kontraksi kandung empedu' },
      { name: 'Hyoscine Butylbromide', dose: '10 mg q8h', note: 'Antispasmodik untuk kurangi kolik' },
      { name: 'Ceftriaxone', dose: '1-2 g IV/IM', note: 'Hanya jika ada tanda infeksi sistemik' }
    ],
    edukasi: ['Hindari makanan berminyak, bersantan, dan gorengan', 'Segera ke RS bila nyeri tidak tertahankan atau kulit menjadi kuning'],
    rujukan: ['WAJIB RUJUK ke Spesialis Bedah Digestif untuk tindakan kolesistektomi'],
    prognosis: { vitam: 'Bonam', functionam: 'Bonam', sanationam: 'Dubia (risiko residif)' },
    alerts: [
      { type: 'danger', text: 'Murphy sign adalah tanda klinis yang sangat spesifik untuk kolesistitis akut.' }
    ]
  },
  {
    id: 'hernia_inkarserata',
    name: 'Hernia Inguinalis Inkarserata',
    icpc: 'D87',
    icd: 'K40.3',
    level: '3B',
    cat: 'Bedah & Emergensi',
    icon: '🔪',
    iconBg: '#fff1f0',
    preview: 'Benjolan di lipat paha yang tidak bisa masuk kembali, terasa sangat nyeri, dan disertai mual-muntah. DARURAT BEDAH!',
    masalah: 'Hernia yang terjepit (inkarserata) atau terganggu aliran darahnya (strangulata).',
    anamnesis: ['Benjolan di lipat paha atau kantong zakar yang TIDAK BISA MASUK kembali', 'Nyeri hebat pada benjolan', 'Mual, muntah, dan tidak bisa buang angin (tanda sumbatan usus)'],
    fisik: ['Benjolan di lipat paha: Teraba keras, tegang, dan nyeri tekan hebat', 'Tidak ada bising usus di dalam benjolan (bila strangulasi)', 'Tanda ileus obstruktif (perut kembung, metalic sound)'],
    penunjang: ['Klinis utama (Diagnosis harus CEPAT!)'],
    diagnosis: ['Hernia Inguinalis Lateralis Inkarserata.'],
    tatalaksana: [
      { name: 'Posisi Trendelenburg', dose: '-', note: 'Posisi kepala lebih rendah, coba reposisi ringan (hanya bila baru saja terjadi)' },
      { name: 'Puasa Total', dose: '-', note: 'Persiapan operasi segera' },
      { name: 'Cairan Infus', dose: '-', note: 'Menjaga hidrasi' }
    ],
    edukasi: ['Jangan memijat benjolan yang tidak bisa masuk', 'Ini adalah kondisi gawat darurat yang memerlukan operasi segera'],
    rujukan: ['WAJIB RUJUK SEGERA ke RS untuk operasi darurat (Herniotomi/Hernioplasti)'],
    prognosis: { vitam: 'Dubia (risiko nekrosis usus)', functionam: 'Dubia', sanationam: 'Bonam setelah operasi' },
    alerts: [
      { type: 'danger', text: 'Keterlambatan operasi pada hernia inkarserata dapat menyebabkan kematian jaringan usus (gangren) yang sangat berbahaya!' }
    ]
  },
  {
    id: 'hidrokel',
    name: 'Hidrokel',
    icpc: 'Y82',
    icd: 'N43.3',
    level: '4A',
    cat: 'Urologi & Nefrologi',
    icon: '🫘',
    iconBg: '#e1f5fe',
    preview: 'Penumpukan cairan di sekitar testis yang menyebabkan kantong zakar bengkak tapi biasanya tidak nyeri.',
    masalah: 'Akumulasi cairan serosa di dalam tunika vaginalis.',
    anamnesis: ['Kantong zakar (skrotum) membesar', 'Biasanya tidak disertai nyeri', 'Terasa berat di skrotum', 'Ukuran bisa tetap atau berubah (pada hidrokel komunikans)'],
    fisik: ['Skrotum bengkak, permukaan rata, konsistensi kenyal-kistik', 'TES TRANSSILUMINASI / DIAPANOSKOPI (+): cahaya menembus massa'],
    penunjang: ['USG Skrotum (bila diperlukan): tampak kantung berisi cairan'],
    diagnosis: ['Hidrokel Testis.'],
    tatalaksana: [
      { name: 'Observasi', dose: '-', note: 'Pada bayi baru lahir, hidrokel sering hilang sendiri dalam 1 tahun' },
      { name: 'Hidrokelektomi', dose: '-', note: 'Operasi pengambilan cairan dan penjahitan kantung (bila menetap)' }
    ],
    edukasi: ['Hidrokel biasanya tidak berbahaya, namun jika membesar bisa mengganggu kenyamanan', 'Berbeda dengan hernia (hernia biasanya bisa keluar masuk dan transsiluminasi negatif)'],
    rujukan: ['Hidrokel yang sangat besar, nyeri, atau tidak hilang setelah usia 1-2 tahun pada anak'],
    prognosis: { vitam: 'Bonam', functionam: 'Bonam', sanationam: 'Bonam' },
    alerts: [
      { type: 'ok', text: 'Tes senter (transsiluminasi) adalah cara termudah membedakan hidrokel dengan massa padat atau hernia.' }
    ]
  },
  {
    id: 'pneumotoraks_suspek',
    name: 'Suspek Pneumotoraks',
    icpc: 'R99',
    icd: 'J93.9',
    level: '3B',
    cat: 'Respirasi',
    icon: '🫁',
    iconBg: '#fff1f0',
    preview: 'Adanya udara di dalam rongga paru yang menyebabkan paru kempis. Gejala: sesak napas berat mendadak dan nyeri dada tajam.',
    masalah: 'Kumpulan udara pada rongga pleura yang menyebabkan kolaps paru.',
    anamnesis: ['Sesak napas mendadak yang sangat hebat', 'Nyeri dada tajam (pleuritic pain) sesisi', 'Riwayat trauma dada atau penyakit paru kronis (PPOK/TB)'],
    fisik: ['Inspeksi: Dada sisi yang sakit tertinggal saat bernapas', 'Palpasi: Stem fremitus menurun/hilang sesisi', 'Perkusi: HIPERSONOR (sangat nyaring) pada sisi yang sakit', 'Auskultasi: Suara napas hilang sesisi'],
    penunjang: ['Rontgen Thorax: tampak garis pleura viseralis (pleural line) dan area lusen tanpa corakan paru'],
    diagnosis: ['Suspek Pneumotoraks Spontan / Traumatik.'],
    tatalaksana: [
      { name: 'Oksigen', dose: '6-10 L/menit', note: 'Posisi semi-fowler' },
      { name: 'Needle Decompression', dose: '-', note: 'Dilakukan HANYA jika ada tanda Tension Pneumothorax (distensi vena leher, trakea bergeser)' }
    ],
    edukasi: ['Dilarang mengejan atau melakukan aktivitas fisik berat', 'Ini adalah kondisi gawat darurat yang mengancam nyawa'],
    rujukan: ['WAJIB SEGERA DIRUJUK ke RS untuk pemasangan selang dada (WSD)'],
    prognosis: { vitam: 'Dubia (tergantung kecepatan penanganan)', functionam: 'Bonam', sanationam: 'Bonam' },
    alerts: [
      { type: 'danger', text: 'TENSION PNEUMOTHORAX adalah kondisi kritis. Jika ada pergeseran trakea dan nadi lemah, lakukan dekompresi jarum segera!' }
    ]
  },
  {
    id: 'obesitas_anak',
    name: 'Obesitas pada Anak',
    icpc: 'T82',
    icd: 'E66.9',
    level: '3A',
    cat: 'Pediatri',
    icon: '👶',
    iconBg: '#fffaced',
    preview: 'Kelebihan berat badan yang berisiko mengganggu pertumbuhan dan kesehatan anak jangka panjang.',
    masalah: 'Akumulasi lemak tubuh yang berlebihan pada anak berdasarkan grafik pertumbuhan.',
    anamnesis: ['Pola makan tinggi kalori (junk food, minuman manis)', 'Kurangnya aktivitas fisik (banyak main gadget/TV)', 'Riwayat obesitas pada orang tua'],
    fisik: ['BMI/U > +3 SD (Grafik WHO)', 'Adanya lipatan lemak berlebih', 'Acanthosis Nigricans (hitam di lipatan leher)'],
    penunjang: ['Grafik Pertumbuhan Anak (CDC / WHO)'],
    diagnosis: ['Obesitas pada Anak.'],
    tatalaksana: [
      { name: 'Modifikasi Diet', dose: '-', note: 'Banyak sayur dan buah, batasi gula dan lemak' },
      { name: 'Aktivitas Fisik', dose: 'min 60 menit/hari', note: 'Olahraga yang menyenangkan bagi anak' },
      { name: 'Edukasi Keluarga', dose: '-', note: 'Perubahan gaya hidup harus dilakukan seluruh anggota keluarga' }
    ],
    edukasi: ['Jangan melakukan diet ketat pada anak tanpa pengawasan dokter', 'Fokus pada pertumbuhan yang sehat, bukan sekadar turun berat badan', 'Kurangi screen time (gadget/TV)'],
    rujukan: ['Obesitas dengan komplikasi (asma, nyeri sendi, atau gangguan psikologis)', 'Penyebab hormonal (Endokrin)'],
    prognosis: { vitam: 'Bonam', functionam: 'Bonam (bila intervensi dini)', sanationam: 'Dubia' },
    alerts: [
      { type: 'ok', text: 'Pencegahan obesitas sejak dini sangat penting untuk mencegah diabetes dan penyakit jantung di masa dewasa.' }
    ]
  },
  {
    id: 'demam_rematik',
    name: 'Demam Rematik Akut',
    icpc: 'K71',
    icd: 'I00',
    level: '3B',
    cat: 'Kardiovaskular',
    icon: '❤️',
    iconBg: '#fff1f0',
    preview: 'Komplikasi dari radang tenggorokan yang menyerang jantung, sendi, dan saraf. Gejala: nyeri sendi berpindah dan bising jantung baru.',
    masalah: 'Penyakit inflamasi sistemik pasca infeksi Streptococcus Beta Hemolyticus Grup A.',
    anamnesis: ['Riwayat nyeri tenggorokan/tonsilitis 2-4 minggu sebelumnya', 'Nyeri sendi yang berpindah-pindah (migratory polyarthritis)', 'Gerakan tubuh yang tidak terkontrol (korea)'],
    fisik: ['Bising jantung baru (Karditis)', 'Nodul subkutan (benjolan kecil di bawah kulit)', 'Eritema Marginatum (ruam merah dengan pinggir tegas)'],
    penunjang: ['Kriteria Jones (Mayor & Minor)', 'ASTO (Anti-Streptolysin O) meningkat', 'EKG: interval PR memanjang'],
    diagnosis: ['Demam Rematik Akut.'],
    tatalaksana: [
      { name: 'Benzathine Penicillin G', dose: '1.2 Juta Unit (IM)', note: 'Eradikasi kuman streptokokus' },
      { name: 'Aspirin', dose: '75-100 mg/kgBB/hari', note: 'Meredakan radang sendi' },
      { name: 'Bed Rest Total', dose: '-', note: 'Sangat penting selama fase akut' }
    ],
    edukasi: ['Penyakit ini memerlukan pengobatan jangka panjang untuk cegah kerusakan katup jantung', 'Setiap radang tenggorokan pada anak harus diobati sampai tuntas'],
    rujukan: ['WAJIB RUJUK ke Spesialis Anak / Jantung untuk evaluasi kerusakan katup jantung'],
    prognosis: { vitam: 'Dubia', functionam: 'Dubia (tergantung kerusakan katup)', sanationam: 'Malam' },
    alerts: [
      { type: 'danger', text: 'Demam rematik yang tidak teratasi dengan baik dapat menyebabkan Penyakit Jantung Rematik (kerusakan katup permanen).' }
    ]
  },
  {
    id: 'sinusitis_akut',
    name: 'Sinusitis Akut (Rhinosinusitis)',
    icpc: 'R75',
    icd: 'J01.9',
    level: '4A',
    cat: 'THT',
    icon: '👃',
    iconBg: '#fffced',
    preview: 'Peradangan pada rongga sinus. Gejala: hidung tersumbat, ingus kental kuning/hijau, dan nyeri pada wajah (pipi/dahi).',
    masalah: 'Inflamasi pada mukosa hidung dan sinus paranasal.',
    anamnesis: ['Hidung tersumbat', 'Ingus kental berwarna kuning atau kehijauan (purulen)', 'Nyeri atau rasa tertekan pada wajah (pipi, dahi, atau pangkal hidung)', 'Penciuman menurun (hiposmia)', 'Nyeri kepala, demam, dan batuk'],
    fisik: ['Nyeri tekan pada area sinus (sinus maksilaris/frontalis)', 'Rinoskopi Anterior: tampak pus (nanah) di meatus medius, mukosa udem dan hiperemis', 'Post Nasal Drip (cairan mengalir di tenggorokan)'],
    penunjang: ['Rontgen Posisi Waters: tampak perselubungan atau air-fluid level pada sinus paranasal'],
    diagnosis: ['Rhinosinusitis Akut Bakterial / Viral.'],
    tatalaksana: [
      { name: 'Amoxiclav', dose: '500 mg q8h (10-14 hari)', note: 'Antibiotik lini pertama bila curiga bakterial' },
      { name: 'Pseudoefedrin', dose: '30-60 mg q8h', note: 'Dekongestan oral untuk kurangi sumbatan' },
      { name: 'Irigasi Hidung (Cuci Hidung)', dose: 'NaCl 0.9% q12h', note: 'Sangat efektif membersihkan lendir' }
    ],
    edukasi: ['Lakukan cuci hidung secara rutin', 'Gunakan masker bila di tempat berdebu', 'Minum banyak air putih'],
    rujukan: ['Gejala tidak membaik setelah 14 hari pengobatan', 'Adanya tanda komplikasi (bengkak kelopak mata, nyeri kepala hebat, atau gangguan penglihatan)'],
    prognosis: { vitam: 'Bonam', functionam: 'Bonam', sanationam: 'Bonam' },
    alerts: [
      { type: 'ok', text: 'Cuci hidung dengan NaCl 0.9% secara rutin adalah salah satu cara terbaik mempercepat penyembuhan sinusitis.' }
    ]
  },
  {
    id: 'abses_peritonsil',
    name: 'Abses Peritonsil (Quinsy)',
    icpc: 'R76',
    icd: 'J36',
    level: '3A',
    cat: 'THT',
    icon: '👅',
    iconBg: '#fff1f0',
    preview: 'Komplikasi dari amandel yang bernanah. Gejala: nyeri tenggorokan hebat sesisi, mulut sulit dibuka, dan suara seperti sedang makan kentang panas.',
    masalah: 'Kumpulan nanah (abses) di antara kapsul tonsil dan otot konstriktor faring.',
    anamnesis: ['Nyeri tenggorokan yang sangat hebat dan biasanya sesisi (unilateral)', 'Sulit menelan (odifagia) hingga air liur menetes terus (drooling)', 'Demam tinggi', 'Trismus (sulit membuka mulut)', 'Hot Potato Voice (suara bergumam seperti ada kentang panas di mulut)'],
    fisik: ['Tonsil bengkak sesisi, mendorong Uvula ke arah sisi yang sehat', 'Uvula udem dan terdorong kontralateral', 'Palatum mole tampak menonjol dan merah'],
    penunjang: ['Klinis utama + Aspirasi Jarum (tumbuh nanah)'],
    diagnosis: ['Abses Peritonsil.'],
    tatalaksana: [
      { name: 'Insisi dan Drainase', dose: '-', note: 'Mengeluarkan nanah (dilakukan di fasilitas memadai)' },
      { name: 'Ceftriaxone (Injeksi)', dose: '1-2 g IV', note: 'Antibiotik intravena dosis kuat' },
      { name: 'Antipiretik / Analgetik', dose: 'prn', note: 'Meredakan demam dan nyeri' }
    ],
    edukasi: ['Penyakit ini harus ditangani segera agar tidak menyumbat jalan napas', 'Setelah sembuh, disarankan operasi amandel (tonsilektomi) setelah 4-6 minggu'],
    rujukan: ['WAJIB RUJUK ke Spesialis THT untuk tindakan drainase segera dan pengawasan jalan napas'],
    prognosis: { vitam: 'Bonam (bila tertangani)', functionam: 'Bonam', sanationam: 'Dubia (risiko residif)' },
    alerts: [
      { type: 'danger', text: 'Waspadai sumbatan jalan napas! Segera rujuk bila pasien mulai mengalami sesak atau suara napas berbunyi (stridor).' }
    ]
  },
  {
    id: 'knf_suspek',
    name: 'Suspek Karsinoma Nasofaring',
    icpc: 'R85',
    icd: 'C11.9',
    level: '2',
    cat: 'THT',
    icon: '👃',
    iconBg: '#e2e8f0',
    preview: 'Kanker pada area belakang hidung. Gejala awal sering tidak khas: telinga budeg sesisi, mimisan berulang, atau benjolan di leher.',
    masalah: 'Keganasan yang berasal dari epitel pelapis nasofaring.',
    anamnesis: ['Telinga terasa penuh/budeg sesisi (tinnitus/telinga berair) yang tidak kunjung sembuh', 'Hidung tersumbat dan mimisan berulang (sering keluar darah sedikit-sedikit)', 'Benjolan di leher (biasanya di bawah telinga/sudut rahang)', 'Pandangan ganda atau nyeri kepala (stadium lanjut)'],
    fisik: ['Massa di nasofaring (hanya tampak lewat endoskopi/rinoskopi posterior)', 'Linfadenopati leher (benjolan keras, tidak nyeri, terfixir)', 'Kelumpuhan saraf kranial (bila sudah lanjut)'],
    penunjang: ['Nasofaringoskopi (Pemeriksaan utama)', 'Biopsi Jaringan', 'CT-Scan Nasofaring'],
    diagnosis: ['Suspek Karsinoma Nasofaring (KNF).'],
    tatalaksana: [
      { name: 'Radioterapi', dose: '-', note: 'Turas utama (karena KNF sangat radiosensitif)' },
      { name: 'Kemoterapi', dose: '-', note: 'Pendamping radioterapi (stadium lanjut)' }
    ],
    edukasi: ['Segera periksakan jika ada keluhan telinga budeg sesisi yang lama atau benjolan leher yang tidak hilang dengan obat'],
    rujukan: ['WAJIB SEGERA DIRUJUK ke RSCM / RS tipe A/B yang memiliki fasilitas onkologi'],
    prognosis: { vitam: 'Dubia (tergantung stadium)', functionam: 'Dubia', sanationam: 'Malam' },
    alerts: [
      { type: 'warn', text: 'Indonesia adalah salah satu negara dengan prevalensi KNF tertinggi di dunia. Kenali gejala awal "telinga budeg sesisi".' }
    ]
  },
  {
    id: 'osteomielitis_akut',
    name: 'Osteomielitis Akut',
    icpc: 'L82',
    icd: 'M86.9',
    level: '3A',
    cat: 'Bedah & Emergensi',
    icon: '🦴',
    iconBg: '#fff1f0',
    preview: 'Infeksi pada tulang. Gejala: nyeri tulang hebat, bengkak, merah, dan demam tinggi. Perlu penanganan segera untuk cegah kerusakan tulang.',
    masalah: 'Inflamasi pada tulang dan sumsum tulang yang disebabkan oleh mikroorganisme piogenik.',
    anamnesis: ['Nyeri tulang yang sangat hebat dan berdenyut', 'Demam tinggi dan menggigil', 'Riwayat luka terbuka di dekat tulang, patah tulang, atau infeksi sistemik'],
    fisik: ['Nyeri tekan pada tulang', 'Bengkak, merah, dan hangat pada area di atas tulang yang terkena', 'Hambatan gerak sendi di dekat lokasi infeksi'],
    penunjang: ['LED dan CRP meningkat tajam', 'Leukositosis', 'Rontgen Tulang: (perubahan baru tampak setelah 10-14 hari)'],
    diagnosis: ['Osteomielitis Akut.'],
    tatalaksana: [
      { name: 'Antibiotik Dosis Tinggi', dose: 'Sesuai antibiogram (Inisiasi IV)', note: 'Pengobatan jangka panjang (4-6 minggu)' },
      { name: 'Imobilisasi', dose: '-', note: 'Membantu meredakan nyeri dan cegah fraktur patologis' },
      { name: 'Cairan Infus', dose: '-', note: 'Menjaga hidrasi' }
    ],
    edukasi: ['Penyakit ini serius dan butuh pengobatan antibiotik lama', 'Jangan lakukan pemijatan pada area yang sakit', 'Kontrol rutin untuk pantau keberhasilan terapi'],
    rujukan: ['WAJIB RUJUK ke Spesialis Orthopedi untuk debridemen (pembersihan tulang) dan pemberian antibiotik intravena'],
    prognosis: { vitam: 'Bonam', functionam: 'Dubia', sanationam: 'Dubia (risiko kronis)' },
    alerts: [
      { type: 'danger', text: 'Osteomielitis yang tidak ditangani tuntas dapat menjadi kronis dan menyebabkan kecacatan permanen atau amputasi.' }
    ]
  },
  {
    id: 'dvt_suspek',
    name: 'Suspek Trombosis Vena Dalam (DVT)',
    icpc: 'K94',
    icd: 'I82.9',
    level: '3B',
    cat: 'Kardiovaskular',
    icon: '🦵',
    iconBg: '#fff1f0',
    preview: 'Penggumpalan darah di vena dalam (biasanya kaki). Bahaya utama: gumpalan lepas ke paru (Emboli Paru).',
    masalah: 'Terbentuknya trombus (bekuan darah) pada lumen vena dalam.',
    anamnesis: ['Kaki bengkak (biasanya sesisi / unilateral)', 'Nyeri pada tungkai atau betis', 'Riwayat tirah baring lama (bed rest), pasca operasi besar, atau perjalanan jauh (long-haul flight)'],
    fisik: ['Bengkak tungkai sesisi (edema)', 'Perbedaan lingkar betis > 3 cm antara kaki kanan dan kiri', 'Homans Sign (+): Nyeri di betis saat telapak kaki ditekuk ke arah atas (dorsofleksi)'],
    penunjang: ['D-Dimer meningkat', 'USG Doppler Vascular: tampak bekuan darah di vena'],
    diagnosis: ['Suspek Deep Vein Thrombosis (DVT).'],
    tatalaksana: [
      { name: 'Elevasi Tungkai', dose: '15-30 derajat', note: 'Membantu aliran balik vena' },
      { name: 'Antikoagulan', dose: 'Heparin / Warfarin', note: 'Hanya diberikan atas instruksi spesialis' },
      { name: 'Stocking Kompresi', dose: '-', note: 'Hanya bila sudah stabil' }
    ],
    edukasi: ['Jangan memijat kaki yang bengkak (berisiko melepaskan bekuan darah ke paru)', 'Lakukan mobilisasi aktif segera mungkin setelah operasi', 'Segera ke RS bila muncul sesak napas mendadak (gejala emboli paru)'],
    rujukan: ['WAJIB RUJUK SEGERA ke Spesialis Penyakit Dalam / Bedah Vaskular untuk terapi antikoagulan'],
    prognosis: { vitam: 'Dubia (risiko emboli paru)', functionam: 'Bonam', sanationam: 'Dubia' },
    alerts: [
      { type: 'danger', text: 'Pijat pada penderita DVT sangat dilarang karena dapat memicu emboli paru fatal!' }
    ]
  },
  {
    id: 'varises_tungkai',
    name: 'Varises Tungkai',
    icpc: 'K95',
    icd: 'I83.9',
    level: '4A',
    cat: 'Vaskular',
    icon: '🐍',
    iconBg: '#e3f2fd',
    preview: 'Pelebaran pembuluh darah vena yang tampak menonjol dan berkelok-kelok di kaki. Terasa pegal setelah berdiri lama.',
    masalah: 'Dilatasi dan tortuositas vena akibat inkompetensi katup vena.',
    anamnesis: ['Tampak urat menonjol di kaki', 'Kaki terasa pegal, panas, atau berat setelah berdiri lama', 'Kram pada malam hari'],
    fisik: ['Vena berkelok-kelok dan menonjol (varises) pada tungkai', 'Hiperpigmentasi (kulit cokelat) di sekitar pergelangan kaki (stasis dermatitis)'],
    penunjang: ['Tes Trendelenburg (menilai katup vena)'],
    diagnosis: ['Varises Tungkai.'],
    tatalaksana: [
      { name: 'Penggunaan Stocking Kompresi', dose: '-', note: 'Membantu katup vena bekerja lebih baik' },
      { name: 'Olahraga (Jalan Kaki)', dose: '-', note: 'Meningkatkan pompa otot betis' },
      { name: 'Elevasi Kaki saat Tidur', dose: '-', note: 'Membantu aliran balik darah' }
    ],
    edukasi: ['Hindari berdiri atau duduk terlalu lama tanpa bergerak', 'Jaga berat badan ideal', 'Jangan menggunakan sepatu hak tinggi terlalu sering'],
    rujukan: ['Ada luka (ulkus) yang sulit sembuh', 'Perdarahan pada varises', 'Nyeri hebat yang mengganggu aktivitas'],
    prognosis: { vitam: 'Bonam', functionam: 'Bonam', sanationam: 'Bonam' },
    alerts: [
      { type: 'ok', text: 'Stocking kompresi harus dipakai sejak pagi hari sebelum mulai beraktivitas untuk hasil maksimal.' }
    ]
  },
  {
    id: 'thalasemia_suspek',
    name: 'Suspek Thalasemia',
    icpc: 'B76',
    icd: 'D56.9',
    level: '2',
    cat: 'Hematologi & Onkologi',
    icon: '🩸',
    iconBg: '#fff1f0',
    preview: 'Penyakit keturunan akibat gangguan pembentukan hemoglobin. Gejala: pucat kronis, limpa membesar, dan perubahan bentuk tulang wajah.',
    masalah: 'Gangguan sintesis rantai globin pada molekul hemoglobin.',
    anamnesis: ['Pucat sejak bayi/kecil (anemia kronis)', 'Perut membesar (karena limpa/hati besar)', 'Riwayat keluarga dengan keluhan serupa atau sering transfusi darah', 'Pertumbuhan fisik terhambat'],
    fisik: ['Konjungtiva sangat pucat', 'Facies Leontina (tulang dahi menonjol, hidung pesek, jarak mata lebar)', 'Splenomegali (limpa membesar) dan Hepatomegali'],
    penunjang: ['Darah Lengkap: Hb rendah, MCV & MCH sangat rendah (mikrositik hipokrom)', 'Gambaran Darah Tepi: Target cell, sel pensil'],
    diagnosis: ['Suspek Thalasemia.'],
    tatalaksana: [
      { name: 'Suplementasi Asam Folat', dose: '1-5 mg q24h', note: 'Membantu pembentukan sel darah' },
      { name: 'Transfusi Darah', dose: '-', note: 'Dilakukan jika Hb < 7-8 g/dL (di Rumah Sakit)' },
      { name: 'Kelasi Besi', dose: '-', note: 'Diberikan bila kadar ferritin sangat tinggi akibat sering transfusi' }
    ],
    edukasi: ['Penyakit ini diturunkan dari orang tua, bukan penyakit menular', 'Pentingnya skrining pranikah bagi keluarga pembawa sifat (carrier)', 'Kebutuhan transfusi darah seumur hidup pada tipe Mayor'],
    rujukan: ['WAJIB RUJUK ke Spesialis Anak / Penyakit Dalam (Hematologi) untuk pemeriksaan Hb Elektroforesis dan tata laksana jangka panjang'],
    prognosis: { vitam: 'Dubia (tergantung kepatuhan terapi)', functionam: 'Dubia', sanationam: 'Malam (genetik)' },
    alerts: [
      { type: 'warn', text: 'Jangan memberikan suplemen ZAT BESI pada pasien thalasemia tanpa bukti defisiensi, karena berisiko keracunan besi (hemosiderosis).' }
    ]
  },
  {
    id: 'sepsis_suspek',
    name: 'Suspek Sepsis',
    icpc: 'A78',
    icd: 'R65.2',
    level: '3B',
    cat: 'Bedah & Emergensi',
    icon: '🚨',
    iconBg: '#fff1f0',
    preview: 'Kondisi gawat darurat akibat respons tubuh yang berlebihan terhadap infeksi. Gejala: demam, nadi cepat, dan tekanan darah turun.',
    masalah: 'Disfungsi organ yang mengancam nyawa akibat disregulasi respons inang terhadap infeksi.',
    overview: {
      etiologi: 'Infeksi bakteri (terutama Gram negatif), virus, jamur, atau parasit yang memicu respons sistemik inflamasi masif.',
      epidemiologi: 'Tinggi pada populasi geriatri, imunokompromis, malnutrisi, dan pasca-prosedur invasif.',
      patofisiologi: 'Infeksi → Aktivasi kaskade sitokin pro-inflamasi → Vasodilatasi masif, permeabilitas kapiler meningkat, koagulopati → Hipoperfusi jaringan → Kegagalan multiorgan.',
      komplikasi: ['Syok septik', 'ARDS (Acute Respiratory Distress Syndrome)', 'Gagal ginjal akut (AKI)', 'Kematian']
    },
    anamnesis: [
      'Riwayat infeksi fokus infeksi (paru, saluran kemih, luka luar, intraabdominal)', 
      'Demam tinggi atau kedinginan hebat', 
      'Kesadaran menurun (bingung/mengantuk) atau tampak sangat lemah'
    ],
    fisik: [
      'qSOFA Score ≥ 2',
      'Pernapasan > 22x/menit',
      'Kesadaran menurun (GCS < 15)',
      'Tekanan darah sistolik ≤ 100 mmHg',
      'Nadi cepat (Takikardia)', 
      'Suhu > 38°C atau < 36°C'
    ],
    penunjang: ['Darah Lengkap', 'Urinalisis', 'Laktat serum', 'Kultur (bila tersedia)'],
    diagnosis: ['Sepsis', 'Syok Septik (Sepsis + Hipotensi persisten yang butuh vasopresor + Laktat >2 mmol/L)'],
    diagnosisBanding: ['Syok Hipovolemik', 'Syok Kardiogenik', 'Syok Anafilaktik'],
    tatalaksana: [
      { name: 'Resusitasi Cairan 1', dose: '30 ml/kgBB RL/NaCl', note: 'Guyur/Cepat dalam 3 jam pertama' },
      { name: 'Oksigenasi', dose: 'Nasal kanul/NRM', note: 'Target SpO2 > 94%' },
      { name: 'Antibiotik Spektrum Luas', dose: 'Inisiasi segera', note: 'Setelah ambil kultur (jangan tunda)' }
    ],
    tatalaksanaDetail: {
      nonFarmakologi: [
        'ABC (Airway, Breathing, Circulation)',
        'Monitoring ketat TTV dan produksi urine',
        'Stabilisasi jalan napas dan oksigenasi'
      ],
      farmakologi: [
        {
          title: 'Resusitasi Dinamis',
          items: [
             { name: 'Cairan Kristaloid (RL/NaCl 0.9%)', dose: '30 mL/kg (Dewasa)', note: 'Evaluasi respon setiap 30 menit' }
          ]
        },
        {
          title: 'Antibiotik Empiris (Inisiasi Cepat)',
          items: [
             { name: 'Antibiotik Spektrum Luas', dose: 'Sesuai protokol RS/FKTP', note: 'Injeksi IV segera setelah kultur (jika bisa)' }
          ]
        }
      ]
    },
    edukasi: ['Kondisi pasien sangat kritis dan memerlukan perawatan intensif (ICU)', 'Tanda-tanda kegawatan yang perlu segera dilaporkan'],
    rujukan: ['WAJIB SEGERA DIRUJUK ke RS dengan fasilitas ICU setelah stabilisasi awal (ABC)'],
    prognosis: { vitam: 'Dubia ad Malam', functionam: 'Dubia ad Malam', sanationam: 'Dubia' },
    alerts: [
      { type: 'danger', text: 'Sepsis adalah KEDARURATAN (Medical Emergency). Setiap jam keterlambatan antibiotik meningkatkan risiko kematian secara signifikan.' }
    ]
  },
  {
    id: 'itp_suspek',
    name: 'Suspek ITP',
    icpc: 'B82',
    icd: 'D69.3',
    level: '2',
    cat: 'Hematologi & Onkologi',
    icon: '🩸',
    iconBg: '#fffced',
    preview: 'Gangguan imun yang menyebabkan kadar trombosit (keping darah) sangat rendah. Gejala: bintik merah di kulit atau mimisan mendadak.',
    masalah: 'Destruksi trombosit yang dimediasi oleh autoantibodi.',
    overview: {
      etiologi: 'Autoantibodi yang menyerang trombosit sendiri disertai gangguan produksi di sumsum tulang pasca-infeksi atau idiopatik.',
      epidemiologi: 'Dapat terjadi pada anak (akut/self-limiting) dan dewasa (kronik).',
      patofisiologi: 'IgG melekat pada trombosit → Trombosit dihancurkan di limpa → Trombositopeni berat.',
      komplikasi: ['Perdarahan masif (intrakranial/gastrointestinal)', 'Jatuh dengan trauma kepala (risiko perdarahan gawat)']
    },
    anamnesis: [
      'Bintik-bintik merah di kulit (petekie) yang tidak hilang saat ditekan', 
      'Memar-memar kebiruan (ekimosis) tanpa trauma jelas', 
      'Mimisan (epistaksis) atau gusi berdarah', 
      'Riwayat infeksi virus 1-2 minggu sebelumnya (pada anak)'
    ],
    fisik: [
      'Petekie, purpura, atau ekimosis pada kulit/mukosa', 
      'TIDAK ADA splenomegali (bila ada, curiga leukemia/thalasemia)'
    ],
    penunjang: ['Darah Lengkap', 'Apusan Darah Tepi'],
    diagnosis: ['Suspek Immune Thrombocytopenic Purpura (ITP)'],
    diagnosisBanding: ['Leukemia', 'Thalasemia', 'Demam Berdarah Dengue (DBD)'],
    tatalaksana: [
        { name: 'Observasi', dose: '-', note: 'Pada anak dengan perdarahan minimal' },
        { name: 'Kortikosteroid', dose: 'Prednison 1 mg/kgBB', note: 'Indikasi spesialis (Trombosit < 20.000)' }
    ],
    tatalaksanaDetail: {
        nonFarmakologi: ['Batasi aktivitas fisik berat', 'Hindari obat anti-platelet'],
        farmakologi: [
            {
                title: 'Terapi Imunosupresan (Spesialis)',
                items: [
                   { name: 'Kortikosteroid (Prednison)', dose: '1 mg/kgBB/hari', note: 'Observasi ketat perdarahan' }
                ]
            }
        ]
    },
    edukasi: ['Segera ke IGD jika perdarahan tidak berhenti', 'Hindari aktivitas fisik yang berisiko benturan / jatuh', 'Jangan minum obat pengecer darah (seperti Aspirin)'],
    rujukan: ['WAJIB RUJUK ke spesialis Penyakit Dalam/Anak (Hematologi)'],
    prognosis: { vitam: 'Bonam', functionam: 'Bonam', sanationam: 'Dubia' },
    alerts: [ 
        { type: 'danger', text: 'Trombosit < 20.000/uL adalah tanda bahaya perdarahan masif!' },
        { type: 'danger', text: 'Waspadai perdarahan intrakranial (otak) bila trombosit < 10.000 /uL. Segera rujuk!' }
    ]
  },
  {
    id: 'sjs_suspek',
    name: 'Suspek Stevens-Johnson Syndrome (SJS)',
    icpc: 'S99',
    icd: 'L51.1',
    level: '3B',
    cat: 'Dermatologi',
    icon: '🔥',
    iconBg: '#fff1f0',
    preview: 'Reaksi alergi obat yang sangat berat. Gejala: ruam merah melepuh luas, bibir/mulut pecah-pecah berdarah, dan mata merah. DARURAT!',
    masalah: 'Reaksi mukokutan akut yang mengancam nyawa, ditandai dengan nekrosis epidermis yang luas.',
    anamnesis: ['Riwayat minum obat baru dalam 1-4 minggu terakhir (sering: Allopurinol, Carbamazepine, NSAID, Sulfonamida)', 'Demam tinggi dan gejala seperti flu (malaise, nyeri sendi)', 'Nyeri pada kulit dan sariawan hebat di mulut/bibir'],
    fisik: ['Ruam merah (eritema) yang melepuh (bula) dan terkelupas', 'Nikolsky Sign (+): kulit mengelupas bila ditekan/digosok ringan', 'Keterlibatan Mukosa (WAJIB): bibir pecah-pecah berdarah (krusta kehitaman), sariawan luas, mata merah (konjungtivitis)'],
    penunjang: ['Biopsi Kulit (bila stabil)', 'Cek kadar elektrolit dan fungsi ginjal'],
    diagnosis: ['Suspek Stevens-Johnson Syndrome (SJS).'],
    tatalaksana: [
      { name: 'STOP Semua Obat', dose: '-', note: 'Tindakan paling krusial! Hentikan semua obat yang dicurigai' },
      { name: 'Resusitasi Cairan', dose: '-', note: 'Seperti manajemen luka bakar' },
      { name: 'Perawatan Luka', dose: 'NaCl 0.9% / Kassa lembab', note: 'Jaga kelembaban dan cegah infeksi' }
    ],
    edukasi: ['Ingat dan catat obat yang memicu reaksi ini, JANGAN PERNAH diminum lagi seumur hidup', 'Keluarga harus tahu riwayat alergi obat pasien'],
    rujukan: ['WAJIB SEGERA DIRUJUK ke RS yang memiliki fasilitas Burn Unit / ICU'],
    prognosis: { vitam: 'Dubia ad Malam', functionam: 'Dubia', sanationam: 'Malam' },
    alerts: [
      { type: 'danger', text: 'SJS adalah kondisi darurat medis. Keterlambatan menghentikan obat pemicu meningkatkan risiko kematian!' }
    ]
  },
  {
    id: 'keracunan_jengkol',
    name: 'Keracunan Jengkol (Djengkolism)',
    icpc: 'U99',
    icd: 'T62.2',
    level: '4A',
    cat: 'Umum & Infeksi',
    icon: '🥘',
    iconBg: '#fffced',
    preview: 'Nyeri perut hebat dan sulit kencing setelah makan jengkol. Disebabkan oleh kristal asam jengkolat yang menyumbat saluran kemih.',
    masalah: 'Obstruksi saluran kemih akut akibat kristalisasi asam jengkolat.',
    anamnesis: ['Riwayat makan jengkol (mentah atau dimasak) dalam 2-12 jam terakhir', 'Nyeri perut bagian bawah atau pinggang (kolik)', 'Sulit kencing (anyang-anyangan) atau kencing berdarah', 'Bau jengkol yang kuat pada napas dan urin'],
    fisik: ['Nyeri tekan suprapubik atau CVA', 'Bau urin khas jengkol yang menyengat'],
    penunjang: ['Urin Lengkap: tampak kristal asam jengkolat (seperti jarum) di bawah mikroskop, hematuria'],
    diagnosis: ['Keracunan Asam Jengkolat.'],
    tatalaksana: [
      { name: 'Hidrasi Masif (Minum Banyak)', dose: '> 3 L/hari', note: 'Membantu membilas kristal keluar' },
      { name: 'Natrium Bikarbonat', dose: '500 mg q8h', note: 'Alkalinisasi urin untuk melarutkan kristal' },
      { name: 'Analgetik', dose: 'prn', note: 'Meredakan nyeri' }
    ],
    edukasi: ['Jangan makan jengkol dalam jumlah banyak, terutama saat perut kosong atau kurang minum', 'Jengkol yang dimasak matang lebih aman daripada mentah'],
    rujukan: ['Gagal ginjal akut (tidak ada urin)', 'Nyeri kolik tidak membaik dengan obat'],
    prognosis: { vitam: 'Bonam', functionam: 'Bonam', sanationam: 'Bonam' },
    alerts: [
      { type: 'ok', text: 'Kunci penanganan keracunan jengkol adalah minum air sebanyak-banyaknya dan alkalinisasi urin.' }
    ]
  },
  {
    id: 'ulkus_dekubitus',
    name: 'Ulkus Dekubitus (Luka Tekan)',
    icpc: 'S97',
    icd: 'L89.9',
    level: '3A',
    cat: 'Dermatologi',
    icon: '🩹',
    iconBg: '#f5f5f5',
    preview: 'Luka pada kulit akibat tekanan terlalu lama, biasanya pada pasien yang hanya bisa berbaring (lumpuh/lansia).',
    masalah: 'Kerusakan jaringan terlokalisir akibat iskemia karena tekanan kronis.',
    anamnesis: ['Luka di area penonjolan tulang (bokong, tumit, siku)', 'Riwayat tidak bisa mobilisasi (stroke, patah tulang, lansia bed-ridden)', 'Nyeri atau bau tidak sedap dari luka'],
    fisik: ['Luka pada area tekan dengan berbagai stadium:', 'Stadium 1: Kemerahan yang tidak hilang saat ditekan', 'Stadium 2: Luka lecet atau melepuh (epidermis/dermis)', 'Stadium 3: Luka dalam sampai lemak subkutan', 'Stadium 4: Luka sangat dalam sampai otot/tulang'],
    penunjang: ['Klinis utama + Kultur pus (bila ada infeksi)'],
    diagnosis: ['Ulkus Dekubitus Stadium...'],
    tatalaksana: [
      { name: 'Alih Baring (Tiap 2 Jam)', dose: '-', note: 'Miring kanan - telentang - miring kiri' },
      { name: 'Kasur Anti-Dekubitus', dose: '-', note: 'Kasur angin (ripple mattress)' },
      { name: 'Wound Care (Modern Dressing)', dose: '-', note: 'Bersihkan luka dan tutup dengan kasa lembab' }
    ],
    edukasi: ['Jaga kebersihan kulit dan seprai', 'Berikan nutrisi tinggi protein untuk percepat penyembuhan', 'Latih gerak sendi pasif pada pasien'],
    rujukan: ['Luka stadium 3 atau 4 (butuh debridemen bedah)', 'Ada tanda sepsis akibat infeksi luka'],
    prognosis: { vitam: 'Bonam', functionam: 'Dubia', sanationam: 'Dubia (risiko rekurensi)' },
    alerts: [
      { type: 'warn', text: 'Pencegahan adalah kunci! "Tiap 2 jam ganti posisi" adalah protokol wajib untuk pasien bed-ridden.' }
    ]
  },
  {
    id: 'chikungunya',
    name: 'Chikungunya',
    icpc: 'A78',
    icd: 'A92.0',
    level: '4A',
    cat: 'Umum & Infeksi',
    icon: '🦟',
    iconBg: '#fffced',
    preview: 'Penyakit virus yang ditularkan nyamuk. Gejala khas: demam mendadak dan nyeri sendi hebat yang membuat penderita membungkuk.',
    masalah: 'Infeksi virus Chikungunya (CHIKV) yang menyerang sistem muskuloskeletal.',
    anamnesis: ['Demam tinggi mendadak', 'Nyeri sendi hebat (artralgia) hingga sulit berjalan', 'Nyeri otot, sakit kepala, dan lemas', 'Ruam kemerahan (makulopapular) pada kulit'],
    fisik: ['Pembengkakan pada sendi (biasanya sendi kecil tangan/kaki)', 'Suhu tubuh > 38.5C', 'Ruam kulit'],
    penunjang: ['Serologi IgM Chikungunya (+)', 'Darah Lengkap: seringkali normal (berbeda dengan DBD yang trombosit turun drastis)'],
    diagnosis: ['Chikungunya.'],
    tatalaksana: [
      { name: 'Paracetamol', dose: '500 mg q6h prn', note: 'Meredakan demam dan nyeri' },
      { name: 'NSAID (Ibuprofen)', dose: '400 mg q8h', note: 'Hanya bila paracetamol tidak memadai dan TIDAK ADA suspek DBD' },
      { name: 'Tirah Baring & Bed Rest', dose: '-', note: 'Membantu pemulihan sendi' }
    ],
    edukasi: ['Penyakit ini jarang fatal tapi nyeri sendi bisa menetap berbulan-bulan', 'Berantas sarang nyamuk dengan 3M Plus', 'Gunakan lotion anti nyamuk'],
    rujukan: ['Nyeri sendi kronis yang sangat mengganggu', 'Gejala neurologis (infeksi otak)'],
    prognosis: { vitam: 'Bonam', functionam: 'Bonam (bisa dubia bila kronis)', sanationam: 'Bonam' },
    alerts: [
      { type: 'ok', text: 'Berbeda dengan DBD, Chikungunya jarang menyebabkan perdarahan atau kebocoran plasma.' }
    ]
  },
  {
    id: 'labiopalatoskizis',
    name: 'Labiopalatoskizis (Bibir Sumbing)',
    icpc: 'L81',
    icd: 'Q37',
    level: '2',
    cat: 'Pediatri',
    icon: '👶',
    iconBg: '#e0f2f1',
    preview: 'Kelainan bawaan berupa celah pada bibir dan/atau langit-langit mulut. Memerlukan penanganan multidisiplin.',
    masalah: 'Gangguan fusi jaringan wajah selama perkembangan mudigah (embrio).',
    anamnesis: ['Tampak celah pada bibir atau langit-langit mulut sejak lahir', 'Kesulitan menyusu (tersedak/cairan keluar lewat hidung)', 'Suara sengau (bila celah langit-langit)'],
    fisik: ['Celah pada bibir (Labioskizis)', 'Celah pada langit-langit (Palatoskizis)', 'Celah bisa unilateral (satu sisi) atau bilateral'],
    penunjang: ['Klinis utama'],
    diagnosis: ['Labiopalatoskizis Komplit / Inkomplit.'],
    tatalaksana: [
      { name: 'Manajemen Nutrisi', dose: '-', note: 'Gunakan dot khusus atau sendok bila sulit menyusu' },
      { name: 'Labio-plasti (Operasi Bibir)', dose: '-', note: 'Biasanya saat usia 3-6 bulan (Rule of Ten)' },
      { name: 'Palato-plasti (Operasi Langit)', dose: '-', note: 'Biasanya saat usia 10-18 bulan' }
    ],
    edukasi: ['Kelainan ini dapat diperbaiki dengan operasi', 'Anak memerlukan terapi wicara setelah operasi langit-langit', 'Dukungan psikologis bagi orang tua sangat penting'],
    rujukan: ['WAJIB RUJUK ke Spesialis Bedah Plastik atau Bedah Mulut untuk rencana rekonstruksi'],
    prognosis: { vitam: 'Bonam', functionam: 'Dubia (fungsi bicara)', sanationam: 'Bonam (pasca operasi)' },
    alerts: [
      { type: 'ok', text: 'Operasi bibir sumbing yang tepat waktu dapat mengembalikan fungsi makan dan estetika wajah anak secara signifikan.' }
    ]
  },
  {
    id: 'pertusis_suspek',
    name: 'Suspek Pertusis (Batuk Rejan)',
    icpc: 'R71',
    icd: 'A37.0',
    level: '3B',
    cat: 'Umum & Infeksi',
    icon: '🗣️',
    iconBg: '#fffced',
    preview: 'Batuk sangat keras yang berakhir dengan suara menarik napas melengking (whoop). Sering terjadi pada anak yang belum imunisasi lengkap.',
    masalah: 'Infeksi saluran napas akut oleh bakteri Bordetella pertussis.',
    anamnesis: ['Batuk beruntun yang sangat keras (paroksismal)', 'Bunyi "whoop" (menarik napas melengking) di akhir batuk', 'Muntah setelah batuk (post-tussive emesis)', 'Muka menjadi merah atau kebiruan saat batuk'],
    fisik: ['Tanda perdarahan subkonjungtiva (akibat tekanan batuk keras)', 'Suara napas biasanya normal di luar serangan batuk'],
    penunjang: ['Leukositosis berat dengan limfositosis relatif', 'Kultur swab nasofaring'],
    diagnosis: ['Suspek Pertusis.'],
    tatalaksana: [
      { name: 'Eritromisin', dose: '12.5 mg/kgBB q6h (14 hari)', note: 'Antibiotik pilihan untuk memutus penularan' },
      { name: 'Oksigen', dose: 'prn', note: 'Bila ada sesak atau kebiruan (sianosis)' },
      { name: 'Hindari Pemicu Batuk', dose: '-', note: 'Debu, asap, atau aktivitas fisik berlebih' }
    ],
    edukasi: ['Penyakit ini sangat menular lewat percikan ludah (droplet)', 'Pentingnya imunisasi dasar lengkap (DPT-HB-Hib)', 'Isolasi pasien selama 5 hari pertama pengobatan'],
    rujukan: ['Bayi usia < 6 bulan (risiko henti napas)', 'Adanya tanda gagal napas atau kebiruan saat batuk'],
    prognosis: { vitam: 'Bonam (bila cukup umur)', functionam: 'Bonam', sanationam: 'Bonam' },
    alerts: [
      { type: 'danger', text: 'Pada bayi, pertusis dapat menyebabkan "Apneu" (henti napas) tanpa gejala batuk yang jelas. Sangat berbahaya!' }
    ]
  },
  {
    id: 'dismenore',
    name: 'Dismenore (Nyeri Haid)',
    icpc: 'X02',
    icd: 'N94.6',
    level: '4A',
    cat: 'Obsgin',
    icon: '🩸',
    iconBg: '#fce4ec',
    preview: 'Nyeri kram pada perut bawah saat menstruasi. Dapat bersifat primer (normal) atau sekunder (masalah medis).',
    masalah: 'Nyeri perut bawah yang terkait dengan siklus menstruasi.',
    anamnesis: ['Nyeri kram di perut bawah (suprapubik) menjelang atau saat haid', 'Nyeri dapat menjalar ke punggung bawah atau paha', 'Kadang disertai mual, muntah, atau lemas', 'Tanyakan apakah nyeri sangat hebat hingga mengganggu sekolah/kerja'],
    fisik: ['Nyeri tekan ringan pada suprapubik', 'Pemeriksaan bimanual (bila perlu): normal pada dismenore primer'],
    penunjang: ['USG Kandung Empedu (bila curiga endometriosis/kista)'],
    diagnosis: ['Dismenore Primer / Sekunder.'],
    tatalaksana: [
      { name: 'Asam Mefenamat', dose: '500 mg q8h', note: 'NSAID pilihan untuk hambat prostaglandin' },
      { name: 'Paracetamol', dose: '500 mg q6h prn', note: 'Analgetik ringan' },
      { name: 'Kompres Hangat', dose: '-', note: 'Membantu relaksasi otot rahim' }
    ],
    edukasi: ['Olahraga teratur dapat mengurangi keluhan', 'Istirahat cukup saat haid', 'Gunakan obat segera saat nyeri mulai terasa'],
    rujukan: ['Nyeri tidak membaik dengan obat biasa', 'Nyeri muncul di luar siklus haid', 'Curiga Endometriosis atau Mioma Uteri'],
    prognosis: { vitam: 'Bonam', functionam: 'Bonam', sanationam: 'Bonam' },
    alerts: [
      { type: 'ok', text: 'Dismenore primer biasanya membaik setelah menikah atau melahirkan.' }
    ]
  },
  {
    id: 'fam',
    name: 'Fibroadenoma Mammae (FAM)',
    icpc: 'X76',
    icd: 'D24',
    level: '3A',
    cat: 'Obsgin',
    icon: '🎀',
    iconBg: '#f5f5f5',
    preview: 'Benjolan payudara jinak yang sering terjadi pada wanita muda. Terasa padat, kenyal, dan mudah digerakkan.',
    masalah: 'Tumor jinak payudara yang berasal dari proliferasi jaringan epitel dan stroma.',
    anamnesis: ['Benjolan pada payudara, tidak nyeri', 'Benjolan tidak membesar saat haid', 'Biasanya terjadi pada usia muda (15-30 tahun)'],
    fisik: ['Benjolan: batas tegas, permukaan licin, konsistensi kenyal, sangart mobile (mudah digeser/breast mouse)', 'TIDAK ADA tarikan kulit (skin dimpling) atau keluarnya cairan dari puting'],
    penunjang: ['SADARI (Periksa Payudara Sendiri)', 'USG Mammae: tampak massa hipoekoik, batas tegas'],
    diagnosis: ['Fibroadenoma Mammae (FAM).'],
    tatalaksana: [
      { name: 'Observasi', dose: '-', note: 'Bila ukuran kecil dan tidak mengganggu' },
      { name: 'Eksisi (Operasi Pengangkatan)', dose: '-', note: 'Dilakukan bila benjolan membesar terus atau mengganggu psikologis' }
    ],
    edukasi: ['FAM adalah tumor jinak dan bukan kanker', 'Tetap rutin lakukan SADARI tiap bulan setelah haid', 'Segera kontrol bila benjolan berubah bentuk atau kulit payudara mengerut'],
    rujukan: ['WAJIB RUJUK ke Spesialis Bedah (Onkologi) untuk rencana biopsi atau operasi'],
    prognosis: { vitam: 'Bonam', functionam: 'Bonam', sanationam: 'Bonam' },
    alerts: [
      { type: 'ok', text: 'Setiap benjolan payudara baru harus selalu dievaluasi oleh tenaga medis untuk menyingkirkan kemungkinan keganasan.' }
    ]
  },
  {
    id: 'ca_mammae_suspek',
    name: 'Suspek Kanker Payudara',
    icpc: 'X76',
    icd: 'C50.9',
    level: '2',
    cat: 'Hematologi & Onkologi',
    icon: '🎀',
    iconBg: '#ffebee',
    preview: 'Keganasan pada payudara. Tanda bahaya: benjolan keras menetap, kulit jeruk, cairan berdarah dari puting, atau puting tertarik ke dalam.',
    masalah: 'Keganasan sel-sel payudara yang berpotensi menyebar ke organ lain.',
    anamnesis: ['Benjolan payudara yang terasa keras dan tidak dapat digerakkan', 'Puting susu tertarik ke dalam (retraksi)', 'Keluar cairan berdarah atau keruh dari puting (nipple discharge)', 'Riwayat keluarga dengan kanker payudara atau ovarium'],
    fisik: ['Benjolan: batas tidak tegas, konsistensi keras, terfiksasi (tidak bisa digerakkan)', 'Kulit di atas benjolan seperti kulit jeruk (Peau d\'orange) atau pecah (ulkus)', 'Pembesaran kelenjar getah bening ketiak (aksila)'],
    penunjang: ['Mamografi', 'Biopsi (Fine Needle Aspiration Biopsy / FNAB)'],
    diagnosis: ['Suspek Karsinoma Mammae.'],
    tatalaksana: [
      { name: 'Masektomi', dose: '-', note: 'Operasi pengangkatan payudara (dilakukan spesialis)' },
      { name: 'Kemoterapi / Radioterapi', dose: '-', note: 'Terapi pendamping' }
    ],
    edukasi: ['Pentingnya deteksi dini melalui SADARI (sendiri) dan SADANIS (klinis)', 'Semakin cepat terdeteksi, peluang kesembuhan semakin besar'],
    rujukan: ['WAJIB SEGERA DIRUJUK ke Spesialis Bedah Onkologi di RS Onkologi terpadu'],
    prognosis: { vitam: 'Dubia (tergantung stadium)', functionam: 'Dubia', sanationam: 'Malam' },
    alerts: [
      { type: 'danger', text: 'Benjolan payudara yang tidak nyeri justru seringkali lebih berbahaya daripada yang nyeri. Jangan tunda pemeriksaan!' }
    ]
  },
  {
    id: 'koma_suspek',
    name: 'Penurunan Kesadaran (Koma)',
    icpc: 'P20',
    icd: 'R40.2',
    level: '3B',
    cat: 'Neurologi',
    icon: '🧠',
    iconBg: '#fff1f0',
    preview: 'Kondisi pasien yang tidak sadar dan tidak memberikan respons terhadap rangsang. Memerlukan stabilisasi jalan napas segera.',
    masalah: 'Gangguan fungsi otak berat yang menyebabkan hilangnya kesadaran.',
    anamnesis: ['Kapan mulai tidak sadar? Mendadak atau perlahan?', 'Riwayat penyakit: diabetes (gula darah), hipertensi (stroke), ginjal, atau hati', 'Riwayat trauma kepala, konsumsi obat/racun, atau kejang'],
    fisik: ['GCS (Glasgow Coma Scale) < 8 (Koma)', 'Evaluasi ABC (Airway, Breathing, Circulation)', 'Refleks pupil dan pola napas', 'Tanda rangsang meningeal (bila curiga infeksi otak)'],
    penunjang: ['Cek Gula Darah Sewaktu (GDS) — Singkirkan Hipoglikemia!', 'Elektrolit, Fungsi Ginjal/Hati', 'CT-Scan Kepala'],
    diagnosis: ['Penurunan Kesadaran e.c Suspek ...'],
    tatalaksana: [
      { name: 'Airway Management', dose: '-', note: 'Pastikan jalan napas paten, pasang OPA atau intubasi bila perlu' },
      { name: 'Oksigenasi', dose: 'Target SpO2 > 94%', note: 'Mencegah hipoksia otak' },
      { name: 'Cairan Intravena', dose: '-', note: 'Menjaga perfusi otak' },
      { name: 'Dextrose 40%', dose: '25-50 ml IV', note: 'Hanya bila hasil GDS rendah (Hipoglikemia)' }
    ],
    edukasi: ['Pasien dalam kondisi kritis dan memerlukan penanganan intensif secepatnya'],
    rujukan: ['WAJIB SEGERA DIRUJUK ke RS dengan fasilitas ICU dan CT-Scan'],
    prognosis: { vitam: 'Malam', functionam: 'Malam', sanationam: 'Malam' },
    alerts: [
      { type: 'danger', text: 'Hukum nomor satu penurunan kesadaran: SELALU CEK GULA DARAH! Hipoglikemia adalah penyebab koma yang paling mudah diobati jika cepat diketahui.' }
    ]
  },
  {
    id: 'hemoptisis_masif',
    name: 'Hemoptisis Masif (Batuk Darah Masif)',
    icpc: 'R24',
    icd: 'R04.2',
    level: '3B',
    cat: 'Respirasi',
    icon: '🩸',
    iconBg: '#fff1f0',
    preview: 'Batuk darah dalam jumlah banyak (>200-600 mL dalam 24 jam). Risiko utama: tersumbatnya jalan napas oleh darah.',
    masalah: 'Perdarahan saluran napas bawah yang volume besarnya mengancam patensi jalan napas.',
    overview: {
      etiologi: 'Seringkali sekuel dari TB paru (kavitas/aneurisma Rasmussen), bronkiektasis, atau keganasan paru.',
      epidemiologi: 'Ditemukan terutama pada pasien dengan riwayat TB paru kronis atau penyakit paru obstruktif lainnya.',
      patofisiologi: 'Erosi pembuluh darah arkus bronkialis akibat proses inflamasi kronik, kavitas, atau invasi tumor.',
      komplikasi: ['Asfiksia (penyumbatan jalan napas)', 'Syok hipovolemik', 'Pneumonia aspirasi']
    },
    anamnesis: ['Batuk keluar darah segar dalam jumlah banyak', 'Sesak napas dan rasa tercekik', 'Riwayat TB paru, bronkiektasis, atau kanker paru'],
    fisik: ['Takipnea (napas cepat)', 'Sianosis (kebiruan)', 'Ronki basah di area paru yang sakit'],
    penunjang: ['Kadar Hemoglobin (Hb)', 'Rontgen Thorax: tampak infiltrat atau kavitas (sumber perdarahan)'],
    diagnosis: ['Hemoptisis Masif (Kriteria >200-600 mL/24 jam)'],
    diagnosisBanding: ['Hemoptisis Non-Masif', 'Hematemesis (perdarahan lambung)', 'Erosi arteri pulmonalis'],
    tatalaksana: [
      { name: 'Posisi Miring ke Sisi Sakit', dose: '-', note: 'Agar darah tidak mengalir ke paru yang sehat' },
      { name: 'Oksigenasi', dose: 'Nasal kanul/NRM', note: 'Manajemen jalan napas prioritas' },
      { name: 'Asam Traneksamat', dose: '500-1000 mg IV', note: 'Antifibrinolitik' }
    ],
    tatalaksanaDetail: {
      nonFarmakologi: [
        'ABC (Airway, Breathing, Circulation)',
        'Posisi lateral dekubitus (side lying position) pada sisi paru yang sakit',
        'Suction jalan napas jika darah menghalangi'
      ],
      farmakologi: [
        {
          title: 'Terapi Hemostasis',
          items: [
             { name: 'Asam Traneksamat', dose: '500 mg - 1000 mg (IV bolus lambat)', note: 'Bisa diulang 3-4x sehari' }
          ]
        }
      ]
    },
    edukasi: ['Jangan menahan batuk, biarkan darah keluar', 'Kondisi ini gawat dan butuh penanganan RS segera'],
    rujukan: ['WAJIB SEGERA DIRUJUK ke Rumah Sakit dengan fasilitas bronkoskopi dan bedah toraks'],
    prognosis: { vitam: 'Dubia ad Malam', functionam: 'Bonam', sanationam: 'Dubia' },
    alerts: [
      { type: 'danger', text: 'Hemoptisis masif adalah KEDARURATAN respiratorik. PRIORITASKAN jalan napas sebelum menghentikan perdarahan.' },
      { type: 'danger', text: 'Pada batuk darah masif, pasien meninggal karena "tenggelam" dalam darahnya sendiri (asfiksia), bukan karena kekurangan darah (anemia).' }
    ],
    externalUrl: 'https://www.alomedika.com/penyakit/pulmonologi/hemoptisis'
  },
  {
    id: 'invaginasi_suspek',
    name: 'Suspek Invaginasi (Intususepsi)',
    icpc: 'D99',
    icd: 'K56.1',
    level: '2',
    cat: 'Pediatri',
    icon: '👶',
    iconBg: '#fff1f0',
    preview: 'Kondisi usus yang melipat masuk ke bagian usus lainnya. Gejala: bayi menangis kesakitan mendadak, perut kembung, dan BAB berdarah-lendir.',
    masalah: 'Penyumbatan usus akibat masuknya segmen usus proksimal ke dalam lumen usus distalnya.',
    anamnesis: ['Bayi menangis menjerit kesakitan secara tiba-tiba dan hilang timbul (kolik infantil)', 'Anak menarik kaki ke arah perut saat meringis', 'Muntah hijau (bilier)', 'BAB berdarah dan berlendir seperti jeli merah (Red Currant Jelly Stool)'],
    fisik: ['Perut kembung (distensi)', 'Teraba massa seperti sosis (Sausage-shaped mass) di perut kanan atas', 'Dance Sign (+): perut kanan bawah terasa kosong', 'Colok dubur: sarung tangan tampak lendir darah dan "pseudo-portio"'],
    penunjang: ['USG Abdomen: tampak gambaran Target Sign atau Donut Sign'],
    diagnosis: ['Suspek Invaginasi.'],
    tatalaksana: [
      { name: 'Puasa Total', dose: '-', note: 'Mengistirahatkan usus' },
      { name: 'Cairan Infus', dose: '-', note: 'Dekompresi lambung dengan NGT' },
      { name: 'Reposisi Hidrostatik / Udara', dose: '-', note: 'Dilakukan oleh spesialis di RS' }
    ],
    edukasi: ['Kondisi ini gawat dan memerlukan penanganan segera agar usus tidak busuk'],
    rujukan: ['WAJIB SEGERA DIRUJUK ke RS yang memiliki Spesialis Bedah Anak'],
    prognosis: { vitam: 'Dubia (bila terlambat)', functionam: 'Bonam', sanationam: 'Bonam' },
    alerts: [
      { type: 'danger', text: 'Red Currant Jelly Stool (lendir darah) adalah tanda lanjut. Jangan tunggu sampai tanda ini muncul untuk merujuk bila curiga invaginasi!' }
    ]
  },
  {
    id: 'kolera',
    name: 'Kolera',
    icpc: 'D70',
    icd: 'A00.9',
    level: '4A',
    cat: 'Umum & Infeksi',
    icon: '💧',
    iconBg: '#e3f2fd',
    preview: 'Diare sangat berat yang menyerupai air cucian beras. Menyebabkan dehidrasi hebat dalam waktu singkat. DARURAT CAIRAN!',
    masalah: 'Infeksi saluran cerna akut oleh bakteri Vibrio cholerae.',
    anamnesis: ['Diare cair sangat sering dan masif', 'Tinja menyerupai "Air Cucian Beras" (Rice Water Stool) dan bau amis', 'Muntah, kram otot, dan sangat lemas', 'Riwayat minum air atau makan makanan yang terkontaminasi'],
    fisik: ['Tanda Dehidrasi Berat: mata sangat cekung, turgor kulit sangat lambat, suara serak (vox cholerica)', 'Kesadaran menurun (somnolen)', 'Nadi cepat lemah, akral dingin'],
    penunjang: ['Pemeriksaan tinja: kuman berbentuk koma yang bergerak cepat (darting motility)'],
    diagnosis: ['Kolera dengan Dehidrasi Berat.'],
    tatalaksana: [
      { name: 'Rehidrasi Agresif (Guyur)', dose: 'RL / NaCl (Sesuai protokol dehidrasi berat)', note: 'Tindakan penyelamatan nyawa nomor satu' },
      { name: 'Azitromisin', dose: '1 gram (Dosis tunggal)', note: 'Antibiotik untuk percepat penghentian diare' },
      { name: 'Zinc', dose: '20 mg q24h (10 hari)', note: 'Membantu regenerasi mukosa usus' }
    ],
    edukasi: ['Masak air sampai mendidih sebelum diminum', 'Cuci tangan dengan sabun secara rutin', 'Jaga kebersihan lingkungan dan gunakan jamban sehat'],
    rujukan: ['WAJIB RUJUK ke RS yang memiliki fasilitas isolasi dan rehidrasi intravena kuat'],
    prognosis: { vitam: 'Dubia', functionam: 'Bonam', sanationam: 'Bonam' },
    alerts: [
      { type: 'danger', text: 'Kolera dapat membunuh pasien dalam hitungan jam akibat dehidrasi berat. Rehidrasi jangan ditunda!' }
    ]
  },
  {
    id: 'anemia_aplastik_suspek',
    name: 'Suspek Anemia Aplastik',
    icpc: 'B78',
    icd: 'D61.9',
    level: '2',
    cat: 'Hematologi & Onkologi',
    icon: '🩸',
    iconBg: '#fff1f0',
    preview: 'Kegagalan sumsum tulang memproduksi sel darah. Gejala: Pansitopenia (Hb rendah, leukosit rendah, trombosit rendah). Pasien tampak sangat pucat, sering infeksi, dan mudah berdarah.',
    masalah: 'Gangguan hematopoiesis pada sumsum tulang.',
    anamnesis: ['Lemah, letih, lesu, lunglai (Pucat)', 'Sering demam atau sariawan yang tidak sembuh (akibat leukosit rendah)', 'Bintik merah atau perdarahan (akibat trombosit rendah)'],
    fisik: ['Konjungtiva sangat anemisy', 'Petekie atau ekimosis pada kulit', 'TIDAK ADA pembesaran kelenjar getah bening atau limpa'],
    penunjang: ['Darah Lengkap: Pansitopenia (Hb, Leukosit, Trombosit semuanya rendah)', 'Retikulosit rendah'],
    diagnosis: ['Suspek Anemia Aplastik.'],
    tatalaksana: [
      { name: 'Transfusi Komponen Darah', dose: '-', note: 'Sesuai indikasi (di Rumah Sakit)' },
      { name: 'Pemberian Antibiotik', dose: '-', note: 'Bila ada tanda infeksi' },
      { name: 'Terapi Imunosupresan', dose: '-', note: 'Dilakukan oleh spesialis' }
    ],
    edukasi: ['Hindari keramaian untuk cegah infeksi', 'Jaga kebersihan diri dan makanan', 'Penyakit ini serius dan butuh penanganan ahli'],
    rujukan: ['WAJIB SEGERA DIRUJUK ke Spesialis Penyakit Dalam / Anak (Hematologi)'],
    prognosis: { vitam: 'Dubia ad Malam', functionam: 'Dubia', sanationam: 'Malam' },
    alerts: [
      { type: 'danger', text: 'Pansitopenia tanpa pembesaran limpa/kelenjar getah bening sangat mencurigai kegagalan sumsum tulang seperti anemia aplastik.' }
    ]
  },
  {
    id: 'keracunan_co',
    name: 'Keracunan Karbon Monoksida (CO)',
    icpc: 'A92',
    icd: 'T58',
    level: '3B',
    cat: 'Bedah & Emergensi',
    icon: '💨',
    iconBg: '#fff1f0',
    preview: 'Keracunan gas tidak berwarna dan tidak berbau (asap knalpot/kebakaran). Gejala: nyeri kepala hebat, mual, dan kulit kemerahan (Cherry Red).',
    masalah: 'Ikatan karbon monoksida pada hemoglobin (Carboxyhemoglobin) yang menghambat angkutan oksigen.',
    anamnesis: ['Riwayat berada di ruangan tertutup dengan mesin menyala, kebakaran, atau asap knalpot', 'Nyeri kepala hebat (seperti diikat), pusing, mual, dan sesak napas'],
    fisik: ['Kulit dan mukosa berwarna merah terang (Cherry Red Appearance)', 'Muntah, kebingungan (disorientasi), hingga kejang/pingsan'],
    penunjang: ['Kadar Carboxyhemoglobin (COHb) dalam darah'],
    diagnosis: ['Keracunan Karbon Monoksida.'],
    tatalaksana: [
      { name: 'Oksigen 100% (High Flow)', dose: '12-15 L/menit via NRM', note: 'Mempercepat pelepasan CO dari hemoglobin' },
      { name: 'Evakuasi ke Udara Bebas', dose: '-', note: 'Langkah utama penyelamatan' },
      { name: 'Terapi Oksigen Hiperbarik', dose: '-', note: 'Bila ada gangguan saraf atau kadar COHb sangat tinggi' }
    ],
    edukasi: ['Jangan menyalakan mesin kendaraan di dalam garasi tertutup', 'Gunakan detektor CO di rumah dengan pemanas gas', 'Segera keluar ruangan bila mencium bau asap menyengat'],
    rujukan: ['Ada penurunan kesadaran, kejang, atau gagal napas'],
    prognosis: { vitam: 'Dubia', functionam: 'Dubia', sanationam: 'Bonam (bila cepat)' },
    alerts: [
      { type: 'danger', text: 'Karbon monoksida adalah "Silent Killer" karena tidak berbau, tidak berwarna, dan tidak berasa.' }
    ]
  },
  {
    id: 'tamponade_jantung_suspek',
    name: 'Suspek Tamponade Jantung',
    icpc: 'K99',
    icd: 'I31.4',
    level: '3B',
    cat: 'Kardiovaskular',
    icon: '🚨',
    iconBg: '#fff1f0',
    preview: 'Kumpulan cairan di selaput jantung yang menekan jantung. Gejala: bunyi jantung menjauh, nadi leher meningkat, dan tekanan darah turun. DARURAT!',
    masalah: 'Gangguan pengisian jantung akibat akumulasi cairan di rongga perikardium yang sangat cepat/banyak.',
    anamnesis: ['Sesak napas hebat yang memberat saat berbaring', 'Nyeri dada', 'Riwayat trauma dada, infeksi jantung, atau kanker'],
    fisik: ['BECK\'S TRIAD: Bunyi jantung menjauh (redam), JVP meningkat (distensi vena leher), dan Hipotensi (tensi turun)', 'Pulsus Paradoxus: penurunan tekanan darah sistolik >10 ms mercury saat inspirasi'],
    penunjang: ['EKG: Low voltage QRS, Electrical Alternans', 'USG Jantung (Echocardiography): tampak efusi perikard luas'],
    diagnosis: ['Suspek Tamponade Jantung.'],
    tatalaksana: [
      { name: 'Oksigenasi', dose: '-', note: 'Mandatori' },
      { name: 'Cairan Kristaloid (Load)', dose: '-', note: 'Membantu pengisian jantung' },
      { name: 'Perikardiosentesis', dose: '-', note: 'Tindakan penyelamatan nyawa (dilakukan spesialis)' }
    ],
    edukasi: ['Kondisi ini sangat kritis dan memerlukan tindakan segera'],
    rujukan: ['WAJIB SEGERA DIRUJUK ke RS yang mempunyai fasilitas Bedah Jantung / Kardiologi'],
    prognosis: { vitam: 'Malam (bila tidak segera didrainase)', functionam: 'Malam', sanationam: 'Bonam (bila tertangani)' },
    alerts: [
      { type: 'danger', text: 'Beck\'s Triad (Bunyi jantung jauh, Vena leher menonjol, Darah rendah) adalah kunci diagnosis klinis yang harus dihafal!' }
    ]
  },
  {
    id: 'empiema_suspek',
    name: 'Suspek Empiema (Nanah di Paru)',
    icpc: 'R82',
    icd: 'J86.9',
    level: '3A',
    cat: 'Respirasi',
    icon: '🫁',
    iconBg: '#fff1f0',
    preview: 'Adanya nanah di dalam rongga pleura. Biasanya komplikasi dari pneumonia yang tidak sembuh sempurna. Gejala: demam tinggi, nyeri dada, dan sesak.',
    masalah: 'Terakumulasinya pus (nanah) di dalam rongga pleura.',
    anamnesis: ['Demam tinggi yang menetap meski sudah minum antibiotik', 'Batuk dan sesak napas', 'Nyeri dada saat menarik napas (pleuritik)', 'Keringat malam dan berat badan turun'],
    fisik: ['Dada sesisi tertinggal saat bernapas', 'Perkusi: Pekak pada sisi yang sakit', 'Auskultasi: Suara napas menghilang pada area pekak'],
    penunjang: ['Rontgen Thorax: Gambaran efusi pleura masif', 'Thoracosentesis: Aspirasi cairan tampak keruh / nanah (pus)'],
    diagnosis: ['Suspek Empiema Thorax.'],
    tatalaksana: [
      { name: 'Antibiotik Dosis Tinggi', dose: 'Inisiasi IV', note: 'Pengobatan jangka panjang' },
      { name: 'Drainase Pleura (WSD)', dose: '-', note: 'Mengeluarkan nanah secara tuntas' }
    ],
    edukasi: ['Penyakit ini butuh perawatan lama di rumah sakit', 'Tetap lakukan latihan pernapasan setelah sembuh'],
    rujukan: ['WAJIB RUJUK ke Spesialis Paru untuk pemasangan selang dada (WSD) dan evaluasi'],
    prognosis: { vitam: 'Bonam', functionam: 'Dubia', sanationam: 'Dubia' },
    alerts: [
      { type: 'warn', text: 'Empiema yang tidak didrainase tuntas dapat menyebabkan paru mengerut (pleural peel) dan sesak napas permanen.' }
    ]
  },
  {
    id: 'fasitis_nekrotikans_suspek',
    name: 'Suspek Fasitis Nekrotikans',
    icpc: 'S76',
    icd: 'M72.6',
    level: '3B',
    cat: 'Bedah & Emergensi',
    icon: '🧟',
    iconBg: '#fff1f0',
    preview: 'Infeksi "pemakan daging" yang menyebar sangat cepat di jaringan kulit dalam. Nyeri sangat hebat yang tidak sebanding dengan tampilan kulit.',
    masalah: 'Infeksi progresif cepat pada fasia dalam yang menyebabkan nekrosis jaringan luas.',
    anamnesis: ['Nyeri yang sangat hebat di lokasi infeksi (lebih hebat dari yang terlihat secara fisik)', 'Bengkak yang meluas cepat dalam hitungan jam', 'Demam tinggi dan sangat lemas (lemah sekali)'],
    fisik: ['Kemerahan (eritema) tanpa batas tegas yang meluas cepat', 'Nyeri tekan yang sangat hebat', 'Tanda lanjut: kulit warna keunguan - hitam, lepuh (bula) isi cairan keruh, KREPITASI (suara krek seperti balon pecah di bawah kulit)'],
    penunjang: ['LRINEC Score (Lab Risk Indicator for Necrotizing Fasciitis)', 'Rontgen: tampak gas di jaringan lunak'],
    diagnosis: ['Suspek Fasitis Nekrotikans.'],
    tatalaksana: [
      { name: 'Antibiotik Dosis Sangat Tinggi', dose: 'Broad Spectrum IV', note: 'Kombinasi biasanya' },
      { name: 'Cairan Resusitasi', dose: '-', note: 'Manajemen syok' },
      { name: 'Debridemen Bedah', dose: '-', note: 'Tindakan utama: membuang jaringan mati segera' }
    ],
    edukasi: ['Ini adalah infeksi yang sangat mematikan dan butuh operasi segera', 'Risiko tinggi kehilangan anggota gerak (amputasi) untuk menyelamatkan nyawa'],
    rujukan: ['WAJIB SEGERA DIRUJUK ke RS yang mempunyai fasilitas Bedah Umum / Onkologi untuk operasi darurat'],
    prognosis: { vitam: 'Malam (bila terlambat)', functionam: 'Malam', sanationam: 'Malam' },
    alerts: [
      { type: 'danger', text: 'Kunci diagnosis: Nyeri yang tidak sebanding dengan temuan fisik (Pain out of proportion). Jangan tunda rujukan!' }
    ]
  },
  {
    id: 'artritis_septik_suspek',
    name: 'Suspek Artritis Septik',
    icpc: 'L73',
    icd: 'M00.9',
    level: '3A',
    cat: 'Muskuloskeletal',
    icon: '🦵',
    iconBg: '#fff1f0',
    preview: 'Infeksi kuman di dalam sendi. Gejala: satu sendi mendadak bengkak, merah, panas, dan nyeri hebat saat digerakkan. DARURAT SENDI!',
    masalah: 'Inflamasi purulen pada rongga sendi akibat infeksi bakteri.',
    anamnesis: ['Satu sendi mendadak bengkak dan sangat nyeri (biasanya lutut)', 'Demam dan menggigil', 'Sangat sulit menggerakkan sendi yang sakit'],
    fisik: ['Sendi tampak bengkak, merah, dan teraba panas', 'Nyeri tekan sendi yang hebat', 'Hanya mampu melakukan gerak sendi yang sangat terbatas (Pseudo-paralysis)'],
    penunjang: ['LED dan CRP meningkat', 'Aspirasi Cairan Sendi (Artroasentese): tampak nanah, leukosit sangat tinggi'],
    diagnosis: ['Suspek Artritis Septik.'],
    tatalaksana: [
      { name: 'Antibiotik Intravena', dose: '-', note: 'Dimulai segera' },
      { name: 'Imobilisasi Sendi', dose: '-', note: 'Fiksasi untuk kurangi nyeri' },
      { name: 'Analgetik Kuat', dose: 'prn', note: 'Meredakan nyeri hebat' }
    ],
    edukasi: ['Penyakit ini dapat merusak permanen tulang rawan sendi dalam hitungan hari bila tidak didrainase'],
    rujukan: ['WAJIB RUJUK ke Spesialis Orthopedi untuk aspirasi dan pembersihan sendi (lavage)'],
    prognosis: { vitam: 'Bonam', functionam: 'Dubia (risiko kaku sendi)', sanationam: 'Malam (bila tidak dievakuasi)' },
    alerts: [
      { type: 'danger', text: 'Satu sendi yang bengkak, merah, dan nyeri hebat disertai demam harus dianggap sebagai artritis septik sampai terbukti bukan!' }
    ]
  },
  {
    id: 'hpp_suspek',
    name: 'Perdarahan Postpartum (HPP)',
    icpc: 'W92',
    icd: 'O72.1',
    level: '3B',
    cat: 'Obsgin',
    icon: '🩸',
    iconBg: '#fff1f0',
    preview: 'Perdarahan hebat setelah melahirkan (>500 mL). Penyebab utama: rahim tidak berkontraksi (Atonia). DARURAT!',
    masalah: 'Kehilangan darah masif pasca persalinan yang mengancam nyawa ibu.',
    anamnesis: ['Perdarahan sangat banyak dari jalan lahir setelah bayi lahir', 'Ibu merasa sangat lemas, pusing, hingga pingsan', 'Riwayat persalinan lama, bayi besar, atau kehamilan kembar'],
    fisik: ['TANDA SYOK: Nadi cepat lemah, akral dingin, tensi turun', 'Uterus teraba lembek (Atonia Uteri)', 'TFU (Tinggi Fundus Uteri) masih tinggi'],
    penunjang: ['Kadar Hemoglobin (Hb)', 'Cek kelengkapan plasenta'],
    diagnosis: ['Hemorrhage Post Partum (HPP) e.c Atonia Uteri.'],
    tatalaksana: [
      { name: 'Kompresi Bimanual Interna (KBI)', dose: '-', note: 'Tindakan manual untuk merangsang kontraksi rahim' },
      { name: 'Oksitosin / Misoprostol', dose: '10 unit IM / 600-800 mcg Rektal', note: 'Uterotonika untuk kontraksi' },
      { name: 'Cairan Resusitasi (Guyur)', dose: '-', note: 'Gantikan volume darah yang hilang' }
    ],
    edukasi: ['Kondisi ibu sangat kritis dan memerlukan tindakan rumah sakit segera'],
    rujukan: ['WAJIB SEGERA DIRUJUK ke RS setelah stabilisasi awal (KBI/KBE)'],
    prognosis: { vitam: 'Dubia ad Malam', functionam: 'Bonam', sanationam: 'Bonam' },
    alerts: [
      { type: 'danger', text: 'HPP adalah penyebab utama kematian ibu di Indonesia. KBI/KBE adalah kompetensi wajib bidan/dokter di FKTP!' }
    ]
  },
  {
    id: 'distosia_bahu_suspek',
    name: 'Suspek Distosia Bahu',
    icpc: 'W92',
    icd: 'O66.0',
    level: '3B',
    cat: 'Obsgin',
    icon: '🤰',
    iconBg: '#fff1f0',
    preview: 'Kondisi bahu bayi tersangkut saat persalinan. Ditandai dengan "Turtle Sign" (kepala bayi keluar masuk). DARURAT JANIN!',
    masalah: 'Hambatan kelahiran bahu anterior oleh simfisis pubis setelah kepala bayi lahir.',
    anamnesis: ['Kepala bayi sudah lahir namun tidak terjadi putaran paksi luar', 'Bahu tidak lahir meski sudah dipimpin mengejan'],
    fisik: ['Turtle Sign (+): Kepala bayi tampak keluar masuk jalan lahir (seperti kura-kura)'],
    penunjang: ['Klinis utama (Harus segera ditangani dalam hitungan menit!)'],
    diagnosis: ['Distosia Bahu.'],
    tatalaksana: [
      { name: 'Maneuver McRoberts', dose: '-', note: 'Ibu menekuk kaki sedalam mungkin ke arah dada' },
      { name: 'Tekanan Suprapubik (Maneuver Mazzanti)', dose: '-', note: 'Mendorong bahu bayi agar melewati simfisis' },
      { name: 'TIDAK BOLEH: Mendorong fundus rahim!', dose: '-', note: 'Dapat menyebabkan rahim robek' }
    ],
    edukasi: ['Kondisi ini gawat bagi bayi, butuh kerjasama ibu untuk posisi McRoberts'],
    rujukan: ['Wajib dirujuk bila bahu tetap tidak lahir setelah manuver awal'],
    prognosis: { vitam: 'Dubia (risiko asfiksia bayi)', functionam: 'Dubia (risiko cedera saraf bahu/Erbs Palsy)', sanationam: 'Bonam' },
    alerts: [
      { type: 'danger', text: 'Waktu sangat krusial! Hipoksia otak bayi terjadi dengan cepat saat dada terjepit di jalan lahir.' }
    ]
  },
  {
    id: 'uveitis_anterior_suspek',
    name: 'Suspek Uveitis Anterior',
    icpc: 'F99',
    icd: 'H20.9',
    level: '3A',
    cat: 'Mata',
    icon: '👁️',
    iconBg: '#e0f7fa',
    preview: 'Peradangan pada bagian tengah mata (uvea). Gejala: mata merah tanpa kotoran, nyeri hebat, silau, dan pandangan buram mendadak.',
    masalah: 'Inflamasi pada iris (iritis) dan badan siliar (iridosiklitis).',
    anamnesis: ['Mata merah unilateral (satu sisi)', 'Nyeri mata hebat dan sakit kepala', 'Fotofobia (sangat silau melihat cahaya)', 'Pandangan kabur atau tampak bintik melayang (floaters)', 'TIDAK ADA sekret/kotoran mata (berbeda dengan konjungtivitis)'],
    fisik: ['Injeksi Silier (kemerahan di sekitar kornea)', 'Pupil mengecil (miosis) atau bentuknya tidak teratur (sinekia)', 'Efek Tyndall (+): keruhan pada bilik mata depan (dilihat oleh spesialis)'],
    penunjang: ['Slit Lamp Examination', 'Tes ketajaman penglihatan (Visus) turun'],
    diagnosis: ['Suspek Uveitis Anterior.'],
    tatalaksana: [
      { name: 'Obat Tetes Midriatik', dose: '1-2 tetes', note: 'Untuk melebarkan pupil dan cegah perlengketan' },
      { name: 'Kortikosteroid Topikal', dose: '-', note: 'Hanya atas instruksi spesialis (bahaya glaukoma)' },
      { name: 'Kacamata Hitam', dose: '-', note: 'Mengurangi silau' }
    ],
    edukasi: ['Penyakit ini serius dan dapat menyebabkan kebutaan bila tidak tertangani ahli', 'Patuhi jadwal kontrol dan pemakaian obat tetes'],
    rujukan: ['WAJIB RUJUK SEGERA ke Spesialis Mata untuk penanganan inflamasi intensif'],
    prognosis: { vitam: 'Bonam', functionam: 'Dubia', sanationam: 'Dubia' },
    alerts: [
      { type: 'danger', text: 'Mata merah dengan nyeri hebat dan pupil kecil adalah tanda bahaya Uveitis. Jangan berikan steroid sembarangan!' }
    ]
  },
  {
    id: 'strabismus',
    name: 'Strabismus (Mata Juling)',
    icpc: 'F92',
    icd: 'H50.9',
    level: '2',
    cat: 'Mata',
    icon: '👁️',
    iconBg: '#f1f8e9',
    preview: 'Kondisi di mana kedua mata tidak sejajar atau melihat ke arah yang berbeda. Sering terjadi pada anak-anak.',
    masalah: 'Ketidakseimbangan otot-otot penggerak bola mata (Ekstraokular).',
    anamnesis: ['Mata tampak juling (masuk ke dalam/Esotropia atau keluar/Eksotropia)', 'Sering menutup satu mata saat melihat sesuatu', 'Sering memiringkan kepala (head tilt) agar bisa melihat jelas'],
    fisik: ['Hirschberg Test (+): pantulan cahaya pada kornea tidak simetris', 'Cover-Uncover Test: adanya gerakan koreksi saat mata ditutup/dibuka'],
    penunjang: ['Pemeriksaan Visus (sering disertai ambliopia/mata malas)'],
    diagnosis: ['Strabismus (Esotropia / Eksotropia).'],
    tatalaksana: [
      { name: 'Patching Therapy', dose: '-', note: 'Menutup mata yang sehat guna melatih mata yang lemah' },
      { name: 'Kacamata Koreksi', dose: '-', note: 'Bila ada gangguan refraksi' },
      { name: 'Operasi Otot Mata', dose: '-', note: 'Bila terapi konservatif tidak berhasil' }
    ],
    edukasi: ['Jangan menganggap mata juling pada anak akan sembuh sendiri', 'Deteksi dini sebelum usia 7 tahun sangat krusial untuk cegah mata malas (ambliopia)'],
    rujukan: ['WAJIB RUJUK ke Spesialis Mata (Pediatrik Oftalmologi) untuk evaluasi fungsi binokular'],
    prognosis: { vitam: 'Bonam', functionam: 'Dubia (tergantung usia awal terapi)', sanationam: 'Bonam (estetika)' },
    alerts: [
      { type: 'ok', text: 'Mata juling bukan hanya masalah kosmetik, tapi masalah perkembangan penglihatan saraf yang harus segera dikoreksi.' }
    ]
  },
  {
    id: 'kandidiasis_oral',
    name: 'Kandidiasis Oral (Thrush)',
    icpc: 'D82',
    icd: 'B37.0',
    level: '4A',
    cat: 'Gigi & Mulut',
    icon: '👅',
    iconBg: '#fce4ec',
    preview: 'Infeksi jamur pada mulut. Gejala: bercak putih seperti sisa susu pada lidah atau pipi bagian dalam yang sulit dibersihkan.',
    masalah: 'Infeksi oportunistik oleh jamur Candida albicans pada mukosa mulut.',
    anamnesis: ['Bercak putih di lidah, gusi, atau pipi dalam', 'Rasa nyeri atau terbakar di mulut', 'Nyeri saat menelan (bila sudah menyebar ke kerongkongan)', 'Riwayat penggunaan antibiotik lama, steroid, atau daya tahan tubuh rendah (HIV/Diabetes)'],
    fisik: ['Pseudomembran: bercak putih krem (seperti gumpalan susu/keju) yang bila dikerok akan meninggalkan dasar merah dan berdarah'],
    penunjang: ['Pemeriksaan mikroskopis (Kerokan lidah dengan KOH): tampak sel ragi atau pseudohifa'],
    diagnosis: ['Kandidiasis Oral / Oral Thrush.'],
    tatalaksana: [
      { name: 'Nistatin (Drop/Suspensi)', dose: '1-2 ml q6h (dikulum dulu)', note: 'Antijamur lokal pilihan utama' },
      { name: 'Gentian Violet 1%', dose: 'Oles q12h', note: 'Alternatif ekonomis' },
      { name: 'Jaga Higiene Mulut', dose: '-', note: 'Sikat gigi lembut dan bersihkan lidah' }
    ],
    edukasi: ['Bersihkan peralatan makan/botol susu bayi dengan air mendidih', 'Segera kontrol faktor risiko (seperti kadar gula darah)', 'Gunakan obat sampai tuntas meski bercak putih sudah hilang'],
    rujukan: ['Lesi tidak membaik dengan terapi standar', 'Menyebar ke kerongkongan (Esofagitis)', 'Kecurigaan adanya penyakit sistemik (seperti HIV)'],
    prognosis: { vitam: 'Bonam', functionam: 'Bonam', sanationam: 'Bonam' },
    alerts: [
      { type: 'ok', text: 'Kandidiasis oral pada orang dewasa yang sehat harus dicurigai adanya gangguan kekebalan tubuh yang mendasari.' }
    ]
  },
  {
    id: 'periodontitis',
    name: 'Periodontitis',
    icpc: 'D82',
    icd: 'K05.3',
    level: '4A',
    cat: 'Gigi & Mulut',
    icon: '🦷',
    iconBg: '#e1f5fe',
    preview: 'Infeksi gusi serius yang merusak jaringan lunak dan tulang penyangga gigi. Gejala: gusi berdarah, bau mulut, dan gigi goyang.',
    masalah: 'Keradangan jaringan penyangga gigi akibat akumulasi plak dan karang gigi yang kronis.',
    anamnesis: ['Gusi sering berdarah saat sikat gigi', 'Gusi tampak bengkak dan merah kebiruan', 'Gigi terasa goyang atau renggang', 'Bau mulut yang menetap (Halitosis)'],
    fisik: ['Gusi bengkak dan merah', 'Adanya kantong gusi (peridontal pocket) yang dalam', 'Kegoyangan gigi (mobility) derajat 1-4', 'Adanya karang gigi (kalkulus) yang sangat banyak'],
    penunjang: ['Rontgen Gigi: tampak kerusakan tulang alveolar di sekitar akar gigi'],
    diagnosis: ['Periodontitis Kronis / Agresif.'],
    tatalaksana: [
      { name: 'Scaling & Root Planing', dose: '-', note: 'Pembersihan karang gigi hingga ke akar oleh dokter gigi' },
      { name: 'Antibiotik (Metronidazole)', dose: '500 mg q8h', note: 'Hanya diberikan pada kondisi akut (abses periodontal)' },
      { name: 'Obat Kumur Klorheksidin', dose: '0.2%', note: 'Membantu kontrol bakteri' }
    ],
    edukasi: ['Sikat gigi 2 kali sehari dengan teknik yang benar', 'Gunakan benang gigi (dental floss) untuk bersihkan sela gigi', 'Rutin ke dokter gigi tiap 6 bulan'],
    rujukan: ['Kegoyangan gigi berat yang memerlukan tindakan bedah flap atau splinting'],
    prognosis: { vitam: 'Bonam', functionam: 'Dubia (risiko tanggal gigi)', sanationam: 'Dubia' },
    alerts: [
      { type: 'warn', text: 'Periodontitis adalah penyebab utama hilangnya gigi pada orang dewasa. Karang gigi yang menetap tidak bisa hilang hanya dengan menyikat gigi!' }
    ]
  },
  {
    id: 'hnp_suspek',
    name: 'Suspek Hernia Nukleus Pulposus (HNP)',
    icpc: 'L86',
    icd: 'M51.2',
    level: '3A',
    cat: 'Muskuloskeletal',
    icon: '🦴',
    iconBg: '#f5f5f5',
    preview: 'Keluarnya bantalan tulang belakang yang menekan saraf. Gejala: nyeri pinggang yang menjalar ke kaki disertai rasa kesemutan/lemah.',
    masalah: 'Protusi diskus intervertebralis yang menyebabkan kompresi akar saraf (radikulopati).',
    anamnesis: ['Nyeri punggung bawah (LBP) yang menjalar ke paha, betis, hingga kaki (Ischialgia)', 'Rasa kesemutan (parastesia) atau baal pada kaki', 'Nyeri memberat saat mengejan, batuk, atau bersin', 'Riwayat mengangkat benda berat dengan posisi salah'],
    fisik: ['Lasegue Test (+): Nyeri menjalar saat kaki diangkat lurus < 70 derajat', 'Patrick / Anti-Patrick Test (+)', 'Penurunan kekuatan otot atau refleks pada satu sisi kaki'],
    penunjang: ['MRI Tulang Belakang (Gold Standard)', 'Rontgen Lumbosakral: melihat penyempitan celah sendi'],
    diagnosis: ['Suspek HNP Regional Lumbal.'],
    tatalaksana: [
      { name: 'NSAID (Meloxicam)', dose: '15 mg q24h', note: 'Meredakan nyeri dan inflamasi' },
      { name: 'Eperisone HCl', dose: '50 mg q8h', note: 'Relaksan otot' },
      { name: 'Vitamin B Neurotropik', dose: 'q24h', note: 'Mendukung pemulihan saraf' }
    ],
    edukasi: ['Istirahat di alas yang keras (tidak empuk)', 'Hindari mengangkat benda berat dan posisi membungkuk', 'Latih otot punggung dengan fisioterapi'],
    rujukan: ['Adanya gangguan BAB/BAK mendadak (Saddle Anesthesia/Cauda Equina Syndrome)', 'Nyeri tidak membaik dengan obat selama 6-12 minggu'],
    prognosis: { vitam: 'Bonam', functionam: 'Dubia', sanationam: 'Dubia' },
    alerts: [
      { type: 'danger', text: 'Segera rujuk ke Spesialis Bedah Saraf bila ada gangguan kontrol kencing (BAK) atau buang air besar (BAB) secara tiba-tiba!' }
    ]
  },
  {
    id: 'cts_suspek',
    name: 'Suspek Carpal Tunnel Syndrome (CTS)',
    icpc: 'L93',
    icd: 'G56.0',
    level: '3A',
    cat: 'Neurologi',
    icon: '✋',
    iconBg: '#f3e5f5',
    preview: 'Penyempitan saluran di pergelangan tangan yang menekan saraf. Gejala: kesemutan pada jari jempol, telunjuk, dan tengah.',
    masalah: 'Kompresi saraf Medianus di dalam terowongan karpal pergelangan tangan.',
    anamnesis: ['Kesamutan atau baal pada jempol, telunjuk, dan jari tengah', 'Nyeri memberat pada malam hari atau saat beraktivitas statis (menyetir, mengetik)', 'Rasa lemah saat memegang benda kecil atau mengancing baju'],
    fisik: ['Phalen Test (+): menekuk pergelangan tangan 60 detik memicu kesemutan', 'Tinel Sign (+): mengetuk saraf di pergelangan tangan memicu kesemutan', 'Atrofi otot thenar (pangkal jempol kempes) pada kasus berat'],
    penunjang: ['Pemeriksaan KHS (Kecepatan Hantar Saraf)'],
    diagnosis: ['Suspek Carpal Tunnel Syndrome (CTS).'],
    tatalaksana: [
      { name: 'Istirahatkan Tangan', dose: '-', note: 'Gunakan splint/penyangga tangan di malam hari' },
      { name: 'Vitamin B12', dose: '500 mcg q8h', note: 'Mendukung pemulihan saraf' },
      { name: 'NSAID', dose: 'prn', note: 'Meredakan nyeri' }
    ],
    edukasi: ['Hindari gerakan pergelangan tangan yang berulang dan statis dalam waktu lama', 'Sesuaikan posisi kerja (ergonomi) saat mengetik'],
    rujukan: ['Nyeri sangat hebat atau sudah ada pengecilan otot jari jempol (atrofi thenar)'],
    prognosis: { vitam: 'Bonam', functionam: 'Bonam', sanationam: 'Dubia' },
    alerts: [
      { type: 'ok', text: 'Menggunakan splint (penyangga) tangan saat tidur dapat sangat mengurangi keluhan kesemutan di malam hari.' }
    ]
  },
  {
    id: 'cushing_syndrome_suspek',
    name: 'Suspek Sindrom Cushing',
    icpc: 'T99',
    icd: 'E24.9',
    level: '2',
    cat: 'Metabolik',
    icon: '🩸',
    iconBg: '#fffced',
    preview: 'Kondisi akibat kelebihan hormon kortisol. Gejala khas: wajah bulat (moon face), punuk lemak di punggung, dan perut membuncit dengan garis merah.',
    masalah: 'Hiperkortisolisme kronis baik dari sumber endogen maupun penggunaan steroid jangka panjang (eksogen).',
    anamnesis: ['Peningkatan berat badan yang terpusat di perut (obesitas sentral)', 'Wajah tampak semakin bulat dan kemerahan', 'Mudah memar pada kulit dan muncul garis-garis merah/ungu di perut (striae)', 'Riwayat penggunaan obat "obat dewa" atau steroid (jamu pegal linu, dexamethasone) jangka panjang'],
    fisik: ['Moon Face (wajah bulat)', 'Buffalo Hump (punuk lemak di punggung atas)', 'Striae Ungu Luas di perut/paha', 'Hipertensi dan kelemahan otot pangkal paha/lengan'],
    penunjang: ['Kadar Kortisol Urin 24 Jam', 'Gula Darah Sewaktu (sering disertai diabetes)'],
    diagnosis: ['Suspek Sindrom Cushing.'],
    tatalaksana: [
      { name: 'Tapering Off Steroid', dose: '-', note: 'Hanya bila penyebabnya adalah obat steroid (dilakukan perlahan agar tidak krisis adrenal)' },
      { name: 'Kontrol Tekanan Darah', dose: '-', note: 'Manajemen komplikasi' }
    ],
    edukasi: ['Jangan sembarangan minum jamu atau obat tanpa label BPOM yang menjanjikan sembuh cepat (kemungkinan berisi steroid)', 'Penyakit ini butuh evaluasi hormon yang kompleks'],
    rujukan: ['WAJIB RUJUK ke Spesialis Penyakit Dalam (Endokrinologi) untuk mencari sumber hormon'],
    prognosis: { vitam: 'Dubia', functionam: 'Dubia', sanationam: 'Malam (bila sudah komplikasi)' },
    alerts: [
      { type: 'danger', text: 'Hati-hati penggunaan steroid jangka panjang! Sindrom Cushing iatrogenik adalah penyebab paling sering akibat penyalahgunaan obat.' }
    ]
  },
  {
    id: 'marfan_syndrome_suspek',
    name: 'Suspek Sindrom Marfan',
    icpc: 'L81',
    icd: 'Q87.4',
    level: '2',
    cat: 'Kardiovaskular',
    icon: '🦒',
    iconBg: '#e8f5e9',
    preview: 'Kelainan genetik jaringan ikat. Gejala: tubuh sangat tinggi kurus, jari-jari sangat panjang, dan gangguan pada jantung/mata.',
    masalah: 'Mutasi gen fibrillin-1 yang menyebabkan gangguan integritas jaringan ikat tubuh.',
    anamnesis: ['Riwayat keluarga dengan tubuh sangat tinggi atau kematian mendadak akibat penyakit jantung', 'Pandangan kabur (dislokasi lensa mata)', 'Nyeri dada mendadak (risiko diseksi aorta)'],
    fisik: ['Habitus Marfanoid: sangat tinggi, kurus, lengan sangat panjang (arm span > tinggi badan)', 'Arachnodactyly: jari tangan sangat panjang seperti laba-laba', 'Deformitas tulang dada (Pectus excavatum/carinatum)', 'Auskultasi: murmur jantung (sering ada masalah katup)'],
    penunjang: ['Echocardiography: melihat adanya pelebaran aorta'],
    diagnosis: ['Suspek Sindrom Marfan.'],
    tatalaksana: [
      { name: 'Beta Blocker', dose: '-', note: 'Diberikan untuk mengurangi tekanan pada aorta' },
      { name: 'Hindari Olahraga Berat', dose: '-', note: 'Mencegah robeknya pembuluh darah aorta' }
    ],
    edukasi: ['Penyakit ini bersifat genetik (diturunkan)', 'Pentingnya pemeriksaan rutin kesehatan jantung (skrining aorta) seumur hidup'],
    rujukan: ['WAJIB RUJUK ke Spesialis Jantung dan Mata untuk pemantauan komplikasi'],
    prognosis: { vitam: 'Dubia (tergantung kondisi aorta)', functionam: 'Bonam', sanationam: 'Malam' },
    alerts: [
      { type: 'danger', text: 'Komplikasi yang paling ditakuti adalah robeknya pembuluh darah besar (Diseksi Aorta) yang dapat berakibat fatal seketika.' }
    ]
  },
  {
    id: 'trauma_medula_spinalis_suspek',
    name: 'Suspek Trauma Medula Spinalis',
    icpc: 'L99',
    icd: 'S34.1',
    level: '3B',
    cat: 'Neurologi',
    icon: '🧘',
    iconBg: '#fff1f0',
    preview: 'Cedera pada sumsum tulang belakang akibat kecelakaan. Gejala: lumpuh mendadak, hilangnya rasa (baal), atau gangguan kencing. DARURAT!',
    masalah: 'Gangguan fungsi motorik, sensorik, dan otonom akibat kerusakan pada sumsum tulang belakang.',
    anamnesis: ['Riwayat kecelakaan lalu lintas, jatuh dari ketinggian, atau tertimpa benda berat', 'Lumpuh mendadak pada kedua kaki (paraplegia) atau keempat anggota gerak (tetraplegia)', 'Baal (mati rasa) mulai dari batas tertentu ke bawah', 'Gangguan buang air kecil atau besar'],
    fisik: ['Kelemahan atau kelumpuhan otot (motorik)', 'Hilangnya sensasi nyeri/sentuh di bawah level cedera (sensorik)', 'Priapismus (ereksi lama) pada laki-laki', 'Refleks tendon biasanya menghilang (fase syok spinal)'],
    penunjang: ['Rontgen Vertebra', 'CT-Scan atau MRI Tulang Belakang'],
    diagnosis: ['Suspek Cedera Medula Spinalis.'],
    tatalaksana: [
      { name: 'Imobilisasi (Collar Neck & Spine Board)', dose: '-', note: 'Langkah paling krusial: jangan gerakkan tulang belakang!' },
      { name: 'Resusitasi ABC', dose: '-', note: 'Mandatori' },
      { name: 'Metilprednisolon Dosis Tinggi', dose: '-', note: 'Hanya atas instruksi spesialis di RS' }
    ],
    edukasi: ['Pasien tidak boleh dipindahkan tanpa menggunakan papan keras (Long Spine Board)', 'Risiko lumpuh permanen bila penanganan awal salah'],
    rujukan: ['WAJIB SEGERA DIRUJUK ke RS yang mempunyai fasilitas Bedah Saraf / Orthopedi Spine'],
    prognosis: { vitam: 'Dubia', functionam: 'Malam (bila sudah lumpuh total)', sanationam: 'Malam' },
    alerts: [
      { type: 'danger', text: 'Log Roll: Memindahkan pasien harus dilakukan oleh minimal 3-4 orang secara serempak agar tulang belakang tetap lurus. Jangan ditekuk!' }
    ]
  },
  {
    id: 'ckb_suspek',
    name: 'Cedera Kepala Berat (CKB)',
    icpc: 'N77',
    icd: 'S06.9',
    level: '3B',
    cat: 'Bedah & Emergensi',
    icon: '🧠',
    iconBg: '#fff1f0',
    preview: 'Cedera kepala dengan penurunan kesadaran dalam (GCS 3-8). Memerlukan tindakan bedah saraf segera.',
    masalah: 'Trauma kepala hebat yang mengancam fungsi otak secara permanen.',
    overview: {
      etiologi: 'Kecelakaan lalu lintas, jatuh dari ketinggian, benturan benda tumpul/tajam.',
      epidemiologi: 'Sering terjadi pada usia produktif akibat trauma mekanik.',
      patofisiologi: 'Trauma → peningkatan tekanan intrakranial (TIK) akibat perdarahan/edema → herniasi otak → iskemia → defisit neurologis/kematian.',
      komplikasi: ['Herniasi otak', 'Epilepsi pasca trauma', 'Defisit neurologis permanen']
    },
    anamnesis: [
      'Riwayat benturan kepala hebat (kecelakaan, jatuh dari ketinggian)', 
      'Penurunan kesadaran segera setelah trauma', 
      'Amnesia pasca-trauma', 
      'Kejang'
    ],
    fisik: [
      'GCS 3-8 (Kesadaran sangat rendah)', 
      'Pupil Anisokor (besar sebelah): tanda perdarahan/herniasi',
      'Cushing Reflex: Tensi naik, Nadi turun, Napas tidak teratur (tanda TIK meningkat)',
      'Tanda trauma (luka robek luas, perdarahan telinga/hidung)'
    ],
    penunjang: ['CT-Scan Kepala tanpa kontras (WAJIB)', 'Darah Lengkap (evaluasi Hb)'],
    diagnosis: ['Cedera Kepala Berat (GCS 3-8)'],
    diagnosisBanding: ['Cedera Kepala Sedang', 'Syok Kardiogenik (penyebab terjatuh)', 'Intoksikasi alkohol/obat'],
    tatalaksana: [
      { name: 'Airway & Breathing Control', dose: '-', note: 'Prioritas utama: Jaga patensi jalan napas/intubasi' },
      { name: 'Oksigenasi Adekuat', dose: 'Masker/NRM', note: 'Menjaga perfusi otak, hindari hipoksia' },
      { name: 'Stabilisasi Leher (C-Collar)', dose: '-', note: 'Waspada cedera servikal' }
    ],
    tatalaksanaDetail: {
      nonFarmakologi: [
        'ABC (Airway, Breathing, Circulation)',
        'Imobilisasi tulang belakang (C-Collar)',
        'Edukasi keluarga tentang kondisi kritis'
      ],
      farmakologi: [
        {
          title: 'Manajemen Penurunan Tekanan Intrakranial',
          items: [
             { name: 'Manitol 20%', dose: '0.25-1 g/kgBB (IV)', note: 'Hanya instruksi spesialis bedah saraf' }
          ]
        }
      ]
    },
    edukasi: ['Kondisi pasien sangat kritis dan mengancam nyawa', 'Diperlukan tindakan operasi segera di RS rujukan'],
    rujukan: ['WAJIB SEGERA DIRUJUK ke Rumah Sakit dengan fasilitas Bedah Saraf dan ICU'],
    prognosis: { vitam: 'Dubia ad Malam', functionam: 'Dubia ad Malam', sanationam: 'Dubia ad Malam' },
    alerts: [
      { type: 'danger', text: 'Cek tanda-tanda herniasi otak: Pupil besar sebelah dan penurunan nadi mendadak. Ini adalah kondisi paling darurat di Bedah Saraf!' },
      { type: 'danger', text: 'Jangan lepaskan C-Collar sebelum cedera servikal disingkirkan!' }
    ]
  },
  {
    id: 'adhd_suspek',
    name: 'Suspek ADHD / GPPH',
    icpc: 'P81',
    icd: 'F90',
    level: '2',
    cat: 'Psikiatri',
    icon: '🏃',
    iconBg: '#fffced',
    preview: 'Gangguan pemusat perhatian dan hiperaktivitas pada anak. Gejala: sulit fokus, sangat aktif, dan impulsif.',
    masalah: 'Gangguan neuroperkembang yang ditandai dengan pola inatensi dan/atau hiperaktivitas-impulsivitas.',
    anamnesis: ['Anak sulit fokus pada tugas (mudah teralih)', 'Sering tidak mendengar saat diajak bicara', 'Sangat aktif: tidak bisa diam, sering memanjat/berlari berlebih', 'Impulsif: tidak sabar menunggu giliran, sering menyela pembicaraan'],
    fisik: ['Bisa normal (perlu observasi perilaku di ruang periksa)'],
    penunjang: ['Kuisioner Abbreviated Conners Rating Scale (ACRS)'],
    diagnosis: ['Suspek Gangguan Pemusat Perhatian dan Hiperaktivitas (GPPH).'],
    tatalaksana: [
      { name: 'Terapi Perilaku', dose: '-', note: 'Latihan kontrol diri dan modifikasi lingkungan' },
      { name: 'Metilfenidat', dose: '-', note: 'Hanya atas instruksi Spesialis Jiwa Anak' }
    ],
    edukasi: ['Kondisi ini bukan karena pola asuh yang salah, melainkan gangguan biologi otak', 'Pentingnya kerjasama guru dan orang tua dalam menangani perilaku anak'],
    rujukan: ['WAJIB RUJUK ke Spesialis Kedokteran Jiwa (Psikiater Anak) untuk diagnosis formal'],
    prognosis: { vitam: 'Bonam', functionam: 'Dubia', sanationam: 'Dubia' },
    alerts: [
      { type: 'ok', text: 'ADHD memerlukan pendekatan komprehensif, bukan hanya obat-obatan tapi juga terapi perilaku dan dukungan lingkungan.' }
    ]
  },
  {
    id: 'ptsd_suspek',
    name: 'Suspek Gangguan Stres Pasca Trauma (PTSD)',
    icpc: 'P82',
    icd: 'F43.1',
    level: '2',
    cat: 'Psikiatri',
    icon: '⛈️',
    iconBg: '#fce4ec',
    preview: 'Gangguan kecemasan hebat setelah mengalami kejadian traumatis (bencana, kecelakaan). Gejala: mimpi buruk, teringat kejadian (flashback), dan gelisah.',
    masalah: 'Respons emosional yang menetap terhadap peristiwa yang sangat traumatis atau mengancam nyawa.',
    anamnesis: ['Riwayat mengalami atau menyaksikan kejadian traumatis (kecelakaan, perang, pelecehan)', 'Sering teringat kejadian (flashback) atau mimpi buruk', 'Menghindari tempat/orang yang mengingatkan pada trauma', 'Sering merasa waspada berlebih (hyperarousal)'],
    fisik: ['Gejala otonom: nadi cepat, keringat dingin, gemetar saat teringat trauma'],
    penunjang: ['Wawancara klinis mendalam'],
    diagnosis: ['Suspek PTSD.'],
    tatalaksana: [
      { name: 'Psikoterapi (CBT / EMDR)', dose: '-', note: 'Edukasi dan teknik pengolahan emosi' },
      { name: 'Antidepresan (SSRI)', dose: '-', note: 'Hanya atas supervisi dokter' }
    ],
    edukasi: ['Perasaan takut ini adalah respons normal terhadap kejadian yang tidak normal', 'Pentingnya dukungan sosial dari keluarga dan teman'],
    rujukan: ['WAJIB RUJUK ke Psikolog atau Psikiater bila gejala sangat mengganggu fungsi harian'],
    prognosis: { vitam: 'Bonam', functionam: 'Dubia (tergantung durasi)', sanationam: 'Dubia' },
    alerts: [
      { type: 'warn', text: 'Waspadai risiko menyakiti diri sendiri atau penyalahgunaan obat/alkohol pada pasien dengan trauma berat.' }
    ]
  },
  {
    id: 'anorexia_nervosa',
    name: 'Anoreksia Nervosa',
    icpc: 'P86',
    icd: 'F50.0',
    level: '2',
    cat: 'Psikiatri',
    icon: '🧘',
    iconBg: '#f5f5f5',
    preview: 'Gangguan makan yang ditandai dengan pembatasan makan ekstrem karena takut menjadi gemuk. Berat badan sangat rendah namun merasa tetap gemuk.',
    masalah: 'Gangguan citra tubuh (body image) yang menyimpang dan ketakutan intens terhadap kenaikan berat badan.',
    anamnesis: ['Sengaja membatasi makan (puasa ekstrem/diet ketat)', 'Olahraga berlebihan dengan tujuan kurus', 'Ketakutan luar biasa menjadi gemuk meski tubuh sudah sangat kurus', 'Pada wanita: gangguan siklus haid (amenore)'],
    fisik: ['BMI (Indeks Massa Tubuh) sangat rendah (underweight)', 'Kulit kering, rambut rontok, kuku rapuh', 'Hipotensi dan bradikardia (nadi lambat)'],
    penunjang: ['Ekg: melihat gangguan irama jantung akibat ketidakseimbangan elektrolit'],
    diagnosis: ['Anoreksia Nervosa.'],
    tatalaksana: [
      { name: 'Psikoterapi (CBT)', dose: '-', note: 'Latihan pengenalan citra tubuh yang sehat' },
      { name: 'Manajemen Nutrisi', dose: '-', note: 'Dilakukan perlahan (waspadai refeeding syndrome)' }
    ],
    edukasi: ['Penyakit ini memiliki angka kematian tertinggi dibanding gangguan jiwa lainnya', 'Dukungan penuh keluarga sangat diperlukan untuk pemulihan'],
    rujukan: ['WAJIB RUJUK ke Psikiater dan Ahli Gizi untuk penanganan komprehensif'],
    prognosis: { vitam: 'Dubia (risiko gagal jantung)', functionam: 'Dubia', sanationam: 'Malam' },
    alerts: [
      { type: 'danger', text: 'Waspadai tanda-tanda malnutrisi berat yang dapat menyebabkan henti jantung mendadak!' }
    ]
  },
  {
    id: 'bulimia_nervosa',
    name: 'Bulimia Nervosa',
    icpc: 'P86',
    icd: 'F50.0',
    level: '2',
    cat: 'Psikiatri',
    icon: '🍦',
    iconBg: '#fffced',
    preview: 'Gangguan makan dengan pola makan berlebih (binge eating) diikuti perilaku membersihkan (purging) seperti muntah sengaja.',
    masalah: 'Siklus makan berlebihan yang tidak terkontrol diikuti oleh kompensasi yang tidak sehat.',
    anamnesis: ['Episode makan sangat banyak dalam waktu singkat (binge eating)', 'Rasa bersalah hebat setelah makan banyak', 'Sengaja memuntahkan makanan, menggunakan pencahar berlebih, atau puasa ekstrem'],
    fisik: ['Russell Sign: kapalan di buku jari tangan akibat sering memaksakan muntah', 'Erosi gigi (akibat asam lambung saat sering muntah)', 'Pembengkakan kelenjar ludah (parotitis)'],
    penunjang: ['Cek Elektrolit (Sering Hipokalemia / Kalium rendah)'],
    diagnosis: ['Bulimia Nervosa.'],
    tatalaksana: [
      { name: 'Psikoterapi', dose: '-', note: 'Membantu kontrol emosi dan pola makan' },
      { name: 'Antidepresan (Fluoxetine)', dose: '-', note: 'Pilihan utama (hanya oleh dokter)' }
    ],
    edukasi: ['Perilaku memuntahkan makanan dapat merusak kerongkongan dan gigi secara permanen', 'Fokus pada kesehatan tubuh bukan hanya berat badan'],
    rujukan: ['WAJIB RUJUK ke Psikiater untuk terapi perilaku dan farmakoterapi'],
    prognosis: { vitam: 'Bonam', functionam: 'Dubia', sanationam: 'Dubia' },
    alerts: [
      { type: 'danger', text: 'Sering memuntahkan makanan berisiko menyebabkan kekurangan kalium yang memicu gangguan irama jantung.' }
    ]
  },
  {
    id: 'fobia_sosial',
    name: 'Fobia Sosial / Gangguan Cemas Sosial',
    icpc: 'P79',
    icd: 'F40.1',
    level: '2',
    cat: 'Psikiatri',
    icon: '😰',
    iconBg: '#fffced',
    preview: 'Ketakutan berlebih untuk dinilai buruk oleh orang lain di situasi sosial. Gejala: sangat cemas saat harus bicara di depan umum atau bertemu orang baru.',
    masalah: 'Kecemasan yang ditandai oleh ketakutan akan pengamatan atau penilaian orang lain pada situasi sosial.',
    anamnesis: ['Merasa sangat cemas atau takut saat harus melakukan aktivitas di depan orang lain', 'Takut akan dipermalukan atau bertindak salah', 'Menghindari pertemuan sosial atau presentasi', 'Jantung berdebar, berkeringat, atau bicara terbata-bata saat cemas'],
    fisik: ['Gejala cemas saat diwawancarai: menghindari kontak mata, suara lirih'],
    penunjang: ['Wawancara klinis'],
    diagnosis: ['Gangguan Anxietas Sosial.'],
    tatalaksana: [
      { name: 'Psikoterapi (CBT)', dose: '-', note: 'Pelatihan keterampilan sosial dan restrukturisasi kognitif' },
      { name: 'Beta Blocker (Propranolol)', dose: '10-20 mg', note: 'Membantu kontrol gejala fisik cemas sebelum situasi sosial (jika diperlukan)' }
    ],
    edukasi: ['Kecemasan ini bisa diatasi dengan latihan secara bertahap', 'Belajar teknik pernapasan untuk menenangkan diri'],
    rujukan: ['Kecemasan sangat hebat hingga mengganggu sekolah atau pekerjaan'],
    prognosis: { vitam: 'Bonam', functionam: 'Dubia', sanationam: 'Dubia' },
    alerts: [
      { type: 'ok', text: 'Menghindari situasi sosial justru akan memperkuat kecemasan dalam jangka panjang.' }
    ]
  },
  {
    id: 'hoarding_disorder',
    name: 'Hoarding Disorder (Gangguan Menimbun)',
    icpc: 'P99',
    icd: 'F42.3',
    level: '2',
    cat: 'Psikiatri',
    icon: '📦',
    iconBg: '#f5f5f5',
    preview: 'Kesulitan kronis untuk membuang barang meskipun sudah tidak berguna. Mengakibatkan tempat tinggal menjadi penuh sesak dan kotor.',
    masalah: 'Kesulitan untuk berpisah dengan kepemilikan barang karena merasa perlu menyimpannya.',
    anamnesis: ['Sangat sulit membuang barang yang sebenarnya tidak bernilai', 'Merasa stres jika barang dibuang orang lain', 'Ruangan di rumah tidak bisa digunakan sebagaimana mestinya karena tertutup tumpukan barang'],
    fisik: ['Kebersihan diri mungkin terabaikan'],
    penunjang: ['Wawancara klinis'],
    diagnosis: ['Hoarding Disorder.'],
    tatalaksana: [
      { name: 'Psikoterapi', dose: '-', note: 'Latihan klasifikasi barang dan pengambilan keputusan' },
      { name: 'Dukungan Keluarga', dose: '-', note: 'Membantu pembersihan secara perlahan dan suportif' }
    ],
    edukasi: ['Menimbun barang berlebih dapat menjadi risiko kebakaran dan sarang penyakit', 'Keluarga harus sabar dan tidak membuang barang pasien secara paksa/mendadak'],
    rujukan: ['WAJIB RUJUK ke Psikolog/Psikiater bila membahayakan keselamatan diri atau lingkungan'],
    prognosis: { vitam: 'Bonam', functionam: 'Malam', sanationam: 'Malam (sangat sulit sembuh total)' },
    alerts: [
      { type: 'warn', text: 'Hoarding disorder seringkali disertai dengan depresi atau OCD. Perlu pemeriksaan menyeluruh.' }
    ]
  },
  {
    id: 'ocd_suspek',
    name: 'Gangguan Obsesif Kompulsif (OCD)',
    icpc: 'P79',
    icd: 'F42.9',
    level: '2',
    cat: 'Psikiatri',
    icon: '🧼',
    iconBg: '#e3f2fd',
    preview: 'Pikiran berulang yang mengganggu (obsesi) dan perilaku berulang yang sulit dihentikan (kompulsi). Contoh: cuci tangan berulang kali.',
    masalah: 'Adanya pikiran intrusif yang menimbulkan kecemasan dan tindakan berulang untuk menekan kecemasan tersebut.',
    anamnesis: ['Adanya pikiran yang terus menerus muncul (contoh: takut kotor, takut lupa kunci)', 'Adanya tindakan berulang (contoh: cuci tangan berkali-kali, cek pintu berkali-kali)', 'Tindakan tersebut dilakukan minimal 1 jam tiap hari dan sangat mengganggu'],
    fisik: ['Bisa normal (perlu observasi perilaku atau tanda lecet di tangan akibat sering mencuci)'],
    penunjang: ['Wawancara klinis'],
    diagnosis: ['Gangguan Obsesif Kompulsif.'],
    tatalaksana: [
      { name: 'Psikoterapi (ERP)', dose: '-', note: 'Exposure and Response Prevention: latihan hadapi ketakutan tanpa lakukan kompulsi' },
      { name: 'Obat-obatan (SSRI)', dose: '-', note: 'Membantu keseimbangan kimia otak (hanya di bawah supervisi)' }
    ],
    edukasi: ['OCD bukan sekadar "rapi", tapi gangguan yang sangat mengganggu kesejahteraan', 'Pentingnya kesabaran keluarga dalam mendukung proses terapi'],
    rujukan: ['WAJIB RUJUK ke Psikiater untuk penanganan jangka panjang'],
    prognosis: { vitam: 'Bonam', functionam: 'Dubia', sanationam: 'Dubia' },
    alerts: [
      { type: 'ok', text: 'Pikiran obsesif biasanya dirasakan oleh pasien sebagai sesuatu yang tidak logis tapi tidak kuasa ditahan.' }
    ]
  },
  {
    id: 'kleptomania',
    name: 'Kleptomania',
    icpc: 'P99',
    icd: 'F63.2',
    level: '2',
    cat: 'Psikiatri',
    icon: '🕵️',
    iconBg: '#f5f5f5',
    preview: 'Gangguan kontrol impuls yang ditandai dengan keinginan kuat untuk mencuri barang yang sebenarnya tidak bernilai atau tidak dibutuhkan.',
    masalah: 'Kegagalan berulang untuk menahan impuls mencuri benda-benda yang tidak diperlukan untuk penggunaan pribadi atau nilai uangnya.',
    anamnesis: ['Dorongan kuat yang tidak tertahankan untuk mencuri barang (biasanya barang kecil/murah)', 'Merasa tegang sesaat sebelum mencuri', 'Merasa lega atau puas setelah berhasil mencuri', 'Barang yang dicuri seringkali dibuang atau disembunyikan begitu saja, bukan untuk dijual'],
    fisik: ['Bisa normal'],
    penunjang: ['Wawancara klinis'],
    diagnosis: ['Kleptomania.'],
    tatalaksana: [
      { name: 'Psikoterapi (CBT)', dose: '-', note: 'Pelatihan kontrol impuls dan identifikasi pemicu' },
      { name: 'Obat-obatan (Antidepresan)', dose: '-', note: 'Membantu menstabilkan mood' }
    ],
    edukasi: ['Penyakit ini murni gangguan kejiwaan, bukan karena kekurangan ekonomi atau karakter jahat', 'Keluarga harus mendukung proses terapi tanpa menghakimi'],
    rujukan: ['WAJIB RUJUK ke Psikiater untuk terapi jangka panjang'],
    prognosis: { vitam: 'Bonam', functionam: 'Dubia', sanationam: 'Malam' },
    alerts: [
      { type: 'warn', text: 'Kleptomania seringkali menimbulkan masalah hukum yang serius bagi penderitanya. Pendampingan ahli sangat diperlukan.' }
    ]
  },
  {
    id: 'tinea_capitis',
    name: 'Tinea Kapitis (Jamur Kepala)',
    icpc: 'S74',
    icd: 'B35.0',
    level: '4A',
    cat: 'Dermatologi',
    icon: '👦',
    iconBg: '#fef3c7',
    preview: 'Infeksi jamur pada kulit kepala dan rambut. Gejala: pitak (alopecia), rambut kusam mudah patah, dan sisik keabuan.',
    masalah: 'Infeksi dermatofita pada kulit kepala yang sering menyerang anak-anak.',
    anamnesis: ['Gatal di kulit kepala', 'Rambut rontok atau patah (pitak)', 'Muncul sisik atau kerak di kepala', 'Riwayat kontak dengan teman sekolah atau hewan peliharaan (kucing)'],
    fisik: ['Grey Patch: bercak bersisik warna abu-abu dengan rambut patah di atas permukaan kulit', 'Black Dot: bintik-bintik hitam (rambut patah di dalam folikel)', 'Kerion: pembengkakan meradang yang bernanah (abses jamur)'],
    penunjang: ['KOH 10%: ditemukan hifa atau spora di batang rambut', 'Lampu Wood: fluoresensi hijau kekuningan (oleh Microsporum)'],
    diagnosis: ['Tinea Kapitis tipe Grey Patch / Black Dot / Kerion.'],
    tatalaksana: [
      { name: 'Griseofulvin', dose: '10-20 mg/kgBB/hari selama 6-8 minggu', note: 'Terapi oral WAJIB karena jamur ada di dalam batang rambut' },
      { name: 'Ketoconazole Shampo 2%', dose: '2-3 kali seminggu', note: 'Membantu eliminasi spora' },
      { name: 'Prednison', dose: '0,5-1 mg/kgBB', note: 'Hanya pada tipe Kerion berat untuk cegah jaringan parut' }
    ],
    edukasi: ['Jangan berbagi sisir, topi, atau bantal', 'Gunting kuku anak', 'Bersihkan alat cukur rambut yang digunakan'],
    rujukan: ['Tipe Kerion yang tidak membaik dengan terapi standar', 'Dicurigai adanya resistensi atau butuh kultur jamur'],
    prognosis: { vitam: 'Bonam', functionam: 'Bonam', sanationam: 'Bonam bila kepatuhan minum obat baik' },
    alerts: [
      { type: 'danger', text: 'Tinea kapitis HARUS diobati dengan obat minum (sistemik). Salep saja tidak akan menyembuhkan tinea kapitis karena tidak bisa menembus batang rambut.' }
    ]
  },
  {
    id: 'tinea_unguium',
    name: 'Tinea Unguium (Jamur Kuku)',
    icpc: 'S74',
    icd: 'B35.1',
    level: '3A',
    cat: 'Dermatologi',
    icon: '💅',
    iconBg: '#f1f5f9',
    preview: 'Infeksi jamur pada kuku. Gejala: kuku menebal, berubah warna jadi kekuningan, dan rapuh.',
    masalah: 'Onikomikosis yang disebabkan oleh jamur dermatofita.',
    anamnesis: ['Kuku berubah warna (putih/kuning/cokelat)', 'Kuku menebal dan sulit dipotong', 'Kuku mudah hancur atau rapuh di bagian ujungnya'],
    fisik: ['Subungual hyperkeratosis (penebalan di bawah kuku)', 'Onycholysis (kuku terlepas dari dasarnya)', 'Kuku tampak kusam dan permukaannya tidak rata'],
    penunjang: ['KOH 20% dari kerokan massa di bawah kuku atau potongan kuku'],
    diagnosis: ['Tinea Unguium (Onikomikosis).'],
    tatalaksana: [
      { name: 'Terbinafine Oral', dose: '250 mg q24h selama 6 minggu (kuku tangan) / 12 minggu (kuku kaki)', note: 'Lini pertama' },
      { name: 'Itrakonazol (Pulse Therapy)', dose: '200 mg q12h selama 1 minggu, istirahat 3 minggu (ulangi 2-3 siklus)', note: 'Alternatif' }
    ],
    edukasi: ['Kepatuhan minum obat sangat penting karena kuku tumbuh sangat lambat', 'Jaga kuku tetap pendek dan bersih', 'Gunakan alas kaki yang tidak sempit dan menyerap keringat'],
    rujukan: ['Penderita diabetes mellitus (risiko infeksi sekunder berat)', 'Tidak respons dengan terapi oral selama 3-4 bulan'],
    prognosis: { vitam: 'Bonam', functionam: 'Bonam', sanationam: 'Dubia (sering kambuh)' },
    alerts: [
      { type: 'ok', text: 'Penyembuhan kuku kaki membutuhkan waktu lebih lama (3-4 bulan) dibandingkan kuku tangan (1-2 bulan).' }
    ]
  },
  {
    id: 'tinea_cruris',
    name: 'Tinea Cruris (Jamur Selangkangan)',
    externalUrl: 'https://www.alomedika.com/penyakit/dermatovenerologi/tinea-cruris',
    icpc: 'S74',
    icd: 'B35.6',
    level: '4A',
    cat: 'Dermatologi',
    icon: '🩲',
    iconBg: '#fef3c7',
    preview: 'Infeksi jamur pada area selangkangan and lipat paha yang sangat gatal, terutama saat lembap or berkeringat.',
    masalah: 'Tinea Cruris adalah infeksi dermatofita pada daerah genitokrural (selangkangan, perineum, and sekitar anus). Sangat sering dipicu oleh kelembapan and penggunaan pakaian ketat.',
    overview: {
      etiologi: 'Dermatofita utama: Trichophyton rubrum (paling sering) and Epidermophyton floccosum.',
      epidemiologi: 'Lebih sering pada pria produktif. Faktor risiko: Obesitas, diabetes melitus, keringat berlebih (hiperhidrosis), and penggunaan pakaian dalam yang ketat/bahan sintetis.',
      patofisiologi: 'Maserasi kulit akibat lembap → Jamur menginvasi stratum korneum → Peradangan perifer (tepi aktif) → Rasa gatal hebat.',
      komplikasi: ['Likenifikasi (kulit menebal akibat garukan kronis)', 'Infeksi Bakteri Sekunder', 'Eritrasma (infeksi bakteri Corynebacterium yang menyerupai jamur)']
    },
    anamnesis: [
      'Gatal hebat di selangkangan yang meningkat saat berkeringat',
      'Ruam merah yang meluas dari lipat paha ke paha bagian dalam, kadang hingga pantat',
      'Riwayat memiliki Tinea Pedis (Jamur Kaki) — sering menjadi sumber penularan (autoinokulasi)',
      'Riwayat menggunakan pakaian ketat or jarang ganti pakaian dalam'
    ],
    fisik: [
      'Lesi Anular/Polisiklik: Berbatas tegas dengan tepi aktif',
      'Tepi Aktif: Eritema, meninggi, bersisik, kadang ada papul or vesikel',
      'Central Healing: Bagian tengah tampak lebih tenang (hiperpigmentasi or normal)',
      'Lokasi: Lipat paha, perineum, area perianal. Skrotum biasanya TIDAK terkena (membedakan dengan Kandidiasis).'
    ],
    penunjang: [
      'KOH 10%: Mencari hifa septate and bercabang',
      'Kultur Jamur (bila resisten terapi)'
    ],
    penunjangDetail: [
      { nama: 'Pemeriksaan KOH', rasionalisasi: 'Standard emas untuk visualisasi langsung struktur jamur dermatofita guna membedakan dengan infeksi bakteri atau kandidiasis.' }
    ],
    diagnosis: [
      'Tinea Cruris'
    ],
    diagnosisBanding: ['Kandidiasis Intertriginosa (Skrotum kena, lesi satelit)', 'Eritrasma (Lampu Wood: merah bata)', 'Dermatitis Seboroik', 'Psoriasis Inversa'],
    tatalaksana: [
      { name: 'Ketoconazole 2% (Krim)', dose: 'Oleskan 2x sehari (2-3 minggu)', note: 'Oleskan melampaui tepi lesi' },
      { name: 'Terbinafine 1% (Krim)', dose: 'Oleskan 1-2x sehari (1-2 minggu)', note: 'Lebih cepat membunuh jamur' },
      { name: 'Cetirizine', dose: '10 mg q24h prn', note: 'Untuk meredakan gatal' }
    ],
    tatalaksanaDetail: {
      nonFarmakologi: [
        'Jaga area selangkangan tetap kering. Keringkan dengan handuk khusus or "hair dryer" setelah mandi.',
        'Gunakan celana dalam longgar berbahan katun. Ganti minimal 2x sehari.',
        'Turunkan berat badan jika obesitas untuk mengurangi lipatan kulit.',
        'Hindari penggunaan handuk or pakaian bergantian.'
      ],
      farmakologi: [
        {
          title: 'Terapi Topikal',
          items: [
            { name: 'Mikonazol / Klotrimazol', dose: '2x sehari selama 3-4 minggu', note: 'Lanjutkan 1 minggu setelah lesi bersih' },
            { name: 'Terbinafine Krim', dose: '1x sehari selama 1-2 minggu', note: 'Efikasi sangat baik' }
          ]
        },
        {
          title: 'Terapi Sistemik (Kasus Luas/Resisten)',
          items: [
            { name: 'Itrakonazol', dose: '100 mg 1x sehari (15 hari)', note: 'Pilihan utama jika topikal gagal' },
            { name: 'Terbinafine Oral', dose: '250 mg 1x sehari (1-2 minggu)', note: 'Gunakan jika tidak ada gangguan fungsi hati' }
          ]
        }
      ]
    },
    edukasi: [
      'Pastikan area selangkangan benar-benar kering sebelum memakai baju',
      'Obati juga Tinea Pedis (jamur kaki) jika ada, karena merupakan sumber penularan utama ke selangkangan',
      'Jangan gunakan celana jeans ketat dalam waktu lama',
      'Selesaikan pengobatan meskipun gatal sudah hilang untuk mencegah kekambuhan'
    ],
    rujukan: [
      'Diagnosis tidak yakin or lesi menyerupai penyakit lain yang lebih berat',
      'Gagal terapi setelah pemberian antijamur oral yang adekuat',
      'Terdapat komplikasi infeksi sekunder berat'
    ],
    prognosis: { vitam: 'Bonam', functionam: 'Bonam', sanationam: 'Bonam bila faktor risiko (lembap/obesitas) dikoreksi' },
    alerts: [
      { type: 'warn', text: 'Pada Tinea Cruris, AREA SKROTUM biasanya TIDAK terkena. Jika skrotum terlibat and ada lesi satelit, curigai Kandidiasis.' }
    ]
  },
  {
    id: 'tinea_pedis',
    name: 'Tinea Pedis (Kutu Air)',
    icpc: 'S74',
    icd: 'B35.3',
    level: '4A',
    cat: 'Dermatologi',
    icon: '🦶',
    iconBg: '#f1f5f9',
    preview: 'Gatal, mengelupas, dan pecah-pecah di sela jari kaki atau telapak kaki. Sering terjadi pada kaki yang sering lembap.',
    masalah: 'Infeksi jamur dermatofita pada kaki.',
    anamnesis: ['Gatal dan perih di sela jari kaki atau telapak kaki', 'Kulit mengelupas atau melepuh', 'Bau kaki yang tidak sedap', 'Riwayat kaki sering basah atau memakai sepatu tertutup lama'],
    fisik: ['Tipe interdigital: sela jari (terutama jari 4-5) tampak putih, basah, dan mengelupas', 'Tipe moccasin: telapak kaki menebal dan bersisik halus', 'Tipe vesikobulosa: terdapat bintil-bintil air'],
    penunjang: ['KOH 10% dari kerokan kulit'],
    diagnosis: ['Tinea Pedis.'],
    tatalaksana: [
      { name: 'Mikonazol / Klotrimazol (Krim)', dose: 'Oleskan 2 kali sehari selama 3-4 minggu', note: 'Teruskan 1 minggu setelah gejala hilang' },
      { name: 'Terbinafine (Krim)', dose: 'Oleskan 1-2 kali sehari selama 1-2 minggu', note: 'Sangat efektif' },
      { name: 'Griseofulvin', dose: '500 mg/hari', note: 'Hanya bila lesi luas atau kronis mofasin' }
    ],
    edukasi: ['Keringkan sela-sela jari kaki setelah mandi/berwudu', 'Sering ganti kaos kaki (bahan katun)', 'Gunakan alas kaki yang terbuka jika memungkinkan', 'Jangan gunakan handuk bersama'],
    rujukan: ['Infeksi sekunder berat (selulitis)', 'Tinea pedis tipe moccasin yang resisten terapi', 'Pasien diabetes dengan luka kaki'],
    prognosis: { vitam: 'Bonam', functionam: 'Bonam', sanationam: 'Bonam' },
    alerts: [
      { type: 'ok', text: 'Tinea pedis sering berkaitan dengan tinea unguium — periksa kuku kaki juga.' }
    ]
  },
  {
    id: 'pityriasis_versicolor',
    name: 'Pityriasis Versicolor (Panu)',
    externalUrl: 'https://www.alomedika.com/penyakit/dermatovenerologi/tinea-versicolor',
    icpc: 'S76',
    icd: 'B36.0',
    level: '4A',
    cat: 'Dermatologi',
    icon: '🧴',
    iconBg: '#e9d5ff',
    preview: 'Infeksi jamur permukaan kulit yang menyebabkan bercak putih, cokelat, or merah muda yang bersisik halus.',
    masalah: 'Pityriasis Versicolor (Panu) adalah infeksi jamur superfisial kronis yang disebabkan oleh jamur Malassezia furfur. Kondisi ini sangat dipengaruhi oleh kelembapan, keringat, and kebersihan diri.',
    overview: {
      etiologi: 'Jamur ragi saprofit Malassezia furfur (dahulu Pityrosporum orbiculare).',
      epidemiologi: 'Sangat umum di daerah tropis. Premis: remaja and dewasa muda yang aktif berkeringat.',
      patofisiologi: 'Jamur Malassezia merubah bentuk menjadi hifa → Memproduksi asam dikarboksilat → Menghambat tirosinase (pembentuk melanin) → Muncul bercak hipopigmentasi (putih).',
      komplikasi: ['Gangguan Estetika/Percaya Diri', 'Kekambuhan yang sering (rekurensi tinggi)']
    },
    anamnesis: [
      'Gatal ringan terutama saat berkeringat',
      'Muncul bercak dengan warna yang bervariasi (putih, merah muda, or cokelat)',
      'Bercak meluas perlahan and sering terjadi di punggung, dada, lengan atas, or leher',
      'Area yang terkena tidak menjadi gelap saat terpapar sinar matahari (berbeda dengan kulit sehat)'
    ],
    fisik: [
      'Makula Hipopigmentasi / Hiperpigmentasi: Bercak dengan warna berbeda dari kulit sekitar',
      'Skuama Halus (Pityriasiform): Bila lesi digores dengan pinggir kuku, akan tampak sisik halus (Tanda Fingerprint or Coup d\'Ongle)',
      'Lesi Nular or Konfluens: Bercak kecil yang bergabung menjadi area yang lebar'
    ],
    penunjang: [
      'KOH 10%: Ditemukan gambaran "Spaghetti and Meatballs" (hifa pendek and spora berkelompok)',
      'Lampu Wood: Fluoresensi kuning keemasan (Golden Yellow)'
    ],
    penunjangDetail: [
      { nama: 'Pemeriksaan KOH', rasionalisasi: 'Melihat spora bulat (meatballs) and hifa pendek (spaghetti) untuk membedakan dengan Pityriasis Alba or Vitiligo.' }
    ],
    diagnosis: [
      'Pityriasis Versicolor'
    ],
    diagnosisBanding: ['Pityriasis Alba', 'Vitiligo', 'Dermatitis Seboroik', 'Morbus Hansen (Tipe I)'],
    tatalaksana: [
      { name: 'Ketoconazole 2% (Shampoo)', dose: 'Gunakan sebagai sabun (diamkan 5-10 menit)', note: 'Gunakan 1-3x seminggu' },
      { name: 'Selenium Sulfida 1.8% (Lotion)', dose: 'Oleskan sebelum mandi', note: 'Diamkan 15-30 menit sebelum dibilas' },
      { name: 'Ketoconazole (Oral)', dose: '200 mg q24h selama 10 hari', note: 'Hanya jika lesi sangat luas or resisten topikal' }
    ],
    tatalaksanaDetail: {
      nonFarmakologi: [
        'Jaga kebersihan diri and hindari keringat berlebih.',
        'Ganti pakaian segera setelah berkeringat.',
        'Gunakan pakaian berbahan katun yang longgar.',
        'Jangan berbagi handuk or pakaian dengan orang lain.'
      ],
      farmakologi: [
        {
          title: 'Antijamur Topikal (Utama)',
          items: [
            { name: 'Ketoconazole 2% Krim', dose: 'Oleskan 2x sehari (2 minggu)', note: 'Oleskan setelah mandi and kulit sudah kering' },
            { name: 'Selenium Sulfida Shampo', dose: 'Aplikasi sebagai sabun badan', note: 'Diamkan 10 menit sebelum dibilas. Efektif untuk area luas.' }
          ]
        },
        {
          title: 'Antijamur Sistemik',
          items: [
            { name: 'Ketoconazole', dose: '200 mg sehari (10-14 hari)', note: 'Waspada interaksi obat and fungsi hati' },
            { name: 'Itrakonazol', dose: '200 mg sehari (7 hari)', note: 'Efikasi sangat baik dengan durasi singkat' }
          ]
        }
      ]
    },
    edukasi: [
      'Bercak putih mungkin tidak langsung hilang segera setelah jamur mati; kulit butuh waktu 1-3 bulan untuk repigmentasi normal',
      'Gunakan sampo ketoconazole sebagai sabun badan seminggu sekali untuk mencegah kekambuhan',
      'Hindari penggunaan minyak or lotion tubuh yang terlalu lengket saat cuaca panas',
      'Panu adalah penyakit jamur, bukan karena "darah kotor"'
    ],
    rujukan: [
      'Diagnosis meragukan (mirip kusta or vitiligo)',
      'Lesi sangat luas (generalized) and tidak menunjukkan perbaikan dengan terapi oral',
      'Kekambuhan yang sangat sering walaupun sudah dilakukan upaya pencegahan'
    ],
    prognosis: { vitam: 'Bonam', functionam: 'Bonam', sanationam: 'Bonam bila higienitas terjaga, namun rekurensi tinggi' },
    alerts: [
      { type: 'ok', text: 'Warna kulit yang hipopigmentasi (putih) akan kembali normal perlahan setelah jamur mati. Sabar and jangan hentikan terapi terlalu dini.' }
    ]
  }
];

export const CATEGORIES: Record<string, CategoryInfo> = {
  'Umum & Infeksi': { icon: '🧪', color: '#3182ce', variant: 'blue' },
  'Neurologi': { icon: '🧠', color: '#805ad5', variant: 'purple' },
  'Kardiovaskular': { icon: '🫀', color: '#e53e3e', variant: 'red' },
  'Respirasi': { icon: '🫁', color: '#38a169', variant: 'green' },
  'Bedah & Emergensi': { icon: '🚑', color: '#dd6b20', variant: 'orange' },
  'Muskuloskeletal': { icon: '🦴', color: '#4a5568', variant: 'slate' },
  'Obsgin': { icon: '🤰', color: '#d53f8c', variant: 'fuchsia' },
  'Metabolik': { icon: '🩸', color: '#d69e2e', variant: 'amber' },
  'Gastrointestinal': { icon: '🍱', color: '#8c5e58', variant: 'orange' },
  'Pediatri': { icon: '👶', color: '#4fd1c5', variant: 'cyan' },
  'Psikiatri': { icon: '💭', color: '#6b46c1', variant: 'indigo' },
  'Dermatologi': { icon: '🌿', color: '#285e61', variant: 'emerald' },
  'THT': { icon: '👂', color: '#718096', variant: 'slate' },
  'Urologi & Nefrologi': { icon: '🫘', color: '#2c5282', variant: 'blue' },
  'Mata': { icon: '👁️', color: '#0097a7', variant: 'teal' },
  'Gigi & Mulut': { icon: '🦷', color: '#0277bd', variant: 'blue' },
  'Vaskular': { icon: '🩸', color: '#9c27b0', variant: 'purple' },
  'Hematologi & Onkologi': { icon: '🔬', color: '#c53030', variant: 'red' }
};
