import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image src="/logo.png" alt="SmartSight Logo" width={150} height={50} className="h-10 w-auto" />
            </Link>
            <p className="text-gray-600 max-w-xs">
              Transforming visual information into audio guidance for the visually impaired through AI technology.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/demo" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Demo
                </Link>
              </li>
              <li>
                <Link href="/features" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Features
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/presentation" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Presentation
                </Link>
              </li>
              <li>
                <Link href="/report" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Documentation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-600">
              <li>SmartSight Technologies</li>
              <li>National School of Applied Sciences and Technology</li>
              <li>Tunis, Tunisia</li>
              <li className="pt-2">
                <a href="mailto:info@smartsight.tech" className="text-cyan-400 hover:underline">
                  info@smartsight.tech
                </a>
              </li>
              <li>
                <a href="tel:+216 50 244 122" className="text-cyan-400 hover:underline">
                  +216 50 244 122
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} SmartSight Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
