import Reveal from '../animations/Reveal'
import CatalogViewer from '../catalog/CatalogViewer'

export default function Showcase() {
  return (
    <section id="showcase" className="py-20">
      <div className="container">
        <Reveal>
          <div>
            <h2 className="text-2xl font-semibold">Ürün Vitrini</h2>
            <div className="section-divider delay-1" />
            <p className="mt-2 text-muted">Satışını gerçekleştirdiğimiz ürün gruplarından bazılarını inceleyebilirsiniz.</p>
          </div>
        </Reveal>
        <div className="mt-6">
          <CatalogViewer />
        </div>
      </div>
    </section>
  )
}
