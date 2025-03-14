"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
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
  Users,
  Award,
  Clock,
  Shield,
  Target,
} from "lucide-react"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"

import Header from "@/components/header"
import Footer from "@/components/footer"
import productsData from "@/data/products.json"
import ConsultationPopup from "@/components/ConsultationPopup"

export default function LandingPage() {
  const [testimonialIndex, setTestimonialIndex] = useState(0)
  const [cardsToShow, setCardsToShow] = useState(3)
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  const testimonials = [
    {
      name: "Priya S.",
      role: "Yoga Practitioner",
      quote:
        "The Kayapalat oils have transformed my daily wellness routine. I feel more balanced and energized than ever before.",
    },
    {
      name: "Rahul M.",
      role: "Wellness Coach",
      quote:
        "After trying countless products, I finally found relief with Kayapalat Care. The quality and effectiveness are unmatched.",
    },
    {
      name: "Ananya K.",
      role: "Yoga Instructor",
      quote:
        "As a yoga instructor, I recommend these products to all my students. They complement practice perfectly and enhance overall well-being.",
    },
    {
      name: "Vikram P.",
      role: "Fitness Enthusiast",
      quote:
        "Kayapalat Care products have become an essential part of my post-workout recovery routine. They help me stay in top form.",
    },
    {
      name: "Meera R.",
      role: "Holistic Therapist",
      quote:
        "I've incorporated Kayapalat Care into my therapy sessions, and the results have been remarkable. My clients love the natural approach to wellness.",
    },
  ]

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(3)
      } else if (window.innerWidth >= 640) {
        setCardsToShow(2)
      } else {
        setCardsToShow(1)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const nextTestimonial = () => {
    setTestimonialIndex(
      (prevIndex) => (prevIndex + 1) % (testimonials.length - cardsToShow + 1)
    )
  }

  const prevTestimonial = () => {
    setTestimonialIndex(
      (prevIndex) =>
        (prevIndex - 1 + testimonials.length - cardsToShow + 1) %
        (testimonials.length - cardsToShow + 1)
    )
  }

  const bestSellerProducts = productsData.bestSellers
    .map((id) => productsData.products.find((p) => p.id === id))
    .filter(Boolean)

  return (
    <div className="flex min-h-screen flex-col">
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
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-12 bg-gradient-to-b from-white to-gray-100 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/hero_bg.webp"
              alt="Ayurvedic Background"
              layout="fill"
              objectFit="cover"
              className="opacity-10"
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
                  Welcome to The Gateway to Holistic Wellness
                </h1>
                <p className="text-center md:text-left max-w-[600px] text-gray-600 md:text-xl">
                  {/* Premium Ayurvedic products designed to restore balance and
                  promote natural healing for mind, body, and spirit. */}
                  we bring you the wisdom of Ayurveda blended with modern
                  convenience. Our platform offers a curated selection of
                  authentic Ayurvedic products,
                </p>
                <div className="flex flex-col w-full justify-center md:justify-normal gap-2 min-[400px]:flex-row pt-4">
                  <Button
                    size="lg"
                    className="px-8 bg-primary text-white hover:bg-secondary"
                    onClick={() => setIsPopupOpen(true)}
                  >
                    Get Consultation
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="px-8 text-primary border-primary hover:bg-secondary/10"
                    asChild
                  >
                    <Link href="/about-me">About us</Link>
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
                <div className="relative overflow-hidden">
                  <Image
                    src="/hero_img.webp"
                    width={600}
                    height={550}
                    alt="Kayapalat Care Products"
                    className="mx-auto object-contain w-full max-h-[550px] lg:h-[550px] aspect-square md:aspect-[4/3] lg:aspect-[3/2] rounded-xl"
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
        <section
          id="benefits"
          className="bg-gray-100 py-12 md:py-24 lg:py-32 border-y"
        >
          <div className="container space-y-12 px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-4 text-center"
            >
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary/10 text-primary hover:bg-primary/20">
                Our Commitment to Excellence
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
                Why Choose Us?
              </h2>
              <p className="max-w-[700px] text-gray-600 md:text-xl">
                we provide 100% Natural Laboratory Tested Health and Beauty
                Products that suit almost all Human Bodies.
              </p>
            </motion.div>
            <div className="flex flex-col sm:flex-row gap-6 flex-wrap">
              {[
                {
                  icon: Leaf,
                  title: "100% Natural",
                  description:
                    "Our products are made from carefully selected, high-quality herbs, ensuring purity and effectiveness without any harmful chemicals.",
                },
                {
                  icon: Heart,
                  title: "Holistic Healing",
                  description:
                    "Crafted using ancient Ayurvedic wisdom, our products support overall well-being and balance, enhancing your body’s natural healing process.",
                },
                {
                  icon: Star,
                  title: "Scientifically Proven",
                  description:
                    "Thousands of satisfied customers trust us for their Ayurvedic needs, backed by expert recommendations and positive reviews.",
                },
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative overflow-hidden rounded-lg border bg-white p-6 shadow-sm transition-all hover:shadow-md flex-1 min-w-[300px]"
                >
                  <div className="absolute top-0 right-0 h-24 w-24 rounded-full bg-secondary/10 blur-xl"></div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-primary">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products Section */}
        <section id="featured-products" className="py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-4 text-center"
            >
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary/10 text-primary hover:bg-primary/20">
                Featured Products
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
                Explore Products
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Discover our most popular Ayurvedic products loved by our
                customers.
              </p>

              {/* Added the "Official Retailer" section here with adaptation */}
              <div className="flex items-center gap-4 pt-2">
                <div className="flex -space-x-2">
                  <motion.img
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="inline-block h-10 w-10 rounded-full border-2 border-white overflow-hidden"
                    src="/KayapalatLogo.png"
                    alt="Kayapalat Logo"
                  />
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  Exclusive Official partner of Kayapalat Products
                </div>
              </div>
            </motion.div>
            {/* <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"> */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-12 lg:mx-8 lg:mt-12">
              {bestSellerProducts.map(
                (product) =>
                  product && (
                    <Link
                      key={product.id}
                      href={`/products/${product.id}`}
                      className="group relative overflow-hidden rounded-lg border bg-background transition-all hover:shadow-md"
                    >
                      <div className="aspect-square overflow-hidden">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          width={400}
                          height={400}
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                      </div>
                      {/* <div className="p-6"> */}
                      <div className="p-2 md:p-6">
                        {/* <h3 className="text-xl font-bold"> */}
                        <h3 className="text-base text-center md:text-left md:text-xl h-24 flex items-center justify-center md:justify-start">
                          {product.name}
                        </h3>
                        {/* <p className="mt-2 text-muted-foreground">
                          {product.description}
                        </p> */}
                        {/* <div className="mt-4 flex items-center justify-between">
                          <span className="text-lg font-bold">
                            {product.price}
                          </span>
                          <Button
                            size="sm"
                            className="transition-transform group-hover:translate-y-0"
                          >
                            View Details
                          </Button>
                        </div> */}
                        <div className="mt-4 flex flex-col items-center space-y-2 md:justify-between md:items-start md:flex-row md:space-y-0 md:space-x-4">
                          <span className="text-lg font-bold">
                            {product.price}
                          </span>
                          <Button
                            size="sm"
                            className="transition-transform group-hover:translate-y-0 hover:bg-secondary"
                          >
                            View Details
                            <ArrowRight className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <div className="absolute top-4 right-4 rounded-full bg-background/80 p-2 opacity-0 transition-opacity group-hover:opacity-100">
                        <Heart className="h-4 w-4 text-muted-foreground hover:text-primary" />
                      </div>
                    </Link>
                  )
              )}
            </div>
            <div className="flex justify-center">
              <Button
                variant="outline"
                size="lg"
                className="gap-2 hover:bg-secondary/10"
              >
                <Link href="/products">View All Products</Link>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container space-y-12 px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-4 text-center"
            >
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary/10 text-primary hover:bg-primary/20">
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
                      className={`flex-none w-full px-4 ${
                        cardsToShow > 1 ? "sm:w-1/2" : ""
                      } ${cardsToShow > 2 ? "lg:w-1/3" : ""}`}
                    >
                      <div className="h-full group relative overflow-hidden rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md">
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
                              src={`/placeholder.svg?height=40&width=40&text=${testimonial.name.charAt(
                                0
                              )}`}
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
                  className="hover:bg-secondary/10"
                >
                  <ChevronLeft className="h-4 w-4" />
                  <span className="sr-only">Previous testimonial</span>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextTestimonial}
                  className="hover:bg-secondary/10"
                >
                  <ChevronRight className="h-4 w-4" />
                  <span className="sr-only">Next testimonial</span>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section id="who-we-are" className="py-16 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="w-full flex justify-center items-center md:block">
                  <div className="inline-block px-3 py-1 text-sm text-primary bg-secondary/10 rounded-full">
                    About Us
                  </div>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary text-center md:text-left">
                  Who We Are
                </h2>
                <p className="text-muted-foreground md:text-xl text-center md:text-left">
                  Founded in 2018, Givve was born from a passion to make
                  authentic Ayurvedic wellness accessible to everyone. As the
                  official retailer of Kayapalat,
                </p>
                <p className="text-muted-foreground md:text-xl text-center md:text-left">
                  Our journey began when our founder experienced the
                  transformative benefits of Ayurveda firsthand. After
                  struggling with chronic health issues that conventional
                  medicine couldn't resolve
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
                  <Button asChild className="hover:bg-secondary">
                    <Link href="/about-us">Learn more</Link>
                  </Button>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  <img
                    src="/placeholder.svg?height=500&width=600"
                    alt="Our team working together"
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                    width={600}
                    height={500}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="py-12 md:py-24 lg:py-32 bg-gradient-to-b"
        >
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 items-start">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex flex-col justify-center space-y-8"
              >
                <div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
                    Enquire for Distributors
                  </h2>
                  <p className="mt-4 text-muted-foreground md:text-lg">
                    Interested in becoming a distributor for our products? Fill
                    out the form below and we will get back to you with more
                    information.
                  </p>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>123 Wellness Street, Mumbai, India</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-primary" />
                    <span>+91 123 456 7890</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-primary" />
                    <span>info@rukmiyoga.com</span>
                  </li>
                </ul>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="full-name">Full Name</Label>
                    <Input
                      id="full-name"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name</Label>
                    <Input
                      id="company"
                      placeholder="Enter your company name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Enter your message"
                      rows={4}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full hover:bg-secondary">
                    Send Inquiry
                  </Button>
                </form>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative h-[400px] lg:h-[600px] rounded-lg overflow-hidden"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74109995709657!3d19.08219783958221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1655969611207!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
