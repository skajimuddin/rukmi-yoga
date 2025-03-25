"use client";

import Image from "next/image";
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
  X,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

import Header from "@/components/header";
import Footer from "@/components/footer";
import productsData from "@/data/products.json";
import ConsultationPopup from "@/components/ConsultationPopup";

export default function Gallerypage() {

  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);
  
  // Gallery images data
  const galleryImages = [
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
  ];

  // Function to open the lightbox with a specific image
  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when lightbox is open
  };

  // Function to close the lightbox
  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

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
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px] overflow-hidden rounded-xl shadow-lg group cursor-pointer"
                onClick={() => openLightbox(image)}
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
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-full max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
                onClick={closeLightbox}
              >
                <X className="h-6 w-6" />
              </button>
              <div className="relative w-[90vw] h-[80vh] md:w-[80vw] md:h-[80vh]">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="absolute bottom-4 left-0 right-0 text-center text-white text-sm px-4">
                {selectedImage.alt}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
}