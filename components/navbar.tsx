"use client"

import Link from "next/link"
import Image from "next/image" // Import the Image component
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "backdrop-blur-md bg-slate-50/90 border-b border-slate-200/50 shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            {/* Replaced the div with the Image component */}
            <Image
              src="/slogo.png" // Make sure your logo is in the /public folder
              alt="Praseonix Logo"
              width={36}
              height={36}
              className="transition-transform duration-300 group-hover:scale-110"
            />
            <span className="font-bold text-xl text-slate-800 group-hover:text-blue-600 transition-colors duration-200">
              Praseonix
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-slate-700 hover:text-blue-600 font-medium transition-all duration-200 hover:scale-105"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="text-slate-700 hover:text-blue-600 font-medium transition-all duration-200 hover:scale-105"
            >
              Services
            </Link>
            <Link
              href="/about"
              className="text-slate-700 hover:text-blue-600 font-medium transition-all duration-200 hover:scale-105"
            >
              About Us
            </Link>
            <Button
              asChild
              className="bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105"
            >
              <Link href="/contact">Get In Touch</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-700 hover:text-blue-600 hover:bg-slate-100 rounded-lg transition-all duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-slate-200/50 shadow-lg rounded-b-xl">
            <div className="px-4 py-4 space-y-2">
              <Link
                href="/"
                className="block px-4 py-3 text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-lg font-medium transition-all duration-200"
                onClick={closeMobileMenu}
              >
                Home
              </Link>
              <Link
                href="/services"
                className="block px-4 py-3 text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-lg font-medium transition-all duration-200"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
              <Link
                href="/about"
                className="block px-4 py-3 text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-lg font-medium transition-all duration-200"
                onClick={closeMobileMenu}
              >
                About Us
              </Link>
              <div className="pt-2">
                <Button
                  asChild
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg transition-all duration-200"
                >
                  <Link href="/contact" onClick={closeMobileMenu}>
                    Get In Touch
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
