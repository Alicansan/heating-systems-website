import Reveal from '../animations/Reveal'

const services = [
  {
    title: 'Kombi kazan sistemleri',
    description: 'Ticari ve yerleşim alanlarında ısıtma tesisatı için akıllı kontroller ile verimli ısı aktarımı.',
  },
  {
    title: 'Endüstriyel ısıtma tasarımı',
    description: 'İmalat tesisleri, depolar ve ağır endüstri için özel mühendislik yapı sistemleri.',
  },
  {
    title: 'Radyatör montajları',
    description: 'Hassas radyatör yerleştirilmesi ve hidrolik dengeleme ile kararlı performans.',
  },
  {
    title: 'Tesisatçılık sistemleri',
    description: 'Dayanıklı boru hatları, su işlemesi ve hizmet yapısı tesisatçılık altyapısı.',
  },
  {
    title: 'Preventif bakım',
    description: 'Güvenilir muayene, tanı ve sürekli çalışma güvencesi için servis planlama.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20">
      <div className="container">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.3em] text-accent">Services</p>
            <h2 className="mt-3 text-3xl font-semibold text-heading sm:text-4xl">Technical heating and plumbing services for industry.</h2>
            <p className="mt-4 text-muted max-w-2xl">We combine professional engineering, industrial-scale reliability, and field-tested installation practices.</p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Reveal key={service.title} className="delay-100">
              <div className="section-surface p-6 h-full">
                <div className="text-accent text-sm uppercase tracking-[0.2em]">Hizmet</div>
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
