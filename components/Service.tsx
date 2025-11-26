"use client";

import Image from "next/image";
import Services_Data from "@/data/service";

export default function Services() {
  return (
    <section
      id="services"
      className="flex flex-col items-center gap-16 px-6 md:px-20 py-24 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-200"
    >
      {/* Title */}
      <div className="text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-linear-to-r from-purple-600 to-orange-500">
          My Services
        </h1>
        <div className="h-1 w-24 mx-auto mt-4 rounded-full bg-linear-to-r from-purple-500 to-orange-400" />
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl">
        {Services_Data.map((service, index) => (
          <div
            key={index}
            tabIndex={0}
            role="button"
            aria-label={`Read more about ${service.s_name}`}
            className="flex flex-col justify-center gap-6 p-10 rounded-2xl bg-white dark:bg-gray-800 shadow-xl transition-transform duration-300 cursor-pointer
                       hover:scale-105 hover:shadow-2xl
                       focus:outline-none focus:ring-4 focus:ring-orange-400 focus:ring-opacity-50"
          >
            <h3 className="text-3xl font-semibold text-gray-800 dark:text-gray-200">
              {service.s_no}
            </h3>
            <h2 className="text-4xl font-extrabold bg-clip-text text-transparent bg-linear-to-r from-purple-700 to-orange-400">
              {service.s_name}
            </h2>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              {service.s_desc}
            </p>

            {/* Optional Icon + Read More */}
            <div className="flex items-center gap-3 mt-4 group">
              {service.icon && (
                <Image
                  src={service.icon}
                  width={24}
                  height={24}
                  alt={`${service.s_name} icon`}
                  className="transition-transform duration-300 group-hover:translate-x-2 filter dark:invert"
                />
              )}
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 transition-all duration-300 group-hover:text-orange-400">
                Read More
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
