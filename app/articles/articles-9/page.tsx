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

  const post: BlogPost =   {
    id: 9,
    title: "The Role of Yoga in Pain Management",
    excerpt: "How specific yoga poses and mindfulness techniques can help manage chronic pain conditions and improve quality of life.",
    date: "January 30, 2025",
    author: "Dr. Sanjay Gupta",
    authorBio: "Dr. Gupta is a pain management specialist and yoga therapist, integrating Western medicine with Eastern healing modalities at his Mumbai clinic.",
    authorImage: "/placeholder.svg?height=100&width=100&text=SG",
    category: "Wellness",
    image: "/blog-images/image9.jpeg",
    readTime: "13 min read",
    slug: "yoga-pain-management",
    tags: ["Pain Management", "Chronic Pain", "Therapy", "Mindfulness", "Rehabilitation", "Integrative Medicine"],
    content: `# The Role of Yoga in Pain Management  

Pain is an inevitable part of life, but chronic pain can significantly impact one's quality of life, leading to physical limitations, emotional distress, and reduced mobility. While conventional treatments such as medication and physical therapy play crucial roles in pain relief, holistic approaches like **yoga** have gained widespread recognition for their effectiveness in managing pain naturally. Yoga offers a **mind-body approach** that combines movement, breath control, and mindfulness to alleviate discomfort, improve mobility, and enhance overall well-being.  

By engaging in slow, controlled movements synchronized with breath, yoga **activates the parasympathetic nervous system**, promoting relaxation and reducing stress-induced pain responses. Mindfulness meditation, a key component of yoga, helps rewire the brain’s perception of pain, altering activity in the **prefrontal cortex** and reducing sensitivity to pain. Scientific studies confirm that yoga reduces **cortisol levels**, lowering inflammation-related discomfort and fostering emotional resilience.  

---

## **Yoga for Chronic Pain Conditions**  

People suffering from chronic pain conditions such as **back pain, arthritis, migraines, fibromyalgia, and neuropathic pain** have found significant relief through regular yoga practice. Unlike high-impact exercises, yoga offers **gentle movements** that help improve circulation, reduce stiffness, and promote flexibility without straining the body.  

### **1. Back Pain Relief**  
Lower back pain is one of the most common chronic pain conditions affecting millions worldwide. Prolonged sitting, poor posture, and muscle tension contribute to spinal discomfort. Yoga provides relief by:  

- **Improving spinal alignment** through poses like **Cat-Cow (Marjaryasana-Bitilasana)** and **Sphinx Pose**, which gently stretch the lower back.  
- **Strengthening core muscles**, which support the spine and reduce strain, through poses like **Bridge Pose (Setu Bandhasana)** and **Plank (Phalakasana)**.  
- **Enhancing flexibility** in the hamstrings and hips with **Downward Dog (Adho Mukha Svanasana)** and **Seated Forward Bend (Paschimottanasana)**.  

### **2. Arthritis and Joint Pain**  
Arthritis causes inflammation, pain, and stiffness in the joints, making movement difficult. However, low-impact yoga postures improve mobility and alleviate discomfort by:  

- **Reducing joint stiffness** through **Child’s Pose (Balasana)** and **supported Warrior variations**, which allow gentle stretching.  
- **Increasing circulation to inflamed joints**, helping to minimize pain and swelling.  
- **Enhancing mobility** with movements like **Chair Pose (Utkatasana)** and **Extended Triangle Pose (Trikonasana)**, which strengthen supporting muscles.  

### **3. Migraine and Headache Relief**  
Chronic headaches and migraines are often linked to stress, poor posture, and muscle tension in the neck and shoulders. Yoga alleviates headaches by:  

- **Promoting relaxation** through **restorative poses** like **Legs-Up-the-Wall (Viparita Karani)**, which improves blood flow to the brain.  
- **Regulating breathing patterns** using techniques such as **Alternate Nostril Breathing (Nadi Shodhana)**, which calms the nervous system.  
- **Reducing neck and shoulder tension** with gentle stretches like **Seated Neck Rolls** and **Thread-the-Needle Pose**.  

### **4. Fibromyalgia and Nervous System Regulation**  
Fibromyalgia is a chronic pain disorder that causes widespread musculoskeletal pain, fatigue, and sleep disturbances. Yoga is highly beneficial for fibromyalgia sufferers by:  

- **Modulating the nervous system**, shifting from a heightened stress response to a state of relaxation.  
- **Encouraging deep rest** through **Yoga Nidra**, a guided meditation that helps regulate pain signals.  
- **Improving flexibility and circulation** with **Yin Yoga**, a slow-paced practice that targets deep connective tissues.  

---

## **Pain-Relief Yoga Techniques**  

The key to using yoga effectively for pain management lies in **gentle, mindful movements** combined with **breath control and meditation**. Specific techniques that have been scientifically proven to aid in pain relief include:  

### **1. Breathwork (Pranayama)**  
Breath control techniques enhance oxygen flow, relax the nervous system, and reduce pain perception. Some beneficial pranayama practices include:  

- **Ujjayi (Ocean Breath):** A slow, rhythmic breath that calms the mind and relieves tension in the body.  
- **Dirga (Three-Part Breath):** Deep abdominal breathing that enhances oxygen intake and improves circulation.  
- **Bhastrika (Bellows Breath):** Stimulates energy, warms the body, and reduces fatigue-related pain.  

### **2. Restorative Yoga for Deep Healing**  
Restorative yoga utilizes props like bolsters, blankets, and blocks to **fully support the body**, allowing complete relaxation. This is particularly beneficial for individuals with **chronic pain conditions** as it:  

- **Reduces muscular tension** and eases pain by allowing deep relaxation.  
- **Lowers cortisol levels**, minimizing stress-induced inflammation.  
- **Improves sleep quality**, which is crucial for pain management and healing.  

### **3. Meditation and Mindfulness for Pain Perception**  
Scientific research suggests that mindfulness-based meditation can **change how the brain perceives pain**, reducing its intensity. Some effective techniques include:  

- **Body Scan Meditation:** Directing attention to different body parts to release stored tension.  
- **Loving-Kindness Meditation:** Cultivating compassion and emotional resilience, helping to reduce stress-related pain.  
- **Mantra Meditation:** Repeating calming phrases or affirmations to shift focus away from pain.  

---

## **Scientific Evidence Supporting Yoga for Pain Relief**  

Research strongly supports the role of yoga in chronic pain management. Clinical studies highlight:  

- **Lower back pain relief:** A study published in the Annals of Internal Medicine found that regular yoga practice reduced **lower back pain by up to 43%** and improved mobility significantly.  
- **Arthritis improvements:** The Journal of Rheumatology reported a **30% increase in mobility** and pain reduction in arthritis patients practicing yoga.  
- **Brain structure changes:** MRI studies reveal that consistent yoga practice increases **gray matter density** in brain regions responsible for pain regulation.  
- **Medication reduction:** A meta-analysis found that individuals practicing yoga required **less pain medication** compared to those relying solely on conventional treatments.  

---

## **Precautions and Safe Yoga Practice for Pain Relief**  

While yoga is a safe and effective method for pain management, certain precautions should be taken to prevent injury and ensure maximum benefits:  

- **Start with guided classes:** Beginners and those with chronic pain should practice under the supervision of a trained instructor.  
- **Avoid overstretching:** Pain should never be forced—use modifications and props to ensure a comfortable practice.  
- **Practice consistently but gently:** Regular practice yields the best results, but pushing too hard can worsen pain.  
- **Combine yoga with medical treatment:** Yoga works best as a **complementary therapy**, alongside prescribed medical care and physical therapy.  

---

## **Conclusion: Embracing Yoga for a Pain-Free Life**  

Yoga is more than just a physical exercise; it is a **holistic approach** to healing that integrates the body, mind, and breath to promote overall wellness. Whether dealing with chronic back pain, arthritis, migraines, or fibromyalgia, incorporating yoga into daily life can lead to **significant improvements** in flexibility, mobility, and emotional resilience.  

With proper guidance, consistency, and mindfulness, yoga provides a **non-invasive, natural solution** for managing pain, empowering individuals to lead a more **comfortable, active, and fulfilling life**.  

By embracing the ancient wisdom of yoga and applying modern scientific research, we can **unlock the power of self-healing**, reduce pain, and restore balance to our lives.  
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
