import React from "react";
import Image from "next/image";
import SkillsButton from "./SkillsButton";

interface ChildProps {
  projectImageUrl: string;
  projectTitle: string;
  projectDescription: string;
}

const ProjectCard = ({
  projectImageUrl,
  projectTitle,
  projectDescription,
}: ChildProps) => {
  return (
    <div className="relative aspect-[4/5] mb-10 px-3 mx-auto overflow-hidden w-[90%] border-1 border-white/50 bg-gradient-to-bl to-50% from-white/3 to-green-300/2 bg-white/2 shadow-3xl rounded-2xl ">
      <div className="flex justify-center items-start absolute overflow-hidden top-0 left-0 w-full h-[40%] bg-white">
        <Image
          src={projectImageUrl}
          alt="lyric image"
          height={200}
          width={400}
          className="h-[110%]"
        />
      </div>
      <div className="text-xl mt-[60%] text-green-500 m-3">{projectTitle}</div>
      <div className="ml-3 h-[20%] w-[80%] ">{projectDescription}</div>
      <div className="ml-3 flex items-center my-3 w-[80%]">
        <SkillsButton name="HTML" />
        <SkillsButton name="CSS" />
        <SkillsButton name="Javascript" />
      </div>
      <div className="ml-3 flex items-center my-3 w-[80%]">
        <div className="flex px-4 justify-center items-center min-w-20  w-fit h-10 rounded-3xl border-1 text-sm mr-2 border-green-600">
          Live Demo
        </div>
        <div className="flex px-2 justify-center items-center min-w-20  w-fit h-10 rounded-3xl border-1 text-sm mr-2 border-green-600">
          Code
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
