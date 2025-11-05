"use client";
import React from "react";

interface ChildProps {
  contact: () => void;
}

const Nav = ({ contact }: ChildProps) => {
  return (
    <nav className="flex absolute top-5 left-[50%] -translate-x-[50%] justify-between rounded-2xl items-center z-10 pl-[5%] w-[90%] md:w-[60%] h-11 md:h-13 bg-nav-gray">
      <div className="text-sm serif-font">Elvis Anthony</div>
      <button
        onClick={() => contact()}
        className="h-full w-27 rounded-2xl bg-light-black text-sm text-white"
      >
        Contact Me
      </button>
    </nav>
  );
};

export default Nav;
