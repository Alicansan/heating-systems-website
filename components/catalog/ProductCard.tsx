'use client'
import React from 'react'
import { Product } from '../../types/product'

export default function ProductCard({ product, onOpen }: { product: Product; onOpen?: () => void }) {
  return (
    <article className="p-4 bg-surface rounded-md cursor-pointer" onClick={onOpen}>
      <div className="flex items-start gap-4">
        <div className="w-20 h-20 bg-muted rounded-md flex items-center justify-center text-sm">Img</div>
        <div>
          <h3 className="font-medium">{product.name}</h3>
          <p className="text-sm text-muted">{product.short}</p>
        </div>
      </div>
    </article>
  )
}
