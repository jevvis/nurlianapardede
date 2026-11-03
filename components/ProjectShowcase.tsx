'use client'

import TypewriterTitle from './TypewriterTitle'
import { useLanguage } from '@/contexts/LanguageContext'

const works = [
  { id: 1, image: '/projects/proj-pfd.jpg' },
  { id: 2, image: '/projects/proj-ftir.jpg' },
  { id: 3, image: '/projects/proj-xrd.jpg' },
]

export default function ProjectShowcase() {
  const { t } = useLanguage()

  return (
    <section id="works" className="relative py-24 px-4 md:px-8 overflow-hidden font-sans">
      {/* Background Waves */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.1] z-0">
        <svg className="w-full h-full" viewBox="0 0 1440 800" preserveAspectRatio="none" fill="none" stroke="currentColor">
          <path d="M0 200C300 100 400 300 720 200C1040 100 1140 300 1440 200" strokeWidth="2" />
          <path d="M0 400C300 300 400 500 720 400C1040 300 1140 500 1440 400" strokeWidth="2" />
          <path d="M0 600C300 500 400 700 720 600C1040 500 1140 700 1440 600" strokeWidth="2" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-12 md:mb-16">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[var(--muted)] mb-4 font-semibold">{t('projects.label')}</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
            <TypewriterTitle text={t('projects.title')} />
          </h2>
          <p className="text-[var(--muted)] text-sm md:text-base max-w-xl">{t('projects.sub')}</p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
          {works.map((w) => (
            <article
              key={w.id}
              className="group break-inside-avoid mb-6 rounded-3xl bg-[var(--card-bg)] border border-[var(--card-border)] overflow-hidden shadow-sm hover:shadow-xl hover:border-blue-500/40 hover:-translate-y-1 transition-all duration-300"
            >
              <a href={w.image} target="_blank" rel="noopener noreferrer" className="block overflow-hidden bg-[var(--background)]">
                <img
                  src={w.image}
                  alt={t(`proj.${w.id}.title`)}
                  className="w-full h-auto group-hover:scale-[1.03] transition-transform duration-500"
                />
              </a>
              <div className="p-5 sm:p-6">
                <p className="text-[10px] tracking-[0.2em] uppercase text-blue-500 font-semibold mb-2">{t(`proj.${w.id}.cat`)}</p>
                <h3 className="text-lg font-bold leading-snug mb-2">{t(`proj.${w.id}.title`)}</h3>
                <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed mb-4">{t(`proj.${w.id}.desc`)}</p>
                <a
                  href={w.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold underline underline-offset-4 hover:opacity-75 transition-opacity"
                >
                  {t('projects.open')}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
