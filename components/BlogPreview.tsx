"use client";

import { motion } from "framer-motion";

const blogPosts = [
  {
    title: "5 Drills to Perfect Your Short Game",
    excerpt: "Discover professional techniques you can practice with BackyardGolf to dramatically improve your chipping accuracy.",
    author: "Mike Johnson",
    date: "Jan 15, 2025",
    readTime: "5 min read",
    category: "Tips & Tricks",
    image: "TIPS"
  },
  {
    title: "The Science Behind LED Practice",
    excerpt: "How visual targets and color psychology help your brain develop better muscle memory for consistent shots.",
    author: "Dr. Sarah Chen",
    date: "Jan 12, 2025",
    readTime: "7 min read",
    category: "Technology",
    image: "TECH"
  },
  {
    title: "From 20 Handicap to Single Digits",
    excerpt: "One golfer's journey using BackyardGolf to transform their short game in just 3 months.",
    author: "Tom Richards",
    date: "Jan 10, 2025",
    readTime: "4 min read",
    category: "Success Stories",
    image: "STORY"
  }
];

export default function BlogPreview() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">
            Recent Articles
          </h2>
          <p className="text-xl text-gray-300">
            Tips, tricks, and stories from the BackyardGolf community
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="bg-black rounded overflow-hidden border border-gray-900 hover:border-gray-800 transition-all">
                <div className="h-48 bg-gray-950 flex items-center justify-center">
                  <span className="text-xs font-mono text-gray-700">{post.image}</span>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs px-2 py-1 border border-gray-800 text-gray-500 rounded">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500">{post.readTime}</span>
                  </div>

                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-gray-400 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-sm">
                    <div className="text-gray-500">
                      <span className="font-medium">{post.author}</span>
                      <span className="mx-2">·</span>
                      <span>{post.date}</span>
                    </div>
                    <span className="text-gray-600 group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <button className="bg-white text-black px-8 py-3 rounded font-medium hover:bg-gray-100 transition-all">
            View All Articles
          </button>
        </motion.div>
      </div>
    </section>
  );
}