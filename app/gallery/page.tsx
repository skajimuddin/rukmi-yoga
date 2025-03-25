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
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

import Header from "@/components/header";
import Footer from "@/components/footer";
import productsData from "@/data/products.json";
import ConsultationPopup from "@/components/ConsultationPopup";

export default function Gallerypage() {
  return (
    <>
      <Header />
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
              Cherished Memories
            </h2>
            <p className="max-w-[700px] text-gray-600 md:text-lg">
              A glimpse into our journey of achievements and milestones in the
              world of yoga.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
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
              {
                src: "/gallery-images/news2.jpg",
                alt: "rukhamini Yoga News",
              },
              {
                src: "/gallery-images/quotes.jpg",
                alt: "Inspirational quote from rukhamini Yoga's gallery",
              },
              {
                src: "/gallery-images/quotes2.jpg",
                alt: "Inspirational quote from rukhamini Yoga's gallery",
              },
              {
                src: "/gallery-images/quotes3.jpg",
                alt: "Inspirational quote from rukhamini Yoga's gallery",
              },
              {
                src: "/gallery-images/quotes4.jpg",
                alt: "Inspirational quote from rukhamini Yoga's gallery",
              },
              {
                src: "/gallery-images/Tshirt.jpg",
                alt: "rukhamini Yoga branded T-shirt displayed.",
              },
            ].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px] overflow-hidden rounded-xl shadow-lg group"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center pt-8">
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
