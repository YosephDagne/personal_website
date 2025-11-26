"use client";

import { useState } from "react";
import Image from "next/image";
import my_work_data from "../data/my_work";
import { ArrowRight } from "lucide-react";

export default function MyWork() {
  const [visibleProjects, setVisibleProjects] = useState(3);
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setVisibleProjects(showMore ? 3 : my_work_data.length);
    setShowMore(!showMore);
  };

  return (
    <section
      id="portfolio"
      className="py-20 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-4">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-linear-to-r from-purple-600 to-orange-500 mb-4">
            My Portfolio
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
            Explore my latest projects and creative works
          </p>
          <div className="h-1 w-24 bg-linear-to-r from-purple-500 to-orange-400 mx-auto rounded-full" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {my_work_data.slice(0, visibleProjects).map((work, index) => (
            <div
              key={index}
              className="group cursor-pointer transform transition-all duration-500 hover:scale-105"
            >
              <a
                href={work.w_link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  {/* Image Container - Decreased height, increased width */}
                  <div className="relative h-64 w-full">
                    <Image
                      src={work.w_image}
                      alt={work.w_name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Content Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-sm font-medium text-orange-400 mb-2 block">
                          Project {work.w_no}
                        </span>
                        <h3 className="text-xl font-semibold mb-2">
                          {work.w_name}
                        </h3>
                        <div className="flex items-center text-sm text-gray-300">
                          View Project
                          <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {my_work_data.length > 3 && (
          <div className="text-center">
            <button
              onClick={handleShowMore}
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-linear-to-r from-purple-600 to-orange-500 text-white font-semibold rounded-full 
                         shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 
                         hover:from-purple-700 hover:to-orange-600 cursor-pointer"
            >
              <span>{showMore ? "Show Less" : "Show More Projects"}</span>
              <ArrowRight
                className={`w-5 h-5 transform transition-transform duration-300 ${
                  showMore ? "rotate-180" : "group-hover:translate-x-1"
                }`}
              />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
