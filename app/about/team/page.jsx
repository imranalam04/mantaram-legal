"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

export default function TeamPage() {
    const [activeFilter, setActiveFilter] = useState("all")

    const teamMembers = [
        {
            name: "Jonathan Mantaram",
            position: "Founding Partner",
            image: "https://images.unsplash.com/photo-1623880840102-7df0a9f3545b?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" || "/placeholder.svg?height=400&width=300",
            practice: "Corporate Law",
            category: "partner",
        },
        {
            name: "Sophia Williams",
            position: "Managing Partner",
            image: "https://images.unsplash.com/photo-1662104935883-e9dd0619eaba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            practice: "Litigation",
            category: "partner",
        },
        {
            name: "David Chen",
            position: "Senior Partner",
            image: "https://images.unsplash.com/photo-1614468500745-9bc401dbf0ca?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            practice: "Intellectual Property",
            category: "partner",
        },
        {
            name: "Elena Rodriguez",
            position: "Senior Partner",
            image: "https://images.unsplash.com/photo-1734033923447-538dc3982ac1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            practice: "Real Estate",
            category: "partner",
        },
        {
            name: "Maria Johnson",
            position: "Associate",
            image: "https://images.unsplash.com/photo-1604904612715-47bf9d9bc670?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            practice: "Family Law",
            category: "associate",
        },
        {
            name: "James Wilson",
            position: "Associate",
            image: "https://images.unsplash.com/photo-1669791332100-f06dee9d1bb1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            practice: "Real Estate",
            category: "associate",
        },
        {
            name: "Emily Patel",
            position: "Associate",
            image: "https://images.unsplash.com/photo-1665224752136-4dbe2dfc8195?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
            practice: "Tax Law",
            category: "associate",
        },
        {
            name: "Michael Thompson",
            position: "Associate",
            image: "https://images.pexels.com/photos/4427620/pexels-photo-4427620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            practice: "Corporate Law",
            category: "associate",
        },
        {
            name: "Sarah Lee",
            position: "Associate",
            image: "https://images.pexels.com/photos/4427610/pexels-photo-4427610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            practice: "Intellectual Property",
            category: "associate",
        },
        {
            name: "Robert Garcia",
            position: "Associate",
            image: "https://images.pexels.com/photos/5313158/pexels-photo-5313158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            practice: "Litigation",
            category: "associate",
        },
        {
            name: "Jennifer Kim",
            position: "Paralegal",
            image: "https://images.pexels.com/photos/8730384/pexels-photo-8730384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            practice: "Corporate Law",
            category: "staff",
        },
        {
            name: "Thomas Wright",
            position: "Paralegal",
            image: "https://images.pexels.com/photos/5668799/pexels-photo-5668799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            practice: "Litigation",
            category: "staff",
        },
        {
            name: "Lisa Martinez",
            position: "Office Manager",
            image: "https://images.pexels.com/photos/6170857/pexels-photo-6170857.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            practice: "Administration",
            category: "staff",
        },
        {
            name: "Daniel Brown",
            position: "Legal Secretary",
            image: "https://images.pexels.com/photos/7841434/pexels-photo-7841434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            practice: "Administration",
            category: "staff",
        },
    ]

    const filteredMembers =
        activeFilter === "all" ? teamMembers : teamMembers.filter((member) => member.category === activeFilter)

    return (
        <div className="flex flex-col w-full pt-20 " style={{ backgroundColor: "#033540" }}>
            {/* Hero Section */}
            <section className="relative py-20 bg-gray-100">
                <div className="container px-4 mx-auto">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-3xl md:text-5xl font-bold mb-6" style={{ color: "#033540" }}>
                            Our Team
                        </h1>
                        <p className="text-lg mb-6 text-gray-600">
                            Meet the talented professionals who make Mantaram Legal a leading law firm.
                        </p>
                    </div>
                </div>
            </section>

            {/* Team Filters */}
            <section className="py-12">
                <div className="container px-4 mx-auto">
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        <button
                            className={`px-6 py-2 rounded-full transition-colors ${activeFilter === "all" ? "text-white" : "text-gray-700 bg-gray-200 hover:bg-gray-300"
                                }`}
                            style={{ backgroundColor: activeFilter === "all" ? "#033540" : "" }}
                            onClick={() => setActiveFilter("all")}
                        >
                            All Team
                        </button>
                        <button
                            className={`px-6 py-2 rounded-full transition-colors ${activeFilter === "partner" ? "text-white" : "text-gray-700 bg-gray-200 hover:bg-gray-300"
                                }`}
                            style={{ backgroundColor: activeFilter === "partner" ? "#033540" : "" }}
                            onClick={() => setActiveFilter("partner")}
                        >
                            Partners
                        </button>
                        <button
                            className={`px-6 py-2 rounded-full transition-colors ${activeFilter === "associate" ? "text-white" : "text-gray-700 bg-gray-200 hover:bg-gray-300"
                                }`}
                            style={{ backgroundColor: activeFilter === "associate" ? "#033540" : "" }}
                            onClick={() => setActiveFilter("associate")}
                        >
                            Associates
                        </button>
                        <button
                            className={`px-6 py-2 rounded-full transition-colors ${activeFilter === "staff" ? "text-white" : "text-gray-700 bg-gray-200 hover:bg-gray-300"
                                }`}
                            style={{ backgroundColor: activeFilter === "staff" ? "#033540" : "" }}
                            onClick={() => setActiveFilter("staff")}
                        >
                            Staff
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {filteredMembers.map((member, index) => (
                            <div key={index} className="group">
                                <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
                                    <div className="relative overflow-hidden">
                                        <Image
                                            src={member.image || "/placeholder.svg"}
                                            alt={member.name}
                                            width={300}
                                            height={400}
                                            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="font-bold text-xl mb-1" style={{ color: "#033540" }}>
                                            {member.name}
                                        </h3>
                                        <p className="text-amber-500 font-medium mb-2">{member.position}</p>
                                        <p className="text-gray-600 mb-4">Practice Area: {member.practice}</p>
                                        <Link
                                            href={`/about/team/${member.name.toLowerCase().replace(/\s+/g, "-")}`}
                                            className="inline-flex items-center text-sm font-medium hover:text-amber-500"
                                            style={{ color: "#033540" }}
                                        >
                                            View Profile
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="ml-1"
                                            >
                                                <path d="M5 12h14"></path>
                                                <path d="m12 5 7 7-7 7"></path>
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Join Our Team */}
            <section className="py-20 bg-gray-100">
                <div className="container px-4 mx-auto">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-6" style={{ color: "#033540" }}>
                            Join Our Team
                        </h2>
                        <p className="text-lg mb-8 text-gray-600">
                            We're always looking for talented attorneys and staff who share our commitment to excellence and client
                            service. Explore our current opportunities and discover what makes Mantaram Legal a great place to build
                            your career.
                        </p>
                        <Link
                            href="/careers"
                            className="text-white px-6 py-3 rounded-md transition-colors inline-block"
                            style={{ backgroundColor: "#033540" }}
                            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#015366")}
                            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#033540")}
                        >
                            View Career Opportunities
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
