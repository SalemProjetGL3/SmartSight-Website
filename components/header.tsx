"use client"

import { useState, useEffect, useCallback, useMemo } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useMobile } from "@/hooks/use-mobile"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isMobile = useMobile()

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 10)
  }, [])

  useEffect(() => {
    let timeoutId: NodeJS.Timeout
    const debouncedScroll = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(handleScroll, 100)
    }

    window.addEventListener("scroll", debouncedScroll)
    return () => {
      window.removeEventListener("scroll", debouncedScroll)
      clearTimeout(timeoutId)
    }
  }, [handleScroll])

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev)
  }, [])

  const navItems = useMemo(() => [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Demo", href: "/demo" },
    { name: "Presentation", href: "/presentation" },
    { name: "Features", href: "/features" },
  ], [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/80 backdrop-blur-md border-b border-gray-200" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center">
            <Image 
              src="/logo.png" 
              alt="SmartSight Logo" 
              width={180} 
              height={60} 
              className="h-12 w-auto object-contain" 
              style={{ backgroundColor: 'transparent' }}
              priority
              sizes="(max-width: 768px) 120px, 180px"
              loading="eager"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-gray-900 hover:underline underline-offset-4 transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Link href="/report">
              <Button className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white">
                Go to Report
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden text-gray-900" onClick={toggleMenu}>
            <Menu className="h-6 w-6" />
            <span className="sr-only">Open menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && isMobile && (
          <motion.div
            className="fixed inset-0 z-50 bg-white flex flex-col"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="flex items-center justify-between h-16 md:h-20 px-4 border-b border-gray-200">
              <Link href="/" className="flex items-center">
                <Image 
                  src="/logo.png" 
                  alt="SmartSight Logo" 
                  width={180} 
                  height={60} 
                  className="h-12 w-auto object-contain" 
                  style={{ backgroundColor: 'transparent' }}
                  priority
                  sizes="(max-width: 768px) 120px, 180px"
                  loading="eager"
                />
              </Link>
              <Button variant="ghost" size="icon" className="text-gray-900" onClick={toggleMenu}>
                <X className="h-6 w-6" />
                <span className="sr-only">Close menu</span>
              </Button>
            </div>
            <nav className="flex flex-col p-4 space-y-4">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="block py-3 text-lg font-medium text-gray-700 hover:text-gray-900 border-b border-gray-200"
                    onClick={toggleMenu}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
                className="pt-4"
              >
                <Button className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600">
                  Get Started
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
