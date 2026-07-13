"use client";

import { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  const titles = useMemo(
    () => [
      "Software Engineering Graduate",
      "Full Stack Web Developer",
      "Open Source Contributor",
      "",
    ],
    [],
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
        }, 500);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentText, isTyping, currentIndex, titles]);

  return (
    <div
      id="home"
      className="relative flex w-full flex-col-reverse lg:flex-row items-center justify-between gap-8 sm:gap-10 lg:gap-16 min-h-[70vh] sm:min-h-[80vh] lg:min-h-[85vh] px-0 py-10 sm:py-16 overflow-hidden"
    >
      {/* Left Column: Text & Buttons */}
      <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left gap-4 sm:gap-6 relative z-10 w-full min-w-0">
        {/* Name and Greeting */}
        <div className="space-y-4">
          <p className="text-2xl font-bold text-indigo-400 font-serif italic">
            Hello,
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-black tracking-tighter leading-[1.1]">
            I&apos;m{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500">
              Yosef Dagne
            </span>
          </h1>
        </div>

        {/* Subtitle with Typewriter */}
        <h2 className="min-h-[2.5rem] w-full text-xl sm:text-2xl md:text-3xl font-medium text-gray-600 dark:text-gray-400">
          A{" "}
          <span className="font-bold text-transparent bg-clip-text bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500">
            {currentText}
          </span>
          <span className="ml-1 animate-pulse text-indigo-500">|</span>
        </h2>

        {/* Action Buttons */}
        <div className="mt-4 flex w-full flex-row flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
          <AnchorLink
            offset={80}
            href="#projects"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-3.5 bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-sm sm:text-base font-semibold rounded-lg shadow-lg hover:shadow-[0_0_30px_rgba(99,102,241,0.45)] hover:opacity-90 hover:scale-[1.03] active:scale-95 transition-all duration-200 cursor-pointer whitespace-nowrap"
          >
            View Projects
          </AnchorLink>

          <AnchorLink
            offset={80}
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-3.5 bg-transparent text-white text-sm sm:text-base font-semibold rounded-lg border border-white/20 hover:border-indigo-500/60 hover:bg-white/5 hover:scale-[1.03] active:scale-95 transition-all duration-200 cursor-pointer whitespace-nowrap"
          >
            Hire Me
          </AnchorLink>
        </div>
      </div>

      {/* Right Column: Profile Image */}
      <div className="flex-1 flex justify-center items-center relative z-10 w-full max-w-[220px] sm:max-w-[280px] md:max-w-[340px] lg:max-w-[420px] aspect-square mb-2 lg:mb-0">
        <div className="w-full h-full relative rounded-xl overflow-hidden shadow-[0_0_50px_rgba(99,102,241,0.15)] border border-white/10 p-3 bg-white/2 backdrop-blur-md animate-fade-in-up">
          <div className="w-full h-full relative rounded-xl overflow-hidden">
            <Image
              src="/profile.jpg"
              fill
              alt="Yosef Dagne"
              priority
              sizes="(max-width: 640px) 220px, (max-width: 1024px) 340px, 420px"
              className="object-cover transition-transform duration-700 hover:scale-110"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
