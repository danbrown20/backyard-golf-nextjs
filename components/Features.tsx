"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Precision Tracking",
    description: "UWB technology tracks every shot with centimeter accuracy",
    icon: "PRECISION"
  },
  {
    title: "LED Night Mode",
    description: "8 customizable LED colors for practice in complete darkness",
    icon: "LED"
  },
  {
    title: "30 Second Setup",
    description: "Place it, connect, and start playing immediately",
    icon: "QUICK"
  },
  {
    title: "Weatherproof",
    description: "IP65 rated for indoor and outdoor use in any conditions",
    icon: "WEATHER"
  },
  {
    title: "Mobile App",
    description: "Track stats, compete with friends, and improve your game",
    icon: "APP"
  },
  {
    title: "Ultra Portable",
    description: "Folds flat and fits anywhere - take practice on the go",
    icon: "PORTABLE"
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Why BackyardGolf?
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-black border border-gray-800 p-6 rounded hover:border-gray-700 transition-all"
            >
              <div className="text-xs font-mono text-gray-500 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-primary">
                {feature.title}
              </h3>
              <p className="text-gray-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-6">Ready to Transform Your Practice?</h3>
          <button className="bg-gray-100 text-black px-8 py-4 rounded text-lg font-medium hover:bg-white transition-all">
            Get Early Bird Access
          </button>
        </div>
      </div>
    </section>
  );
}