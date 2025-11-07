import React from "react";
import { useTheme } from "../context/ThemeContext";

interface ChildProps {
  name: string;
}

const SkillsButton = ({ name }: ChildProps) => {
  const { theme } = useTheme();
  return (
    <div
      className={`flex justify-center items-center min-w-13 w-fit px-3 h-7 mt-2 rounded-lg border-1 text-[10px] mr-2 ${
        theme === "light"
          ? "border-black  text-black"
          : "border-white  text-white"
      } `}
    >
      {name}
    </div>
  );
};

export default SkillsButton;
