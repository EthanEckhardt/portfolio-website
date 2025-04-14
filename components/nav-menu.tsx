import { Menu } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { ThemeSwitch } from "./ui/theme-switch";

export function NavMenu() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
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

  if (!isVisible) return null;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2, type: "spring" }}
      className="fixed top-0 left-0 p-4"
    >
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            size="icon"
            variant="secondary"
            className="opacity-80 hover:opacity-100"
          >
            <Menu />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent side="bottom" align="start" className="w-40">
          <DropdownMenuLabel>Sections</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={() => {
              const projectsElement = document.getElementById("projects");
              if (projectsElement) {
                projectsElement.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Projects
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => {
              const resumeElement = document.getElementById("resume");
              if (resumeElement) {
                resumeElement.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Proficiencies
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuLabel>Pages</DropdownMenuLabel>
          <DropdownMenuSeparator />

          <Link href="/notes">
            <DropdownMenuItem>Notes Viewer</DropdownMenuItem>
          </Link>
          <Link href="/contact">
            <DropdownMenuItem>Contact Me</DropdownMenuItem>
          </Link>
          <DropdownMenuSeparator />
          <ThemeSwitch />
        </DropdownMenuContent>
      </DropdownMenu>
    </motion.div>
  );
}
