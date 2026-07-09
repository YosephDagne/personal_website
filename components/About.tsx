"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative flex flex-col items-center gap-12 sm:gap-16 py-16 sm:py-24 px-4 sm:px-8 md:px-16 lg:px-32 bg-transparent text-gray-100 overflow-hidden"
    >
      {/* Background Ornaments */}
      <div className="absolute -left-40 top-40 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-600/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -right-40 bottom-0 w-96 h-96 bg-purple-500/10 dark:bg-purple-600/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Title */}
      <div className="text-center relative z-10">
        <h2 className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500">
          About Me
        </h2>
      </div>

      {/* Content */}
      <div className="w-full max-w-4xl mx-auto relative z-10">
        {/* About Paragraphs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center gap-6 bg-white/2 backdrop-blur-md p-8 md:p-10 rounded-xl border border-white/10 hover:border-indigo-500/20 transition-all duration-300 relative group"
        >


          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-relaxed">
            Bringing ideas to life through code.
          </h3>

          <p className="text-gray-400 text-lg leading-relaxed">
            I am a passionate full-stack developer with experience building scalable, responsive, and modern web applications. I love turning ideas into efficient, user-friendly digital experiences that live on the web.
          </p>

          <p className="text-gray-400 text-lg leading-relaxed">
            I focus on writing clean, maintainable code while building systems that are optimized for performance and reliability. My work spans both front-end interfaces and back-end architectures, allowing me to deliver robust end-to-end solutions.
          </p>

          <p className="text-gray-400 text-lg leading-relaxed">
            Beyond coding, I enjoy problem-solving, learning new technologies, and collaborating on projects that make a real impact.
          </p>

          <div className="mt-4 flex flex-row flex-wrap gap-4">
            <a
              href="/Yosef_Dagne_Adane_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-3.5 bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-sm sm:text-base font-semibold rounded-lg shadow-lg hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:opacity-90 hover:scale-[1.03] active:scale-95 transition-all duration-200 cursor-pointer whitespace-nowrap"
            >
              View My CV
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
