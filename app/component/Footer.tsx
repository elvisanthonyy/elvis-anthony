"use client";
import { useTheme } from "../context/ThemeContext";
import React from "react";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

interface ChildProps {
  project?: () => void;
  myContact?: () => void;
}

const Footer = ({ project, myContact }: ChildProps) => {
  const { theme } = useTheme();
  return (
    <footer
      className={`flex px-5 pb-20 flex-col md:items-start md:px-[2%] md:pt-5 md:min-h-60 md:h-fit items-start justify-evenly ${
        theme === "light"
          ? "text-nav-gray bg-light-black"
          : "bg-nav-gray text-light-black"
      }  w-full w-full h-fit min-h-100`}
    >
      <div className="w-full flex md:items-center flex-col mt-5 md:flex-row md: justify-between">
        <div className="flex flex-col">
          <div className="text-xl font-bold mb-3">Elvis Anthony</div>
          <div className="text-sm w-80 mb-5">
            <span className="block mb-2 font-semibold italic">
              Bringing products to life one pixel at a time
            </span>{" "}
            I&apos;m Elvis, a full-stack web developer based in Abuja, Nigeria.
            I build apps end-to-end-clean code, clear and fast delivery.
          </div>
        </div>

        <div className="h-30 md:h-30 flex  md:items-center flex-col md:w-90 text-left justify-between ">
          <div
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
            className="transition-all duration-300 ease-in md:w-15 cursor-pointer text-sm hover:text-md hover:text-blue-600"
          >
            Home
          </div>
          <div
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
            className="transition-all duration-300 ease-in md:w-15 cursor-pointer text-sm hover:text-md hover:text-blue-600"
          >
            About
          </div>
          <div
            onClick={project}
            className="transition-all duration-300 ease-in md:w-15 cursor-pointer text-sm hover:text-md hover:text-blue-600"
          >
            Projects
          </div>
          <div
            onClick={myContact}
            className="transition-all duration-300 ease-in md:w-15 cursor-pointer text-sm hover:text-md hover:text-blue-600"
          >
            Contact
          </div>
        </div>
        <div className="w-[50%] mt-10 md:h-full md:items-center md:mt-0 md:w-[18%] text-xl text-dark-white justify-between flex h-10">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/elvis-anthony-84639a265"
          >
            <FaLinkedin className="cursor-pointer hover:text-blue-600" />
          </a>
          <a target="_blank" href="https://github.com/elvisanthonyy">
            <FiGithub className="cursor-pointer hover:text-blue-600" />
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/iam_elvizanthony?igsh=MXhramdnZ202ampvZw=="
          >
            <FaInstagram className="cursor-pointer hover:text-blue-600" />
          </a>

          <a target="_blank" href="https://www.facebook.com/elvis.anthony.1213">
            <FaFacebook className="cursor-pointer hover:text-blue-600" />
          </a>
        </div>
      </div>

      <div className="md:flex mb-5 md:mt-10 md:w-full md:justify-between">
        <div> &copy; 2025. All rights reserved </div>
      </div>
    </footer>
  );
};

export default Footer;
