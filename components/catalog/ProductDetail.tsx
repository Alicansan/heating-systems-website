'use client'
import React from 'react'
import { Product } from '../../types/product'

export default function ProductDetail({ product }: { product: Product | null }) {
  if (!product) return null
  return (
    <div>
      <div className="flex items-center gap-6">
        <div className="w-36 h-36 bg-muted rounded-md flex items-center justify-center">Img</div>
        <div>
          <h3 className="text-xl font-semibold">{product.name}</h3>
          <p className="text-sm text-muted">SKU: {product.sku}</p>
        </div>
      </div>
      <div className="mt-4 text-sm text-muted">
        <p>{product.short}</p>
        <p className="mt-2">Ayrıntılı özellikler ve açıklama burada görünecektir. (Yer tutucu)</p>
      </div>
    </div>
  )
}
