import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const getLinkClass = (path: string) => {
    return router.pathname === path
      ? "border-b-2 border-gray-300 text-gray-300"
      : "hover:text-gray-300";
  };

  return (
    <header className="container mx-auto px-8">
      <nav className="flex items-center justify-between pb-2 pt-8">
        <Link href="/" className="text-3xl text-white">
          HMP
        </Link>

        {/* Social Icons for Mobile */}
        <div className="flex items-center space-x-4 text-2xl md:hidden">
          <Link href="#" className="text-white hover:text-gray-300">
            <FaFacebookF />
          </Link>
          <Link href="#" className="text-white hover:text-gray-300">
            <FaInstagram />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden space-x-16 text-lg text-white md:flex">
          <Link href="/portfolio" className="hover:text-gray-300">
            Portfolio
          </Link>
          <Link href="/about" className="hover:text-gray-300">
            About
          </Link>
          <Link href="/contact" className="hover:text-gray-300">
            Contact
          </Link>
          <div className="flex items-center space-x-4 text-2xl">
            <Link href="#" className="text-white hover:text-gray-300">
              <FaFacebookF />
            </Link>
            <Link href="#" className="text-white hover:text-gray-300">
              <FaInstagram />
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="h-8 w-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-50 transform bg-black ${isOpen ? "translate-x-0" : "translate-x-full"} flex flex-col items-center justify-center transition-transform duration-[400ms] ease-in-out`}
      >
        <button
          onClick={toggleMenu}
          className="absolute right-4 top-8 text-white focus:outline-none"
        >
          <svg
            className="h-8 w-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
        <div className="flex flex-col items-center space-y-6 text-2xl text-white">
          <Link href="/" className={getLinkClass("/")} onClick={toggleMenu}>
            Home
          </Link>
          <Link
            href="/portfolio"
            className={getLinkClass("/portfolio")}
            onClick={toggleMenu}
          >
            Portfolio
          </Link>
          <Link
            href="/about"
            className={getLinkClass("/about")}
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            href="/contact"
            className={getLinkClass("/contact")}
            onClick={toggleMenu}
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
