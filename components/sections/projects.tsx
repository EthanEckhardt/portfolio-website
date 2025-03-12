import { quickEnter } from "@/app/page";
import { motion } from "motion/react";

export function ProjectSection() {
  return (
    <motion.h1
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={quickEnter}
    >
      Scroll
    </motion.h1>
  );
}
