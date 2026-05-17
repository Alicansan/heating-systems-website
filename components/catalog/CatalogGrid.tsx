'use client'
import React from 'react'
import ProductCard from './ProductCard'
import { Product } from '../../types/product'

type Props = { items: Product[]; full?: boolean; onOpen?: (p: Product) => void }

export default function CatalogGrid({ items, full = false, onOpen }: Props) {
  return (
    <div className={`grid gap-4 ${full ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1 sm:grid-cols-2'}`}>
      {items.map((p) => (
        <ProductCard key={p.id} product={p} onOpen={() => onOpen?.(p)} />
      ))}
    </div>
  )
}
