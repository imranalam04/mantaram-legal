"use client"

import Image from "next/image"
import Link from "next/link"
import ImageCarousel from "./components/image-carousel"
import About from "./assets/about.png"

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Image Carousel */}
      <ImageCarousel />

      {/* About Section with Image and Text */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-amber-500/20 rounded-lg"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-amber-500/20 rounded-lg"></div>
              <div className="relative rounded-lg overflow-hidden">
                <Image
                  src={About}
                  alt="Law firm team"
                  width={800}
                  height={600}
                  className="w-full h-[30rem] object-cover"
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6" style={{ color: "#033540" }}>
                About Mantaram Legal
              </h2>
              <p className="text-lg mb-6 text-gray-600">
                Mantaram Legal Associates LLP is a Patna-based law firm registered under the LLP Act & Rules, with its office located at Virat Complex, Boring Road. Founded and led by Advocate Diwakar and Advocate Shivam Kumar, the firm operates with the guiding principle:
                “यतो धर्मस्ततो जयः” – Where there is Dharma, there is Victory.
              </p>
              <p className="text-lg mb-8 text-gray-600">
                At Mantaram, we are committed to delivering complete legal solutions with integrity, efficiency, and compassion. Our experienced team of Associates and Advocates bring in-depth legal expertise, punctuality, and professionalism to every case. With a strong presence across Bihar, we are supported by a wide network of associated legal professionals—ensuring access to justice even in the remotest parts of the state.
              </p>
              {/* <p className="text-lg mb-8 text-gray-600">
                We are actively building a collaborative legal ecosystem that connects advocates from grassroots district courts to those practicing before Hon’ble High Courts, the Supreme Court, and various tribunals and authorities across India. This wide-reaching network allows us to support our clients not only in Bihar but in other states as well.
              </p> */}
              {/* <p className="text-lg mb-8 text-gray-600">
              At Mantaram Legal Associates LLP, we believe in making justice accessible. We proudly handle pro-bono and low-bono cases to serve the public good, and we ensure fast, fair, and high-quality legal remedies tailored to the needs of each individual.
              </p> */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-amber-500/20 p-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
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
                  </div>
                  <div>
                    <h3 className="font-bold" style={{ color: "#033540" }}>
                      Integrity
                    </h3>
                    <p className="text-sm text-gray-600">We uphold the highest ethical standards</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-amber-500/20 p-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-amber-500"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold" style={{ color: "#033540" }}>
                      Excellence
                    </h3>
                    <p className="text-sm text-gray-600">We strive for exceptional results</p>
                  </div>
                </div>
              </div>
              <Link
                href="/about"
                className="text-white px-4 py-2 rounded-md transition-colors inline-flex items-center"
                style={{ backgroundColor: "#033540" }}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#015366")}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#033540")}
              >
                Learn More About Us
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
                  className="ml-2"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6" style={{ color: "#033540" }}>
              Our Practice Areas
            </h2>
            <p className="text-lg text-gray-600">
              We offer comprehensive legal services across a wide range of practice areas, providing expert guidance and
              representation tailored to your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-amber-500"
                >
                  <path d="M20 7h-7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Z"></path>
                  <path d="M16 3h-7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7"></path>
                  <path d="M12 12h.01"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: "#033540" }}>
                Corporate Law
              </h3>
              <p className="text-gray-600 mb-4">
                Expert guidance for businesses of all sizes, from startups to multinational corporations.
              </p>
              <Link
                href="/services/corporate-law"
                className="inline-flex items-center font-medium hover:text-amber-500"
                style={{ color: "#033540" }}
              >
                Learn More
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
                  className="ml-2"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Link>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-amber-500"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: "#033540" }}>
                Family Law
              </h3>
              <p className="text-gray-600 mb-4">
                Compassionate representation for divorce, child custody, and other family matters.
              </p>
              <Link
                href="/services/family-law"
                className="inline-flex items-center font-medium hover:text-amber-500"
                style={{ color: "#033540" }}
              >
                Learn More
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
                  className="ml-2"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Link>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-amber-500"
                >
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: "#033540" }}>
                Intellectual Property
              </h3>
              <p className="text-gray-600 mb-4">Protection for your innovations, creative works, and brand identity.</p>
              <Link
                href="/services/intellectual-property"
                className="inline-flex items-center font-medium hover:text-amber-500"
                style={{ color: "#033540" }}
              >
                Learn More
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
                  className="ml-2"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Link>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-amber-500"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: "#033540" }}>
                Litigation
              </h3>
              <p className="text-gray-600 mb-4">Aggressive advocacy in court to protect your rights and interests.</p>
              <Link
                href="/services/litigation"
                className="inline-flex items-center font-medium hover:text-amber-500"
                style={{ color: "#033540" }}
              >
                Learn More
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
                  className="ml-2"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="text-white px-4 py-2 rounded-md transition-colors inline-flex items-center"
              style={{ backgroundColor: "#033540" }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#015366")}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#033540")}
            >
              View All Practice Areas
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
                className="ml-2"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 text-white" style={{ backgroundColor: "#033540" }}>
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">What Our Clients Say</h2>
            <p className="text-lg text-white/80">
              We take pride in our client relationships and the results we achieve for them. Here's what some of our
              clients have to say about working with Mantaram Legal.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-serif mb-6">"</div>
              <p className="text-xl italic mb-6">
                Mantaram Legal provided exceptional service during our corporate restructuring. Their attention to
                detail and strategic advice were invaluable.
              </p>
              <div className="font-bold text-lg">Sarah Johnson</div>
              <div className="text-white/70">CEO, TechInnovate Inc.</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-amber-500 text-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">Ready to Discuss Your Legal Needs?</h2>
            <p className="text-lg mb-8">
              Schedule a consultation with one of our experienced attorneys to discuss your case.
            </p>
            <Link
              href="/contact"
              className="text-white px-6 py-3 rounded-md transition-colors"
              style={{ backgroundColor: "#033540" }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#015366")}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#033540")}
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
