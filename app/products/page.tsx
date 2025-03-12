"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Heart } from "lucide-react"
import Link from "next/link"
import productsData from "@/data/products.json"

import Header from "@/components/header"
import Footer from "@/components/footer-minimal"

export default function ProductsPage() {
  const { products } = productsData;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="w-full py-10 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">All Products</h2>
              <div className="flex items-center space-x-2">
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="max-w-sm"
                />
                <Button variant="outline">Search</Button>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <Link
                  href={`/products/${product.id}`}
                  key={product.id}
                  className="group relative overflow-hidden rounded-lg border bg-background transition-all hover:shadow-md"
                >
                  <div className="aspect-square overflow-hidden">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={400}
                      height={400}
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold">{product.name}</h3>
                    <p className="mt-2 text-muted-foreground">
                      {product.description}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-lg font-bold">{product.price}</span>
                      <Button
                        size="sm"
                        className="transition-transform group-hover:translate-y-0"
                      >
                        View Details
                      </Button>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 rounded-full bg-background/80 p-2 opacity-0 transition-opacity group-hover:opacity-100">
                    <Heart className="h-4 w-4 text-muted-foreground hover:text-primary" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
