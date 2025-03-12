import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Switch } from "./switch";

export function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 24) {
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

  const handleThemeChange = (e: boolean) => {
    setTheme(e ? "dark" : "light");
  };

  if (!isVisible) return null;
  return (
    <div className="fixed bottom-0 left-0 p-4">
      <div className="group flex gap-2 items-center bg-secondary text-secondary-foreground rounded-full p-2 overflow-hidden w-10 hover:w-26 transition-all duration-300 ease-in-out relative">
        <div className="opacity-100 group-hover:opacity-0">
          {theme === "dark" ? <Moon /> : <Sun />}
        </div>
        <div className="absolute w-full h-full flex gap-2 items-center opacity-0 group-hover:opacity-100">
          <Sun size={16} />
          <Switch
            checked={theme === "dark"}
            onCheckedChange={(e) => handleThemeChange(e)}
          />
          <Moon size={16} />
        </div>
      </div>
    </div>
  );
}
