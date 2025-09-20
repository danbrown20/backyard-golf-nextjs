"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What's included in the package?",
    answer: "Your BackyardGolf kit includes: The LED chipping target with 8 color modes, 3 safety foam practice balls, USB-C charging cable, mobile app (iOS with Android coming), quick start guide, and a 1-year warranty."
  },
  {
    question: "How accurate is the tracking?",
    answer: "Our UWB (Ultra-Wideband) technology provides centimeter-level accuracy - the same technology used in Apple AirTags. Every shot is tracked within 1cm precision up to 50 yards away."
  },
  {
    question: "Can I use real golf balls?",
    answer: "Yes! BackyardGolf works with both real golf balls for outdoor use and our included foam balls for safe indoor practice. The tracking works with any ball type."
  },
  {
    question: "What phones are compatible?",
    answer: "Currently compatible with iPhone 11 or newer (iOS 14+). Android app will be available as our first stretch goal if we hit $500,000 in funding."
  },
  {
    question: "How long does the battery last?",
    answer: "The rechargeable battery lasts 8-10 hours of continuous play. It charges fully in just 2 hours via USB-C and includes auto-sleep mode to conserve power."
  },
  {
    question: "Is it really weatherproof?",
    answer: "Yes! BackyardGolf is IP65 rated, meaning it's protected against dust, rain, and water jets. Perfect for outdoor use in any weather conditions."
  },
  {
    question: "How much space do I need?",
    answer: "Minimum 10 feet, maximum 150 feet (50 yards). Perfect for apartments, backyards, garages, basements, or even office spaces."
  },
  {
    question: "When will I receive my order?",
    answer: "Orders ship within 3-5 business days. We ship worldwide from our US warehouse with tracking provided for all orders."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-gray-900/50 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-900/70 transition-colors"
              >
                <span className="text-lg font-medium">{faq.question}</span>
                <motion.svg
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-5 h-5 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </motion.svg>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-4"
                  >
                    <p className="text-gray-400">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">Still have questions?</p>
          <button className="text-primary hover:text-green-400 font-medium">
            Contact us at support@backyardgolf.com
          </button>
        </div>
      </div>
    </section>
  );
}