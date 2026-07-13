"use client";

import { Copyright } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative z-10 py-8 sm:py-10 text-center text-base sm:text-lg text-gray-500">
      <hr className="border-white/10 mb-6 sm:mb-8 max-w-7xl mx-auto" />

      <div className="flex flex-wrap items-center justify-center gap-1.5 text-gray-400 px-4">
        <Copyright className="w-4 h-4 text-indigo-400" />
        <span>2026 build by Yosef Dagne</span>
      </div>
    </footer>
  );
};

export default Footer;
