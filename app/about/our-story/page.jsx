"use client"

import Image from "next/image"
import Link from "next/link"

export default function OurStoryPage() {
    return (
        <div className="flex flex-col w-full pt-20 " style={{ backgroundColor: "#033540" }}>
            {/* Hero Section */}
            <section className="relative py-20 bg-gray-100">
                <div className="container px-4 mx-auto">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-3xl md:text-5xl font-bold mb-6" style={{ color: "#033540" }}>
                            Our Story
                        </h1>
                        <p className="text-lg mb-6 text-gray-600">
                            The journey of Mantaram Legal from its founding to becoming a leading law firm.
                        </p>
                    </div>
                </div>
            </section>

            {/* Founding Story */}
            <section className="py-20" style={{ backgroundColor: "#033540" }}>
                <div className="container px-4 mx-auto" >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" >
                        <div className="relative">
                            <div className="absolute -top-4 -left-4 w-24 h-24 bg-amber-500/20 rounded-lg"></div>
                            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-amber-500/20 rounded-lg"></div>
                            <div className="relative rounded-lg overflow-hidden">
                                <Image
                                    src="https://images.unsplash.com/photo-1562564055-71e051d33c19?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="Founding of Mantaram Legal"
                                    width={800}
                                    height={600}
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold mb-6" style={{ color: "#fff" }}>
                                The Beginning
                            </h2>
                            <p className="text-lg mb-6 text-gray-100">
                                Mantaram Legal was founded in 2005 by Jonathan Mantaram, a visionary attorney with a passion for justice
                                and client advocacy. After spending a decade at a prestigious national law firm, Jonathan recognized an
                                opportunity to create a different kind of legal practice—one that combined the sophistication and
                                expertise of a large firm with the personalized attention and agility of a boutique practice.
                            </p>
                            <p className="text-lg mb-6 text-gray-100">
                                Starting with just three attorneys in a small office in downtown, the firm initially focused on
                                corporate law and commercial litigation. Jonathan's reputation for excellence and his client-centered
                                approach quickly attracted both talented attorneys and high-profile clients.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Growth and Evolution */}
            <section className="py-20 bg-gray-100">
                <div className="container px-4 mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1">
                            <h2 className="text-3xl font-bold mb-6" style={{ color: "#033540" }}>
                                Growth and Evolution
                            </h2>
                            <p className="text-lg mb-6 text-gray-600">
                                As the firm's reputation grew, so did its practice areas. By 2010, Mantaram Legal had expanded to
                                include family law, real estate, and intellectual property practices, responding to the diverse needs of
                                its growing client base.
                            </p>
                            <p className="text-lg mb-6 text-gray-600">
                                The firm moved to its current flagship office in 2012, a space designed to reflect its values of
                                professionalism, accessibility, and innovation. This expansion coincided with the addition of several
                                key partners who brought specialized expertise and shared the firm's commitment to client service.
                            </p>
                            <p className="text-lg mb-6 text-gray-600">
                                In 2015, recognizing the increasing importance of intellectual property in the digital economy, the firm
                                established a dedicated IP practice group, bringing on specialized attorneys with backgrounds in
                                technology and creative industries.
                            </p>
                        </div>
                        <div className="relative order-1 lg:order-2">
                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-amber-500/20 rounded-lg"></div>
                            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-amber-500/20 rounded-lg"></div>
                            <div className="relative rounded-lg overflow-hidden">
                                <Image
                                    src="https://images.unsplash.com/photo-1491336477066-31156b5e4f35?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="Growth of Mantaram Legal"
                                    width={800}
                                    height={600}
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Community Commitment */}
            <section className="py-20" style={{ backgroundColor: "#033540" }}>
                <div className="container px-4 mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="relative">
                            <div className="absolute -top-4 -left-4 w-24 h-24 bg-amber-500/20 rounded-lg"></div>
                            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-amber-500/20 rounded-lg"></div>
                            <div className="relative rounded-lg overflow-hidden">
                                <Image
                                    src="https://images.unsplash.com/photo-1574276323455-8333699f7358?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="Community service"
                                    width={800}
                                    height={600}
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold mb-6" style={{ color: "#fff" }}>
                                Commitment to Community
                            </h2>
                            <p className="text-lg mb-6 text-gray-100">
                                From its earliest days, Mantaram Legal has maintained a strong commitment to community service and pro
                                bono work. In 2018, the firm formalized this commitment by launching a dedicated Pro Bono Program, which
                                allows attorneys to dedicate a portion of their time to serving underrepresented individuals and
                                nonprofit organizations.
                            </p>
                            <p className="text-lg mb-6 text-gray-100">
                                The firm's community involvement extends beyond legal services to include sponsorship of local events,
                                participation in charitable initiatives, and board service for nonprofit organizations. This commitment
                                to giving back reflects the firm's belief that a successful legal practice must be an engaged and
                                responsible member of the community it serves.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Present and Future */}
            <section className="py-20 bg-gray-100">
                <div className="container px-4 mx-auto">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-6" style={{ color: "#033540" }}>
                            Mantaram Legal Today and Tomorrow
                        </h2>
                        <p className="text-lg mb-6 text-gray-600">
                            Today, Mantaram Legal stands as a respected mid-sized firm with a reputation for excellence, integrity,
                            and client service. With over 30 attorneys across multiple practice areas, the firm serves a diverse
                            client base ranging from individuals and small businesses to multinational corporations.
                        </p>
                        <p className="text-lg mb-6 text-gray-600">
                            As we look to the future, Mantaram Legal remains committed to the principles that have guided us from the
                            beginning: providing exceptional legal representation, fostering a collaborative and inclusive workplace,
                            and making a positive impact in our community.
                        </p>
                        <p className="text-lg mb-8 text-gray-600">
                            We continue to evolve and adapt to meet the changing needs of our clients and the legal landscape,
                            embracing new technologies and innovative approaches while maintaining our core values and commitment to
                            excellence.
                        </p>
                        <Link
                            href="/contact"
                            className="text-white px-6 py-3 rounded-md transition-colors inline-block"
                            style={{ backgroundColor: "#033540" }}
                            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#015366")}
                            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#033540")}
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
