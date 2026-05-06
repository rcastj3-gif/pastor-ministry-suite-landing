"use client";

import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What if I already paid annually for other tools?",
    answer: "Many churches find the suite savings pay for the transition within 2-3 months. We also offer migration assistance to help you transition smoothly.",
  },
  {
    question: "Can I keep some tools and use the suite for others?",
    answer: "Absolutely. The suite integrates with most major platforms. Use what you want, replace what you don't. We're flexible.",
  },
  {
    question: "What about my data?",
    answer: "All data is yours. Export anytime. We use bank-level encryption and never sell or share your information. Pastoral care notes are encrypted with HIPAA-level security.",
  },
  {
    question: "What if I'm not tech-savvy?",
    answer: "The suite is designed for pastors, not tech experts. If you can send an email, you can use this. Plus, we offer onboarding support for all plans.",
  },
  {
    question: "Can multiple staff use it?",
    answer: "Yes. Church Plant and Multi-Site plans include multiple user accounts with role-based permissions. Individual plans can add users for a small fee.",
  },
  {
    question: "How does the 30-day guarantee work?",
    answer: "Try the full suite for 30 days. If you don't reclaim at least 10 hours in your first month, we'll refund every penny. No questions. No hassle. Just a handshake and a prayer.",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left"
      >
        <span className="text-lg font-semibold text-gray-900">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="pb-6"
        >
          <p className="text-gray-600">{answer}</p>
        </motion.div>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            FREQUENTLY ASKED
            <span className="text-red-600"> QUESTIONS</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-lg p-8"
        >
          {faqs.map((faq) => (
            <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}