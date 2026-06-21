'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Reveal from '../animations/Reveal'

export default function LogoSlider() {
  const logos = Array.from({ length: 7 }, (_, i) => ({
    id: i + 1,
    name: `Boiler Logo ${i + 1}`,
    src: `/logos/${i + 1}.png`,
  })).filter(logo => logo.id !== 5)
    .map((logo, idx) => ({ ...logo, id: idx + 1 }))

  const logoLoop = [...logos, ...logos]

  return (
    <section className="py-20 bg-linear-to-b from-transparent via-brand-navy/5 to-transparent">
      <div className="container">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.3em] text-accent">Güvenilen Markalar</p>
            <h2 className="mt-3 text-3xl font-semibold text-heading sm:text-4xl">Güvenilir Markalar</h2>
            <div className="section-divider delay-1" />
            <p className="mt-4 text-muted max-w-2xl">Kalitesini kanıtlamış yerli ve yabancı markalarla çalışıyor, güvenilir ürünleri müşterilerimizle buluşturuyoruz.</p>
          </div>
        </Reveal>

        <div className="mt-12 overflow-hidden">
          <motion.div
            className="flex gap-6 px-4 -mx-4"
            initial={{ x: '0%' }}
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 32, ease: 'linear', repeat: Infinity }}
          >
            {logoLoop.map((logo, index) => (
              <motion.div
                key={`${logo.id}-${index}`}
                className="shrink-0 min-w-[16rem] rounded-3xl border border-white/10 bg-white/5 p-6 flex items-center justify-center"
                whileHover={{ y: -4 }}
              >
                <div className="w-full h-32 relative flex items-center justify-center">
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
