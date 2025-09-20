"use client";

import { motion } from "framer-motion";
import Countdown from "./Countdown";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-4">
      {/* Background */}
      <div className="absolute inset-0 bg-gray-950" />

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <span className="inline-block px-4 py-2 border border-gray-700 text-gray-300 rounded text-sm font-medium uppercase tracking-wider">
            Launching February 2026
          </span>
        </motion.div>

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
          className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto"
        >
          The world's most portable LED chipping game with precision tracking.
          Transform any space into your personal practice zone - day or night.
        </motion.div>

        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="text-sm text-gray-500 mb-2">Launch Countdown</p>
          <Countdown />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <button className="bg-primary text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-400 transition-all">
            Get Early Access
          </button>
          <button className="border border-primary text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary hover:text-black transition-all">
            Watch Demo
          </button>
        </motion.div>

        {/* Feature highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {[
            { label: "Accuracy", value: "±1cm" },
            { label: "LED Colors", value: "8 Modes" },
            { label: "Range", value: "50 Yards" },
            { label: "Battery", value: "10 Hours" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-2xl font-bold text-primary">{stat.value}</p>
              <p className="text-sm text-gray-500">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}