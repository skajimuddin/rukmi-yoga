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
import Header from "@/components/header";
import Footer from "@/components/footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";

export default function AboutMePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <Header />
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  About Rukmi Yoga
                </h1>
                {/* <p className="mx-auto max-w-[770px] text-muted-foreground md:text-xl">
                  Naturopathic Doctor, Ayurvedic Consultant, Yoga Trainer, and
                  Founder of RUKMI YOGA
                </p> */}
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 ">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="space-y-6 order-2 lg:order-1">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">
                  Our Approach to Wellness
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
                  At RUKMI YOGA , we guide you through traditional and
                  modern yoga practices, helping you cultivate mindfulness and
                  well-being. From Hatha and Vinyasa flows to deep Pranayama and
                  meditation, our sessions are designed for all levels, ensuring
                  a space for growth, healing, and self-discovery.
                </p>
               
              </div>
              <div className="relative h-[430px] overflow-hidden rounded-xl shadow-lg order-1 lg:order-2">
                <Image
                  src="/yoga_img_01.webp"
                  alt="Dr. Rukmi providing consultation"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">
                Our Philosophy
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                The core principles that guide my practice and product
                development
              </p>
            </div>
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
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md"
                >
                  <div className="absolute top-0 right-0 h-24 w-24 rounded-full bg-primary/5 blur-xl"></div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    {item.description}
                  </p>
                </div>
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
