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
      className={`relative flex md:items-center shadow-2xl/4 flex-col md:flex-row aspect-[5/6] mb-10 mx-auto overflow-hidden w-[90%] md:h-75 lg:w-full xl:flex-row xl:h-80 md:aspect-auto h-fit ${
        theme === "light" ? "bg-white" : "bg-lighter-black"
      }  shadow-3xl rounded-2xl `}
    >
      <div className="flex mt-2 w-[95%] mx-auto md:h-[90%] md:ml-4 md:mt-0 md:rounded-bl-xl md:rounded-tr-none rounded-tl-xl md: rounded-tr-xl justify-center items-start overflow-hidden  h-[40%] bg-amber-400 md:w-[50%] xl:w-[50%]">
        <Image
          src={projectImageUrl}
          alt="lyric image"
          height={200}
          width={400}
          className="h-full object-left-top lg:h-[120%] w-full object-cover md:object-left-top lg:object-center xl:h-full xl:object-left-top"
        />
      </div>
      <div className="flex flex-col shrink-0 md:h-full md:w-[50%] xl:w-[50%] xl:h-full h-[60%] p-3 w-full">
        <div
          className={`text-xl ${
            theme === "light" ? "text-black" : "text-white"
          }  m-3`}
        >
          {projectTitle}
        </div>
        <div
          className={`ml-3 h-[60%] lg:h-[45%] lg:text-[1.1em] w-[90%] text-xs md:text-[12px] lg:text-md ${
            theme === "light" ? "text-gray-800" : "text-white"
          } `}
        >
          {projectDescription}
        </div>
        <div className="ml-3 flex items-center  m-0 w-[95%]">
          <SkillsButton name="HTML" />
          <SkillsButton
            name={
              projectTitle === "Collabify" || projectTitle === "Rift"
                ? "Tailwind"
                : "CSS"
            }
          />
          <SkillsButton
            name={projectTitle === "Rift" ? "Node.js" : "Javascript"}
          />
          {projectTitle === "Collabify" && <SkillsButton name="React" />}
          {projectTitle === "Rift" && <SkillsButton name="React" />}
        </div>
        <div className="ml-3 flex items-center my-3  h-15 m-0 w-[80%] ">
          <a href={demoUrl} target="_blank">
            <div
              className={`transition-all duration-300 ease-in flex px-4 justify-center items-center min-w-20  w-fit h-9 rounded-lg border-1 text-xs mr-2 ${
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
              className={`transition-all duration-300 ease-in  flex px-2 justify-center items-center min-w-20  w-fit h-9 rounded-lg border-1 text-xs mr-2 ${
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
