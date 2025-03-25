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
    id: 5,
    title: "Understanding the Seven Chakras",
    excerpt: "A comprehensive guide to the seven energy centers in the body, their significance, and how to balance them through yoga and meditation.",
    date: "February 20, 2025",
    author: "Meera Rajput",
    authorBio: "Meera is a spiritual teacher and energy healer with 15 years experience in chakra therapy. Creator of the Chakra Alignment System®.",
    authorImage: "/placeholder.svg?height=100&width=100&text=MR",
    category: "Spiritual Growth",
    image: "/blog-images/image5.jpeg",
    readTime: "18 min read",
    slug: "understanding-seven-chakras",
    tags: ["Chakras", "Energy Healing", "Meditation", "Spirituality", "Balance", "Alignment"],
    content: `# The Seven Chakras: Energy Centers of the Body  

The **seven chakras** are energy centers within the human body that influence **physical, emotional, and spiritual well-being**. When these chakras are **balanced**, they allow energy to flow freely, promoting **harmony and vitality**. However, blockages in these chakras can lead to **emotional distress, physical ailments, and mental imbalance**.  

Each chakra is associated with specific **colors, elements, emotions, and organs**. By practicing **yoga, meditation, affirmations, and mindful living**, we can bring our chakras into alignment, enhancing our overall well-being.  

---

## 1. Root Chakra (Muladhara)  
- **Location:** Base of the spine  
- **Color:** Red  
- **Element:** Earth  
- **Represents:** Stability, security, survival, grounding  
- **Organs Affected:** Legs, feet, bones, colon, adrenal glands  
- **Signs of Imbalance:**  
  - Feeling anxious, insecure, or fearful  
  - Financial instability or lack of purpose  
  - Physical issues like lower back pain, constipation, or immune disorders  
- **How to Balance:**  
  - **Yoga Poses:** Mountain Pose, Warrior I, Squats, Child’s Pose  
  - **Affirmations:** "I am safe and secure in my life."  
  - **Healing Practices:** Walking barefoot on the earth, grounding foods (root vegetables, proteins), meditation on stability  

---

## 2. Sacral Chakra (Svadhisthana)  
- **Location:** Lower abdomen, below the navel  
- **Color:** Orange  
- **Element:** Water  
- **Represents:** Creativity, passion, emotions, sensuality  
- **Organs Affected:** Reproductive organs, kidneys, bladder  
- **Signs of Imbalance:**  
  - Lack of creativity or motivation  
  - Fear of intimacy, guilt, or emotional instability  
  - Reproductive issues or lower back pain  
- **How to Balance:**  
  - **Yoga Poses:** Goddess Pose, Pigeon Pose, Hip Circles  
  - **Affirmations:** "I embrace pleasure and creativity in my life."  
  - **Healing Practices:** Dance, water therapy, painting, journaling, eating citrus fruits  

---

## 3. Solar Plexus Chakra (Manipura)  
- **Location:** Upper abdomen, stomach area  
- **Color:** Yellow  
- **Element:** Fire  
- **Represents:** Confidence, personal power, self-esteem  
- **Organs Affected:** Stomach, pancreas, liver, digestive system  
- **Signs of Imbalance:**  
  - Low self-confidence, feeling powerless or indecisive  
  - Digestive issues, ulcers, or chronic fatigue  
  - Excessive control, aggression, or perfectionism  
- **How to Balance:**  
  - **Yoga Poses:** Boat Pose, Twists, Warrior III  
  - **Affirmations:** "I am strong, confident, and worthy."  
  - **Healing Practices:** Sun exposure, core-strengthening exercises, eating yellow foods like bananas and turmeric  

---

## 4. Heart Chakra (Anahata)  
- **Location:** Center of the chest  
- **Color:** Green  
- **Element:** Air  
- **Represents:** Love, compassion, relationships, forgiveness  
- **Organs Affected:** Heart, lungs, arms, hands  
- **Signs of Imbalance:**  
  - Difficulty in relationships, fear of love or rejection  
  - Holding onto past grief, jealousy, or resentment  
  - Heart-related health issues, respiratory problems  
- **How to Balance:**  
  - **Yoga Poses:** Camel Pose, Cobra Pose, Bridge Pose  
  - **Affirmations:** "I give and receive love effortlessly."  
  - **Healing Practices:** Heart-opening exercises, acts of kindness, self-love rituals, breathwork  

---

## 5. Throat Chakra (Vishuddha)  
- **Location:** Throat region  
- **Color:** Blue  
- **Element:** Ether (Space)  
- **Represents:** Communication, self-expression, truth  
- **Organs Affected:** Throat, vocal cords, thyroid gland  
- **Signs of Imbalance:**  
  - Difficulty expressing emotions, fear of speaking up  
  - Frequent sore throat, thyroid imbalances, neck tension  
  - Speaking too much or too little, dishonesty  
- **How to Balance:**  
  - **Yoga Poses:** Fish Pose, Shoulder Stand, Lion’s Breath  
  - **Affirmations:** "I express my truth with clarity and confidence."  
  - **Healing Practices:** Singing, chanting, journaling, drinking herbal teas  

---

## 6. Third Eye Chakra (Ajna)  
- **Location:** Between the eyebrows  
- **Color:** Indigo  
- **Element:** Light  
- **Represents:** Intuition, wisdom, inner vision, imagination  
- **Organs Affected:** Eyes, brain, nervous system  
- **Signs of Imbalance:**  
  - Lack of clarity, overthinking, confusion  
  - Headaches, migraines, vision problems  
  - Disconnection from intuition, nightmares  
- **How to Balance:**  
  - **Yoga Poses:** Child’s Pose, Dolphin Pose, Meditation  
  - **Affirmations:** "I trust my intuition and inner wisdom."  
  - **Healing Practices:** Visualization exercises, mindfulness, reducing screen time  

---

## 7. Crown Chakra (Sahasrara)  
- **Location:** Top of the head  
- **Color:** Violet or White  
- **Element:** Divine Consciousness  
- **Represents:** Spiritual connection, enlightenment, higher awareness  
- **Organs Affected:** Brain, nervous system, pineal gland  
- **Signs of Imbalance:**  
  - Feeling disconnected, lacking purpose  
  - Depression, anxiety, or existential crisis  
  - Insomnia, headaches, lack of inspiration  
- **How to Balance:**  
  - **Yoga Poses:** Headstand, Lotus Pose, Savasana  
  - **Affirmations:** "I am connected to the universe and my higher self."  
  - **Healing Practices:** Meditation, prayer, gratitude, fasting, spending time in nature  

---

## The Power of Chakra Balancing  
Balancing the seven chakras is essential for **overall well-being**, promoting **physical health, emotional stability, and spiritual growth**. When our energy centers are aligned, we feel **centered, empowered, and at peace**.  

### How to Maintain Chakra Health:  
- **Daily yoga and meditation practice**  
- **Mindful breathing techniques**  
- **Healthy diet with chakra-aligned foods**  
- **Journaling and self-reflection**  
- **Crystal healing and aromatherapy**  
- **Expressing gratitude and practicing self-love**  

By tuning into our chakras, we can harness their energy to **create balance, overcome obstacles, and achieve a deeper sense of fulfillment**.  

> "When all your chakras are open, your energy flows freely, and you unlock your highest potential."  
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
