"use client";

import { motion } from "framer-motion";

const tournaments = [
  {
    title: "Weekly League Play",
    format: "Season-long competition",
    details: [
      "8-week seasons",
      "Play from home on your schedule",
      "Submit scores via app",
      "Handicap system for fair play",
      "Prizes for top 3 finishers"
    ],
    entry: "Free with product purchase",
    prizes: "BackyardGolf merchandise"
  },
  {
    title: "Monthly Challenges",
    format: "Skill-based competitions",
    details: [
      "New challenge each month",
      "Distance accuracy tests",
      "Speed rounds",
      "Trick shot competitions",
      "Global leaderboard rankings"
    ],
    entry: "$5 per challenge",
    prizes: "$500 prize pool"
  },
  {
    title: "BackyardGolf Championship",
    format: "Annual tournament",
    details: [
      "Qualifier rounds from home",
      "Regional semi-finals",
      "National finals event",
      "Live streaming coverage",
      "Pro golfer appearances"
    ],
    entry: "$25 qualifier fee",
    prizes: "$10,000 grand prize"
  },
  {
    title: "Corporate Tournaments",
    format: "Team building events",
    details: [
      "Custom company leagues",
      "Team competitions",
      "Virtual or in-person formats",
      "Branded leaderboards",
      "Employee engagement tracking"
    ],
    entry: "Contact for pricing",
    prizes: "Customizable"
  }
];

const upcomingEvents = [
  { name: "Spring Classic", date: "March 2026", status: "Registration Opens Soon" },
  { name: "Summer Showdown", date: "June 2026", status: "Planning Phase" },
  { name: "Fall Championship", date: "September 2026", status: "Qualifier Dates TBA" },
  { name: "Winter League", date: "December 2026", status: "Indoor Season" }
];

export default function TournamentFormats() {
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
            Tournaments & Competitions
          </h2>
          <p className="text-xl text-gray-300">
            Compete locally, win globally
          </p>
        </motion.div>

        {/* Tournament Types */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {tournaments.map((tournament, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-950 border border-gray-900 rounded p-6"
            >
              <h3 className="text-xl font-bold text-white mb-2">{tournament.title}</h3>
              <p className="text-sm text-gray-500 mb-4">{tournament.format}</p>

              <ul className="space-y-1 mb-4">
                {tournament.details.map((detail, idx) => (
                  <li key={idx} className="text-sm text-gray-400 flex items-start gap-2">
                    <span className="text-gray-600">•</span>
                    {detail}
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-gray-800">
                <div className="flex justify-between text-sm">
                  <div>
                    <span className="text-gray-500">Entry: </span>
                    <span className="text-white">{tournament.entry}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Prizes: </span>
                    <span className="text-white">{tournament.prizes}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Upcoming Events */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gray-950 border border-gray-900 rounded p-8"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">2026 Tournament Schedule</h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="text-center p-4 bg-black border border-gray-800 rounded"
              >
                <div className="text-xs font-mono text-gray-600 mb-1">{event.date}</div>
                <h4 className="font-bold text-white mb-2">{event.name}</h4>
                <span className="text-xs text-gray-500">{event.status}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <h3 className="text-xl font-bold mb-4">Ready to Compete?</h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Join thousands of players worldwide in BackyardGolf tournaments.
            Practice at home, compete globally, win real prizes.
          </p>
          <button className="bg-white text-black px-8 py-3 rounded font-medium hover:bg-gray-100 transition-all">
            Join Tournament Waitlist
          </button>
        </motion.div>
      </div>
    </section>
  );
}