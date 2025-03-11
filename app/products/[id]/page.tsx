import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Star, Heart, ShoppingCart } from "lucide-react"
import productsData from "@/data/products.json"

import Header from "@/components/header"
import Footer from "@/components/footer-minimal"

function getProductData(id: string) {
  return productsData.products.find((p) => p.id === id)
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = getProductData(params.id)

  if (!product) {
    return <div>Product not found</div>
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12">
          <div className="container px-4 md:px-6">
            <nav className="flex mb-8" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                  <Link
                    href="/"
                    className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <div className="flex items-center">
                    <span className="mx-2 text-muted-foreground">/</span>
                    <Link
                      href="/products"
                      className="text-sm font-medium text-muted-foreground hover:text-foreground"
                    >
                      Products
                    </Link>
                  </div>
                </li>
                <li aria-current="page">
                  <div className="flex items-center">
                    <span className="mx-2 text-muted-foreground">/</span>
                    <span className="text-sm font-medium text-foreground">
                      {product.name}
                    </span>
                  </div>
                </li>
              </ol>
            </nav>
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-start">
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="space-y-6">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  {product.name}
                </h1>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(product.rating)
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    ({product.reviews} reviews)
                  </span>
                </div>
                <p className="text-2xl font-bold">{product.price}</p>
                <p className="text-base text-muted-foreground">
                  {product.description}
                </p>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Product Details</h3>
                  <p className="text-base text-muted-foreground whitespace-pre-line">
                    {product.longDescription}
                  </p>
                </div>
                <div className="flex gap-4">
                  <Button size="lg" className="w-full">
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Add to Cart
                  </Button>
                  <Button size="lg" variant="outline">
                    <Heart className="mr-2 h-5 w-5" />
                    Add to Wishlist
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
