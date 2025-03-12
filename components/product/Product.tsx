"use client"

import { useState, useEffect, use } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Star, Heart, X, ChevronLeft, ChevronRight } from "lucide-react"
import ReactMarkdown from "react-markdown"

import Header from "@/components/header"
import Footer from "@/components/footer-minimal"

// Function to generate WhatsApp message URL
function generateWhatsAppLink(product: any) {
  const phoneNumber = "918208596830"
  const productUrl = `https://rukmiyoga.com/products/${product.id}`
  const message = encodeURIComponent(
    `Hi, I want to buy *${product.name}* for *${product.price}*.\nProduct link: ${productUrl}\nCan you provide more details?`
  )
  return `https://wa.me/${phoneNumber}?text=${message}`
}

export default function Products({ product }: { product: any }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [showFullScreen, setShowFullScreen] = useState(false)
  const [touchStart, setTouchStart] = useState(0)

  // Use product.images if available, otherwise create an array with the single image
  const images = product?.images || (product?.image ? [product.image] : [])

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const handlePrev = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX)
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEnd = e.changedTouches[0].clientX
    const diff = touchStart - touchEnd

    if (diff > 50) {
      handleNext()
    } else if (diff < -50) {
      handlePrev()
    }
  }

  // Keyboard navigation for full screen mode
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!showFullScreen) return

      if (e.key === "Escape") {
        setShowFullScreen(false)
      } else if (e.key === "ArrowRight") {
        handleNext()
      } else if (e.key === "ArrowLeft") {
        handlePrev()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [showFullScreen])

  // Prevent body scroll when in full screen mode
  useEffect(() => {
    if (showFullScreen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [showFullScreen])

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
              <div className="space-y-4">
                {/* Main product image */}
                <div
                  className="relative aspect-square overflow-hidden rounded-lg cursor-pointer"
                  onClick={() => setShowFullScreen(true)}
                  onTouchStart={handleTouchStart}
                  onTouchEnd={handleTouchEnd}
                >
                  <Image
                    src={images[currentImageIndex] || "/placeholder.svg"}
                    alt={`${product.name} - Image ${currentImageIndex + 1}`}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                  />

                  {images.length > 1 && (
                    <>
                      <button
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white z-10"
                        onClick={(e) => {
                          e.stopPropagation()
                          handlePrev()
                        }}
                        aria-label="Previous image"
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </button>
                      <button
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white z-10"
                        onClick={(e) => {
                          e.stopPropagation()
                          handleNext()
                        }}
                        aria-label="Next image"
                      >
                        <ChevronRight className="h-5 w-5" />
                      </button>
                    </>
                  )}

                  <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5">
                    {images.length > 1 &&
                      images.map((_: any, index: any) => (
                        <button
                          key={index}
                          className={`h-2 rounded-full ${
                            index === currentImageIndex
                              ? "bg-primary w-4"
                              : "bg-gray-300 w-2"
                          }`}
                          onClick={(e) => {
                            e.stopPropagation()
                            setCurrentImageIndex(index)
                          }}
                          aria-label={`Go to image ${index + 1}`}
                        />
                      ))}
                  </div>
                </div>

                {/* Thumbnail images */}
                {images.length > 1 && (
                  <div className="flex gap-2 overflow-x-auto pb-2">
                    {images.map((image: any, index: any) => (
                      <button
                        key={index}
                        className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden border-2 ${
                          currentImageIndex === index
                            ? "border-primary"
                            : "border-transparent"
                        }`}
                        onClick={() => setCurrentImageIndex(index)}
                      >
                        <div className="relative w-full h-full">
                          <Image
                            src={image}
                            alt={`${product.name} thumbnail ${index + 1}`}
                            fill
                            className="object-cover"
                            sizes="80px"
                          />
                        </div>
                      </button>
                    ))}
                  </div>
                )}
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
                {/* <p className="text-base text-muted-foreground">
                  {product.description}
                </p> */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Product Details</h3>
                  <p className="text-base text-muted-foreground whitespace-pre-line">
                    {product.description}
                  </p>
                </div>
                <div className="flex gap-4">
                  <Button size="lg" className="w-full" asChild>
                    <a
                      href={generateWhatsAppLink(product)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {/* <div className="mr-2 h-5 w-5" />
                      <div /> */}
                      {/* <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="100"
                        height="100"
                        viewBox="0 0 48 48"
                      >
                        <path
                          fill="#fff"
                          d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"
                        ></path>
                        <path
                          fill="#fff"
                          d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"
                        ></path>
                        <path
                          fill="#cfd8dc"
                          d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"
                        ></path>
                        <path
                          fill="#40c351"
                          d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"
                        ></path>
                        <path
                          fill="#fff"
                          fill-rule="evenodd"
                          d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z"
                          clip-rule="evenodd"
                        ></path>
                      </svg> */}
                      Buy Now
                    </a>
                  </Button>
                  <Button size="lg" variant="outline">
                    <Heart className="mr-2 h-5 w-5" />
                    Add to Wishlist
                  </Button>
                </div>
              </div>
            </div>
            <h3 className="text-lg font-semibold mt-10">Product Description</h3>
            <hr className="my-4" />
            <div className="markdown">
              <ReactMarkdown>{product.longDescription}</ReactMarkdown>
            </div>
          </div>
        </section>

        {/* Full screen image preview */}
        {showFullScreen && (
          <div
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center"
            onClick={() => setShowFullScreen(false)}
          >
            <button
              className="absolute top-4 right-4 text-white bg-black/50 p-2 rounded-full hover:bg-black/70 z-[60]"
              onClick={(e) => {
                e.stopPropagation()
                setShowFullScreen(false)
              }}
              aria-label="Close full screen preview"
            >
              <X className="h-6 w-6" />
            </button>

            <div
              className="relative w-full h-full"
              onClick={(e) => e.stopPropagation()}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src={images[currentImageIndex] || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              </div>

              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/50 p-3 rounded-full hover:bg-black/70"
                onClick={(e) => {
                  e.stopPropagation()
                  handlePrev()
                }}
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/50 p-3 rounded-full hover:bg-black/70"
                onClick={(e) => {
                  e.stopPropagation()
                  handleNext()
                }}
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2">
                {images.length > 1 &&
                  images.map((_: any, index: any) => (
                    <button
                      key={index}
                      className={`h-2.5 rounded-full ${
                        index === currentImageIndex
                          ? "bg-white w-6"
                          : "bg-gray-500 w-2.5"
                      }`}
                      onClick={(e) => {
                        e.stopPropagation()
                        setCurrentImageIndex(index)
                      }}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
              </div>

              <div className="absolute bottom-4 left-0 right-0 text-center text-white/80 text-sm">
                {currentImageIndex + 1} / {images.length}
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}
