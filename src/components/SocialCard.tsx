import { useEffect, useRef, useState, type ReactNode } from 'react'
import { ArrowUpRight, Check, Copy } from 'lucide-react'
import type { SocialIcon, SocialLink } from '@/data/profile'
import { DiscordIcon, GitHubIcon, TelegramIcon, XIcon } from './icons'

const icons: Record<SocialIcon, typeof XIcon> = {
  x: XIcon,
  telegram: TelegramIcon,
  github: GitHubIcon,
  discord: DiscordIcon,
}

const accents: Record<SocialIcon, string> = {
  x: 'text-white',
  telegram: 'text-sky-400',
  github: 'text-white',
  discord: 'text-indigo-400',
}

async function copyText(value: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(value)
    return true
  } catch {
    // Fallback for browsers or contexts where the Clipboard API is unavailable.
    const el = document.createElement('textarea')
    el.value = value
    el.setAttribute('readonly', '')
    el.style.position = 'fixed'
    el.style.opacity = '0'
    document.body.appendChild(el)
    el.select()
    let ok = false
    try {
      ok = document.execCommand('copy')
    } catch {
      ok = false
    }
    document.body.removeChild(el)
    return ok
  }
}

const cardClass =
  'bento bento-hover group flex min-h-[8.5rem] flex-col justify-between p-5 text-left w-full'

export default function SocialCard({ link, index }: { link: SocialLink; index: number }) {
  const Icon = icons[link.icon]
  const [status, setStatus] = useState<'idle' | 'copied' | 'failed'>('idle')
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  useEffect(() => () => clearTimeout(timer.current), [])

  const style = { animationDelay: `${120 + index * 80}ms` }

  const inner = (action: ReactNode) => (
    <>
      <div className="flex items-start justify-between">
        <span
          className={`flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] ${accents[link.icon]}`}
        >
          <Icon className="h-5 w-5" />
        </span>
        {action}
      </div>
      <div>
        <p className="font-display text-lg font-semibold tracking-tight">{link.label}</p>
        <p className="mt-0.5 truncate text-sm text-white/55">{link.detail}</p>
      </div>
    </>
  )

  if (link.href) {
    return (
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${link.label}: ${link.detail} (opens in a new tab)`}
        className={`${cardClass} fade-up`}
        style={style}
      >
        {inner(
          <ArrowUpRight className="h-5 w-5 text-white/40 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-neon-cyan" />,
        )}
      </a>
    )
  }

  const value = link.copyValue ?? ''
  const handleCopy = async () => {
    const ok = await copyText(value)
    setStatus(ok ? 'copied' : 'failed')
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setStatus('idle'), 2200)
  }

  return (
    <div className="fade-up" style={style}>
      <button
        type="button"
        onClick={() => void handleCopy()}
        aria-label={`Copy ${link.label} username ${value}`}
        className={cardClass}
      >
        {inner(
          <span
            className={`flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium transition-colors ${
              status === 'copied'
                ? 'border-emerald-400/40 bg-emerald-400/10 text-emerald-300'
                : status === 'failed'
                  ? 'border-red-400/40 bg-red-400/10 text-red-300'
                  : 'border-white/10 bg-white/[0.04] text-white/70 group-hover:border-neon-purple/50 group-hover:text-white'
            }`}
          >
            {status === 'copied' ? (
              <Check className="h-3.5 w-3.5" />
            ) : (
              <Copy className="h-3.5 w-3.5" />
            )}
            {status === 'copied' ? 'Copied' : status === 'failed' ? 'Copy failed' : 'Copy username'}
          </span>,
        )}
      </button>
      <span role="status" aria-live="polite" className="sr-only">
        {status === 'copied' ? `${link.label} username copied to clipboard` : ''}
        {status === 'failed' ? `Could not copy. Username is ${value}` : ''}
      </span>
    </div>
  )
}
