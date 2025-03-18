"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Award,
  BookOpen,
  Calendar,
  Clock,
  Globe,
  Heart,
  Leaf,
  MapPin,
  Star,
  Users,
} from "lucide-react";
import { motion } from "framer-motion"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ScrollToTopButton from "@/components/ScrollToTopButton"

export default function AboutMePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <Header />
        <section className="relative py-10 md:py-20 bg-gradient-to-b from-white to-gray-100 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/hero_bg.webp"
              alt="Ayurvedic Background"
              layout="fill"
              objectFit="cover"
              className="opacity-20"
            />
          </div>
          <div className="container relative z-10 px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center space-y-4 text-center"
            >
              <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium border-primary/20  bg-secondary/5 text-secondary">
                Our Philosophy
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-primary">
                About Rukmi Yoga
              </h1>
            </motion.div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-6 order-2 lg:order-1"
              >
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">
                  Our story
                </h2>
                <p className="text-muted-foreground md:text-lg">
                  Yoga is more than just movement—it's a path to balance,
                  strength, and inner peace. Rooted in ancient wisdom, yoga
                  harmonizes the body, mind, and soul through breath,
                  meditation, and mindful postures. Whether you're seeking
                  flexibility, stress relief, or spiritual growth, yoga offers a
                  transformative journey tailored to your needs.
                </p>
                <p className="text-muted-foreground md:text-lg">
                  At RUKMI YOGA , we guide you through traditional and modern
                  yoga practices, helping you cultivate mindfulness and
                  well-being. From Hatha and Vinyasa flows to deep Pranayama and
                  meditation, our sessions are designed for all levels, ensuring
                  a space for growth, healing, and self-discovery.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative h-[430px] overflow-hidden rounded-xl shadow-lg order-1 lg:order-2"
              >
                <Image
                  src="/yoga_img_01.webp"
                  alt="Dr. Rukmi providing consultation"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
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

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col items-center space-y-4 text-center mb-12"
            >
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent  bg-secondary/5 text-secondary">
                Core Values
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">
                Our Philosophy
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                The core principles that guide my practice and product
                development
              </p>
            </motion.div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: Globe,
                  title: "Global Wellness Access",
                  description:
                    "Expanding holistic healthcare beyond urban centers to reach rural villages and remote communities.",
                },
                {
                  icon: MapPin,
                  title: "Wellness for All",
                  description:
                    "Making Ayurvedic and naturopathic healing affordable and available to people of all backgrounds.",
                },
                {
                  icon: Users,
                  title: "Community Healing",
                  description:
                    "Building a strong network of wellness centers and practitioners to support holistic health worldwide.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card group relative overflow-hidden rounded-lg border bg-white p-6 shadow-sm transition-all hover:shadow-md"
                >
                  <div className="absolute top-0 right-0 h-24 w-24 rounded-full  bg-secondary/5 blur-xl"></div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-secondary/20">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-secondary">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <Footer />
        <ScrollToTopButton />
      </main>
    </div>
  )
}
