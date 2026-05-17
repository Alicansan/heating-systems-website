export default function Footer() {
  return (
    <footer className="w-full py-10">
      <div className="container text-sm text-muted">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <div>© {new Date().getFullYear()} Isıtma Sistemleri A.Ş. Tüm Hakları Saklıdır.</div>
          <div>Endüstriyel ve ticari projeler için tasarlanmıştır</div>
        </div>
      </div>
    </footer>
  )
}
