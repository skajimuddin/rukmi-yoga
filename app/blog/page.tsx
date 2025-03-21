"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { useIsMobile } from "@/hooks/use-mobile"

interface BlogPost {
  id: number
  title: string
  excerpt: string
  date: string
  author: string
  category: string
  image: string
  slug: string
  featured?: boolean
}

export default function BlogPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedCategory, setSelectedCategory] = useState("All Categories")
  const isMobile = useIsMobile()

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "The Transformative Power of Yoga Nidra",
      excerpt:
        "Discover how the ancient practice of Yoga Nidra can help reduce stress, improve sleep quality, and enhance overall well-being through conscious relaxation.",
      date: "March 15, 2025",
      author: "Priya Sharma",
      category: "Yoga Practices",
      image: "/placeholder.svg?height=400&width=600",
      slug: "transformative-power-yoga-nidra",
      featured: true,
    },
    {
      id: 2,
      title: "5 Pranayama Techniques for Beginners",
      excerpt:
        "Learn these simple yet powerful breathing exercises that can help calm your mind, increase energy levels, and improve focus in your daily life.",
      date: "March 10, 2025",
      author: "Rahul Mehta",
      category: "Breathing Techniques",
      image: "/placeholder.svg?height=400&width=600",
      slug: "pranayama-techniques-beginners",
      featured: true,
    },
    {
      id: 3,
      title: "Ayurvedic Principles for Modern Living",
      excerpt:
        "Explore how ancient Ayurvedic wisdom can be applied to our contemporary lifestyle for better health, nutrition, and mind-body balance.",
      date: "March 5, 2025",
      author: "Ananya Kumar",
      category: "Ayurveda",
      image: "/placeholder.svg?height=400&width=600",
      slug: "ayurvedic-principles-modern-living",
      featured: true,
    },
    {
      id: 4,
      title: "The Connection Between Yoga and Mental Health",
      excerpt:
        "Research-backed insights into how regular yoga practice can support mental health, reduce anxiety, and help manage depression symptoms.",
      date: "February 28, 2025",
      author: "Dr. Vikram Patel",
      category: "Wellness",
      image: "/placeholder.svg?height=400&width=600",
      slug: "yoga-mental-health-connection",
    },
    {
      id: 5,
      title: "Understanding the Seven Chakras",
      excerpt:
        "A comprehensive guide to the seven energy centers in the body, their significance, and how to balance them through yoga and meditation.",
      date: "February 20, 2025",
      author: "Meera Rajput",
      category: "Spiritual Growth",
      image: "/placeholder.svg?height=400&width=600",
      slug: "understanding-seven-chakras",
    },
    {
      id: 6,
      title: "Yoga for Office Workers: Desk-Friendly Poses",
      excerpt:
        "Simple yoga poses and stretches you can do at your desk to relieve tension, improve posture, and stay energized throughout the workday.",
      date: "February 15, 2025",
      author: "Arjun Singh",
      category: "Yoga Practices",
      image: "/placeholder.svg?height=400&width=600",
      slug: "yoga-office-workers-desk-poses",
    },
    {
      id: 7,
      title: "The Science Behind Meditation Benefits",
      excerpt:
        "Exploring the latest scientific research on how meditation affects the brain, immune system, and overall physical and mental health.",
      date: "February 10, 2025",
      author: "Dr. Neha Sharma",
      category: "Meditation",
      image: "/placeholder.svg?height=400&width=600",
      slug: "science-meditation-benefits",
    },
    {
      id: 8,
      title: "Seasonal Yoga: Adapting Your Practice Throughout the Year",
      excerpt:
        "How to modify your yoga practice according to different seasons to stay balanced and in harmony with nature's rhythms.",
      date: "February 5, 2025",
      author: "Kiran Joshi",
      category: "Yoga Practices",
      image: "/placeholder.svg?height=400&width=600",
      slug: "seasonal-yoga-adapting-practice",
    },
    {
      id: 9,
      title: "The Role of Yoga in Pain Management",
      excerpt:
        "How specific yoga poses and mindfulness techniques can help manage chronic pain conditions and improve quality of life.",
      date: "January 30, 2025",
      author: "Dr. Sanjay Gupta",
      category: "Wellness",
      image: "/placeholder.svg?height=400&width=600",
      slug: "yoga-pain-management",
    },
  ]

  // Get the featured post (first in the array)
  const featuredPost = blogPosts.find((post) => post.featured) || blogPosts[0]
  // Get the rest of the posts
  const regularPosts = blogPosts.filter((post) => post.id !== featuredPost.id)

  // Get unique categories
  const categories = ["All Categories", ...new Set(blogPosts.map((post) => post.category))]

  // Filter posts by category if needed
  const filteredPosts =
    selectedCategory === "All Categories"
      ? regularPosts
      : regularPosts.filter((post) => post.category === selectedCategory)

  return (
    <div className="flex min-h-screen flex-col">
      {/* WhatsApp Icon */}
      <a
        href="https://wa.me/1234567890"
        className="fixed bottom-4 right-4 z-50 p-3 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/whatsapp_icon.png" alt="whatsapp icon" className="h-8 w-8 text-white" />
      </a>
      <Header />
      <main className="flex-1">
        {/* Blog Hero Section */}
        <section className="relative py-10 md:py-20 bg-gradient-to-b from-white to-gray-100 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image src="/hero_bg.webp" alt="Yoga Background" layout="fill" objectFit="cover" className="opacity-50" />
          </div>
          <div className="container relative z-10 px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary/5 text-secondary hover:bg-primary/20">
                Wisdom & Insights
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-primary">
                Rukmi Yoga Blog
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Insights, practices, and wisdom to enhance your yoga journey and holistic well-being
              </p>
            </motion.div>
          </div>
        </section>

        <div className="container px-4 md:px-6 py-12">
          {/* Featured Post */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="group relative overflow-hidden rounded-lg border shadow-sm transition-all hover:shadow-md">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="aspect-video overflow-hidden md:aspect-auto md:h-full">
                  <Image
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    width={600}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col justify-center p-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                        Featured
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span>{featuredPost.date}</span>
                        <span>•</span>
                        <span>{featuredPost.category}</span>
                      </div>
                      <h2 className="text-2xl font-bold leading-tight md:text-3xl text-primary">
                        <Link href={`/blog/blog-1`} className="hover:underline">
                          {featuredPost.title}
                        </Link>
                      </h2>
                    </div>
                    <p className="text-muted-foreground ">{featuredPost.excerpt}</p>
                    <div className="flex items-center gap-2">
                      <div className="h-10 w-10 overflow-hidden rounded-full bg-muted">
                        <Image
                          src={`/placeholder.svg?height=40&width=40&text=${featuredPost.author.charAt(0)}`}
                          alt={featuredPost.author}
                          width={40}
                          height={40}
                        />
                      </div>
                      <div className="text-sm">
                        <p className="font-medium">{featuredPost.author}</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Button className="bg-secondary hover:bg-secondary/90 text-white" asChild>
                      <Link href={`/blog/blog-1`}>Read Article</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Filter Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-4 mb-8 justify-center"
          >
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`rounded-full ${selectedCategory === category ? "bg-secondary hover:bg-secondary/90 text-white" : "text-primary border-primary hover:bg-secondary/5"}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </motion.div>

          {/* Regular Posts */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * (index % 3) }}
                viewport={{ once: true }}
                className="group flex flex-col overflow-hidden rounded-lg border shadow-sm transition-all hover:shadow-md"
              >
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={600}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.category}</span>
                      </div>
                      <h3 className="text-xl font-bold leading-tight text-primary">
                        <Link href={`/blog/blog-${post.id}`} className="hover:underline">
                          {post.title}
                        </Link>
                      </h3>
                    </div>
                    <p className="text-muted-foreground">{post.excerpt}</p>
                  </div>
                  <div className="pt-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 overflow-hidden rounded-full bg-muted">
                        <Image
                          src={`/placeholder.svg?height=32&width=32&text=${post.author.charAt(0)}`}
                          alt={post.author}
                          width={32}
                          height={32}
                        />
                      </div>
                      <span className="text-sm">{post.author}</span>
                    </div>
                    <Link
                      href={`/blog/blog-${post.id}`}
                      className="inline-flex items-center gap-1 text-sm font-medium text-secondary hover:underline"
                    >
                      Read more <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pagination */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 flex justify-center"
          >
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                className="hover:bg-secondary/5 border-primary text-primary"
              >
                <span className="sr-only">Previous page</span>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              {[1, 2, 3].map((page) => (
                <Button
                  key={page}
                  variant={currentPage === page ? "default" : "outline"}
                  size="sm"
                  className={`h-8 w-8 ${currentPage === page ? "bg-secondary hover:bg-secondary/90 text-white" : "text-primary border-primary hover:bg-secondary/5"}`}
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </Button>
              ))}
              <Button
                variant="outline"
                size="icon"
                disabled={currentPage === 3}
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, 3))}
                className="hover:bg-secondary/5 border-primary text-primary"
              >
                <span className="sr-only">Next page</span>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>

          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 rounded-lg bg-gradient-to-r from-primary/5 to-secondary/5 p-8"
          >
            <div className="grid gap-6 md:grid-cols-2 items-center">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-primary">Subscribe to Our Newsletter</h2>
                <p className="text-muted-foreground">
                  Stay updated with the latest yoga practices, wellness tips, and Ayurvedic insights from our blog. Join
                  our community today.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
                <Button className="bg-secondary hover:bg-secondary/90 text-white">Subscribe</Button>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

