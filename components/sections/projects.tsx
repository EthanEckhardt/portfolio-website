import { quickEnter } from "@/app/page";
import { motion } from "motion/react";

export function ProjectSection(props: { scrollRef: React.RefObject<null> }) {
  return (
    <motion.h1
      viewport={{ root: props.scrollRef }}
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={quickEnter}
    >
      Scroll
    </motion.h1>
  );
}
