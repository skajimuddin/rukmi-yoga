"use client"

import Link from "next/link"
import { Leaf, Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Close menu when clicking a link (better mobile UX)
  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  const links = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/about-me", label: "About" },
    { href: "/#testimonials", label: "Testimonials" },
    { href: "/#contact", label: "Contact" },
  ]

  return (
    <header className="sticky top-0 z-40 border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2"
        >
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-semibold tracking-tight text-primary">
              RUKMI YOGA
            </span>
            <Leaf className="h-6 w-6 text-primary" />
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:flex gap-6"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </motion.nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-primary p-1 rounded-md hover:bg-gray-100 transition-colors"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation - Using AnimatePresence for proper animation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden border-t"
          >
            <nav className="flex flex-col bg-white py-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="py-3 px-6 text-sm font-medium transition-colors hover:bg-gray-50 hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
