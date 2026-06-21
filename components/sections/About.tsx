import Reveal from '../animations/Reveal'

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container">
        <Reveal>
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-accent">Hakkımızda</p>
              <h2 className="mt-3 text-3xl font-semibold text-heading sm:text-4xl">Isıtma Sistemlerinde Güvenilir Çözüm Ortağınız</h2>
              <div className="section-divider delay-1" />
              <p className="mt-5 text-muted max-w-2xl leading-8">Yılların sektör deneyimiyle evsel ve endüstriyel ısıtma sistemlerinde güvenilir çözümler sunuyoruz. Kombi, kazan, radyatör ve doğalgaz sistemlerinin satışından montajına, bakımından revizyonuna kadar tüm süreçlerde kaliteli hizmet anlayışıyla çalışıyoruz. Ayrıca ihtiyaç duyulan yedek parçaları güvenilir markalarla müşterilerimize ulaştırıyoruz.</p>
            </div>

            <div className="section-surface p-8 interactive-card">
              <div className="text-muted text-sm uppercase tracking-[0.2em]">Yetenekler</div>
              <ul className="mt-6 space-y-4 text-sm leading-7 text-black-200">
                <li>Doğalgaz proje ve uygulama hizmetleri</li>
                <li>Kombi ve kazan satış, bakım ve revizyonu</li>
                <li>Endüstriyel ısıtma sistemleri kurulumu</li>
                <li>Orijinal ve revizyonlu yedek parça temini</li>
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
