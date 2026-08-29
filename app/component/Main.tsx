"use client";
import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";
import { FaAngleUp } from "react-icons/fa";
import Skill from "./Skill";
import ProjectCard from "./ProjectCard";
import { HiCheckBadge } from "react-icons/hi2";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { TbBriefcase } from "react-icons/tb";
import Nav from "./Nav";
import { useTheme } from "../context/ThemeContext";
import Footer from "./Footer";
import ContactComponent from "./ContactComponent";
import { projects, heroIcons, contactItems, location } from "@/libs/database";
import Reveal from "./Reveal";
import WhatsappButton from "./WhatsappButton";
import MailButton from "./MailButton";
import HeroIcon from "./HeroIcon";

const Main = () => {
  const { theme } = useTheme();

  //variable to store when page is scrolled
  const [isScrolled, setIsScrolled] = useState(false);

  //refs for scrolled to sections
  const hireMeRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const topRef = useRef<HTMLDivElement>(null);

  //scroll to sections
  const handleScrollToProject = () => {
    projectRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToHireMe = () => {
    hireMeRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToTop = () => {
    topRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    //show scroll to top button when page is scrolled
    const handleScroll = () => {
      if (window.scrollY > 5) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main
      ref={topRef}
      className="flex flex-col items-center relative min-h-screen h-fit"
    >
      <Nav contact={() => handleScrollToHireMe?.()} />
      {/* Hero section*/}
      <section className="block md:px-15 px-4 lg:px-0 mt-5 pt-18 md:pt-30 h-fit w-full lg:w-[60%] items-center justify-center">
        <div className="flex justify-center mx-auto relative w-fit h-fit">
          <div
            className={`flex items-center font-light font-e-light text-5xl sm:text-[3.2em] lg:text-8xl xl:text-9xl md:text-7xl smd:text-[5em] serif-font ${
              theme === "light" ? "text-darkGray" : "text-lighter-black"
            } `}
          >
            <b className="mr-2 font-semibold">Elvis</b> Anthony
          </div>
          <div className="absolute rotate-5 text-[8px] lg:top-4 sm:text-[10px] md:text-[11px] top-1 -right-3 flex text-darkerGray justify-center items-center w-fit h-fit px-3 md:px-9 md:-right-7 lg:px-13 lg:h-8 md:py-1 py-[2px] bg-amber-200 rounded-4xl">
            Web Developer
          </div>
        </div>

        <div
          className={`relative -top-3 md:-top-5 lg:-top-7 shadow-2xl/4 mx-auto shrink-0 flex w-full lg:w-full overflow-hidden  border-2 ${
            theme === "light"
              ? "border-white text-black bg-white"
              : "border-lighter-black bg-lighter-black"
          }  rounded-2xl  flex-col  items-center xl:w-full h-100 md:h-120 justify-start`}
        >
          <div
            className={`w-full h-22 md:h-33 ${
              theme === "light" ? "bg-back-gray" : "bg-light-black"
            } `}
          ></div>
          <div className="flex w-full h-17 md:h-20 items-center justify-end">
            <div className="flex w-[52%] md:w-[35%] h-full items-center justify-between pr-3 px-1">
              {heroIcons.map((icon, index) => (
                <div key={index}>
                  <HeroIcon Icon={icon.icon} link={icon.link} />
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center w-full px-4 md:px-6 h-10">
            <div
              className={`flex ${
                theme === "light" ? "text-black" : "text-white"
              } text-lg font-bold mr-2`}
            >
              Elvis Anthony
            </div>
            <div>
              <HiCheckBadge className="text-[28px] text-[#00a2ff]" />
            </div>
          </div>
          <div
            className={`w-full md:w-[95%]  md:mr-auto mt-2 md:px-6 min-h-25 text-sm md:text-lg ${
              theme === "light" ? "text-lighter-black" : "text-[#e4e4e4]"
            }  px-4`}
          >
            {`I'm Elvis, a full-stack web developer based in ${location},
            Nigeria. I build apps end-to-end-clean code, clear and fast
            delivery. My focus: performance, accessibility, and scalability.`}
          </div>
          <div
            className={`flex items-center text-sm ${
              theme === "light" ? "text-lighter-black" : "text-darkGray"
            }  px-4 md:px-6 md:mt-4 w-full h-10`}
          >
            <div className="flex h-9 items-center mr-5">
              <div className="mr-2">
                <TbBriefcase className="text-lg" />
              </div>
              <div>Software Engineer</div>
            </div>
            <div className="flex h-9 items-center">
              <div className="mr-2">
                <HiOutlineLocationMarker className="text-lg" />
              </div>
              <div>{location}</div>
            </div>
          </div>
          <div className="absolute overflow-hidden rounded-2xl h-33 md:h-45 w-30 md:w-45 z-20 top-3 md:top-5 md:left-5 left-3 bg-amber-200">
            <Image
              height={132}
              width={120}
              draggable={false}
              src={"/profile.jpg"}
              alt="profile image"
              className="md:w-45 md:h-50 object-cover"
            />
          </div>
        </div>
      </section>

      {/* skill section*/}
      <section className="px-4 md:px-15 lg:px-0 mt-5 lg:w-[60%]  items-center flex gap-4 flex-col w-full">
        <div
          ref={projectRef}
          className={`flex flex-col pl-2 w-full mx-auto text-[16px] ${
            theme === "light" ? "text-lighter-black" : "text-white"
          }  font-semibold tracking-tight`}
        >
          MY SKILLS
        </div>
        <div className="flex flex-col gap-[12px] w-full  xl:grid lg:h-fit lg:gap-y-3 lg:gap-x-3 md:gap-x-0 lg:grid-cols-2  xl:place-items-center items-center">
          <Reveal>
            <div
              className={`transition-all xl:aspect-[4/3] shadow-2xl/4  duration-700 ease-in w-full  ${
                theme === "light" ? "bg-white " : "bg-lighter-black"
              } mx-auto gap-4 lg:mb-0 h-fit pb-8 flex flex-col justify-start items-start p-4 lg:w-auto  rounded-[24px] `}
            >
              <div
                className={`text-[16px] ${
                  theme === "light"
                    ? "text-lighter-black bg-[#ededed]"
                    : "text-white bg-[#2c2c2c]"
                }  tracking-tight rounded-[8px] px-4 py-1 font-semibold`}
              >
                FRONTEND
              </div>
              <div className="w-full px-1 flex flex-col gap-3">
                <Skill name={"HTML"} progress={100} />
                <Skill name={"CSS"} progress={75} />
                <Skill name={"Javascript"} progress={75} />
                <Skill name={"Tailwind"} progress={75} />
                <Skill name={"Typescript"} progress={50} />
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div
              className={`transition-all lg:w-auto shadow-2xl/4  duration-700 ease-in w-full ${
                theme === "light" ? "bg-white " : "bg-lighter-black"
              } mx-auto flex flex-col pb-8 justify-start p-4 items-start xl:aspect-[4/3] rounded-3xl lg:mb-0`}
            >
              <div
                className={`mb-4 text-lg ${
                  theme === "light"
                    ? "text-lighter-black bg-[#ededed]"
                    : "text-white bg-[#2c2c2c]"
                } font-semibold  tracking-tight rounded-[8px] px-4 py-1`}
              >
                BACKEND
              </div>
              <div className="w-full px-1 flex flex-col gap-3">
                <Skill name={"Node.js"} progress={75} />
                <Skill name={"MongoDB"} progress={75} />
                <Skill name={"SQL"} progress={50} />
                <Skill name={"Tailwind"} progress={75} />
                <Skill name={"Next.js"} progress={100} />
                <Skill name={"Express.js"} progress={75} />
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div
              className={`transition-all xl:aspect-[4/3] shadow-2xl/4  duration-700 ease-in w-full lg:w-auto  ${
                theme === "light" ? "bg-white " : "bg-lighter-black"
              } mx-auto pb-8 flex flex-col justify-start p-4 items-start rounded-3xl lg:mb-0 `}
            >
              <div
                className={`mb-4 text-[16px] ${
                  theme === "light"
                    ? "text-lighter-black bg-[#ededed]"
                    : "text-white bg-[#2c2c2c]"
                } font-semibold  tracking-tight rounded-[8px] px-4 py-1`}
              >
                OTHERS
              </div>
              <div className="w-full px-1 flex flex-col gap-3">
                <Skill name={"GIT"} progress={75} />
                <Skill name={"Figma"} progress={75} />
                <Skill name={"Photoshop"} progress={50} />
                <Skill name={"Illustrator"} progress={75} />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Project section */}
      <section className="w-full md:px-15  lg:w-[60%] lg:px-0 flex px-4 flex-col gap-3">
        <div
          ref={projectRef}
          className={`flex flex-col mt-7 mb-1 mx-auto text-[16px] ${
            theme === "light" ? "text-lighter-black" : "text-white"
          }  font-semibold w-full px-2`}
        >
          MY PROJECTS
        </div>

        {projects.map((project, index) => (
          <div key={index} className="w-full">
            <Reveal>
              <ProjectCard
                projectTitle={project.title}
                projectImageUrl={project.imageUrl}
                projectDescription={project.description}
                demoUrl={project.demoUrl}
                codeUrl={project.codeUrl}
              />
            </Reveal>
          </div>
        ))}
      </section>

      <div className="flex flex-col w-full justify-center lg:w-[70%] lg:px-[5%]  lg:gap-x-10 lg:grid-cols-2">
        <div className={`transition-all duration-700 w-full ease-in `}></div>
      </div>

      {/* Scroll to the top */}
      <div
        onClick={handleScrollToTop}
        className={`fixed z-40 ${
          isScrolled ? "flex" : "hidden"
        } right-10 bottom-10 justify-center items-center cursor-pointer w-12 h-12 rounded-full border-1 border-white/50 text-white bg-black shadow-4xl backdrop-blur-2xl`}
      >
        <FaAngleUp />
      </div>

      <Reveal>
        <div
          ref={contactRef}
          className={`w-full mt-8 ${
            theme === "light" ? "text-lighter-black" : "text-white "
          } lg:border-0 lg:rounded-[20px] border-t border-b border-[#646464]`}
        >
          <div
            className={`transition-all lg:border duration-700 ease-in ${
              theme === "light"
                ? "bg-white border-[#d8d8d8] "
                : "bg-lighter-black border-[#646464] "
            } pb-8 text-sm w-full h-fit mx-auto flex flex-col justify-start lg:justify-center lg:rounded-[20px] px-4 lg:w-[60%] md:px-15 py-4 items-start `}
          >
            <div
              className={`flex w-full mb-4 flex-col mx-auto pb-4 md:pb-0 text-lg   font-semibold`}
            >
              CONTACT
            </div>

            <div className="flex gap-3 flex-col w-full">
              {contactItems.map((item, index) => (
                <div key={index}>
                  <ContactComponent name={item.label} Icon={item.icon} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <section
          ref={hireMeRef}
          className="flex flex-col gap-4 lg:flex-row md:items-start md:px-15 lg:w-[60%] lg:px-0 items-center w-full mx-auto my-10"
        >
          <WhatsappButton />
          <MailButton />
        </section>
      </Reveal>
      <Footer
        project={handleScrollToProject}
        myContact={handleScrollToContact}
      />
    </main>
  );
};

export default Main;
