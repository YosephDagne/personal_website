"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="flex flex-col items-center gap-16 py-16 px-2 sm:px-8 md:px-16 lg:px-32 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-200"
    >
      {/* Title */}
      <div className="text-center mb-20">
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold 
          bg-linear-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent"
        >
          About Me
        </h1>
        <div className="h-1.5 w-28 mx-auto mt-4 rounded-full bg-linear-to-r from-purple-500 to-orange-400" />
      </div>

      {/* Content row */}
      <div className="flex flex-col md:flex-row items-start gap-20 max-w-7xl mx-auto">
        {/* Profile Card */}
        <motion.div
          whileHover={{ scale: 1.03, rotateX: 8, rotateY: -8 }}
          transition={{ type: "spring", stiffness: 150, damping: 12 }}
          className="w-full md:w-1/3 bg-white/10 dark:bg-gray-800/30 backdrop-blur-xl 
          rounded-2xl p-8 shadow-xl border border-white/20 dark:border-gray-700/40 
          hover:shadow-purple-500/20 hover:border-purple-400/50 transition"
        >
          <div className="rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/jo2.jpg"
              width={400}
              height={400}
              alt="Profile"
              className="object-cover w-full h-full"
            />
          </div>

          <p className="mt-6 text-center text-xl font-semibold text-gray-900 dark:text-gray-200">
            Full-Stack Developer
          </p>
        </motion.div>

        {/* About Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex flex-col gap-10 bg-white/10 dark:bg-gray-800/30 
          backdrop-blur-xl p-10 rounded-2xl shadow-xl border border-white/20 
          dark:border-gray-700/40 hover:border-purple-400/50 transition"
        >
          <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl leading-relaxed">
            I am a passionate full-stack developer with experience building
            scalable, responsive, and modern web applications. I love turning
            ideas into efficient, user-friendly digital experiences.
          </p>

          <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl leading-relaxed">
            I focus on writing clean, maintainable code while building systems
            that are optimized for performance and reliability. My work spans
            both front-end and back-end technologies, allowing me to deliver
            end-to-end solutions.
          </p>

          <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl leading-relaxed">
            Beyond coding, I enjoy problem-solving, learning new technologies,
            and working on projects that make an impact.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
