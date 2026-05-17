'use client'
import React from 'react'
import { Product } from '../../types/product'

export default function ProductCard({ product, onOpen }: { product: Product; onOpen?: () => void }) {
  return (
    <article
      className="p-4 bg-surface rounded-3xl border border-white/10 shadow-sm cursor-pointer transition duration-300 interactive-card focus:outline-none focus:ring-2 focus:ring-accent/30"
      onClick={onOpen}
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          onOpen?.()
        }
      }}
    >
      <div className="flex items-start gap-4">
        <div className="w-20 h-20 bg-muted/20 rounded-2xl flex items-center justify-center text-sm text-muted">Img</div>
        <div>
          <h3 className="font-medium text-heading">{product.name}</h3>
          <p className="mt-1 text-sm text-muted">{product.short}</p>
        </div>
      </div>
    </article>
  )
}
