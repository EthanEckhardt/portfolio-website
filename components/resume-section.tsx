import { motion } from "framer-motion";
import { AudioWaveform, Brush, MonitorCheck } from "lucide-react";

export function ResumeSection() {
  const resumeData = [
    {
      title: "Web Development",
      description:
        "I've done end-to-end web application development for over a year now! I've gained this experience using cutting edge web technologies such as Next.js, Redux, TailwindCSS, and more.",
      icon: <MonitorCheck />,
    },
    {
      title: "WebRTC VoIP",
      description:
        "I've built robust applications using many different versions of WebRTC with a specific focus on audio. I have used everything from opinionated, high-level libraries such as LiveKit to raw C++ implementations.",
      icon: <AudioWaveform />,
    },
    {
      title: "Design Development",
      description:
        "Not only do I have experience in the code editor, but I am also closely involved in the design process of every project that I have been on. I use Figma to create detailed mockups for all my software projects.",
      icon: <Brush />,
    },
  ];
  return (
    <>
      <h2 className="text-3xl font-bold">Proficiencies</h2>
      <div className="w-full max-w-6xl grid grid-cols-3 gap-6">
        {resumeData.map((data, index) => (
          <div key={index} className="flex flex-col gap-12">
            <ResumeTile data={data} />
          </div>
        ))}
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

interface ResumeTileProps {
  data: {
    title: string;
    description: string;
    icon: React.ReactNode;
  };
}

function ResumeTile(props: ResumeTileProps) {
  const bounceTransition = {
    y: {
      duration: 0.4,
      yoyo: Infinity,
      ease: "easeOut",
    },
  };

  return (
    <motion.div
      initial={{ y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ ...bounceTransition, delay: 0.1 }}
      id="web-dev-tile"
      className="outline outline-foreground rounded-2xl h-70 p-6 flex flex-col"
    >
      <div className="size-fit rounded-full bg-primary p-2">
        {props.data.icon}
      </div>
      <div className="text-md font-semibold mt-1">{props.data.title}</div>
      <div className="text-sm font-mono mt-6">{props.data.description}</div>
    </motion.div>
  );
}
