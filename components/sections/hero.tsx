import { motion } from "motion/react";
import Image from "next/image";
import { Button } from "../ui/button";

export function HeroSection() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 1,
          opacity: {
            type: "tween",
            duration: 0.5,
            ease: "easeInOut",
          },
          x: {
            type: "tween",
            duration: 1,
            ease: [0, 0.71, 0.2, 1.01],
          },
        }}
        className="flex flex-col justify-between h-full w-fit min-w-fit pr-4"
      >
        <div></div>
        <div>
          <h1 className="scroll-m-20 text-4xl font-sans font-extrabold tracking-tight lg:text-6xl">
            Ethan
          </h1>
          <h1 className="scroll-m-20 text-4xl font-sans font-extrabold tracking-tight lg:text-6xl">
            Eckhardt
          </h1>
          <h2 className="scroll-m-20 pb-2 text-lg font-mono font-semibold tracking-tight first:mt-0 lg:text-2xl">
            Full-Stack Software Engineer
          </h2>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            opacity: {
              type: "tween",
              duration: 0.5,
              delay: 1,
              ease: "easeInOut",
            },
            y: {
              type: "tween",
              duration: 1,
              delay: 1,
              ease: [0, 0.71, 0.2, 1.01],
            },
          }}
          className="flex flex-col py-4"
        >
          <Button
            variant="ghost"
            size="lg"
            className="text-xl font-mono justify-start underline"
          >
            Projects
          </Button>
          <Button
            variant="ghost"
            size="lg"
            className="text-xl font-mono justify-start underline"
          >
            Proficiencies
          </Button>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 1,
          delay: 1,
          opacity: {
            type: "tween",
            duration: 0.5,
            delay: 1,
            ease: "easeInOut",
          },
          x: {
            type: "tween",
            duration: 1,
            delay: 1,
            ease: [0, 0.71, 0.2, 1.01],
          },
        }}
        className="w-full flex flex-col justify-center items-center overflow-hidden"
      >
        <Image
          src="/purple.jpg"
          alt="tower"
          width={2916}
          height={3888}
          priority
          className="h-screen w-fit min-w-fit"
        />
      </motion.div>
    </>
  );
}
