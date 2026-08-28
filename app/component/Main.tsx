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
import { projects, heroIcons, contactItems } from "@/libs/database";
import Reveal from "./Reveal";
import WhatsappButton from "./WhatsappButton";
import MailButton from "./MailButton";
import HeroIcon from "./HeroIcon";

function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);

  const [isVisible, setIsVisble] = useState(false);
  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisble(true);
        }
      },
      { threshold: 0.2 },
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return { ref, isVisible };
}

const Main = () => {
  const { theme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);

  const hireMeRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const topRef = useRef<HTMLDivElement>(null);
  //const [isButtonsVisible, setIsButtonVisble] = useState(false);
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
    //setIsButtonVisble(true);
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
      <section className="block mt-5 pt-25 md:pt-30 md:mb-8 h-fit w-full md:w-full lg:w-[60%] items-center justify-center">
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
          className={`relative -top-3 md:-top-5 lg:-top-7 shadow-2xl/4 mx-auto shrink-0 flex w-[90%] lg:w-full overflow-hidden  border-2 ${
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
              <HiCheckBadge
                className="text-lg text-blue-700
              "
              />
            </div>
          </div>
          <div
            className={`w-full md:w-[95%]  md:mr-auto mt-2 md:px-6 h-25 text-sm md:text-lg ${
              theme === "light" ? "text-lighter-black" : "text-white"
            }  px-4`}
          >
            I&apos;m Elvis, a <b>full-stack web developer based</b> in Nasarawa,
            Nigeria. I build apps end-to-end-clean code, clear and fast
            delivery. My focus: performance, accessibility, and scalability.
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
              <div>Web Developer</div>
            </div>
            <div className="flex h-9 items-center">
              <div className="mr-2">
                <HiOutlineLocationMarker className="text-lg" />
              </div>
              <div>Nasarawa, Nigeria</div>
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

      <section className="flex px-4 mt-5 flex-col gap-[20px] w-full lg:px-[3%] xl:grid lg:h-fit lg:gap-y-10 md:gap-x-0 lg:grid-cols-2 lg:w-[70%]  xl:place-items-center items-center">
        <div
          ref={projectRef}
          className={`flex flex-col pl-2 w-full mx-auto lg:py-5 lg:pt-10 text-[16px] ${
            theme === "light" ? "text-lighter-black" : "text-white"
          }  font-semibold tracking-tight`}
        >
          MY SKILLS
        </div>
        <Reveal>
          <div
            className={`transition-all shadow-2xl/4  duration-700 lg:mx-auto ease-in w-full  ${
              theme === "light" ? "bg-white " : "bg-lighter-black"
            } mx-auto md:mb-10 gap-4 lg:mb-0 h-fit pb-8 flex flex-col justify-start items-start p-4 rounded-[24px] `}
          >
            <div
              className={`text-[16px] ${
                theme === "light" ? "text-lighter-black " : "text-white"
              } bg-[#1d1d1d] tracking-tight rounded-[8px] px-4 py-1 font-semibold`}
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
            className={`transition-all shadow-2xl/4  duration-700 ease-in w-full md:h-80  ${
              theme === "light" ? "bg-white " : "bg-lighter-black"
            } mx-auto flex flex-col pb-8 md:h-90 justify-start p-4 items-start rounded-3xl lg:mb-0`}
          >
            <div
              className={`mb-4 text-lg ${
                theme === "light" ? "text-lighter-black " : "text-white"
              } font-semibold bg-[#1d1d1d] tracking-tight rounded-[8px] px-4 py-1`}
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
            className={`transition-all shadow-2xl/4  duration-700 ease-in w-full md:h-80   ${
              theme === "light" ? "bg-white " : "bg-lighter-black"
            } mx-auto pb-8 flex flex-col md:h-90 justify-start p-4 items-start rounded-3xl lg:mb-0 `}
          >
            <div
              className={`mb-4 text-[16px] ${
                theme === "light" ? "text-lighter-black " : "text-white"
              } font-semibold bg-[#1d1d1d] tracking-tight rounded-[8px] px-4 py-1`}
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
      </section>
      <section className="w-full flex px-4 flex-col gap-3">
        <div
          ref={projectRef}
          className={`flex flex-col mt-6 mb-3 mx-auto lg:py-5 lg:pt-10 text-[16px] ${
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
          className="w-full mt-6 border-t border-b border-[#646464]"
        >
          <div
            className={`transition-all duration-700 ease-in ${
              theme === "light" ? "bg-white" : "bg-lighter-black"
            } aspect-square text-sm w-full lg:w-[60%] md:px-20  mx-auto flex flex-col justify-start lg:justify-center lg:h-95 px-4 py-4 md:py-0 md:h-80 items-start border-b-gray-400 border-t-gray-400`}
          >
            <div
              className={`flex w-full flex-col mx-auto pb-4 md:pb-0 text-lg ${
                theme === "light" ? "text-lighter-black" : "text-white"
              }  font-semibold`}
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
        <div
          ref={hireMeRef}
          className="flex flex-col items-center w-full mx-auto my-10"
        >
          <WhatsappButton />
          <MailButton />
        </div>
      </Reveal>
      <Footer
        project={handleScrollToProject}
        myContact={handleScrollToContact}
      />
    </main>
  );
};

export default Main;
