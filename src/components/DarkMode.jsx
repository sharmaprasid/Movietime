"use client";
import { MdLightMode } from "react-icons/md";
import { BsFillMoonFill } from "react-icons/bs";
import { useTheme } from "next-themes";

const DarkMode = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme == "system" ? systemTheme : theme;
  return (
    <>
      {currentTheme == "dark" ? (
        <MdLightMode onClick={() => setTheme("light")} />
      ) : (
        <BsFillMoonFill onClick={() => setTheme("dark")} />
      )}
    </>
  );
};

export default DarkMode;
