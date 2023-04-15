"use client";
import { MdLightMode } from "react-icons/md";
import { BsFillMoonFill } from "react-icons/bs";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const DarkMode = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  const currentTheme = theme == "system" ? systemTheme : theme;
  return (
    <>
      {mounted && currentTheme == "dark" ? (
        <MdLightMode
          className=" cursor-pointer"
          onClick={() => setTheme("light")}
        />
      ) : (
        <BsFillMoonFill
          className=" cursor-pointer"
          onClick={() => setTheme("dark")}
        />
      )}
    </>
  );
};

export default DarkMode;
