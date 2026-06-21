import Reveal from '../animations/Reveal'
import CompanySlideshow from '../catalog/CompanySlideshow'

export default function CatalogSection() {
  return (
    <section id="catalog" className="py-20">
      <div className="container">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.3em] text-accent">Proje Başarıları</p>
            <h2 className="mt-3 text-3xl font-semibold text-heading sm:text-4xl">Tamamlanan Projeler</h2>
            <div className="section-divider delay-1" />
            <p className="mt-4 text-muted max-w-2xl">Tamamladığımız doğalgaz, mekanik tesisat ve ısıtma sistemi projelerinden örnekler.</p>
          </div>
        </Reveal>

        <div className="mt-8">
          <CompanySlideshow />
        </div>
      </div>
    </section>
  )
}
