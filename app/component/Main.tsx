"use client";
import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";
import { FaInstagram, FaLinkedin, FaPhone } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaAngleUp } from "react-icons/fa";
import Skill from "./Skill";
import ProjectCard from "./ProjectCard";
import HireMe from "./HireMe";
import { FaXTwitter, FaBehance } from "react-icons/fa6";
import { HiCheckBadge } from "react-icons/hi2";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { TbBriefcase } from "react-icons/tb";
import Nav from "./Nav";

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
  //const item1 = useScrollAnimation();
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
  //const [isButtonsVisible, setIsButtonVisble] = useState(false);
  /*const handleScrollToProject = () => {
    projectRef.current?.scrollIntoView({ behavior: "smooth" });
  };*/

  const handleScrollToHireMe = () => {
    hireMeRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToTop = () => {
    topRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    //setIsButtonVisble(true);
  }, []);

  return (
    <main
      ref={topRef}
      className="flex flex-col items-center relative min-h-screen h-fit"
    >
      <Nav contact={() => handleScrollToHireMe?.()} />
      <div className="block mt-5 pt-25 md:pt-30 md:mb-8 h-fit w-full md:w-[65%] items-center justify-center">
        <div className="flex justify-center mx-auto relative w-[90%] h-fit">
          <div className="flex items-center  text-5xl md:text-9xl serif-font font-medium text-darkGray">
            Elvis Anthony
          </div>
          <div className="absolute rotate-5 text-xs top-0 md:top-5 md:right-8 right-0 flex text-darkerGray justify-center items-center w-fit h-fit px-3 md:px-9 md:py-1 py-[2px] md:text-xl bg-amber-200 rounded-4xl">
            Web Developer
          </div>
        </div>

        <div className="relative -top-3 md:-top-8 shadow-2xl/4 mx-auto shrink-0 flex w-[90%] lg:w-[95] overflow-hidden  border-2 border-white rounded-2xl text-black flex-col bg-white items-center xl:w-full h-100 md:h-120 justify-start">
          <div className="w-full h-22 md:h-33 bg-back-gray"></div>
          <div className="flex w-full h-17 items-center justify-end">
            <div className="flex w-[52%] md:w-[20%]  h-full items-center justify-between pr-3 px-1">
              <div className="flex justify-center text-xs items-center h-7 w-7 rounded-xl bg-back-gray">
                <FaBehance className="text-lighter-black" />
              </div>
              <div className="flex justify-center text-xs items-center h-7 w-7 rounded-xl bg-back-gray">
                <FaXTwitter className="text-lighter-black" />
              </div>
              <div className="flex justify-center text-xs items-center h-7 w-7 rounded-xl bg-back-gray">
                <FaLinkedinIn className="text-lighter-black" />
              </div>
              <div className="flex justify-center text-xs items-center h-7 w-7 rounded-xl bg-back-gray">
                <FaLinkedinIn className="text-lighter-black" />
              </div>
            </div>
          </div>
          <div className="flex items-center w-full px-4 h-10">
            <div className="flex text-lg font-bold mr-2">Elvis Anthony</div>
            <div>
              <HiCheckBadge
                className="text-lg text-blue-700
              "
              />
            </div>
          </div>
          <div className="w-full md:w-[95%]  md:mr-auto mt-2 h-25 text-sm md:text-lg text-lighter-black px-4">
            I&apos;m Elvis, a full-stack web developer based in Abuja, Nigeria.
            I build apps end-to-end-clean code, clear and fast delivery. My
            focus: perfromance, accessibility, and scalability.
          </div>
          <div className="flex items-center text-sm text-lighter-black px-6 w-full h-10">
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
              <div>Abuja, Nigeria</div>
            </div>
          </div>
          <div className="absolute overflow-hidden rounded-2xl h-33 md:h-45 w-30 md:w-45 z-20 top-3 left-3 bg-amber-200">
            <Image
              height={132}
              width={120}
              src={"/profile.jpg"}
              alt="profile image"
              className="md:w-45 md:h-50 object-cover"
            />
          </div>
        </div>
      </div>

      <div className="flex mt-7 flex-col w-full lg:px-[3%] lg:grid lg:h-fit lg:gap-y-10 md:gap-x-0 md:place-content-center lg:place-content-center lg:grid-cols-2 lg:w-[75%] justify-center items-center">
        <div
          ref={item2.ref}
          className={`transition-all shadow-2xl/4  duration-700 lg:mx-auto ease-in aspect-square w-[90%] md:h-80 ${
            item2.isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          } bg-white mx-auto mb-10 md:mb-0 flex flex-col justify-start py-10 items-center rounded-3xl `}
        >
          <div className="mb-5 text-lg text-light-black font-semibold">
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
          } bg-white mx-auto flex flex-col justify-start py-10 items-center rounded-3xl mb-10 lg:mb-0`}
        >
          <div className="mb-5 text-lg text-light-black font-semibold">
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
          } bg-white mx-auto flex flex-col justify-start py-10 items-center rounded-3xl mb-10 lg:mb-0 `}
        >
          <div className="mb-5 text-lg text-light-black font-semibold">
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
        className="flex flex-col mx-auto mb-5 text-lg text-light-black font-semibold"
      >
        MY PROJECTS
      </div>
      <div className="flex flex-col w-full justify-center lg:w-[75%] lg:px-[5%]  lg:gap-x-10 lg:grid-cols-2">
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
            codeUrl="https://github.com/elvisanthonyy/lyricchurch"
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
            codeUrl="https://github.com/elvisanthonyy/texcom"
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
            demoUrl="https://rift-client.vercel.app"
            codeUrl="https://github.com/elvisanthonyy/rift"
          />
        </div>
      </div>

      <div
        onClick={handleScrollToTop}
        className="fixed hidden right-10 bottom-10 justify-center items-center cursor-pointer w-12 h-12 rounded-full border-1 border-white/50 text-white bg-black shadow-4xl backdrop-blur-2xl"
      >
        <FaAngleUp />
      </div>

      <div
        ref={item4.ref}
        className={`transition-all duration-700 ease-in ${
          item4.isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        } aspect-square text-sm w-full lg:w-[65%] bg-white mx-auto flex flex-col justify-start py-10 md:h-80 items-center border-b-gray-400 border-t-gray-400`}
      >
        <div className="flex flex-col mx-auto pb-5 text-lg text-light-black font-semibold">
          CONTACT
        </div>
        <div className="flex my-3 text-md text-lighter-black items-center w-[90%]">
          <FaLinkedin className="w-[20%] text-lg text-light-black " />
          <div> Elvis Anthony </div>
        </div>
        <div className="flex my-2 text-md text-lighter-black items-center w-[90%]">
          <FaInstagram className="w-[20%] text-lg text-light-black" />
          <div> Iam_elvizanthony </div>
        </div>
        <div className="flex my-3 text-md text-lighter-black items-center w-[90%]">
          <FaPhone className="w-[20%] text-lg text-light-black rotate-90" />
          <div> +234 906 481 2779 </div>
        </div>
        <div className="flex my-3 text-md text-lighter-black items-center w-[90%]">
          <HiOutlineLocationMarker className="w-[20%] text-xl text-light-black" />
          <div> Abuja, Nigeria. </div>
        </div>
        <div className="flex my-3 text-md text-lighter-black items-center w-[90%]">
          <BiLogoGmail className="w-[20%] text-lg text-light-black" />
          <div> info.elvisanthony@gmail.com </div>
        </div>
      </div>
      <div ref={hireMeRef} className="flex w-full mx-auto my-10">
        <HireMe />
      </div>
    </main>
  );
};

export default Main;
