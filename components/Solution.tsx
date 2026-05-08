"use client";

import { motion } from "framer-motion";
import { BookOpen, Video, Users, FileText } from "lucide-react";

const features = [
  {
    icon: Video,
    title: "24 Video Lessons",
    description: "Deep teaching on hearing, confirming, and walking in your calling"
  },
  {
    icon: FileText,
    title: "Downloadable Workbooks",
    description: "Exercises and frameworks to apply what you're learning"
  },
  {
    icon: Users,
    title: "Private Community",
    description: "Connect with others on the same journey"
  },
  {
    icon: BookOpen,
    title: "Based on the Book",
    description: "Expanded teaching from 'Called by Name' by Reyes Castillo"
  }
];

export default function Solution() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            What If Clarity Was Closer Than You Think?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I wrote "Called by Name" because I was you. This course is the process that 
            finally worked—the path from confusion to clarity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-7 h-7 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-br from-red-600 to-red-700 rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-4">In 6 Weeks, Here's What Changes:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            <div className="bg-white/10 rounded-lg p-4">
              <p className="font-semibold">Week 1:</p>
              <p className="text-red-100">Understand HOW God calls (and why you've been missing it)</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <p className="font-semibold">Week 2:</p>
              <p className="text-red-100">Clear the blockages drowning out His voice</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <p className="font-semibold">Week 3:</p>
              <p className="text-red-100">Discover divine breadcrumbs in your life</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <p className="font-semibold">Week 4:</p>
              <p className="text-red-100">Learn to test and confirm what you're hearing</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <p className="font-semibold">Week 5:</p>
              <p className="text-red-100">Create your personalized calling roadmap</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <p className="font-semibold">Week 6:</p>
              <p className="text-red-100">Step forward with courage and clarity</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
