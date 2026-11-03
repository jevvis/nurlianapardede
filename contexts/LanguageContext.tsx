'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export type Language = 'id' | 'en'

interface LanguageContextType {
  lang: Language
  setLang: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'id',
  setLang: () => {},
  t: (key) => key,
})

export function useLanguage() {
  return useContext(LanguageContext)
}

// ─── KAMUS DWIBAHASA: Nurliana Pardede ───
// Sumber isi: CV (Inggris). Terjemahan Indonesia ditulis oleh pembuat situs.
const translations: Record<Language, Record<string, string>> = {
  id: {
    // ── Navbar
    'nav.about': "TENTANG SAYA",
    'nav.education': "PENDIDIKAN",
    'nav.work': "PENGALAMAN",
    'nav.projects': "KARYA",
    'nav.org': "ORGANISASI",
    'nav.achievements': "PENELITIAN",
    'nav.awards': "SERTIFIKAT",
    'nav.skills': "KEAHLIAN",
    'nav.contact': "HUBUNGI SAYA",
    'ui.changePhoto': "Ganti foto",
    'ui.viewPhoto': "Lihat foto",
    'ui.photo': "foto",
    'ui.orgClick': "Klik untuk berganti foto",
    'ui.orgDocs': "Dokumentasi:",
    'ui.orgView': "Lihat foto",

    // ── Hero
    'hero.scroll': "GULIR KE BAWAH",
    'hero.hey': "Hai, saya",
    'hero.tagline': "Lulusan Teknik Kimia dengan pengalaman operasi kilang, riset material, dan proyek energi terbarukan.",
    'hero.based1': "LULUSAN TEKNIK KIMIA",
    'hero.based2': "UNIVERSITAS JAMBI",
    'hero.role1': "Lulusan Teknik Kimia",
    'hero.role2': "Proses · Riset · R&D",
    'hero.badge.major': "Teknik Kimia UNJA",
    'hero.badge.medal': "IPK 3.58 / 4.00",
    'hero.badge.event': "Universitas Jambi",

    // ── About Section
    'about.label': "TENTANG SAYA",
    'about.title': "Proses. Riset. Energi Terbarukan.",
    'about.ipk': "IPK",
    'about.honors': "TOEFL",
    'about.year': "Lulus",
    'about.bio1': "Lulusan Teknik Kimia Universitas Jambi dengan pengalaman dalam operasi kilang, riset material, dan proyek energi terbarukan. Berpengalaman sebagai Peneliti di Badan Riset dan Inovasi Nasional (BRIN) dan Internship Trainee di PT Kilang Pertamina Internasional Refinery Unit III Plaju, dengan paparan pada evaluasi proses, karakterisasi material, dan analisis proses kimia. Mahir menggunakan perangkat lunak simulasi proses dan rekayasa seperti Aspen Plus, Aspen HYSYS, ChemCAD, Minitab, dan OriginLab untuk perancangan proses, analisis data, dan kegiatan riset. Mencari posisi entry-level di bidang Process Engineering, Produksi, Quality Control (QC), atau Research and Development (R&D).",
    'about.cv.prompt': "Ingin tahu lebih lanjut?",
    'about.cv.link': "Unduh CV saya",
    'about.current.label': "BIDANG FOKUS",
    'about.current.1.title': "Riset Material",
    'about.current.1.sub': "Hidroksiapatit & nanosilver di BRIN",
    'about.current.2.title': "Operasi Kilang",
    'about.current.2.sub': "Magang di Pertamina RU III Plaju",
    'about.current.3.title': "Energi Terbarukan",
    'about.current.3.sub': "Biopelet dan briket (P2M2, MBKM)",

    // ── Trait Deck
    'trait.card.label': "KARAKTER KERJA",
    'trait.change': "Ganti",
    'trait.hint': "Klik untuk melihat karakter kerja lainnya",
    'trait.1.title': "Analitis",
    'trait.1.sub': "Analytical Thinking",
    'trait.1.tag': "Berbasis Data",
    'trait.1.desc': "Mengevaluasi kinerja heat exchanger dari data operasional dan menganalisis sifat material melalui UV–Vis, XRD, FTIR, dan FESEM.",
    'trait.2.title': "Solutif",
    'trait.2.sub': "Problem Solving",
    'trait.2.tag': "Menilai Opsi",
    'trait.2.desc': "Menilai opsi penggantian material berdasarkan aspek korosi, efisiensi termal, biaya, dan keandalan.",
    'trait.3.title': "Kolaboratif",
    'trait.3.sub': "Team Collaboration",
    'trait.3.tag': "Kerja Tim",
    'trait.3.desc': "Anggota tim proyek P2M2 dan aktif dalam program kerja organisasi serta kepanitiaan.",
    'trait.4.title': "Disiplin",
    'trait.4.sub': "Time Management",
    'trait.4.tag': "Komunikasi Teknis",
    'trait.4.desc': "Mengelola waktu antara riset, proyek, dan organisasi, serta menyusun laporan keuangan dan administrasi yang tertib.",

    // ── Quote (kalimat ringkasan dari CV, bukan motto dari klien)
    'about.quote': "“Mengubah data proses menjadi keputusan rekayasa yang tepat.”",

    // ── Metrics
    'metric.gpa': "IPK",
    'metric.gpa.sub': "Teknik Kimia, Universitas Jambi (3.58 / 4.00)",
    'metric.toefl': "SKOR TOEFL",
    'metric.toefl.sub': "TOEFL Prediction Test (skor 550)",
    'metric.exp': "PENGALAMAN",
    'metric.exp.sub': "Riset BRIN, magang kilang, dan 3 proyek",
    'metric.cert': "SERTIFIKAT",
    'metric.cert.sub': "BRIN, P2M2, TOEFL, JUELT, dan pelatihan",

    // ── Education Section
    'education.label': "RIWAYAT AKADEMIK",
    'education.title': "Pendidikan",
    'education.degreeLabel': "Gelar",
    'education.highlights.label': "Pengalaman & Aktivitas Utama",

    'education.1.institution': "Universitas Jambi",
    'education.1.program': "Teknik Kimia",
    'education.1.degree': "Sarjana Teknik Kimia",
    'education.1.period': "Agu 2022 — Nov 2026",
    'education.1.gpa': "3.58 / 4.00",
    'education.1.status': "Lulusan",
    'education.1.desc': "Menempuh pendidikan Sarjana Teknik Kimia di Universitas Jambi, dengan mata kuliah Neraca Massa & Energi, Termodinamika, Perpindahan Panas & Massa, Mekanika Fluida, serta Pengendalian Proses & Instrumentasi.",
    'education.1.tag': "Pendidikan Sarjana",
    'education.1.caption': "Universitas Jambi",
    'education.1.h1': "Tugas akhir: Pra-Rancangan Pabrik Sikloheksanon melalui Proses Hidrogenasi Fenol, kapasitas 55.000 ton/tahun",
    'education.1.h2': "Penelitian: sintesis hidroksiapatit berbasis cangkang telur yang didoping nanosilver (AgNPs) untuk aplikasi pasta gigi",
    'education.1.h3': "Peneliti di BRIN dan Internship Trainee di PT Kilang Pertamina Internasional RU III Plaju",
    'education.1.h4': "Aktif di HIMATEKA dan Chemical Engineering Fair (CEF) 2023 & 2024",

    // ── Work Section
    'work.label': "PENGALAMAN",
    'work.title': "Pengalaman Kerja & Proyek",
    'work.subtitle': "Riset material, operasi kilang, dan proyek energi terbarukan.",
    'work.cta': "Lihat Semua Pengalaman",

    'work.1.role': "Peneliti (Researcher)",
    'work.1.inst': "BADAN RISET DAN INOVASI NASIONAL (BRIN) RI",
    'work.1.loc': "Riset Material",
    'work.1.period': "Nov 2025 — Feb 2026",
    'work.1.sub': "Hidroksiapatit dari Limbah Cangkang Telur & Nanopartikel Perak",
    'work.1.desc': "Meneliti sintesis hidroksiapatit dari limbah cangkang telur yang dipadukan dengan nanopartikel perak (AgNPs) hasil sintesis hijau untuk potensi aplikasi pasta gigi. Menyiapkan material hidroksiapatit melalui proses sintesis kimia dan mengoptimalkan parameter kalsinasi untuk memperoleh karakteristik material yang sesuai. Melakukan karakterisasi material dengan spektrofotometri UV–Vis, XRD, FTIR, dan FESEM untuk menganalisis sifat struktural, optik, dan morfologi, serta evaluasi antibakteri terhadap Streptococcus mutans dan Escherichia coli menggunakan metode difusi sumur untuk menilai kinerja komposit.",

    'work.2.role': "Internship Trainee",
    'work.2.inst': "PT KILANG PERTAMINA INTERNASIONAL REFINERY UNIT III PLAJU",
    'work.2.loc': "Magang",
    'work.2.period': "Sep 2025 — Okt 2025",
    'work.2.sub': "Proses Kilang & Evaluasi Peralatan",
    'work.2.desc': "Mempelajari operasi kilang dan proses produksi, meliputi Crude Distillation Unit (CDU), RFCCU, Polypropylene Unit, Polymer Unit, dan Alkylation Unit. Mengevaluasi kinerja Double Pipe Heat Exchanger HE E6-1/2 menggunakan data operasional dan menilai opsi penggantian material berdasarkan aspek korosi, efisiensi termal, biaya, dan keandalan. Meninjau Process Flow Diagram (PFD) proses pengilangan minyak mentah untuk memahami fungsi peralatan dan keterkaitan antarproses.",

    'work.3.role': "Anggota Tim",
    'work.3.inst': "LIMBAH KELAPA SEBAGAI ENERGI TERBARUKAN",
    'work.3.loc': "Program Pengabdian Mahasiswa kepada Masyarakat (P2M2), Universitas Jambi",
    'work.3.period': "Mei 2024 — Okt 2024",
    'work.3.sub': "Briket dari Limbah Kelapa",
    'work.3.desc': "Mengembangkan briket berbasis limbah kelapa sebagai alternatif energi terbarukan untuk mengurangi ketergantungan pada bahan bakar konvensional. Berkontribusi pada pelaksanaan proyek, koordinasi kerja tim, dan evaluasi solusi energi terbarukan.",

    'work.4.role': "Anggota Tim",
    'work.4.inst': "BIOPELET BIOMASSA DARI ECENG GONDOK",
    'work.4.loc': "Program Pengabdian Mahasiswa kepada Masyarakat (P2M2), Universitas Jambi",
    'work.4.period': "Mei 2024 — Okt 2024",
    'work.4.sub': "Biopelet dari Eceng Gondok",
    'work.4.desc': "Mendukung pengembangan biopelet berbasis biomassa eceng gondok sebagai sumber energi alternatif yang ramah lingkungan. Mengevaluasi karakteristik biomassa dan proses produksi untuk meningkatkan kualitas dan nilai ekonomi biopelet.",

    'work.5.role': "Peneliti",
    'work.5.inst': "BIOPELET DARI TANDAN KOSONG KELAPA SAWIT (TKKS)",
    'work.5.loc': "Program Merdeka Belajar (MBKM), Universitas Jambi",
    'work.5.period': "Jun 2024 — Jul 2024",
    'work.5.sub': "Torefaksi Basah",
    'work.5.desc': "Meneliti pengubahan limbah tandan kosong kelapa sawit menjadi bahan bakar biomassa melalui teknologi torefaksi basah. Menganalisis pengaruh suhu operasi terhadap kadar air, rendemen massa, dan karakteristik bahan bakar.",

    'work.1.tags': "Sintesis Hidroksiapatit|Kalsinasi|UV–Vis|XRD|FTIR|FESEM|Uji Antibakteri",
    'work.2.tags': "CDU|RFCCU|Polypropylene Unit|Alkylation Unit|Heat Exchanger|Analisis PFD",
    'work.3.tags': "Briket|Limbah Kelapa|Energi Terbarukan|P2M2",
    'work.4.tags': "Biopelet|Eceng Gondok|Biomassa|P2M2",
    'work.5.tags': "Biopelet|TKKS|Torefaksi Basah|MBKM",

    // ── Karya & Proyek
    'projects.label': "KARYA & PROYEK",
    'projects.title': "Karya & Proyek",
    'projects.sub': "Hasil rancangan dan data riset dari tugas akhir dan penelitian.",
    'projects.open': "Lihat ukuran penuh →",
    'proj.1.cat': "TUGAS AKHIR · UNIVERSITAS JAMBI",
    'proj.1.title': "Process Flow Diagram Pabrik Sikloheksanon",
    'proj.1.desc': "Diagram alir pra-rancangan pabrik sikloheksanon melalui proses hidrogenasi fenol dengan kapasitas 55.000 ton/tahun.",
    'proj.2.cat': "DATA RISET · BRIN",
    'proj.2.title': "Spektrum FTIR HaP-Ag, AgNPs, dan Hidroksiapatit",
    'proj.2.desc': "Hasil karakterisasi FTIR dari penelitian hidroksiapatit berbasis cangkang telur yang didoping nanosilver.",
    'proj.3.cat': "DATA RISET · BRIN",
    'proj.3.title': "Pola Difraksi XRD",
    'proj.3.desc': "Pola difraksi sinar-X dari karakterisasi material pada penelitian hidroksiapatit dan nanosilver.",

    // ── Organizations Section
    'trainings.label': "PENGALAMAN ORGANISASI",
    'trainings.title': "Organisasi & Kepanitiaan",
    'trainings.campus': "UNIVERSITAS JAMBI",

    'org.1.role': "Staf Pengembangan Organisasi & Kaderisasi",
    'org.1.inst': "HIMATEKA Universitas Jambi",
    'org.1.period': "Des 2022 — Agu 2024",
    'org.1.loc': "Organisasi",
    'org.1.desc': "Membantu merencanakan dan melaksanakan program kerja organisasi, meliputi koordinasi, persiapan acara, dan evaluasi kegiatan. Mengembangkan kemampuan kepemimpinan, komunikasi, manajemen waktu, dan pemecahan masalah melalui keterlibatan aktif dalam kegiatan organisasi.",

    'org.2.role': "Staf Departemen Sekretariat",
    'org.2.inst': "HIMATEKA Universitas Jambi",
    'org.2.period': "Sep 2024 — Jul 2025",
    'org.2.loc': "Organisasi",
    'org.2.desc': "Mengelola administrasi organisasi, termasuk surat-menyurat resmi, pengarsipan dokumen, dan pengelolaan catatan. Menata dokumen rapat, laporan kegiatan, dan inventaris organisasi untuk mendukung efisiensi operasional.",

    'org.3.role': "Staf Divisi Hubungan Masyarakat",
    'org.3.inst': "Chemical Engineering Fair (CEF) 2023",
    'org.3.period': "Okt 2022 — Mei 2023",
    'org.3.loc': "Kepanitiaan",
    'org.3.desc': "Menyusun proposal sponsorship dan materi komunikasi untuk mitra eksternal dan calon sponsor, serta menjaga komunikasi dan tindak lanjut dengan sponsor untuk mendukung kolaborasi acara.",

    'org.4.role': "Bendahara, Panitia Lomba Karya Tulis Ilmiah & Esai",
    'org.4.inst': "Chemical Engineering Fair (CEF) 2024",
    'org.4.period': "Sep 2023 — Mei 2024",
    'org.4.loc': "Kepanitiaan",
    'org.4.desc': "Mengelola administrasi keuangan acara, meliputi perencanaan anggaran, pencatatan transaksi, dan dokumentasi keuangan. Menyusun laporan keuangan untuk memastikan pengelolaan acara yang transparan dan akuntabel.",

    'org.1.tags': "Kaderisasi|Program Kerja|Koordinasi|Evaluasi",
    'org.2.tags': "Surat Resmi|Pengarsipan|Inventaris|Laporan Kegiatan",
    'org.3.tags': "Proposal Sponsorship|Humas|Komunikasi Eksternal",
    'org.4.tags': "Anggaran|Pencatatan Transaksi|Laporan Keuangan",

    // ── Penelitian
    'achv.label': "PENELITIAN",
    'achv.title': "Penelitian",
    'achv.1.badge': "PENELITIAN",
    'achv.1.title': "Sintesis Hidroksiapatit Berbasis Cangkang Telur yang Didoping Nanosilver (AgNPs) melalui Metode Sol-Gel Sintesis Hijau untuk Aplikasi Pasta Gigi",
    'achv.1.inst': "Universitas Jambi · BRIN",
    'achv.1.period': "Nov 2025 — Feb 2026",
    'achv.1.gpa': "XRD · FTIR · FESEM · UV–Vis",

    // ── Awards Section
    'awards.label': "SERTIFIKAT",
    'awards.title': "Sertifikat",
    'awards.sub': "Sertifikat bahasa Inggris, riset, pengabdian, dan pelatihan.",
    'awards.openDoc': "Buka Sertifikat",
    'awards.issuer': "Penerbit",
    'awards.viewOriginal': "Lihat Dokumen Asli →",

    'award.1.title': "Sertifikat TOEFL Prediction Test",
    'award.1.issuer': "Central Course",
    'award.1.cat': "BAHASA INGGRIS",
    'award.1.year': "2026",
    'award.1.desc': "TOEFL Prediction Test dengan skor total 550 (Listening 57, Structure & Written Expression 54, Reading 54), tanggal tes 3 Oktober 2026.",

    'award.2.title': "Jambi University English Language Test (JUELT)",
    'award.2.issuer': "Universitas Jambi",
    'award.2.cat': "BAHASA INGGRIS",
    'award.2.year': "2026",
    'award.2.desc': "Sertifikat JUELT yang setara TOEFL dengan skor akhir 427, diterbitkan 22 September 2026.",

    'award.3.title': "Sertifikat Penelitian Tugas Akhir",
    'award.3.issuer': "Pusat Riset Kimia Molekuler, BRIN",
    'award.3.cat': "SERTIFIKAT RISET",
    'award.3.year': "2026",
    'award.3.desc': "Sertifikat kegiatan penelitian tugas akhir di Pusat Riset Kimia Molekuler, Badan Riset dan Inovasi Nasional (BRIN).",

    'award.4.title': "Penerima Dana Pendanaan P2M2 2024",
    'award.4.issuer': "Universitas Jambi",
    'award.4.cat': "PENGABDIAN MASYARAKAT",
    'award.4.year': "2024",
    'award.4.desc': "Sertifikat sebagai Anggota Tim penerima pendanaan Program Pengabdian Mahasiswa kepada Masyarakat (P2M2) 2024, proposal briket dari pelepah kelapa gading dengan perekat tepung singkong di Desa Penyengat Olak.",

    'award.5.title': "Introducing AutoCAD Plant 3D for Plant Design",
    'award.5.issuer': "Ikatan Alumni Teknik Kimia (IATEKA), Universitas Jambi",
    'award.5.cat': "PELATIHAN",
    'award.5.year': "2024",
    'award.5.desc': "Sertifikat peserta kegiatan Introducing AutoCAD Plant 3D for Plant Design as an Engineer, melalui Zoom Meetings, 5 Februari 2024.",

    'award.6.title': "IoT D'ONE Season #2",
    'award.6.issuer': "BKKMTKI Daerah 1",
    'award.6.cat': "SERTIFIKAT PENGHARGAAN",
    'award.6.year': "2024",
    'award.6.desc': "Sertifikat penghargaan sebagai peserta kegiatan IoT D'ONE Season #2 dalam Collaboration with BKKMTKI Daerah 1.",

    'award.7.title': "Kuliah Umum Polusi Udara Asia Tenggara & Penulisan Karya Ilmiah",
    'award.7.issuer': "Fakultas Sains dan Teknologi, Universitas Jambi",
    'award.7.cat': "SERTIFIKAT PESERTA",
    'award.7.year': "2024",
    'award.7.desc': "Sertifikat peserta Public Lecture on Research Potential on Southeast Asian Air Pollution and Writing Scientific Papers for Students, 4 September 2024.",

    // ── Skills Section
    'skills.label': "KOMPETENSI TEKNIS",
    'skills.title': "Kemampuan Teknis",
    'skills.desc': "Menggabungkan simulasi dan perancangan proses, analisis material di laboratorium, serta pengolahan data untuk riset dan rekayasa proses.",
    'skills.card1.tag': "REKAYASA PROSES & PERANGKAT LUNAK",
    'skills.card1.desc': "Simulasi proses, perancangan proses, analisis PFD, pembacaan P&ID, evaluasi heat exchanger, dan optimasi proses, dengan perangkat lunak rekayasa seperti Aspen Plus, Aspen HYSYS, ChemCAD, SuperPro Designer, MATLAB, dan AutoCAD Plant 3D.",
    'skills.card2.tag': "LABORATORIUM & ANALISIS MATERIAL",
    'skills.card2.desc': "Karakterisasi material dengan XRD, FTIR, FESEM, dan spektrofotometri UV–Vis, analisis eksperimen, serta pengolahan dan visualisasi data dengan Minitab, OriginLab, dan Excel.",
    'skills.card1.tags': "Process Simulation|Process Design|Analisis PFD|Pembacaan P&ID|Evaluasi Heat Exchanger|Optimasi Proses|Aspen Plus|Aspen HYSYS|ChemCAD|SuperPro Designer|MATLAB|AutoCAD Plant 3D",
    'skills.card2.tags': "XRD|FTIR|FESEM|UV–Vis|Karakterisasi Material|Analisis Eksperimen|Minitab|OriginLab|Microsoft Excel|Visualisasi Data",

    // ── Personal Skills Section
    'personal.label': "KEMAMPUAN PERSONAL & TEKNIS",
    'personal.title': "Karakter & Perangkat Kerja",
    'personal.sub': "Kemampuan profesional yang mendukung pekerjaan rekayasa dan riset, serta perangkat lunak dan bahasa.",
    'personal.soft.label': "KEMAMPUAN PROFESIONAL",
    'personal.soft.title': "Professional Skills",
    'personal.hard.label': "PERANGKAT & BAHASA",
    'personal.hard.title': "Perangkat Lunak & Bahasa",
    'personal.orientation': "Karakter Kerja:",
    'personal.quality': "Analitis & Kolaboratif",
    'personal.app': "Bahasa:",
    'personal.ready': "Indonesia · Inggris",

    'personal.soft.1.t': "Analytical Thinking",
    'personal.soft.1.d': "Mengevaluasi data operasional dan hasil karakterisasi material.",
    'personal.soft.2.t': "Problem Solving",
    'personal.soft.2.d': "Menilai opsi material berdasarkan korosi, efisiensi termal, biaya, dan keandalan.",
    'personal.soft.3.t': "Team Collaboration",
    'personal.soft.3.d': "Bekerja dalam tim proyek P2M2 dan kepanitiaan.",
    'personal.soft.4.t': "Technical Communication",
    'personal.soft.4.d': "Menyusun materi komunikasi, proposal sponsorship, dan laporan kegiatan.",
    'personal.soft.5.t': "Time Management",
    'personal.soft.5.d': "Membagi waktu antara riset, proyek, dan organisasi.",

    'personal.hard.1.t': "Simulasi & Desain Proses",
    'personal.hard.1.d': "Aspen Plus, Aspen HYSYS, ChemCAD, dan SuperPro Designer untuk perancangan proses.",
    'personal.hard.2.t': "MATLAB & AutoCAD Plant 3D",
    'personal.hard.2.d': "Perhitungan rekayasa serta pemodelan peralatan dan tata letak pipa pabrik.",
    'personal.hard.3.t': "Minitab & OriginLab",
    'personal.hard.3.d': "Analisis data penelitian dan pembuatan grafik hasil karakterisasi.",
    'personal.hard.4.t': "Microsoft Office",
    'personal.hard.4.d': "Excel, Word, dan PowerPoint untuk pengolahan dan visualisasi data serta laporan.",
    'personal.lang.1.t': "Bahasa Indonesia",
    'personal.lang.1.l': "Bahasa ibu",
    'personal.lang.2.t': "Bahasa Inggris",
    'personal.lang.2.l': "Upper-Intermediate · TOEFL Prediction 550",

    // ── Contact Section
    'contact.label': "KONTAK",
    'contact.title': "Hubungi Saya",
    'contact.tagline': "Lulusan Teknik Kimia yang mencari posisi entry-level di Process Engineering, Produksi, QC, atau R&D.",
    'contact.subtitle': "Terbuka untuk peluang entry-level di bidang Process Engineering, Produksi, Quality Control (QC), serta Research and Development (R&D). Mari terhubung melalui email, WhatsApp, atau LinkedIn.",
    'contact.location': "LOKASI",
    'contact.phone': "TELEPON / WHATSAPP",
  },

  en: {
    // ── Navbar
    'nav.about': "ABOUT ME",
    'nav.education': "EDUCATION",
    'nav.work': "EXPERIENCE",
    'nav.projects': "WORKS",
    'nav.org': "ORGANIZATIONS",
    'nav.achievements': "RESEARCH",
    'nav.awards': "CERTIFICATES",
    'nav.skills': "SKILLS",
    'nav.contact': "CONTACT ME",
    'ui.changePhoto': "Change photo",
    'ui.viewPhoto': "View photo",
    'ui.photo': "photo",
    'ui.orgClick': "Click to change photo",
    'ui.orgDocs': "Documentation:",
    'ui.orgView': "View photo",

    // ── Hero
    'hero.scroll': "SCROLL DOWN",
    'hero.hey': "Hi, I'm",
    'hero.tagline': "Chemical engineering graduate with experience in refinery operations, materials research, and renewable energy projects.",
    'hero.based1': "CHEMICAL ENGINEERING GRADUATE",
    'hero.based2': "UNIVERSITY OF JAMBI",
    'hero.role1': "Chemical Engineering Graduate",
    'hero.role2': "Process · Research · R&D",
    'hero.badge.major': "Chemical Engineering UNJA",
    'hero.badge.medal': "GPA 3.58 / 4.00",
    'hero.badge.event': "University of Jambi",

    // ── About Section
    'about.label': "ABOUT ME",
    'about.title': "Process. Research. Renewable Energy.",
    'about.ipk': "GPA",
    'about.honors': "TOEFL",
    'about.year': "Graduated",
    'about.bio1': "Chemical Engineering Graduate from Universitas Jambi with experience in refinery operations, materials research, and renewable energy projects. Experienced as a Researcher at Badan Riset dan Inovasi Nasional (BRIN) and Internship Trainee at PT Kilang Pertamina Internasional Refinery Unit III Plaju, with exposure to process evaluation, material characterization, and chemical process analysis. Proficient in process simulation and engineering software including Aspen Plus, Aspen HYSYS, ChemCAD, Minitab, and OriginLab for process design, data analysis, and research activities. Seeking an entry-level position in Process Engineering, Production, Quality Control (QC), or Research and Development (R&D).",
    'about.cv.prompt': "Want to know more?",
    'about.cv.link': "Download my CV",
    'about.current.label': "FOCUS AREAS",
    'about.current.1.title': "Materials Research",
    'about.current.1.sub': "Hydroxyapatite & nanosilver at BRIN",
    'about.current.2.title': "Refinery Operations",
    'about.current.2.sub': "Internship at Pertamina RU III Plaju",
    'about.current.3.title': "Renewable Energy",
    'about.current.3.sub': "Biopellets and briquettes (P2M2, MBKM)",

    // ── Trait Deck
    'trait.card.label': "WORK CHARACTER",
    'trait.change': "Next",
    'trait.hint': "Click to see another work character",
    'trait.1.title': "Analytical",
    'trait.1.sub': "Analytical Thinking",
    'trait.1.tag': "Data-Driven",
    'trait.1.desc': "Evaluating heat exchanger performance from operational data and analyzing material properties through UV–Vis, XRD, FTIR, and FESEM.",
    'trait.2.title': "Solution-Oriented",
    'trait.2.sub': "Problem Solving",
    'trait.2.tag': "Weighing Options",
    'trait.2.desc': "Assessing material replacement options based on corrosion, thermal efficiency, cost, and reliability.",
    'trait.3.title': "Collaborative",
    'trait.3.sub': "Team Collaboration",
    'trait.3.tag': "Teamwork",
    'trait.3.desc': "Team member in P2M2 projects and active in organizational work programs and committees.",
    'trait.4.title': "Disciplined",
    'trait.4.sub': "Time Management",
    'trait.4.tag': "Technical Communication",
    'trait.4.desc': "Balancing research, projects, and organizations, and keeping financial and administrative records in order.",

    // ── Quote (ringkasan dari CV, bukan motto dari klien)
    'about.quote': "“Turning process data into sound engineering decisions.”",

    // ── Metrics
    'metric.gpa': "GPA",
    'metric.gpa.sub': "Chemical Engineering, Universitas Jambi (3.58 / 4.00)",
    'metric.toefl': "TOEFL SCORE",
    'metric.toefl.sub': "TOEFL Prediction Test (score 550)",
    'metric.exp': "EXPERIENCES",
    'metric.exp.sub': "BRIN research, refinery internship, and 3 projects",
    'metric.cert': "CERTIFICATES",
    'metric.cert.sub': "BRIN, P2M2, TOEFL, JUELT, and training",

    // ── Education Section
    'education.label': "ACADEMIC HISTORY",
    'education.title': "Education",
    'education.degreeLabel': "Degree",
    'education.highlights.label': "Key Experiences & Activities",

    'education.1.institution': "University of Jambi",
    'education.1.program': "Chemical Engineering",
    'education.1.degree': "Bachelor of Chemical Engineering",
    'education.1.period': "Aug 2022 — Nov 2026",
    'education.1.gpa': "3.58 / 4.00",
    'education.1.status': "Graduate",
    'education.1.desc': "Studied for a Bachelor of Chemical Engineering at Universitas Jambi, with coursework in Mass & Energy Balance, Thermodynamics, Heat & Mass Transfer, Fluid Mechanics, and Process Control & Instrumentation.",
    'education.1.tag': "Bachelor's Degree",
    'education.1.caption': "University of Jambi",
    'education.1.h1': "Final project: Preliminary Design of a Cyclohexanone Production Plant via Phenol Hydrogenation, 55,000 tons/year capacity",
    'education.1.h2': "Research: synthesis of eggshell-based hydroxyapatite doped with nanosilver (AgNPs) for toothpaste applications",
    'education.1.h3': "Researcher at BRIN and Internship Trainee at PT Kilang Pertamina Internasional RU III Plaju",
    'education.1.h4': "Active in HIMATEKA and Chemical Engineering Fair (CEF) 2023 & 2024",

    // ── Work Section
    'work.label': "EXPERIENCE",
    'work.title': "Work & Project Experience",
    'work.subtitle': "Materials research, refinery operations, and renewable energy projects.",
    'work.cta': "View All Experience",

    'work.1.role': "Researcher",
    'work.1.inst': "BADAN RISET DAN INOVASI NASIONAL (BRIN) RI",
    'work.1.loc': "Materials Research",
    'work.1.period': "Nov 2025 — Feb 2026",
    'work.1.sub': "Hydroxyapatite from Eggshell Waste & Silver Nanoparticles",
    'work.1.desc': "Conducted research on hydroxyapatite synthesis from eggshell waste combined with green-synthesized silver nanoparticles (AgNPs) for potential toothpaste applications. Prepared hydroxyapatite materials through chemical synthesis processes and optimized calcination parameters to obtain suitable material characteristics. Performed material characterization using UV–Vis spectrophotometry, XRD, FTIR, and FESEM to analyze structural, optical, and morphological properties, and conducted antibacterial evaluation against Streptococcus mutans and Escherichia coli using the well diffusion method to assess composite performance.",

    'work.2.role': "Internship Trainee",
    'work.2.inst': "PT KILANG PERTAMINA INTERNASIONAL REFINERY UNIT III PLAJU",
    'work.2.loc': "Internship",
    'work.2.period': "Sep 2025 — Oct 2025",
    'work.2.sub': "Refinery Processes & Equipment Evaluation",
    'work.2.desc': "Studied refinery operations and production processes, including Crude Distillation Unit (CDU), RFCCU, Polypropylene Unit, Polymer Unit, and Alkylation Unit. Evaluated Double Pipe Heat Exchanger HE E6-1/2 performance using operational data and assessed material replacement options based on corrosion, thermal efficiency, cost, and reliability aspects. Reviewed the Process Flow Diagram (PFD) of crude oil refining processes to understand equipment functions and process interconnections.",

    'work.3.role': "Team Member",
    'work.3.inst': "COCONUT WASTE-BASED RENEWABLE ENERGY",
    'work.3.loc': "Student Community Service Program (P2M2), Universitas Jambi",
    'work.3.period': "May 2024 — Oct 2024",
    'work.3.sub': "Briquettes from Coconut Waste",
    'work.3.desc': "Developed coconut waste-based briquettes as a renewable energy alternative to reduce dependence on conventional fuels. Contributed to project implementation, teamwork coordination, and evaluation of renewable energy solutions.",

    'work.4.role': "Team Member",
    'work.4.inst': "BIOMASS BIOPELLETS FROM WATER HYACINTH",
    'work.4.loc': "Student Community Service Program (P2M2), Universitas Jambi",
    'work.4.period': "May 2024 — Oct 2024",
    'work.4.sub': "Biopellets from Water Hyacinth",
    'work.4.desc': "Supported the development of water hyacinth biomass-based biopellets as an environmentally friendly alternative energy source. Evaluated biomass characteristics and production processes to improve biopellet quality and economic value.",

    'work.5.role': "Researcher",
    'work.5.inst': "BIOPELLETS FROM OIL PALM EMPTY FRUIT BUNCHES (EFB)",
    'work.5.loc': "Independent Study Program (MBKM), Universitas Jambi",
    'work.5.period': "Jun 2024 — Jul 2024",
    'work.5.sub': "Wet Torrefaction",
    'work.5.desc': "Conducted research on converting oil palm empty fruit bunch waste into biomass fuel through wet torrefaction technology. Analyzed the effect of operating temperature on moisture content, mass yield, and fuel characteristics.",

    'work.1.tags': "Hydroxyapatite Synthesis|Calcination|UV–Vis|XRD|FTIR|FESEM|Antibacterial Test",
    'work.2.tags': "CDU|RFCCU|Polypropylene Unit|Alkylation Unit|Heat Exchanger|PFD Analysis",
    'work.3.tags': "Briquettes|Coconut Waste|Renewable Energy|P2M2",
    'work.4.tags': "Biopellets|Water Hyacinth|Biomass|P2M2",
    'work.5.tags': "Biopellets|EFB|Wet Torrefaction|MBKM",

    // ── Works & Projects
    'projects.label': "WORKS & PROJECTS",
    'projects.title': "Works & Projects",
    'projects.sub': "Design outputs and research data from the final project and research.",
    'projects.open': "View full size →",
    'proj.1.cat': "FINAL PROJECT · UNIVERSITAS JAMBI",
    'proj.1.title': "Cyclohexanone Plant Process Flow Diagram",
    'proj.1.desc': "Process flow diagram from the preliminary design of a cyclohexanone production plant via phenol hydrogenation, 55,000 tons/year capacity.",
    'proj.2.cat': "RESEARCH DATA · BRIN",
    'proj.2.title': "FTIR Spectra of HaP-Ag, AgNPs, and Hydroxyapatite",
    'proj.2.desc': "FTIR characterization results from the research on eggshell-based hydroxyapatite doped with nanosilver.",
    'proj.3.cat': "RESEARCH DATA · BRIN",
    'proj.3.title': "XRD Diffraction Patterns",
    'proj.3.desc': "X-ray diffraction patterns from the material characterization in the hydroxyapatite and nanosilver research.",

    // ── Organizations Section
    'trainings.label': "ORGANIZATIONAL EXPERIENCE",
    'trainings.title': "Organizations & Committees",
    'trainings.campus': "UNIVERSITY OF JAMBI",

    'org.1.role': "Staff of Organizational Development & Cadre Development",
    'org.1.inst': "HIMATEKA Universitas Jambi",
    'org.1.period': "Dec 2022 — Aug 2024",
    'org.1.loc': "Organization",
    'org.1.desc': "Assisted in planning and executing organizational work programs, including coordination, event preparation, and activity evaluation. Developed leadership, communication, time management, and problem-solving skills through active involvement in organizational activities.",

    'org.2.role': "Staff of Secretariat Department",
    'org.2.inst': "HIMATEKA Universitas Jambi",
    'org.2.period': "Sep 2024 — Jul 2025",
    'org.2.loc': "Organization",
    'org.2.desc': "Managed organizational administration, including official correspondence, document filing, and record management. Organized meeting documents, activity reports, and organizational inventories to support operational efficiency.",

    'org.3.role': "Staff of Public Relations Division",
    'org.3.inst': "Chemical Engineering Fair (CEF) 2023",
    'org.3.period': "Oct 2022 — May 2023",
    'org.3.loc': "Committee",
    'org.3.desc': "Prepared sponsorship proposals and communication materials for external partners and potential sponsors, and maintained communication and follow-up with sponsors to support event collaboration.",

    'org.4.role': "Treasurer, Scientific Writing & Essay Competition Committee",
    'org.4.inst': "Chemical Engineering Fair (CEF) 2024",
    'org.4.period': "Sep 2023 — May 2024",
    'org.4.loc': "Committee",
    'org.4.desc': "Managed event financial administration, including budget planning, transaction records, and financial documentation. Prepared financial reports to ensure transparent and accountable event management.",

    'org.1.tags': "Cadre Development|Work Programs|Coordination|Evaluation",
    'org.2.tags': "Official Letters|Document Filing|Inventory|Activity Reports",
    'org.3.tags': "Sponsorship Proposals|Public Relations|External Communication",
    'org.4.tags': "Budget Planning|Transaction Records|Financial Reports",

    // ── Research
    'achv.label': "RESEARCH",
    'achv.title': "Research",
    'achv.1.badge': "RESEARCH",
    'achv.1.title': "Synthesis of Eggshell-Based Hydroxyapatite Doped with Nanosilver (AgNPs) via Green Synthesis Sol-Gel Method for Toothpaste Applications",
    'achv.1.inst': "Universitas Jambi · BRIN",
    'achv.1.period': "Nov 2025 — Feb 2026",
    'achv.1.gpa': "XRD · FTIR · FESEM · UV–Vis",

    // ── Awards Section
    'awards.label': "CERTIFICATES",
    'awards.title': "Certificates",
    'awards.sub': "English, research, community service, and training certificates.",
    'awards.openDoc': "Open Certificate",
    'awards.issuer': "Issued by",
    'awards.viewOriginal': "View Original Document →",

    'award.1.title': "TOEFL Prediction Test Certificate",
    'award.1.issuer': "Central Course",
    'award.1.cat': "ENGLISH LANGUAGE",
    'award.1.year': "2026",
    'award.1.desc': "TOEFL Prediction Test with a total score of 550 (Listening 57, Structure & Written Expression 54, Reading 54), test date 3 October 2026.",

    'award.2.title': "Jambi University English Language Test (JUELT)",
    'award.2.issuer': "Universitas Jambi",
    'award.2.cat': "ENGLISH LANGUAGE",
    'award.2.year': "2026",
    'award.2.desc': "JUELT certificate, equivalent to TOEFL, with a final score of 427, issued 22 September 2026.",

    'award.3.title': "Final Project Research Certificate",
    'award.3.issuer': "Molecular Chemistry Research Center, BRIN",
    'award.3.cat': "RESEARCH CERTIFICATE",
    'award.3.year': "2026",
    'award.3.desc': "Certificate for final project research activities at the Molecular Chemistry Research Center, National Research and Innovation Agency (BRIN).",

    'award.4.title': "P2M2 2024 Funding Recipient",
    'award.4.issuer': "Universitas Jambi",
    'award.4.cat': "COMMUNITY SERVICE",
    'award.4.year': "2024",
    'award.4.desc': "Certificate as a Team Member of a Student Community Service Program (P2M2) 2024 funding recipient: briquettes from young coconut fronds with cassava flour binder in Penyengat Olak Village.",

    'award.5.title': "Introducing AutoCAD Plant 3D for Plant Design",
    'award.5.issuer': "Ikatan Alumni Teknik Kimia (IATEKA), Universitas Jambi",
    'award.5.cat': "TRAINING",
    'award.5.year': "2024",
    'award.5.desc': "Participant certificate for Introducing AutoCAD Plant 3D for Plant Design as an Engineer, via Zoom Meetings, 5 February 2024.",

    'award.6.title': "IoT D'ONE Season #2",
    'award.6.issuer': "BKKMTKI Region 1",
    'award.6.cat': "CERTIFICATE OF APPRECIATION",
    'award.6.year': "2024",
    'award.6.desc': "Certificate of appreciation as a participant in IoT D'ONE Season #2 in Collaboration with BKKMTKI Region 1.",

    'award.7.title': "Public Lecture: Southeast Asian Air Pollution & Scientific Writing",
    'award.7.issuer': "Faculty of Science and Technology, Universitas Jambi",
    'award.7.cat': "PARTICIPANT CERTIFICATE",
    'award.7.year': "2024",
    'award.7.desc': "Participant certificate for the Public Lecture on Research Potential on Southeast Asian Air Pollution and Writing Scientific Papers for Students, 4 September 2024.",

    // ── Skills Section
    'skills.label': "TECHNICAL COMPETENCIES",
    'skills.title': "Technical Skills",
    'skills.desc': "Combines process simulation and design, laboratory material analysis, and data processing for research and process engineering.",
    'skills.card1.tag': "PROCESS ENGINEERING & SOFTWARE",
    'skills.card1.desc': "Process simulation, process design, PFD analysis, P&ID reading, heat exchanger evaluation, and process optimization, with engineering software such as Aspen Plus, Aspen HYSYS, ChemCAD, SuperPro Designer, MATLAB, and AutoCAD Plant 3D.",
    'skills.card2.tag': "LABORATORY & MATERIAL ANALYSIS",
    'skills.card2.desc': "Material characterization with XRD, FTIR, FESEM, and UV–Vis spectrophotometry, experimental analysis, and data processing and visualization with Minitab, OriginLab, and Excel.",
    'skills.card1.tags': "Process Simulation|Process Design|PFD Analysis|P&ID Reading|Heat Exchanger Evaluation|Process Optimization|Aspen Plus|Aspen HYSYS|ChemCAD|SuperPro Designer|MATLAB|AutoCAD Plant 3D",
    'skills.card2.tags': "XRD|FTIR|FESEM|UV–Vis|Material Characterization|Experimental Analysis|Minitab|OriginLab|Microsoft Excel|Data Visualization",

    // ── Personal Skills Section
    'personal.label': "PERSONAL & TECHNICAL SKILLS",
    'personal.title': "Character & Work Tools",
    'personal.sub': "Professional skills that support engineering and research work, plus software and languages.",
    'personal.soft.label': "PROFESSIONAL SKILLS",
    'personal.soft.title': "Professional Skills",
    'personal.hard.label': "TOOLS & LANGUAGES",
    'personal.hard.title': "Software & Languages",
    'personal.orientation': "Work Character:",
    'personal.quality': "Analytical & Collaborative",
    'personal.app': "Languages:",
    'personal.ready': "Indonesian · English",

    'personal.soft.1.t': "Analytical Thinking",
    'personal.soft.1.d': "Evaluating operational data and material characterization results.",
    'personal.soft.2.t': "Problem Solving",
    'personal.soft.2.d': "Assessing material options based on corrosion, thermal efficiency, cost, and reliability.",
    'personal.soft.3.t': "Team Collaboration",
    'personal.soft.3.d': "Working in P2M2 project teams and committees.",
    'personal.soft.4.t': "Technical Communication",
    'personal.soft.4.d': "Preparing communication materials, sponsorship proposals, and activity reports.",
    'personal.soft.5.t': "Time Management",
    'personal.soft.5.d': "Balancing research, projects, and organizations.",

    'personal.hard.1.t': "Process Simulation & Design",
    'personal.hard.1.d': "Aspen Plus, Aspen HYSYS, ChemCAD, and SuperPro Designer for process design.",
    'personal.hard.2.t': "MATLAB & AutoCAD Plant 3D",
    'personal.hard.2.d': "Engineering calculations plus equipment modeling and piping layout for plants.",
    'personal.hard.3.t': "Minitab & OriginLab",
    'personal.hard.3.d': "Research data analysis and plotting of characterization results.",
    'personal.hard.4.t': "Microsoft Office",
    'personal.hard.4.d': "Excel, Word, and PowerPoint for data processing, visualization, and reports.",
    'personal.lang.1.t': "Indonesian",
    'personal.lang.1.l': "Native",
    'personal.lang.2.t': "English",
    'personal.lang.2.l': "Upper-Intermediate · TOEFL Prediction 550",

    // ── Contact Section
    'contact.label': "CONTACT",
    'contact.title': "Contact Me",
    'contact.tagline': "Chemical Engineering graduate seeking an entry-level role in Process Engineering, Production, QC, or R&D.",
    'contact.subtitle': "Open to entry-level opportunities in Process Engineering, Production, Quality Control (QC), and Research and Development (R&D). Let's connect by email, WhatsApp, or LinkedIn.",
    'contact.location': "LOCATION",
    'contact.phone': "PHONE / WHATSAPP",
  },
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>('id')

  useEffect(() => {
    try {
      const savedLang = localStorage.getItem('site_language') as Language
      if (savedLang === 'id' || savedLang === 'en') {
        setLangState(savedLang)
        return
      }
      const userLang = navigator.language || (navigator as any).userLanguage || ''
      if (userLang.toLowerCase().startsWith('id')) {
        setLangState('id')
      } else {
        setLangState('en')
      }
    } catch {
      setLangState('id')
    }
  }, [])

  const setLang = (newLang: Language) => {
    setLangState(newLang)
    try {
      localStorage.setItem('site_language', newLang)
    } catch {}
  }

  const t = (key: string): string => {
    return translations[lang]?.[key] ?? translations['id']?.[key] ?? key
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}
