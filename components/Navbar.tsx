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

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 transition-all duration-500 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-800/50 shadow-sm">
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
                onClick={() => {
                  setMenu(item.id);
                  smoothScroll(item.id);
                }}
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
            onClick={() => setIsMenuOpen(true)}
            className="flex flex-col justify-center items-center w-10 h-10 rounded-full bg-gray-100/80 dark:bg-gray-800/80 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors border border-gray-200/50 dark:border-gray-700/50"
          >
            <span
              className={`w-5 h-0.5 bg-gray-800 dark:bg-gray-200 mb-1 rounded-full transition-transform duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <span
              className={`w-5 h-0.5 bg-gray-800 dark:bg-gray-200 mb-1 rounded-full transition-opacity duration-300 ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`w-5 h-0.5 bg-gray-800 dark:bg-gray-200 rounded-full transition-transform duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          ref={menuRef}
          className={`fixed top-0 right-0 w-full sm:w-80 h-screen bg-white/95 dark:bg-gray-900/95 backdrop-blur-2xl z-50 shadow-2xl transition-transform duration-500 ease-in-out border-l border-gray-200/50 dark:border-gray-800/50 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full p-8">
            {/* Mobile Header */}
            <div className="flex justify-between items-center mb-12">
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold bg-linear-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                  Yosef
                </span>
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Mobile Nav */}
            <ul className="flex flex-col gap-4">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      setMenu(item.id);
                      setIsMenuOpen(false);
                      smoothScroll(item.id);
                    }}
                    className={`w-full text-left text-lg font-medium px-4 py-3 rounded-2xl transition-all duration-300 ${
                      menu === item.id
                        ? "text-white bg-linear-to-r from-indigo-500 to-purple-500 shadow-lg shadow-indigo-500/30"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800/50"
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Backdrop */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden transition-opacity duration-500"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </div>
    </nav>
  );
}

export default NavBar;
