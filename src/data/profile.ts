/**
 * SIRNEY: all editable site content lives in this file.
 * Change a value here and the whole site updates. No other file needs touching
 * for routine edits (links, bio, profile image, new cards).
 */

export type SocialIcon = 'x' | 'telegram' | 'github' | 'discord'
export type SectionIcon = 'research' | 'writing' | 'builds' | 'community'

export interface Profile {
  name: string
  handle: string
  role: string
  bio: string
  /** Path to your photo, e.g. '/profile.jpg' (put the file in /public). Leave empty for the placeholder. */
  image: string
  siteUrl: string
}

export interface SocialLink {
  id: string
  label: string
  /** Text shown under the label. */
  detail: string
  icon: SocialIcon
  /** Opens in a new tab. */
  href?: string
  /** If set (and no href), the card copies this value instead. */
  copyValue?: string
}

export interface ContentItem {
  title: string
  description: string
  href?: string
  tag?: string
}

export interface ContentSection {
  id: string
  title: string
  description: string
  icon: SectionIcon
  /** Add real entries here. While empty, an "Coming soon" placeholder is shown. */
  items: ContentItem[]
}

export const profile: Profile = {
  name: 'SIRNEY',
  handle: '@sirserney1',
  role: 'Web3 Creator · Researcher · Community Contributor · Builder',
  bio: 'Exploring Web3, researching what matters, creating content, and building things for communities.',
  image: '',
  siteUrl: 'https://sirney-bio.vercel.app',
}

export const socials: SocialLink[] = [
  {
    id: 'x',
    label: 'X',
    detail: '@sirserney1',
    icon: 'x',
    href: 'https://x.com/sirserney1',
  },
  {
    id: 'telegram',
    label: 'Telegram',
    detail: '@saniaminu01',
    icon: 'telegram',
    href: 'https://t.me/saniaminu01',
  },
  {
    id: 'github',
    label: 'GitHub',
    detail: 'saniaminu01',
    icon: 'github',
    href: 'https://github.com/saniaminu01',
  },
  {
    id: 'discord',
    label: 'Discord',
    detail: 'saniaminu01',
    icon: 'discord',
    // No profile URL is published, so this card copies the username instead.
    copyValue: 'saniaminu01',
  },
]

export const community = {
  name: 'CryptoSquadDAO',
  platform: 'Telegram',
  description: 'A Web3 community where members learn, share research and build together.',
  buttonText: 'Join Community',
  href: 'https://t.me/CryptoSquadDAO',
}

export const sections: ContentSection[] = [
  {
    id: 'research',
    title: 'Featured Research',
    description: 'Deep dives and findings on the projects and ideas that matter.',
    icon: 'research',
    items: [],
  },
  {
    id: 'writing',
    title: 'Articles & Writing',
    description: 'Threads, guides and long-form posts.',
    icon: 'writing',
    items: [],
  },
  {
    id: 'builds',
    title: 'Projects & Builds',
    description: 'Tools and experiments built for the community.',
    icon: 'builds',
    items: [],
  },
  {
    id: 'contributions',
    title: 'Community Contributions',
    description: 'Ways I help communities grow and thrive.',
    icon: 'community',
    items: [],
  },
]

export const footerText = 'Built by Sirney.'
