"use client";

import Image from "next/image";
import my_work_data from "../data/my_work";
import { Github } from "lucide-react";
import { motion } from "framer-motion";

export default function MyWork() {
  return (
    <section id="projects" className="relative py-24 bg-transparent text-gray-100">
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-black bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Projects I have built
          </h2>
          <p className="mt-4 text-gray-400 text-lg font-medium max-w-2xl mx-auto">A selection of projects that showcase my skills and experience</p>
        </div>

        {/* Projects Grid */}
        <div className="flex flex-wrap gap-8 justify-start">
          {my_work_data.map((work, index) => (
            <motion.div
              key={index}
              variants={{
                rest: { rotateX: 0, scale: 1, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)" },
                hover: { rotateX: 12, scale: 1.02, boxShadow: "0px 25px 40px rgba(99, 102, 241, 0.15)" }
              }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
              style={{ perspective: 1200, transformStyle: "preserve-3d" }}
              whileHover="hover"
              initial="rest"
              animate="rest"
              className="group relative rounded-xl overflow-hidden border border-white/10 hover:border-indigo-500/40 transition-colors duration-300 cursor-pointer w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] aspect-4/3"
            >
              {/* Project Image */}
              <Image
                src={work.w_image}
                alt={work.w_name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Hover Overlay */}
              <motion.div
                variants={{
                  rest: { opacity: 0, y: "100%" },
                  hover: { opacity: 1, y: "0%" },
                }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="absolute inset-0 bg-linear-to-t from-black/90 via-black/60 to-transparent flex flex-col justify-end p-6 gap-4"
              >
                {/* Project Name */}
                <h3 className="text-xl font-bold text-white leading-snug">
                  {work.w_name}
                </h3>

                {/* View Project Button */}
                <a
                  href={work.w_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-2 self-start px-5 py-2.5 rounded-full bg-indigo-500/80 hover:bg-indigo-500 backdrop-blur-sm text-white text-sm font-bold transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg"
                >
                  <Github className="w-4 h-4" />
                  View Project
                </a>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
