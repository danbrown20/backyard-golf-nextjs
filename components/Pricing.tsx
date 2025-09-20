"use client";

import { motion } from "framer-motion";

const tiers = [
  {
    name: "Super Early Bird",
    price: "$299",
    originalPrice: "$499",
    savings: "Save $200 (40% off)",
    limited: true,
    remaining: 23,
    features: [
      "BackyardGolf device",
      "3 safety foam balls",
      "USB-C charging cable",
      "Free mobile app (iOS)",
      "1-year warranty",
      "October 2025 delivery"
    ],
    highlighted: false
  },
  {
    name: "Early Bird Special",
    price: "$349",
    originalPrice: "$499",
    savings: "Save $150 (30% off)",
    limited: false,
    features: [
      "Everything from Super Early Bird",
      "Premium carrying case",
      "6 foam balls (instead of 3)",
      "Priority shipping",
      "Name engraving option",
      "Lifetime app updates"
    ],
    highlighted: true
  },
  {
    name: "Duo Pack",
    price: "$579",
    originalPrice: "$998",
    savings: "Save $419 (42% off)",
    limited: false,
    features: [
      "2x BackyardGolf devices",
      "2x Premium carrying cases",
      "12 foam balls",
      "Free worldwide shipping",
      "Exclusive Founder badge in app",
      "Early access to new features"
    ],
    highlighted: false
  }
];

export default function Pricing() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-gray-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Exclusive Launch Pricing
          </h2>
          <p className="text-xl text-gray-300">
            Limited time offers for early supporters
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-gray-900/50 rounded-lg p-6 ${
                tier.highlighted ? "border-2 border-primary" : "border border-gray-800"
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-black px-4 py-1 rounded-full text-sm font-semibold">
                    MOST POPULAR
                  </span>
                </div>
              )}

              {tier.limited && (
                <div className="mb-4">
                  <span className="text-orange-400 text-sm font-medium">
                    ⚡ Limited: {tier.remaining} left
                  </span>
                </div>
              )}

              <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>

              <div className="mb-4">
                <span className="text-4xl font-bold text-primary">{tier.price}</span>
                <span className="text-gray-500 line-through ml-2">{tier.originalPrice}</span>
              </div>

              <p className="text-green-400 text-sm mb-6">{tier.savings}</p>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 rounded-lg font-semibold transition-all ${
                tier.highlighted
                  ? "bg-primary text-black hover:bg-green-400"
                  : "bg-gray-800 text-white hover:bg-gray-700"
              }`}>
                Select This Package
              </button>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400">
            🔒 Secure payment via Stripe • 30-day money-back guarantee
          </p>
        </div>
      </div>
    </section>
  );
}