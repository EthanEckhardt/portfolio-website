import { quickEnter } from "@/app/page";
import { ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/button";

export function ProjectSection() {
  const [selectedProject, setSelectedProject] = useState(0);

  const projects = [
    {
      title: "Thor Robot Arm",
      description:
        "Thor is an Open Source and printable robot arm with six degrees of freedom. Its configuration (yaw-roll-roll-yaw-roll-yaw) is the same used by most of the manipulator robots on the market. In its extended position, Thor is about 625mm high and can lift loads up to 750 grams.",
      imageUrl: "/purple.JPG",
      externalLink: "http://thor.angel-lm.com/",
    },
    {
      title: "TOTEM Wireless Keyboard",
      description:
        "TOTEM is a 38 key column-staggered choc split keyboard. It features a 3D printed case, and is fully programmable. My layout of choice is the Colemak Mod-DH Miryoku layout, which allows me to type with a more natural hand position and reduces finger movement. I use this keyboard at work for all of my programming.",
      imageUrl: "/purple.JPG",
      externalLink: "https://github.com/GEIGEIGEIST/TOTEM",
    },
    {
      title: "Portfolio Website",
      description: "Description of Project 3",
      imageUrl: "/purple.JPG",
      externalLink: "",
    },
  ];

  return (
    <div className="size-full max-w-5xl px-8 py-24">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={quickEnter}
        className="flex w-full h-full gap-12 min-h-fit"
      >
        <div className="flex flex-col w-1/3 h-full gap-4">
          <h2 className="scroll-m-20 pb-2 px-4 text-lg font-mono font-semibold tracking-tight first:mt-0 lg:text-2xl">
            Projects
          </h2>
          <div className="flex flex-col gap-4 h-full min-w-fit">
            {projects.map((project, index) => (
              <Button
                key={index}
                variant={selectedProject === index ? "secondary" : "ghost"}
                className="justify-start font-sans min-w-fit"
                onClick={() => setSelectedProject(index)}
              >
                {project.title}
              </Button>
            ))}
          </div>
          {projects[selectedProject].externalLink !== "" && (
            <Link href={projects[selectedProject].externalLink} target="_blank">
              <Button variant="ghost">
                Learn More
                <ExternalLink />
              </Button>
            </Link>
          )}
        </div>
        <div className="flex flex-col h-full min-h-fit w-2/3 gap-2 font-mono">
          <motion.div
            key={selectedProject}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="h-3/4 w-full overflow-hidden rounded-sm"
          >
            <div className="relative w-full h-0 pb-[60%]">
              <Image
                src={projects[selectedProject].imageUrl}
                alt={projects[selectedProject].title}
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
          <p className="font-bold">Description:</p>
          <p className="text-sm">{projects[selectedProject].description}</p>
        </div>
      </motion.div>
    </div>
  );
}
