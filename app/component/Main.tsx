"use client";
import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaLocationArrow,
} from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaAngleUp } from "react-icons/fa";

import Skill from "./Skill";
import ProjectCard from "./ProjectCard";
import HireMe from "./HireMe";

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
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return { ref, isVisible };
}

const Main = () => {
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
  const topRef = useRef<HTMLDivElement>(null);
  const [isButtonsVisible, setIsButtonVisble] = useState(false);
  const handleScrollToProject = () => {
    projectRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToHireMe = () => {
    hireMeRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToTop = () => {
    topRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    setIsButtonVisble(true);
  }, []);

  return (
    <main
      ref={topRef}
      className="flex flex-col items-center relative min-h-screen h-fit"
    >
      <div className="flex flex-col shrink-0 lg:flex-row pt-25 h-[100dvh] w-full items-center xl:justify-between lg:items-start bg-gradient-to-b from-white/0 from-10% via-green-400/10 to-white/0">
        <div className="flex  flex-col items-center xl:w-[50%] h-[50%] md:h-[90%] justify-center md:items-end">
          <div className="text-2xl lg:text-5xl mt-5 mb-2 md:mr-3 text-gray-300">
            <div className="mr-2">
              Hello, I&apos;m{" "}
              <span className="text-yellow-500 text-2xl lg:text-5xl ">
                Elvis
              </span>
            </div>
          </div>
          <div className="text-4xl mt-1 md:mr-12 text-gray-300 mb-3 lg:text-6xl ">
            Web Developer
          </div>
          <div className="flex justify-center md:justify-end text-center md:text-right text-xl lg:text-2xl  mt-1 mx-auto  text-gray-300 mb-5 w-[85%]">
            Crafting digital solutions, one pixel at a time
          </div>

          <div
            className={`transition-all duration-700 ease-in flex justify-center ${
              isButtonsVisible ? "opacity-100" : "opacity-0"
            }  w-full mt-1 md:justify-end md:mx-0`}
          >
            <button
              onClick={handleScrollToHireMe}
              className="cursor-pointer transition-all duration-500 text-sm lg:text-lg flex m-3 rounded-4xl justify-center items-center w-[35%] h-15 bg-white/5 border-1 border-white text-white hover:bg-white hover hover:text-black"
            >
              Hire me
            </button>
            <button
              onClick={handleScrollToProject}
              className="cursor-pointer transition-all duration-500 text-sm lg:text-lg flex m-3 rounded-4xl justify-center items-center w-[35%] h-15 bg-green-700/10 border-1 border-green-500 hover:bg-green-500"
            >
              Projects
            </button>
          </div>
        </div>
        <div className="flex justify-center items-start h-[55%] md:h-[90%] md:items-center md:mx-10 w-full md:w-[50%] md:justify-start">
          <div className="flex justify-center items-end relative md:h-90 md:w-90 lg:w-130 lg:h-130 h-70 w-70 rounded-[50%] border-6 border-t-green-400 border-b-green-400 border-yellow-500 animate-pulse hover:animate-none">
            <div className=" mx-auto flex items-center  md:h-90 md:w-90 lg:w-130 lg:h-130 h-70  w-70 rounded-full overflow-hidden">
              <Image
                src="/elvis2.png"
                className="h-500 -mb-20 object-contain"
                alt="my image"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        ref={item1.ref}
        className={`transition-all duration-700 ease-in transform aspect-square md:aspect-none md:h-80 w-full border-t-1 border-b-1 bg-gradient-to-bl to-50% from-white/3 ${
          item1.isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        } to-green-300/2  mx-auto flex flex-col justify-start items-center py-10 border-green-600`}
      >
        <div className="mb-5">About</div>

        <div className="w-[80%] flex justify-center items-center">
          I&apos;m Elvis Anthony, a passionate full-stack web develover that
          leaves in Abuja Nigeria
        </div>
      </div>
      <div className="flex flex-col mx-auto my-10">Skills</div>

      <div className="flex flex-col w-full lg:px-[3%] lg:grid lg:h-fit lg:place-content-center lg:grid-cols-3 justify-center items-center">
        <div
          ref={item2.ref}
          className={`transition-all duration-700 lg:mx-auto ease-in aspect-square w-[90%] md:h-80 bg-gradient-to-bl ${
            item2.isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          } to-50% from-white/3 to-green-300/2 border-1 mx-auto mb-10 md:mb-0 flex flex-col justify-start py-10 items-center rounded-3xl border-gray-400`}
        >
          <div className="mb-5">FRONTEND</div>
          <Skill name={"HTML"} progress={100} />
          <Skill name={"CSS"} progress={75} />
          <Skill name={"Javascript"} progress={75} />
          <Skill name={"Tailwind"} progress={75} />
          <Skill name={"Typescript"} progress={50} />
        </div>
        <div
          ref={item3.ref}
          className={`transition-all duration-700 ease-in  aspect-square w-[90%] md:h-80 bg-gradient-to-bl ${
            item3.isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          } to-50% from-white/3 to-green-300/2 border-1 mx-auto flex flex-col justify-start py-10 items-center rounded-3xl mb-10 lg:mb-0 border-gray-400`}
        >
          <div className="mb-5">BACKEND</div>
          <Skill name={"Node.js"} progress={75} />
          <Skill name={"MongoDB"} progress={75} />
          <Skill name={"SQL"} progress={50} />
          <Skill name={"Tailwind"} progress={75} />
          <Skill name={"Next.js"} progress={50} />
          <Skill name={"Express.js"} progress={75} />
        </div>
        <div
          ref={item9.ref}
          className={`transition-all duration-700 ease-in  aspect-square w-[90%] md:h-80 bg-gradient-to-bl ${
            item9.isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          } to-50% from-white/3 to-green-300/2 border-1 mx-auto flex flex-col justify-start py-10 items-center rounded-3xl mb-10 lg:mb-0 border-gray-400`}
        >
          <div className="mb-5">OTHERS</div>
          <Skill name={"GIT"} progress={75} />
          <Skill name={"Figma"} progress={75} />
          <Skill name={"Photoshop"} progress={75} />
          <Skill name={"Illustrator"} progress={75} />
        </div>
      </div>
      <div ref={projectRef} className="flex flex-col mx-auto my-10">
        MY PROJECTS
      </div>
      <div className="flex flex-col w-full justify-center lg:px-[5%] lg:grid lg:gap-x-10 lg:grid-cols-2">
        <div
          ref={item5.ref}
          className={`transition-all w-full lg:w-full duration-700 ease-in ${
            item5.isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <ProjectCard
            projectImageUrl="/lyricChurch.jpg"
            projectTitle="Lyric Church"
            projectDescription="A website to display a church information, activities, and to keep you updated on programs and series. Tt was made using HTML, CSS and Javascript"
            demoUrl="https://lyricchurch.com.ng"
            codeUrl="https://github.com/elvisanthony/lyricchurch"
          />
        </div>
        <div
          ref={item6.ref}
          className={`transition-all duration-700 w-full ease-in ${
            item6.isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <ProjectCard
            projectImageUrl="/texcom.jpg"
            projectTitle="TexCom"
            projectDescription="A website to see most popular phone and Laptop brand's latest release with most important spec. This was made using HTML, CSS, and Javascript"
            demoUrl="https://elvisanthonyy.github.io/texcom"
            codeUrl="https://github.com/elvisanthony/texcom"
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
            codeUrl="https://github.com/elvisanthony/collabiy"
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
            projectImageUrl="/rift.jpg"
            projectTitle="Rift"
            projectDescription="A Full-Stack application made with, Node.js, Express.js and MongoDB on the backend and React.js on the frontend. This website allows users to create account send messages, create, like and view posts."
            demoUrl="https://rift-client-vercel.app"
            codeUrl="https://github.com/elvisanthony/rift"
          />
        </div>
      </div>

      <div
        onClick={handleScrollToTop}
        className="fixed right-10 bottom-10 flex justify-center items-center cursor-pointer w-12 h-12 rounded-full border-1 border-white/50 text-white bg-green-800/90 shadow-4xl backdrop-blur-2xl"
      >
        <FaAngleUp />
      </div>
      <div className="flex flex-col mx-auto my-10 ">CONTACT</div>
      <div
        ref={item4.ref}
        className={`transition-all duration-700 ease-in ${
          item4.isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        } aspect-square text-sm w-full bg-gradient-to-bl to-50% from-white/3 to-green-300/2  bg-white/2 border-b-1 border-t-1 mx-auto flex flex-col justify-start py-10 md:h-80 items-center border-b-gray-400 border-t-gray-400`}
      >
        <div className="flex my-2 items-center w-[90%]">
          <FaLinkedin className="w-[20%]  text-amber-200" />
          <div> Elvis Anthony </div>
        </div>
        <div className="flex my-2 items-center w-[90%]">
          <FaInstagram className="w-[20%]  text-amber-200" />
          <div> Iam_elvizanthony </div>
        </div>
        <div className="flex my-2 items-center w-[90%]">
          <FaPhone className="w-[20%]  text-amber-200 rotate-90" />
          <div> +234 906 481 2779 </div>
        </div>
        <div className="flex my-2 items-center w-[90%]">
          <FaLocationArrow className="w-[20%]  text-amber-200" />
          <div> Abuja, Nigeria. </div>
        </div>
        <div className="flex my-2 items-center w-[90%]">
          <BiLogoGmail className="w-[20%]  text-amber-200" />
          <div> info.elvisanthony@gmail.com </div>
        </div>
      </div>
      <div ref={hireMeRef} className="flex flex-col mx-auto my-10">
        HIRE ME
      </div>
      <HireMe />
    </main>
  );
};

export default Main;
