'use client'
import { motion } from 'framer-motion'
import Reveal from '../animations/Reveal'

export default function LogoSlider() {
  const logos = Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    name: `Boiler Logo ${i + 1}`,
  }))

  const logoLoop = [...logos, ...logos]

  return (
    <section className="py-20 bg-gradient-to-b from-transparent via-brand-navy/5 to-transparent">
      <div className="container">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.3em] text-accent">Güvenilen Markalar</p>
            <h2 className="mt-3 text-3xl font-semibold text-heading sm:text-4xl">Endüstri lideri kazan ve ısıtma sistemleri</h2>
            <div className="section-divider delay-1" />
            <p className="mt-4 text-muted max-w-2xl">Dünya çapında bilinen ve güvenilen ısıtma teknolojileri ile çalışıyoruz.</p>
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
                className="flex-shrink-0 min-w-[16rem] rounded-3xl border border-white/10 bg-white/5 p-6 flex items-center justify-center"
                whileHover={{ y: -4 }}
              >
                <div className="w-full h-full flex flex-col items-center justify-center gap-3">
                  <div className="w-full h-full rounded-3xl border border-dashed border-white/20 bg-white/5 flex items-center justify-center p-6 text-center text-white/40">
                    <span>{logo.name}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
