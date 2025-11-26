"use client";

import { motion } from "framer-motion";
import {
  SiReact,
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiTypescript,
  SiGit,
  SiExpress,
  SiDotnet,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "React", icon: <SiReact /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "Node.js", icon: <SiNodedotjs /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "Git", icon: <SiGit /> },
    { name: "Express", icon: <SiExpress /> },
    { name: ".NET", icon: <SiDotnet /> },
  ];

  return (
    <section className="relative py-24 bg-linear-to-b from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800 overflow-hidden transition-colors duration-500">
      {/* Heading */}
      <div className="text-center mb-16">
        <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-800 dark:text-white tracking-tight transition-colors duration-500">
          My Skills
        </h1>
        <p className="mt-3 text-gray-600 dark:text-gray-300 text-lg transition-colors duration-500">
          Technologies & tools I work with
        </p>
      </div>

      {/* Marquee wrapper */}
      <div className="overflow-hidden relative">
        <div className="flex whitespace-nowrap animate-marquee gap-10">
          {[...skills, ...skills, ...skills].map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.04 }}
            >
              {/* Card */}
              <div
                className="
                  bg-white/20 dark:bg-gray-700/20 
                  backdrop-blur-xl
                  p-6 rounded-xl shadow-lg hover:shadow-2xl 
                  transition-all duration-300 border border-gray-200/40 dark:border-gray-600/40 
                  flex items-center justify-center
                "
              >
                <div
                  className="
                    text-4xl 
                    text-gray-700 dark:text-white 
                    group-hover:scale-110 
                    transition-transform duration-300
                  "
                >
                  {skill.icon}
                </div>
              </div>

              {/* Skill name */}
              <span className="mt-4 text-gray-800 dark:text-gray-200 font-medium text-center transition-colors duration-500">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CSS Animation */}
      <style>{`
        .animate-marquee {
          animation: marquee 22s linear infinite;
        }

        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </section>
  );
}
