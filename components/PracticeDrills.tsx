"use client";

import { motion } from "framer-motion";

const drills = [
  {
    category: "Beginner",
    color: "text-green-600",
    exercises: [
      {
        name: "Basic Target Practice",
        description: "Focus on hitting the target consistently from 10 yards",
        duration: "10 minutes",
        reps: "20 shots",
        tips: "Focus on smooth tempo and follow-through"
      },
      {
        name: "Distance Control",
        description: "Hit 5 shots each at 10, 15, and 20 yards",
        duration: "15 minutes",
        reps: "15 shots",
        tips: "Note your swing length for each distance"
      },
      {
        name: "Stance & Setup",
        description: "Practice proper alignment and ball position",
        duration: "5 minutes",
        reps: "10 practice swings",
        tips: "Check feet, hips, and shoulders alignment"
      }
    ]
  },
  {
    category: "Intermediate",
    color: "text-blue-600",
    exercises: [
      {
        name: "Zone Precision",
        description: "Aim for specific zones within the target",
        duration: "15 minutes",
        reps: "30 shots",
        tips: "Alternate between center, left, and right zones"
      },
      {
        name: "Trajectory Control",
        description: "Practice high and low chip shots",
        duration: "20 minutes",
        reps: "20 shots",
        tips: "Adjust ball position and club face angle"
      },
      {
        name: "Pressure Training",
        description: "Must make 3 in a row before moving back",
        duration: "20 minutes",
        reps: "Variable",
        tips: "Reset if you miss, builds mental toughness"
      }
    ]
  },
  {
    category: "Advanced",
    color: "text-purple-600",
    exercises: [
      {
        name: "Random Distance",
        description: "App calls random distances between 10-40 yards",
        duration: "25 minutes",
        reps: "40 shots",
        tips: "Adapt quickly to changing distances"
      },
      {
        name: "Spin Control",
        description: "Practice backspin and roll-out shots",
        duration: "30 minutes",
        reps: "30 shots",
        tips: "Vary club selection and ball position"
      },
      {
        name: "Competition Simulation",
        description: "Play full tournament rounds with scoring",
        duration: "45 minutes",
        reps: "3 rounds",
        tips: "Track stats and identify weaknesses"
      }
    ]
  },
  {
    category: "Pro Training",
    color: "text-red-600",
    exercises: [
      {
        name: "Shot Shaping",
        description: "Draw and fade chips around obstacles",
        duration: "30 minutes",
        reps: "40 shots",
        tips: "Use face angle and path manipulation"
      },
      {
        name: "Wind Simulation",
        description: "Practice with LED patterns simulating wind",
        duration: "25 minutes",
        reps: "30 shots",
        tips: "Adjust for simulated conditions"
      },
      {
        name: "Tour Scoring",
        description: "Must average 8+ points per shot over 50 balls",
        duration: "60 minutes",
        reps: "50 shots",
        tips: "Focus on consistency over individual shots"
      }
    ]
  }
];

export default function PracticeDrills() {
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
            Practice Drills & Training
          </h2>
          <p className="text-xl text-gray-300">
            Structured practice programs for every skill level
          </p>
        </motion.div>

        {/* Skill Levels */}
        <div className="space-y-8">
          {drills.map((level, levelIndex) => (
            <motion.div
              key={levelIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: levelIndex * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className={`text-sm font-mono ${level.color}`}>
                  {level.category.toUpperCase()}
                </span>
                <div className="flex-1 h-px bg-gray-800"></div>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                {level.exercises.map((drill, drillIndex) => (
                  <motion.div
                    key={drillIndex}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: drillIndex * 0.05 }}
                    className="bg-black border border-gray-900 rounded p-6 hover:border-gray-800 transition-all"
                  >
                    <h3 className="font-bold text-white mb-2">{drill.name}</h3>
                    <p className="text-sm text-gray-400 mb-4">{drill.description}</p>

                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Duration:</span>
                        <span className="text-gray-300">{drill.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Reps:</span>
                        <span className="text-gray-300">{drill.reps}</span>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-gray-900">
                      <p className="text-xs text-gray-500">
                        <span className="font-semibold">TIP:</span> {drill.tips}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Weekly Training Plan */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 bg-black border border-gray-900 rounded p-8"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Sample Weekly Training Plan</h3>

          <div className="grid md:grid-cols-7 gap-2">
            {[
              { day: "MON", focus: "Distance Control", time: "20 min" },
              { day: "TUE", focus: "Target Practice", time: "15 min" },
              { day: "WED", focus: "Rest Day", time: "-" },
              { day: "THU", focus: "Trajectory Work", time: "25 min" },
              { day: "FRI", focus: "Pressure Drills", time: "20 min" },
              { day: "SAT", focus: "Competition", time: "45 min" },
              { day: "SUN", focus: "Fun Games", time: "30 min" }
            ].map((day, index) => (
              <div
                key={index}
                className="text-center p-3 bg-gray-950 border border-gray-900 rounded"
              >
                <div className="text-xs font-mono text-gray-600 mb-1">{day.day}</div>
                <div className="text-sm font-medium text-white mb-1">{day.focus}</div>
                <div className="text-xs text-gray-500">{day.time}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}