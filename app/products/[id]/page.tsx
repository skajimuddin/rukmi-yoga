import productsData from "@/data/products.json"
import Product from "@/components/product/Product"

function getProductData(id: string) {
  return productsData.products.find((p) => p.id === id)
}

// Required for static export
export function generateStaticParams() {
  return productsData.products.map((product) => ({
    id: product.id,
  }))
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = getProductData(params.id)

  if (!product) return <h1>Product not found</h1>

  return <Product product={product} />
}
