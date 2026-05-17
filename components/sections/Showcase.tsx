import Reveal from '../animations/Reveal'
import CatalogViewer from '../catalog/CatalogViewer'

export default function Showcase() {
  return (
    <section id="showcase" className="py-20">
      <div className="container">
        <Reveal>
          <div>
            <h2 className="text-2xl font-semibold">Ürün Vitrin</h2>
            <p className="mt-2 text-muted">Vurgulanan ekipman ve çözümler.</p>
          </div>
        </Reveal>
        <div className="mt-6">
          <CatalogViewer />
        </div>
      </div>
    </section>
  )
}
