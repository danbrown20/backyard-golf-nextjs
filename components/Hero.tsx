"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-4">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-900/20 to-background" />

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          BackyardG<span className="text-primary">O</span>lf
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-300 mb-8"
        >
          Light Up Your Golf Game
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto"
        >
          The world's most portable LED chipping game with precision tracking.
          Transform any space into your personal practice zone - day or night.
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="bg-primary text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-400 transition-all">
            Get Early Access
          </button>
          <button className="border border-primary text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary hover:text-black transition-all">
            Watch Demo
          </button>
        </motion.div>
      </div>
    </section>
  );
}