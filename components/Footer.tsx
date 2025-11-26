"use client";

import Image from "next/image";
import { User } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mx-4 md:mx-10 lg:mx-[170px] mt-10 md:mt-20 mb-0 flex flex-col gap-8 md:gap-12 font-serif">
      {/* Logo and Description Section */}
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-12">
        <div className="text-center md:text-left max-w-md">
          <Image
            src={"/full-stack.png"}
            alt="Logo"
            width={80}
            height={40}
            className="mx-auto md:mx-0"
          />
          <p className="mt-4 text-base text-gray-600 dark:text-gray-300 ">
            Full-stack developer transforming visions into digital excellence
            through clean code and innovative solutions.
          </p>
        </div>

        {/* Subscription Form */}
        <form className="flex flex-col md:flex-row items-center gap-4 w-full max-w-lg">
          <div className="flex gap-4 py-3 px-5 rounded-sm bg-gray-600 dark:bg-gray-700 w-full transition-transform duration-300 hover:scale-105 focus-within:ring-1 focus-within:ring-purple-500">
            <User className="w-6 h-6 text-white" />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="bg-transparent text-white placeholder-gray-300 focus:outline-none w-full border-0"
              aria-label="Enter your email"
            />
          </div>
          <button
            type="submit"
            aria-label="Subscribe"
            className="px-6 py-2.5 text-gray-100 bg-linear-to-r from-[#DF8908] to-[#B415FF] rounded-sm transition-transform duration-300 cursor-pointer hover:scale-105 hover:shadow-lg"
          >
            Subscribe
          </button>
        </form>
      </div>

      <hr className="border-gray-600 dark:border-gray-700" />

      {/* Footer Links and Copyright Section */}
      <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left text-sm md:text-base gap-4 md:gap-0 text-gray-600 dark:text-gray-400">
        <p>© {new Date().getFullYear()} Yoseph Dagne. All rights reserved.</p>
        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          <a href="#" className="cursor-pointer hover:underline">
            Terms of Service
          </a>
          <a href="#" className="cursor-pointer hover:underline">
            Privacy Policy
          </a>
          <a href="#contact" className="cursor-pointer hover:underline">
            Connect with me
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
