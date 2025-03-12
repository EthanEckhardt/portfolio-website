import { motion } from "framer-motion";
import { Instagram, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export function Footer() {
  const links = [
    {
      href: "https://www.instagram.com/ethan.eckhardt/",
      icon: <Instagram size={20} />,
    },
    {
      href: "https://www.linkedin.com/in/ethan-eckhardt/",
      icon: <Linkedin size={20} />,
    },
    {
      href: "/contact",
      icon: <Mail size={20} />,
    },
  ];

  const bounceTransition = {
    y: {
      duration: 0.4,
      yoyo: Infinity,
      ease: "easeOut",
    },
  };

  return (
    <div className="flex justify-center items-center h-16 gap-8">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          target={link.href.startsWith("http") ? "_blank" : undefined}
          rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
        >
          <motion.div
            initial={{ y: 0 }}
            whileHover={{ y: -5 }}
            transition={{ ...bounceTransition, delay: index * 0.1 }}
          >
            <Button
              variant="ghost"
              className="rounded-full size-10 aspect-square p-0"
            >
              {link.icon}
            </Button>
          </motion.div>
        </Link>
      ))}
    </div>
  );
}
