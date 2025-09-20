"use client";

import { motion } from "framer-motion";

const features = [
  { feature: "Price", backyard: "$299", simulator: "$15,000+", net: "$150", mat: "$50" },
  { feature: "LED Night Mode", backyard: "✅ 8 Colors", simulator: "❌", net: "❌", mat: "❌" },
  { feature: "Shot Tracking", backyard: "✅ ±1cm", simulator: "✅ High", net: "❌", mat: "❌" },
  { feature: "Portable", backyard: "✅ Folds Flat", simulator: "❌", net: "Partial", mat: "✅" },
  { feature: "Setup Time", backyard: "2 min", simulator: "2+ hours", net: "10 min", mat: "1 min" },
  { feature: "Weather Resistant", backyard: "✅ IP65", simulator: "Indoor Only", net: "Limited", mat: "✅" },
  { feature: "Mobile App", backyard: "✅ Free", simulator: "✅ Extra Cost", net: "❌", mat: "❌" },
  { feature: "Multiplayer", backyard: "✅ 4 Players", simulator: "✅", net: "❌", mat: "❌" },
  { feature: "Space Required", backyard: "10-50 yards", simulator: "Full Room", net: "10 feet", mat: "6 feet" },
  { feature: "Real Ball Feel", backyard: "✅", simulator: "✅", net: "✅", mat: "Limited" }
];

export default function ComparisonTable() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-900/30 to-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">
            See How BackyardGolf <span className="text-primary">Compares</span>
          </h2>
          <p className="text-xl text-gray-300">
            The perfect balance of features, portability, and value
          </p>
        </motion.div>

        <div className="overflow-x-auto">
          <motion.table
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="w-full"
          >
            <thead>
              <tr className="border-b border-gray-800">
                <th className="text-left py-4 px-4 font-semibold">Feature</th>
                <th className="text-center py-4 px-4">
                  <div className="text-primary font-bold">BackyardGolf</div>
                  <div className="text-sm text-gray-500">Our Solution</div>
                </th>
                <th className="text-center py-4 px-4">
                  <div>Golf Simulator</div>
                  <div className="text-sm text-gray-500">Traditional</div>
                </th>
                <th className="text-center py-4 px-4">
                  <div>Practice Net</div>
                  <div className="text-sm text-gray-500">Basic</div>
                </th>
                <th className="text-center py-4 px-4">
                  <div>Putting Mat</div>
                  <div className="text-sm text-gray-500">Limited</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((row, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.03 }}
                  className="border-b border-gray-800/50 hover:bg-gray-900/30"
                >
                  <td className="py-4 px-4 font-medium">{row.feature}</td>
                  <td className="py-4 px-4 text-center">
                    <span className={row.backyard.includes("✅") ? "text-green-400" : "text-primary font-semibold"}>
                      {row.backyard}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <span className={row.simulator.includes("❌") ? "text-gray-500" : ""}>
                      {row.simulator}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <span className={row.net.includes("❌") ? "text-gray-500" : ""}>
                      {row.net}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <span className={row.mat.includes("❌") ? "text-gray-500" : ""}>
                      {row.mat}
                    </span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </motion.table>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 text-center"
        >
          <p className="text-gray-400">
            * Comparison based on typical market offerings as of 2024
          </p>
        </motion.div>
      </div>
    </section>
  );
}