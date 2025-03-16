"use client";

import { BackToTop } from "@/components/back-to-top";
import { Footer } from "@/components/footer";
import { NavMenu } from "@/components/nav-menu";
import { ScrollSection } from "@/components/scroll-section";
import { HeroSection } from "@/components/sections/hero";
import { ProjectSection } from "@/components/sections/projects";
import { useRef } from "react";

export const quickEnter = {
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

export default function Home() {
  const scrollRef = useRef(null);

  return (
    <div ref={scrollRef} className="w-screen h-fit overflow-x-hidden">
      <>
        <BackToTop />
        <NavMenu />
      </>
      <ScrollSection variant="gradient">
        <HeroSection />
      </ScrollSection>
      <ScrollSection className="items-center justify-center">
        <ProjectSection />
      </ScrollSection>
      <ScrollSection className="items-center justify-center">
        <h1>Proficiencies</h1>
      </ScrollSection>
      <ScrollSection className="items-center justify-center bg-linear-to-bl from-background to-primary  ">
        <Footer />
      </ScrollSection>
    </div>
  );
}
