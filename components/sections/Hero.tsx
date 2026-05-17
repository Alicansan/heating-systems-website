'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

const slides = [
  {
    title: 'Kombi Kazanları Çalışmaya Hazır',
    description: 'Endüstriyel performans için tasarlanmış, ticari ısıtma sistemleri için optimize edilmiş ve teknik hizmet uzmanlığı ile desteklenen çözümler.',
    image: '/hero-slide-01.svg',
  },
  {
    title: 'Endüstriyel Isıtma, Tesisat ve Radyatör Çözümleri',
    description: 'Kazanı, tesisatçılık, radyatör montajları ve uzun vadeli operasyonel güvenilirlik için modern ürün ekosistemi.',
    image: '/hero-slide-02.svg',
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
          <div className="absolute inset-0 bg-brand-navy/75 backdrop-blur-sm" />
        </motion.div>
        <div className="hero-ambient" />
      </div>

      <div className="relative z-10 container grid gap-12 items-center py-16">
        <motion.div
          initial={reduce ? {} : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-accent">Endüstriyel Isıtma Sistemleri</p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight text-heading sm:text-5xl lg:text-6xl">
            Endüstriye özel premium ısıtma, tesisat ve radyatör mühendisliği.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted leading-8">
            Ölçeklenebilir kombi kazan hizmetleri, endüstriyel ısıtma sistemi tasarımı ve uzman tesisatçılık kurulumları - sağlam ve teknik yürütme ile.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a href="#catalog" className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_40px_rgba(233,90,13,0.28)] transition duration-300 button-glow focus:outline-none focus:ring-2 focus:ring-accent/40">
              Kataloğu İnceleyin
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-brand-blue bg-transparent px-6 py-3 text-sm font-semibold text-brand-blue transition duration-300 hover:bg-brand-blue/10 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-brand-blue/40">
              Telefonla İletişim
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
