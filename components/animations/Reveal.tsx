'use client'
import { motion, useReducedMotion } from 'framer-motion'
import { type PropsWithChildren } from 'react'

export default function Reveal({ children, className = '' }: PropsWithChildren<{ className?: string }>) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={reduce ? {} : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  )
}
