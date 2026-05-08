"use client";

import { motion } from "framer-motion";

export default function Problem() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            The Real Reason You're Stuck
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="prose prose-lg max-w-none text-gray-600"
        >
          <p className="text-xl mb-6">
            Let me guess. You've been a Christian for a while. You read your Bible. You pray. 
            You try to live right.
          </p>

          <p className="text-xl mb-6">
            But there's this nagging question that won't leave you alone:
          </p>

          <p className="text-2xl font-bold text-gray-900 text-center my-8">
            "What am I actually supposed to DO with my life?"
          </p>

          <p className="text-xl mb-6">
            Not just your job. Not just your roles. But your <em>calling</em>. That thing 
            God created you for. That contribution only you can make.
          </p>

          <p className="text-xl mb-6">
            You see other people who seem to know exactly what they're here for. They talk 
            about "being called" with such confidence. And you smile and nod, but inside 
            you're wondering...
          </p>

          <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8">
            <ul className="space-y-3 text-lg">
              <li>What if I missed mine?</li>
              <li>What if I'm not spiritual enough to hear it?</li>
              <li>What if it's too late?</li>
            </ul>
          </div>

          <p className="text-xl mb-6">
            You're not spiritually defective. You're not lacking faith. You're not broken.
          </p>

          <p className="text-2xl font-bold text-gray-900 text-center my-8">
            You just need a process.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
