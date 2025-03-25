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

  const post: BlogPost = {
    id: 6,
    title: "Yoga for Office Workers: Desk-Friendly Poses",
    excerpt: "Simple yoga poses and stretches you can do at your desk to relieve tension, improve posture, and stay energized throughout the workday.",
    date: "February 15, 2025",
    author: "Arjun Singh",
    authorBio: "Arjun is a corporate wellness specialist and ergonomic yoga expert, helping companies implement workplace wellness programs since 2018.",
    authorImage: "/placeholder.svg?height=100&width=100&text=AS",
    category: "Yoga Practices",
    image: "/blog-images/image6.jpeg",
    readTime: "9 min read",
    slug: "yoga-office-workers-desk-poses",
    tags: ["Office Yoga", "Posture", "Ergonomics", "Desk Exercises", "Stretching", "Workplace Wellness"],
    content: `# Yoga for Office Workers: Desk-Friendly Poses  

Long hours of sitting at a desk can **harm your posture, cause physical discomfort, and increase mental fatigue**. Over time, this contributes to **back pain, neck stiffness, reduced flexibility, and decreased productivity**. The modern office lifestyle often leads to:  

- **Tight hips and hamstrings** from prolonged sitting  
- **Poor circulation** due to lack of movement  
- **Eye strain and headaches** from excessive screen time  
- **Mental stress and burnout** from continuous workflow  

### The Solution: Desk-Friendly Yoga!  

Incorporating simple **yoga poses** into the workday can **reverse these effects**, helping to:  

✅ **Relieve muscle tension**  
✅ **Boost energy levels**  
✅ **Enhance focus and productivity**  
✅ **Improve posture and circulation**  
✅ **Reduce stress and anxiety**  

The best part? These poses require **minimal space** and can be done **without leaving your desk**! Even just **5-10 minutes** of movement every few hours can **drastically improve** your well-being.  

---

## 1. Seated Neck Stretch  

**Targets:** Neck, shoulders, upper back  

### How to do it:  
1. Sit tall with your feet flat on the floor.  
2. Tilt your head to the right, bringing your right ear toward your shoulder.  
3. Hold for **15-30 seconds**, breathing deeply.  
4. Repeat on the left side.  
5. For a deeper stretch, gently press the opposite shoulder down.  

### Benefits:  
- **Reduces neck stiffness** caused by looking at screens  
- **Improves posture** and prevents slouching  
- **Eases tension headaches** caused by stress and poor ergonomics  

---

## 2. Shoulder Rolls  

**Targets:** Shoulders, upper back  

### How to do it:  
1. Sit or stand with a straight spine.  
2. Roll your shoulders forward in slow, controlled circles **5-10 times**.  
3. Reverse the direction and repeat.  
4. Sync your breath—inhale as you lift your shoulders, exhale as you drop them.  

### Benefits:  
- **Relieves shoulder tightness** from typing  
- **Improves circulation** and reduces stiffness  
- **Reduces stress** and promotes relaxation  

---

## 3. Seated Spinal Twist  

**Targets:** Spine, lower back, digestion  

### How to do it:  
1. Sit with your feet flat on the ground.  
2. Place your right hand on your left knee and your left hand on the chair’s armrest.  
3. Inhale deeply, lengthen your spine.  
4. Exhale, twist to the left, looking over your left shoulder.  
5. Hold for **20-30 seconds**, then switch sides.  

### Benefits:  
- **Increases spinal flexibility** and reduces lower back pain  
- **Aids digestion** by stimulating internal organs  
- **Releases stored tension** from prolonged sitting  

---

## 4. Seated Forward Fold  

**Targets:** Lower back, hamstrings  

### How to do it:  
1. Sit at the edge of your chair with your feet hip-width apart.  
2. Inhale deeply, then exhale as you hinge forward from your hips.  
3. Let your hands rest on your legs or dangle toward the floor.  
4. Hold for **20-30 seconds**, then slowly rise.  

### Benefits:  
- **Relieves lower back stiffness** from long sitting hours  
- **Stretches hamstrings** and reduces tightness  
- **Improves circulation** and reduces fatigue  

---

## 5. Chair Cat-Cow Stretch  

**Targets:** Spine, shoulders, chest  

### How to do it:  
1. Sit with your feet flat and hands on your knees.  
2. **Cow Pose:** Inhale, arch your back, and lift your chest.  
3. **Cat Pose:** Exhale, round your back, and tuck your chin.  
4. Repeat **5-10 times**, syncing breath with movement.  

### Benefits:  
- **Promotes spinal flexibility** and relieves stiffness  
- **Reduces stress and tension** in the upper body  
- **Enhances deep breathing** and lung capacity  

---

## 6. Wrist & Finger Stretch  

**Targets:** Wrists, fingers, forearms  

### How to do it:  
1. Extend one arm forward with your palm facing up.  
2. Use the opposite hand to gently pull back the fingers.  
3. Hold for **15-20 seconds**, then switch sides.  
4. Repeat with the palm facing down for a deeper wrist stretch.  

### Benefits:  
- **Prevents wrist strain** from excessive typing  
- **Reduces the risk of carpal tunnel syndrome**  
- **Enhances finger flexibility** and grip strength  

---

## 7. Desk Shoulder Opener  

**Targets:** Shoulders, chest  

### How to do it:  
1. Stand facing your desk and place your hands on the edge.  
2. Step back slightly and hinge forward, lowering your chest.  
3. Hold for **20-30 seconds**, breathing deeply.  

### Benefits:  
- **Counters the effects of hunching over** your desk  
- **Opens the chest** for better posture  
- **Improves shoulder mobility** and reduces tension  

---

## Additional Workplace Wellness Tips  

- **Follow the 20-20-20 rule:** Every 20 minutes, look 20 feet away for 20 seconds to reduce eye strain.  
- **Stay hydrated:** Dehydration worsens fatigue and stiffness—drink plenty of water.  
- **Use an ergonomic chair and desk setup:** Proper posture prevents chronic pain.  
- **Take regular breaks:** Stand up, walk around, and stretch every hour.  
- **Practice mindful breathing:** 5 deep belly breaths can instantly reduce stress.  

---

## Enhancing Workplace Wellness with Yoga  

By **regularly practicing these desk-friendly yoga poses**, you can **transform your workday** and:  

- **Reduce stiffness and pain** from prolonged sitting  
- **Boost energy levels** and fight mid-day slumps  
- **Enhance focus, creativity, and productivity**  
- **Improve posture, flexibility, and circulation**  
- **Lower stress and anxiety levels naturally**  

Just a few minutes of mindful movement **every day** can make a huge difference. **Start today** and make your workplace a **healthier, happier, and more comfortable environment**!  

> **"A flexible body leads to a flexible mind. Keep moving, stay energized!"**  
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
