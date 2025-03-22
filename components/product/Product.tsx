// "use client"

// import type React from "react"

// import { useState, useEffect } from "react"
// import Image from "next/image"
// import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import { Star, Heart, X, ChevronLeft, ChevronRight } from "lucide-react"
// import ReactMarkdown from "react-markdown"

// import Header from "@/components/header"
// import Footer from "@/components/footer-minimal"

// // Function to generate WhatsApp message URL
// function generateWhatsAppLink(product: any) {
//   const phoneNumber = "918208596830"
//   const productUrl = `https://rukmiyoga.com/products/${product.id}`
//   const message = encodeURIComponent(
//     `Hi, I want to buy *${product.name}* for *${product.price}*.\nProduct link: ${productUrl}\nCan you provide more details?`
//   )
//   return `https://wa.me/${phoneNumber}?text=${message}`
// }

// export default function Products({ product }: { product: any }) {
//   const isMobile =
//     typeof window !== "undefined" ? window.innerWidth < 768 : false
//   const [isMobileView, setIsMobileView] = useState(isMobile)

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobileView(window.innerWidth < 768)
//     }

//     window.addEventListener("resize", handleResize)
//     return () => window.removeEventListener("resize", handleResize)
//   }, [])
//   const [currentImageIndex, setCurrentImageIndex] = useState(0)
//   const [showFullScreen, setShowFullScreen] = useState(false)
//   const [touchStart, setTouchStart] = useState(0)

//   // Use product.images if available, otherwise create an array with the single image
//   const images = product?.images || (product?.image ? [product.image] : [])

//   const handleNext = () => {
//     setCurrentImageIndex((prev) => (prev + 1) % images.length)
//   }

//   const handlePrev = () => {
//     setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
//   }

//   const handleTouchStart = (e: React.TouchEvent) => {
//     setTouchStart(e.touches[0].clientX)
//   }

//   const handleTouchEnd = (e: React.TouchEvent) => {
//     const touchEnd = e.changedTouches[0].clientX
//     const diff = touchStart - touchEnd

//     if (diff > 50) {
//       handleNext()
//     } else if (diff < -50) {
//       handlePrev()
//     }
//   }

//   // Keyboard navigation for full screen mode
//   useEffect(() => {
//     const handleKeyDown = (e: KeyboardEvent) => {
//       if (!showFullScreen) return

//       if (e.key === "Escape") {
//         setShowFullScreen(false)
//       } else if (e.key === "ArrowRight") {
//         handleNext()
//       } else if (e.key === "ArrowLeft") {
//         handlePrev()
//       }
//     }

//     window.addEventListener("keydown", handleKeyDown)
//     return () => window.removeEventListener("keydown", handleKeyDown)
//   }, [showFullScreen])

//   // Prevent body scroll when in full screen mode
//   useEffect(() => {
//     if (showFullScreen) {
//       document.body.style.overflow = "hidden"
//     } else {
//       document.body.style.overflow = ""
//     }
//     return () => {
//       document.body.style.overflow = ""
//     }
//   }, [showFullScreen])

//   if (!product) {
//     return <div>Product not found</div>
//   }

