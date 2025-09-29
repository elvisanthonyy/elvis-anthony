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

function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisble] = useState(false);
  useEffect(() => {
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
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return { ref, isVisible };
}

const Main = () => {
  const item1 = useScrollAnimation();
  const item2 = useScrollAnimation();
  const item3 = useScrollAnimation();
  const item4 = useScrollAnimation();
  const projectRef = useRef<HTMLDivElement>(null);
  const topRef = useRef<HTMLDivElement>(null);
  const [isButtonsVisible, setIsButtonVisble] = useState(false);
  const handleScrollToProject = () => {
    projectRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleScrollToTop = () => {
    topRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    setIsButtonVisble(true);
  });

  return (
    <main
      ref={topRef}
      className="flex flex-col items-center relative pb-50 min-h-screen h-fit"
    >
      <div className="flex pt-25 h-screen flex-col w-full items-center bg-gradient-to-b from-white/0 from-10% via-green-400/10 to-white/0">
        <div className="text-2xl mt-5 mb-2 text-gray-300">
          <div className="mr-2">
            Hello, I&apos;m{" "}
            <span className="text-yellow-500 text-2xl">Elvis</span>
          </div>
        </div>
        <div className="text-4xl mt-1 text-gray-300 mb-3">Web Developer</div>
        <div className="flex text-center text-xl mt-1 text-gray-300 mb-5 w-[85%]">
          Crafting digital solutions, one pixel at a time
        </div>

        <div
          className={`transition-all duration-700 ease-in flex justify-center ${
            isButtonsVisible ? "opacity-100" : "opacity-0"
          }  w-full mt-5`}
        >
          <button className="cursor-pointer transition-all duration-500 text-sm flex m-3 rounded-4xl justify-center items-center w-[35%] h-15 bg-white/5 border-1 border-white text-white hover:bg-white hover hover:text-black">
            Hire me
          </button>
          <button
            onClick={handleScrollToProject}
            className="cursor-pointer transition-all duration-500 text-sm flex m-3 rounded-4xl justify-center items-center w-[35%] h-15 bg-green-700/10 border-1 border-green-500 hover:bg-green-500"
          >
            Projects
          </button>
        </div>

        <div className="flex justify-center items-end relative h-70 w-70 m-10 mt-10 rounded-[50%] border-6 border-t-green-400 border-b-green-400 border-yellow-500 animate-pulse hover:animate-none">
          <div className=" mx-auto flex items-center h-90 w-70 rounded-bl-[46%] rounded-br-[46%] overflow-hidden">
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
      <div
        ref={item1.ref}
        className={`transition-all duration-700 ease-in transform aspect-square  w-full border-t-1 border-b-1 bg-gradient-to-bl to-50% from-white/3 ${
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

      <div
        ref={item2.ref}
        className={`transition-all duration-700 ease-in aspect-square w-[90%] bg-gradient-to-bl ${
          item2.isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        } to-50% from-white/3 to-green-300/2 border-1 mx-auto flex flex-col justify-start py-10 items-center rounded-3xl border-gray-400`}
      >
        <div className="mb-5">FRONTEND</div>
        <Skill name={"HTML"} progress={100} />
        <Skill name={"CSS"} progress={75} />
        <Skill name={"Javascript"} progress={75} />
        <Skill name={"Tailwind"} progress={75} />
        <Skill name={"Typescript"} progress={50} />
      </div>
      <div className="aspect-square mt-10 w-[90%] bg-gradient-to-bl to-50% from-white/3 to-green-300/2  bg-white/2 border-1 mx-auto flex flex-col justify-start py-10 items-center rounded-3xl border-gray-400">
        <div className="mb-5">BACKEND</div>
        <Skill name={"Node.js"} progress={75} />
        <Skill name={"MongoDB"} progress={75} />
        <Skill name={"SQL"} progress={50} />
        <Skill name={"Tailwind"} progress={75} />
        <Skill name={"Next.js"} progress={50} />
      </div>
      <div className="flex flex-col mx-auto my-10">CONTACT</div>
      <div className="aspect-square text-sm w-[90%] bg-gradient-to-bl to-50% from-white/3 to-green-300/2  bg-white/2 border-1 mx-auto flex flex-col justify-start py-10 items-center rounded-3xl border-gray-400">
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
      <div ref={projectRef} className="flex flex-col mx-auto my-10">
        MY PROJECTS
      </div>
      <div className="relative aspect-[4/5] px-3 overflow-hidden w-[90%] border-1 bg-gradient-to-bl to-50% from-white/3 to-green-300/2 bg-white/2 shadow-3xl rounded-2xl ">
        <div className="absolute top-0 left-0 w-full h-[40%] bg-white"></div>
        <div className="text-xl mt-[60%] text-green-500 m-3">Lyric Church</div>
        <div className="ml-3 h-[20%] w-[80%] ">
          A website to display a church hello can we see the cap in the side of
          the world
        </div>
        <div className="ml-3 flex items-center my-3 w-[80%]">
          <div className="flex justify-center items-center w-20 h-8 rounded-3xl border-1 text-sm mr-2 border-green-600">
            HTML
          </div>
          <div className="flex justify-center items-center min-w-20  w-fit h-8 rounded-3xl border-1 text-sm mr-2 border-green-600">
            CSS
          </div>
          <div className="flex justify-center items-center min-w-20  w-fit h-8 rounded-3xl border-1 text-sm mr-2 border-green-600">
            Javascript
          </div>
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
      <div
        onClick={handleScrollToTop}
        className="fixed right-10 bottom-10 flex justify-center items-center cursor-pointer w-12 h-12 rounded-full border-1 border-white/50 text-white bg-green-800/90 shadow-4xl backdrop-blur-2xl"
      >
        <FaAngleUp />
      </div>
    </main>
  );
};

export default Main;
