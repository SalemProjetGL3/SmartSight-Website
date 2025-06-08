"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Camera, Brain, Headphones, Eye, Shield, Users, Award, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import ParticleBackground from "@/components/particle-background"
import IPhoneMockup from "@/components/iphone-mockup"

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  // Smooth spring animations
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  // Hero section animations
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.8])
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -100])

  // Parallax effects
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const floatingY = useTransform(scrollYProgress, [0, 1], [0, -200])

  // Section reveal animations
  const section1Y = useTransform(scrollYProgress, [0.1, 0.4], [100, 0])
  const section1Opacity = useTransform(scrollYProgress, [0.1, 0.4], [0, 1])

  const section2Y = useTransform(scrollYProgress, [0.3, 0.6], [100, 0])
  const section2Opacity = useTransform(scrollYProgress, [0.3, 0.6], [0, 1])

  const section3Y = useTransform(scrollYProgress, [0.5, 0.8], [100, 0])
  const section3Opacity = useTransform(scrollYProgress, [0.5, 0.8], [0, 1])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
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

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  return (
    <div ref={containerRef} className="relative overflow-hidden">
      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 z-50 origin-left"
        style={{ scaleX: smoothProgress }}
      />

      {/* Floating Background Elements */}
      <motion.div className="fixed inset-0 pointer-events-none z-0" style={{ y: backgroundY }}>
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-emerald-200/20 to-cyan-200/20 rounded-full blur-xl" />
        <div className="absolute top-40 right-20 w-48 h-48 bg-gradient-to-br from-cyan-200/20 to-emerald-200/20 rounded-full blur-xl" />
        <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-gradient-to-br from-emerald-300/30 to-cyan-300/30 rounded-full blur-lg" />
      </motion.div>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <ParticleBackground />
        <motion.div
          className="container relative z-10 flex flex-col items-center text-center px-4"
          style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <Image src="/logo-s.png" alt="SmartSight Logo" width={450} height={450} className="mb-8" priority />
          </motion.div>

          <motion.p className="text-xl md:text-2xl text-gray-700 max-w-3xl mb-8" variants={itemVariants}>
            AI-powered wearable technology that transforms visual information into audio guidance for the visually
            impaired.
          </motion.p>

          <motion.div className="flex flex-col sm:flex-row gap-4" variants={itemVariants}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/report">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 shadow-lg hover:shadow-xl transition-all duration-300 text-white"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/demo">
                <Button
                  size="lg"
                  className="bg-white text-gray-900 border border-gray-300 hover:bg-gray-50 hover:border-cyan-500 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Watch Demo
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Floating Icons */}
        <motion.div
          className="absolute top-1/4 left-10 hidden lg:block"
          variants={floatingVariants}
          animate="animate"
          style={{ y: floatingY }}
        >
          <div className="p-4 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <Eye className="h-8 w-8 text-emerald-500" />
          </div>
        </motion.div>

        <motion.div
          className="absolute top-1/3 right-16 hidden lg:block"
          variants={floatingVariants}
          animate="animate"
          style={{ y: floatingY, animationDelay: "1s" }}
        >
          <div className="p-4 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <Brain className="h-8 w-8 text-cyan-500" />
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
        >
          <ArrowRight className="h-8 w-8 rotate-90 text-gray-600" />
        </motion.div>
      </section>

      {/* Stats Section */}
      <motion.section
        className="py-16 bg-gradient-to-r from-emerald-50 to-cyan-50"
        style={{ y: section1Y, opacity: section1Opacity }}
      >
        <div className="container px-4">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { number: "98%", label: "Accuracy Rate", icon: <Award className="h-6 w-6" /> },
              { number: "50K+", label: "Users Helped", icon: <Users className="h-6 w-6" /> },
              { number: "24/7", label: "Support", icon: <Shield className="h-6 w-6" /> },
              { number: "15+", label: "Countries", icon: <Globe className="h-6 w-6" /> },
            ].map((stat, index) => (
              <motion.div key={index} className="text-center" variants={itemVariants} whileHover={{ scale: 1.05 }}>
                <motion.div
                  className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full mb-4 text-white"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {stat.icon}
                </motion.div>
                <motion.div
                  className="text-3xl font-bold text-gray-900 mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 100, delay: index * 0.1 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* How It Works Section */}
      <motion.section
        className="py-24 bg-white relative overflow-hidden"
        style={{ y: section2Y, opacity: section2Opacity }}
      >
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-cyan-50/50" />

        <div className="container px-4 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-cyan-600"
              initial={{ scale: 0.5 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              How It Works
            </motion.h2>
            <motion.p
              className="text-xl text-gray-700 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              SmartSight uses advanced AI to interpret the world around you and provide real-time audio feedback.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Camera className="h-12 w-12" />,
                title: "Visual Capture",
                description: "High-definition cameras capture the environment in real-time with wide-angle coverage.",
                color: "from-emerald-500 to-emerald-600",
              },
              {
                icon: <Brain className="h-12 w-12" />,
                title: "AI Processing",
                description:
                  "Our neural network identifies objects, people, text, and obstacles with remarkable accuracy.",
                color: "from-cyan-500 to-cyan-600",
              },
              {
                icon: <Headphones className="h-12 w-12" />,
                title: "Audio Feedback",
                description: "Clear, concise audio descriptions are delivered through bone-conduction technology.",
                color: "from-emerald-500 to-cyan-500",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateY: -30 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{
                  y: -10,
                  rotateY: 5,
                  transition: { duration: 0.3 },
                }}
              >
                <Card className="p-6 h-full bg-white border-gray-200 hover:border-cyan-50/50 transition-all duration-500 shadow-lg hover:shadow-2xl relative">
                  <motion.div
                    className={`rounded-full bg-gradient-to-r ${item.color} p-4 w-fit mx-auto mb-6 text-white`}
                    whileHover={{
                      scale: 1.1,
                      rotate: [0, -10, 10, 0],
                      transition: { duration: 0.5 },
                    }}
                  >
                    {item.icon}
                  </motion.div>
                  <motion.h3
                    className="text-xl font-bold mb-3 text-center text-gray-900"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.2 + 0.3 }}
                  >
                    {item.title}
                  </motion.h3>
                  <motion.p
                    className="text-gray-700 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.2 + 0.5 }}
                  >
                    {item.description}
                  </motion.p>

                  {/* Step number */}
                  <motion.div
                    className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.2 + 0.7, type: "spring", stiffness: 200 }}
                  >
                    {index + 1}
                  </motion.div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Connection lines */}
          <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl">
            <motion.svg
              className="w-full h-24"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 1 }}
            >
              <motion.path
                d="M 100 50 Q 300 20 500 50 Q 700 80 900 50"
                stroke="url(#gradient)"
                strokeWidth="2"
                fill="none"
                strokeDasharray="5,5"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#10b981" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
              </defs>
            </motion.svg>
          </div>
        </div>
      </motion.section>

      {/* Mobile App Demo Section */}
      <motion.section className="py-24 bg-gray-100 relative" style={{ y: section3Y, opacity: section3Opacity }}>
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-cyan-600">
                Control Everything from Your Phone
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                The SmartSight mobile app gives you complete control over your device settings, voice preferences, and
                connection management.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3" />
                  <span className="text-gray-700">Connect and manage multiple devices</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3" />
                  <span className="text-gray-700">Customize voice and feedback settings</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3" />
                  <span className="text-gray-700">Real-time device status monitoring</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <IPhoneMockup />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Call to Action Section */}
      <motion.section
        className="py-24 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        {/* Animated background elements */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
        />

        <div className="container px-4 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 className="text-3xl md:text-5xl font-bold mb-6" variants={itemVariants}>
              Ready to Transform Your World?
            </motion.h2>
            <motion.p className="text-xl mb-8 opacity-90" variants={itemVariants}>
              Join thousands of users who have already discovered the freedom that SmartSight provides.
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={itemVariants}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}
