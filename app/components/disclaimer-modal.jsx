"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import logo from "../assets/logo.png"
import Image from "next/image"

export default function DisclaimerModal() {
    const [isOpen, setIsOpen] = useState(false)
    const router = useRouter()

    useEffect(() => {
        // Check if user has already accepted the disclaimer
        const hasAccepted = localStorage.getItem("disclaimerAccepted")
        if (!hasAccepted) {
            setIsOpen(true)
        }
    }, [])

    const handleAgree = () => {
        localStorage.setItem("disclaimerAccepted", "true")
        setIsOpen(false)
    }

    const handleDisagree = () => {
        // Redirect to a neutral page or external site
        router.push("https://www.google.com")
    }

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[100] p-4">
            <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full p-6 md:p-8">
                <div className="flex justify-center mb-6">
                    <Link href="/" className="flex items-center gap-2">
                        <Image
                            alt="Mantaram Legal Logo"
                            src={logo}
                            width={80}
                            height={60}
                            className="object-contain"
                            style={{ maxHeight: '50px' }}
                        />
                        <span className="font-playfair text-xl font-bold">
                            <span style={{ color: "#033540" }}>Mantaram</span>
                            <span className="text-amber-500">Legal</span>
                        </span>
                    </Link>
                </div>

                <div className="mb-8">
                    <h2 className="text-xl font-bold mb-4" style={{ color: "#033540" }}>
                        Disclaimer
                    </h2>
                    <p className="text-gray-700 mb-4">
                        As per the rules of the Bar Council of India, we are not permitted to solicit work and advertise. By
                        visiting the website, the user acknowledges that the information provided on this website is solely
                        available for informational purposes only sought to be voluntarily gained by him/her and is neither
                        soliciting nor advertisement.
                    </p>
                    <p className="text-gray-700">
                        Further, the information provided on this website is accessed by the user's own volition, and any
                        transmission, receipt or use of this information available on this website does not create any liability or
                        any relationship with us.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        onClick={handleAgree}
                        className="py-2 px-6 rounded text-white font-medium"
                        style={{ backgroundColor: "#033540" }}
                        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#015366")}
                        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#033540")}
                    >
                        AGREE
                    </button>
                    <button
                        onClick={handleDisagree}
                        className="py-2 px-6 rounded border border-gray-300 text-gray-700 font-medium hover:bg-gray-100"
                    >
                        DISAGREE
                    </button>
                </div>
            </div>
        </div>
    )
}
