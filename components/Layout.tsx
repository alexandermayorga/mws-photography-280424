import { useRouter } from "next/router";
import Image from "next/image";
import bgImg from "/public/img/gift-habeshaw-0nNOc6OAwLI-unsplash_50.jpg";
// Pic from: https://unsplash.com/photos/man-facing-sideways-0nNOc6OAwLI

import { Quattrocento_Sans } from "next/font/google";
import Header from "./Header";

const quattrocento_sans = Quattrocento_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-quattrocento-sans",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <>
      <div
        className={`relative min-h-screen bg-black text-white ${quattrocento_sans.variable} font-sans`}
      >
        {router.pathname === "/" && (
          <Image
            src={bgImg}
            alt="Placeholder"
            width={1580}
            className="absolute inset-0 mx-auto h-full w-full max-w-[1580px] -scale-x-100 object-cover"
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

          {children}

          <footer className="container mx-auto px-4 pb-8 text-center text-white lg:text-left">
            <p className="text-sm">&copy; 2035 by Hunter Marvel.</p>
          </footer>
        </div>
      </div>
    </>
  );
}
