"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Mike Johnson",
    role: "Scratch Golfer",
    content: "This completely changed my short game. Being able to practice at night with the LED mode is a game-changer. My chipping accuracy improved 40% in just 3 weeks!",
    rating: 5
  },
  {
    name: "Sarah Chen",
    role: "Weekend Warrior",
    content: "Finally, a practice tool that's actually fun! My kids love the LED lights and now we practice together every evening. Best golf investment I've made.",
    rating: 5
  },
  {
    name: "Tom Martinez",
    role: "Golf Coach",
    content: "I recommend BackyardGolf to all my students. The accuracy tracking helps them understand their patterns and the app makes practice addictive. Brilliant product!",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-900/30 to-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          What Golfers Are Saying
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900/50 p-6 rounded-lg border border-gray-800"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>

              <p className="text-gray-300 mb-6 italic">
                "{testimonial.content}"
              </p>

              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-4xl font-bold text-primary">10K+</p>
            <p className="text-gray-400">Happy Golfers</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-primary">4.9</p>
            <p className="text-gray-400">Average Rating</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-primary">2M+</p>
            <p className="text-gray-400">Shots Tracked</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-primary">35%</p>
            <p className="text-gray-400">Avg. Improvement</p>
          </div>
        </div>
      </div>
    </section>
  );
}