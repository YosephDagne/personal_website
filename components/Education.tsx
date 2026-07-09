"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Education() {
  const resumeList = [
    {
      num: "01",
      title: "Software Engineering Intern",
      subtitle: "Ethiopian Airlines",
      period: "March 2025 - June 2025",
      location: "Addis Ababa, Ethiopia",
      logo: "/ethiopian_airlines.svg",
      desc: "Gained hands-on industry experience in software development. Contributed to building, debugging, and testing software solutions, collaborating with the development team in an agile environment."
    },
    {
      num: "02",
      title: "BSc in Software Engineering",
      subtitle: "Haramaya University",
      period: "2021 - 2026",
      location: "Haramaya, Ethiopia",
      logo: "/haramaya_university.png",
      desc: "Graduated with a Bachelor of Science degree in Software Engineering. Gained deep knowledge in software architecture, database design, algorithms, and full-stack development."
    },

  ];

  return (
    <section id="education" className="relative py-16 sm:py-24 bg-transparent text-gray-100">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Resume
          </h2>
          <p className="mt-4 text-gray-400 text-lg font-medium max-w-2xl mx-auto">
My academic background and hands-on experience in software development.          </p>
        </div>

        {/* Grid Wrapper */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {resumeList.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              variants={{
                rest: { rotateX: 0, scale: 1, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)" },
                hover: { rotateX: 12, scale: 1.02, boxShadow: "0px 25px 40px rgba(99, 102, 241, 0.15)" }
              }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
              style={{ perspective: 1200, transformStyle: "preserve-3d" }}
              whileHover="hover"
              className="group relative bg-white/2 backdrop-blur-md p-8 rounded-xl border border-white/10 hover:border-indigo-500/30 transition-colors duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Title & Organization */}
              <div>
                {/* Period, Location & Logo row */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <span className="text-sm font-bold text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full w-max">
                      {item.period}
                    </span>
                    <span className="text-sm text-gray-500 font-semibold">
                      {item.location}
                    </span>
                  </div>
                </div>

                {/* Company Logo — full width, no card */}
                {item.logo && (
                  <div className="w-full mb-6">
                    <Image
                      src={item.logo}
                      alt={item.subtitle}
                      width={400}
                      height={160}
                      className="w-full h-40 object-contain"
                    />
                  </div>
                )}

                <h3 className="text-2xl font-bold text-white group-hover:text-transparent bg-clip-text bg-linear-to-r group-hover:from-indigo-500 group-hover:to-pink-500 transition-all duration-300">
                  {item.title}
                </h3>
                
                <p className="mt-2 text-lg text-indigo-400 font-semibold">
                  {item.subtitle}
                </p>
              </div>


            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
