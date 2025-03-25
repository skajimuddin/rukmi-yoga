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

  const post: BlogPost =  {
    id: 2,
    title: "5 Pranayama Techniques for Beginners",
    excerpt: "Learn these simple yet powerful breathing exercises that can help calm your mind, increase energy levels, and improve focus in your daily life.",
    date: "March 10, 2025",
    author: "Rahul Mehta",
    authorBio: "Rahul is a senior yoga therapist specializing in respiratory health and breathwork. With 8 years of teaching experience, he integrates traditional pranayama techniques with modern breathing science.",
    authorImage: "/placeholder.svg?height=100&width=100&text=RM",
    category: "Breathing Techniques",
    image: "/blog-images/image2.jpeg",
    readTime: "12 min read",
    slug: "pranayama-techniques-beginners",
    tags: ["Pranayama", "Breathwork", "Stress Relief", "Energy", "Focus", "Beginners"],
    content: `# The Power of Pranayama: Mastering Breathwork for Mind-Body Balance

Pranayama serves as a **crucial bridge** between physical yoga practice and meditation, offering structured **breath control techniques** that enhance **energy regulation, mental clarity, emotional stability, and overall well-being**. By practicing pranayama regularly, individuals can unlock the transformative power of breath, fostering **calmness, vitality, and inner balance**. 

Among the many breathing techniques in yoga, **five essential pranayama practices** provide a structured foundation, especially for **beginners**. These techniques range from **deep relaxation to energy activation**, catering to diverse physical and mental needs.

---

## 1. Three-Part Breath (Dirga Pranayama) – The Foundation of Deep Breathing

The **Three-Part Breath** is an essential technique that develops **diaphragmatic awareness** and helps establish a habit of deep, controlled breathing. 

### How It Works:
- Inhale deeply, expanding the **abdomen**, then the **ribcage**, and finally the **chest**.
- Exhale in reverse order, first releasing air from the **chest**, then the **ribcage**, and finally the **abdomen**.
- This process **maximizes lung capacity** and creates a **rhythmic breathing pattern**.

### Benefits:
- Enhances **lung function** and **oxygen intake**.  
- Activates the **parasympathetic nervous system**, reducing **stress and anxiety**.  
- Promotes **better posture awareness** and **core engagement**.  
- Ideal for **relaxation before sleep** or **reducing stress during the day**.

**Tip:** Practice **5-10 minutes before bedtime** to experience profound relaxation and improved sleep quality.

---

## 2. Alternate Nostril Breathing (Nadi Shodhana) – Balancing the Mind and Energy

**Nadi Shodhana** is a traditional technique used to **balance the left and right hemispheres of the brain**, improving **mental clarity, focus, and emotional equilibrium**.

### How It Works:
- Use the **thumb** to close the **right nostril** and inhale through the **left nostril**.
- Close the **left nostril** with the **ring finger**, release the **right nostril**, and exhale.
- Inhale through the **right nostril**, close it, and exhale through the **left nostril**.
- Repeat this cycle **5-10 times** while maintaining a **calm and steady rhythm**.

### Benefits:
- Enhances **focus, cognitive function, and concentration**.  
- Reduces **stress, anxiety, and emotional imbalances**.  
- Balances **energy channels (nadis)**, promoting **mental and emotional stability**.  
- Particularly effective **before meditation** or **intense study sessions**.

**Tip:** Practice **each morning for 5-10 minutes** to start the day with a **clear and balanced mind**.

---

## 3. Skull Shining Breath (Kapalabhati) – Energizing and Detoxifying

**Kapalabhati** is a dynamic breathing technique that **stimulates the nervous system, detoxifies the body, and boosts mental alertness**.

### How It Works:
- Take a **deep inhalation**.
- Exhale **forcefully and rapidly** through the nose by contracting the **abdominal muscles**.
- Keep the inhalation **passive**, allowing the lungs to fill naturally.
- Repeat this cycle for **30-50 breaths**, then rest.

### Benefits:
- **Boosts metabolism** and **energizes the body**.  
- Detoxifies the **lungs and respiratory system**.  
- Enhances **oxygen circulation** and **mental sharpness**.  
- Helps overcome **lethargy and fatigue**.

**Caution:** Avoid if you have **high blood pressure, heart conditions, or respiratory disorders**.

**Tip:** Best practiced on an **empty stomach in the morning** for maximum energy and detoxification.

---

## 4. Humming Bee Breath (Bhramari) – Deep Relaxation and Emotional Healing

**Bhramari Pranayama** induces **instant relaxation** through a **soothing humming vibration**, calming the nervous system and reducing stress.

### How It Works:
- Take a deep inhale.
- Exhale **slowly and steadily** while making a **soft humming sound** (like a bee).
- Close your **ears with your thumbs** and gently rest your fingers over your forehead and eyes.
- Repeat this for **5-7 rounds**, feeling the **vibrations resonate** within.

### Benefits:
- Reduces **stress, anxiety, and mental agitation**.  
- Improves **sleep quality** and relieves **headaches**.  
- Encourages **emotional release** and **inner calmness**.  
- A great technique **before bedtime** to promote **deep relaxation**.

**Tip:** Practicing **5 minutes before sleeping** can significantly improve **sleep quality and reduce overthinking**.

---

## 5. Victorious Breath (Ujjayi) – Enhancing Focus and Inner Strength

**Ujjayi Pranayama** is often called **“Victorious Breath”** due to its powerful ability to regulate breathing, enhance concentration, and generate **inner warmth**.

### How It Works:
- Inhale **slowly and deeply** through the nose while slightly constricting the **throat**.
- Exhale in the **same controlled manner**, creating a **soft ocean-like sound**.
- Maintain **steady, rhythmic breathing** for **5-10 minutes**.

### Benefits:
- **Improves breath control** and **builds stamina**.  
- Encourages **mindfulness and deep concentration**.  
- Generates **internal warmth**, making it ideal for **cold weather**.  
- Commonly used in **yoga asana practice** to maintain steady breathing.

**Tip:** Use Ujjayi during **yoga flows** (like Vinyasa) to **enhance focus and breath awareness**.

---

## Scientific Research: How Pranayama Impacts Health  

Pranayama is **scientifically validated** for improving both **physical and mental health**. Studies have shown that regular practice leads to:

- **Increased Heart Rate Variability (HRV)** → Enhances **cardiac health** and **reduces stress**.  
- **Improved Respiratory Function** → Beneficial for individuals with **asthma and COPD**.  
- **Enhanced Cognitive Abilities** → Boosts **focus, memory, and decision-making skills**.  
- **Lower Cortisol Levels** → Reduces **stress-induced inflammation**.  

MRI studies indicate that pranayama **increases gray matter density** in brain areas responsible for **emotion regulation and pain management**.

---

## How to Begin Your Pranayama Journey  

For **beginners**, follow these tips:  

- Start with **short sessions (5-10 minutes daily)** and gradually increase the duration.  
- Practice in the **morning on an empty stomach** for optimal benefits.  
- Maintain **proper posture** – sit with a **straight spine** for better breath control.  
- Focus on **quality over duration** – correct breathing is more important than long sessions.  
- End with **meditation or relaxation** to fully integrate the effects.  

Even **office workers** can practice **seated variations** during breaks, making pranayama accessible in daily life.

---

## Conclusion: The Power of Breath  

By incorporating these **five pranayama techniques** into daily life, individuals can experience **remarkable physical, mental, and emotional benefits**. Whether seeking **stress relief, increased energy, or mindfulness**, pranayama is a **powerful tool for holistic well-being**.  

**Start today**, and witness how breathwork can transform your mind, body, and spirit!
`
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
                      <Link href="/articles">
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
                    className="my-8 mx-auto max-w-3xl"
                  >
                    <div className="relative overflow-hidden rounded-lg">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        width={1200}
                        height={600}
                        className="w-full aspect-video rounded-lg object-cover transition-transform duration-500 hover:scale-105"
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

