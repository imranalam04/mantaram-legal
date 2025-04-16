"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import logo from "../assets/logo.png"
import Image from "next/image"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/pro-bono", label: "Pro Bono" },
  { href: "/careers", label: "Careers" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
        }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
          alt="Mantaram Legal Logo"
            src={logo}
            width={100}
            height={60}
            className="object-contain"
            style={{ maxHeight: '50px' }}
          />
          <span className="font-playfair text-xl font-bold">
            <span style={{ color: isScrolled ? "#033540" : "white" }}>Mantaram</span>
            <span className="text-amber-500">Legal</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative text-sm font-medium transition-colors hover:text-amber-500 ${pathname === link.href ? "text-amber-500" : ""
                }`}
              style={{
                color: pathname === link.href ? "#f59e0b" : isScrolled ? "#033540" : "white",
              }}
            >
              {link.label}
              {pathname === link.href && <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-amber-500"></span>}
            </Link>
          ))}
          <button
            className="text-white px-4 py-2 rounded-md transition-colors"
            style={{ backgroundColor: "#033540" }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#015366")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#033540")}
          >
            Free Consultation
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            style={{ color: isScrolled ? "#033540" : "white" }}
            className="hover:text-amber-500"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
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
              >
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            ) : (
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
              >
                <line x1="4" x2="20" y1="12" y2="12"></line>
                <line x1="4" x2="20" y1="6" y2="6"></line>
                <line x1="4" x2="20" y1="18" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-base font-medium py-2 ${pathname === link.href ? "text-amber-500" : ""}`}
                style={{ color: pathname === link.href ? "#f59e0b" : "#033540" }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <button
              className="text-white px-4 py-2 rounded-md transition-colors w-full"
              style={{ backgroundColor: "#033540" }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#015366")}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#033540")}
            >
              Free Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
