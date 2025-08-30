"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Smartphone, Globe, Zap, Code, Users, Linkedin, Mail, Briefcase } from "lucide-react"
import Image from "next/image"

const services = [
  {
    icon: Smartphone,
    title: "App Development",
    description: "Native and cross-platform mobile applications built with cutting-edge technology.",
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Modern, responsive websites and web applications tailored to your business needs.",
  },
  {
    icon: Zap,
    title: "Prompt Engineering",
    description: "AI-powered solutions and intelligent automation to streamline your workflows.",
  },
  {
    icon: Code,
    title: "Python Development",
    description: "Robust backend systems, data analysis, and automation scripts using Python.",
  },
]

// --- Updated Team Data ---
const boardOfDirectors = [
  {
    name: "Mrs. Seema Jadhav",
    role: "Non-executive Director",
    image: "/team/seema.jpg", // Replace with actual image path
    bio: "Providing strategic oversight and guidance for long-term growth.",
    linkedin: "#",
    email: "seema.jadhav@praseonix.com",
  },
  {
    name: "Sumeet Jadhav",
    role: "Executive Director, CEO & CFO",
    image: "/team/sumeet.jpg", // Replace with actual image path
    bio: "Leading the company's vision, strategy, and financial operations.",
    linkedin: "https://www.linkedin.com/in/sumeet-jadhav-783a991ba/",
    email: "sumeet.jadhav@praseonix.com",
  },
]

