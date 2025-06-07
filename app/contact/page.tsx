"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Phone, Mail, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    requestType: "general",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <motion.div
          className="text-center max-w-md"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <Send className="h-8 w-8 text-white" />
          </motion.div>
          <h1 className="text-3xl font-bold mb-4">Thank You!</h1>
          <p className="text-gray-600 mb-6">
            Your request has been submitted successfully. Our team will get back to you within 24 hours.
          </p>
          <Button
            onClick={() => {
              setIsSubmitted(false)
              setFormData({
                name: "",
                email: "",
                phone: "",
                subject: "",
                message: "",
                requestType: "general",
              })
            }}
            className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600"
          >
            Send Another Request
          </Button>
        </motion.div>
      </div>
    )
  }

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
            <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-cyan-800">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Ready to experience SmartSight? Send us a request and our team will help you get started.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <motion.div className="lg:col-span-1" variants={containerVariants} initial="hidden" animate="visible">
              <h2 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-cyan-800">Contact Information</h2>

              <div className="space-y-6">
                <motion.div className="flex items-start" variants={itemVariants}>
                  <div className="p-3 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-lg text-white mr-4">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-cyan-800">Phone</h3>
                    <p className="text-gray-600">+1 (415) 555-0123</p>
                  </div>
                </motion.div>

                <motion.div className="flex items-start" variants={itemVariants}>
                  <div className="p-3 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-lg text-white mr-4">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-cyan-800">Email</h3>
                    <p className="text-gray-600">info@smartsight.tech</p>
                  </div>
                </motion.div>

                <motion.div className="flex items-start" variants={itemVariants}>
                  <div className="p-3 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-lg text-white mr-4">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-cyan-800">Address</h3>
                    <p className="text-gray-600">
                      123 Innovation Drive
                      <br />
                      San Francisco, CA 94107
                    </p>
                  </div>
                </motion.div>

                <motion.div className="flex items-start" variants={itemVariants}>
                  <div className="p-3 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-lg text-white mr-4">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-cyan-800">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM PST
                      <br />
                      Saturday: 10:00 AM - 4:00 PM PST
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="p-8 bg-white border-gray-200 shadow-lg">
                <h2 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-cyan-800">Send us a Request</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-gray-700">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="mt-1 bg-white border-gray-200 focus:border-cyan-500 focus:ring-cyan-500"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-gray-700">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="mt-1 bg-white border-gray-200 focus:border-cyan-500 focus:ring-cyan-500"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="phone" className="text-gray-700">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="mt-1 bg-white border-gray-200 focus:border-cyan-500 focus:ring-cyan-500"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div>
                      <Label htmlFor="requestType" className="text-gray-700">Request Type *</Label>
                      <select
                        id="requestType"
                        name="requestType"
                        required
                        value={formData.requestType}
                        onChange={handleInputChange}
                        className="mt-1 w-full px-3 py-2 bg-white border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                      >
                        <option value="general">General Inquiry</option>
                        <option value="demo">Request Demo</option>
                        <option value="purchase">Purchase Information</option>
                        <option value="support">Technical Support</option>
                        <option value="partnership">Partnership</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject" className="text-gray-700">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="mt-1 bg-white border-gray-200 focus:border-cyan-500 focus:ring-cyan-500"
                      placeholder="Enter subject"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-gray-700">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      className="mt-1 bg-white border-gray-200 focus:border-cyan-500 focus:ring-cyan-500"
                      placeholder="Enter your message"
                      rows={6}
                    />
                  </div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 shadow-lg hover:shadow-xl transition-all duration-300"
                      size="lg"
                    >
                      {isSubmitting ? (
                        <motion.div className="flex items-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                          Sending...
                        </motion.div>
                      ) : (
                        <>
                          Send Request <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </motion.div>
                </form>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
