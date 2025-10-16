import { useState } from "react";
import { Link } from "react-router-dom";
import Q from "@/components/Q";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 w-full z-30 bg-primary/70 backdrop-blur-md border-b border-white/20">
      <div className="container flex items-center justify-between py-4">
        {/* Logo + Text */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white">
            <Q name="graduation-cap" className="w-7 h-7 text-primary" />
          </div>

          {/* Text */}
          <div className="flex flex-col leading-tight">
            <span className="text-white font-extrabold text-lg sm:text-xl tracking-wide uppercase">
              UNITED COLLEGE
            </span>
            <span className="text-white font-normal text-sm sm:text-base">
              OF TECHNOLOGY (Pvt) Ltd.
            </span>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex gap-12 text-white font-medium">
          <Link to="/" className="hover:text-secondary">
            Home
          </Link>
          <Link to="/about" className="hover:text-secondary">
            About Us
          </Link>
          <Link to="/courses" className="hover:text-secondary">
            Courses
          </Link>
          <Link to="/blog" className="hover:text-secondary">
            Blog
          </Link>
          <Link to="/gallery" className="hover:text-secondary">
            Gallery{" "}
          </Link>
          <Link to="/contact-us" className="hover:text-secondary">
            Contact Us
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-white text-2xl hover:text-secondary"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <Q name="x" /> : <Q name="menu" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white/20 backdrop-blur-xs border-t border-white/20">
          <nav className="flex flex-col items-center gap-6 py-6 text-white font-medium">
            <Link
              to="/"
              className="hover:text-secondary"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="hover:text-secondary"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/courses"
              className="hover:text-secondary"
              onClick={() => setIsOpen(false)}
            >
              Courses
            </Link>
            <Link
              to="/blog"
              className="hover:text-secondary"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
            <Link
              to="/gallery"
              className="hover:text-secondary"
              onClick={() => setIsOpen(false)}
            >
              Gallery{" "}
            </Link>
            <Link
              to="/contact-us"
              className="hover:text-secondary"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
