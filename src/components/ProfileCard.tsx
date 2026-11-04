import { useState } from 'react'
import { profile } from '@/data/profile'

function Avatar() {
  const [failed, setFailed] = useState(false)
  const showImage = Boolean(profile.image) && !failed

  return (
    <div className="relative h-36 w-36 shrink-0 sm:h-40 sm:w-40">
      <div
        aria-hidden="true"
        className="absolute -inset-6 rounded-full bg-gradient-to-br from-neon-cyan/30 via-neon-purple/30 to-neon-pink/30 blur-2xl"
      />
      <div aria-hidden="true" className="avatar-ring absolute inset-0 rounded-full" />
      <div className="absolute inset-[4px] overflow-hidden rounded-full bg-ink">
        {showImage ? (
          <img
            src={profile.image}
            alt={`${profile.name} profile`}
            className="h-full w-full object-cover"
            onError={() => setFailed(true)}
          />
        ) : (
          <div
            role="img"
            aria-label={`${profile.name} profile image placeholder`}
            className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_30%_25%,rgba(139,92,246,0.35),transparent_60%),radial-gradient(circle_at_75%_80%,rgba(34,211,238,0.25),transparent_55%)]"
          >
            <span className="gradient-text font-display text-6xl font-bold tracking-tighter">S</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default function ProfileCard() {
  return (
    <section
      aria-labelledby="profile-heading"
      className="bento fade-up flex flex-col items-center gap-7 p-8 text-center sm:p-10 lg:col-span-7 lg:flex-row lg:items-center lg:gap-10 lg:text-left"
    >
      <Avatar />
      <div className="min-w-0">
        <p className="font-display text-xs font-medium uppercase tracking-[0.18em] text-neon-cyan">
          Web3 Creator
        </p>
        <h1
          id="profile-heading"
          className="mt-2 font-display text-5xl font-bold tracking-[-0.04em] text-balance sm:text-6xl"
        >
          <span className="gradient-text">{profile.name}</span>
        </h1>
        <a
          href="https://x.com/sirserney1"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block font-display text-lg text-white/70 transition-colors hover:text-white"
        >
          {profile.handle}
        </a>
        <p className="mt-4 max-w-md text-pretty text-base leading-relaxed text-white/70 sm:text-lg">
          {profile.bio}
        </p>
        <p className="mt-4 text-xs font-medium uppercase tracking-[0.08em] text-white/40">
          {profile.role}
        </p>
      </div>
    </section>
  )
}
