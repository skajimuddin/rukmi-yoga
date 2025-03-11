import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  About RUKMI YOGA
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Discover our journey in bringing ancient Ayurvedic wisdom to modern wellness seekers.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Story</h2>
                <p className="text-muted-foreground md:text-lg">
                  RUKMI YOGA was founded with a simple mission: to bring the ancient wisdom of Ayurveda to modern
                  wellness seekers. Our journey began when our founder, after years of studying traditional Ayurvedic
                  practices, created a line of products that combine time-tested ingredients with contemporary science.
                </p>
                <p className="text-muted-foreground md:text-lg">
                  Today, we're proud to offer Kayapalat Care products that help thousands of people achieve balance and
                  wellness in their daily lives. Each product is crafted with intention, using only the purest
                  ingredients sourced from trusted suppliers across India.
                </p>
              </div>
              <div className="relative h-[400px] overflow-hidden rounded-xl shadow-lg">
                <Image
                  src="/placeholder.svg?height=400&width=600&text=Our+Story"
                  alt="Our Story"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="relative h-[400px] overflow-hidden rounded-xl shadow-lg order-2 lg:order-1">
                <Image
                  src="/placeholder.svg?height=400&width=600&text=Our+Mission"
                  alt="Our Mission"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-4 order-1 lg:order-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Mission</h2>
                <p className="text-muted-foreground md:text-lg">
                  At RUKMI YOGA, our mission is to empower individuals to achieve holistic wellness through the power of
                  Ayurveda. We believe that true health comes from balancing mind, body, and spirit, and our products
                  are designed to support this harmonious state of being.
                </p>
                <p className="text-muted-foreground md:text-lg">
                  We are committed to sustainability, ethical sourcing, and preserving the rich heritage of Ayurvedic
                  traditions while embracing modern scientific advancements.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Join Our Wellness Journey</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Experience the transformative power of Ayurveda with RUKMI YOGA's Kayapalat Care products.
              </p>
              <Button size="lg" asChild>
                <Link href="/products">Explore Our Products</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

