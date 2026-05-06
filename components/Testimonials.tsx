"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "I used to dread Friday nights. Now I rest. The bulletin is done before I even think about it.",
    author: "Pastor Mike",
    church: "200-member church",
  },
  {
    quote: "I preached for 15 years. This is the first time I've felt like I had margin to actually pastor my people.",
    author: "Pastor Sarah",
    church: "Church plant",
  },
  {
    quote: "We cancelled three software subscriptions. The suite replaced them all—and gave us better results.",
    author: "Pastor James",
    church: "Multi-site church",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            WHAT PASTORS ARE
            <span className="text-sky-400"> SAYING</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10"
            >
              <Quote className="w-10 h-10 text-red-500 mb-4" />
              <p className="text-lg text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
              <div>
                <p className="font-bold text-white">{testimonial.author}</p>
                <p className="text-sm text-gray-400">{testimonial.church}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}