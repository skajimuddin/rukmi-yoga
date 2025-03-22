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
  Heart as LucideHeart,
  Leaf,
  MapPin,
  Star,
  Users,
} from "lucide-react";
// Removed duplicate import of 'lucide-react' icons and an invalid import to avoid redundancy and errors
import { motion } from "framer-motion";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { useState } from "react";

export default function AboutMePage() {
  const [isAnimationEnabled, setIsAnimationEnabled] = useState(true);
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <Header />
        <section className="relative py-10 md:py-20 bg-gradient-to-b from-white to-gray-100 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/hero_bg.webp"
              alt="Ayurvedic Background"
              fill
              className="object-cover opacity-20"
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
                About Rukhamini Yoga
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
                <p className="text-customBrown md:text-lg">
                  At Sri RukhaminiiYoga Gurukul, magical and soulful Yoga
                  Training is provided which connects the body, breath, and
                  mind. Yogic practice uses physical postures, breathing
                  exercises, and meditation to improve overall health. As we all
                  know, Yoga is an ancient Indian discipline designed to bring
                  balance and health to the physical, mental, emotional, and
                  spiritual dimensions of the individual. The purpose of yoga is
                  to build strength, awareness and harmony in both the mind and
                  body.
                </p>
                <p className="text-[color:#5A3E36] md:text-lg">
                  At Sri Rukhaminii Yoga Gurukul, along with Yoga, Meditation
                  and Pranayama have been seen to improve mental well-being.
                  Regular yoga practice has created mental clarity and calmness,
                  increased body awareness, relieved chronic stress patterns,
                  relaxed the mind, improved attention and sharpened
                  concentration of every individual who has arrived and been
                  blessed at Sri Rukhaminii Yoga Gurukul. Body and Self
                  Awareness have particularly benefitted with early detection of
                  physical and mental problems and helped in early preventive
                  action. Thousands of years ago yoga originated in India, and
                  in the present era, an alarming awareness has been observed in
                  health and natural remedies among people due to yoga and
                  pranayama, which has been proven an effective method for
                  improving health in addition to prevention and management of
                  diseases. With Sri Rukhamini’s scientific approach towards
                  research in yoga, its therapeutic aspects are also being
                  explored successfully to lead a healthy and happy life.
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
                    repeat: isAnimationEnabled ? Number.POSITIVE_INFINITY : 0,
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

        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col items-center space-y-4 text-center mb-12"
            >
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-secondary/5 text-secondary">
                Our Goals
              </div>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                The guiding principles that shape our journey and inspire our
                actions.
              </p>
            </motion.div>
            <div className="grid gap-8 sm:grid-cols-2">
              {/* Mission Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="card group relative overflow-hidden rounded-lg border bg-white p-6 shadow-sm transition-all hover:shadow-md"
              >
                <div className="absolute top-0 right-0 h-24 w-24 rounded-full bg-secondary/5 blur-xl"></div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-secondary/20">
                  <LucideHeart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-secondary">
                  Our Mission
                </h3>
                <p className="mt-2 text-gray-600">
                  Our Mission is to create health awareness and to provide
                  Holistic Health to the humanity all over the world. As we
                  believe health is sum of physical, mental, emotional, socio-
                  economical and spiritual wellbeing. Thus it can be called
                  holistic health
                </p>
              </motion.div>
              {/* Vision Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="card group relative overflow-hidden rounded-lg border bg-white p-6 shadow-sm transition-all hover:shadow-md"
              >
                <div className="absolute top-0 right-0 h-24 w-24 rounded-full bg-secondary/5 blur-xl"></div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-secondary/20">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-secondary">
                  Our Vision
                </h3>
                <p className="mt-2 text-gray-600">
                  We are propagating ancient yet scientific yogic wisdom which
                  can bring light of hope to everyone. We have a dream vision to
                  see everyone healthy in a holistic manner and ensure wellness,
                  wellbeing and peace for all, at global level, through Yoga,
                  Pranayama and meditation.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Removed the "Cherished Moments" section to reduce clutter */}

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col items-center space-y-4 text-center mb-12"
            >
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent  bg-secondary/5 text-secondary">
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
              ].map(({ icon: Icon, title, description }, index) => (
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
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-secondary">
                    {title}
                  </h3>
                  <p className="mt-2 text-gray-600">{description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <Footer />
        <ScrollToTopButton />
      </main>
    </div>
  );
}
