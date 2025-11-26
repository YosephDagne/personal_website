"use client";

import { useState, useRef } from "react";
import { Flame } from "lucide-react";
import ThemeToggle from "../providers/ThemeToggle";

function NavBar() {
  const [menu, setMenu] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
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
    <div className="w-full flex items-center justify-between px-6 py-3 z-50 transition-all duration-500 bg-gray-100 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-md">
      {/* Logo */}
      <div className="flex items-center gap-2 cursor-pointer hover:scale-105 transition-transform duration-300">
        <Flame className="w-20 h-10 text-orange-500" />
        <span className="text-2xl font-bold text-orange-500 dark:text-orange-400 bg-clip-text bg-linear-to-r from-orange-400 to-amber-500">
          J
        </span>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-10">
        {navItems.map((item) => (
          <li key={item.id} className="relative group">
            <button
              onClick={() => {
                setMenu(item.id);
                smoothScroll(item.id);
              }}
              className={`text-gray-800 dark:text-gray-200 font-medium px-3 py-2 transition-all duration-300 ${
                menu === item.id
                  ? "text-orange-500 font-semibold"
                  : "hover:text-orange-400 hover:scale-105"
              }`}
            >
              {item.label}
              {/* Animated Gradient Underline */}
              <span
                className={`absolute left-1/2 bottom-0 w-0.5 h-1 rounded-full bg-linear-to-r from-orange-400 to-amber-400 transition-all duration-300 group-hover:w-full ${
                  menu === item.id ? "w-full" : ""
                }`}
              ></span>
            </button>
          </li>
        ))}
      </ul>

      {/* Right Controls */}
      <div className="flex items-center gap-4 md:gap-6">
        <ThemeToggle />

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsMenuOpen(true)}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors shadow-sm"
        >
          <span
            className={`w-6 h-0.5 bg-gray-800 dark:bg-gray-200 mb-1.5 rounded-full transition-transform duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-gray-800 dark:bg-gray-200 mb-1.5 rounded-full transition-opacity duration-300 ${
              isMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-gray-800 dark:bg-gray-200 rounded-full transition-transform duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 w-full max-w-xs h-full bg-white dark:bg-gray-900 backdrop-blur-xl z-50 shadow-2xl transition-transform duration-500 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-6">
          {/* Mobile Header */}
          <div className="flex justify-between items-center mb-10">
            <div className="flex items-center gap-2 cursor-pointer">
              <Flame className="w-10 h-10 text-orange-500" />
              <span className="text-lg font-bold bg-linear-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                J
              </span>
            </div>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
            >
              ✕
            </button>
          </div>

          {/* Mobile Nav */}
          <ul className="flex flex-col gap-6">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => {
                    setMenu(item.id);
                    setIsMenuOpen(false);
                    smoothScroll(item.id);
                  }}
                  className={`text-xl font-medium px-4 py-3 rounded-xl transition-all duration-300 flex items-center justify-center ${
                    menu === item.id
                      ? "text-white bg-linear-to-r from-orange-500 to-amber-500 shadow-lg"
                      : "text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 hover:scale-105"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Theme Toggle */}
          <div className="mt-auto pt-8 border-t border-gray-200 dark:border-gray-800 flex justify-center">
            <ThemeToggle />
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </div>
  );
}

export default NavBar;
