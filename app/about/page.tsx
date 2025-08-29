"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Target, Users, Lightbulb, Award, Linkedin, Mail, Briefcase } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// --- Synced Team Data ---
const boardOfDirectors = [
  {
    name: "Mrs. Seema Jadhav",
    role: "Non-executive Director",
    image: "/team/seema.jpg",
    bio: "Providing strategic oversight and guidance for long-term growth.",
    linkedin: "#",
    email: "seema.jadhav@praseonix.com",
  },
  {
    name: "Sumeet Jadhav",
    role: "Executive Director, CEO & CFO",
    image: "/team/sumeet.jpg",
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


const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description:
      "We're committed to empowering businesses through innovative software solutions that drive real results.",
  },
  {
    icon: Users,
    title: "Client-Focused",
    description: "Your success is our priority. We work closely with you to understand and exceed your expectations.",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description:
      "We stay ahead of technology trends to deliver cutting-edge solutions that give you a competitive edge.",
  },
  {
    icon: Award,
    title: "Quality Excellence",
    description:
      "We maintain the highest standards in every project, ensuring robust, scalable, and maintainable solutions.",
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
      staggerChildren: 0.15,
    },
  },
}

const scaleOnHover = {
  whileHover: { scale: 1.05, transition: { duration: 0.2 } },
  whileTap: { scale: 0.98 },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 pt-20">
      {/* Header Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" initial="initial" animate="animate" variants={staggerContainer}>
            <motion.h1
              className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6 text-balance leading-tight"
              variants={fadeInUp}
            >
              About{" "}
              <span className="text-transparent bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text">
                Praseonix
              </span>
            </motion.h1>
            <motion.p
              className="text-xl text-slate-600 max-w-3xl mx-auto text-pretty leading-relaxed"
              variants={fadeInUp}
            >
              We are a passionate team of software innovators dedicated to transforming businesses through cutting-edge
              technology solutions
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/70 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div className="text-center mb-16" variants={fadeInUp}>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8">Our Mission</h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  At Praseonix Software Solutions Pvt. Ltd., our mission is to empower businesses of all sizes by delivering
                  innovative, scalable, and user-centric software solutions. We believe that technology should be an
                  enabler, not a barrier, and we're committed to making cutting-edge software accessible and impactful
                  for every client we serve.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  We strive to build long-lasting partnerships with our clients, understanding their unique challenges
                  and crafting tailored solutions that drive growth, efficiency, and success in an increasingly digital
                  world.
                </p>
              </div>
            </motion.div>

            {/* Values Grid */}
            <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" variants={staggerContainer}>
              {values.map((value, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <motion.div variants={scaleOnHover} whileHover="whileHover" className="h-full">
                    <Card className="bg-white/90 backdrop-blur-sm border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 h-full text-center group">
                      <CardHeader className="pb-4">
                        <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300">
                          <value.icon className="w-7 h-7 text-blue-600" />
                        </div>
                        <CardTitle className="text-slate-900 text-lg font-bold">{value.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-slate-600 leading-relaxed">
                          {value.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              ))}
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
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer}>
            <motion.h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6" variants={fadeInUp}>
              Ready to Work Together?
            </motion.h2>
            <motion.p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed" variants={fadeInUp}>
              We'd love to learn about your project and discuss how we can help bring your vision to life with our
              expertise and dedication.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <motion.div variants={scaleOnHover} whileHover="whileHover" whileTap="whileTap">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Link href="/contact">Get In Touch</Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
