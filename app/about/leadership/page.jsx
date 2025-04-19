import Image from "next/image"
import Link from "next/link"

export default function LeadershipPage() {
    const partners = [
        {
            name: "Jonathan Mantaram",
            position: "Founding Partner",
            image: "https://images.unsplash.com/photo-1623880840102-7df0a9f3545b?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" || "/placeholder.svg?height=400&width=300",
            education: "J.D., Harvard Law School\nB.A., Yale University",
            expertise: "Corporate Law, Mergers & Acquisitions",
            bio: "Jonathan Mantaram founded Mantaram Legal in 2005 after a distinguished career at a national law firm. With over 25 years of experience in corporate law, Jonathan has established himself as a leading attorney in complex business transactions and litigation. His strategic approach and commitment to client service have been instrumental in the firm's growth and success.",
            awards: [
                "Best Lawyers in America, Corporate Law (2015-2023)",
                "Chambers USA, Leading Individual in Corporate/M&A (2018-2023)",
                "Super Lawyers, Top 100 Attorneys (2016-2023)",
            ],
            barAdmissions: [
                "New York State Bar",
                "U.S. District Court, Southern District of New York",
                "U.S. Court of Appeals, Second Circuit",
            ],
        },
        {
            name: "Sophia Williams",
            position: "Managing Partner",
            image: "https://images.unsplash.com/photo-1662104935883-e9dd0619eaba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" || "/placeholder.svg?height=400&width=300",
            education: "J.D., Columbia Law School\nB.A., Princeton University",
            expertise: "Commercial Litigation, Appellate Practice",
            bio: "Sophia Williams joined Mantaram Legal in 2007 and became Managing Partner in 2018. She specializes in complex commercial litigation and has successfully represented clients in numerous high-profile cases, earning a reputation for her strategic approach and persuasive advocacy. As Managing Partner, Sophia oversees the firm's operations and strategic direction while maintaining an active litigation practice.",
            awards: [
                "Benchmark Litigation, Top 250 Women in Litigation (2019-2023)",
                "New York Law Journal, Distinguished Leader (2020)",
                "Super Lawyers, Top 50 Women Attorneys (2017-2023)",
            ],
            barAdmissions: ["New York State Bar", "New Jersey State Bar", "U.S. Supreme Court"],
        },
        {
            name: "David Chen",
            position: "Senior Partner",
            image: "https://images.unsplash.com/photo-1614468500745-9bc401dbf0ca?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" || "/placeholder.svg?height=400&width=300",
            education: "J.D., Stanford Law School\nB.S., Massachusetts Institute of Technology",
            expertise: "Intellectual Property, Technology Transactions",
            bio: "David Chen leads the firm's Intellectual Property practice, which he helped establish in 2015. With a background in computer science and prior experience as in-house counsel for a major technology company, David brings a unique perspective to intellectual property matters. He has helped countless clients protect their innovations and creative works in the digital age.",
            awards: [
                "IAM Patent 1000, Recommended Individual (2018-2023)",
                "Managing Intellectual Property, IP Star (2016-2023)",
                "National Law Journal, Intellectual Property Trailblazer (2019)",
            ],
            barAdmissions: ["New York State Bar", "California State Bar", "U.S. Patent and Trademark Office"],
        },
        {
            name: "Elena Rodriguez",
            position: "Senior Partner",
            image: "https://images.unsplash.com/photo-1734033923447-538dc3982ac1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" || "/placeholder.svg?height=400&width=300",
            education: "J.D., New York University School of Law\nB.A., University of California, Berkeley",
            expertise: "Real Estate Law, Land Use & Zoning",
            bio: "Elena Rodriguez joined Mantaram Legal in 2010 and leads the firm's Real Estate practice. With extensive experience in commercial real estate transactions, development projects, and land use matters, Elena has helped clients navigate some of the most complex and high-value real estate deals in the region. Her practical approach and deep knowledge of the market make her a trusted advisor to developers, investors, and property owners.",
            awards: [
                "Chambers USA, Leading Individual in Real Estate (2017-2023)",
                "Real Estate Forum, Women of Influence (2020)",
                "Super Lawyers, Real Estate (2015-2023)",
            ],
            barAdmissions: ["New York State Bar", "Connecticut State Bar"],
        },
    ]

    return (
        <div className="flex flex-col w-full pt-20" style={{ backgroundColor: "#033540" }}>
            {/* Hero Section */}
            <section className="relative py-20 bg-gray-100">
                <div className="container px-4 mx-auto">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-3xl md:text-5xl font-bold mb-6" style={{ color: "#033540" }}>
                            Leadership & Partners
                        </h1>
                        <p className="text-lg mb-6 text-gray-600">
                            Meet the experienced attorneys who lead Mantaram Legal and set the standard for excellence.
                        </p>
                    </div>
                </div>
            </section>

            {/* Leadership Philosophy */}
            <section className="py-20">
                <div className="container px-4 mx-auto">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h2 className="text-3xl font-bold mb-6" style={{ color: "#fff" }}>
                            Our Leadership Philosophy
                        </h2>
                        <p className="text-lg text-gray-100">
                            At Mantaram Legal, leadership is not just about titles or hierarchy—it's about vision, integrity, and a
                            commitment to excellence. Our partners lead by example, embodying the values that define our firm and
                            guiding our team to deliver exceptional results for our clients.
                        </p>
                        <p className="text-lg text-gray-100 mt-4">
                            We believe in collaborative leadership that draws on the diverse strengths and perspectives of our team.
                            This approach allows us to provide innovative solutions to complex legal challenges while maintaining the
                            highest standards of professionalism and client service.
                        </p>
                    </div>
                </div>
            </section>

            {/* Partners Profiles */}
            <section className="py-20 bg-gray-100">
                <div className="container px-4 mx-auto">
                    <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: "#033540" }}>
                        Our Partners
                    </h2>

                    {partners.map((partner, index) => (
                        <div key={index} className="mb-20 last:mb-0">
                            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                <div className="grid grid-cols-1 md:grid-cols-3">
                                    <div className="md:col-span-1">
                                        <div className="relative h-full">
                                            <Image
                                                src={partner.image || "/placeholder.svg"}
                                                alt={partner.name}
                                                width={300}
                                                height={400}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>
                                    <div className="md:col-span-2 p-6 md:p-8">
                                        <h3 className="text-2xl font-bold mb-1" style={{ color: "#033540" }}>
                                            {partner.name}
                                        </h3>
                                        <p className="text-amber-500 font-medium mb-4">{partner.position}</p>

                                        <div className="mb-4">
                                            <h4 className="font-bold mb-1 text-black">Education</h4>
                                            <p className="text-gray-600 whitespace-pre-line">{partner.education}</p>
                                        </div>

                                        <div className="mb-4">
                                            <h4 className="font-bold mb-1 text-black">Areas of Expertise</h4>
                                            <p className="text-gray-600">{partner.expertise}</p>
                                        </div>

                                        <div className="mb-4">
                                            <h4 className="font-bold mb-1 text-black">Biography</h4>
                                            <p className="text-gray-600">{partner.bio}</p>
                                        </div>

                                        <div className="mb-4">
                                            <h4 className="font-bold mb-1 text-black">Awards & Recognition</h4>
                                            <ul className="list-disc list-inside text-gray-600">
                                                {partner.awards.map((award, i) => (
                                                    <li key={i}>{award}</li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div>
                                            <h4 className="font-bold mb-1 text-black">Bar Admissions</h4>
                                            <ul className="list-disc list-inside text-gray-600">
                                                {partner.barAdmissions.map((admission, i) => (
                                                    <li key={i}>{admission}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20" style={{ backgroundColor: "#033540" }}>
                <div className="container px-4 mx-auto">
                    <div className="max-w-3xl mx-auto text-center text-white">
                        <h2 className="text-3xl font-bold mb-6">Work With Our Team</h2>
                        <p className="text-lg mb-8 text-white/80">
                            Our partners lead a team of talented attorneys dedicated to providing exceptional legal representation.
                            Contact us to discuss how we can assist with your legal needs.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/about/team"
                                className="bg-white text-gray-900 px-6 py-3 rounded-md hover:bg-gray-100 transition-colors"
                            >
                                Meet Our Team
                            </Link>
                            <Link
                                href="/contact"
                                className="bg-amber-500 text-white px-6 py-3 rounded-md hover:bg-amber-400 transition-colors"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
