"use client";

import Image from "next/image";
import my_work_data from "../data/my_work";

import { motion } from "framer-motion";

export default function MyWork() {
  return (
    <section
      id="projects"
      className="relative py-16 sm:py-24 bg-transparent text-gray-100"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="mb-12 sm:mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Projects I have built
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-400 font-medium max-w-2xl mx-auto">
            A selection of projects that showcase my skills and experience
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {my_work_data.map((work, index) => (
            <motion.div
              key={index}
              variants={{
                rest: {
                  rotateX: 0,
                  scale: 1,
                  boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)",
                },
                hover: {
                  rotateX: 12,
                  scale: 1.02,
                  boxShadow: "0px 25px 40px rgba(99, 102, 241, 0.15)",
                },
              }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
              style={{ perspective: 1200, transformStyle: "preserve-3d" }}
              whileHover="hover"
              initial="rest"
              animate="rest"
              className="group relative h-full min-h-[260px] overflow-hidden rounded-xl border border-white/10 bg-white/5 hover:border-indigo-500/40 transition-colors duration-300 cursor-pointer w-full aspect-[4/3]"
            >
              {/* Project Image */}
              <Image
                src={work.w_image}
                alt={work.w_name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Hover Overlay */}
              <motion.div
                variants={{
                  rest: { opacity: 0, y: "100%" },
                  hover: { opacity: 1, y: "0%" },
                }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="absolute inset-0 bg-linear-to-t from-black/90 via-black/60 to-transparent flex flex-col justify-end p-5 sm:p-6 gap-4"
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
                  className="inline-flex max-w-full items-center self-start px-5 py-2.5 rounded-full bg-indigo-500/80 hover:bg-indigo-500 backdrop-blur-sm text-white text-sm font-bold transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg"
                >
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
