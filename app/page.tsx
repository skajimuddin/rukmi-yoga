"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Heart,
  Leaf,
  Star,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Send,
  Users,
  Award,
  Clock,
  Shield,
  Target,
} from "lucide-react";
import Gallerypage from "./gallery/page";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

import Header from "@/components/header";
import Footer from "@/components/footer";
import productsData from "@/data/products.json";
import ConsultationPopup from "@/components/ConsultationPopup";

export default function LandingPage() {
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const testimonials = [
    {
      name: "Ms Capussini from France ( student)",
      role: "",
      quote:
        "I am extremely thankful and I am a fan of Sri Rukhaminii Yoga Techniques. Cheers on my healthy body and mind. I understood the deeper level of human beings.",
    },
    {
      name: "Mr.  Abhijit Gandhi ( Businessman) ",
      role: "",
      quote:
        "I have experienced a very positive transformation ever since I’ve joined Sri Rukhaminii Yoga Studio. Me and my friends have always taken fitness very seriously and we have been going for long walks and treks every morning for years now. Joining a Yoga Studio was a sudden decision and a very good one, because now along with fitness, I have improved flexibility, reducing stiffness. Also practicing meditation has greatly impacted my overall mood, and especially sleep cycle leading to a more relaxed and improved sleep.",
    },
    {
      name: "Mr Garnard from London, UK.( A student of Music )",
      role: "",
      quote:
        "A great studio with amazing teachers, andlife changing classes of Yoga, Pranayama and naturopathy.I wish to come back soon to Pune. My best wishes !!",
    },
  ];

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


  const maxIndex = Math.max(0, testimonials.length - cardsToShow);
  const autoScrollIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const isMobile = useIsMobile();
  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        if (window.innerWidth >= 1024) {
          setCardsToShow(3);
        } else if (window.innerWidth >= 640) {
          setCardsToShow(2);
        } else {
          setCardsToShow(1);
        }
      }
    };

    // Set initial value
    handleResize();
    
    if (typeof window !== 'undefined') {
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  useEffect(() => {
    // Only auto-scroll on mobile devices
    if (isMobile) {
      // Clear any existing interval when component mounts or dependencies change
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
      }

      // Set up auto-scrolling
      autoScrollIntervalRef.current = setInterval(() => {
        setTestimonialIndex((prevIndex) =>
          prevIndex >= maxIndex ? 0 : prevIndex + 1
        );
      }, 5000); // Scroll every 5 seconds
    } else {
      // Clear interval if not on mobile
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
        autoScrollIntervalRef.current = null;
      }
    }

    // Clean up interval on component unmount
    return () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
      }
    };
  }, [isMobile, maxIndex]);

  const nextTestimonial = () => {
    // Reset auto-scroll timer when manually navigating
    if (autoScrollIntervalRef.current) {
      clearInterval(autoScrollIntervalRef.current);

      if (isMobile) {
        autoScrollIntervalRef.current = setInterval(() => {
          setTestimonialIndex((prevIndex) =>
            prevIndex >= maxIndex ? 0 : prevIndex + 1
          );
        }, 5000);
      }
    }

    setTestimonialIndex((prevIndex) =>
      prevIndex >= maxIndex ? 0 : prevIndex + 1
    );
  };

  // const nextTestimonial = () => {
  //   setTestimonialIndex(
  //     (prevIndex) => (prevIndex + 1) % (testimonials.length - cardsToShow + 1)
  //   )
  // }

  // const prevTestimonial = () => {
  //   setTestimonialIndex(
  //     (prevIndex) =>
  //       (prevIndex - 1 + testimonials.length - cardsToShow + 1) %
  //       (testimonials.length - cardsToShow + 1)
  //   )
  // }

  const prevTestimonial = () => {
    // Reset auto-scroll timer when manually navigating
    if (autoScrollIntervalRef.current) {
      clearInterval(autoScrollIntervalRef.current);

      if (isMobile) {
        autoScrollIntervalRef.current = setInterval(() => {
          setTestimonialIndex((prevIndex) =>
            prevIndex >= maxIndex ? 0 : prevIndex + 1
          );
        }, 5000);
      }
    }

    setTestimonialIndex((prevIndex) =>
      prevIndex <= 0 ? maxIndex : prevIndex - 1
    );
  };

  const bestSellerProducts = productsData.bestSellers
    .map((id) => productsData.products.find((p) => p.id === id))
    .filter(Boolean);

  return (
    <div className="flex min-h-screen flex-col">
      {/* WhatsApp Icon */}
      <a
        href="https://wa.me/919021979841"
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
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-10 md:py-20 bg-gradient-to-b from-white to-gray-100 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/hero_bg.webp"
              alt="Ayurvedic Background"
              layout="fill"
              objectFit="cover"
              className="opacity-50"
            />
          </div>
          <div className="container relative z-10 px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col justify-center space-y-4 order-2 lg:order-1"
              >
                {/* <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-white hover:bg-primary/80 w-fit">
                  New Collection
                </div> */}
                <h1 className="text-4xl text-center md:text-left font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-primary">
                  {/* Discover Holistic Wellness with */}
                  Embrace Balance, Elevate Your Life with Yoga
                </h1>
                <p className="text-center md:text-left max-w-[600px] text-gray-600 md:text-xl">
                  {/* Premium Ayurvedic products designed to restore balance and
                  promote natural healing for mind, body, and spirit. */}
                  Discover the transformative power of yoga. Unwind, strengthen,
                  and connect with yourself in a space that nurtures both body
                  and soul. Your journey to wellness begins here.
                </p>
                <div className="flex flex-col w-full justify-center md:justify-normal gap-2 min-[400px]:flex-row pt-4">
                    <Button
                    size="lg"
                    className="px-8 text-white bg-secondary hover:bg-secondary/80"
                    onClick={() => setIsPopupOpen(true)}
                    >
                    For Inquiry
                    </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="px-8 text-white bg-secondary hover:bg-secondary/80"
                    asChild
                  >
                    <Link href="/about-us">About us</Link>
                  </Button>
                </div>

                <ConsultationPopup
                  isOpen={isPopupOpen}
                  onClose={() => setIsPopupOpen(false)}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative lg:ml-auto order-1 lg:order-2"
              >
                <div className="relative overflow-hidden hero-img">
                  <Image
                    src="/hero_img.webp"
                    width={600}
                    height={550}
                    alt="hero img"
                    className="mx-auto object-contain w-full max-h-[550px] lg:h-[550px] aspect-square md:aspect-[4/3] lg:aspect-[3/2] rounded-lg"
                    priority
                  />
                </div>
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                  className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-secondary/30 blur-xl"
                ></motion.div>
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                    delay: 2,
                  }}
                  className="absolute -top-4 -left-4 h-24 w-24 rounded-full bg-primary/30 blur-xl"
                ></motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className=" py-12 md:py-24 lg:py-32 border-y">
          <div className="container space-y-12 px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-4 text-center"
            >
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent  bg-secondary/5 text-secondary hover:bg-primary/20">
                Our Commitment to Excellence
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
                Why Choose Us?
              </h2>
              <p className="max-w-[700px] text-gray-600 md:text-xl">
                At Sri Rukhamini Yoga Studio, we offer authentic, science-backed yoga that harmonizes the body, breath, and mind for complete well-being.
              </p>
            </motion.div>
            <div className="flex flex-col sm:flex-row gap-6 flex-wrap">
              {[
                {
                  icon: Leaf,
                  title: "Authentic & Scientific",
                  description:
                    "We blend ancient yogic wisdom with modern research for complete well-being.",
                },
                {
                  icon: Heart,
                  title: "Holistic Healing",
                  description:
                    "Our yoga, pranayama, and meditation practices restore balance to the body and mind.",
                },
                {
                  icon: Star,
                  title: "Proven Benefits",
                  description:
                    "Enhance health, reduce stress, and boost self-awareness for a happier life.",
                },
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card group relative overflow-hidden rounded-lg border bg-white p-6 shadow-sm transition-all hover:shadow-md flex-1 min-w-[300px]"
                >
                  <div className="absolute top-0 right-0 h-24 w-24 rounded-full bg-secondary/5 blur-xl"></div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-secondary/20">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-secondary">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section id="who-we-are" className="py-16 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-x-12  lg:gap-y-0 items-center">
              <div className="space-y-4">
                <div className="w-full flex justify-center items-center md:block">
                  <div className="inline-block px-3 py-1 text-sm text-secondary  bg-secondary/5 rounded-full">
                    About Us
                  </div>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary text-center md:text-left">
                  Who We Are ?
                </h2>
                <p className="text-muted-foreground md:text-xl text-center md:text-left">
                  At Sri RukhaminiiYoga Gurukul, magical and soulful Yoga Training is provided which connects the body, breath, and mind. Yogic practice uses physical postures, breathing exercises, and meditation to improve overall health. As we all know, Yoga is an ancient Indian discipline designed to bring balance and health to the physical, mental, emotional, and spiritual dimensions of the individual.The purpose of yoga is to build strength, awareness and harmony in both the mind and body.
                </p>
                <div className=" hidden lg:flex flex-col gap-2 min-[400px]:flex-row lg:items-start justify-start   ">
                  <Button asChild className="hover:bg-primary bg-secondary">
                    <Link href="/about-us">Learn more</Link>
                  </Button>
                </div>
              </div>

              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  <img
                    src="/yoga_img_03.webp"
                    alt="Our team working together"
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                    width={600}
                    height={500}
                  />
                </div>
              </div>
              <div className="lg:hidden flex flex-col gap-2 min-[400px]:flex-row justify-center items-center ">
                <Button asChild className="hover:bg-primary bg-secondary">
                  <Link href="/about-us">Learn more</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Article */}
        <section
          id="featured-products"
          className="py-12  md:py-20 lg:py-24"
        >
          <div className="container space-y-8 px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-2 text-center"
            >
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-primary">
                Knowledge Section
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-lg">
                Trusted and Certified Professionals
              </p>
            </motion.div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
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
                  <div className="flex flex-1 flex-col justify-between p-4 bg-white">
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
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-12 md:py-20 lg:py-24 bg-gray-100">
          <div className="container space-y-8 px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-2 text-center"
            >
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary/5 text-secondary hover:bg-primary/20">
                Our Achievements
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-primary">
                Celebrating Excellence
              </h2>
              <p className="max-w-[700px] text-gray-600 md:text-lg">
                A glimpse into our journey of achievements and milestones in the world of yoga.
              </p>
            </motion.div>
            <div className="grid gap-6 grid-cols-2 lg:grid-cols-3">
              {[
                {
                  src: "/gallery-images/Acchivment1.jpg",
                  alt: "Achievement ceremony photo",
                },
                {
                  src: "/gallery-images/Acchivement2.jpg",
                  alt: "Achievement ceremony showcasing yoga excellence",
                },
                {
                  src: "/gallery-images/certificate1.jpg",
                  alt: "Certificate of Achievement for Yoga Training",
                },
                {
                  src: "/gallery-images/certificate2.jpg",
                  alt: "Certificate of Achievement for Yoga Training",
                },
                {
                  src: "/gallery-images/certificate3.jpg",
                  alt: "Certificate of Achievement for Yoga Training",
                },
                {
                  src: "/gallery-images/news.jpg",
                  alt: "rukhamini Yoga News Article showcasing achievements and events",
                },
              ].map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative h-[200px] md:h-[350px] lg:h-[400px] overflow-hidden rounded-xl shadow-lg group"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  {/* <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <p className="text-sm font-medium">{image.alt}</p>
                  </div> */}
                </motion.div>
              ))}
            </div>
            <div className="flex justify-center pt-8">              <Button
                variant="outline"
                size="lg"
                className="gap-2 hover:bg-secondary/5"
                onClick={() => {
                  if (typeof window !== 'undefined') {
                    window.location.href = "/gallery"
                  }
                }}
              >
                View More
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section
          id="testimonials"
          className="py-12 md:py-24 lg:py-32 bg-muted"
        >
          <div className="container space-y-12 px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-4 text-center"
            >
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent  bg-secondary/5 text-secondary hover:bg-primary/20">
                Customer Love
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
                What Our Customers Say
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Hear from people who have experienced the benefits of Kayapalat
                Care.
              </p>
            </motion.div>
            <div className="relative">
              <div className="overflow-hidden">
                <motion.div
                  animate={{ x: `-${testimonialIndex * (100 / cardsToShow)}%` }}
                  transition={{ duration: 0.5 }}
                  className="flex"
                >
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={index}
                      className={`flex-none w-full px-4 ${cardsToShow > 1 ? "sm:w-1/2" : ""
                        } ${cardsToShow > 2 ? "lg:w-1/3" : ""}`}
                    >
                      <div className="card h-full group relative overflow-hidden rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md">
                        <div className="absolute top-0 right-0 h-24 w-24 rounded-full bg-primary/5 blur-xl"></div>
                        <svg
                          className="h-10 w-10 text-primary/20"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          stroke="none"
                        >
                          <path d="M11.0908 5.82857C11.0908 7.2 10.8261 8.4 10.2969 9.42857C9.76762 10.4571 8.86548 11.3143 7.59047 12L6.5 10.6857C7.42857 10.1714 8.09524 9.62857 8.5 9.05714C8.90476 8.48571 9.10714 7.77143 9.10714 6.91429H7V2H12V5.82857H11.0908ZM18.0908 5.82857C18.0908 7.2 17.8261 8.4 17.2969 9.42857C16.7676 10.4571 15.8655 11.3143 14.5905 12L13.5 10.6857C14.4286 10.1714 15.0952 9.62857 15.5 9.05714C15.9048 8.48571 16.1071 7.77143 16.1071 6.91429H14V2H19V5.82857H18.0908Z" />
                        </svg>
                        <div className="flex gap-1 mt-2">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="h-4 w-4 fill-secondary text-secondary"
                            />
                          ))}
                        </div>
                        <p className="mt-4 text-muted-foreground">
                          "{testimonial.quote}"
                        </p>
                        <div className="mt-6 flex items-center gap-4">
                          <div className="h-10 w-10 rounded-full bg-muted overflow-hidden">
                            <Image
                              src={`/avatar.webp`}
                              alt={testimonial.name}
                              width={40}
                              height={40}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div>
                            <p className="font-medium">{testimonial.name}</p>
                            <p className="text-sm text-muted-foreground">
                              {testimonial.role}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>
              <div className="flex justify-center mt-8 gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevTestimonial}
                  className="hover: bg-secondary/5"
                >
                  <ChevronLeft className="h-4 w-4" />
                  <span className="sr-only">Previous testimonial</span>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextTestimonial}
                  className="hover: bg-secondary/5"
                >
                  <ChevronRight className="h-4 w-4" />
                  <span className="sr-only">Next testimonial</span>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured blog Section */}
        <section
          id="featured-products"
          className="py-12 bg-gray-100 md:py-20 lg:py-24"
        >
          <div className="container space-y-8 px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-2 text-center"
            >
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-primary">
                Latest Insights
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-lg">
                Explore Our Most Popular Yoga Practices Loved by Our Community
              </p>
            </motion.div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
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
                  <div className="flex flex-1 flex-col justify-between p-4 bg-white">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span>{relatedPost.category}</span>
                        <span>•</span>
                        <span>{relatedPost.date}</span>
                      </div>
                      <h3 className="font-bold leading-tight text-primary">
                        <Link
                          href={`/articles/articles-${relatedPost.id}`}
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
                        href={`/articles/articles-${relatedPost.id}`}
                        className="inline-flex items-center gap-1 text-sm font-medium text-secondary hover:underline"
                      >
                        Read more <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="flex justify-center">
              <Button
                variant="outline"
                size="lg"
                className="gap-2 hover:bg-secondary/5"
              >
                <Link href="/articles">View All article</Link>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-start">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-lg shadow-lg bg-white border border-gray-200 p-8"
              >
                {/* <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-primary/10 opacity-20 pointer-events-none"></div> */}
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="space-y-6 relative z-10"
                >
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary text-center">
                    Inquiry Form
                  </h2>
                  <p className="text-muted-foreground md:text-lg text-center">
                    Interested in our yoga classes? Fill out the form below and we'll get back to you soon.
                  </p>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="fullName">Full Name</Label>
                        <Input
                          id="fullName"
                          placeholder="Enter your full name"
                          className="border-gray-300 focus:ring-primary focus:border-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Enter your email"
                          className="border-gray-300 focus:ring-primary focus:border-primary"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Contact Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Enter your contact number"
                        className="border-gray-300 focus:ring-primary focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your yoga goals and any specific requirements"
                        className="min-h-[150px] border-gray-300 focus:ring-primary focus:border-primary"
                      />
                    </div>
                    <div className="flex justify-center">
                      <Button
                        type="submit"
                        className="w-full sm:w-auto bg-primary text-white hover:bg-primary/90 transition-transform transform hover:scale-105"
                      >
                        <Send className="mr-2 h-4 w-4" />
                        Submit Inquiry
                      </Button>
                    </div>
                  </form>
                </motion.div>
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                  className="absolute -top-4 -left-4 h-24 w-24 rounded-full bg-primary/20 blur-xl"
                ></motion.div>
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                    delay: 2,
                  }}
                  className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-secondary/20 blur-xl"
                ></motion.div>
              </motion.div>
              <motion.div
                initial={{ opacity: 1, x: 0 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <motion.div
                  initial={{ opacity: 1, x: 0 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="relative h-[300px] overflow-hidden rounded-xl shadow-lg border border-gray-200 hidden md:block"
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15289.20156130783!2d73.829622!3d18.533636!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf70ab733f0d%3A0x1bcd0c30e19208a3!2sThe%20Pavilion%20Mall!5e1!3m2!1sen!2sin!4v1742887699555!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-xl"
                  ></iframe>
                </motion.div>
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-primary text-center">
                    Address
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary">Location</h4>
                        <p className="text-gray-600">
                          Gurukul, 26, Vishrambag Soc, Opp Pavillion Mall, Senapati Bapat Road, Pune - 411016
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary">Contact Number</h4>
                        <p className="text-gray-600">9890528593, 9021979841</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary">Email Us</h4>
                        <p className="text-gray-600">
                          contact@srirukhaminiiyoga.com
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
