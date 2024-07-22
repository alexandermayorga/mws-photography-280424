import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import bgImg from "/public/img/gift-habeshaw-0nNOc6OAwLI-unsplash_50.jpg";
// Pic from: https://unsplash.com/photos/man-facing-sideways-0nNOc6OAwLI

import Header from "./Header";
import Head from "next/head";
import { quattrocento, quattrocento_sans } from "@/fonts/fonts";

const variants = {
  hidden: { opacity: 0, x: 0, y: 100 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 100 },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Photography Site Template</title>
        <meta
          name="description"
          content="Photography Site Template built with Next JS, React, Typescript, TailwindCSS, Framer Motion, and React Hook Form"
        />
      </Head>
      <div
        className={`relative min-h-screen bg-black font-sans text-white ${quattrocento.variable} ${quattrocento_sans.variable}`}
      >
        {router.pathname === "/" && (
          <Image
            src={bgImg}
            alt="Placeholder"
            width={1580}
            height={946}
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, (max-width: 1366px) 100vw, (max-width: 1600px) 100vw, (max-width: 1920px) 100vw,"
            className="absolute inset-0 mx-auto h-full w-full max-w-[1580px] -scale-x-100 object-cover"
            quality={80}
          />
        )}
        <div className="relative z-10">
          <Header />
          {/* <header className="container mx-auto px-4">
            <nav className="flex items-center justify-between pt-8 pb-2">
              <Link href="/" className="text-white text-3xl">
                HMP
              </Link>

              <div className="flex space-x-16 text-white text-lg">
                <Link href="/portfolio" className="hover:text-gray-300">
                  Portfolio
                </Link>
                <Link href="/about" className="hover:text-gray-300">
                  About
                </Link>
                <Link href="/albums" className="hover:text-gray-300">
                  Albums
                </Link>
                <Link href="/contact" className="hover:text-gray-300">
                  Contact
                </Link>
                <div className="flex space-x-4 items-center text-xl">
                  <Link href="#" className="text-white hover:text-gray-300">
                    <FaFacebookF />
                  </Link>
                  <Link href="#" className="text-white hover:text-gray-300">
                    <FaInstagram />
                  </Link>
                </div>
              </div>
            </nav>
          </header> */}
          <AnimatePresence mode="wait">
            <motion.div
              key={router.route}
              variants={variants}
              initial="hidden"
              animate="enter"
              exit="exit"
              transition={{ type: "easeIn", duration: "0.6" }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
          <footer className="container mx-auto px-4 pb-8 text-center text-white lg:text-left">
            <p className="text-sm">&copy; 2035 by Hunter Marvel.</p>
          </footer>
        </div>
      </div>
    </>
  );
}
