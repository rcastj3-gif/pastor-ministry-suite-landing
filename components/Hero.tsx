"use client";

import { motion } from "framer-motion";
import { Clock, DollarSign, Heart, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-red-600/20 text-red-400 text-sm font-semibold mb-6 border border-red-600/30">
            7 AI Agents. One Purpose.
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
        >
          STOP BEING A
          <span className="block text-red-500">CHURCH ADMINISTRATOR.</span>
          <span className="block mt-2">START BEING A</span>
          <span className="block text-sky-400">PASTOR.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 px-2 sm:px-0"
        >
          The average pastor spends <span className="text-white font-semibold">70% of their week</span> on tasks that don't require a pastor.
          Reclaim <span className="text-white font-semibold">13+ hours weekly</span> with 7 specialized AI agents.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12 px-4 sm:px-0"
        >
          <a
            href="#pricing"
            className="px-6 sm:px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg text-base sm:text-lg transition-colors whitespace-normal sm:whitespace-nowrap"
          >
            START RECLAIMING MY TIME
          </a>
          <a
            href="#how-it-works"
            className="px-6 sm:px-8 py-4 bg-transparent border-2 border-white/30 hover:border-white text-white font-semibold rounded-lg text-base sm:text-lg transition-colors"
          >
            SEE HOW IT WORKS
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto px-4 sm:px-0"
        >
          <div className="flex items-center justify-center gap-3 bg-white/5 backdrop-blur-sm rounded-lg p-3 sm:p-4">
            <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-sky-400 flex-shrink-0" />
            <div className="text-left">
              <p className="text-xl sm:text-2xl font-bold">13+ hrs</p>
              <p className="text-xs sm:text-sm text-gray-400">Weekly savings</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3 bg-white/5 backdrop-blur-sm rounded-lg p-3 sm:p-4">
            <DollarSign className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 flex-shrink-0" />
            <div className="text-left">
              <p className="text-xl sm:text-2xl font-bold">$2K-9K</p>
              <p className="text-xs sm:text-sm text-gray-400">Annual savings</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3 bg-white/5 backdrop-blur-sm rounded-lg p-3 sm:p-4">
            <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-red-400 flex-shrink-0" />
            <div className="text-left">
              <p className="text-xl sm:text-2xl font-bold">30 Day</p>
              <p className="text-xs sm:text-sm text-gray-400">Money-back guarantee</p>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="w-8 h-8 text-white/50 animate-bounce" />
      </motion.div>
    </section>
  );
}