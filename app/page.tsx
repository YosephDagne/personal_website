"use client";
import { motion, HTMLMotionProps } from "framer-motion";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Services from "@/components/Service";
import Works from "@/components/Works";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Accomplishments from "@/components/Accomplishments";
import SectionDivider from "@/components/SectionDivider";

const fadeInUp: HTMLMotionProps<"section"> = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6, ease: "easeOut" }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-500 overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Page container */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 pt-2">
        {/* Hero Section */}
        <motion.section className="mb-12 sm:mb-16" {...fadeInUp}>
          <Hero />
        </motion.section>

        {/* Skills Section */}
        <motion.section className="mb-12 sm:mb-16 relative" {...fadeInUp}>
          <SectionDivider colorClass="from-transparent via-blue-800 to-transparent dark:via-blue-800" />
          <Skills />
        </motion.section>

        {/* About Section */}
        <motion.section className="mb-12 sm:mb-16 relative" {...fadeInUp}>
          <SectionDivider colorClass="from-transparent via-blue-800 to-transparent dark:via-blue-900" />
          <About />
        </motion.section>
        
        <motion.section className="mb-12 sm:mb-16 relative" {...fadeInUp}>
          <SectionDivider colorClass="from-transparent via-blue-800 to-transparent dark:via-blue-600" />
          <Accomplishments />
        </motion.section>

        {/* Services Section */}
        <motion.section className="mb-12 sm:mb-16 relative" {...fadeInUp}>
          <SectionDivider colorClass="from-transparent via-sky-900 to-transparent dark:via-sky-600" />
          <Services />
        </motion.section>

        {/* Works Section */}
        <motion.section className="mb-12 sm:mb-16 relative" {...fadeInUp}>
          <SectionDivider colorClass="from-transparent via-cyan-700 to-transparent dark:via-cyan-600" />
          <Works />
        </motion.section>

        {/* Education Section */}
        <motion.section className="mb-12 sm:mb-16 relative" {...fadeInUp}>
          <SectionDivider colorClass="from-transparent via-blue-700 to-transparent dark:via-blue-600" />
          <Education />
        </motion.section>

        {/* Contact Section */}
        <motion.section className="mb-12 sm:mb-16 relative" {...fadeInUp}>
          <SectionDivider colorClass="from-transparent via-blue-800 to-transparent dark:via-blue-600" />
          <Contact />
        </motion.section>

        {/* Footer Section */}
        <motion.section className="relative" {...fadeInUp}>
          <SectionDivider colorClass="from-transparent via-gray-900 to-transparent dark:via-gray-800" />
          <Footer />
        </motion.section>
      </main>

      {/* Extra Footer Space */}
      <div className="py-6 sm:py-8"></div>
    </div>
  );
}
