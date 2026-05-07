"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

interface SavingsProps {
  onCtaClick?: () => void;
}

const comparisons = [
  { tool: "Planning Center Online", cost: "$99-299/mo", replaced: true },
  { tool: "Mailchimp/Constant Contact", cost: "$50-150/mo", replaced: true },
  { tool: "Canva Pro + Designer", cost: "$50-200/mo", replaced: true },
  { tool: "Text In Church", cost: "$37-97/mo", replaced: true },
  { tool: "Hootsuite/Buffer", cost: "$30-100/mo", replaced: true },
  { tool: "Breeze/ChMS", cost: "$67-100/mo", replaced: true },
  { tool: "Sermonary/Logos (basic)", cost: "$20-50/mo", replaced: true },
];

export default function Savings({ onCtaClick }: SavingsProps) {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            THE MONEY YOU'LL
            <span className="text-green-600"> SAVE</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Replace $300-1,000/month in church software with one unified suite.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start px-4 sm:px-0">
          {/* Comparison Table */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <div className="bg-gray-900 text-white px-6 py-4">
              <h3 className="text-lg font-bold">What You're Probably Paying Now</h3>
            </div>
            <div className="divide-y divide-gray-100">
              {comparisons.map((item) => (
                <div key={item.tool} className="px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {item.replaced ? (
                      <X className="w-5 h-5 text-red-500" />
                    ) : (
                      <Check className="w-5 h-5 text-green-500" />
                    )}
                    <span className="text-gray-700">{item.tool}</span>
                  </div>
                  <span className="text-gray-500 font-mono">{item.cost}</span>
                </div>
              ))}
            </div>
            <div className="bg-red-50 px-6 py-4 border-t border-red-100">
              <div className="flex justify-between items-center">
                <span className="font-bold text-red-900">Traditional Stack Total</span>
                <span className="font-bold text-red-600 text-xl">$266-846/mo</span>
              </div>
            </div>
          </motion.div>

          {/* Suite Pricing */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-2xl shadow-lg p-6 sm:p-8 text-white">
              <h3 className="text-xl sm:text-2xl font-bold mb-2">Pastor Ministry Suite</h3>
              <p className="text-red-100 mb-4 sm:mb-6 text-sm sm:text-base">All 7 agents. One price. No add-ons.</p>
              <div className="flex items-baseline gap-2 mb-4 sm:mb-6">
                <span className="text-4xl sm:text-5xl font-bold">$97</span>
                <span className="text-red-200">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5" />
                  <span>All 7 AI agents included</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5" />
                  <span>Up to 500 members</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5" />
                  <span>Email support</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5" />
                  <span>30-day money-back guarantee</span>
                </li>
              </ul>
              <button
                onClick={onCtaClick}
                className="block w-full text-center bg-white text-red-600 font-bold py-4 rounded-lg hover:bg-red-50 transition-colors"
              >
                GET STARTED
              </button>
            </div>

            <div className="bg-green-100 rounded-xl p-4 sm:p-6 border border-green-200">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-1 sm:gap-0">
                <span className="font-semibold text-green-800 text-sm sm:text-base">Your Monthly Savings</span>
                <span className="text-xl sm:text-2xl font-bold text-green-700">$169-749</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-0">
                <span className="font-semibold text-green-800 text-sm sm:text-base">Annual Savings</span>
                <span className="text-2xl sm:text-3xl font-bold text-green-700">$2,028-8,988</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}