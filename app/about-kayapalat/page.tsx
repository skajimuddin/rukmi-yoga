"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import {
  Heart,
  Leaf,
  Star,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Phone,
  Mail,
  Users,
  Award,
  Clock,
  Shield,
  Target,
  ArrowRight,
} from "lucide-react"

import Hader from "@/components/header"
import Footer from "@/components/footer"
import ScrollToTopButton from "@/components/ScrollToTopButton"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hader />
      <main className="flex-1">
        <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-primary/5 to-background relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/ayurvedic_pattern.webp" 
              alt="Ayurvedic Pattern"
              fill
              className="object-cover opacity-5"
            />
          </div>
          <div className="container px-4 md:px-6 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center space-y-4 text-center"
            >
              <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium border-primary/20 bg-primary/5 text-primary">
                Our Story
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-primary">
                About RUKMI YOGA
              </h1>
              <p className="mx-auto max-w-[800px] text-muted-foreground md:text-xl">
                Discover our journey in bringing ancient Ayurvedic wisdom to
                modern wellness seekers through authentic, natural remedies.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium border-primary/20 bg-primary/5 text-primary">
                  Our Heritage
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">
                  Our Story
                </h2>
                <p className="text-muted-foreground md:text-lg leading-relaxed">
                  RUKMI YOGA was founded with a simple mission: to bring the
                  ancient wisdom of Ayurveda to modern wellness seekers. Our
                  journey began when our founder, after years of studying
                  traditional Ayurvedic practices, created a line of products
                  that combine time-tested ingredients with contemporary
                  science.
                </p>
                <p className="text-muted-foreground md:text-lg leading-relaxed">
                  Today, we're proud to offer Kayapalat Care products that help
                  thousands of people achieve balance and wellness in their
                  daily lives. Each product is crafted with intention, using
                  only the purest ingredients sourced from trusted suppliers
                  across India.
                </p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative h-[450px] overflow-hidden rounded-2xl shadow-lg"
              >
                <Image
                  src="/about_story.webp"
                  alt="Our Story"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-r from-primary/5 to-secondary/5">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative h-[450px] overflow-hidden rounded-2xl shadow-lg order-2 lg:order-1"
              >
                <Image
                  src="/about_mission.webp"
                  alt="Our Mission"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                  <div className="p-6">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">Our Purpose</span>
                  </div>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-6 order-1 lg:order-2"
              >
                <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium border-primary/20 bg-primary/5 text-primary">
                  Our Purpose
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">
                  Our Mission
                </h2>
                <p className="text-muted-foreground md:text-lg leading-relaxed">
                  To provide 100% Natural Laboratory Tested Health and Beauty
                  Products that suit almost all Human Bodies. We are committed
                  to sustainability, ethical sourcing, and preserving the rich
                  heritage of Ayurvedic traditions while embracing modern
                  scientific advancements.
                </p>
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Shield className="h-5 w-5 text-primary" />
                    </div>
                    <p className="font-medium">Quality Assurance</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Leaf className="h-5 w-5 text-primary" />
                    </div>
                    <p className="font-medium">Sustainably Sourced Ingredients</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <p className="font-medium">Community Empowerment</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-6 order-1"
              >
                <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium border-primary/20 bg-primary/5 text-primary">
                  Our Aspirations
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">
                  Our Vision
                </h2>
                <p className="text-muted-foreground md:text-lg leading-relaxed">
                  We serve families who want to improve their health and
                  wellness by using natural therapies and lifestyle changes. We
                  uphold the principles of naturopathic medicine by respecting
                  the healing power of nature, identifying and treating the
                  causes of disease, educating and empowering our patients, and
                  preventing illness.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                  <div className="bg-secondary/5 p-4 rounded-lg">
                    <Target className="h-6 w-6 text-primary mb-2" />
                    <h4 className="font-medium">Holistic Approach</h4>
                    <p className="text-sm text-muted-foreground">Treating the whole person, not just symptoms</p>
                  </div>
                  <div className="bg-secondary/5 p-4 rounded-lg">
                    <Clock className="h-6 w-6 text-primary mb-2" />
                    <h4 className="font-medium">Preventive Care</h4>
                    <p className="text-sm text-muted-foreground">Promoting wellness before illness strikes</p>
                  </div>
                  <div className="bg-secondary/5 p-4 rounded-lg">
                    <Award className="h-6 w-6 text-primary mb-2" />
                    <h4 className="font-medium">Excellence</h4>
                    <p className="text-sm text-muted-foreground">Committing to the highest standards</p>
                  </div>
                  <div className="bg-secondary/5 p-4 rounded-lg">
                    <Users className="h-6 w-6 text-primary mb-2" />
                    <h4 className="font-medium">Education</h4>
                    <p className="text-sm text-muted-foreground">Empowering through knowledge sharing</p>
                  </div>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative h-[450px] overflow-hidden rounded-2xl shadow-lg order-2"
              >
                <Image
                  src="/about_vision.webp"
                  alt="Our Vision"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </motion.div>
            </div>
          </div>
        </section>

        <section
          id="values"
          className="bg-gradient-to-b from-background to-primary/5 py-16 md:py-24 lg:py-32 border-y"
        >
          <div className="container space-y-12 px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-4 text-center"
            >
              <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium border-primary/20 bg-primary/5 text-primary">
                Our Principles
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">
                Core Values
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                The guiding principles that define our approach to wellness and business
              </p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    "Crafted using ancient Ayurvedic wisdom, our products support overall well-being and balance, enhancing your body's natural healing process.",
                },
                {
                  icon: Star,
                  title: "Proven Effectiveness",
                  description:
                    "Thousands of satisfied customers trust us for their Ayurvedic needs, backed by expert recommendations and positive reviews.",
                },
                {
                  icon: Shield,
                  title: "Quality Assurance",
                  description:
                    "Every product undergoes rigorous testing to ensure the highest standards of quality, safety, and efficacy.",
                },
                {
                  icon: Users,
                  title: "Community Focus",
                  description:
                    "We believe in giving back to communities and supporting the traditional practitioners who preserve Ayurvedic knowledge.",
                },
                {
                  icon: Award,
                  title: "Excellence",
                  description:
                    "We strive for excellence in everything we do, from product formulation to customer service and education.",
                },
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative overflow-hidden rounded-xl border bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-primary/20 hover:bg-primary/5"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-primary">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-primary/5 to-background">
          <div className="container px-4 md:px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col items-center space-y-6 text-center"
            >
              <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium border-primary/20 bg-primary/5 text-primary">
                Join Us
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">
                Join Our Wellness Journey
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Experience the transformative power of Ayurveda with RUKMI
                YOGA's Kayapalat Care products and become part of our growing community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white" asChild>
                  <Link href="/products">
                    Explore Our Products
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10" asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
              
              <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t">
                <div className="flex flex-col items-center text-center">
                  <div className="text-4xl font-bold text-primary">10+</div>
                  <p className="text-muted-foreground">Years of Experience</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="text-4xl font-bold text-primary">50+</div>
                  <p className="text-muted-foreground">Ayurvedic Products</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="text-4xl font-bold text-primary">10K+</div>
                  <p className="text-muted-foreground">Happy Customers</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="text-4xl font-bold text-primary">15+</div>
                  <p className="text-muted-foreground">Expert Practitioners</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />

      <ScrollToTopButton />
    </div>
  )
}
