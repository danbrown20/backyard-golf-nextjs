"use client";

import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import VideoSection from "@/components/VideoSection";
import Navbar from "@/components/Navbar";
import UnderConstruction from "@/components/UnderConstruction";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <UnderConstruction />
      <Navbar />
      <Hero />
      <VideoSection />
      <Features />

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 border-t border-gray-800">
        <p>&copy; 2024 BackyardGolf. All rights reserved.</p>
      </footer>
    </main>
  );
}