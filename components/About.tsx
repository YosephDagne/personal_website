"use client";

import Image from "next/image";

export default function About() {
  const skills = [
    { skill: "HTML", level: "99%" },
    { skill: "JavaScript", level: "97%" },
    { skill: "React.js", level: "98%" },
    { skill: "Node.js", level: "98%" },
    { skill: "Express.js", level: "96%" },
    { skill: "MongoDB", level: "100%" },
    { skill: "Git", level: "100%" },
    { skill: "Tailwind CSS", level: "97%" },
    { skill: "Next.js", level: "97%" },
  ];

  const accomplishments = [
    { value: "4", label: "Months Internship at Ethiopian Airlines" },
    { value: "3+", label: "Projects Completed" },
  ];

  return (
    <section
      id="about"
      className="relative py-24 px-6 md:px-16 bg-linear-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      {/* Title */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-linear-to-r from-purple-600 to-orange-500">
          About Me
        </h1>
        <div className="mt-4 h-1 w-24 mx-auto rounded-full bg-linear-to-r from-purple-500 to-orange-400" />
      </div>
      {/* Main content */}
      <div className="flex flex-col md:flex-row items-start gap-16 max-w-7xl mx-auto">
        {/* Large Profile Image */}
        {/* <div className="flex-1">
          <div className="w-full h-[700px] relative shadow-xl hover:shadow-2xl transition-shadow duration-500">
            <Image
              src="/jo2.jpg"
              alt="Yosef Dagne"
              fill
              className="object-cover rounded-xl"
              priority
            />
          </div>
        </div> */}

        {/* Info & Skills Card */}
        <div className="flex-1 flex flex-col gap-8 bg-white dark:bg-gray-800 p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-500 font-serif">
          {/* Description */}
          <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl leading-relaxed">
            I am a passionate full-stack developer with experience building
            scalable and responsive web applications. I enjoy solving complex
            problems and delivering efficient, user-friendly solutions.
          </p>
          <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl leading-relaxed">
            My expertise spans both front-end and back-end technologies,
            ensuring seamless user experiences and robust system architecture.
          </p>

          {/* Skills */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
            {skills.map((item, index) => (
              <div
                key={index}
                className="flex flex-col group hover:scale-[1.03] transition-transform duration-300"
              >
                <p className="text-md font-semibold mb-2 text-gray-800 dark:text-gray-200">
                  {item.skill}
                </p>
                <div className="w-full h-2 rounded-full bg-gray-200 dark:bg-gray-700">
                  <div
                    style={{ width: item.level }}
                    className="h-full rounded-full bg-linear-to-r from-purple-600 to-orange-500 transition-all duration-500"
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Accomplishments */}
      <div className="mt-24 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center bg-clip-text text-transparent bg-linear-to-r from-purple-600 to-orange-500">
          Accomplishments
        </h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-10">
          {accomplishments.map((item, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl shadow-xl bg-gray-50 dark:bg-gray-800 text-center hover:shadow-2xl transition-shadow duration-500 flex flex-col items-center gap-4 "
            >
              {/* Show image only for internship */}
              {item.label.includes("Internship") && (
                <div className="w-50 h-50 relative mx-auto ">
                  <Image
                    src="/Airlineslogo.jpg"
                    alt="Ethiopian Airlines Logo"
                    fill
                    className="object-contain rounded-2xl"
                  />
                </div>
              )}

              <p className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-linear-to-r from-purple-700 to-orange-500">
                {item.value}
              </p>
              <p className="mt-4 text-lg md:text-xl text-gray-700 dark:text-gray-300">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
