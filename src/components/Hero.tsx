"use client"; // This tells Next.js that this component runs on the client side (in the browser).

import React, { useEffect, useRef } from "react";
import Image from "next/image"; // Import the Image component from Next.js for optimized images.
import { Button } from "@/components/ui/button";
import Link from "next/link"; // Import the Link component from Next.js for client-side navigation.

/**
 * - When the page loads, we see a big title, a description, and two buttons.
 * - The image is tilted slightly to look 3D.
 * - As we scroll down, the image straightens out and moves down a bit, creating a cool effect.
 */
const HeroSection = () => {
  // Create a reference (imageRef) to track the image container div.
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const imageElement = imageRef.current; // Get the image container div using the ref.

    if (!imageElement) return; // If the image container doesn't exist, stop here.

    // This function runs every time the user scrolls.
    const handleScroll = () => {
      const scrollPosition = window.scrollY; // Get how far the user has scrolled.
      const scrollThreshold = 100; // Set a scroll threshold (100 pixels).

      // If the user has scrolled more than 100 pixels:
      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add("scrolled"); // Add the "scrolled" class to the image container.
      } else {
        imageElement.classList.remove("scrolled"); // Otherwise, remove the "scrolled" class.
      }
    };

    // Add a scroll event listener to the window.
    window.addEventListener("scroll", handleScroll);

    // Cleanup: Remove the scroll event listener when the component is unmounted.
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="pt-40 pb-20 px-4 bg-gradient-to-b from-blue-50 via-white to-white">
      <div className="container mx-auto text-center">
        {/* Main title with a gradient effect */}
        <h1 className="text-5xl md:text-7xl lg:text-[100px] pb-6 gradient-title font-bold bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 bg-clip-text text-transparent">
          Manage Your Finances <br /> with AI Intelligence
        </h1>

        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          FinChat is your intelligent financial companion. Track expenses, manage budgets, scan receipts, and get AI-powered insights in real-time. Transform your financial life today.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <Link href="/dashboard">
            <Button size="lg" className="px-8 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white">
              Get Started Free
            </Button>
          </Link>
          <a href="#features">
            <Button size="lg" variant="outline" className="px-8">
              Learn More
            </Button>
          </a>
        </div>

        {/* Image container with a 3D effect */}
        <div className="hero-image-wrapper mt-5">
          <div ref={imageRef} className="hero-image">
            {/* Image of the dashboard preview */}
            <Image
              src="/banner.png"
              width={1280}
              height={720}
              alt="FinChat Dashboard Preview"
              className="rounded-2xl shadow-2xl border border-blue-200 mx-auto hover:shadow-3xl transition-shadow"
              priority // Load this image with high priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
