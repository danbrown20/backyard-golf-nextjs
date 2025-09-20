"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Unbox & Place",
    description: "Take BackyardGolf out of the box and place it anywhere - backyard, garage, basement, or office",
    icon: "📦",
    time: "30 seconds"
  },
  {
    number: "02",
    title: "Connect App",
    description: "Download the free BackyardGolf app and connect via Bluetooth. No WiFi or complex setup needed",
    icon: "📲",
    time: "1 minute"
  },
  {
    number: "03",
    title: "Choose Your Mode",
    description: "Select from practice modes, challenges, or multiplayer. Set your LED colors for night play",
    icon: "🎮",
    time: "Instant"
  },
  {
    number: "04",
    title: "Start Playing",
    description: "Begin chipping! Every shot is tracked with precision. Watch your stats improve in real-time",
    icon: "⛳",
    time: "Unlimited fun"
  }
];

export default function HowItWorks() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Setup in <span className="text-primary">Under 2 Minutes</span>
          </h2>
          <p className="text-xl text-gray-300">
            From unboxing to your first shot - it's that simple
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary to-transparent -z-10" />
              )}

              <div className="text-center">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="inline-block"
                >
                  <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <span className="text-4xl">{step.icon}</span>
                  </div>
                </motion.div>

                <div className="text-primary font-bold text-sm mb-2">
                  STEP {step.number}
                </div>

                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-400 mb-2">{step.description}</p>
                <span className="text-sm text-primary font-medium">
                  {step.time}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-primary/10 to-green-500/10 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">
            Ready to Transform Your Practice?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Join thousands of golfers who have already improved their short game with BackyardGolf.
            Setup is so simple, you'll be practicing within minutes of unboxing.
          </p>
          <button className="bg-primary text-black px-8 py-3 rounded-lg font-semibold hover:bg-green-400 transition-all">
            Order Now - Ships in 3-5 Days
          </button>
        </motion.div>
      </div>
    </section>
  );
}