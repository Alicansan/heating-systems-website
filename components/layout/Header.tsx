"use client"
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-20 w-full border-b border-white/10 bg-surface/90 backdrop-blur-xl py-4">
      <div className="container flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-1">
          <Link href="/" className="text-xl font-semibold transition hover:text-accent hover:-translate-y-0.5" aria-label="Anasayfa">
            KOREVİZYON
          </Link>
          <div className="text-sm text-muted">Basınevleri Mah. Selçuklu Cad. 61/A, 06400 Keçiören/Ankara</div>
          <div className="text-sm font-semibold text-accent">554 176 89 50</div>
        </div>

        <nav className="w-full md:w-auto">
          <button
            className="md:hidden absolute top-0 right-0 px-5 py-3 border border-white/10 rounded-lg text-sm transition hover:-translate-y-0.5 hover:border-accent hover:text-heading focus:outline-none focus:ring-2 focus:ring-accent/50"
            aria-expanded={open}
            aria-controls="main-navigation"
            onClick={() => setOpen((v) => !v)}
          >
            

          </button>

          <ul id="main-navigation" className={`md:flex md:items-center md:gap-6 text-sm text-muted ${open ? 'block mt-3' : 'hidden'}`}>
            <li>
              <a href="#services" onClick={() => setOpen(false)} className="block py-2 md:py-0 transition hover:text-heading hover:-translate-y-0.5">Hizmetler</a>
            </li>
            <li>
              <a href="#showcase" onClick={() => setOpen(false)} className="block py-2 md:py-0 transition hover:text-heading hover:-translate-y-0.5">Ürünler</a>
            </li>
            <li>
              <a href="#catalog" onClick={() => setOpen(false)} className="block py-2 md:py-0 transition hover:text-heading hover:-translate-y-0.5">Katalog</a>
            </li>
            <li>
              <a href="#contact" onClick={() => setOpen(false)} className="block py-2 md:py-0 transition hover:text-heading hover:-translate-y-0.5">İletişim</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
