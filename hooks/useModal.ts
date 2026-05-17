'use client'
import { useState } from 'react'

export default function useModal() {
  const [open, setOpen] = useState(false)
  return { open, setOpen, openModal: () => setOpen(true), closeModal: () => setOpen(false) }
}
