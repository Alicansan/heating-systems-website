import Hero from '../components/sections/Hero'
import Services from '../components/sections/Services'
import About from '../components/sections/About'
import Showcase from '../components/sections/Showcase'
import CatalogSection from '../components/sections/CatalogSection'
import Contact from '../components/sections/Contact'

export default function Page() {
  return (
    <main className="bg-background text-white">
      <Hero />
      <Services />
      <About />
      <Showcase />
      <CatalogSection />
      <Contact />
    </main>
  )
}
