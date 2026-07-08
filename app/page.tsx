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
import SectionDivider from "@/components/SectionDivider";

const fadeInUp: HTMLMotionProps<"section"> = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6, ease: "easeOut" }
};

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gray-950 text-gray-100 overflow-hidden font-sans selection:bg-indigo-500/30 selection:text-white">

      {/* Navbar */}
      <Navbar />

      {/* Page container */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 space-y-20 sm:space-y-28">
        {/* Hero Section */}
        <motion.section className="relative" {...fadeInUp}>
          <Hero />
        </motion.section>

        {/* About Section */}
        <motion.section className="relative" {...fadeInUp}>
          <SectionDivider colorClass="from-transparent via-indigo-500/10 to-transparent" />
          <About />
        </motion.section>

        {/* Education Section */}
        <motion.section className="relative" {...fadeInUp}>
          <SectionDivider colorClass="from-transparent via-indigo-500/10 to-transparent" />
          <Education />
        </motion.section>

        {/* Services Section */}
        <motion.section className="relative" {...fadeInUp}>
          <SectionDivider colorClass="from-transparent via-indigo-500/10 to-transparent" />
          <Services />
        </motion.section>

        {/* Skills Section */}
        <motion.section className="relative" {...fadeInUp}>
          <SectionDivider colorClass="from-transparent via-indigo-500/10 to-transparent" />
          <Skills />
        </motion.section>

        {/* Works Section */}
        <motion.section className="relative" {...fadeInUp}>
          <SectionDivider colorClass="from-transparent via-indigo-500/10 to-transparent" />
          <Works />
        </motion.section>


        {/* Contact Section */}
        <motion.section className="relative" {...fadeInUp}>
          <SectionDivider colorClass="from-transparent via-indigo-500/10 to-transparent" />
          <Contact />
        </motion.section>

        {/* Footer Section */}
        <motion.section className="relative" {...fadeInUp}>
          <SectionDivider colorClass="from-transparent via-indigo-500/10 to-transparent" />
          <Footer />
        </motion.section>
      </main>

      {/* Extra Footer Space */}
      <div className="py-6 sm:py-8"></div>
    </div>
  );
}
