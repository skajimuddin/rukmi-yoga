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
      <div className="container py-10 md:py-16">
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2">
          <div className="space-y-5">
            <div className="flex items-center">
              <img className="h-16 px-3 bg-white rounded-md" src="/logo.svg" alt="logo" />
            </div>
            <p className="text-sm text-white max-w-md">
              Sri RukhaminiiYoga Gurukul, magical and soulful Yoga Training
            </p>
            <div className="flex flex-col gap-4">
              <div className="hidden md:block">
                <form className="flex w-full max-w-sm items-center gap-2">
                  <input
                    type="email"
                    className="flex-grow rounded-md border border-gray-300 bg-white text-xs text-gray-900 px-4 py-2 h-11"
                    placeholder="Subscribe to Our Newsletter"
                  />
                  <Button className="text-xs whitespace-nowrap">Subscribe</Button>
                </form>
              </div>
              <div>
                <Button onClick={() => setIsPopupOpen(true)}>
                  For Inquiry
                </Button>
                <ConsultationPopup
                  isOpen={isPopupOpen}
                  onClose={() => setIsPopupOpen(false)}
                />
              </div>
            </div>
          </div>

          <div className="grid gap-8 grid-cols-3">
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-white">Company</h3>
              <ul className="space-y-2 text-sm text-white">
                <li>
                  <Link
                    href="/"
                    className="hover:text-foreground transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/articles"
                    className="hover:text-foreground transition-colors"
                  >
                    Articles
                  </Link>
                </li>
                <li>
                  <Link
                    href="/gallery"
                    className="hover:text-foreground transition-colors"
                  >
                    Gallery
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-white">Help</h3>
              <ul className="space-y-2 text-sm text-white">
                <li>
                  <Link
                    href="/contact-us"
                    className="hover:text-foreground transition-colors"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about-us"
                    className="hover:text-foreground transition-colors"
                  >
                    About us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms-and-conditions"
                    className="hover:text-foreground transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-white">Social</h3>
              <ul className="space-y-3 text-sm text-white">
                <li>
                  <Link
                    href="https://www.instagram.com/srirukhaminiiyoga"
                    className="hover:text-foreground transition-colors flex items-center gap-2"
                  >
                    {/* <Instagram className="h-4 w-4" /> */}
                    <span>Instagram</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.facebook.com/people/Ashwini-Natu/pfbid0wntjKdeYRHARiBQGr63W8GMJcU3weeVJ1S3SxG4xjBtXwuX59MStx1Y3jcK4TnSwl/?mibextid=ZbWKwL"
                    className="hover:text-foreground transition-colors flex items-center gap-2"
                  >
                    {/* <Facebook className="h-4 w-4" /> */}
                    <span>Facebook</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.youtube.com/channel/UCrXQ07_n6uFcH-C-kQa_Tzg"
                    className="hover:text-foreground transition-colors flex items-center gap-2"
                  >
                    {/* <Phone className="h-4 w-4" /> */}
                    <span>YouTube</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 md:hidden">
          <form className="flex w-full items-center gap-2">
            <input
              type="email"
              className="flex-grow rounded-md border border-gray-300 bg-white text-xs text-gray-900 px-4 py-2 h-11"
              placeholder="Subscribe to Our Newsletter"
            />
            <Button className="text-xs whitespace-nowrap">Subscribe</Button>
          </form>
        </div>

        <div className="mt-10 border-t pt-6 text-center text-sm text-white">
          <p>
            © {new Date().getFullYear()} SRI RUKHAMINI. All rights reserved.
          </p>
          <p className="mt-1">
            Designed and Developed by{" "}
            <a
              href="https://www.astucreatives.com/"
              className="font-medium underline text-white"
            >
              astucreatives.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
