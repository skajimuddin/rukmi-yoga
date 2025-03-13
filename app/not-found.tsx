"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center">
        <div className="container px-4 md:px-6 py-16 md:py-24 lg:py-32">
          <div className="grid gap-6 items-center">
            <div className="flex flex-col items-center text-center space-y-4">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary/10 text-primary hover:bg-primary/20"
              >
                404 Error
              </motion.div>
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl font-bold tracking-tighter sm:text-5xl text-primary"
              >
                Page Not Found
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="max-w-[600px] text-gray-600 md:text-xl"
              >
                The page you are looking for doesn't exist or has been moved.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="pt-6"
              >
                <Button asChild className="gap-2 bg-primary hover:bg-secondary">
                  <Link href="/">
                    <ArrowLeft className="h-4 w-4" />
                    Back to Homepage
                  </Link>
                </Button>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex justify-center"
            >
              <div className="relative w-full max-w-md">
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
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
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 2,
                  }}
                  className="absolute -top-4 -left-4 h-24 w-24 rounded-full bg-primary/30 blur-xl"
                ></motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
