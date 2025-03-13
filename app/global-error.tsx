"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { RefreshCcw } from "lucide-react"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen flex-col items-center justify-center p-4 text-center">
          <div className="space-y-6">
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold border-transparent bg-red-100 text-red-700">
              Something went wrong
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">
              An unexpected error occurred
            </h2>
            <p className="mx-auto max-w-[600px] text-gray-600 md:text-xl">
              We apologize for the inconvenience. Please try refreshing the page or return to the homepage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => reset()}
                className="gap-2 bg-primary hover:bg-secondary"
              >
                <RefreshCcw className="h-4 w-4" />
                Try Again
              </Button>
              <Button 
                variant="outline" 
                asChild
                className="border-primary text-primary hover:bg-secondary/10"
              >
                <Link href="/">Return to Homepage</Link>
              </Button>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
