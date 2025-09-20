"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const productImages = [
  {
    id: 1,
    title: "LED Night Mode",
    description: "8 vibrant colors illuminate your practice",
    thumbnail: "01",
    features: ["8 LED Colors", "Auto Color Cycle", "Brightness Control"]
  },
  {
    id: 2,
    title: "Day Mode Setup",
    description: "Clean, portable design for anywhere",
    thumbnail: "02",
    features: ["Portable Design", "Quick Setup", "No Tools Required"]
  },
  {
    id: 3,
    title: "Smart Tracking",
    description: "Precision UWB technology",
    thumbnail: "03",
    features: ["±1cm Accuracy", "50 Yard Range", "Instant Feedback"]
  },
  {
    id: 4,
    title: "Mobile App",
    description: "Complete control in your pocket",
    thumbnail: "04",
    features: ["iOS Compatible", "Live Stats", "Progress Tracking"]
  },
  {
    id: 5,
    title: "Weatherproof",
    description: "Built for any condition",
    thumbnail: "05",
    features: ["IP65 Rated", "All Weather", "Durable Materials"]
  },
  {
    id: 6,
    title: "Multiplayer",
    description: "Challenge friends and family",
    thumbnail: "06",
    features: ["4 Players", "Tournament Mode", "Live Leaderboard"]
  }
];

export default function ProductGallery() {
  const [selectedImage, setSelectedImage] = useState(productImages[0]);

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
            Product Features
          </h2>
          <p className="text-xl text-gray-300">
            Click to explore BackyardGolf's innovative features
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Main Display */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-950 border border-gray-900 rounded p-8 flex flex-col items-center justify-center min-h-[400px]"
          >
            <motion.div
              key={selectedImage.id}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="text-center"
            >
              <div className="text-sm font-mono text-gray-500 mb-6">FEATURE_{selectedImage.thumbnail}</div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                {selectedImage.title}
              </h3>
              <p className="text-gray-300 mb-6">{selectedImage.description}</p>
              <div className="flex flex-wrap gap-2 justify-center">
                {selectedImage.features.map((feature, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 border border-gray-800 text-gray-400 rounded text-sm"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Thumbnail Grid */}
          <div className="grid grid-cols-3 gap-4">
            {productImages.map((image, index) => (
              <motion.button
                key={image.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                onClick={() => setSelectedImage(image)}
                className={`p-6 rounded-lg border-2 transition-all ${
                  selectedImage.id === image.id
                    ? "border-gray-600 bg-gray-900"
                    : "border-gray-800 bg-black hover:border-gray-700"
                }`}
              >
                <div className="text-sm font-mono text-gray-600 mb-2">{image.thumbnail}</div>
                <p className="text-sm font-medium">{image.title}</p>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}