"use client";

import { BackToTop } from "@/components/back-to-top";
import { Footer } from "@/components/footer";
import { ScrollSection } from "@/components/scroll-section";
import { useScroll } from "framer-motion";
import * as motion from "motion/react-client";
import Image from "next/image";
import { useRef } from "react";

export default function Home() {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll();

  const quickEnter = {
    duration: 1,
    opacity: {
      type: "tween",
      duration: 0.2,
      ease: "easeInOut",
    },
    x: {
      type: "tween",
      duration: 0.5,
      ease: [0, 0.71, 0.2, 1.01],
    },
  };

  return (
    <div ref={scrollRef} className="w-screen h-fit overflow-x-hidden">
      <BackToTop scrollProgress={scrollYProgress} />
      <ScrollSection className="justify-between">
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
          className="flex flex-col justify-center h-full w-fit min-w-fit"
        >
          <h1 className="text-white scroll-m-20 text-4xl font-sans font-extrabold tracking-tight lg:text-6xl">
            Ethan
          </h1>
          <h1 className="text-white scroll-m-20 text-4xl font-sans font-extrabold tracking-tight lg:text-6xl">
            Eckhardt
          </h1>
          <h2 className="scroll-m-20 pb-2 text-lg text-white font-mono font-semibold tracking-tight first:mt-0 lg:text-2xl">
            Full-Stack Software Engineer
          </h2>
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
          className="w-full flex flex-col justify-center items-center"
        >
          <Image
            src="https://images.unsplash.com/photo-1739467372234-2aba33f6b7ee?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="tower"
            width={6020}
            height={8027}
            className="h-screen w-fit min-w-fit"
          />
        </motion.div>
      </ScrollSection>
      <ScrollSection className="bg-white items-center justify-center">
        <motion.h1
          viewport={{ root: scrollRef }}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={quickEnter}
        >
          Scroll
        </motion.h1>
      </ScrollSection>
      <ScrollSection className="bg-white items-center justify-center">
        <h1>Scroll2</h1>
      </ScrollSection>
      <Footer />
    </div>
  );
}
