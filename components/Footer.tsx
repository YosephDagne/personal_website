"use client";

import { Copyright } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative z-10 py-10 text-center text-xl text-gray-500">
      <hr className="border-white/10 mb-8 max-w-7xl mx-auto" />

      <div className="flex items-center justify-center gap-1.5 text-gray-400">
        <Copyright className="w-4 h-4 text-indigo-400" />
        <span>2026 build by Yosef Dagne</span>
      </div>
    </footer>
  );
};

export default Footer;
