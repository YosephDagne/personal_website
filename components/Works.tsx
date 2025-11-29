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
    <section
      id="projects"
      className="py-24 bg-gray-50 dark:bg-gray-900"
    >
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold bg-linear-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent mb-4">
             Projects{" "}
          </h1>
          <div className="h-1.5 w-28 mx-auto rounded-full bg-linear-to-r from-purple-500 to-orange-400"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6 mt-6">
            Explore my latest projects and creative works
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
          {my_work_data.slice(0, visibleProjects).map((work, index) => (
            <motion.a
              key={index}
              href={work.w_link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, rotateX: 5, rotateY: -5 }}
              transition={{ type: "spring", stiffness: 150, damping: 12 }}
              className="relative block rounded-2xl shadow-2xl bg-gray-200 dark:bg-gray-800/30 backdrop-blur-lg overflow-hidden cursor-pointer  dark:border-gray-700/40 hover:shadow-2xl "
            >
              {/* Project Image */}
              <div className="relative h-56 w-full ">
                <Image
                  src={work.w_image}
                  alt={work.w_name}
                  fill
                  className="object-cover hover:bg-gray-400 hover:shadow-2xl "
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-0 hover:opacity-70 transition-opacity duration-300"></div>

                {/* Overlay Text */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-6 hover:translate-y-0 transition-transform duration-300">
                  <span className="text-sm font-medium text-orange-700 mb-2 block">
                    Project {work.w_no}
                  </span>
                  <h3 className="text-xl font-semibold mb-2 text-green-600">
                    {work.w_name}
                  </h3>
                  <div className="flex items-center text-sm text-blue-600">
                    View Project
                    <ArrowRight className="w-4 h-4 ml-2 transform transition-transform duration-300 hover:translate-x-1" />
                  </div>
                </div>
              </div>

              {/* Glow Gradient Border */}
              <span className="absolute inset-0 rounded-3xl border-2 border-transparent bg-linear-to-r from-purple-600/30 to-orange-500/30 opacity-0 hover:opacity-100 pointer-events-none transition-all duration-300"></span>
            </motion.a>
          ))}
        </div>

        {/* Show More Button */}
        {my_work_data.length > 3 && (
          <div className="text-center">
            <motion.button
              onClick={handleShowMore}
              whileHover={{ scale: 1.05 }}
              className="group relative inline-flex items-center gap-3 px-2 py-3 bg-linear-to-r from-purple-600 to-orange-800 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:from-purple-700 hover:to-orange-600 cursor-pointer hover:border"
            >
              <span>{showMore ? "Show Less" : "Show More Projects"}</span>
              <ArrowRight
                className={`w-5 h-5 transform transition-transform duration-300 ${
                  showMore ? "rotate-180" : "group-hover:translate-x-1"
                }`}
              />
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
}
