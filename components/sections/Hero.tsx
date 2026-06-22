'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

const slides = [
  {
    title: 'Kombi Kazanları Çalışmaya Hazır',
    description: 'Endüstriyel performans için tasarlanmış, ticari ısıtma sistemleri için optimize edilmiş ve teknik hizmet uzmanlığı ile desteklenen çözümler.',
    image: '/kombi.jpg',
  },
  {
    title: 'Kombi, Endüstriyel Isıtma, Tesisat ve Radyatör Çözümleri',
    description: 'Kombi, Isı Pompası, tesisatçılık, radyatör montajları ve uzun vadeli operasyonel güvenilirlik için modern ürün ekosistemi.',
    image: '/kombi (4).jpg',
  },
  {
    title: 'Kombi, Endüstriyel Isıtma, Tesisat ve Radyatör Çözümleri',
    description: 'Kombi, Isı Pompası, tesisatçılık, radyatör montajları ve uzun vadeli operasyonel güvenilirlik için modern ürün ekosistemi.',
    image: '/kombi (2).jpg',
  },
]

export default function Hero() {
  const reduce = useReducedMotion()
  const [active, setActive] = useState(0)
  const [offsetY, setOffsetY] = useState(0)

  useEffect(() => {
    if (reduce) return
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length)
    }, 6000)
    return () => window.clearInterval(timer)
  }, [reduce])

  useEffect(() => {
    if (reduce) return
    const handleScroll = () => {
      setOffsetY(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [reduce])

  const slide = slides[active]

  return (
    <section id="hero" className="relative min-h-[92vh] overflow-hidden py-20">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div className="absolute inset-0 hero-parallax-layer" style={{ y: reduce ? 0 : offsetY * 0.08 }}>
          <Image src={slide.image} alt={slide.title} priority fill className="object-cover" />
          <div className="absolute inset-0 bg-brand-navy/85 backdrop-blur-sm" />
        </motion.div>
        <div className="hero-ambient" />
      </div>

      <div className="relative z-10 container grid gap-10 items-center py-16">
        <motion.div
          initial={reduce ? {} : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <p className=" text-xl drop-shadow-[0_2px_2px_rgba(0,0,0,1)] sm:text-4xl uppercase tracking-[0.3em] text-white text-outline">Evsel ve Endüstriyel Isıtma Sistemleri</p>
          <h1 className=" mt-4 text-4xl font-semibold leading-tight text-heading sm:text-5xl lg:text-6xl drop-shadow-[0_2px_2px_rgba(255,255,255,0.6)]">
            Sıfır ve revizyonlu kombi satışından doğalgaz proje uygulamalarına, endüstriyel ısıtma sistemlerinden yedek parça teminine kadar tüm ihtiyaçlarınız için profesyonel çözümler sunuyoruz.
          </h1>
          

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
  href="#contact"
  className="bg-orange-400 !text-white hover:!text-black inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold shadow-[0_16px_50px_rgba(255,255,255,0.2)] transition duration-300 hover:bg-white/90 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-white/40"
>
  Telefonla İletişim
</a>
            <a href="#catalog" className="inline-flex bg-gray-200 items-center justify-center rounded-full border border-brand-blue bg-brand-blue/10 px-6 py-3 text-sm font-semibold text-brand-blue transition duration-300 hover:bg-brand-blue/20 hover:text-white focus:outline-none focus:ring-2 focus:ring-brand-blue/40">
              Kataloğu İnceleyin
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
