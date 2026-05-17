import Link from 'next/link'

export default function PdfViewerRoot() {
  return (
    <section className="min-h-screen py-24 bg-background text-white">
      <div className="container">
        <div className="max-w-3xl rounded-3xl border border-white/10 bg-surface p-10 shadow-[0_30px_80px_rgba(0,0,0,0.25)]">
          <p className="text-xs uppercase tracking-[0.3em] text-accent">PDF Görüntüleyici</p>
          <h1 className="mt-4 text-3xl font-semibold text-heading">Proje PDF'leri için hazır</h1>
          <p className="mt-4 text-muted leading-8">
            Bu sayfa gelecekteki PDF raporları için giriş noktasıdır. Bir proje seçmek için ana sayfaya dönün ve ilgili kartın üzerine tıklayın.
          </p>
          <div className="mt-8">
            <Link href="/" className="inline-flex items-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-500">
              Ana Sayfaya Dön
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
