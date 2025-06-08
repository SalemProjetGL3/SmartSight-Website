"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Github, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Adem Jerbi",
      role: "Software Engineering Student",
      bio: "Passionate about software development and artificial intelligence. Contributing to the development of SmartSight's core features.",
      image: "/ademjerbi.jpg",
    },
    {
      name: "Issra Brini",
      role: "Software Engineering Student",
      bio: "Focused on user experience and interface design. Working on making SmartSight more accessible and user-friendly.",
      image: "/issrabrini.jpg",
    },
    {
      name: "Mahdi Kacem",
      role: "Software Engineering Student",
      bio: "Specializing in backend development and system architecture. Ensuring SmartSight's robust performance.",
      image: "/mahdikacem.jpg",
    },
    {
      name: "Salma Sghaier",
      role: "Software Engineering Student",
      bio: "Expert in data processing and analysis. Enhancing SmartSight's AI capabilities.",
      image: "/salmasghaier.jpg",
    },
    {
      name: "Youssef Abid",
      role: "Software Engineering Student",
      bio: "Focused on system integration and testing. Ensuring quality and reliability of SmartSight.",
      image: "/youssefabid.png",
    },
  ]

  const supervisor = {
    name: "Hajer Taktak",
    role: "Project Supervisor",
    bio: "Guiding and mentoring the SmartSight team in their development journey. Providing expertise and oversight to ensure project success.",
    image: "/mme-hajer.jpg",
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
            <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-cyan-600">
              About SmartSight
            </h1>
            <div className="text-xl text-gray-700 max-w-4xl mx-auto space-y-6">
              <p>
                SmartSight is a project developed by first-year software engineering students at INSAT as part of our academic journey in 2024. Motivated by the desire to build meaningful technology, we set out to create a wearable system that assists visually impaired individuals through smart, real-time guidance. Our solution combines object detection using YOLO, depth estimation with MiDaS, and a rule-based system that delivers audio feedback to help users navigate safely and independently.
              </p>
            </div>
          </motion.div>

          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-cyan-800">Meet Our Team</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {teamMembers.slice(0, 3).map((member, index) => (
              <motion.div
                key={index}
                className="group w-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 transition-all duration-300 group-hover:border-cyan-500/30 group-hover:shadow-lg group-hover:shadow-cyan-500/10">
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                      <div className="flex gap-4">
                        <Button
                          size="icon"
                          variant="ghost"
                          className="rounded-full bg-gray-100/80 backdrop-blur-sm hover:bg-gray-200/80"
                        >
                          <Linkedin className="h-4 w-4 text-gray-700" />
                          <span className="sr-only">LinkedIn profile</span>
                        </Button>
                        <Button
                          size="icon"
                          variant="ghost"
                          className="rounded-full bg-gray-100/80 backdrop-blur-sm hover:bg-gray-200/80"
                        >
                          <Github className="h-4 w-4 text-gray-700" />
                          <span className="sr-only">GitHub profile</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-cyan-800">{member.name}</h3>
                    <p className="text-cyan-600 mb-3">{member.role}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </div>
              </motion.div>
            ))}
            <div className="lg:col-span-3 flex justify-center gap-8">
              {teamMembers.slice(3).map((member, index) => (
                <motion.div
                  key={index + 3}
                  className="group w-full max-w-md"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: (index + 3) * 0.1 }}
                >
                  <div className="bg-white rounded-xl overflow-hidden border border-gray-200 transition-all duration-300 group-hover:border-cyan-500/30 group-hover:shadow-lg group-hover:shadow-cyan-500/10">
                    <div className="relative h-80 overflow-hidden">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                        <div className="flex gap-4">
                          <Button
                            size="icon"
                            variant="ghost"
                            className="rounded-full bg-gray-100/80 backdrop-blur-sm hover:bg-gray-200/80"
                          >
                            <Linkedin className="h-4 w-4 text-gray-700" />
                            <span className="sr-only">LinkedIn profile</span>
                          </Button>
                          <Button
                            size="icon"
                            variant="ghost"
                            className="rounded-full bg-gray-100/80 backdrop-blur-sm hover:bg-gray-200/80"
                          >
                            <Github className="h-4 w-4 text-gray-700" />
                            <span className="sr-only">GitHub profile</span>
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-cyan-800">{member.name}</h3>
                      <p className="text-cyan-600 mb-3">{member.role}</p>
                      <p className="text-gray-600">{member.bio}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Group Photo Section */}
          <motion.div 
            className="my-24 max-w-6xl mx-auto relative rounded-2xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative h-[600px] w-full">
              <Image
                src="/groupphoto.jpg"
                alt="SmartSight Team"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-2xl font-bold mb-2">SmartSight Team 2024</h3>
                <p className="text-white/80">Working together to make a difference in assistive technology</p>
              </div>
            </div>
          </motion.div>

          <h2 className="text-2xl md:text-3xl font-bold my-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-cyan-800">Our Supervisor</h2>

          <div className="max-w-2xl mx-auto">
            <motion.div
              className="group w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-xl overflow-hidden border border-gray-200 transition-all duration-300 group-hover:border-cyan-500/30 group-hover:shadow-lg group-hover:shadow-cyan-500/10">
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={supervisor.image}
                    alt={supervisor.name}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-cyan-800">{supervisor.name}</h3>
                  <p className="text-cyan-600 mb-3">{supervisor.role}</p>
                  <p className="text-gray-600">{supervisor.bio}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
