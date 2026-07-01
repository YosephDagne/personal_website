import { motion } from "framer-motion";

interface SectionDividerProps {
  colorClass: string;
}

export default function SectionDivider({ colorClass }: SectionDividerProps) {
  return (
    <motion.div
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className={`absolute -top-6 left-0 right-0 h-px bg-linear-to-r ${colorClass}`}
    />
  );
}
