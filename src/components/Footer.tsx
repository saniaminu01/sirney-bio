import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import { footerText } from '@/data/profile'

export default function Footer() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 480)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toTop = () => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })
  }

  return (
    <>
      <footer className="mt-14 border-t border-white/[0.07] py-8 text-center text-sm text-white/45">
        {footerText}
      </footer>
      <button
        type="button"
        onClick={toTop}
        aria-label="Back to top"
        tabIndex={showTop ? 0 : -1}
        aria-hidden={!showTop}
        className={`fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-ink/80 text-white backdrop-blur transition-all duration-300 hover:border-neon-purple/60 hover:shadow-[0_0_30px_-4px_rgba(139,92,246,0.7)] ${
          showTop ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
        }`}
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </>
  )
}
