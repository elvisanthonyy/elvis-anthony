"use client";
import { useTheme } from "../context/ThemeContext";
import React from "react";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const { theme } = useTheme();
  return (
    <footer
      className={`flex px-5 flex-col md:items-start md:px-[2%] md:pt-5 md:h-60 items-start justify-evenly ${
        theme === "light"
          ? "text-nav-gray bg-light-black"
          : "bg-nav-gray text-light-black"
      }  w-full h-100`}
    >
      <div className="text-xl font-bold">Elvis Anthony</div>
      <div className="text-md">
        Bringing prodicts to life one pixel at a time
      </div>
      <div className="md:flex md:mt-20 md:w-full md:justify-between">
        <div className="h-30 md:h-10 flex flex-col md:flex-row md:w-[20%] justify-between">
          <div
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
            className="transition-all duration-300 ease-in cursor-pointer text-sm hover:text-md hover:text-blue-300"
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
            className="transition-all duration-300 ease-in cursor-pointer text-sm hover:text-md hover:text-blue-300"
          >
            About
          </div>
          <div className="transition-all duration-300 ease-in cursor-pointer text-sm hover:text-md hover:text-blue-300">
            Projects
          </div>
          <div className="transition-all duration-300 ease-in cursor-pointer text-sm hover:text-md hover:text-blue-300">
            Contact
          </div>
        </div>
        <div className="w-[50%] mt-10 md:mt-0 md:w-[18%] text-xl text-dark-white justify-between flex h-10">
          <a>
            <FaInstagram className="cursor-pointer hover:text-blue-300" />
          </a>

          <a>
            <FaFacebook className="cursor-pointer hover:text-blue-300" />
          </a>

          <a>
            <FaLinkedin className="cursor-pointer hover:text-blue-300" />
          </a>
        </div>
        <div> &copy; 2025. All rights reserved </div>
      </div>
    </footer>
  );
};

export default Footer;
