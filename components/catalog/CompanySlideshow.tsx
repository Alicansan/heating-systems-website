'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CompanySlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState(0)

  // Empty slideshow items - can be filled with company projects/installations
  const slides = [
    {
      id: 1,
      title: 'Proje 1',
      description: 'Endüstriyel ısıtma sistemi kurulumu',
      company: 'Şirket A',
    },
    {
      id: 2,
      title: 'Proje 2',
      description: 'Büyük ölçekli kazan sistemleri',
      company: 'Şirket B',
    },
    {
      id: 3,
      title: 'Proje 3',
      description: 'Doğalgaz Tesisatı ve Kombi Kurulumu',
      company: 'Şirket C',
    },
    {
      id: 4,
      title: 'Proje 4',
      description: 'Merkezi Isıtma Sistemi Kurulumu',
      company: 'Şirket D',
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [slides.length])

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setCurrentSlide((prev) => (prev + newDirection + slides.length) % slides.length)
  }

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  const slide = slides[currentSlide]

  return (
    <div className="relative w-full h-96 bg-linear-to-br from-brand-navy/40 to-transparent rounded-3xl overflow-hidden border border-white/10">
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <Link href={`/pdf-viewer/${slide.id}`} className="absolute inset-0 block">
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.5 },
            }}
            className="absolute inset-0 flex flex-col justify-center p-8 cursor-pointer group"
          >
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.3em] text-accent">
                {slide.company}
              </p>
              <h3 className="text-4xl font-semibold text-heading group-hover:text-accent transition">
                {slide.title}
              </h3>
              <p className="text-lg text-muted max-w-md">
                {slide.description}
              </p>
            </div>

            <div className="mt-8 inline-flex items-center gap-2 text-accent font-semibold group-hover:gap-3 transition">
              Katalogumuzu Görüntüleyin
              <span>→</span>
            </div>
          </motion.div>
        </Link>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button
        onClick={() => paginate(-1)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
      >
        ←
      </button>
      <button
        onClick={() => paginate(1)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
      >
        →
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > currentSlide ? 1 : -1)
              setCurrentSlide(i)
            }}
            className={`h-2 rounded-full transition ${
              i === currentSlide ? 'bg-accent w-8' : 'bg-white/30 w-2'
            }`}
          />
        ))}
      </div>

      {/* Click Hint */}
      <div className="absolute top-4 right-4 text-xs text-muted/60 pointer-events-none">
        PDF&apos;yi açmak için tıklayın
      </div>
    </div>
  )
}
