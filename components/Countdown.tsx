"use client";

import { useState, useEffect } from "react";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set your launch date here
    const launchDate = new Date('2026-02-01T00:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = launchDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-4 justify-center my-8">
      <div className="text-center">
        <div className="bg-gray-900 px-4 py-2 rounded-lg">
          <span className="text-3xl font-bold text-primary">
            {String(timeLeft.days).padStart(2, '0')}
          </span>
        </div>
        <p className="text-sm text-gray-500 mt-1">Days</p>
      </div>
      <div className="text-center">
        <div className="bg-gray-900 px-4 py-2 rounded-lg">
          <span className="text-3xl font-bold text-primary">
            {String(timeLeft.hours).padStart(2, '0')}
          </span>
        </div>
        <p className="text-sm text-gray-500 mt-1">Hours</p>
      </div>
      <div className="text-center">
        <div className="bg-gray-900 px-4 py-2 rounded-lg">
          <span className="text-3xl font-bold text-primary">
            {String(timeLeft.minutes).padStart(2, '0')}
          </span>
        </div>
        <p className="text-sm text-gray-500 mt-1">Minutes</p>
      </div>
      <div className="text-center">
        <div className="bg-gray-900 px-4 py-2 rounded-lg">
          <span className="text-3xl font-bold text-primary">
            {String(timeLeft.seconds).padStart(2, '0')}
          </span>
        </div>
        <p className="text-sm text-gray-500 mt-1">Seconds</p>
      </div>
    </div>
  );
}