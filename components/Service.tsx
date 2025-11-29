"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Services_Data from "@/data/service";

export default function Services() {
  return (
    <section
      id="services"
      className="flex flex-col items-center gap-16 px-6 md:px-20 py-24 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-200"
    >
      {/* Title */}
      <div className="text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold bg-linear-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
          Services
        </h1>
        <div className="h-1.5 w-28 mx-auto mt-4 rounded-full bg-linear-to-r from-purple-500 to-orange-400"></div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl">
        {Services_Data.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50, rotateY: -10 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
            viewport={{ once: true }}
            whileHover={{
              rotateY: 10,
              rotateX: 5,
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(128, 90, 213, 0.3)",
            }}
            transition={{ type: "spring", stiffness: 150, damping: 12 }}
            tabIndex={0}
            role="button"
            aria-label={`Read more about ${service.s_name}`}
            className="relative flex flex-col justify-center gap-6 p-10 rounded-2xl
                       bg-gray-200 dark:bg-gray-800/40 backdrop-blur-lg
                       border border-white/20 dark:border-gray-700/40
                       shadow-2xl hover:shadow-purple-500/30 cursor-pointer
                       transition-all duration-300 focus:outline-none focus:ring-4
                       focus:ring-orange-400 focus:ring-opacity-50"
          >
            {/* Service Number */}
            <h3 className="text-3xl font-semibold text-gray-800 dark:text-gray-200">
              {service.s_no}
            </h3>

            {/* Service Name */}
            <h2 className="text-4xl font-extrabold bg-linear-to-r from-purple-700 to-orange-400 bg-clip-text text-transparent">
              {service.s_name}
            </h2>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              {service.s_desc}
            </p>

            {/* Icon + Read More */}
            <div className="flex items-center gap-3 mt-4 group">
              {service.icon && (
                <Image
                  src={service.icon}
                  width={28}
                  height={28}
                  alt={`${service.s_name} icon`}
                  className="transition-transform duration-300 group-hover:translate-x-2 filter dark:invert"
                />
              )}
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 transition-all duration-300 group-hover:text-orange-400">
                Read More
              </p>
            </div>

            {/* Glowing Gradient Border */}
            <span
              className="absolute inset-0 rounded-3xl border-2 border-transparent 
              bg-linear-to-r from-purple-600/40 to-orange-500/40 opacity-0 
              hover:opacity-100 transition duration-300 pointer-events-none"
            ></span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
