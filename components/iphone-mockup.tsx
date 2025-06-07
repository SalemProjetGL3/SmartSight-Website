"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const appScreens = ["/app-screen-1.jpg", "/app-screen-2.jpg", "/app-screen-3.jpg", "/app-screen-4.jpg"]

export default function IPhoneMockup() {
  const [currentScreen, setCurrentScreen] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentScreen((prev) => (prev + 1) % appScreens.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      {/* iPhone Frame */}
      <div className="relative w-64 h-[520px] bg-black rounded-[3rem] p-2 shadow-2xl">
        {/* Screen */}
        <div className="relative w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10" />

          {/* App Screenshots */}
          <div className="relative w-full h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentScreen}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Image
                  src={appScreens[currentScreen] || "/placeholder.svg"}
                  alt={`SmartSight App Screen ${currentScreen + 1}`}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Home Indicator */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white rounded-full" />
      </div>

      {/* Screen Indicators */}
      <div className="flex justify-center mt-4 space-x-2">
        {appScreens.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentScreen(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentScreen ? "bg-gradient-to-r from-emerald-500 to-cyan-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </motion.div>
  )
}
