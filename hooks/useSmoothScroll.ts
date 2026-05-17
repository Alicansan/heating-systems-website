'use client'
import { useEffect } from 'react'

export default function useSmoothScroll() {
  useEffect(() => {
    if (typeof window === 'undefined') return
    document.documentElement.style.scrollBehavior = 'smooth'
    return () => {
      document.documentElement.style.scrollBehavior = ''
    }
  }, [])
}
