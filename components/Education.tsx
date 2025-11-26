"use client";

export default function Education() {
  const educationList = [
    {
      degree: "BSc in Software Engineering",
      institution: "Haramaya University",
      year: "2021 - present",
      location: "Haramaya, Ethiopia",
    },
    {
      degree: "High School Diploma",
      institution: "Wogdie Secondary School",
      year: "2017 - 2020",
      location: "South Wollo, Ethiopia",
    },
  ];

  return (
    <section id="education" className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-linear-to-r from-purple-600 to-orange-500">
            Education
          </h1>
          <div className="h-1 w-24 mx-auto mt-4 rounded-full bg-linear-to-r from-purple-500 to-orange-400" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-6 top-0 h-full w-1 bg-linear-to-b from-purple-400 via-orange-400 to-orange-500 rounded-full"></div>

          <div className="space-y-12">
            {educationList.map((edu, index) => (
              <div
                key={index}
                className="relative flex flex-col md:flex-row md:items-start gap-4"
              >
                {/* Timeline Dot */}
                <div className="absolute left-3 md:left-6 top-0 transform -translate-x-1/2 mt-3 z-10">
                  <div className="h-5 w-5 rounded-full bg-linear-to-r from-purple-600 to-orange-500 shadow-lg shadow-purple-400/30"></div>
                </div>

                {/* Content Card */}
                <div className="ml-10 md:ml-12 flex-1 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-transparent hover:border-purple-500 dark:hover:border-orange-500">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                        {edu.degree}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mt-1">
                        {edu.institution}
                      </p>
                      <p className="text-gray-500 dark:text-gray-400 mt-1">
                        {edu.location}
                      </p>
                    </div>
                    <span className="mt-2 md:mt-0 px-3 py-1 bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium">
                      {edu.year}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
