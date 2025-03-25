"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { useIsMobile } from "@/hooks/use-mobile";
import Markdown from "react-markdown";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  authorBio: string;
  authorImage: string;
  category: string;
  image: string;
  readTime: string;
  slug: string;
  tags: string[];
  content: string;
}

export default function BlogPostPage() {
  const [liked, setLiked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const isMobile = useIsMobile();

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const post: BlogPost =  {
    id: 8,
    title: "Seasonal Yoga: Adapting Your Practice Throughout the Year",
    excerpt: "How to modify your yoga practice according to different seasons to stay balanced and in harmony with nature's rhythms.",
    date: "February 5, 2025",
    author: "Kiran Joshi",
    authorBio: "Kiran is an Ayurvedic yoga teacher and seasonal wellness expert, conducting retreats that sync practices with natural cycles since 2015.",
    authorImage: "/placeholder.svg?height=100&width=100&text=KJ",
    category: "Yoga Practices",
    image: "/blog-images/image8.jpeg",
    readTime: "11 min read",
    slug: "seasonal-yoga-adapting-practice",
    tags: ["Seasonal Yoga", "Ayurveda", "Nature Cycles", "Adaptation", "Balance", "Retreats"],
    content:`# Seasonal Yoga: Adapting Your Practice Throughout the Year  

Yoga is a dynamic and adaptable practice that evolves with the seasons, offering a pathway to enhanced physical vitality, mental clarity, and emotional balance. Aligning your yoga routine with the natural cycles of the year allows you to harness the energy of each season, promoting holistic well-being. By making mindful adjustments to postures, breathing techniques, and meditation styles, you can create a deeply nourishing and effective practice that supports your body and mind throughout the year.  

Each season has its unique challenges and opportunities. The transition from one season to another affects not only the environment but also our physical health, energy levels, and mental state. Practicing seasonal yoga helps in harmonizing with these changes, ensuring that our bodies remain strong, our minds stay focused, and our emotions remain balanced.  

## **Spring: Renewal, Growth, and Cleansing**  

Spring represents new beginnings, fresh energy, and a sense of rejuvenation. It is the season of growth, making it an ideal time to embrace revitalizing yoga practices that cleanse the body, clear the mind, and boost energy levels. The lingering stagnation of winter can be shed through dynamic movements, detoxifying twists, and heart-opening postures that encourage expansion and renewal.  

### **Key Poses for Spring:**  

- **Revolved Triangle Pose (Parivrtta Trikonasana)** – A powerful twisting pose that aids digestion, detoxifies the internal organs, and restores balance.  
- **Camel Pose (Ustrasana)** – Opens the heart, stretches the spine, and promotes emotional release.  
- **Tree Pose (Vrikshasana)** – Enhances focus, balance, and inner stability while connecting you with nature’s renewal.  

### **Breathing and Meditation Practices for Spring:**  

- **Kapalabhati Pranayama (Skull-Shining Breath)** – A cleansing breath that removes sluggishness and boosts oxygen flow.  
- **Visualization Meditation** – Imagining new growth and opportunities fosters a sense of purpose and motivation.  
- **Detox-Focused Yoga Sequences** – A combination of twists and dynamic flows to eliminate toxins, stimulate digestion, and revitalize energy levels.  

## **Summer: Cooling, Hydration, and Energy Balance**  

As temperatures rise, the body tends to accumulate excess heat, leading to fatigue, dehydration, and irritability. Summer yoga should focus on cooling, hydration, and balance to counteract excessive warmth. A gentle, restorative approach with calming postures and cooling breathwork is ideal.  

### **Key Poses for Summer:**  

- **Seated Forward Fold (Paschimottanasana)** – Helps in cooling the body, calming the nervous system, and releasing heat.  
- **Moon Salutations (Chandra Namaskar)** – A soothing alternative to Sun Salutations, designed to cool the body and quiet the mind.  
- **Legs-Up-the-Wall Pose (Viparita Karani)** – A restorative posture that reduces swelling, improves circulation, and relieves stress.  

### **Breathing and Meditation Practices for Summer:**  

- **Sheetali Pranayama (Cooling Breath)** – A special breathing technique that helps regulate body temperature and prevents overheating.  
- **Mindfulness Meditation on Gratitude** – Fosters joy, appreciation, and emotional stability.  
- **Evening Yoga Sessions** – Practicing in the early morning or late evening helps avoid heat exhaustion and maximizes relaxation.  

## **Autumn: Grounding, Stability, and Reflection**  

Autumn is a transitional season, marked by a shift from the high energy of summer to the stillness of winter. The cooling air and shorter days call for grounding yoga practices that enhance stability, encourage introspection, and prepare the body for the colder months ahead.  

### **Key Poses for Autumn:**  

- **Warrior II (Virabhadrasana II)** – Strengthens the legs, builds endurance, and fosters a sense of stability.  
- **Pigeon Pose (Eka Pada Rajakapotasana)** – A deep hip opener that releases tension, enhances flexibility, and encourages emotional release.  
- **Butterfly Pose (Baddha Konasana)** – Improves circulation, stretches the lower back, and fosters relaxation.  

### **Breathing and Meditation Practices for Autumn:**  

- **Nadi Shodhana (Alternate Nostril Breathing)** – Balances energy flow, promotes mental clarity, and eases seasonal transitions.  
- **Gratitude Meditation** – Encourages reflection, appreciation, and emotional resilience.  
- **Restorative Yoga Practices** – Incorporating deep, gentle stretches to provide comfort and emotional support during the seasonal shift.  

## **Winter: Warmth, Immunity, and Vitality**  

Winter is a time of introspection, rest, and conservation of energy. The colder months tend to bring sluggishness, stiffness, and lower energy levels, making it essential to incorporate warming yoga practices that generate heat, boost circulation, and enhance immunity. Dynamic movements and breathwork help maintain vitality and prevent winter fatigue.  

### **Key Poses for Winter:**  

- **Sun Salutations (Surya Namaskar)** – A flowing sequence that builds heat, stimulates circulation, and energizes the body.  
- **Boat Pose (Navasana)** – Strengthens the core, improves digestion, and boosts stamina.  
- **Cobra Pose (Bhujangasana)** – Opens the chest, improves flexibility, and stimulates the nervous system.  

### **Breathing and Meditation Practices for Winter:**  

- **Bhastrika (Bellows Breath)** – A powerful breathwork technique that generates warmth, clears congestion, and increases oxygen supply.  
- **Loving-Kindness Meditation (Metta Bhavana)** – Cultivates feelings of warmth, compassion, and emotional connection.  
- **Dynamic Yoga Movements** – Engaging in fluid, continuous movements to combat stiffness and enhance vitality.  

## **Year-Round Transitional Practices**  

To maintain balance throughout the year, integrating transitional practices into your routine can be highly beneficial. These practices help the body adjust smoothly between seasonal changes and sustain a sense of equilibrium.  

### **Morning Yoga Routines:**  

- Energizing sequences like **Sun Salutations** are excellent for spring and winter, helping boost circulation and wake up the body.  

### **Evening Yoga Sessions:**  

- Cooling and restorative poses like **Legs-Up-the-Wall** and **Seated Forward Fold** help the body unwind, making them ideal for summer and autumn.  

### **Additional Wellness Considerations:**  

- Adjust hydration, diet, and relaxation techniques according to seasonal needs.  
- Practicing yoga in a group setting fosters motivation, accountability, and emotional support.  
- Incorporate mindful walking, journaling, and nature-inspired meditations to deepen seasonal awareness.  

## **Conclusion: Embracing the Seasonal Flow of Yoga**  

By adapting yoga practices to the rhythms of nature, individuals can sustain **resilience, balance, and vitality** throughout the year. Whether focusing on **renewal in spring, cooling techniques in summer, grounding exercises in autumn, or warmth in winter**, seasonal yoga deepens the connection between body, mind, and environment.  

Embracing these seasonal adjustments ensures that yoga remains a **transformative, healing, and enriching practice year-round**, allowing practitioners to cultivate **inner harmony, adaptability, and holistic well-being** regardless of the season.  
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
  ];

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

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
          <img
            src="/whatsapp_icon.png"
            alt="whatsapp icon"
            className="h-8 w-8 text-white"
          />
        </a>
        <Header></Header>

        <main className="flex-1">
          {isLoading ? (
            <div className="flex items-center justify-center min-h-[60vh]">
              <div className="relative w-14 h-14">
                <motion.div
                  className="absolute top-0 left-0 w-full h-full rounded-full border-4 border-t-primary border-r-transparent border-b-transparent border-l-transparent"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 0.5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                />
              </div>
            </div>
          ) : (
            <>
              <div className="py-10">
                <div className="container px-4 md:px-6">
                  {/* Back to blog link */}
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                    className="mb-8"
                  >
                    <Button
                      variant="ghost"
                      size="sm"
                      asChild
                      className="gap-1 text-primary hover:bg-primary/5"
                    >
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
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                    className="mx-auto max-w-3xl"
                  >
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
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      variants={fadeIn}
                      className="mt-8 border-t pt-8"
                    >
                      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <Button
                            variant="outline"
                            size="sm"
                            className={`gap-2 rounded-full ${
                              liked
                                ? "bg-red-50 text-red-500 border-red-200"
                                : "hover:bg-primary/5 text-primary border-primary/20"
                            }`}
                            onClick={() => setLiked(!liked)}
                          >
                            <Heart
                              className={`h-4 w-4 ${
                                liked ? "fill-red-500" : ""
                              }`}
                            />
                            {liked ? "Liked" : "Like"}
                          </Button>
                          <div className="text-sm font-medium">
                            Share this article:
                          </div>
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
                          <Image
                            src={post.authorImage || "/placeholder.svg"}
                            alt={post.author}
                            width={64}
                            height={64}
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-primary">
                            {post.author}
                          </h3>
                          <p className="text-muted-foreground">
                            {post.authorBio}
                          </p>
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
                    <h2 className="mb-8 text-2xl font-bold text-center text-primary">
                      Related Articles
                    </h2>
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
                                <Link
                                  href={`/blog/blog-${relatedPost.id}`}
                                  className="hover:underline"
                                >
                                  {relatedPost.title}
                                </Link>
                              </h3>
                              <p className="text-sm text-muted-foreground line-clamp-2">
                                {relatedPost.excerpt}
                              </p>
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
                        <h2 className="text-2xl font-bold text-primary">
                          Subscribe to Our Newsletter
                        </h2>
                        <p className="text-muted-foreground">
                          Stay updated with the latest yoga practices, wellness
                          tips, and Ayurvedic insights from our blog. Join our
                          community today.
                        </p>
                      </div>
                      <div className="flex flex-col gap-4 sm:flex-row">
                        <input
                          type="email"
                          placeholder="Enter your email"
                          className="flex h-10 w-full rounded-md border border-primary/20 bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        />
                        <Button className="bg-secondary hover:bg-secondary/90 text-white">
                          Subscribe
                        </Button>
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
  );
}
