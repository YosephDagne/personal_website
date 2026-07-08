// services.ts
export interface Service {
  s_no: string;
  s_name: string;
  s_desc: string;
  iconName: string; // lucide icon identifier
}

const Services_Data: Service[] = [
  {
    s_no: "01",
    s_name: "Frontend Development",
    s_desc: "Building responsive and modern websites using React, Next.js, and Tailwind CSS.",
    iconName: "Monitor",
  },
  {
    s_no: "02",
    s_name: "Backend Development",
    s_desc: "Creating robust APIs and server-side logic using Node.js, Express, and .NET.",
    iconName: "Server",
  },
  {
    s_no: "03",
    s_name: "Database Design",
    s_desc: "Designing and optimizing databases using MongoDB and SQL for high performance.",
    iconName: "Database",
  },
  
];

export default Services_Data;
