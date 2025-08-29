import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center gap-8">
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/logo.png" // Make sure your logo is in the /public folder
              alt="Praseonix Logo"
              width={180}
              height={50}
              className="object-contain"
            />
          </Link>

          <p className="text-slate-600 text-center text-lg font-medium max-w-md">
            Empowering Businesses Through Software Innovation
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-x-6 gap-y-4 text-slate-700">
            <a href="mailto:praseonixsoftwaresolution@gmail.com" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
              <Mail size={18} className="text-blue-600" />
              <span className="font-medium">praseonixsoftwaresolution@gmail.com</span>
            </a>
            <a href="tel:+918788310843" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
              <Phone size={18} className="text-blue-600" />
              <span className="font-medium">+91 8788310843</span>
            </a>
            <div className="flex items-center gap-2">
              <MapPin size={18} className="text-blue-600" />
              <span className="font-medium">Baramati, Maharashtra, India</span>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-200 w-full text-center">
            <p className="text-slate-500 font-medium">© 2025 Praseonix Software Solutions Pvt. Ltd.® All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