//   return (
//     <div className="flex flex-col min-h-screen">
//       <Header />
//       <main className="flex-1">
//         <section className="w-full py-6 md:py-12">
//           <div className="container px-4 md:px-6">
//             <nav
//               className="flex mb-4 md:mb-8 overflow-x-auto whitespace-nowrap pb-2 scrollbar-hide"
//               aria-label="Breadcrumb"
//             >
//               <ol className="inline-flex items-center space-x-1 md:space-x-3">
//                 <li className="inline-flex items-center">
//                   <Link
//                     href="/"
//                     className="inline-flex items-center text-xs md:text-sm font-medium text-muted-foreground hover:text-foreground"
//                   >
//                     Home
//                   </Link>
//                 </li>
//                 <li>
//                   <div className="flex items-center">
//                     <span className="mx-2 text-muted-foreground">/</span>
//                     <Link
//                       href="/products"
//                       className="text-xs md:text-sm font-medium text-muted-foreground hover:text-foreground"
//                     >
//                       Products
//                     </Link>
//                   </div>
//                 </li>
//                 <li aria-current="page">
//                   <div className="flex items-center">
//                     <span className="mx-2 text-muted-foreground">/</span>
//                     <span className="text-xs md:text-sm font-medium text-foreground truncate max-w-[180px] md:max-w-none">
//                       {product.name}
//                     </span>
//                   </div>
//                 </li>
//               </ol>
//             </nav>
//             <div className="grid gap-6 md:gap-10 lg:grid-cols-2 lg:gap-16 items-start">
//               <div className="space-y-3 md:space-y-4">
//                 {/* Main product image */}
//                 <div
//                   className="relative aspect-square overflow-hidden rounded-lg cursor-pointer touch-manipulation"
//                   onClick={() => setShowFullScreen(true)}
//                   onTouchStart={handleTouchStart}
//                   onTouchEnd={handleTouchEnd}
//                 >
//                   <Image
//                     src={images[currentImageIndex] || "/placeholder.svg"}
//                     alt={`${product.name} - Image ${currentImageIndex + 1}`}
//                     fill
//                     className="object-cover transition-transform duration-300 hover:scale-105"
//                     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                     priority
//                   />

//                   {images.length > 1 && (
//                     <>
//                       <button
//                         className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white z-10 touch-manipulation"
//                         onClick={(e) => {
//                           e.stopPropagation()
//                           handlePrev()
//                         }}
//                         aria-label="Previous image"
//                       >
//                         <ChevronLeft className="h-4 w-4 md:h-5 md:w-5" />
//                       </button>
//                       <button
//                         className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-1.5 md:p-2 rounded-full shadow-md hover:bg-white z-10"
//                         onClick={(e) => {
//                           e.stopPropagation()
//                           handleNext()
//                         }}
//                         aria-label="Next image"
//                       >
//                         <ChevronRight className="h-4 w-4 md:h-5 md:w-5" />
//                       </button>
//                     </>
//                   )}

//                   <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5">
//                     {images.length > 1 &&
//                       images.map((_: any, index: any) => (
//                         <button
//                           key={index}
//                           className={`h-1.5 md:h-2 rounded-full ${
//                             index === currentImageIndex
//                               ? "bg-primary w-3 md:w-4"
//                               : "bg-gray-300 w-1.5 md:w-2"
//                           }`}
//                           onClick={(e) => {
//                             e.stopPropagation()
//                             setCurrentImageIndex(index)
//                           }}
//                           aria-label={`Go to image ${index + 1}`}
//                         />
//                       ))}
//                   </div>
//                 </div>

//                 {/* Thumbnail images */}
//                 {images.length > 1 && (
//                   <div className="gap-1.5 md:gap-2 overflow-x-auto pb-2 snap-x scrollbar-hide">
//                     {images.map((image: any, index: any) => (
//                       <button
//                         key={index}
//                         className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-md overflow-hidden border-2 snap-start ${
//                           currentImageIndex === index
//                             ? "border-primary"
//                             : "border-transparent"
//                         }`}
//                         onClick={() => setCurrentImageIndex(index)}
//                       >
//                         <div className="relative w-full h-full">
//                           <Image
//                             src={image || "/placeholder.svg"}
//                             alt={`${product.name} thumbnail ${index + 1}`}
//                             fill
//                             className="object-cover"
//                             sizes="(max-width: 768px) 64px, 80px"
//                           />
//                         </div>
//                       </button>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               <div className="space-y-4 md:space-y-6">
//                 <h1 className="text-2xl md:text-3xl font-bold tracking-tighter sm:text-4xl">
//                   {product.name}
//                 </h1>
//                 <div className="flex items-center gap-2">
//                   <div className="flex">
//                     {[...Array(5)].map((_, i) => (
//                       <Star
//                         key={i}
//                         className={`h-4 w-4 md:h-5 md:w-5 ${
//                           i < Math.floor(product.rating)
//                             ? "text-yellow-400 fill-yellow-400"
//                             : "text-gray-300"
//                         }`}
//                       />
//                     ))}
//                   </div>
//                   <span className="text-xs md:text-sm text-muted-foreground">
//                     ({product.reviews} reviews)
//                   </span>
//                 </div>
//                 <p className="text-xl md:text-2xl font-bold">{product.price}</p>
//                 <div className="space-y-3 md:space-y-4">
//                   <h3 className="text-base md:text-lg font-semibold">
//                     Product Details
//                   </h3>
//                   <p className="text-sm md:text-base text-muted-foreground whitespace-pre-line">
//                     {product.description}
//                   </p>
//                 </div>
//                 <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
//                     <Button size="lg" className="w-full bg-green-600 hover:bg-green-700" asChild>
//                     <a
//                       href={generateWhatsAppLink(product)}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="flex items-center justify-center"
//                     >
//                       <Image
//                       src="/whatsapp_icon.png"
//                       alt="WhatsApp"
//                       width={24}
//                       height={24}
//                       className="mr-2"
//                       />
//                       Order Now
//                     </a>
//                     </Button>
//                   <Button size="lg" variant="outline" className="w-full">
//                     <Heart className="mr-2 h-4 w-4 md:h-5 md:w-5" />
//                     Add to Wishlist
//                   </Button>
//                 </div>
//               </div>
//             </div>
//             <h3 className="text-base md:text-lg font-semibold mt-8 md:mt-10">
//               Product Description
//             </h3>
//             <hr className="my-3 md:my-4" />
//             <div className="markdown prose prose-sm md:prose max-w-none">
//               <ReactMarkdown>{product.longDescription}</ReactMarkdown>
//             </div>
//           </div>
//         </section>

