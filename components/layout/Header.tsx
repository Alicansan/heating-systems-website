"use client"
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="w-full py-4 bg-transparent">
      <div className="container flex items-center justify-between gap-6">
        <Link href="/" className="text-xl font-semibold transition hover:text-accent hover:-translate-y-0.5" aria-label="Anasayfa">
          Isıtma Sistemleri A.Ş.
        </Link>

        <nav>
          <button
            className="md:hidden px-3 py-2 border border-white/10 rounded-lg text-sm transition hover:-translate-y-0.5 hover:border-accent hover:text-heading focus:outline-none focus:ring-2 focus:ring-accent/50"
            aria-expanded={open}
            aria-controls="main-navigation"
            onClick={() => setOpen((v) => !v)}
          >
            Menü
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
