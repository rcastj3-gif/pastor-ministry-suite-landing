"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-red-600 to-red-700 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            YOUR BULLETIN WROTE ITSELF.
          </h2>
          <h3 className="text-xl sm:text-3xl md:text-4xl font-bold text-red-200 mb-6 sm:mb-8">
            GO PRAY.
          </h3>
          <p className="text-lg sm:text-xl text-red-100 mb-8 sm:mb-10 max-w-2xl mx-auto px-4 sm:px-0">
            Join pastors who are reclaiming 13+ hours weekly for the ministry only they can do.
          </p>
          <a
            href="#pricing"
            className="inline-block px-6 sm:px-10 py-4 sm:py-5 bg-white text-red-600 font-bold text-base sm:text-lg rounded-lg hover:bg-red-50 transition-colors shadow-xl whitespace-normal sm:whitespace-nowrap"
          >
            GET STARTED NOW — 30-DAY GUARANTEE
          </a>
          <p className="mt-6 text-red-200 text-sm">
            No setup fees. Cancel anytime. Reclaim your calling.
          </p>
        </motion.div>
      </div>
    </section>
  );
}