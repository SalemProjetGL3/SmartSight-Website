"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"

export default function PresentationPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="py-24">
        <div className="container px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-cyan-600">
              SmartSight Project Presentation
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Explore our Figma presentation to learn more about the design and development process of SmartSight.
            </p>
          </motion.div>

          <motion.div
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-4 bg-white border-gray-200 shadow-lg flex justify-center">
              <div className="w-full flex justify-center">
                <div className="relative w-full" style={{ paddingBottom: "56.25%", height: 0 }}>
                  <iframe
                    style={{
                      border: "1px solid rgba(0, 0, 0, 0.1)",
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%"
                    }}
                    src="https://embed.figma.com/slides/ILMxjf62DLKVeWBYh3ZidY/Smart-Sight-Presentation?node-id=1-599&embed-host=share"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  )
}