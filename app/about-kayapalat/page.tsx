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
} from "lucide-react"

import Hader from "@/components/header"
import Footer from "@/components/footer"
import ScrollToTopButton from "@/components/ScrollToTopButton"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  About RUKMI YOGA
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Discover our journey in bringing ancient Ayurvedic wisdom to
                  modern wellness seekers.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Our Story
                </h2>
                <p className="text-muted-foreground md:text-lg">
                  RUKMI YOGA was founded with a simple mission: to bring the
                  ancient wisdom of Ayurveda to modern wellness seekers. Our
                  journey began when our founder, after years of studying
                  traditional Ayurvedic practices, created a line of products
                  that combine time-tested ingredients with contemporary
                  science.
                </p>
                <p className="text-muted-foreground md:text-lg">
                  Today, we're proud to offer Kayapalat Care products that help
                  thousands of people achieve balance and wellness in their
                  daily lives. Each product is crafted with intention, using
                  only the purest ingredients sourced from trusted suppliers
                  across India.
                </p>
              </div>
              <div className="relative h-[400px] overflow-hidden rounded-xl shadow-lg">
                <Image
                  src="/placeholder.svg?height=400&width=600&text=Our+Story"
                  alt="Our Story"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="relative h-[400px] overflow-hidden rounded-xl shadow-lg order-2 lg:order-1">
                <Image
                  src="/placeholder.svg?height=400&width=600&text=Our+Mission"
                  alt="Our Mission"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-4 order-1 lg:order-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Our Mission
                </h2>
                <p className="text-muted-foreground md:text-lg">
                  To provide 100% Natural Laboratory Tested Health and Beauty
                  Products that suit almost all Human Bodies. We are committed
                  to sustainability, ethical sourcing, and preserving the rich
                  heritage of Ayurvedic traditions while embracing modern
                  scientific advancements.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="space-y-4 order-1">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Our Vission
                </h2>
                <p className="text-muted-foreground md:text-lg">
                  We serve families who want to improve their health and
                  wellness by using natural therapies and lifestyle changes. We
                  uphold the principles of naturopathic medicine by respecting
                  the healing power of nature, identifying and treating the
                  causes of disease, educating and empowering our patients, and
                  preventing illness.
                </p>
              </div>
              <div className="relative h-[400px] overflow-hidden rounded-xl shadow-lg order-2">
                <Image
                  src="/placeholder.svg?height=400&width=600&text=Our+Mission"
                  alt="Our Mission"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

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
            ></motion.div>
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

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Join Our Wellness Journey
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Experience the transformative power of Ayurveda with RUKMI
                YOGA's Kayapalat Care products.
              </p>
              <div className="flex space-x-4">
                <Button size="lg" asChild>
                  <Link href="/products">Explore Our Products</Link>
                </Button>
                <Button size="lg" asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <ScrollToTopButton />
    </div>
  )
}
