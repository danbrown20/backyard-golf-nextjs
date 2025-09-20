"use client";

import { motion } from "framer-motion";

const pressItems = [
  {
    outlet: "Golf Digest",
    quote: "Revolutionary approach to backyard practice",
    logo: "GD",
    date: "January 2025"
  },
  {
    outlet: "TechCrunch",
    quote: "The smart golf gadget every player needs",
    logo: "TC",
    date: "December 2024"
  },
  {
    outlet: "ESPN Golf",
    quote: "Changing how golfers practice at home",
    logo: "ESPN",
    date: "January 2025"
  },
  {
    outlet: "The Verge",
    quote: "LED gaming meets golf in the best way",
    logo: "TV",
    date: "December 2024"
  },
  {
    outlet: "Golf Weekly",
    quote: "Most innovative golf product of 2025",
    logo: "GW",
    date: "January 2025"
  },
  {
    outlet: "Wired",
    quote: "Precision tracking that actually works",
    logo: "W",
    date: "January 2025"
  }
];

export default function PressSection() {
  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">
            Press Coverage
          </h2>
          <p className="text-xl text-gray-300">
            Leading publications are talking about BackyardGolf
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pressItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-950 border border-gray-900 rounded p-6 hover:border-gray-800 transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-xs font-mono text-gray-600">{item.logo}</div>
                <span className="text-xs text-gray-500">{item.date}</span>
              </div>
              <h3 className="text-lg font-bold mb-2 text-primary">{item.outlet}</h3>
              <p className="text-gray-300 italic">"{item.quote}"</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <button className="border border-gray-700 text-gray-400 px-6 py-3 rounded hover:bg-gray-900 hover:text-white transition-all">
            View Press Kit
          </button>
        </motion.div>
      </div>
    </section>
  );
}