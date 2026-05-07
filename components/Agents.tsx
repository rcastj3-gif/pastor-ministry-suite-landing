"use client";

import { motion } from "framer-motion";
import { FileText, Users, Heart, Megaphone, Music, BookOpen, Globe } from "lucide-react";

const agents = [
  {
    icon: FileText,
    name: "Sermon Architect",
    savings: "5 hrs → 2 hrs",
    description: "Deep exegesis, manuscript drafting, small group guides, children's adaptations—all in your voice.",
    color: "bg-amber-500",
  },
  {
    icon: Users,
    name: "Church Administrator",
    savings: "15 hrs → 5 hrs",
    description: "Member database, event coordination, volunteer scheduling, budget tracking—automated.",
    color: "bg-blue-500",
  },
  {
    icon: Heart,
    name: "Pastoral Care Coordinator",
    savings: "2 hrs → 0.5 hrs",
    description: "Prayer requests, hospital visits, bereavement support, encrypted counseling notes.",
    color: "bg-red-500",
  },
  {
    icon: Megaphone,
    name: "Communications Director",
    savings: "3 hrs → 0 hrs",
    description: "Weekly newsletter, social media posts, event promotion—scheduled and sent automatically.",
    color: "bg-purple-500",
  },
  {
    icon: Music,
    name: "Worship Planner",
    savings: "2 hrs → 0.5 hrs",
    description: "Song selection, liturgy planning, tech coordination, CCLI reporting—done.",
    color: "bg-green-500",
  },
  {
    icon: BookOpen,
    name: "Discipleship Coordinator",
    savings: "3 hrs → 1 hr",
    description: "Small group curriculum, Sunday School lessons, new member classes, mentorship matching.",
    color: "bg-indigo-500",
  },
  {
    icon: Globe,
    name: "Outreach Coordinator",
    savings: "2 hrs → 0.5 hrs",
    description: "Visitor follow-up (30-day automated sequence), community events, growth tracking.",
    color: "bg-teal-500",
  },
];

export default function Agents() {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 px-4 sm:px-0"
        >
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            THE 7 AGENTS THAT
            <span className="text-red-600"> RECLAIM YOUR WEEK</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            This isn't another church software to learn. This is a digital ministry team that works however you already work.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-0">
          {agents.map((agent, index) => (
            <motion.div
              key={agent.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 rounded-xl p-5 sm:p-6 hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className={`w-12 h-12 sm:w-14 sm:h-14 ${agent.color} rounded-lg flex items-center justify-center mb-3 sm:mb-4`}>
                <agent.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{agent.name}</h3>
              <p className="text-sm font-semibold text-green-600 mb-2 sm:mb-3">{agent.savings} per week</p>
              <p className="text-gray-600 text-sm sm:text-base">{agent.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-6 py-3 rounded-full font-semibold">
            <span className="text-2xl">💡</span>
            <span>Total time saved: 13+ hours weekly = 650+ hours annually</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}