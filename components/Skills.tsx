"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  SiHtml5,
  SiCss3,
  SiPython,
  SiPostgresql,
  SiDotnet,
  SiGithub,
  SiPostman,
  SiFigma,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { DiMsqlServer } from "react-icons/di";
import { TbBrandVscode } from "react-icons/tb";

/* -------------------------------------------------------------------------- */
/*                                  Types                                     */
/* -------------------------------------------------------------------------- */

type Proficiency = "Expert" | "Advanced" | "Intermediate";
type Category =
  | "All"
  | "Frontend"
  | "Backend"
  | "Databases"
  | "Languages"
  | "Tools";

interface Skill {
  name: string;
  icon: React.ReactNode;
  color: string;
  glow: string;
  category: Exclude<Category, "All">;
  proficiency: Proficiency;
  tooltip: string;
}

/* -------------------------------------------------------------------------- */
/*                              Skill Data                                    */
/* -------------------------------------------------------------------------- */

const ALL_SKILLS: Skill[] = [
  // ── Frontend ──────────────────────────────────────────────────────────────
  {
    name: "React",
    icon: <SiReact />,
    color: "text-cyan-400",
    glow: "rgba(34,211,238,0.15)",
    category: "Frontend",
    proficiency: "Expert",
    tooltip: "Built SPAs and dashboards with hooks, context, and React Query",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs />,
    color: "text-white",
    glow: "rgba(255,255,255,0.1)",
    category: "Frontend",
    proficiency: "Expert",
    tooltip: "SSR, SSG, App Router — this portfolio is built with Next.js",
  },
  {
    name: "HTML5",
    icon: <SiHtml5 />,
    color: "text-orange-500",
    glow: "rgba(249,115,22,0.15)",
    category: "Frontend",
    proficiency: "Expert",
    tooltip: "Semantic, accessible markup for all projects",
  },
  {
    name: "CSS3",
    icon: <SiCss3 />,
    color: "text-blue-400",
    glow: "rgba(96,165,250,0.15)",
    category: "Frontend",
    proficiency: "Expert",
    tooltip: "Flexbox, Grid, animations, and responsive layouts",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    color: "text-teal-300",
    glow: "rgba(94,234,212,0.15)",
    category: "Frontend",
    proficiency: "Advanced",
    tooltip: "Utility-first styling across React and Next.js projects",
  },
  // ── Languages ─────────────────────────────────────────────────────────────
  {
    name: "JavaScript",
    icon: <SiJavascript />,
    color: "text-yellow-400",
    glow: "rgba(250,204,21,0.15)",
    category: "Languages",
    proficiency: "Expert",
    tooltip: "ES6+, async/await, DOM manipulation, and Node environments",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
    color: "text-blue-500",
    glow: "rgba(59,130,246,0.15)",
    category: "Languages",
    proficiency: "Advanced",
    tooltip: "Type-safe codebases, interfaces, generics, and strict mode",
  },
  {
    name: "Python",
    icon: <SiPython />,
    color: "text-yellow-500",
    glow: "rgba(234,179,8,0.15)",
    category: "Languages",
    proficiency: "Advanced",
    tooltip: "Scripting, automation, data processing, and backend APIs",
  },
  {
    name: "Java",
    icon: <FaJava />,
    color: "text-orange-600",
    glow: "rgba(234,88,12,0.15)",
    category: "Languages",
    proficiency: "Intermediate",
    tooltip: "OOP fundamentals, data structures, and university coursework",
  },
  // ── Backend ───────────────────────────────────────────────────────────────
  {
    name: "Node.js",
    icon: <SiNodedotjs />,
    color: "text-green-500",
    glow: "rgba(34,197,94,0.15)",
    category: "Backend",
    proficiency: "Advanced",
    tooltip: "REST APIs, middleware, authentication, and real-time apps",
  },
  {
    name: "Express",
    icon: <SiExpress />,
    color: "text-gray-300",
    glow: "rgba(209,213,219,0.1)",
    category: "Backend",
    proficiency: "Advanced",
    tooltip: "Routing, middleware chains, and RESTful API development",
  },
  {
    name: ".NET",
    icon: <SiDotnet />,
    color: "text-purple-500",
    glow: "rgba(168,85,247,0.15)",
    category: "Backend",
    proficiency: "Intermediate",
    tooltip: "ASP.NET Core APIs and C# backend development",
  },
  // ── Databases ─────────────────────────────────────────────────────────────
  {
    name: "MongoDB",
    icon: <SiMongodb />,
    color: "text-green-400",
    glow: "rgba(74,222,128,0.15)",
    category: "Databases",
    proficiency: "Advanced",
    tooltip: "Document modeling, aggregations, and Mongoose ODM",
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql />,
    color: "text-sky-400",
    glow: "rgba(56,189,248,0.15)",
    category: "Databases",
    proficiency: "Advanced",
    tooltip: "Relational schema design, complex queries, and indexing",
  },
  {
    name: "MS SQL Server",
    icon: <DiMsqlServer />,
    color: "text-red-500",
    glow: "rgba(239,68,68,0.15)",
    category: "Databases",
    proficiency: "Intermediate",
    tooltip: "T-SQL queries, stored procedures, and database design",
  },
  // ── Tools ─────────────────────────────────────────────────────────────────
  {
    name: "Git",
    icon: <SiGit />,
    color: "text-orange-500",
    glow: "rgba(249,115,22,0.15)",
    category: "Tools",
    proficiency: "Expert",
    tooltip: "Branching, rebasing, pull requests, and collaborative workflows",
  },
  {
    name: "GitHub",
    icon: <SiGithub />,
    color: "text-white",
    glow: "rgba(255,255,255,0.08)",
    category: "Tools",
    proficiency: "Expert",
    tooltip: "CI/CD with Actions, code reviews, and project management",
  },
  {
    name: "VS Code",
    icon: <TbBrandVscode />,
    color: "text-blue-400",
    glow: "rgba(96,165,250,0.15)",
    category: "Tools",
    proficiency: "Expert",
    tooltip: "Primary editor with custom extensions, themes, and keybindings",
  },
  {
    name: "Postman",
    icon: <SiPostman />,
    color: "text-orange-400",
    glow: "rgba(251,146,60,0.15)",
    category: "Tools",
    proficiency: "Advanced",
    tooltip: "API testing, collections, and environment management",
  },
  {
    name: "Figma",
    icon: <SiFigma />,
    color: "text-pink-400",
    glow: "rgba(244,114,182,0.15)",
    category: "Tools",
    proficiency: "Intermediate",
    tooltip: "UI/UX wireframes, prototyping, and design handoff",
  },
];

