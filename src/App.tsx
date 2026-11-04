import Background from '@/components/Background'
import CommunityCard from '@/components/CommunityCard'
import ContentSection from '@/components/ContentSection'
import Footer from '@/components/Footer'
import ProfileCard from '@/components/ProfileCard'
import SocialCard from '@/components/SocialCard'
import { sections, socials } from '@/data/profile'

export default function App() {
  return (
    <>
      <Background />
      <a
        href="#main"
        className="sr-only z-[60] rounded-full bg-white px-4 py-2 font-medium text-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <main id="main" className="mx-auto w-full max-w-5xl px-4 pb-6 pt-8 sm:px-6 sm:pt-14">
        <div className="grid gap-4 lg:grid-cols-12 lg:gap-5">
          <ProfileCard />
          <CommunityCard />
        </div>

        <section aria-label="Social links" className="mt-4 lg:mt-5">
          <ul className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-5">
            {socials.map((link, i) => (
              <li key={link.id} className="flex flex-col">
                <SocialCard link={link} index={i} />
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-4 grid gap-4 md:grid-cols-2 lg:mt-5 lg:gap-5">
          {sections.map((section, i) => (
            <ContentSection key={section.id} section={section} index={i} />
          ))}
        </div>

        <Footer />
      </main>
    </>
  )
}
