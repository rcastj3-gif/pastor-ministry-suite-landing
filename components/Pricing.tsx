"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Individual Pastor",
    price: "$97",
    description: "For solo pastors and small churches",
    features: [
      "All 7 AI agents",
      "Up to 500 members",
      "Email support",
      "Basic integrations",
      "Weekly bulletin auto-generation",
      "Social media scheduling",
      "Visitor follow-up automation",
    ],
    cta: "START RECLAIMING MY TIME",
    popular: false,
  },
  {
    name: "Church Plant",
    price: "$197",
    description: "For growing churches ready to scale",
    features: [
      "All 7 AI agents",
      "Up to 1,000 members",
      "Priority support",
      "Full integrations",
      "Custom workflows",
      "Multi-staff access (3 users)",
      "Advanced analytics",
      "White-label options",
    ],
    cta: "GROW WITHOUT THE GRIND",
    popular: true,
  },
  {
    name: "Multi-Site",
    price: "$497",
    description: "For established churches and networks",
    features: [
      "All 7 AI agents",
      "Unlimited members",
      "Dedicated account manager",
      "Custom development",
      "White-label options",
      "API access",
      "Unlimited staff users",
      "Onboarding training",
    ],
    cta: "SCALE WITH CONFIDENCE",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            CHOOSE YOUR
            <span className="text-red-600"> PLAN</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            30-day money-back guarantee. Cancel the clutter. Reclaim your calling.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl p-8 ${
                plan.popular
                  ? "bg-gradient-to-br from-red-600 to-red-700 text-white shadow-2xl scale-105"
                  : "bg-gray-50 border border-gray-200"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-yellow-400 text-yellow-900 px-4 py-1 rounded-full text-sm font-bold">
                    MOST POPULAR
                  </span>
                </div>
              )}

              <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? "text-white" : "text-gray-900"}`}>
                {plan.name}
              </h3>
              <p className={`mb-6 ${plan.popular ? "text-red-100" : "text-gray-600"}`}>
                {plan.description}
              </p>

              <div className="flex items-baseline gap-2 mb-8">
                <span className={`text-5xl font-bold ${plan.popular ? "text-white" : "text-gray-900"}`}>
                  {plan.price}
                </span>
                <span className={plan.popular ? "text-red-200" : "text-gray-500"}>/month</span>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.popular ? "text-red-200" : "text-green-500"}`} />
                    <span className={plan.popular ? "text-white" : "text-gray-700"}>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`block w-full text-center py-4 rounded-lg font-bold transition-colors ${
                  plan.popular
                    ? "bg-white text-red-600 hover:bg-red-50"
                    : "bg-red-600 text-white hover:bg-red-700"
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-4">
            Questions? Email us at{" "}
            <a href="mailto:reyes@agentmail.to" className="text-red-600 hover:underline">
              reyes@agentmail.to
            </a>
          </p>
          <p className="text-sm text-gray-500 italic">
            "Commit to the LORD whatever you do, and he will establish your plans." — Proverbs 16:3
          </p>
        </motion.div>
      </div>
    </section>
  );
}