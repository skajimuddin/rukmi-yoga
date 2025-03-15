"use client"

import Image from "next/image"
import { motion } from "framer-motion"

import Hader from "@/components/header"
import Footer from "@/components/footer"
import ScrollToTopButton from "@/components/ScrollToTopButton"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hader />
      <main className="flex-1">
        <section className="relative py-10 md:py-20 bg-gradient-to-b from-white to-gray-100 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/hero_bg.webp"
              alt="Ayurvedic Background"
              layout="fill"
              objectFit="cover"
              className="opacity-60"
            />
          </div>
          <div className="container px-4 md:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center space-y-4 text-center"
            >
              <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium border-primary/20 bg-secondary/10 text-secondary">
                Brand Story
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-primary">
                About Kayapalat
              </h1>
            </motion.div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">
                  Kayapalat Story
                </h2>
                <p className="text-muted-foreground md:text-lg leading-relaxed">
                  Here is Rajkot, Gujarat’s brave woman{" "}
                  <b>Mrs. Anju Pandaliya</b>, with a great passion for preparing{" "}
                  <b>100% Natural</b> Products to make you fit and healthy all
                  the time. She and her work has become a symbol of standard
                  quality through her business practices. She is the strong
                  mother of two handsome sons, dedicated to creating earning
                  opportunities, especially for beauticians and housewives
                </p>
                <p className="text-muted-foreground md:text-lg leading-relaxed">
                  Kayapalat is a most effective product made from Natural Mud,
                  Fiber, and water (H2O). It keeps the human body healthy. The
                  human body has been made from Panchmahabhutas{" "}
                  <b>1) Sky 2) Air 3) Fire 4) Earth and 5) Water</b>, this
                  universe is also made from the same. Our Ayurveda says that if
                  the treatment is done by these Panchmahabhutas then{" "}
                  <b>100% expected result</b> can be obtained.Subtracting{" "}
                  <b>3% of the accidental disease</b> human body suffers from{" "}
                  <b>97% of diseases</b> which are connected to our mind..
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative h-[450px] overflow-hidden rounded-lg shadow-lg"
              >
                <Image
                  src="/yoga_img_01.webp"
                  alt="Our Story"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
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
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                    delay: 2,
                  }}
                  className="absolute -top-4 -left-4 h-24 w-24 rounded-full bg-primary/30 blur-xl"
                ></motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2 lg:gap-16">
              {/* Mission Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-lg border bg-white p-6 shadow-sm transition-all hover:shadow-md"
              >
                <div className="absolute top-0 right-0 h-24 w-24 rounded-full bg-secondary/10 blur-xl"></div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-secondary/20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="m12 14 4-4" />
                    <path d="M3.34 19a10 10 0 1 1 17.32 0" />
                  </svg>
                </div>
                <h3 className="mt-4 text-2xl font-bold text-primary">
                  Our Mission
                </h3>
                <p className="mt-2 text-gray-600">
                  To provide 100% Natural Laboratory Tested Health and Beauty
                  Products that suit almost all Human Bodies.
                </p>
              </motion.div>

              {/* Vision Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-lg border bg-white p-6 shadow-sm transition-all hover:shadow-md"
              >
                <div className="absolute top-0 right-0 h-24 w-24 rounded-full bg-secondary/10 blur-xl"></div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-secondary/20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
                <h3 className="mt-4 text-2xl font-bold text-primary">
                  Our Vision
                </h3>
                <p className="mt-2 text-gray-600">
                  We serve families who want to improve their health and
                  wellness by using natural therapies and lifestyle changes. We
                  uphold the principles of naturopathic medicine by respecting
                  the healing power of nature, identifying and treating the
                  causes of disease, educating and empowering our patients, and
                  preventing illness.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-4 text-center mb-12"
            >
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary/10 text-secondary">
                Our Events
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
                Explore Our Events
              </h2>
            </motion.div>
            <div className="grid gap-8 md:grid-cols-3 lg:gap-10">
              {/* Event 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="relative h-[300px] overflow-hidden rounded-lg shadow-lg"
              >
                <Image
                  src="https://www.kayapalatcare.com/cdn/shop/files/WhatsApp-Image-2023-08-14-at-13_2_1000x.jpg?v=1715083849"
                  alt="Event 1"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </motion.div>

              {/* Event 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative h-[300px] overflow-hidden rounded-lg shadow-lg"
              >
                <Image
                  src="https://www.kayapalatcare.com/cdn/shop/files/WhatsApp-Image-2023-08-14-at-13_3_1000x.jpg?v=1715083894"
                  alt="Event 2"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </motion.div>

              {/* Event 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="relative h-[300px] overflow-hidden rounded-lg shadow-lg"
              >
                <Image
                  src="https://www.kayapalatcare.com/cdn/shop/files/WhatsApp-Image-2023-08-14-at-13_4_1000x.jpg?v=1715083991"
                  alt="Event 3"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="relative h-[300px] overflow-hidden rounded-lg shadow-lg"
              >
                <Image
                  src="https://www.kayapalatcare.com/cdn/shop/files/WhatsApp-Image-2023-08-14-at-13_7_1000x.jpg?v=1715084076"
                  alt="Event 3"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="relative h-[300px] overflow-hidden rounded-lg shadow-lg"
              >
                <Image
                  src="https://www.kayapalatcare.com/cdn/shop/files/WhatsApp-Image-2023-08-14-at-13_6_1000x.jpg?v=1715084048"
                  alt="Event 3"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="relative h-[300px] overflow-hidden rounded-lg shadow-lg"
              >
                <Image
                  src="https://www.kayapalatcare.com/cdn/shop/files/WhatsApp-Image-2023-08-14-at-13_5.jpg?v=1715084015"
                  alt="Event 3"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-16 lg:py-20 bg-gray-100">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-4 text-center mb-12"
            >
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary/10 text-secondary">
                Before & After
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
                Effective Results
              </h2>
            </motion.div>
            <div className="grid gap-8 md:grid-cols-3 lg:gap-12">
              {/* Result 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="relative h-[400px] overflow-hidden rounded-lg shadow-lg"
              >
                <Image
                  src="https://www.kayapalatcare.com/cdn/shop/files/WhatsApp-Image-2023-08-17-at-13.jpg?v=1715084938"
                  alt="Result 1"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </motion.div>

              {/* Result 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative h-[400px] overflow-hidden rounded-lg shadow-lg"
              >
                <Image
                  src="https://www.kayapalatcare.com/cdn/shop/files/WhatsApp-Image-2023-08-17-at-13_1.jpg?v=1715085042"
                  alt="Result 2"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </motion.div>

              {/* Result 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="relative h-[400px] overflow-hidden rounded-lg shadow-lg"
              >
                <Image
                  src="https://www.kayapalatcare.com/cdn/shop/files/WhatsApp-Image-2023-08-17-at-13_2.jpg?v=1715085063"
                  alt="Result 3"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </motion.div>

              {/* Result 4 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="relative h-[400px] overflow-hidden rounded-lg shadow-lg"
              >
                <Image
                  src="https://www.kayapalatcare.com/cdn/shop/files/WhatsApp-Image-2023-08-17-at-13_5.jpg?v=1715085126"
                  alt="Result 4"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </motion.div>

              {/* Result 5 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="relative h-[400px] overflow-hidden rounded-lg shadow-lg"
              >
                <Image
                  src="https://www.kayapalatcare.com/cdn/shop/files/WhatsApp-Image-2023-08-17-at-13_6.jpg?v=1715085143"
                  alt="Result 5"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </motion.div>

              {/* Result 6 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="relative h-[400px] overflow-hidden rounded-lg shadow-lg"
              >
                <Image
                  src="https://www.kayapalatcare.com/cdn/shop/files/WhatsApp-Image-2023-08-17-at-13_7.jpg?v=1715085166"
                  alt="Result 6"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="w-full py-8 md:py-16 lg:py-26">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-3 lg:gap-16 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-lg border bg-white p-6 shadow-sm transition-all hover:shadow-md"
              >
                <div className="absolute top-0 right-0 h-24 w-24 rounded-full bg-secondary/10 blur-xl"></div>
                <h3 className="text-3xl font-bold text-primary">34K</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Happy Customer
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-lg border bg-white p-6 shadow-sm transition-all hover:shadow-md"
              >
                <div className="absolute top-0 right-0 h-24 w-24 rounded-full bg-secondary/10 blur-xl"></div>
                <h3 className="text-3xl font-bold text-primary">11,000</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Products Sold Worldwide
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-lg border bg-white p-6 shadow-sm transition-all hover:shadow-md"
              >
                <div className="absolute top-0 right-0 h-24 w-24 rounded-full bg-secondary/10 blur-xl"></div>
                <h3 className="text-3xl font-bold text-primary">100%</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our Satisfaction Ratio
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <ScrollToTopButton />
    </div>
  )
}
