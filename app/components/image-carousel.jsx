"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import Law from '../assets/lawbar.png'
import Slider from '../assets/slider.png'
import hammer from '../assets/hammer.png'

const slides = [
  {
    image: Slider,
    title: "",
    description: ".",
  },
  {
    image: Law,
    title: "Experienced Legal Team",
    description: "Our team of dedicated attorneys brings decades of combined experience.",
  },
  {
    image: hammer,
    title: "Client-Centered Approach",
    description: "We ensure each client receives personalized attention and strategic solutions.",
  },
]

export default function ImageCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  return (
    <div className="relative w-full overflow-hidden pt-16 h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
        >
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={slide.title || "Slide Image"}
              fill
              className="object-cover"
              priority={index === 0}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="text-center text-white px-4 max-w-4xl">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-playfair mb-4 sm:mb-6">{slide.title}</h1>
              <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8">{slide.description}</p>
              {/* <Link
                href="/contact"
                className="text-white px-4 py-2 sm:px-6 sm:py-3 rounded-md transition-colors mx-2 inline-block text-sm sm:text-base"
                style={{ backgroundColor: "#033540" }}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#015366")}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#033540")}
              >
                Schedule a Consultation
              </Link>
              <Link
                href="/about"
                className="bg-transparent border border-white text-white px-4 py-2 sm:px-6 sm:py-3 rounded-md hover:bg-white/10 transition-colors mx-2 inline-block text-sm sm:text-base"
              >
                Learn More About Us
              </Link> */}
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute cursor-pointer left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 text-white p-1 sm:p-2 rounded-full"
        aria-label="Previous slide"
      >
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
          className="w-4 h-4 sm:w-6 sm:h-6"
        >
          <path d="m15 18-6-6 6-6"></path>
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 text-white p-1 sm:p-2 rounded-full"
        aria-label="Next slide"
      >
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
          className="w-4 h-4 sm:w-6 sm:h-6"
        >
          <path d="m9 18 6-6-6-6"></path>
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${index === currentSlide ? "bg-white" : "bg-white/50 hover:bg-white/70"}`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  )
}