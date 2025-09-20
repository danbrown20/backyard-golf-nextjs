"use client";

import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import VideoSection from "@/components/VideoSection";
import AppShowcase from "@/components/AppShowcase";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import EmailSignup from "@/components/EmailSignup";
import Navbar from "@/components/Navbar";
import UnderConstruction from "@/components/UnderConstruction";
import ProductGallery from "@/components/ProductGallery";
import HowItWorks from "@/components/HowItWorks";
import ComparisonTable from "@/components/ComparisonTable";
import PressSection from "@/components/PressSection";
import StatsSection from "@/components/StatsSection";
import BlogPreview from "@/components/BlogPreview";
import InteractiveDemo from "@/components/InteractiveDemo";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <UnderConstruction />
      <Navbar />
      <Hero />
      <StatsSection />
      <VideoSection />
      <Features />
      <HowItWorks />
      <ProductGallery />
      <InteractiveDemo />
      <AppShowcase />
      <ComparisonTable />
      <Pricing />
      <Testimonials />
      <PressSection />
      <BlogPreview />
      <FAQ />
      <EmailSignup />

      {/* Footer */}
      <footer className="py-12 px-4 text-center text-gray-500 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#features" className="hover:text-primary">Features</a></li>
                <li><a href="#pricing" className="hover:text-primary">Pricing</a></li>
                <li><a href="#demo" className="hover:text-primary">Demo</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/about" className="hover:text-primary">About</a></li>
                <li><a href="/blog" className="hover:text-primary">Blog</a></li>
                <li><a href="/press" className="hover:text-primary">Press Kit</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#faq" className="hover:text-primary">FAQ</a></li>
                <li><a href="/contact" className="hover:text-primary">Contact</a></li>
                <li><a href="/warranty" className="hover:text-primary">Warranty</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Follow Us</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="https://youtube.com/@TheBackYardGolf1" target="_blank" className="hover:text-primary">YouTube</a></li>
                <li><a href="https://twitter.com/backyardgolf" target="_blank" className="hover:text-primary">Twitter</a></li>
                <li><a href="https://instagram.com/backyardgolf" target="_blank" className="hover:text-primary">Instagram</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-800">
            <p className="text-sm">&copy; 2024 BackyardGolf. All rights reserved.</p>
            <div className="mt-4 space-x-4 text-sm">
              <a href="/privacy" className="hover:text-primary">Privacy Policy</a>
              <a href="/terms" className="hover:text-primary">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}