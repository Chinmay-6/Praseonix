"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Mail, Phone, Clock, Send, CheckCircle, AlertCircle } from "lucide-react"
import { useState } from "react"

const contactInfo = [
  {
    icon: MapPin,
    title: "Location",
    details: "Baramati, Maharashtra, India",
    description: "Our headquarters in the heart of Maharashtra",
  },
  {
    icon: Mail,
    title: "Email",
    details: "praseonixsoftwaresolution@gmail.com",
    description: "Send us an email anytime",
  },
  {
    icon: Phone,
    title: "Phone",
    details: "+91 8788310843",
    description: "Call us during business hours",
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: "Mon - Fri: 9:00 AM - 6:00 PM",
    description: "Indian Standard Time (IST)",
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
  whileHover: { scale: 1.02, transition: { duration: 0.2 } },
  whileTap: { scale: 0.98 },
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [submitMessage, setSubmitMessage] = useState("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setSubmitMessage("Thank you for your message! We'll get back to you within 24 hours.")
        setFormData({ name: "", email: "", company: "", message: "" })
      } else {
        throw new Error("Failed to send message")
      }
    } catch (error) {
      setSubmitStatus("error")
      setSubmitMessage("Sorry, there was an error sending your message. Please try again or contact us directly.")
    } finally {
      setIsSubmitting(false)
    }
  }

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
              Contact{" "}
              <span className="text-transparent bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text">Us</span>
            </motion.h1>
            <motion.p
              className="text-xl text-slate-600 max-w-3xl mx-auto text-pretty leading-relaxed"
              variants={fadeInUp}
            >
              Ready to start your next project? Get in touch with us and let's discuss how we can help bring your vision
              to life with innovative solutions.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div className="mb-8" variants={fadeInUp}>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Get In Touch</h2>
                <p className="text-slate-600 leading-relaxed">
                  We'd love to hear from you. Whether you have a project in mind, need technical consultation, or just
                  want to say hello, don't hesitate to reach out to our team.
                </p>
              </motion.div>

              <motion.div className="space-y-6" variants={staggerContainer}>
                {contactInfo.map((info, index) => (
                  <motion.div key={index} variants={fadeInUp}>
                    <motion.div variants={scaleOnHover} whileHover="whileHover">
                      <Card className="bg-white/90 backdrop-blur-sm border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 group">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300">
                              <info.icon className="w-7 h-7 text-blue-600" />
                            </div>
                            <div>
                              <h3 className="text-slate-900 font-bold mb-1 text-lg">{info.title}</h3>
                              <p className="text-blue-600 font-semibold mb-1">{info.details}</p>
                              <p className="text-slate-600 text-sm">{info.description}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              <Card className="bg-white/90 backdrop-blur-sm border border-slate-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-slate-900 text-2xl font-bold">Send Us a Message</CardTitle>
                  <CardDescription className="text-slate-600">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {submitStatus !== "idle" && (
                    <div
                      className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
                        submitStatus === "success"
                          ? "bg-green-50 border border-green-200 text-green-700"
                          : "bg-red-50 border border-red-200 text-red-700"
                      }`}
                    >
                      {submitStatus === "success" ? (
                        <CheckCircle className="w-5 h-5 flex-shrink-0" />
                      ) : (
                        <AlertCircle className="w-5 h-5 flex-shrink-0" />
                      )}
                      <p className="text-sm font-medium">{submitMessage}</p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-slate-900 font-medium">
                          Name *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          disabled={isSubmitting}
                          className="bg-white border-slate-300 text-slate-900 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:bg-slate-50"
                          placeholder="Your full name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-slate-900 font-medium">
                          Email *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          disabled={isSubmitting}
                          className="bg-white border-slate-300 text-slate-900 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:bg-slate-50"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-slate-900 font-medium">
                        Company
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                        className="bg-white border-slate-300 text-slate-900 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:bg-slate-50"
                        placeholder="Your company name (optional)"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-slate-900 font-medium">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        disabled={isSubmitting}
                        rows={6}
                        className="bg-white border-slate-300 text-slate-900 focus:border-blue-500 focus:ring-blue-500 resize-none disabled:opacity-50 disabled:bg-slate-50"
                        placeholder="Tell us about your project, requirements, or any questions you have..."
                      />
                    </div>

                    <motion.div variants={scaleOnHover} whileHover="whileHover" whileTap="whileTap">
                      <Button
                        type="submit"
                        size="lg"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 mr-2 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/70 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer}>
            <motion.h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6" variants={fadeInUp}>
              Let's Build Something Amazing Together
            </motion.h2>
            <motion.p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed" variants={fadeInUp}>
              From initial concept to final deployment, we're here to guide you through every step of your software
              development journey with expertise and dedication.
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={fadeInUp}>
              <motion.div variants={scaleOnHover} whileHover="whileHover" whileTap="whileTap">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <a href="mailto:praseonixsoftwaresolution@gmail.com">Email Us Directly</a>
                </Button>
              </motion.div>
              <motion.div variants={scaleOnHover} whileHover="whileHover" whileTap="whileTap">
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 font-semibold shadow-md hover:shadow-lg transition-all duration-300 bg-transparent"
                >
                  <a href="tel:+918788310843">Call Us Now</a>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
