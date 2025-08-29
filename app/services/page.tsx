"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Smartphone, Globe, Zap, Code, CheckCircle } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Smartphone,
    title: "App Development",
    description: "Transform your ideas into powerful mobile applications that engage users and drive business growth.",
    features: [
      "Native iOS and Android development",
      "Cross-platform solutions with React Native",
      "UI/UX design and prototyping",
      "App Store optimization and deployment",
      "Ongoing maintenance and updates",
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Create stunning, responsive websites and web applications that deliver exceptional user experiences.",
    features: [
      "Custom website design and development",
      "E-commerce platform integration",
      "Content Management Systems (CMS)",
      "Progressive Web Applications (PWA)",
      "SEO optimization and performance tuning",
    ],
    technologies: ["React", "Next.js", "Node.js", "TypeScript", "Tailwind CSS"],
  },
  {
    icon: Zap,
    title: "Prompt Engineering",
    description: "Harness the power of AI to automate processes and create intelligent solutions for your business.",
    features: [
      "Custom AI model integration",
      "Chatbot development and deployment",
      "Natural language processing solutions",
      "AI-powered content generation",
      "Machine learning model optimization",
    ],
    technologies: ["OpenAI GPT", "LangChain", "Hugging Face", "TensorFlow", "PyTorch"],
  },
  {
    icon: Code,
    title: "Python Development",
    description:
      "Build robust backend systems, data analysis tools, and automation scripts using Python's versatility.",
    features: [
      "Backend API development",
      "Data analysis and visualization",
      "Web scraping and automation",
      "Database design and optimization",
      "DevOps and deployment solutions",
    ],
    technologies: ["Django", "FastAPI", "Pandas", "NumPy", "PostgreSQL"],
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

export default function ServicesPage() {
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
              Our{" "}
              <span className="text-transparent bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text">Services</span>
            </motion.h1>
            <motion.p
              className="text-xl text-slate-600 max-w-3xl mx-auto text-pretty leading-relaxed"
              variants={fadeInUp}
            >
              Comprehensive software solutions from Praseonix Software Solutions Pvt. Ltd. designed to transform your business and drive innovation.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <motion.div variants={scaleOnHover} whileHover="whileHover" className="h-full">
                  <Card className="bg-white/60 backdrop-blur-lg border border-slate-200/50 rounded-xl h-full group shadow-md hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300">
                    <CardHeader className="pb-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300">
                          <service.icon className="w-7 h-7 text-blue-600" />
                        </div>
                        <CardTitle className="text-slate-900 text-2xl font-bold">{service.title}</CardTitle>
                      </div>
                      <CardDescription className="text-slate-600 text-lg leading-relaxed">
                        {service.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-6">
                      {/* Features */}
                      <div>
                        <h4 className="text-slate-900 font-bold mb-4 text-lg">What We Offer:</h4>
                        <ul className="space-y-3">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                              <span className="text-slate-700 font-medium">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-slate-900 font-bold mb-4 text-lg">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-2 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 text-sm font-medium rounded-full border border-blue-200 hover:from-blue-100 hover:to-blue-200 transition-all duration-200"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/70 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer}>
            <motion.h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6" variants={fadeInUp}>
              Ready to Transform Your Business?
            </motion.h2>
            <motion.p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed" variants={fadeInUp}>
              Let's discuss how our expertise can help you achieve your goals and drive innovation in your industry with
              tailored solutions.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <motion.div variants={scaleOnHover} whileHover="whileHover" whileTap="whileTap">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Link href="/contact">Start Your Project</Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

