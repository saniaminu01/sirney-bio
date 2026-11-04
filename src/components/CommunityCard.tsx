import { ArrowUpRight, Users } from 'lucide-react'
import { community } from '@/data/profile'
import { TelegramIcon } from './icons'

export default function CommunityCard() {
  return (
    <section
      aria-labelledby="community-heading"
      className="bento fade-up relative flex flex-col justify-between gap-8 overflow-hidden border-neon-purple/30 p-8 sm:p-10 lg:col-span-5"
      style={{ animationDelay: '80ms' }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_85%_0%,rgba(139,92,246,0.28),transparent_55%),radial-gradient(circle_at_0%_100%,rgba(34,211,238,0.16),transparent_55%)]"
      />
      <div>
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-2 rounded-full border border-neon-purple/40 bg-neon-purple/10 px-3 py-1 font-display text-xs font-medium uppercase tracking-[0.1em] text-violet-200">
            <Users className="h-3.5 w-3.5" aria-hidden="true" />
            Featured Community
          </span>
          <TelegramIcon className="h-6 w-6 text-sky-400" />
        </div>
        <h2
          id="community-heading"
          className="mt-6 font-display text-3xl font-bold tracking-[-0.03em] text-balance sm:text-4xl"
        >
          {community.name}
        </h2>
        <p className="mt-1 text-sm font-medium text-neon-cyan">on {community.platform}</p>
        <p className="mt-4 max-w-sm text-pretty text-white/65">{community.description}</p>
      </div>
      <a
        href={community.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${community.buttonText}: ${community.name} on ${community.platform} (opens in a new tab)`}
        className="gradient-btn group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 font-display text-base font-semibold text-white shadow-[0_10px_40px_-10px_rgba(139,92,246,0.8)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_50px_-8px_rgba(236,72,153,0.7)] sm:w-fit"
      >
        {community.buttonText}
        <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </a>
    </section>
  )
}
