"use client"

import { motion } from "framer-motion"

export default function ReportPage() {
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
              Project Report
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Detailed documentation of our journey in developing SmartSight, including methodology, implementation, and results.
            </p>
          </motion.div>

          <motion.div
            className="max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-2xl bg-white p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="aspect-[16/9] w-full">
              <iframe 
                allowFullScreen 
                scrolling="no" 
                className="fp-iframe w-full h-full rounded-xl"
                src="https://heyzine.com/flip-book/e1195ddfb7.html" 
                style={{ border: "1px solid lightgray" }}
              />
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-600">
                Use the controls in the viewer to navigate through the report. Click the fullscreen button for a better reading experience.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 