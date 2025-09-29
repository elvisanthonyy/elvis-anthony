import React from "react";

interface ChildProps {
  name: string;
}

const SkillsButton = ({ name }: ChildProps) => {
  return (
    <div className="flex justify-center items-center w-20 h-8 rounded-3xl border-1 text-sm mr-2 border-green-600">
      {name}
    </div>
  );
};

export default SkillsButton;
