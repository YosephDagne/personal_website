"use client";

import { motion } from "framer-motion";

export default function Education() {
  const educationList = [
    {
      degree: "BSc in Software Engineering",
      institution: "Haramaya University",
      year: "2021 - Present",
      location: "Haramaya, Ethiopia",
    },
    {
      degree: "High School Diploma",
      institution: "Wogdie Secondary School",
      year: "2017 - 2020",
      location: "South Wollo, Ethiopia",
    },
  ];

  return (
    <section id="education" className="py-24 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <div className="text-center mb-20">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold 
            bg-linear-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent"
          >
            Education
          </h1>
          <div className="h-1.5 w-28 mx-auto mt-4 rounded-full bg-linear-to-r from-purple-500 to-orange-400"></div>
        </div>

        {/* Cards */}
        <div className="grid gap-12 md:grid-cols-2">
          {educationList.map((edu, index) => (
            <motion.div
              key={index}
              whileHover={{ rotateX: 10, rotateY: -10, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 150, damping: 10 }}
              className="relative bg-white/10 dark:bg-gray-800/30 backdrop-blur-lg
                p-8 rounded-2xl shadow-lg hover:shadow-purple-500/30
                border border-white/20 dark:border-gray-700/40
                hover:border-purple-400/60 transition-all duration-300"
            >
              {/* Gradient Border Glow */}
              <div
                className="absolute inset-0 rounded-2xl border-2 border-transparent 
                bg-linear-to-r from-purple-600/40 to-orange-500/40 opacity-0 
                hover:opacity-100 transition duration-300 pointer-events-none"
              ></div>

              {/* Year Badge */}
              <span
                className="absolute top-4 right-4 px-4 py-1.5 text-sm font-semibold 
                rounded-full bg-purple-100 dark:bg-purple-900/60 text-purple-700 dark:text-purple-300"
              >
                {edu.year}
              </span>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {edu.degree}
              </h3>

              <p className="mt-2 text-gray-700 dark:text-gray-300 text-lg">
                {edu.institution}
              </p>

              <p className="mt-1 text-gray-500 dark:text-gray-400">
                {edu.location}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
