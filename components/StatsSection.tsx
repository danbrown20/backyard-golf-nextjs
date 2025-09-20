"use client";

import { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  {
    value: 10000,
    suffix: "+",
    label: "Happy Golfers",
    description: "Improving their game daily"
  },
  {
    value: 2.5,
    suffix: "M",
    label: "Shots Tracked",
    description: "With precision accuracy"
  },
  {
    value: 94,
    suffix: "%",
    label: "Satisfaction Rate",
    description: "5-star reviews"
  },
  {
    value: 15,
    suffix: "min",
    label: "Avg. Daily Practice",
    description: "Time users spend playing"
  }
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const stepValue = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += stepValue;
      if (current >= value) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        setDisplayValue(current);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value, isInView]);

  return (
    <span ref={ref}>
      {displayValue.toFixed(value % 1 !== 0 ? 1 : 0)}{suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="py-20 px-4 bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Performance Metrics
          </h2>
          <p className="text-xl text-gray-300">
            Join thousands of golfers already improving their game
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-black border border-gray-900 rounded p-8"
              >
                <div className="text-5xl font-bold text-primary mb-2">
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-xl font-semibold mb-2">{stat.label}</div>
                <div className="text-sm text-gray-400">{stat.description}</div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 px-6 py-3 border border-gray-800 rounded">
            <span className="text-lg">
              <span className="font-bold text-white">Award Winner:</span> Best Golf Innovation 2024
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}