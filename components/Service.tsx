"use client";

import { motion } from "framer-motion";
import Services_Data from "@/data/service";
import * as LucideIcons from "lucide-react";

export default function Services() {
  return (
    <section
      id="services"
      className="relative flex flex-col items-center gap-12 sm:gap-16 px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-transparent text-gray-100"
    >
      {/* Title */}
      <div className="text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          What I Do
        </h2>
        <p className="mt-4 text-base sm:text-lg text-gray-400 font-medium max-w-2xl mx-auto">
          Here are some of the key services and solutions I specialize in
          delivering
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid w-full max-w-6xl grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 relative z-10">
        {Services_Data.map((service, index) => {
          // Dynamically resolve the Lucide icon component
          const IconComponent = (LucideIcons as any)[service.iconName];

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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
              className="group relative flex h-full flex-col gap-5 p-6 sm:p-8 rounded-xl
                         bg-white/2 dark:bg-white/2 backdrop-blur-md
                         border border-white/10 hover:border-indigo-500/30
                         transition-colors duration-300"
            >
              <div className="flex justify-end items-start">
                {/* Icon */}
                {IconComponent && (
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 group-hover:border-indigo-500/30 transition-colors">
                    <IconComponent className="w-6 h-6 text-indigo-400 group-hover:text-pink-400 transition-colors" />
                  </div>
                )}
              </div>

              {/* Service Name */}
              <h3 className="text-2xl font-bold text-white group-hover:text-transparent bg-clip-text bg-linear-to-r group-hover:from-indigo-500 group-hover:to-pink-500 transition-all duration-300">
                {service.s_name}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-base leading-relaxed">
                {service.s_desc}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