const CATEGORIES: Category[] = [
  "All",
  "Frontend",
  "Languages",
  "Backend",
  "Databases",
  "Tools",
];

/* -------------------------------------------------------------------------- */
/*                              Component                                     */
/* -------------------------------------------------------------------------- */

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filtered =
    activeCategory === "All"
      ? ALL_SKILLS
      : ALL_SKILLS.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="relative py-16 sm:py-24 bg-transparent overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[500px] bg-purple-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4">

        {/* ── Heading ─────────────────────────────────────────────────────── */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-black bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            My Tech Stack
          </h2>
          <p className="mt-4 text-gray-400 text-lg font-medium max-w-2xl mx-auto">
           Technologies and tools I use to transform ideas into scalable, user-focused software solutions.
          </p>
        </motion.div>

        {/* ── Category Filter Pills ────────────────────────────────────────── */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 }}
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`relative px-5 py-2 rounded-lg text-sm font-semibold border transition-all duration-250 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
                activeCategory === cat
                  ? "bg-indigo-500/20 border-indigo-500/50 text-indigo-300 shadow-[0_0_20px_rgba(99,102,241,0.2)]"
                  : "bg-white/3 border-white/10 text-gray-400 hover:border-white/25 hover:text-gray-200"
              }`}
            >
              {cat}
              {activeCategory === cat && (
                <motion.span
                  layoutId="active-pill"
                  className="absolute inset-0 rounded-lg bg-indigo-500/10 border border-indigo-500/30"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* ── Skill Grid ──────────────────────────────────────────────────── */}
        <AnimatePresence mode="popLayout">
          <motion.div
            key={activeCategory}
            className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-8 lg:grid-cols-10 gap-2 sm:gap-4"
          >
            {filtered.map((skill, index) => {
              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.88, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.88, y: 20 }}
                  transition={{ duration: 0.3, delay: index * 0.04 }}
                  variants={{
                    rest: { rotateX: 0, scale: 1, boxShadow: "0px 4px 8px rgba(0,0,0,0.2)" },
                    hover: { rotateX: 12, scale: 1.05, boxShadow: `0px 15px 30px ${skill.glow}` },
                  }}
                  whileHover="hover"
                  style={{ perspective: 1000, transformStyle: "preserve-3d" }}
                  className="group relative flex flex-col items-center justify-center gap-2 p-2 rounded-xl
                             bg-white/2 backdrop-blur-md border border-white/8
                             hover:border-white/20 transition-colors duration-250 cursor-default
                             aspect-square w-full max-w-[90px] mx-auto"
                >
                  {/* Ambient glow layer */}
                  <div
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{ background: `radial-gradient(circle at 50% 30%, ${skill.glow}, transparent 70%)` }}
                  />

                  {/* Icon */}
                  <div
                    className={`relative z-10 text-3xl sm:text-4xl transition-transform duration-300 group-hover:scale-110 ${skill.color}`}
                  >
                    {skill.icon}
                  </div>

                  {/* Name */}
                  <span className="relative z-10 text-[10px] sm:text-xs font-bold text-gray-400 group-hover:text-gray-200 transition-colors duration-300 text-center leading-tight">
                    {skill.name}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
