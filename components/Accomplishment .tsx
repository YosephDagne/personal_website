"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Accomplishments() {
  const accomplishments = [
    { value: "4", label: "Months Internship at Ethiopian Airlines" },
    { value: "3+", label: "Projects Completed" },
  ];

  return (
    <section
      id="accomplishments"
      className="flex flex-col items-center gap-16 py-16 px-2 sm:px-8 md:px-16 lg:px-32 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-200"
    >
      <div className="text-center mt-32 max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center bg-linear-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
          Accomplishments
        </h2>

        <div className="h-1.5 w-28 mx-auto mt-4 rounded-full bg-linear-to-r from-purple-500 to-orange-400" />

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 gap-10">
          {accomplishments.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, rotateX: 10 }}
              transition={{ type: "spring", stiffness: 150, damping: 10 }}
              className="p-10 bg-gray-200 dark:bg-gray-800/30 backdrop-blur-xl 
            rounded-2xl shadow-xl border border-white/20 dark:border-gray-700/40 
            hover:border-purple-400/50 hover:shadow-purple-500/20 text-center 
            flex flex-col items-center gap-6"
            >
              {/* Internship logo */}
              {item.label.includes("Internship") && (
                <div className="relative w-40 h-40">
                  <Image
                    src="/Airlineslogo.jpg"
                    alt="Ethiopian Airlines"
                    fill
                    className="object-contain rounded-xl"
                  />
                </div>
              )}

              <p className="text-6xl font-extrabold bg-linear-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
                {item.value}
              </p>

              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
