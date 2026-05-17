import Link from 'next/link'
import { existsSync } from 'fs'
import { join } from 'path'

type Params = {
  params: {
    id: string
  }
}

export default function PdfViewerPage({ params }: Params) {
  const pdfFile = `project-${params.id}.pdf`
  const pdfPath = `/pdfs/${pdfFile}`
  const pdfAbsolutePath = join(process.cwd(), 'public', 'pdfs', pdfFile)
  const fileExists = existsSync(pdfAbsolutePath)

  return (
    <section className="min-h-screen py-24 bg-background text-white">
      <div className="container">
        <div className="max-w-5xl rounded-3xl border border-white/10 bg-surface p-10 shadow-[0_30px_80px_rgba(0,0,0,0.25)]">
          <p className="text-xs uppercase tracking-[0.3em] text-accent">PDF Raporu</p>
          <h1 className="mt-4 text-3xl font-semibold text-heading">{`Proje ${params.id} PDF Görüntüleyici`}</h1>
          <p className="mt-4 text-muted leading-8">
            Bu proje için PDF burada görünür. Bir PDF dosyası yüklemek için `public/pdfs/{pdfFile}` yolunu kullanın.
          </p>

          {fileExists ? (
            <div className="mt-10 min-h-[60vh] overflow-hidden rounded-3xl border border-white/10 bg-black">
              <iframe src={pdfPath} title={`PDF ${params.id}`} className="w-full min-h-[60vh]" />
            </div>
          ) : (
            <div className="mt-10 rounded-3xl border border-dashed border-white/20 bg-white/5 p-10 text-center text-muted">
              <p className="text-lg font-medium text-white/90">PDF dosyası henüz eklenmedi.</p>
              <p className="mt-3">Lütfen dosyayı `public/pdfs/{pdfFile}` konumuna yerleştirin.</p>
            </div>
          )}

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <Link href="/" className="inline-flex items-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-500">
              Ana Sayfaya Dön
            </Link>
            <div className="text-sm text-muted">PDF altyapısı hazır. Dosya eklemek için `public/pdfs/` klasörünü kullanın.</div>
          </div>
        </div>
      </div>
    </section>
  )
}
