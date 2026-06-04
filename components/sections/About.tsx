import Reveal from '../animations/Reveal'

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container">
        <Reveal>
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-accent">Hakkımızda</p>
              <h2 className="mt-3 text-3xl font-semibold text-heading sm:text-4xl">Hassas endüstriyel kurulumlar aracılığıyla güven mühendisliği.</h2>
              <div className="section-divider delay-1" />
              <p className="mt-5 text-muted max-w-2xl leading-8">Ticari ve endüstriyel müşterilerle işbirliği yaparak uzun vadeli güvenilirlik ve enerji verimliliği için tasarlanmış sağlam ısıtma, kazan ve tesisatçılık altyapısı sağlıyoruz.</p>
            </div>

            <div className="section-surface p-8 interactive-card">
              <div className="text-muted text-sm uppercase tracking-[0.2em]">Yetenekler</div>
              <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-200">
                <li>Endüstriyel ısıtma sistemi planlama ve danışmanlık</li>
                <li>Mühendislik dokümantasyonu ve düzenleyici uyum</li>
                <li>Koruyucu bakım ile desteklenen saha kurulumu</li>
                <li>Yüksek özellikli ekipman kaynak ve sistem tedariği</li>
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
