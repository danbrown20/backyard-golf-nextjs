"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function EmailSignup() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSuccess(true);
    setEmail("");

    // Reset success message after 3 seconds
    setTimeout(() => setIsSuccess(false), 3000);
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-900/50 to-background">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4">Light Up Your Game</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the LED golf revolution and get exclusive early bird access
          </p>

          <div className="bg-primary/10 border border-primary/30 rounded-lg p-6 mb-8">
            <p className="text-lg font-semibold text-primary">
              🎯 First 500 backers get special pricing + FREE LED color pack!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-primary focus:outline-none"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 bg-primary text-black font-semibold rounded-lg hover:bg-green-400 disabled:opacity-50 transition-all"
              >
                {isSubmitting ? "Sending..." : "Get Early Access"}
              </button>
            </div>
            {isSuccess && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 text-green-400"
              >
                Success! Check your email for exclusive updates.
              </motion.p>
            )}
          </form>

          <p className="mt-6 text-sm text-gray-500">
            No spam, ever. Just exclusive updates about BackyardGolf.
          </p>
        </motion.div>
      </div>
    </section>
  );
}