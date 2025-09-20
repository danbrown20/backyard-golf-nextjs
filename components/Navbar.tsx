"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-16 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-gray-800 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary">
              BackyardGolf
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="#features" className="text-gray-300 hover:text-primary px-3 py-2">
                Features
              </Link>
              <Link href="#demo" className="text-gray-300 hover:text-primary px-3 py-2">
                Demo
              </Link>
              <Link href="#contact" className="text-gray-300 hover:text-primary px-3 py-2">
                Contact
              </Link>
              <button className="bg-primary text-black px-4 py-2 rounded-lg font-semibold hover:bg-green-400">
                Get Updates
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="#features" className="text-gray-300 hover:text-primary block px-3 py-2">
              Features
            </Link>
            <Link href="#demo" className="text-gray-300 hover:text-primary block px-3 py-2">
              Demo
            </Link>
            <Link href="#contact" className="text-gray-300 hover:text-primary block px-3 py-2">
              Contact
            </Link>
            <button className="bg-primary text-black px-4 py-2 rounded-lg font-semibold hover:bg-green-400 w-full">
              Get Updates
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}