"use client"

import { motion } from "framer-motion"
import * as Icons from "lucide-react"
import type { ReactNode } from "react"

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  planned?: boolean
}

export default function FeaturesPage() {
  const features = {
    core: [
      {
        icon: <Icons.Navigation2 className="h-6 w-6" />,
        title: "Smart Navigation Assistance",
        description:
          "Provides real-time environmental awareness through object detection and distance feedback to help users navigate safely and independently.",
      },
      {
        icon: <Icons.Camera className="h-6 w-6" />,
        title: "Scene Recognition",
        description:
          "Captures and analyzes visual data to detect obstacles, recognize scenes, and interpret surroundings with helpful contextual cues.",
      },
      {
        icon: <Icons.Headphones className="h-6 w-6" />,
        title: "Audio Feedback",
        description:
          "Delivers spoken alerts and descriptions via headphones or a mobile app to guide the user without relying on visual information.",
      },
    ],
    mobile: [
      {
        icon: <Icons.Mic className="h-6 w-6" />,
        title: "Voice Control",
        description:
          "Allows hands-free interaction with the mobile app through voice commands, making it easier for visually impaired users to operate the system.",
      },
      {
        icon: <Icons.Globe className="h-6 w-6" />,
        title: "Real-Time Translation",
        description:
          "Reads and translates text from signs or labels into the user's preferred language using integrated OCR and translation APIs.",
      },
    ],
    future: [
      {
        icon: <Icons.Users className="h-6 w-6" />,
        title: "Facial Recognition",
        description: "Detects and identifies known individuals to enable personalized interaction and social awareness in shared spaces.",
        planned: true,
      },
      {
        icon: <Icons.FileText className="h-6 w-6" />,
        title: "OCR Text Reading",
        description: "Reads printed text from the environment (e.g., menus, labels, signage) and converts it into speech in real time.",
        planned: true,
      },
      {
        icon: <Icons.Ruler className="h-6 w-6" />,
        title: "Depth Estimation",
        description:
          "Integrates depth sensors or AI models to more accurately estimate the distance to nearby objects and enhance obstacle avoidance.",
        planned: true,
      },
    ],
    technical: [
      {
        icon: <Icons.Cpu className="h-6 w-6" />,
        title: "Embedded AI Processing",
        description: "Runs lightweight machine learning models on embedded hardware, offering autonomy without needing constant internet access.",
      },
      {
        icon: <Icons.Monitor className="h-6 w-6" />,
        title: "Hardware Flexibility",
        description:
          "Supports multiple camera modules (e.g., Raspberry Pi Camera Module v2 or USB webcams) for flexible deployment and testing.",
      },
      {
        icon: <Icons.Cpu className="h-6 w-6" />,
        title: "GPU Acceleration Ready",
        description:
          "Designed with scalability in mind, allowing migration to more powerful GPU-accelerated platforms for enhanced performance.",
      },
    ],
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  }

  const FeatureCard = ({ icon, title, description, planned = false }: FeatureCardProps) => (
    <motion.div
      variants={itemVariants}
      className="bg-white rounded-xl p-6 border border-gray-200 transition-all duration-300 hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/10"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-lg text-white">{icon}</div>
        <div>
          <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-cyan-800">
            {title}
            {planned && <span className="ml-2 text-sm font-normal text-cyan-600">(Planned)</span>}
          </h3>
        </div>
      </div>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  )

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
              Features
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Discover how SmartSight is revolutionizing assistive technology with cutting-edge features and capabilities.
            </p>
          </motion.div>

          <div className="space-y-16 max-w-6xl mx-auto">
            {/* Core Features */}
            <motion.div variants={containerVariants} initial="hidden" animate="visible">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-cyan-800">
                Core Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.core.map((feature, index) => (
                  <FeatureCard key={index} {...feature} />
                ))}
              </div>
            </motion.div>

            {/* Mobile Application Features */}
            <motion.div variants={containerVariants} initial="hidden" animate="visible">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-cyan-800">
                Mobile Application Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {features.mobile.map((feature, index) => (
                  <FeatureCard key={index} {...feature} />
                ))}
              </div>
            </motion.div>

            {/* Future Extensions */}
            <motion.div variants={containerVariants} initial="hidden" animate="visible">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-cyan-800">
                Intelligent Add-ons
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.future.map((feature, index) => (
                  <FeatureCard key={index} {...feature} />
                ))}
              </div>
            </motion.div>

            {/* Technical Highlights */}
            <motion.div variants={containerVariants} initial="hidden" animate="visible">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-cyan-800">
                Technical Highlights
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.technical.map((feature, index) => (
                  <FeatureCard key={index} {...feature} />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
} 