"use client";
import React from "react";
import { BsSun } from "react-icons/bs";
import { useTheme } from "../context/ThemeContext";
import { FiMoon } from "react-icons/fi";

interface ChildProps {
  contact?: () => void;
}

const Nav = ({ contact }: ChildProps) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <nav
      className={`flex overflow-hidden absolute top-5 left-[50%] md:top-10 border-0 -translate-x-[50%] lg:w-[53%] justify-between rounded-2xl items-center z-10 pl-[5%] md:pl-10 w-[90%] md:w-[90%]  sm:w-[90%] h-11 md:h-13 ${
        theme === "light" ? "bg-nav-gray" : "bg-darkerGray"
      }`}
    >
      <div
        className={` text-sm ${
          theme == "light" ? "text-black" : "text-white"
        } md:text-lg serif-font`}
      >
        Elvis Anthony
      </div>
      <div onClick={() => toggleTheme?.()} className="cursor-pointer">
        {theme === "light" ? <BsSun /> : <FiMoon className="text-white" />}
      </div>
      <button
        onClick={contact}
        className={`h-full transition-all duration-500 ease-in-out md:w-39 w-27 cursor-pointer md:hover:w-50 hover:opacity-90 rounded-2xl ${
          theme === "light" ? "bg-light-black text-white" : "bg-white "
        }  text-sm `}
      >
        Contact Me
      </button>
    </nav>
  );
};

export default Nav;
