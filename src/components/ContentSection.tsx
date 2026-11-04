import { ArrowUpRight, FlaskConical, HeartHandshake, Hammer, PenLine } from 'lucide-react'
import type { ContentSection as Section, SectionIcon } from '@/data/profile'

const icons: Record<SectionIcon, typeof PenLine> = {
  research: FlaskConical,
  writing: PenLine,
  builds: Hammer,
  community: HeartHandshake,
}

export default function ContentSection({ section, index }: { section: Section; index: number }) {
  const Icon = icons[section.icon]
  const headingId = `section-${section.id}`
  const hasItems = section.items.length > 0

  return (
    <section
      aria-labelledby={headingId}
      className="bento fade-up flex flex-col p-6 sm:p-8"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="flex items-start gap-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-neon-cyan/15 via-neon-purple/15 to-neon-pink/15 text-violet-200">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <div>
          <h2 id={headingId} className="font-display text-xl font-semibold tracking-tight">
            {section.title}
          </h2>
          <p className="mt-1 text-sm text-pretty text-white/55">{section.description}</p>
        </div>
      </div>

      <ul className="mt-6 flex flex-1 flex-col gap-3">
        {hasItems ? (
          section.items.map((item) => (
            <li key={item.title}>
              {item.href ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start justify-between gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.03] p-4 transition-colors hover:border-neon-purple/50 hover:bg-white/[0.06]"
                >
                  <span>
                    <span className="block font-medium">{item.title}</span>
                    <span className="mt-1 block text-sm text-white/55">{item.description}</span>
                  </span>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-white/40 transition-colors group-hover:text-neon-cyan" />
                </a>
              ) : (
                <div className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-4">
                  <p className="font-medium">{item.title}</p>
                  <p className="mt-1 text-sm text-white/55">{item.description}</p>
                </div>
              )}
            </li>
          ))
        ) : (
          <li className="flex flex-1 flex-col justify-center gap-2 rounded-2xl border border-dashed border-white/15 bg-white/[0.02] p-5">
            <span className="w-fit rounded-full border border-white/10 px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-[0.1em] text-white/50">
              Coming soon
            </span>
            <div className="h-2.5 w-3/4 rounded-full bg-white/[0.07]" aria-hidden="true" />
            <div className="h-2.5 w-1/2 rounded-full bg-white/[0.05]" aria-hidden="true" />
          </li>
        )}
      </ul>
    </section>
  )
}
