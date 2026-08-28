import React from "react";

import { useTheme } from "../context/ThemeContext";
import { type IconType } from "react-icons";

interface ChildProps {
  Icon: IconType;
  name: string;
}

const ContactComponent = ({ Icon, name }: ChildProps) => {
  const { theme } = useTheme();
  return (
    <div
      className={`flex gap-4 overflow-hidden text-md rounded-[16px] ${
        theme === "light" ? "text-lighter-black" : "text-white bg-[#292929]"
      }  items-center w-full lg:w-full`}
    >
      <div
        className={`h-full rounded-[12px] p-4 ${theme === "light" ? "" : "bg-[#1a1a1a]"} aspect-square`}
      >
        <Icon
          className={`flex shrink-0 text-lg ${
            theme === "light" ? "text-light-black" : "text-white"
          }  `}
        />
      </div>

      <div
        className={`flex text-[14px] ${theme === "light" ? "" : "text-[#cccccc]"} shrink-0`}
      >
        {" "}
        {name}{" "}
      </div>
    </div>
  );
};

export default ContactComponent;
