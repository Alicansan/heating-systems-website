import Reveal from '../animations/Reveal'
import CatalogViewer from '../catalog/CatalogViewer'

export default function CatalogSection() {
  return (
    <section id="catalog" className="py-20">
      <div className="container">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.3em] text-accent">Katalog</p>
            <h2 className="mt-3 text-3xl font-semibold text-heading sm:text-4xl">Tam ürün portfölyümüzü inceleyin.</h2>
            <div className="section-divider delay-1" />
            <p className="mt-4 text-muted max-w-2xl">Akıllı endüstriyel katalog deneyimi ile kazanlar, radyatörler, hidrolikler ve kontroller arasında arama yapın.</p>
          </div>
        </Reveal>

        <div className="mt-8">
          <CatalogViewer full />
        </div>
      </div>
    </section>
  )
}
