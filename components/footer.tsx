"use client"

import Link from "next/link"
import { Leaf, Instagram, Facebook, Twitter, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import ConsultationPopup from "./ConsultationPopup"

export default function Footer() {
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  return (
    <footer className="border-t bg-secondary">
      <div className="container py-8 md:py-12">
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-lg font-semibold text-white">
                RUKMI YOGA
              </span>
              <Leaf className="h-5 w-5 text-white" />
            </div>
            <p className="text-sm text-white">
              Premium Ayurvedic products for holistic wellness and natural
              healing.
            </p>
            <div className="flex gap-4 flex-col">
              <div className="hidden md:flex">
                <form className="flex w-full max-w-sm items-center gap-2">
                  <input
                    type="email"
                    className="flex-grow rounded-md border border-gray-300  bg-white text-xs text-gray-900  px-4 py-2  lg:h-11 h-11"
                    placeholder="Subscribe to Our Newsletter"
                  />
                  <Button className="text-xs">Subscribe</Button>
                </form>
              </div>
              <div>
                <Button onClick={() => setIsPopupOpen(true)}>
                  Contact for Distribution
                </Button>
                <ConsultationPopup
                  isOpen={isPopupOpen}
                  onClose={() => setIsPopupOpen(false)}
                />
              </div>
            </div>
          </div>
          <div className="grid md:gap-8 gap-5  grid-rows-2 grid-cols-2 sm:grid-cols-3 md:grid-rows-1 md:grid-cols-4">
            <div className="md:space-y-4 space-y-1">
              <h3 className="text-sm font-medium text-white">Shop</h3>
              <ul className="space-y-2 text-sm text-white">
                <li>
                  <Link
                    href="/products"
                    className="hover:text-foreground transition-colors"
                  >
                    All Products
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products"
                    className="hover:text-foreground transition-colors"
                  >
                    Essential Oils
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products"
                    className="hover:text-foreground transition-colors"
                  >
                    Supplements
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products"
                    className="hover:text-foreground transition-colors"
                  >
                    Wellness Kits
                  </Link>
                </li>
              </ul>
            </div>
            <div className="md:space-y-4 space-y-1">
              <h3 className="text-sm font-medium text-white">Company</h3>
              <ul className="space-y-2 text-sm text-white">
                <li>
                  <Link
                    href="/about"
                    className="hover:text-foreground transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="hover:text-foreground transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="hover:text-foreground transition-colors"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#contact"
                    className="hover:text-foreground transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="md:space-y-4 space-y-1">
              <h3 className="text-sm font-medium text-white">Help</h3>
              <ul className="space-y-2 text-sm text-white">
                <li>
                  <Link
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Shipping & Returns
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
            <div className="md:space-y-4 space-y-1">
              <h3 className="text-sm font-medium pb-2 text-white">Social</h3>
              <ul className="space-y-4  text-sm text-white">
                <li className="flex gap-4 items-center">
                  {/* <div className="text-xs h-5 w-5">
                    <Instagram />
                  </div> */}
                  <Link
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Instagram
                  </Link>
                </li>
                <li className="flex gap-4 items-center">
                  {/* <div className="text-xs h-5 w-5">
                    <Facebook />
                  </div> */}
                  <Link
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Facebook
                  </Link>
                </li>
                <li className="flex gap-4 items-center">
                  {/* <div className="text-xs h-5 w-5">
                    <Phone />
                  </div> */}
                  <Link
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Whatsapp
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="md:hidden">
            <form className="flex w-full max-w-sm items-center gap-2">
              <input
                type="email"
                className="flex-grow rounded-md border border-gray-300  bg-white text-xs text-gray-900  px-4 py-2  lg:h-11 h-11"
                placeholder="Subscribe to Our Newsletter"
              />
              <Button className="text-xs">Subscribe</Button>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-white">
          <p>© {new Date().getFullYear()} RUKMI YOGA. All rights reserved.</p>
          <p>
            Designed and Developed by{" "}
            <a
              href="https://zeonweb.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline text-white"
            >
              zeonweb.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
