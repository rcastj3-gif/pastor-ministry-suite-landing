"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface PricingProps {
  onCtaClick: () => void;
}

const features = [
  "24 Video Lessons (15-30 min each)",
  "Downloadable Workbooks for Each Module",
  "Private Community Access",
  "4 Live Q&A Group Coaching Calls",
  "Lifetime Access to Course Materials",
  "30-Day Money-Back Guarantee",
  "Bonus: Called by Name Audiobook",
  "Bonus: 30-Day Calling Journal"
];

export default function Pricing({ onCtaClick }: PricingProps) {
  return (
    <section id="pricing" className="py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Your Investment
          </h2>
          <p className="text-xl text-gray-600">
            Less than the cost of a dinner out each week—for clarity that lasts a lifetime
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-2xl overflow-hidden"
        >
          <div className="bg-gradient-to-br from-red-600 to-red-700 p-8 text-white text-center">
            <p className="text-red-200 mb-2">Complete 6-Week Program</p>
            <div className="flex items-baseline justify-center gap-2">
              <span className="text-5xl sm:text-6xl font-bold">$297</span>
            </div>
            <p className="text-red-200 mt-2">or 3 payments of $107</p>
          </div>

          <div className="p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Everything You Get:
            </h3>

            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-red-600" />
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="text-center">
              <button
                onClick={onCtaClick}
                className="w-full sm:w-auto px-10 py-5 bg-red-600 hover:bg-red-700 text-white font-bold text-xl rounded-lg transition-colors shadow-lg"
              >
                ENROLL NOW — GET CLARITY
              </button>
              <p className="mt-4 text-sm text-gray-500">
                30-Day Money-Back Guarantee. No questions asked.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 bg-green-50 border border-green-200 rounded-xl p-6 text-center"
        >
          <p className="text-green-800 font-semibold text-lg">
            Total Value: $1,997
          </p>
          <p className="text-green-700">
            Your Investment: $297 (Save $1,700)
          </p>
        </motion.div>
      </div>
    </section>
  );
}
