"use client";

import { useState } from "react";
import Image from "next/image";
import my_work_data from "../data/my_work";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function MyWork() {
  const [visibleProjects, setVisibleProjects] = useState(3);
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setVisibleProjects(showMore ? 3 : my_work_data.length);
    setShowMore(!showMore);
  };

  return (
    <section id="projects" className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-5xl md:text-6xl font-extrabold bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Projects
          </h2>
          <div className="h-1.5 w-28 mx-auto mt-4 rounded-full bg-linear-to-r from-blue-500 to-cyan-400"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {my_work_data.slice(0, visibleProjects).map((work, index) => (
            <motion.a
              key={index}
              href={work.w_link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="group relative bg-gray-100 dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-xl cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-52 w-full">
                <Image
                  src={work.w_image}
                  alt={work.w_name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="text-xs uppercase tracking-wide text-blue-600 dark:text-blue-400">
                  Project {work.w_no}
                </span>

                <h3 className="mt-2 text-xl font-semibold text-gray-900 dark:text-white">
                  {work.w_name}
                </h3>

                <div className="mt-4 inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400">
                  View Details
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>

              {/* Hover Border */}
              <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-blue-500/40 transition-colors duration-300 pointer-events-none"></div>
            </motion.a>
          ))}
        </div>

        {/* Show More */}
        {my_work_data.length > 3 && (
          <div className="mt-14 text-center">
            <motion.button
              onClick={handleShowMore}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 text-white font-medium shadow-md hover:bg-blue-700 transition-colors cursor-pointer"
            >
              {showMore ? "Show Less" : "View More Projects"}
              <ArrowRight
                className={`w-5 h-5 transition-transform ${
                  showMore ? "rotate-180" : ""
                }`}
              />
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
}
