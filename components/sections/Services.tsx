import Reveal from '../animations/Reveal'

const services = [
  {
    title: 'Kombi ve Kazan Sistemleri',
    description: 'Sıfır ve revizyonlu kombi satışı, kazan sistemleri kurulumu, bakım ve teknik servis hizmetleri.',
  },
  {
    title: 'Endüstriyel Isıtma Sistemleri',
    description: 'Fabrika, depo, atölye ve ticari yapılara özel ısıtma sistemi projelendirme ve uygulama hizmetleri.',
  },
  {
    title: 'Radyatör ve Isıtma Tesisatı',
    description: 'Panel radyatör montajı, tesisat yenileme ve verimli ısı dağılımı için profesyonel uygulamalar.',
  },
  {
    title: 'Doğalgaz ve Mekanik Tesisat',
    description: 'Doğalgaz tesisatı, mekanik tesisat kurulumu, borulama ve sistem revizyonu hizmetleri.',
  },
  {
    title: 'Bakım ve Teknik Servis',
    description: 'Periyodik bakım, arıza tespiti, kombi revizyonu ve teknik servis desteği.',
  },
  {
    title: 'Garantili Revizyon ve Teknik Destek',
    description: 'Bünyemizde gerçekleştirilen revizyon işlemlerine 1 yıl garanti ve kesintisiz teknik destek hizmeti sunuyoruz.',
  }
  
]

export default function Services() {
  return (
    <section id="services" className="py-20">
      <div className="container">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.3em] text-accent">Hizmetlerimiz</p>
            <h2 className="mt-3 text-3xl font-semibold text-heading sm:text-4xl">Evsel ve endüstriyel ısıtma sistemlerinde satış, montaj, bakım ve teknik destek hizmetlerini uzman ekibimizle sunuyoruz.</h2>
            <div className="section-divider delay-1" />
            <p className="mt-4 text-muted max-w-2xl">Evsel ve endüstriyel ısıtma sistemlerinde satış, montaj, bakım ve teknik destek hizmetlerini uzman ekibimizle sunuyoruz.</p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Reveal key={service.title} delay={0.05} className="delay-100">
              <div className="section-surface p-6 h-full interactive-card">
                <div className="text-accent text-sm uppercase tracking-[0.2em]"></div>
                <h3 className="mt-4 text-xl font-semibold text-heading">{service.title}</h3>
                <p className="mt-3 text-muted text-sm leading-7">{service.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
