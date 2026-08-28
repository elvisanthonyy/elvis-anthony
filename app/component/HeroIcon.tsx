import React from "react";
import { type IconType } from "react-icons";

interface ChildProps {
  Icon: IconType;
  link: string;
}

const HeroIcon = ({ Icon, link }: ChildProps) => {
  return (
    <div>
      {" "}
      <a target="_blank" href={link}>
        <div className="flex justify-center transition-all duration-300 hover:opacity-75 text-xs items-center h-7 w-7 rounded-xl bg-back-gray">
          <Icon className="text-lighter-black" />
        </div>
      </a>
    </div>
  );
};

export default HeroIcon;
