"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const gameModes = [
  {
    name: "Classic Target",
    description: "Hit the target zones to score points",
    rules: [
      "Each player gets 10 shots per round",
      "Center zone: 10 points",
      "Middle ring: 5 points",
      "Outer ring: 2 points",
      "First to 100 points wins"
    ],
    players: "1-4 players",
    time: "15-20 minutes"
  },
  {
    name: "Distance Challenge",
    description: "Test your accuracy at increasing distances",
    rules: [
      "Start at 10 yards and move back 5 yards each round",
      "3 shots per distance",
      "Must score at least once to advance",
      "Winner reaches the furthest distance",
      "Maximum distance: 50 yards"
    ],
    players: "1-4 players",
    time: "20-30 minutes"
  },
  {
    name: "Speed Golf",
    description: "Race against the clock",
    rules: [
      "60 second timer per player",
      "Hit as many targets as possible",
      "Each successful hit adds 3 seconds",
      "Highest score when time runs out wins",
      "LED colors change every 10 seconds"
    ],
    players: "2-4 players",
    time: "10 minutes"
  },
  {
    name: "H.O.R.S.E.",
    description: "Call your shot and challenge others",
    rules: [
      "First player calls a specific shot",
      "Other players must match it",
      "Miss = get a letter",
      "Spell HORSE and you're out",
      "Last player standing wins"
    ],
    players: "2-4 players",
    time: "15-25 minutes"
  },
  {
    name: "Tournament Mode",
    description: "Official competition format",
    rules: [
      "3 rounds of 10 shots each",
      "Progressive scoring multipliers",
      "Round 1: 1x points",
      "Round 2: 1.5x points",
      "Round 3: 2x points",
      "Highest total score wins"
    ],
    players: "2-8 players",
    time: "30-45 minutes"
  }
];

export default function GameRules() {
  const [selectedMode, setSelectedMode] = useState(gameModes[0]);

  return (
    <section className="py-20 px-4 bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">
            Game Modes & Rules
          </h2>
          <p className="text-xl text-gray-300">
            Multiple ways to play, endless fun to be had
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Mode Selector */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-400 mb-4">Select Game Mode</h3>
            {gameModes.map((mode, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                onClick={() => setSelectedMode(mode)}
                className={`w-full text-left p-4 rounded border transition-all ${
                  selectedMode.name === mode.name
                    ? "border-gray-600 bg-gray-900"
                    : "border-gray-800 bg-black hover:border-gray-700"
                }`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-white mb-1">{mode.name}</h4>
                    <p className="text-sm text-gray-400">{mode.description}</p>
                  </div>
                  <div className="text-right text-xs text-gray-500">
                    <div>{mode.players}</div>
                    <div>{mode.time}</div>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Selected Mode Details */}
          <motion.div
            key={selectedMode.name}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-black border border-gray-800 rounded p-8"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">{selectedMode.name}</h3>
              <p className="text-gray-400">{selectedMode.description}</p>
            </div>

            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-500 mb-3">HOW TO PLAY</h4>
              <ul className="space-y-2">
                {selectedMode.rules.map((rule, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-gray-600 mt-1">•</span>
                    <span className="text-gray-300">{rule}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-800">
              <div>
                <span className="text-xs text-gray-500">PLAYERS</span>
                <p className="text-white font-medium">{selectedMode.players}</p>
              </div>
              <div>
                <span className="text-xs text-gray-500">DURATION</span>
                <p className="text-white font-medium">{selectedMode.time}</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Quick Start Guide */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 bg-gray-900 border border-gray-800 rounded p-8 text-center"
        >
          <h3 className="text-xl font-bold mb-4">Quick Start Guide</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <div className="text-xs font-mono text-gray-600 mb-2">STEP 1</div>
              <p className="text-sm text-gray-300">Place BackyardGolf 10-50 yards away</p>
            </div>
            <div>
              <div className="text-xs font-mono text-gray-600 mb-2">STEP 2</div>
              <p className="text-sm text-gray-300">Open app and select game mode</p>
            </div>
            <div>
              <div className="text-xs font-mono text-gray-600 mb-2">STEP 3</div>
              <p className="text-sm text-gray-300">Choose LED color scheme</p>
            </div>
            <div>
              <div className="text-xs font-mono text-gray-600 mb-2">STEP 4</div>
              <p className="text-sm text-gray-300">Start chipping and track scores</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}