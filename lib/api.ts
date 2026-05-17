import products from '../data/products/sample.json'

export async function fetchProducts() {
  // simple adapter returning local data; replace with CMS fetch later
  return products.products
}
