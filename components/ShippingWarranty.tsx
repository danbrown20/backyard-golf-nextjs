"use client";

import { motion } from "framer-motion";

const shippingInfo = [
  {
    region: "United States",
    time: "3-5 business days",
    cost: "Free on orders over $299",
    carrier: "FedEx / UPS"
  },
  {
    region: "Canada",
    time: "5-7 business days",
    cost: "$20 flat rate",
    carrier: "FedEx International"
  },
  {
    region: "Europe",
    time: "7-10 business days",
    cost: "$35 flat rate",
    carrier: "DHL Express"
  },
  {
    region: "Rest of World",
    time: "10-14 business days",
    cost: "$45 flat rate",
    carrier: "DHL Express"
  }
];

const warrantyDetails = [
  {
    coverage: "2-Year Standard Warranty",
    includes: [
      "All electronic components",
      "LED lighting system",
      "UWB tracking sensors",
      "Structural defects",
      "Mobile app lifetime access"
    ]
  },
  {
    coverage: "Extended Protection Plan",
    includes: [
      "Everything in standard warranty",
      "Accidental damage coverage",
      "Priority replacement service",
      "Annual maintenance kit",
      "Exclusive beta features"
    ]
  }
];

const returnPolicy = [
  "30-day money-back guarantee",
  "Free return shipping",
  "No questions asked",
  "Full refund including shipping",
  "Product must be in original condition"
];

export default function ShippingWarranty() {
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
            Shipping & Warranty
          </h2>
          <p className="text-xl text-gray-300">
            Fast delivery, comprehensive protection
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Shipping Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-950 border border-gray-900 rounded p-8"
          >
            <h3 className="text-2xl font-bold mb-6">Shipping Information</h3>

            <div className="space-y-4">
              {shippingInfo.map((info, index) => (
                <div
                  key={index}
                  className="pb-4 border-b border-gray-900 last:border-0"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-white">{info.region}</h4>
                    <span className="text-sm text-gray-400">{info.time}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Cost: {info.cost}</span>
                    <span className="text-gray-500">{info.carrier}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-black border border-gray-800 rounded">
              <p className="text-xs text-gray-400">
                <span className="font-semibold text-white">Note:</span> Orders placed before 2 PM EST ship same day.
                Tracking information provided within 24 hours of shipment.
              </p>
            </div>
          </motion.div>

          {/* Warranty Coverage */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-950 border border-gray-900 rounded p-8"
          >
            <h3 className="text-2xl font-bold mb-6">Warranty Coverage</h3>

            <div className="space-y-6">
              {warrantyDetails.map((warranty, index) => (
                <div key={index}>
                  <h4 className="font-bold text-white mb-3">{warranty.coverage}</h4>
                  <ul className="space-y-1">
                    {warranty.includes.map((item, idx) => (
                      <li key={idx} className="text-sm text-gray-400 flex items-start gap-2">
                        <span className="text-gray-600 mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  {index === 1 && (
                    <div className="mt-3">
                      <span className="text-xs text-gray-500">Add for </span>
                      <span className="text-sm font-bold text-white">$49</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Return Policy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gray-950 border border-gray-900 rounded p-8"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Return Policy</h3>

          <div className="grid md:grid-cols-5 gap-4">
            {returnPolicy.map((policy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="text-center p-4 bg-black border border-gray-800 rounded"
              >
                <p className="text-sm text-gray-300">{policy}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Customer Service */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <h3 className="text-xl font-bold mb-4">Need Help?</h3>
          <p className="text-gray-400 mb-6">
            Our support team is available Monday-Friday, 9 AM - 6 PM EST
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-black px-6 py-3 rounded font-medium hover:bg-gray-100 transition-all">
              Contact Support
            </button>
            <button className="border border-gray-700 text-gray-400 px-6 py-3 rounded font-medium hover:bg-gray-900 hover:text-white transition-all">
              Track Order
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}