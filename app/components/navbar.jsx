"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown } from "lucide-react"

const aboutDropdownLinks = [
  { href: "/about/our-story", label: "Our Story" },
  { href: "/about/leadership", label: "Leadership / Partners" },
  { href: "/about/team", label: "Team" },
  { href: "/about/vision-values", label: "Vision & Values" },
]

const mainNavLinks = [
  { href: "/", label: "Home" },
  {
    href: "/about",
    label: "About Us",
    hasDropdown: true,
    dropdownLinks: aboutDropdownLinks,
  },
  { href: "/services", label: "Services" },
  { href: "/pro-bono", label: "Pro Bono" },
  { href: "/careers", label: "Careers" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false)
  const pathname = usePathname()
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const isAboutActive = pathname.startsWith("/about")

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
        }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-amber-500"
          >
            <path d="M8 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h3a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Z"></path>
            <path d="M19 3h-3a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h3a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Z"></path>
            <path d="M12 12h.01"></path>
          </svg>
          <span className="font-playfair text-xl font-bold">
            <span style={{ color: isScrolled ? "#033540" : "white" }}>Mantaram</span>
            <span className="text-amber-500">Legal</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {mainNavLinks.map((link) =>
            link.hasDropdown ? (
              <div key={link.href} className="relative" ref={dropdownRef}>
                <button
                  className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-amber-500 ${isAboutActive ? "text-amber-500" : ""
                    }`}
                  style={{
                    color: isAboutActive ? "#f59e0b" : isScrolled ? "#033540" : "white",
                  }}
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  onMouseEnter={() => setDropdownOpen(true)}
                >
                  {link.label}
                  <ChevronDown size={16} />
                </button>
                {isAboutActive && <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-amber-500"></span>}

                {dropdownOpen && (
                  <div
                    className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50"
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <div className="py-1">
                      {link.dropdownLinks.map((dropdownLink) => (
                        <Link
                          key={dropdownLink.href}
                          href={dropdownLink.href}
                          className={`block px-4 py-2 text-sm hover:bg-gray-100 ${pathname === dropdownLink.href ? "text-amber-500" : "text-gray-700"
                            }`}
                          onClick={() => setDropdownOpen(false)}
                        >
                          {dropdownLink.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
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
                {pathname === link.href && (
                  <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-amber-500"></span>
                )}
              </Link>
            ),
          )}
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
            {mainNavLinks.map((link) =>
              link.hasDropdown ? (
                <div key={link.href} className="space-y-2">
                  <button
                    className={`flex items-center justify-between w-full text-base font-medium py-2 ${isAboutActive ? "text-amber-500" : ""
                      }`}
                    style={{ color: isAboutActive ? "#f59e0b" : "#033540" }}
                    onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                  >
                    {link.label}
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${mobileDropdownOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  {mobileDropdownOpen && (
                    <div className="pl-4 space-y-2 border-l-2 border-gray-200">
                      {link.dropdownLinks.map((dropdownLink) => (
                        <Link
                          key={dropdownLink.href}
                          href={dropdownLink.href}
                          className={`block py-2 text-sm ${pathname === dropdownLink.href ? "text-amber-500" : "text-gray-700"
                            }`}
                          onClick={() => {
                            setMobileMenuOpen(false)
                            setMobileDropdownOpen(false)
                          }}
                        >
                          {dropdownLink.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-base font-medium py-2 ${pathname === link.href ? "text-amber-500" : ""}`}
                  style={{ color: pathname === link.href ? "#f59e0b" : "#033540" }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ),
            )}
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
