"use client";

import { useState, useRef } from "react";

function NavBar() {
  const [menu, setMenu] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "education", label: "Resume" },
    { id: "services", label: "Services" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const smoothScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const goToSection = (id: string) => {
    setMenu(id);
    setIsMenuOpen(false);
    smoothScroll(id);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-4 py-3 md:px-6 md:py-4 transition-all duration-500 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-800/50 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer hover:scale-105 transition-transform duration-300">
          <span className="text-2xl font-black tracking-tight text-transparent bg-clip-text bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500">
            Yosef
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.id} className="relative group">
              <button
                onClick={() => goToSection(item.id)}
                className={`text-sm font-medium transition-all duration-300 ${
                  menu === item.id
                    ? "text-indigo-600 dark:text-indigo-400 font-bold"
                    : "text-gray-600 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400"
                }`}
              >
                {item.label}
                {/* Animated Underline */}
                <span
                  className={`
                    absolute left-1/2 -bottom-1 
                    h-0.5 w-1/2 rounded-full
                    bg-linear-to-r from-indigo-500 to-purple-500 
                    transition-all duration-300 origin-center
                    group-hover:opacity-100 group-hover:scale-100
                    ${menu === item.id ? "opacity-100 scale-100" : "opacity-0 scale-0"}
                    -translate-x-1/2 
                  `}
                />
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            type="button"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
            className="relative flex h-11 w-11 items-center justify-center"
          >
            <span
              className={`absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-end gap-1.5 transition-all duration-500 ease-in-out transform-gpu ${
                isMenuOpen ? "opacity-0 scale-90" : "opacity-100 scale-100"
              }`}
            >
              <span className="h-0.5 w-8 rounded-full bg-gray-800 dark:bg-gray-200 transition-all duration-500 ease-in-out"></span>
              <span className="h-0.5 w-6 rounded-full bg-gray-800 dark:bg-gray-200 transition-all duration-500 ease-in-out"></span>
              <span className="h-0.5 w-4 rounded-full bg-gray-800 dark:bg-gray-200 transition-all duration-500 ease-in-out"></span>
            </span>

            <span
              className={`absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center transition-all duration-500 ease-in-out transform-gpu ${
                isMenuOpen
                  ? "opacity-100 scale-100 rotate-0"
                  : "opacity-0 scale-90 rotate-45"
              }`}
            >
              <span className="absolute h-0.5 w-7 rounded-full bg-gray-800 dark:bg-gray-200 rotate-45 transition-all duration-500 ease-in-out"></span>
              <span className="absolute h-0.5 w-7 rounded-full bg-gray-800 dark:bg-gray-200 -rotate-45 transition-all duration-500 ease-in-out"></span>
            </span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          ref={menuRef}
          className={`absolute left-0 top-full z-40 w-full md:hidden text-gray-100 transition-all duration-300 ease-out ${
            isMenuOpen
              ? "pointer-events-auto opacity-100 translate-y-0"
              : "pointer-events-none opacity-0 -translate-y-2"
          }`}
        >
          <div className="overflow-hidden rounded-sm border border-white/10 bg-[#020617]/98 shadow-2xl shadow-black/35 backdrop-blur-xl">
            <div className="px-6 pb-8 pt-3">
              <ul className="flex flex-col gap-6">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => {
                        goToSection(item.id);
                      }}
                      className={`w-full text-left text-[22px] font-semibold tracking-tight transition-all duration-300 ${
                        menu === item.id
                          ? "text-white"
                          : "text-gray-100 hover:text-white"
                      }`}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Backdrop */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 z-30 bg-black/35 md:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </div>
    </nav>
  );
}

export default NavBar;
