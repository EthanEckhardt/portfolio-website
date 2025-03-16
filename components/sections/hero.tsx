import { motion } from "motion/react";
import Image from "next/image";

export function HeroSection() {
  // Define animation variants
  const containerVariants = {
    hidden: {
      opacity: 0,
      x: -20,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
        staggerChildren: 0.5,
      },
    },
  };

  const childVariants = {
    hidden: {
      opacity: 0,
      x: -20, // Slight downward offset
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="flex flex-col-reverse md:flex-row justify-between w-full">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col h-fit w-fit min-w-fit p-4 md:h-full md:justify-end"
      >
        <motion.h1
          variants={childVariants}
          className="scroll-m-20 text-4xl font-sans font-extrabold tracking-tight lg:text-6xl"
        >
          Ethan
        </motion.h1>
        <motion.h1
          variants={childVariants}
          className="scroll-m-20 text-4xl font-sans font-extrabold tracking-tight lg:text-6xl"
        >
          Eckhardt
        </motion.h1>
        <motion.h2
          variants={childVariants}
          className="scroll-m-20 pb-2 text-lg font-mono font-semibold tracking-tight first:mt-0 lg:text-2xl"
        >
          Full-Stack Software Engineer
        </motion.h2>
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            opacity: 0,
            y: 20,
          },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 1,
              ease: "easeInOut",
              delay: 1.5,
            },
          },
        }}
        className="w-full flex md:justify-center items-center h-screen overflow-hidden"
      >
        <Image
          src="/purple.JPG"
          alt="purple"
          width={2916}
          height={3888}
          className="size-1/2 md:size-100 aspect-square rounded-full inset-shadow-sm inset-shadow-black"
        />
      </motion.div>
    </div>
  );
}
