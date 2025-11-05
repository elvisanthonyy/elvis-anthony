import React from "react";

interface ChildProps {
  name: string;
}

const SkillsButton = ({ name }: ChildProps) => {
  return (
    <div className="flex justify-center items-center min-w-13 w-fit px-3 h-7 mt-2 rounded-lg border-1 text-[10px] mr-2 border-black  text-black">
      {name}
    </div>
  );
};

export default SkillsButton;