//         {/* Full screen image preview */}
//         {showFullScreen && (
//           <div
//             className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center touch-manipulation"
//             onClick={() => setShowFullScreen(false)}
//           >
//             <button
//               className="absolute top-2 md:top-4 right-2 md:right-4 text-white bg-black/50 p-1.5 md:p-2 rounded-full hover:bg-black/70 z-[60]"
//               onClick={(e) => {
//                 e.stopPropagation()
//                 setShowFullScreen(false)
//               }}
//               aria-label="Close full screen preview"
//             >
//               <X className="h-5 w-5 md:h-6 md:w-6" />
//             </button>

//             <div
//               className="relative w-full h-full"
//               onClick={(e) => e.stopPropagation()}
//               onTouchStart={handleTouchStart}
//               onTouchEnd={handleTouchEnd}
//             >
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <Image
//                   src={images[currentImageIndex] || "/placeholder.svg"}
//                   alt={product.name}
//                   fill
//                   className="object-contain"
//                   sizes="100vw"
//                 />
//               </div>

//               <button
//                 className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 text-white bg-black/50 p-2 md:p-3 rounded-full hover:bg-black/70"
//                 onClick={(e) => {
//                   e.stopPropagation()
//                   handlePrev()
//                 }}
//                 aria-label="Previous image"
//               >
//                 <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
//               </button>

//               <button
//                 className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 text-white bg-black/50 p-2 md:p-3 rounded-full hover:bg-black/70"
//                 onClick={(e) => {
//                   e.stopPropagation()
//                   handleNext()
//                 }}
//                 aria-label="Next image"
//               >
//                 <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
//               </button>

//               <div className="absolute bottom-16 md:bottom-8 left-0 right-0 flex justify-center gap-2">
//                 {images.length > 1 &&
//                   images.map((_: any, index: any) => (
//                     <button
//                       key={index}
//                       className={`h-2 md:h-2.5 rounded-full ${
//                         index === currentImageIndex
//                           ? "bg-white w-5 md:w-6"
//                           : "bg-gray-500 w-2 md:w-2.5"
//                       }`}
//                       onClick={(e) => {
//                         e.stopPropagation()
//                         setCurrentImageIndex(index)
//                       }}
//                       aria-label={`Go to image ${index + 1}`}
//                     />
//                   ))}
//               </div>

//               <div className="absolute bottom-8 md:bottom-4 left-0 right-0 text-center text-white/80 text-xs md:text-sm">
//                 {currentImageIndex + 1} / {images.length}
//               </div>
//             </div>
//           </div>
//         )}
//       </main>
//       <Footer />
//     </div>
//   )
// }
