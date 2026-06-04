export default function Footer() {
  return (
    <footer className="w-full py-10">
      <div className="container text-sm text-muted">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <div>© {new Date().getFullYear()} Korevizyon  Tüm Hakları Saklıdır.</div>
          <div>Basınevleri Mah. Selçuklu Cad. 61/A, 06400 Keçiören/Ankara</div>
        </div>
      </div>
    </footer>
  )
}
