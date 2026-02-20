"use client";
import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";
import { FaInstagram, FaLinkedin, FaPhone, FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaAngleUp } from "react-icons/fa";
import Skill from "./Skill";
import ProjectCard from "./ProjectCard";
import HireMe from "./HireMe";
import { FaXTwitter, FaBehance } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { HiCheckBadge } from "react-icons/hi2";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { TbBriefcase } from "react-icons/tb";
import Nav from "./Nav";
import { useTheme } from "../context/ThemeContext";
import Footer from "./Footer";
import Link from "next/link"

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
  const item1 = useScrollAnimation();
  const item2 = useScrollAnimation();
  const item3 = useScrollAnimation();
  const item4 = useScrollAnimation();
  const item5 = useScrollAnimation();
  const item6 = useScrollAnimation();
  const item7 = useScrollAnimation();
  const item8 = useScrollAnimation();
  const item9 = useScrollAnimation();

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
      <div className="block mt-5 pt-25 md:pt-30 md:mb-8 h-fit w-full md:w-full lg:w-[60%] items-center justify-center">
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
              <a
                target="_blank"
                href="https://www.linkedin.com/in/elvis-anthony-84639a265"
              >
                <div className="flex justify-center transition-all duration-300 hover:opacity-75 text-xs items-center h-7 w-7 rounded-xl bg-back-gray">
                  <FaLinkedinIn className="text-lighter-black" />
                </div>
              </a>
              <a target="_blank" href="https://github.com/elvisanthonyy">
                <div className="flex justify-center transition-all duration-300 hover:opacity-75 text-xs items-center h-7 w-7 rounded-xl bg-back-gray">
                  <FiGithub className="text-lighter-black" />
                </div>
              </a>
              <a target="_blank" href="https://www.behance.net/elvisanthony1">
                <div className="flex justify-center transition-all duration-300 hover:opacity-75 text-xs items-center h-7 w-7 rounded-xl bg-back-gray">
                  <FaBehance className="text-lighter-black" />
                </div>
              </a>

              <a target="_blank" href="https://x.com/Elvizanthony">
                <div className="flex justify-center transition-all duration-300 hover:opacity-75 text-xs items-center h-7 w-7 rounded-xl bg-back-gray">
                  <FaXTwitter className="text-lighter-black" />
                </div>
              </a>
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
      </div>

      <div className="flex mt-7 flex-col w-full lg:px-[3%] xl:grid lg:h-fit lg:gap-y-10 md:gap-x-0 lg:grid-cols-2 lg:w-[70%]  xl:place-items-center items-center">
        <div
          ref={item2.ref}
          className={`transition-all shadow-2xl/4  duration-700 lg:mx-auto ease-in aspect-square w-[90%] md:h-80 ${
            item2.isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          } ${
            theme === "light" ? "bg-white " : "bg-lighter-black"
          } mx-auto mb-10 md:mb-10 md:h-90 lg:mb-0 flex flex-col justify-start py-10 items-center rounded-3xl `}
        >
          <div
            className={`mb-5 text-lg ${
              theme === "light" ? "text-lighter-black " : "text-white"
            } font-semibold`}
          >
            FRONTEND
          </div>
          <Skill name={"HTML"} progress={100} />
          <Skill name={"CSS"} progress={75} />
          <Skill name={"Javascript"} progress={75} />
          <Skill name={"Tailwind"} progress={75} />
          <Skill name={"Typescript"} progress={50} />
        </div>
        <div
          ref={item3.ref}
          className={`transition-all shadow-2xl/4  duration-700 ease-in  aspect-square w-[90%] md:h-80  ${
            item3.isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          } ${
            theme === "light" ? "bg-white " : "bg-lighter-black"
          } mx-auto flex flex-col md:h-90 justify-start py-10 items-center rounded-3xl mb-10 lg:mb-0`}
        >
          <div
            className={`mb-5 text-lg ${
              theme === "light" ? "text-lighter-black " : "text-white"
            } font-semibold`}
          >
            BACKEND
          </div>
          <Skill name={"Node.js"} progress={75} />
          <Skill name={"MongoDB"} progress={75} />
          <Skill name={"SQL"} progress={50} />
          <Skill name={"Tailwind"} progress={75} />
          <Skill name={"Next.js"} progress={50} />
          <Skill name={"Express.js"} progress={75} />
        </div>
        <div
          ref={item9.ref}
          className={`transition-all shadow-2xl/4  duration-700 ease-in  aspect-square w-[90%] md:h-80  ${
            item9.isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          } ${
            theme === "light" ? "bg-white " : "bg-lighter-black"
          } mx-auto flex flex-col md:h-90 justify-start py-10 items-center rounded-3xl mb-10 lg:mb-0 `}
        >
          <div
            className={`mb-5 text-lg ${
              theme === "light" ? "text-lighter-black " : "text-white"
            } font-semibold`}
          >
            OTHERS
          </div>
          <Skill name={"GIT"} progress={75} />
          <Skill name={"Figma"} progress={50} />
          <Skill name={"Photoshop"} progress={75} />
          <Skill name={"Illustrator"} progress={75} />
        </div>
      </div>
      <div
        ref={projectRef}
        className={`flex flex-col mx-auto mb-10 lg:py-5 lg:pt-10 text-lg ${
          theme === "light" ? "text-lighter-black" : "text-white"
        }  font-semibold`}
      >
        MY PROJECTS
      </div>
      <div className="flex flex-col w-full justify-center lg:w-[70%] lg:px-[5%]  lg:gap-x-10 lg:grid-cols-2">
        <div
          ref={item5.ref}
          className={`transition-all w-full lg:w-full duration-700 ease-in ${
            item5.isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <ProjectCard
            projectImageUrl="/lyricchurch.png"
            projectTitle="Lyric Church"
            projectDescription="A website to display a church information, activities, partner, view gallery and to keep you updated on programs and series. It was made using NextJs, Mongodb, Node.JS and Tailwind CSS"
            demoUrl="https://lyricchurch.com.ng"
            codeUrl="https://github.com/elvisanthonyy/lyricchurch"
          />
        </div>
        <div
          ref={item5.ref}
          className={`transition-all w-full lg:w-full duration-700 ease-in ${
            item5.isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <ProjectCard
            projectImageUrl="/beatsbyyehuda.png"
            projectTitle="BeatsByYehuda"
            projectDescription="A portfolio website for BeatsByYehuda to display and listens to his beats, and Contact Information, Made using NextJs, Mongodb, Node.JS and Tailwind CSS"
            demoUrl="https://yehuda.vercel.app"
            codeUrl="https://github.com/elvisanthonyy/yehuda"
          />
        </div>
        <div
          ref={item7.ref}
          className={`transition-all duration-700  w-full ease-in ${
            item7.isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <ProjectCard
            projectImageUrl="/collabify.png"
            projectTitle="Collabify"
            projectDescription="A a demo website to allow creators and businesses sign up for a waitlist that would enable collaboration. This was built using React"
            demoUrl="https://elvisanthonyy.github.io/collabify"
            codeUrl="https://github.com/elvisanthonyy/collabiy"
          />
        </div>
        <div
          ref={item1.ref}
          className={`transition-all duration-700 w-full ease-in ${
            item1.isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <ProjectCard
            projectImageUrl="/task-it.png"
            projectTitle="Task-It"
            projectDescription="A website where you can login, create a to-do list with items tailored towards that list, built primarily using Next.js, MongoDB for database and tailwind for a beautiful UI."
            demoUrl="https://task-it-six.vercel.app"
            codeUrl="https://github.com/elvisanthonyy/task-it"
          />
        </div>
        <div
          ref={item8.ref}
          className={`transition-all duration-700 w-full ease-in ${
            item8.isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <ProjectCard
            projectImageUrl="/rift.png"
            projectTitle="Rift"
            projectDescription="A Full-Stack application made with, Node.js, Express.js and MongoDB on the backend and React.js on the frontend. This website allows users to create account send messages, create, like and view posts."
            demoUrl="https://rift-client.vercel.app"
            codeUrl="https://github.com/elvisanthonyy/rift"
          />
        </div>

        <div
          ref={item6.ref}
          className={`transition-all duration-700 w-full ease-in ${
            item6.isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        ></div>
      </div>

      <div
        onClick={handleScrollToTop}
        className={`fixed z-40 ${
          isScrolled ? "flex" : "hidden"
        } right-10 bottom-10 justify-center items-center cursor-pointer w-12 h-12 rounded-full border-1 border-white/50 text-white bg-black shadow-4xl backdrop-blur-2xl`}
      >
        <FaAngleUp />
      </div>

      <div ref={contactRef} className="w-full">
        <div
          ref={item4.ref}
          className={`transition-all duration-700 ease-in ${
            item4.isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          } ${
            theme === "light" ? "bg-white" : "bg-lighter-black"
          } aspect-square text-sm w-full lg:w-[60%] md:px-20  mx-auto flex flex-col justify-start lg:justify-center lg:h-95 py-10 md:py-0 md:h-80 items-center border-b-gray-400 border-t-gray-400`}
        >
          <div
            className={`flex flex-col mx-auto pb-5 md:pb-0 text-lg ${
              theme === "light" ? "text-lighter-black" : "text-white"
            }  font-semibold`}
          >
            CONTACT
          </div>
          <div
            className={`flex my-3 text-md ${
              theme === "light" ? "text-lighter-black" : "text-white"
            }  items-center w-[85%] lg:w-full`}
          >
            <FaLinkedin
              className={`flex shrink-0 text-lg ${
                theme === "light" ? "text-light-black" : "text-white"
              }  `}
            />
             <div className="flex opacity-60 items-center w-[90%]">
                <div className={`border-b w-full mx-4`}></div>
            </div>
            <div className="flex shrink-0 ml-auto"> Elvis Anthony </div>
          </div>
          <div
            className={`flex my-3 text-md ${
              theme === "light" ? "text-lighter-black" : "text-white"
            }  items-center w-[85%] lg:w-full`}
          >
            <FaInstagram
              className={`flex shrink-0 text-lg ${
                theme === "light" ? "text-light-black" : "text-white"
              }  `}
            />
             <div className="flex opacity-60 items-center w-[90%]">
                <div className={`border-b w-full mx-4`}></div>
            </div>
            <div className="flex shrink-0 ml-auto"> Iam_elvizanthony </div>
          </div>
          <div
            className={`flex my-3 text-md ${
              theme === "light" ? "text-lighter-black" : "text-white"
            }  items-center w-[85%] lg:w-full`}
          >
            <FaPhone
              className={`text-lg flex shrink-0 ${
                theme === "light" ? "text-light-black" : "text-white"
              }  `}
            />
            <div className="flex opacity-60 items-center w-[90%]">
                <div className={`border-b w-full mx-4`}></div>
            </div>
            <div className="flex shrink-0 ml-auto"> +234 906 481 2779 </div>
          </div>
          <div
            className={`flex my-3 text-md ${
              theme === "light" ? "text-lighter-black" : "text-white"
            }  items-center w-[85%] lg:w-full`}
          >
            <HiOutlineLocationMarker
              className={`text-lg flex shrink-0 ${
                theme === "light" ? "text-light-black" : "text-white"
              }  `}
            />
            <div className="flex opacity-60 items-center w-[90%]">
                <div className={`border-b w-full mx-4`}></div>
            </div>
            <div className="flex shrink-0 ml-auto"> Nasarawa, Nigeria. </div>
          </div>
          <div
            className={`flex my-3 text-md ${
              theme === "light" ? "text-lighter-black" : "text-white"
            }  items-center w-[85%] lg:w-full`}
          >
            <BiLogoGmail
              className={`flex shrink-0 text-lg ${
                theme === "light" ? "text-light-black" : "text-white"
              }  `}
            />
            <div className="flex opacity-60 items-center w-[90%]">
                <div className={`border-b w-full mx-4`}></div>
            </div>
            <div className="flex shrink-0 ml-auto"> info.elvisanthony@gmail.com </div>
          </div>
        </div>
      </div>
      <div ref={hireMeRef} className="flex flex-col items-center w-full mx-auto my-10">
        <Link target="_blank" className="md:w-[60%] lg:w-[30%] w-[90%]" href="https://wa.me/message/Z7QT2V66JO54B1">
        <button className="cursor-pointer w-full flex items-center justify-center  rounded-lg bg-green-500 flex h-13">
          <FaWhatsapp className={`text-2xl ${theme === "dark" ? "text-black" : "text-white"}`} />
        </button>
        </Link>
        <a target="_blank" className="md:w-[60%] lg:w-[30%] w-[90%]" href="mailto:info.elvisanthony@gmail.com?subject=Hello%20Elvis">
          <button
        className={`flex cursor-pointer w-full mx-auto mt-5 mb-10 transition-all duration-500 ease-in-out justify-center items-center rounded-lg hover:rounded-4xl h-14 ${
          theme === "light"
            ? "bg-light-black text-nav-gray"
            : "text-light-black bg-nav-gray"
        } `}
      >
        Send Email
      </button>
        </a>
        
      </div>
      <Footer
        project={handleScrollToProject}
        myContact={handleScrollToContact}
      />
    </main>
  );
};

export default Main;
