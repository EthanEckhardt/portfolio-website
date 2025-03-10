"use client";

import { ChevronsUp } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (isVisible) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2, type: "spring" }}
        className="fixed top-0 right-0 p-4"
      >
        <Button
          size="icon"
          className="opacity-80 hover:opacity-100"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <ChevronsUp />
        </Button>
      </motion.div>
    );
  }

  return null;
}
