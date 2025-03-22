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

interface ArticlePost {
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

  const post: ArticlePost = {
    id: 1,
    title: "How Yoga Helps Curing Diseases",
    excerpt:
      "Learn these simple yet powerful breathing exercises that can help calm your mind, increase energy levels, and improve focus in your daily life.",
    date: "March 15, 2025",
    author: "Priya Sharma",
    authorBio:
      "Priya is a certified yoga instructor with over 10 years of experience specializing in restorative yoga and meditation. She has trained in traditional ashrams across India and brings authentic practices to modern practitioners.",
    authorImage: "/placeholder.svg?height=100&width=100&text=PS",
    category: "Yoga Practices",
    image: "/Article/cure.jpg",
    readTime: "10 min read",
    slug: "how-yoga-helps-curing-diseases",
    tags: [
      "Yoga",
      "Health",
      "Wellness",
      "Breathing Techniques",
      "Mindfulness",
    ],
    content: `# How Yoga Helps Curing Diseases  

Yoga has been practiced for thousands of years as a holistic approach to health and well-being. It combines physical postures, breathing techniques, and meditation to promote balance in the body and mind. In recent years, scientific studies have confirmed the profound impact yoga can have on preventing and managing various diseases.  

## The Role of Yoga in Disease Prevention  

Yoga helps strengthen the immune system, reduce inflammation, and improve overall physical health. Regular practice can:  

- Lower blood pressure and improve heart health.  
- Enhance lung capacity and respiratory function.  
- Reduce stress, a major contributor to chronic illnesses.  
- Improve digestion and metabolic function.  

## Breathing Techniques for Healing  

Pranayama, or yogic breathing, is a cornerstone of yoga practice. It involves controlled breathing patterns that can:  

- Calm the nervous system and reduce anxiety.  
- Increase oxygen supply to the body and brain.  
- Boost energy levels and mental clarity.  
- Support recovery from respiratory conditions like asthma.  

### Simple Breathing Exercises  

1. **Nadi Shodhana (Alternate Nostril Breathing):** Balances the mind and body.  
2. **Kapalabhati (Skull-Shining Breath):** Detoxifies the lungs and energizes the body.  
3. **Bhramari (Bee Breath):** Reduces stress and promotes relaxation.  

## Yoga for Chronic Conditions  

Yoga has been shown to be effective in managing chronic conditions such as:  

- **Diabetes:** Improves insulin sensitivity and blood sugar control.  
- **Arthritis:** Reduces joint pain and increases flexibility.  
- **Depression and Anxiety:** Enhances mood and emotional resilience.  
- **Back Pain:** Strengthens core muscles and improves posture.  

## The Mind-Body Connection  

Yoga emphasizes the connection between the mind and body. By practicing mindfulness and meditation, individuals can:  

- Develop greater self-awareness.  
- Manage emotional triggers and stress.  
- Cultivate a positive outlook on life.  

## Conclusion  

Yoga is more than just physical exercise; it is a comprehensive approach to health and healing. By incorporating yoga into your daily routine, you can experience profound benefits for your body, mind, and spirit. Whether you're looking to prevent illness, manage a chronic condition, or simply improve your quality of life, yoga offers a path to holistic well-being.  

Start your journey today and discover the transformative power of yoga in curing diseases and enhancing your overall health.  
`,
  };

  const articlePosts = [
    {
      id: 1,
      title: "How Yoga Helps Curing Diseases",
      excerpt:
        "Discover how yoga can aid in curing diseases by promoting physical health, mental clarity, and emotional balance.",
      date: "March 10, 2025",
      author: "Rahul Mehta",
      category: "Yoga Benefits",
      image: "/Article/cure.jpg",
      slug: "how-yoga-helps-curing-diseases",
    },
    {
      id: 2,
      title: "How Yoga Helps During Pregnancy",
      excerpt:
        "Learn how yoga can support a healthy pregnancy by reducing stress, improving flexibility, and enhancing overall well-being.",
      date: "February 10, 2025",
      author: "Dr. Neha Sharma",
      category: "Prenatal Yoga",
      image: "/Article/pregnancy.jpeg",
      slug: "how-yoga-helps-during-pregnancy",
    },
    {
      id: 3,
      title: "How Yoga Helps Maintaining Lifestyle",
      excerpt:
        "Explore how yoga can help you maintain a balanced and healthy lifestyle through mindfulness and physical well-being.",
      date: "February 20, 2025",
      author: "Meera Rajput",
      category: "Lifestyle",
      image: "/Article/healthylifestyle.jpeg",
      slug: "how-yoga-helps-maintaining-lifestyle",
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
                      {articlePosts.map((articlePosts, index) => (
                        <motion.div
                          key={articlePosts.id}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="group flex flex-col overflow-hidden rounded-lg border shadow-sm transition-all hover:shadow-md"
                        >
                          <div className="aspect-video overflow-hidden">
                            <Image
                              src={articlePosts.image || "/placeholder.svg"}
                              alt={articlePosts.title}
                              width={400}
                              height={225}
                              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                          </div>
                          <div className="flex flex-1 flex-col justify-between p-6">
                            <div className="space-y-2">
                              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                <span>{articlePosts.category}</span>
                                <span>•</span>
                                <span>{articlePosts.date}</span>
                              </div>
                              <h3 className="font-bold leading-tight text-primary">
                                <Link
                                  href={`/article/article-${articlePosts.id}`}
                                  className="hover:underline"
                                >
                                  {articlePosts.title}
                                </Link>
                              </h3>
                              <p className="text-sm text-muted-foreground line-clamp-2">
                                {articlePosts.excerpt}
                              </p>
                            </div>
                            <div className="pt-4">
                              <Link
                                href={`/article/article-${articlePosts.id}`}
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
