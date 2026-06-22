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
            <h2 className="mt-3 text-3xl font-semibold text-heading sm:text-4xl">Satış, teknik servis, bakım ve proje talepleriniz için bizimle telefon veya WhatsApp üzerinden iletişime geçebilirsiniz.</h2>
            <div className="section-divider delay-1" />
            <p className="mt-4 text-muted max-w-2xl">Hızlı hizmet, ev ve endüstriyel sistem desteği için operasyon ekibimizle doğrudan iletişim kurun.</p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="section-surface p-6 interactive-card phone-highlight">
            <p className="text-xs uppercase tracking-[0.3em] text-accent">Telefon araması</p>
            <h3 className="mt-4 text-2xl font-semibold text-heading">Bizi Arayın</h3>
            <p className="mt-3 text-muted">Ürünlerimiz, teknik servis, bakım ve proje hizmetleri hakkında bilgi almak için bizi arayın.</p>
            <a href="tel:+5541768950" className="phone-number">
              <span>📞</span>
              0554 176 89 50
            </a>
            <div className="mt-3 text-sm font-medium text-accent/90">Satış ve teknik destek ekibimize doğrudan ulaşabilirsiniz.</div>
            <div className="mt-2 text-sm text-muted">Pazartesi–Cumartesi, 09:00–19:00</div>
          </div>

          <div className="section-surface p-6 interactive-card">
            <p className="text-xs uppercase tracking-[0.3em] text-accent">WhatsApp</p>
            <h3 className="mt-4 text-xl font-semibold text-heading">WhatsApp&apos;tan Yazın</h3>
            <p className="mt-3 text-muted">Arıza bildirimi yapabilir, ürünler hakkında bilgi alabilir veya proje detaylarınızı WhatsApp üzerinden bize iletebilirsiniz.</p>
            <a href="https://wa.me/5541768950" target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-accent font-semibold glow-link">0554 176 89 50</a>
            <div className="mt-2 text-sm text-muted">Servis, satış ve teknik destek talepleriniz için hızlı dönüş sağlıyoruz.</div>
          </div>
        </div>
      </div>
    </section>
  )
}
