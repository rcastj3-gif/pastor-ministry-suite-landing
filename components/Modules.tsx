"use client";

import { motion } from "framer-motion";
import { Clock, BookOpen } from "lucide-react";

const modules = [
  {
    week: 1,
    title: "The Naming",
    subtitle: "Understanding How God Calls",
    lessons: [
      "The Courtroom of Heaven",
      "Three Levels of Calling",
      "The Lies That Block Your Hearing",
      "Workshop: Your Calling Audit"
    ],
    outcome: "You'll understand HOW God calls and why you've been missing it"
  },
  {
    week: 2,
    title: "The Cost",
    subtitle: "Counting the Cost of Your Calling",
    lessons: [
      "What Following Jesus Actually Costs",
      "The Idol of Comfort",
      "When Your Calling Costs Relationships",
      "Workshop: Counting Your Cost"
    ],
    outcome: "You'll clear the blockages that have been drowning out His voice"
  },
  {
    week: 3,
    title: "The Barriers",
    subtitle: "Removing Obstacles and Mindsets",
    lessons: [
      "Fear of Failure vs. Fear of Disobedience",
      "The Comparison Trap",
      "Imposter Syndrome in the Kingdom",
      "Workshop: Breaking Your Barriers"
    ],
    outcome: "You'll discover the divine breadcrumbs He's already left in your life"
  },
  {
    week: 4,
    title: "The Design",
    subtitle: "Your Unique Wiring and Gifts",
    lessons: [
      "How God Hardwired You",
      "Your Pain Becomes Your Platform",
      "The Convergence of Passion and Provision",
      "Workshop: Your Design Discovery"
    ],
    outcome: "You'll learn how to test and confirm what you think you're hearing"
  },
  {
    week: 5,
    title: "The Path",
    subtitle: "Creating Your Calling Roadmap",
    lessons: [
      "From Revelation to Roadmap",
      "The Power of Small Steps",
      "Building Your Team",
      "Workshop: Your 90-Day Plan"
    ],
    outcome: "You'll create your personalized calling roadmap"
  },
  {
    week: 6,
    title: "The Step",
    subtitle: "Courage to Move Forward",
    lessons: [
      "When God Says 'Go' But You're Scared",
      "Handling Opposition",
      "Sustaining Momentum",
      "Workshop: Your First Step"
    ],
    outcome: "You'll step forward with courage and clarity"
  }
];

export default function Modules() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Your 6-Week Journey
          </h2>
          <p className="text-xl text-gray-600">
            Each week builds on the last, moving you from confusion to crystal-clear calling
          </p>
        </motion.div>

        <div className="space-y-8">
          {modules.map((module, index) => (
            <motion.div
              key={module.week}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 rounded-2xl p-8 border-l-4 border-red-500"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                    {module.week}
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    {module.title}
                  </h3>
                  <p className="text-red-600 font-semibold mb-4">{module.subtitle}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    {module.lessons.map((lesson, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-gray-400 flex-shrink-0" />
                        <span className="text-gray-700">{lesson}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-red-50 rounded-lg p-4 mt-4">
                    <p className="text-red-800 font-semibold">
                      Week {module.week} Outcome: {module.outcome}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
