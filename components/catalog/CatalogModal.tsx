'use client'
import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function CatalogModal({ open, onClose, children }: { open: boolean; onClose: () => void; children: React.ReactNode }) {
  useEffect(() => {
    if (!open) return
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
          <motion.div
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="relative z-10 w-full max-w-3xl rounded-3xl border border-white/10 bg-surface p-8 shadow-[0_30px_80px_rgba(0,0,0,0.32)]"
          >
            <button type="button" className="absolute top-5 right-5 text-sm text-muted" onClick={onClose}>
              Kapat
            </button>
            {children}
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>
  )
}
