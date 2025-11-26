// services.ts
export interface Service {
  s_no: string;
  s_name: string;
  s_desc: string;
  icon?: string; // optional icon path
}

const Services_Data: Service[] = [
  {
    s_no: "01",
    s_name: "Web Development",
    s_desc:
      "Building responsive and modern websites using React, Next.js, and Tailwind CSS.",
    icon: "/frontend.png",
  },
  {
    s_no: "02",
    s_name: "Backend Development",
    s_desc:
      "Creating robust APIs and server-side logic using Node.js, Express, and .NET.",
    icon: "/backend.jpg",
  },
  {
    s_no: "03",
    s_name: "Database Design",
    s_desc:
      "Designing and optimizing databases using MongoDB and SQL for high performance.",
    icon: "/database.png",
  },
  {
    s_no: "04",
    s_name: "UI/UX Design",
    s_desc:
      "Crafting user-friendly and modern interfaces with attention to usability and accessibility.",
    icon: "/uxui.png",
  },
];

export default Services_Data;
