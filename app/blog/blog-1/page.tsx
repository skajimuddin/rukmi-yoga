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
import Markdown from 'react-markdown'

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

  const post: BlogPost = {
    id: 1,
    title: "The Transformative Power of Yoga Nidra",
    excerpt:
      "Discover how the ancient practice of Yoga Nidra can help reduce stress, improve sleep quality, and enhance overall well-being through conscious relaxation.",
    date: "March 15, 2025",
    author: "Priya Sharma",
    authorBio:
      "Priya is a certified yoga instructor with over 10 years of experience specializing in restorative yoga and meditation. She has trained in traditional ashrams across India and brings authentic practices to modern practitioners.",
    authorImage: "/placeholder.svg?height=100&width=100&text=PS",
    category: "Yoga Practices",
    image: "/blog-images/image1.jpeg",
    readTime: "10 min read",
    slug: "transformative-power-yoga-nidra",
    tags: ["Yoga Nidra", "Meditation", "Stress Relief", "Sleep", "Relaxation", "Mindfulness"],
    content: `
    
# Yoga Nidra: The Art of Yogic Sleep  

Yoga Nidra, often referred to as **"yogic sleep,"** is a powerful meditation technique that induces deep relaxation while maintaining awareness. Unlike traditional meditation, where you remain seated, Yoga Nidra is practiced lying down in a comfortable position, making it accessible to practitioners of all levels and abilities.  

## Origins and Modern Recognition  

The practice originated thousands of years ago in ancient India and has been passed down through generations of yogis. In recent decades, it has gained significant attention in the West due to its profound benefits for physical, mental, and emotional well-being. Modern scientific research has begun to validate what yogis have known for centuries: **Yoga Nidra can transform our relationship with stress, improve sleep quality, and enhance overall health.**  

## The Science Behind Yoga Nidra  

During Yoga Nidra, the body enters a state of deep relaxation while the mind remains conscious and alert. This unique state activates the **parasympathetic nervous system**—our "rest and digest" mode—which counteracts the stress response and promotes healing.  

Brain wave studies have shown that Yoga Nidra practitioners experience:  
- **Alpha waves** – associated with relaxation and creativity.  
- **Theta waves** – connected to deep meditation and REM sleep.  
- **Delta waves** – present in deep, dreamless sleep and healing.  

This combination of brain wave activity creates what researchers call a **"hypnagogic state"**—the threshold between wakefulness and sleep where profound transformation can occur. In this state, the mind becomes highly receptive to learning and healing.  

## The Eight Stages of Yoga Nidra  

A traditional Yoga Nidra practice follows a **systematic approach** with eight distinct stages:  

1. **Preparation** – Lying in *Savasana* (corpse pose) with eyes closed.  
2. **Setting an Intention (Sankalpa)** – A short, positive statement in the present tense representing one's deepest desire or aspiration. The practitioner mentally repeats this intention three times with conviction.  
3. **Body Scan** – Awareness is systematically guided through different parts of the body, releasing physical tension and calming the nervous system.  
4. **Breath Awareness** – Observing natural breath patterns deepens relaxation and stills the mind.  
5. **Opposing Sensations** – Experiencing pairs of sensations (e.g., heaviness/lightness, heat/cold) to develop *witness consciousness* and detachment from physical experiences.  
6. **Guided Imagery** – Visualization to evoke emotional responses, release suppressed feelings, and rewire neural pathways.  
7. **Repetition of Sankalpa** – The personal intention is reaffirmed, allowing it to be absorbed by the subconscious mind.  
8. **Gradual Return to Awareness** – Bringing the benefits of the session into waking consciousness.  

## Benefits of Regular Yoga Nidra Practice  

### **Physical Benefits**  
- Reduces muscle tension and chronic pain.  
- Improves sleep quality and fights insomnia.  
- Lowers blood pressure and balances hormones.  
- Strengthens the immune system.  

### **Mental & Emotional Benefits**  
- Reduces anxiety, stress, and depression.  
- Enhances focus, creativity, and emotional resilience.  
- Develops greater self-awareness.  

### **Spiritual Benefits**  
- Deepens meditation practice.  
- Facilitates connection with inner wisdom.  
- Promotes a sense of **wholeness and self-transformation**.  

## How to Practice Yoga Nidra  

Yoga Nidra is accessible to everyone. You don’t need special equipment, flexibility, or prior yoga experience. Even **15-20 minutes** can provide significant benefits, though a **30-45 minute** session offers an optimal balance of depth and practicality.  

### **Best Times to Practice**  
- **Morning** – Sets a calm, centered tone for the day.  
- **Afternoon** – Provides rejuvenation (20 minutes equals ~2 hours of sleep).  
- **Evening** – Helps transition to restful sleep (but may not be ideal right before bed for insomniacs).  

### **Tips for a Better Experience**  
- Choose a **quiet space** where you won’t be disturbed.  
- Use **comfortable props** like blankets and bolsters.  
- Keep the **room warm**, dim the lights, and silence notifications.  

## Common Challenges and Solutions  

- **Falling Asleep:** While sleeping still offers benefits, staying conscious allows for deeper transformation. Try practicing when alert, sitting up slightly, or setting an intention to remain aware.  
- **Restlessness:** Adjust body position, acknowledge sensations without judgment, and focus on breath awareness.  
- **Discomfort:** Use additional props or start with shorter sessions, gradually increasing duration.  

## Embracing the Power of Yoga Nidra  

Yoga Nidra offers a **sanctuary of peace** in our busy lives. Whether your goal is better sleep, stress reduction, emotional healing, or spiritual growth, this ancient practice holds profound possibilities.  

Every session is unique—some may feel deeply transformative, while others may seem ordinary. Trust the process, as the benefits often accumulate subtly over time. The beauty of Yoga Nidra lies in its **simplicity and depth**. By simply showing up and surrendering to the practice, you activate your body’s innate healing abilities and access deeper levels of consciousness.  

In our **achievement-oriented** culture, Yoga Nidra reminds us of a profound truth:  
> **Sometimes, the most powerful thing we can do is nothing at all.**  


    `,
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
      image: "/blog-images/image2.jpeg",
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
      image: "/blog-images/image7.jpeg",
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
      image: "/blog-images/image5.jpeg",
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

      <div className="flex min-h-screen flex-col ">
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
                    // dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                    <div className="markdown">
                      <Markdown>{post.content}</Markdown>
                    </div>

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

