import React from "react";
import Image from "next/image";
import SkillsButton from "./SkillsButton";
import { useTheme } from "../context/ThemeContext";

interface ChildProps {
  projectImageUrl: string;
  projectTitle: string;
  projectDescription: string;
  demoUrl: string;
  codeUrl: string;
}

const ProjectCard = ({
  projectImageUrl,
  projectTitle,
  projectDescription,
  demoUrl,
  codeUrl,
}: ChildProps) => {
  const { theme } = useTheme();
  return (
    <div
      className={`relative gap-4 p-2 flex md:items-center shadow-2xl/4 flex-col lg:flex-row mx-auto overflow-hidden w-full lg:h-95 min-h-80 lg:w-full xl:flex-row  ${
        theme === "light" ? "bg-white" : "bg-lighter-black"
      }  shadow-3xl rounded-[20px] `}
    >
      <div className="w-full md:h-full h-[40%] flex ">
        <div className="flex w-full mx-auto h-full md:mt-0  rounded-[12px] justify-center items-start overflow-hidden  bg-gray-100">
          <Image
            src={projectImageUrl}
            alt="lyric image"
            height={200}
            draggable={false}
            width={400}
            className="h-full object-left-top lg:h-[120%] w-full object-cover md:object-left-top lg:object-center xl:h-full xl:object-left-top"
          />
        </div>
      </div>

      <div className="flex  gap-2 flex-col md:justify-center shrink-0 md:h-fit md:w-[70%] lg:w-[50%] md:mr-auto xl:w-[50%] xl:h-full h-[60%] px-1 w-full">
        <div
          className={`text-[18px] ${
            theme === "light" ? "text-black" : "text-white"
          } `}
        >
          {projectTitle}
        </div>
        <div
          className={`h-[60%] lg:h-fit md:text-[14px] w-full  pr-8 text-[12px]lg:text-md ${
            theme === "light" ? "text-gray-800" : "text-[#cccccc]"
          } `}
        >
          {projectDescription}
        </div>
        <div className="flex mt-2 items-center gap-1 flex-wrap  m-0 w-full">
          <SkillsButton name="HTML" />
          {projectTitle === "Lyrich Church" ||
          projectTitle === "BeatsByYehuda" ||
          projectTitle === "Task-It" ? (
            <SkillsButton name="Next.Js" />
          ) : (
            ""
          )}

          <SkillsButton name="Tailwind CSS" />
          <SkillsButton name="Javascript" />
          {projectTitle === "Collabify" || projectTitle === "Rift" ? (
            ""
          ) : (
            <SkillsButton name="React" />
          )}
          {projectTitle === "Collabify" ? "" : <SkillsButton name="MongoDB" />}
        </div>
        <div className="flex items-center mt-2 mb-1 flex-wrap m-0 w-full">
          <a href={demoUrl} target="_blank">
            <div
              className={`transition-all duration-300 shrink-0 ease-in flex px-4 justify-center items-center min-w-20  w-fit h-9 rounded-[12px] font-medium text-[14px] mr-2 ${
                theme === "light"
                  ? "text-white bg-black "
                  : "text-black bg-white "
              } hover:opacity-50`}
            >
              {projectTitle === "Lyric Church" ? "Live" : "Live Demo"}
            </div>
          </a>

          <a href={codeUrl} target="_blank">
            <div
              className={`transition-all shrink-0  duration-300 ease-in  flex px-2 justify-center items-center min-w-20  w-fit h-9 rounded-[12px] font-medium text-[14px] mr-2 ${
                theme === "light"
                  ? "text-white bg-black "
                  : "text-black bg-white "
              }  hover:opacity-50`}
            >
              Code
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
