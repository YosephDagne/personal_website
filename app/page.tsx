"use client";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Services from "@/components/Service";
import Works from "@/components/Works";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Accomplishments from "@/components/Accomplishment ";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
      {/* Navbar */}
      <Navbar />

      {/* Page container */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 pt-2">
        {/* Hero Section */}
        <section className="mb-12 sm:mb-16">
          <Hero />
        </section>

        {/* Skills Section */}
        <section className="mb-12 sm:mb-16 relative">
          <div className="absolute -top-6 left-0 right-0 h-px bg-linear-to-r from-transparent via-purple-300/40 to-transparent dark:via-purple-600/20" />
          <Skills />
        </section>

        {/* About Section */}
        <section className="mb-12 sm:mb-16 relative">
          <div className="absolute -top-6 left-0 right-0 h-px bg-linear-to-r from-transparent via-blue-300/40 to-transparent dark:via-blue-600/20" />
          <About />
        </section>
        <section className="mb-12 sm:mb-16 relative">
          <div className="absolute -top-6 left-0 right-0 h-px bg-linear-to-r from-transparent via-blue-300/40 to-transparent dark:via-blue-600/20" />
          <Accomplishments />
        </section>

        {/* Services Section */}
        <section className="mb-12 sm:mb-16 relative">
          <div className="absolute -top-6 left-0 right-0 h-px bg-linear-to-r from-transparent via-green-300/40 to-transparent dark:via-green-600/20" />
          <Services />
        </section>

        {/* Works Section */}
        <section className="mb-12 sm:mb-16 relative">
          <div className="absolute -top-6 left-0 right-0 h-px bg-linear-to-r from-transparent via-orange-300/40 to-transparent dark:via-orange-600/20" />
          <Works />
        </section>

        {/* Education Section */}
        <section className="mb-12 sm:mb-16 relative">
          <div className="absolute -top-6 left-0 right-0 h-px bg-linear-to-r from-transparent via-red-300/40 to-transparent dark:via-red-600/20" />
          <Education />
        </section>

        {/* Contact Section */}
        <section className="mb-12 sm:mb-16 relative">
          <div className="absolute -top-6 left-0 right-0 h-px bg-linear-to-r from-transparent via-indigo-300/40 to-transparent dark:via-indigo-600/20" />
          <Contact />
        </section>

        {/* Footer Section */}
        <section className="relative">
          <div className="absolute -top-6 left-0 right-0 h-px bg-linear-to-r from-transparent via-gray-300/40 to-transparent dark:via-gray-600/20" />
          <Footer />
        </section>
      </main>

      {/* Extra Footer Space */}
      <div className="py-6 sm:py-8"></div>
    </div>
  );
}
