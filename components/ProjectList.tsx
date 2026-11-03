'use client'

import { useLanguage } from '@/contexts/LanguageContext'

const palette = ['bg-blue-600', 'bg-blue-600', 'bg-indigo-600', 'bg-cyan-700', 'bg-purple-600', 'bg-amber-600', 'bg-sky-600', 'bg-rose-600']

type Bi = { id: string; en: string }

const projects: { number: string; title: Bi; description: Bi; framework: Bi; techStack: string[] }[] = [
  {
    number: '01',
    title: { id: "Sintesis Hidroksiapatit & Optimasi Kalsinasi", en: "Hydroxyapatite Synthesis & Calcination Optimization" },
    description: {
      id: "Menyiapkan material hidroksiapatit dari limbah cangkang telur melalui sintesis kimia dan mengoptimalkan parameter kalsinasi.",
      en: "Prepared hydroxyapatite materials from eggshell waste through chemical synthesis and optimized calcination parameters.",
    },
    framework: { id: "RISET MATERIAL — BRIN", en: "MATERIALS RESEARCH — BRIN" },
    techStack: ['Hidroksiapatit', 'Kalsinasi', 'Sintesis Hijau'],
  },
  {
    number: '02',
    title: { id: "Karakterisasi Material: UV–Vis, XRD, FTIR, FESEM", en: "Material Characterization: UV–Vis, XRD, FTIR, FESEM" },
    description: {
      id: "Menganalisis sifat struktural, optik, dan morfologi material dengan spektrofotometri UV–Vis, XRD, FTIR, dan FESEM.",
      en: "Analyzed structural, optical, and morphological properties using UV–Vis spectrophotometry, XRD, FTIR, and FESEM.",
    },
    framework: { id: "KARAKTERISASI — BRIN", en: "CHARACTERIZATION — BRIN" },
    techStack: ['XRD', 'FTIR', 'FESEM'],
  },
  {
    number: '03',
    title: { id: "Evaluasi Antibakteri dengan Metode Difusi Sumur", en: "Antibacterial Evaluation by Well Diffusion" },
    description: {
      id: "Menguji aktivitas antibakteri komposit terhadap Streptococcus mutans dan Escherichia coli.",
      en: "Tested the antibacterial activity of the composite against Streptococcus mutans and Escherichia coli.",
    },
    framework: { id: "UJI ANTIBAKTERI — BRIN", en: "ANTIBACTERIAL TEST — BRIN" },
    techStack: ['S. mutans', 'E. coli', 'Difusi Sumur'],
  },
  {
    number: '04',
    title: { id: "Studi Unit Proses Kilang", en: "Refinery Process Unit Study" },
    description: {
      id: "Mempelajari CDU, RFCCU, Polypropylene Unit, Polymer Unit, dan Alkylation Unit beserta proses produksinya.",
      en: "Studied the CDU, RFCCU, Polypropylene Unit, Polymer Unit, and Alkylation Unit and their production processes.",
    },
    framework: { id: "OPERASI KILANG — PERTAMINA RU III PLAJU", en: "REFINERY OPERATIONS — PERTAMINA RU III PLAJU" },
    techStack: ['CDU', 'RFCCU', 'Polypropylene'],
  },
  {
    number: '05',
    title: { id: "Evaluasi Heat Exchanger HE E6-1/2", en: "Heat Exchanger HE E6-1/2 Evaluation" },
    description: {
      id: "Mengevaluasi kinerja Double Pipe Heat Exchanger dengan data operasional dan menilai opsi penggantian material.",
      en: "Evaluated Double Pipe Heat Exchanger performance with operational data and assessed material replacement options.",
    },
    framework: { id: "EVALUASI PERALATAN — PERTAMINA RU III PLAJU", en: "EQUIPMENT EVALUATION — PERTAMINA RU III PLAJU" },
    techStack: ['Heat Exchanger', 'Korosi', 'Efisiensi Termal'],
  },
  {
    number: '06',
    title: { id: "Tinjauan Process Flow Diagram Pengilangan", en: "Refinery Process Flow Diagram Review" },
    description: {
      id: "Meninjau PFD proses pengilangan minyak mentah untuk memahami fungsi peralatan dan keterkaitan antarproses.",
      en: "Reviewed the crude oil refining PFD to understand equipment functions and process interconnections.",
    },
    framework: { id: "ANALISIS PROSES — PERTAMINA RU III PLAJU", en: "PROCESS ANALYSIS — PERTAMINA RU III PLAJU" },
    techStack: ['PFD', 'Peralatan Proses', 'Keterkaitan Proses'],
  },
  {
    number: '07',
    title: { id: "Briket dari Limbah Kelapa", en: "Briquettes from Coconut Waste" },
    description: {
      id: "Mengembangkan briket berbasis limbah kelapa sebagai alternatif energi terbarukan.",
      en: "Developed coconut waste-based briquettes as a renewable energy alternative.",
    },
    framework: { id: "ENERGI TERBARUKAN — P2M2 UNIVERSITAS JAMBI", en: "RENEWABLE ENERGY — P2M2 UNIVERSITAS JAMBI" },
    techStack: ['Briket', 'Energi Terbarukan', 'P2M2'],
  },
  {
    number: '08',
    title: { id: "Biopelet dari Eceng Gondok", en: "Biopellets from Water Hyacinth" },
    description: {
      id: "Mendukung pengembangan biopelet biomassa eceng gondok dan mengevaluasi karakteristik biomassa serta proses produksi.",
      en: "Supported the development of water hyacinth biomass biopellets and evaluated biomass characteristics and production processes.",
    },
    framework: { id: "ENERGI TERBARUKAN — P2M2 UNIVERSITAS JAMBI", en: "RENEWABLE ENERGY — P2M2 UNIVERSITAS JAMBI" },
    techStack: ['Biopelet', 'Biomassa', 'P2M2'],
  },
  {
    number: '09',
    title: { id: "Biopelet TKKS dengan Torefaksi Basah", en: "EFB Biopellets via Wet Torrefaction" },
    description: {
      id: "Meneliti pengaruh suhu operasi terhadap kadar air, rendemen massa, dan karakteristik bahan bakar.",
      en: "Researched the effect of operating temperature on moisture content, mass yield, and fuel characteristics.",
    },
    framework: { id: "RISET — MBKM UNIVERSITAS JAMBI", en: "RESEARCH — MBKM UNIVERSITAS JAMBI" },
    techStack: ['TKKS', 'Torefaksi Basah', 'MBKM'],
  },
  {
    number: '10',
    title: { id: "Pra-Rancangan Pabrik Sikloheksanon 55.000 Ton/Tahun", en: "Preliminary Design of a 55,000 Tons/Year Cyclohexanone Plant" },
    description: {
      id: "Tugas akhir perancangan pabrik sikloheksanon melalui proses hidrogenasi fenol.",
      en: "Final project designing a cyclohexanone plant via the phenol hydrogenation process.",
    },
    framework: { id: "PERANCANGAN PABRIK — UNIVERSITAS JAMBI", en: "PLANT DESIGN — UNIVERSITAS JAMBI" },
    techStack: ['Perancangan Pabrik', 'Hidrogenasi Fenol', 'PFD'],
  },
]

