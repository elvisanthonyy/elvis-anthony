import React from "react";
import { useTheme } from "../context/ThemeContext";

interface ChildProps {
  name: string;
}

const SkillsButton = ({ name }: ChildProps) => {
  const { theme } = useTheme();
  return (
    <div
      className={`flex justify-center items-center min-w-13 w-fit px-3 h-7 rounded-[12px]  text-[12px] ${
        theme === "light"
          ? "bg-[#ededed] text-black"
          : "bg-[#2c2c2c] border-0 text-white"
      } `}
    >
      <p>{name}</p>
    </div>
  );
};

export default SkillsButton;
