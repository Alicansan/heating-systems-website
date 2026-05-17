"use client"
import { FormEvent, useState } from 'react'
import Reveal from '../animations/Reveal'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log({ name, email, company, message })
    setSent(true)
  }

  return (
    <section id="contact" className="py-20">
      <div className="container">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.3em] text-accent">İletişim</p>
            <h2 className="mt-3 text-3xl font-semibold text-heading sm:text-4xl">Telefonla veya WhatsApp aracılığıyla ekibimize ulaşın.</h2>
            <div className="section-divider delay-1" />
            <p className="mt-4 text-muted max-w-2xl">Hızlı hizmet soruşturmaları ve endüstriyel sistem desteği için operasyon ekibimizle doğrudan iletişim kurun.</p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="section-surface p-6 interactive-card phone-highlight">
            <p className="text-xs uppercase tracking-[0.3em] text-accent">Telefon araması</p>
            <h3 className="mt-4 text-2xl font-semibold text-heading">Hizmet masasını arayın</h3>
            <p className="mt-3 text-muted">Teknik koordinatörle konuşarak teklifler, tahminler ve saha değerlendirmeleri alın.</p>
            <a href="tel:+15550183240" className="phone-number">
              <span>📞</span>
              +1 (555) 018-3240
            </a>
            <div className="mt-3 text-sm font-medium text-accent/90">Telefonla İletişim size öncelikli destek sağlar.</div>
            <div className="mt-2 text-sm text-muted">Pazartesi–Cuma, 08:00–18:00</div>
          </div>

          <div className="section-surface p-6 interactive-card">
            <p className="text-xs uppercase tracking-[0.3em] text-accent">WhatsApp</p>
            <h3 className="mt-4 text-xl font-semibold text-heading">Saha ekibimize mesaj gönderin</h3>
            <p className="mt-3 text-muted">Proje detaylarını gönderin veya WhatsApp mesajı ile muayene planlayın.</p>
            <a href="https://wa.me/15550183299" target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-accent font-semibold glow-link">+1 (555) 018-3299</a>
            <div className="mt-2 text-sm text-muted">Acil endüstriyel ısıtma istekleri için hızlı destek</div>
          </div>
        </div>
      </div>
    </section>
  )
}
