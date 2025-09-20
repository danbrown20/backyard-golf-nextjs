"use client";

import { motion } from "framer-motion";

export default function AppShowcase() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Your Personal Golf <span className="text-primary">Command Center</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Track every shot, analyze your progress, and compete with friends worldwide.
            The BackyardGolf app transforms practice into measurable improvement.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative mx-auto w-72 h-[600px] bg-gray-900 rounded-[3rem] border-8 border-gray-800">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-800 rounded-b-2xl"></div>
              <div className="h-full w-full rounded-[2.5rem] overflow-hidden bg-gradient-to-b from-gray-800 to-gray-900 p-6">
                <div className="text-center mb-6">
                  <p className="text-xs text-gray-500">9:41 AM</p>
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Practice Modes</h3>
                <div className="grid grid-cols-2 gap-3">
                  {["Night Mode", "Challenge", "Time Attack", "Precision"].map((mode) => (
                    <div key={mode} className="bg-gray-800 p-3 rounded-lg text-center">
                      <span className="text-sm text-gray-300">{mode}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <h4 className="font-semibold mb-3 text-white">LED Zone Colors</h4>
                  <div className="flex gap-2">
                    {["#00ff88", "#ff0066", "#0099ff", "#ffff00"].map((color) => (
                      <div
                        key={color}
                        className="w-12 h-12 rounded-lg"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
                <button className="w-full mt-6 bg-primary text-black py-3 rounded-lg font-semibold">
                  Start Practice
                </button>
              </div>
            </div>
          </motion.div>

          {/* Features List */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="bg-gray-900/50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-3 text-primary">Smart Practice Modes</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• 8-color LED night mode system</li>
                <li>• Progressive difficulty levels</li>
                <li>• Time-based challenges</li>
                <li>• Zone accuracy training</li>
              </ul>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-3 text-primary">Competition & Social</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Weekly global tournaments</li>
                <li>• Real-time friend challenges</li>
                <li>• Live leaderboards</li>
                <li>• Achievement system</li>
              </ul>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-3 text-primary">Advanced Analytics</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Shot accuracy heatmaps</li>
                <li>• Progress tracking over time</li>
                <li>• Personalized tips</li>
                <li>• Export data to coach</li>
              </ul>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            Compatible with iPhone 11+ • Android app coming soon • Free lifetime updates
          </p>
        </div>
      </div>
    </section>
  );
}