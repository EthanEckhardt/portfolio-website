import { motion } from "framer-motion";
import { Atom, AudioWaveform, Brush, MonitorCheck } from "lucide-react";

export function ResumeSection() {
  const bounceTransition = {
    y: {
      duration: 0.4,
      yoyo: Infinity,
      ease: "easeOut",
    },
  };
  return (
    <>
      <h2 className="text-3xl font-bold">Proficiencies</h2>
      <div className="w-full max-w-6xl grid grid-cols-3 gap-6">
        <div className="flex flex-col gap-12">
          <motion.div
            initial={{ y: 0 }}
            whileHover={{ y: -5 }}
            transition={{ ...bounceTransition, delay: 0.1 }}
            id="web-dev-tile"
            className="outline outline-foreground rounded-2xl h-65 p-6 flex flex-col"
          >
            <div className="size-fit rounded-full bg-primary p-2">
              <MonitorCheck />
            </div>
            <h2 className="text-md font-semibold mt-1">Web Development</h2>
            <p className="text-sm font-mono mt-6">
              I've done end-to-end web application development for over a year
              now! I've gained this experience using cutting edge web
              technologies such as Next.js, Redux, TailwindCSS, and more.
            </p>
          </motion.div>
        </div>
        <div className="flex flex-col gap-12">
          <motion.div
            initial={{ y: 0 }}
            whileHover={{ y: -5 }}
            transition={{ ...bounceTransition, delay: 0.1 }}
            id="webrtc-tile"
            className="outline outline-foreground rounded-2xl h-65 p-6 aspect-square flex flex-col"
          >
            <div className="size-fit rounded-full bg-primary p-2">
              <AudioWaveform />
            </div>
            <h2 className="text-md font-semibold mt-1">WebRTC VoIP</h2>
            <p className="text-sm font-mono mt-6">
              I've built robust applications using many different versions of
              WebRTC with a specific focus on audio. I have used everything from
              opinionated, high-level libraries such as LiveKit to raw C++
              implementations.
            </p>
          </motion.div>
        </div>
        <div className="flex flex-col gap-12">
          <motion.div
            initial={{ y: 0 }}
            whileHover={{ y: -5 }}
            transition={{ ...bounceTransition, delay: 0.1 }}
            id="design-tile"
            className="outline outline-foreground rounded-2xl h-65 p-6 flex flex-col"
          >
            <div className="size-fit rounded-full bg-primary p-2">
              <Brush />
            </div>
            <h2 className="text-md font-semibold mt-1">Design Development</h2>
            <p className="text-sm font-mono mt-6">
              Not only do I have experience in the code editor, but I am also
              closely involved in the design process of every project that I
              have been on. I use Figma to create detailed mockups for all my
              software projects.
            </p>
          </motion.div>
        </div>
      </div>
      <div className="flex justify-center">
        <a
          href="/ResumeEHE.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition"
        >
          View My Resume
        </a>
      </div>
    </>
  );
}
