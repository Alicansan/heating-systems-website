'use client'
import React, { useMemo, useState } from 'react'
import sample from '../../data/products/sample.json'
import CatalogGrid from './CatalogGrid'
import CatalogModal from './CatalogModal'
import ProductDetail from './ProductDetail'
import { Product } from '../../types/product'

export default function CatalogViewer({ full = false }: { full?: boolean }) {
  const items: Product[] = sample.products || []
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState<Product | null>(null)

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return items
    return items.filter((p) => p.name.toLowerCase().includes(q) || (p.short || '').toLowerCase().includes(q) || (p.sku || '').toLowerCase().includes(q))
  }, [items, query])

  return (
    <div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center mb-4">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ürünlerde ara"
          className="p-3 input-glow rounded-2xl w-full sm:flex-1"
        />
        <button
          onClick={() => setQuery('')}
          className="px-4 py-3 button-glow rounded-2xl bg-accent text-white font-semibold hover:bg-accent/90 transition focus:outline-none focus:ring-2 focus:ring-accent/40"
        >
          Temizle
        </button>
      </div>

      <CatalogGrid items={filtered} full={full} onOpen={(p) => setSelected(p)} />

      <CatalogModal open={!!selected} onClose={() => setSelected(null)}>
        <ProductDetail product={selected} />
      </CatalogModal>
    </div>
  )
}
