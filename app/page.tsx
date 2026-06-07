import Hero from '../components/sections/Hero'
import Services from '../components/sections/Services'
import About from '../components/sections/About'
import Showcase from '../components/sections/Showcase'
import LogoSlider from '../components/sections/LogoSlider'
import CatalogSection from '../components/sections/CatalogSection'
import Contact from '../components/sections/Contact'

export default function Page() {
  return (
    <main className="bg-background text-text">
      <Hero />
      <Services />
      <About />
      <Showcase />
      <LogoSlider />
      <CatalogSection />
      <Contact />
    </main>
  )
}
