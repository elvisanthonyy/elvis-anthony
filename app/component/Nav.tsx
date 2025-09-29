import React from "react";
import { MdMenu } from "react-icons/md";

const Nav = () => {
  return (
    <nav className="flex bg-white/0 backdrop-blur-xl text-md justify-between items-center z-10 px-[5%] fixed top-0 left-0 w-full h-18">
      <div>Elvis Anthony</div>
      <MdMenu className="text-2xl" />
    </nav>
  );
};

export default Nav;
