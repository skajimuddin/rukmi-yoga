"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Tag,
  Heart,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ScrollToTopButton from "@/components/ScrollToTopButton"
import { useIsMobile } from "@/hooks/use-mobile"

interface BlogPost {
  id: number
  title: string
  excerpt: string
  date: string
  author: string
  authorBio: string
  authorImage: string
  category: string
  image: string
  readTime: string
  slug: string
  tags: string[]
  content: string
}



export default function BlogPostPage() {
  const [liked, setLiked] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const isMobile = useIsMobile()

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  const post: BlogPost =  {
    id: 8,
    title: "Seasonal Yoga: Adapting Your Practice Throughout the Year",
    excerpt: "How to modify your yoga practice according to different seasons to stay balanced and in harmony with nature's rhythms.",
    date: "February 5, 2025",
    author: "Kiran Joshi",
    authorBio: "Kiran is an Ayurvedic yoga teacher and seasonal wellness expert, conducting retreats that sync practices with natural cycles since 2015.",
    authorImage: "/placeholder.svg?height=100&width=100&text=KJ",
    category: "Yoga Practices",
    image: "/placeholder.svg?height=600&width=1200",
    readTime: "11 min read",
    slug: "seasonal-yoga-adapting-practice",
    tags: ["Seasonal Yoga", "Ayurveda", "Nature Cycles", "Adaptation", "Balance", "Retreats"],
    content: `### **Seasonal Yoga: Adapting Your Practice Throughout the Year**  

Yoga is a versatile practice that can be adjusted to match the changing seasons, promoting physical vitality, mental clarity, and emotional balance. Aligning yoga with seasonal rhythms allows practitioners to harness nature’s energy, optimizing their well-being throughout the year. By modifying postures, breathing techniques, and meditation styles, yoga becomes a powerful tool for maintaining harmony with the environment.  

#### **Spring: Renewal and Detoxification**  

Spring symbolizes renewal, growth, and cleansing, making it the perfect time for energizing yoga practices. Incorporating detoxifying twists such as **Revolved Triangle Pose**, heart-opening asanas like **Camel Pose**, and balancing poses such as **Tree Pose** helps awaken the body after winter's stagnation. **Kapalabhati Pranayama (Skull-Shining Breath)** is beneficial for clearing mental and physical sluggishness, while visualization meditations encourage personal growth and renewal. Detox-focused yoga sequences are particularly effective in spring, as they help eliminate toxins and revitalize energy levels.  

#### **Summer: Cooling and Energizing**  

With rising temperatures, summer yoga should emphasize cooling, hydration, and maintaining balance. Gentle forward bends like **Seated Forward Fold**, **Moon Salutations**, and restorative poses such as **Legs-Up-the-Wall** provide relief from excess heat. **Sheetali Pranayama (Cooling Breath)** aids in temperature regulation, preventing overheating. Mindfulness meditation centered on gratitude fosters joy and emotional balance. To avoid heat exhaustion, it is advisable to practice yoga during early morning or evening hours, when temperatures are lower.  

#### **Autumn: Grounding and Strengthening**  

Autumn is a time of transition, requiring grounding and introspection. Strengthening postures such as **Warrior II**, hip-opening poses like **Pigeon Pose**, and deep stretches such as **Butterfly Pose** promote stability and relaxation. **Nadi Shodhana (Alternate Nostril Breathing)** balances energy and prepares the body for seasonal shifts. Gratitude-based meditation helps cultivate appreciation and inner peace. Since autumn encourages reflection and slowing down, restorative yoga practices provide comfort and emotional support during this time.  

#### **Winter: Warming and Nourishing**  

During winter, yoga should focus on generating heat, boosting immunity, and sustaining inner warmth. **Sun Salutations**, **core-strengthening poses like Boat Pose**, and **backbends such as Cobra Pose** activate circulation and keep the body warm. **Bhastrika (Bellows Breath)** pranayama stimulates energy and prevents winter sluggishness. **Loving-kindness meditation** enhances feelings of warmth, connection, and compassion. Since colder months tend to cause stiffness and fatigue, winter yoga should emphasize dynamic movements and breath control to maintain vitality.  

#### **Transitional Practices for Year-Round Balance**  

- **Morning Yoga:** Energizing sequences like **Sun Salutations** are ideal for spring and winter to boost circulation.  
- **Evening Yoga:** Cooling and restorative poses help relax the body, making them suitable for summer and autumn.  
- **Lifestyle Integration:** Adjusting hydration, diet, and relaxation techniques according to seasonal needs supports holistic well-being.  
- **Community Yoga:** Practicing in a group setting fosters motivation, accountability, and emotional support.  

### **Aligning Yoga with Nature’s Rhythms**  

By adapting yoga practices to the seasons, individuals can sustain resilience, balance, and vitality year-round. Whether focusing on renewal in spring, cooling techniques in summer, grounding exercises in autumn, or warmth in winter, seasonal yoga deepens the connection between body, mind, and nature. Embracing these adjustments ensures that yoga remains a transformative and healing practice throughout the year.`
  }

  const relatedPosts = [
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
  ]

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <>
    
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
          <Header></Header>
      
      <main className="flex-1">
        {isLoading ? (
          <div className="flex items-center justify-center min-h-[60vh]">
            <div className="relative w-14 h-14">
              <motion.div
                className="absolute top-0 left-0 w-full h-full rounded-full border-4 border-t-primary border-r-transparent border-b-transparent border-l-transparent"
                animate={{ rotate: 360 }}
                transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />
            </div>
          </div>
        ) : (
          <>
            <div className="py-10">
              <div className="container px-4 md:px-6">
                {/* Back to blog link */}
                <motion.div initial="hidden" animate="visible" variants={fadeIn} className="mb-8">
                  <Button variant="ghost" size="sm" asChild className="gap-1 text-primary hover:bg-primary/5">
                    <Link href="/blog">
                      <ArrowLeft className="h-4 w-4" /> Back to Blog
                    </Link>
                  </Button>
                </motion.div>

                {/* Article header */}
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={fadeIn}
                  className="mx-auto max-w-3xl space-y-4 text-center"
                >
                  <div className="space-y-2">
                    <div className="inline-block rounded-full bg-secondary/10 px-3 py-1 text-sm font-medium text-secondary">
                      {post.category}
                    </div>
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
                      {post.title}
                    </h1>
                  </div>
                  <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4 text-secondary" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4 text-secondary" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4 text-secondary" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </motion.div>

                {/* Featured image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="my-8"
                >
                  <div className="relative overflow-hidden rounded-lg">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      width={1200}
                      height={600}
                      className="mx-auto aspect-video rounded-lg object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity hover:opacity-100"></div>
                  </div>
                </motion.div>

                {/* Article content */}
                <motion.div initial="hidden" animate="visible" variants={fadeIn} className="mx-auto max-w-3xl">
                  <div
                    className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-primary prose-a:text-secondary prose-a:no-underline hover:prose-a:underline prose-strong:text-primary/90"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />

                  {/* Tags */}
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                    className="mt-8 flex flex-wrap gap-2"
                  >
                    {post.tags.map((tag) => (
                      <motion.div
                        key={tag}
                        variants={fadeIn}
                        className="inline-flex items-center gap-1 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm text-primary hover:bg-primary/10 transition-colors"
                      >
                        <Tag className="h-3 w-3" />
                        <span>{tag}</span>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Share buttons */}
                  <motion.div initial="hidden" animate="visible" variants={fadeIn} className="mt-8 border-t pt-8">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <Button
                          variant="outline"
                          size="sm"
                          className={`gap-2 rounded-full ${liked ? "bg-red-50 text-red-500 border-red-200" : "hover:bg-primary/5 text-primary border-primary/20"}`}
                          onClick={() => setLiked(!liked)}
                        >
                          <Heart className={`h-4 w-4 ${liked ? "fill-red-500" : ""}`} />
                          {liked ? "Liked" : "Like"}
                        </Button>
                        <div className="text-sm font-medium">Share this article:</div>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="rounded-full border-primary/20 text-primary hover:bg-primary/5"
                          aria-label="Share on Facebook"
                        >
                          <Facebook className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="icon"
                          className="rounded-full border-primary/20 text-primary hover:bg-primary/5"
                          aria-label="Share on Twitter"
                        >
                          <Twitter className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="icon"
                          className="rounded-full border-primary/20 text-primary hover:bg-primary/5"
                          aria-label="Share on LinkedIn"
                        >
                          <Linkedin className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="icon"
                          className="rounded-full border-primary/20 text-primary hover:bg-primary/5"
                          aria-label="Share on Instagram"
                        >
                          <Instagram className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="icon"
                          className="rounded-full border-primary/20 text-primary hover:bg-primary/5"
                          aria-label="Share"
                        >
                          <Share2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </motion.div>

                  {/* Author bio */}
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                    className="mt-8 rounded-lg border border-primary/10 bg-gradient-to-r from-primary/5 to-secondary/5 p-6"
                  >
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                      <div className="h-16 w-16 overflow-hidden rounded-full bg-muted border-2 border-secondary/20">
                        <Image src={post.authorImage || "/placeholder.svg"} alt={post.author} width={64} height={64} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-primary">{post.author}</h3>
                        <p className="text-muted-foreground">{post.authorBio}</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Related articles */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  variants={fadeIn}
                  viewport={{ once: true }}
                  className="mt-16"
                >
                  <h2 className="mb-8 text-2xl font-bold text-center text-primary">Related Articles</h2>
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {relatedPosts.map((relatedPost, index) => (
                      <motion.div
                        key={relatedPost.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="group flex flex-col overflow-hidden rounded-lg border shadow-sm transition-all hover:shadow-md"
                      >
                        <div className="aspect-video overflow-hidden">
                          <Image
                            src={relatedPost.image || "/placeholder.svg"}
                            alt={relatedPost.title}
                            width={400}
                            height={225}
                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                        <div className="flex flex-1 flex-col justify-between p-6">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                              <span>{relatedPost.category}</span>
                              <span>•</span>
                              <span>{relatedPost.date}</span>
                            </div>
                            <h3 className="font-bold leading-tight text-primary">
                              <Link href={`/blog/blog-${relatedPost.id}`} className="hover:underline">
                                {relatedPost.title}
                              </Link>
                            </h3>
                            <p className="text-sm text-muted-foreground line-clamp-2">{relatedPost.excerpt}</p>
                          </div>
                          <div className="pt-4">
                            <Link
                             href={`/blog/blog-${relatedPost.id}`}
                              className="inline-flex items-center gap-1 text-sm font-medium text-secondary hover:underline"
                            >
                              Read more <ArrowRight className="h-4 w-4" />
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Newsletter signup */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  variants={fadeIn}
                  viewport={{ once: true }}
                  className="mt-16 rounded-lg bg-gradient-to-r from-primary/5 to-secondary/5 p-8"
                >
                  <div className="grid gap-6 md:grid-cols-2 items-center">
                    <div className="space-y-4">
                      <h2 className="text-2xl font-bold text-primary">Subscribe to Our Newsletter</h2>
                      <p className="text-muted-foreground">
                        Stay updated with the latest yoga practices, wellness tips, and Ayurvedic insights from our
                        blog. Join our community today.
                      </p>
                    </div>
                    <div className="flex flex-col gap-4 sm:flex-row">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="flex h-10 w-full rounded-md border border-primary/20 bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      />
                      <Button className="bg-secondary hover:bg-secondary/90 text-white">Subscribe</Button>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </>
        )}
        <Footer />
        <ScrollToTopButton />
      </main>
      
    </div>
    </>
  )
}

