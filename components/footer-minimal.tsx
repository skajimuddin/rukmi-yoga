"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function FooterMinimal() {
  return (
    <footer className="border-t bg-secondary">
      <div className="container py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-white hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm">Back to Home</span>
          </Link>
          <p className="text-sm text-white">
            © {new Date().getFullYear()} RUKMI YOGA
          </p>
        </div>
      </div>
    </footer>
  )
}