export default function ProjectList() {
  const { lang } = useLanguage()
  const copy = {
    label: { id: 'PORTOFOLIO RISET & PROSES', en: 'RESEARCH & PROCESS PORTFOLIO' },
    title: { id: 'Riset, Kilang & Energi Terbarukan', en: 'Research, Refinery & Renewable Energy' },
    sub: {
      id: 'Dokumentasi rekam jejak riset material di BRIN, magang kilang, proyek energi terbarukan, dan tugas akhir perancangan pabrik.',
      en: 'A record of materials research at BRIN, the refinery internship, renewable energy projects, and the plant design final project.',
    },
  }

  return (
    <section id="technical" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--muted)] mb-3">{copy.label[lang]}</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-3">{copy.title[lang]}</h2>
          <p className="text-[var(--muted)] text-sm max-w-lg">{copy.sub[lang]}</p>
        </div>

        <div className="divide-y divide-[var(--card-border)]">
          {projects.map((project) => (
            <div
              key={project.number}
              className="group flex items-start gap-4 md:gap-8 py-6 hover:bg-[var(--card-bg)] hover:px-4 rounded-lg transition-all duration-300 cursor-pointer"
            >
              {/* Number */}
              <span className="text-[var(--muted)] text-sm font-semibold mt-1 shrink-0 w-8 font-sans">
                {project.number}
              </span>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-base mb-1 group-hover:text-[var(--foreground)] transition-colors">
                  {project.title[lang]}
                </h3>
                <p className="text-[var(--muted)] text-sm mb-2 leading-relaxed">
                  {project.description[lang]}
                </p>
                <p className="text-[var(--muted)] text-xs tracking-wider uppercase mb-3 font-semibold">
                  {project.framework[lang]}
                </p>
                {/* Tag badges */}
                <div className="flex flex-wrap items-center gap-2">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={tech}
                      className={`px-2.5 py-1 rounded-md text-white text-[10px] font-semibold tracking-wide ${palette[(Number(project.number) + i) % palette.length]}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Status icon */}
              <div className="text-[var(--muted)] group-hover:text-[var(--foreground)] transition-colors mt-1 shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12l5 5l10 -10" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
