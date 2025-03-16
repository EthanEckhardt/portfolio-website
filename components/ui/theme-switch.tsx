import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Switch } from "./switch";

export function ThemeSwitch() {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = (e: boolean) => {
    setTheme(e ? "dark" : "light");
  };

  return (
    <div className="w-full h-fit flex gap-2 p-2 justify-center items-center">
      <Sun size={16} />
      <Switch
        checked={theme === "dark"}
        onCheckedChange={(e) => handleThemeChange(e)}
      />
      <Moon size={16} />
    </div>
  );
}
