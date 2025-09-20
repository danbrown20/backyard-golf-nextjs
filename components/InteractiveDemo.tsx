"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const demoModes = [
  {
    id: "practice",
    name: "Practice Mode",
    description: "Perfect your technique with instant feedback",
    features: ["Distance tracking", "Accuracy scoring", "Progress charts"],
    color: "text-green-400",
    bgColor: "from-green-500/20",
    icon: "PRACTICE"
  },
  {
    id: "challenge",
    name: "Challenge Mode",
    description: "Test your skills with progressive difficulty",
    features: ["50 challenges", "Skill levels", "Achievement badges"],
    color: "text-blue-400",
    bgColor: "from-blue-500/20",
    icon: "CHALLENGE"
  },
  {
    id: "multiplayer",
    name: "Multiplayer Mode",
    description: "Compete with friends and family",
    features: ["4 player support", "Tournament brackets", "Live scoring"],
    color: "text-purple-400",
    bgColor: "from-purple-500/20",
    icon: "MULTI"
  },
  {
    id: "night",
    name: "Night Golf Mode",
    description: "Light up the night with LED targets",
    features: ["8 LED colors", "Pattern games", "Music sync"],
    color: "text-pink-400",
    bgColor: "from-pink-500/20",
    icon: "NIGHT"
  }
];

export default function InteractiveDemo() {
  const [selectedMode, setSelectedMode] = useState(demoModes[0]);
  const [ledColor, setLedColor] = useState("#00ff00");

  const ledColors = [
    "#00ff00", "#ff0000", "#0000ff", "#ffff00",
    "#ff00ff", "#00ffff", "#ff8800", "#ffffff"
  ];

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
            Interactive Demo
          </h2>
          <p className="text-xl text-gray-300">
            Explore different game modes and LED configurations
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Interactive Display */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-950 border border-gray-900 rounded p-8"
          >
            <div className="aspect-video bg-black rounded-lg mb-6 relative overflow-hidden">
              {/* Simulated Golf Target */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{
                    boxShadow: `0 0 100px ${ledColor}, 0 0 200px ${ledColor}`
                  }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  {/* Target Rings */}
                  {[150, 100, 50].map((size, index) => (
                    <motion.div
                      key={index}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="absolute rounded-full border-2"
                      style={{
                        width: `${size}px`,
                        height: `${size}px`,
                        borderColor: ledColor,
                        left: `${-size/2}px`,
                        top: `${-size/2}px`,
                        opacity: 0.5 - (index * 0.1)
                      }}
                    />
                  ))}
                  <div className="text-xs font-mono text-gray-600">{selectedMode.icon}</div>
                </motion.div>
              </div>

              {/* Mode Info Overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/80 rounded-lg p-3">
                <h3 className={`font-bold mb-1 ${selectedMode.color}`}>
                  {selectedMode.name}
                </h3>
                <p className="text-xs text-gray-400">{selectedMode.description}</p>
              </div>
            </div>

            {/* LED Color Selector */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold mb-3 text-gray-400">LED Color</h4>
              <div className="flex gap-2">
                {ledColors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setLedColor(color)}
                    className={`w-10 h-10 rounded-lg border-2 transition-all ${
                      ledColor === color ? "scale-110 border-white" : "border-gray-600"
                    }`}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>

            {/* Features List */}
            <div>
              <h4 className="text-sm font-semibold mb-3 text-gray-400">Features</h4>
              <div className="space-y-2">
                {selectedMode.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-2"
                  >
                    <span className="text-primary">✓</span>
                    <span className="text-sm text-gray-300">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Mode Selector */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-bold mb-6">Select Game Mode</h3>
            <div className="space-y-4">
              {demoModes.map((mode) => (
                <motion.button
                  key={mode.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedMode(mode)}
                  className={`w-full text-left p-6 rounded-lg border-2 transition-all ${
                    selectedMode.id === mode.id
                      ? "border-gray-700 bg-gray-900"
                      : "border-gray-900 bg-black hover:border-gray-800"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <span className="text-xs font-mono text-gray-600">{mode.icon}</span>
                    <div className="flex-1">
                      <h4 className={`text-lg font-bold mb-1 ${
                        selectedMode.id === mode.id ? mode.color : ""
                      }`}>
                        {mode.name}
                      </h4>
                      <p className="text-sm text-gray-400 mb-2">{mode.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {mode.features.map((feature, index) => (
                          <span
                            key={index}
                            className="text-xs px-2 py-1 bg-gray-800 rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 mb-4">
            Experience the full demo with our mobile app
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-white text-black px-6 py-3 rounded font-medium hover:bg-gray-100 transition-all">
              Download iOS App
            </button>
            <button className="border border-gray-700 text-gray-400 px-6 py-3 rounded font-medium hover:bg-gray-900 hover:text-white transition-all">
              View Web Demo
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}