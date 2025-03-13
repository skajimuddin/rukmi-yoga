"use client"

import { useState, useEffect } from "react"
import { ChevronUp } from "lucide-react"

const ScrollToTopButton = () => {
  const [showTopButton, setShowTopButton] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowTopButton(true)
      } else {
        setShowTopButton(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    showTopButton && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-secondary transition"
      >
        <ChevronUp className="h-6 w-6" />
      </button>
    )
  )
}

export default ScrollToTopButton
