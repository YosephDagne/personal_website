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
    { name: "React", icon: <SiReact />, color: "text-cyan-400" },
    { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-400" },
    { name: "Next.js", icon: <SiNextdotjs />, color: "text-white" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-teal-400" },
    { name: "Node.js", icon: <SiNodedotjs />, color: "text-green-500" },
    { name: "MongoDB", icon: <SiMongodb />, color: "text-green-400" },
    { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-500" },
    { name: "Git", icon: <SiGit />, color: "text-orange-500" },
    { name: "Express", icon: <SiExpress />, color: "text-gray-400" },
    { name: ".NET", icon: <SiDotnet />, color: "text-purple-500" },
  ];

  return (
    <section className="relative py-24 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      {/* Heading */}
      <div className="relative text-center mb-16 z-10">
        <h1 className="text-5xl md:text-6xl font-extrabold bg-linear-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
          My Skills
        </h1>
        <div className="h-1.5 w-28 mx-auto mt-4 rounded-full bg-linear-to-r from-purple-500 to-orange-400"></div>
        <p className="mt-3 text-gray-700 text-lg">
          Technologies & tools I work with
        </p>
      </div>

      {/* Marquee wrapper */}
      <div className="relative overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee gap-10">
          {[...skills, ...skills].map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              {/* Glass Card */}
              <div className="group relative bg-gray-300 dark:bg-gray-900 backdrop-blur-xl p-6 rounded-xl shadow-lg border border-white/20 dark:border-gray-700/30 transition-all duration-300 hover:shadow-2xl hover:scale-105 cursor-pointer">
                <div
                  className={`text-5xl ${skill.color} transition-transform duration-300 group-hover:scale-110`}
                >
                  {skill.icon}
                </div>
              </div>

              {/* Skill Name */}
              <span className="mt-4 text-gray-800 font-medium text-center dark:text-gray-50">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }

        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradientX 4s ease infinite;
        }

        @keyframes gradientX {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
}
