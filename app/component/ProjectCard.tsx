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
      className={`relative flex md:items-center shadow-2xl/4 flex-col md:flex-row mb-10 mx-auto overflow-hidden w-[90%] md:h-75 lg:w-full xl:flex-row xl:h-80 md:aspect-auto min-h-70 ${
        theme === "light" ? "bg-white" : "bg-lighter-black"
      }  shadow-3xl rounded-2xl `}
    >
      <div className="flex mt-2 w-[95%] mx-auto md:h-[90%] md:ml-4 md:mt-0 md:rounded-bl-xl md:rounded-tr-none rounded-tl-xl md: rounded-tr-xl justify-center items-start overflow-hidden  h-[40%] bg-amber-400 md:w-[50%] xl:w-[50%]">
        <Image
          src={projectImageUrl}
          alt="lyric image"
          height={200}
          draggable={false}
          width={400}
          className="h-full object-left-top lg:h-[120%] w-full object-cover md:object-left-top lg:object-center xl:h-full xl:object-left-top"
        />
      </div>
      <div className="flex flex-col shrink-0 md:h-full md:w-[50%] xl:w-[50%] xl:h-full h-[60%] p-3 w-full">
        <div
          className={`text-xl ${
            theme === "light" ? "text-black" : "text-white"
          }  m-2 mb-3`}
        >
          {projectTitle}
        </div>
        <div
          className={`mx-2 mb-3 h-[60%] lg:h-[45%] lg:text-[1.1em] w-[90%] text-xs md:text-[12px] lg:text-md ${
            theme === "light" ? "text-gray-800" : "text-white"
          } `}
        >
          {projectDescription}
        </div>
        <div className="mx-2 flex items-center flex-wrap  m-0 w-[95%]">
          {projectTitle === "Lyric Church" ? (
            <SkillsButton name="Next.Js" />
          ) : (
            <SkillsButton name="HTML" />
          )}
          {projectTitle === "Task-It" && <SkillsButton name="Next.js" />}
          <SkillsButton
            name={
              projectTitle === "Collabify" ||
              projectTitle === "Rift" ||
              projectTitle === "Task-It" ||
              projectTitle === "Lyric Church"
                ? "Tailwind"
                : "CSS"
            }
          />
          <SkillsButton
            name={
              projectTitle === "Rift" ||
              projectTitle === "Task-It" ||
              projectTitle === "Lyric Church"
                ? "Node.js"
                : "Javascript"
            }
          />
          {projectTitle === "Collabify" && <SkillsButton name="React" />}
          {projectTitle === "Lyric Church" && <SkillsButton name="MongoDB" />}
          {projectTitle === "Rift" && <SkillsButton name="React" />}
        </div>
        <div className="mx-2 flex items-center my-3 mb-5 flex-wrap  h-15 m-0 w-[80%] ">
          <a href={demoUrl} target="_blank">
            <div
              className={`transition-all duration-300 mb-2 shrink-0 ease-in flex px-4 justify-center items-center min-w-20  w-fit h-9 rounded-lg border-1 text-xs mr-2 ${
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
              className={`transition-all shrink-0 mb-2 duration-300 ease-in  flex px-2 justify-center items-center min-w-20  w-fit h-9 rounded-lg border-1 text-xs mr-2 ${
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