const teamMembers = [
  {
    name: "Chinmay Deshmukh",
    role: "COO & CTO",
    image: "/team/chinmay.jpg",
    bio: "Overseeing daily operations and technology strategy.",
    linkedin: "https://www.linkedin.com/in/chinmaydeshmukhofficial/",
    email: "chinmay.deshmukh@praseonix.com",
  },
  {
    name: "Shriyash Gavhane",
    role: "CMO",
    image: "/team/shriyash.jpg",
    bio: "Driving marketing strategies and building client relationships.",
    linkedin: "https://www.linkedin.com/in/shriyash-gavhane-676a21303/",
    email: "shriyash.gavhane@praseonix.com",
  },
  {
    name: "Sujal Salunke",
    role: "Project Manager",
    image: "/team/sujal.jpg",
    bio: "Ensuring projects are delivered on time and within scope.",
    linkedin: "https://www.linkedin.com/in/sujal-salunke-54256020a/",
    email: "sujal.salunke@praseonix.com",
  },
  {
    name: "Amar Dighe",
    role: "Senior Developer",
    image: "/team/amar.jpg",
    bio: "Leading development with expertise in robust software architecture.",
    linkedin: "https://www.linkedin.com/in/amar-dighe-b6964a298/",
    email: "amar.dighe@praseonix.com",
  },
  {
    name: "Vitali Shivanand",
    role: "Marketing Manager",
    image: "/team/vitali.jpg",
    bio: "Executing data-driven marketing campaigns that drive engagement.",
    linkedin: "https://www.linkedin.com/in/vitali-shivanand-6b84402b1/",
    email: "vitali.shivanand@praseonix.com",
  },
  {
    name: "Rushikesh Dhale",
    role: "Junior Developer",
    image: "/team/rushi.png",
    bio: "A passionate developer contributing with fresh ideas.",
    linkedin: "https://www.linkedin.com/in/rushikesh-dhale-946b3a240/",
    email: "rushikesh.dhale@praseonix.com",
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const scaleOnHover = {
  whileHover: { scale: 1.05, transition: { duration: 0.2 } },
  whileTap: { scale: 0.98 },
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center" initial="initial" animate="animate" variants={staggerContainer}>
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 text-balance leading-tight"
              variants={fadeInUp}
            >
              Empowering Businesses Through{" "}
              <span className="text-transparent bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text">
                Software Innovation
              </span>
            </motion.h1>

            <motion.p
              className="text-xl text-slate-600 mb-10 max-w-3xl mx-auto text-pretty leading-relaxed"
              variants={fadeInUp}
            >
              We transform your ideas into powerful digital solutions with cutting-edge technology and innovative
              approaches that drive business growth and success.
            </motion.p>

            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center items-center" variants={fadeInUp}>
              <motion.div variants={scaleOnHover} whileHover="whileHover" whileTap="whileTap">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Link href="/services">Explore Our Solutions</Link>
                </Button>
              </motion.div>
              <motion.div variants={scaleOnHover} whileHover="whileHover" whileTap="whileTap">
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300 bg-transparent"
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 to-transparent pointer-events-none" />
      </section>

      {/* Services Preview Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/70 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4" variants={fadeInUp}>
              Our Services
            </motion.h2>
            <motion.p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed" variants={fadeInUp}>
              Comprehensive software solutions designed to meet your unique business requirements and drive digital
              transformation
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <motion.div variants={{ whileHover: { scale: 1.03 } }} whileHover="whileHover" className="h-full">
                  <Card className="bg-white/60 backdrop-blur-lg border border-slate-200/50 rounded-xl h-full group shadow-md hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300">
                    <CardHeader className="text-center items-center pb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-4 ring-4 ring-white/50 group-hover:scale-110 transition-transform duration-300">
                        <service.icon className="w-8 h-8 text-blue-600" />
                      </div>
                      <CardTitle className="text-slate-900 text-xl font-bold">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-slate-600 text-center leading-relaxed">
                        {service.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center mt-12"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <motion.div variants={scaleOnHover} whileHover="whileHover" whileTap="whileTap">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 font-semibold shadow-md hover:shadow-lg transition-all duration-300 bg-transparent"
              >
                <Link href="/services">View All Services</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Board of Directors Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.div className="flex items-center justify-center gap-3 mb-4" variants={fadeInUp}>
              <Briefcase className="w-8 h-8 text-blue-600" />
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Board of Directors</h2>
            </motion.div>
            <motion.p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed" variants={fadeInUp}>
              The strategic leaders guiding the vision and governance of Praseonix Software Solutions Pvt. Ltd.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {boardOfDirectors.map((member, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <motion.div variants={{ whileHover: { scale: 1.03 } }} whileHover="whileHover" className="h-full">
                  <Card className="bg-white/60 backdrop-blur-lg border border-slate-200/50 rounded-xl h-full group overflow-hidden shadow-md hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 text-center">
                    <CardContent className="p-6">
                      <div className="relative w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden ring-4 ring-white group-hover:ring-blue-200 transition-all duration-300">
                        <Image
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <CardTitle className="text-slate-900 text-xl font-bold">{member.name}</CardTitle>
                      <CardDescription className="text-blue-600 font-semibold text-base mb-3">{member.role}</CardDescription>
                      <p className="text-slate-600 leading-relaxed mb-4 text-sm">{member.bio}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/70 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.div className="flex items-center justify-center gap-3 mb-4" variants={fadeInUp}>
              <Users className="w-8 h-8 text-blue-600" />
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Meet Our Team</h2>
            </motion.div>
            <motion.p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed" variants={fadeInUp}>
              The passionate professionals behind Praseonix Software Solutions Pvt. Ltd., dedicated to delivering exceptional software solutions
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {teamMembers.map((member, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <motion.div variants={{ whileHover: { scale: 1.03 } }} whileHover="whileHover" className="h-full">
                  <Card className="bg-white/60 backdrop-blur-lg border border-slate-200/50 rounded-xl h-full group overflow-hidden shadow-md hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 text-center">
                    <CardContent className="p-6">
                      <div className="relative w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden ring-4 ring-white group-hover:ring-blue-200 transition-all duration-300">
                        <Image
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <CardTitle className="text-slate-900 text-xl font-bold">{member.name}</CardTitle>
                      <CardDescription className="text-blue-600 font-semibold text-base mb-3">{member.role}</CardDescription>
                      <p className="text-slate-600 leading-relaxed mb-4 text-sm">{member.bio}</p>
                      <div className="flex justify-center gap-3">
                        <motion.a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-blue-100 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 group/icon"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Linkedin className="w-5 h-5 text-blue-600 group-hover/icon:text-white transition-colors duration-300" />
                        </motion.a>
                        <motion.a
                          href={`mailto:${member.email}`}
                          className="w-10 h-10 bg-slate-100 hover:bg-slate-600 rounded-full flex items-center justify-center transition-all duration-300 group/icon"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Mail className="w-5 h-5 text-slate-600 group-hover/icon:text-white transition-colors duration-300" />
                        </motion.a>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center mt-12"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <motion.div variants={scaleOnHover} whileHover="whileHover" whileTap="whileTap">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 font-semibold shadow-md hover:shadow-lg transition-all duration-300 bg-transparent"
              >
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

