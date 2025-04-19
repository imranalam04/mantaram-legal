import Image from "next/image"
import Link from "next/link"

export default function VisionValuesPage() {
  const values = [
    {
      title: "Integrity",
      description:
        "We uphold the highest ethical standards in all our dealings, ensuring transparency and honesty in every interaction.",
      icon: (
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
          <path d="M8 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h3a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Z"></path>
          <path d="M19 3h-3a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h3a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Z"></path>
          <path d="M12 12h.01"></path>
        </svg>
      ),
    },
    {
      title: "Excellence",
      description:
        "We are committed to delivering exceptional legal services, constantly striving to exceed client expectations and achieve the best possible outcomes.",
      icon: (
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
      ),
    },
    {
      title: "Client Focus",
      description:
        "We prioritize our clients' needs, providing personalized attention and tailored solutions to achieve their goals and protect their interests.",
      icon: (
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
          <circle cx="12" cy="8" r="7"></circle>
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
        </svg>
      ),
    },
    {
      title: "Innovation",
      description:
        "We embrace creative thinking and innovative approaches to legal challenges, leveraging technology and new methodologies to deliver efficient and effective solutions.",
      icon: (
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
          <path d="M12 2v8"></path>
          <path d="m4.93 10.93 1.41 1.41"></path>
          <path d="M2 18h2"></path>
          <path d="M20 18h2"></path>
          <path d="m19.07 10.93-1.41 1.41"></path>
          <path d="M22 22H2"></path>
          <path d="m16 6-4 4-4-4"></path>
          <path d="M16 18a4 4 0 0 0-8 0"></path>
        </svg>
      ),
    },
    {
      title: "Collaboration",
      description:
        "We believe in the power of teamwork, fostering a collaborative environment where diverse perspectives and expertise combine to create superior results.",
      icon: (
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
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
    },
    {
      title: "Diversity & Inclusion",
      description:
        "We value and promote diversity in all its forms, creating an inclusive environment where everyone is respected, heard, and empowered to contribute their unique talents.",
      icon: (
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
      ),
    },
  ]

  return (
    <div className="flex flex-col w-full pt-20" style={{ backgroundColor: "#033540" }}>
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-100">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6" style={{ color: "#033540" }}>
              Vision & Values
            </h1>
            <p className="text-lg mb-6 text-gray-600">
              The principles that guide our practice and define our commitment to our clients and the legal profession.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-amber-500/20 rounded-lg"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-amber-500/20 rounded-lg"></div>
              <div className="relative rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1661502686791-fd813ae4fbd7?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Vision"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{ color: "#fff" }}>
                Our Vision
              </h2>
              <p className="text-lg mb-6 text-gray-100">
                At Mantaram Legal, our vision is to be a leading law firm recognized for excellence, integrity, and
                innovation in legal services. We aspire to:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="rounded-full bg-amber-500/20 p-2 mt-1">
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
                      className="text-amber-500"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p className="text-gray-100">
                    <strong style={{ color: "#fff" }}>Set the standard for legal excellence</strong> by delivering
                    exceptional results and innovative solutions to complex legal challenges.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="rounded-full bg-amber-500/20 p-2 mt-1">
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
                      className="text-amber-500"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p className="text-gray-100">
                    <strong style={{ color: "#fff" }}>Build enduring client relationships</strong> based on trust,
                    responsiveness, and a deep understanding of our clients' needs and objectives.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="rounded-full bg-amber-500/20 p-2 mt-1">
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
                      className="text-amber-500"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p className="text-gray-100">
                    <strong style={{ color: "#fff" }}>Foster a diverse and inclusive workplace</strong> where
                    talented professionals can thrive and contribute to our collective success.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="rounded-full bg-amber-500/20 p-2 mt-1">
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
                      className="text-amber-500"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p className="text-gray-100">
                    <strong style={{ color: "#fff" }}>Make a positive impact in our community</strong> through pro
                    bono service, civic engagement, and environmental responsibility.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-100">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6" style={{ color: "#033540" }}>
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600">
              These fundamental principles guide our actions, decisions, and interactions, shaping our firm culture and
              defining who we are as legal professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-2" style={{ color: "#033540" }}>
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6" style={{ color: "#fff" }}>
              Our Mission
            </h2>
            <div className="text-lg text-gray-100 space-y-4">
              <p>
                Our mission at Mantaram Legal is to provide exceptional legal representation and counsel to our clients,
                helping them navigate complex legal challenges and achieve their objectives.
              </p>
              <p>
                We are committed to understanding each client's unique needs and delivering tailored solutions that
                combine legal expertise, strategic thinking, and practical wisdom.
              </p>
              <p>
                Through our work, we aim to uphold the highest standards of the legal profession, contribute positively
                to our community, and create an environment where our team members can grow and excel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ backgroundColor: "white" }}>
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center text-black">
            <h2 className="text-3xl font-bold mb-6">Experience Our Values in Action</h2>
            <p className="text-lg mb-8 text-gray-800">
              We invite you to experience firsthand how our vision and values translate into exceptional legal service.
              Contact us to discuss your legal needs and discover the Mantaram Legal difference.
            </p>
            <Link
              href="/contact"
              className="bg-amber-500 text-white px-6 py-3 rounded-md hover:bg-amber-400 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
