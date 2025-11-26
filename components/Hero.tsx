"use client";

import { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  const titles = useMemo(
    () => [
      "Fullstack Web Developer",
      "Node.js & Express Specialist",
      "React & Next.js Specialist",
      "Creative Problem Solver",
    ],
    []
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentFullText = titles[currentIndex];
    let timeout: NodeJS.Timeout;

    if (isTyping) {
      if (currentText.length < currentFullText.length) {
        timeout = setTimeout(() => {
          setCurrentText(currentFullText.slice(0, currentText.length + 1));
        }, 100);
      } else {
        // Wait before deleting
        timeout = setTimeout(() => setIsTyping(false), 2000);
      }
    } else {
      if (currentText.length > 0) {
        // Deleting text
        timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, 50);
      } else {
        // Move to next title asynchronously
        timeout = setTimeout(() => {
          setIsTyping(true);
          setCurrentIndex((prev) => (prev + 1) % titles.length);
        }, 500); // optional small pause before typing next
      }
    }

    return () => clearTimeout(timeout);
  }, [currentText, isTyping, currentIndex, titles]);

  return (
    <div
      id="home"
      className="flex flex-col items-center text-center gap-6 mt-20 px-4 py-8
                 bg-gray-50 dark:bg-gray-900 transition-colors duration-500"
    >
      {/* Profile Image */}
      <div className="relative">
        <Image
          src="/jo2.jpg"
          alt="Yosef Dagne - Fullstack Web Developer"
          width={400}
          height={400} // square for consistent circle
          priority
          className="w-40 h-40 sm:w-48 sm:h-48 md:w-52 md:h-52 lg:w-60 lg:h-60 rounded-full object-cover shadow-xl"
        />
      </div>

      {/* Name */}
      <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-gray-100 mb-4">
        <span className="bg-linear-to-r from-purple-600 to-orange-400 text-transparent bg-clip-text">
          I&apos;m Yosef Dagne
        </span>
      </h1>

      {/* Typewriter Subtitle */}
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-700 dark:text-gray-300 h-12">
        <span className="bg-linear-to-r from-blue-600 to-green-500 text-transparent bg-clip-text">
          {currentText}
          <span className="ml-1 animate-pulse">|</span>
        </span>
      </h2>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-6">
        <AnchorLink
          offset={50}
          href="#contact"
          className="px-6 py-3 sm:px-4 sm:py-2 bg-linear-to-r from-orange-500 to-purple-700 
                     text-white text-lg sm:text-base rounded-full transition-all duration-300 
                     hover:scale-110 shadow-md cursor-pointer border border-transparent 
                     hover:border-white text-center"
        >
          Connect with Me
        </AnchorLink>

        <a
          href="/CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download
          className="px-6 py-3 sm:px-4 sm:py-2 bg-linear-to-r from-blue-500 to-green-500 
                     text-white text-lg sm:text-base rounded-full transition-all duration-300 
                     hover:scale-110 shadow-md cursor-pointer border border-transparent 
                     hover:border-white text-center"
        >
          Download CV
        </a>
      </div>
    </div>
  );
};

export default Hero;
