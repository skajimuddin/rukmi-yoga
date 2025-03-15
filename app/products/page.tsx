"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Heart, ArrowRight, ChevronUp, Check, ChevronDown } from "lucide-react"
import Link from "next/link"
import productsData from "@/data/products.json"
import { useState, useEffect } from "react"

import Header from "@/components/header"
import Footer from "@/components/footer-minimal"
import ScrollToTopButton from "@/components/ScrollToTopButton"

type categoriesType =
  | "All"
  | "Skin Care"
  | "Personal Care"
  | "Mud Make-Up"
  | "Health care"
  | "Hair Care"

export default function ProductsPage() {
  const { products } = productsData
  const [showTopButton, setShowTopButton] = useState(false)
  const [category, setCategory] = useState<categoriesType>("All")
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowTopButton(true)
      } else {
        setShowTopButton(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="w-full py-10 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex justify-between items-center mb-8  md:px-8">
              <h2 className="text-2xl md:text-3xl font-bold">All Products</h2>
              <div className="flex items-center space-x-2">
                {/* <Input
                  type="search"
                  placeholder="Search products..."
                  className="max-w-sm"
                />
                <Button variant="outline" className="hover:bg-secondary">
                  Search
                </Button> */}
                <div className="border border-muted-foreground rounded-lg">
                  <DropDownCategory
                    category={category}
                    setCategory={setCategory}
                  ></DropDownCategory>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-12 lg:mx-8 lg:mt-12">
              {products.map((product) => {
                if(category === "All"){
                  return (
                    <PrductCard key={product.id} product={product}></PrductCard>
                  )
                }
                else if (product.categories === category) {
                  return (
                    <PrductCard key={product.id} product={product}></PrductCard>
                  )
                } else {
                  return null
                }
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  )
}

function PrductCard({ product }: any) {
  return (
    <Link
      href={`/products/${product.id}`}
      key={product.id}
      className="group relative overflow-hidden rounded-lg border bg-background transition-All hover:shadow-md"
    >
      <div className="aspect-square overflow-hidden">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          width={400}
          height={400}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
      </div>
      <div className="p-2 md:p-6">
        <h3 className="text-base text-center md:text-left md:text-xl h-24 flex items-center justify-center md:justify-start">
          {product.name}
        </h3>
        {/* <p className="mt-2 text-muted-foreground">
            {product.description}
          </p> */}
        {/* <div className="justify-between"> */}
        <div className="mt-4 flex flex-col items-center space-y-2 md:justify-between md:items-start md:flex-row md:space-y-0 md:space-x-4">
          <span className="text-lg font-bold">{product.price}</span>
          <Button
            size="sm"
            className="transition-transform group-hover:translate-y-0 hover:bg-secondary"
          >
            View Details
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="absolute top-4 right-4 rounded-full bg-background/80 p-2 opacity-0 transition-opacity group-hover:opacity-100">
        <Heart className="h-4 w-4 text-muted-foreground hover:text-primary" />
      </div>
    </Link>
  )
}



function DropDownCategory({
  category,
  setCategory,
}: {
  category: categoriesType;
  setCategory: React.Dispatch<React.SetStateAction<categoriesType>>;
}) {
  const categories: categoriesType[] = [
    "All",
    "Skin Care",
    "Personal Care",
    "Mud Make-Up",
    "Health care",
    "Hair Care",
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={null} className="flex items-center gap-2 ">
          {category === "All" ? "Select Category" : category}
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[200px]">
        {categories.map((cat) => (
          <DropdownMenuItem
            key={cat}
            className="flex items-center justify-between cursor-pointer"
            onClick={() => setCategory(cat)}
          >
            {cat}
            {category === cat && <Check className="h-4 w-4 ml-2" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
