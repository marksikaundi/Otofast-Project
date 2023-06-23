"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto text-white">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">
        Otofast Project
      </h1>
      <ul className="hidden md:flex">
        <li className="p-4">Home</li>
        <li className="p-4">Courses</li>
        <li className="p-4">Codes</li>
        <li className="p-4">Projects</li>
        <li className="p-4">About</li>
      </ul>
      <div onClick={handleNav} className={"block md:hidden"}>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] border-r h-full border-r-gray-900 bg-[#000000] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold m-4 text-[#00df9a]">
          Otofast pro
        </h1>

        <Link href="/" to="/">
          <li className="p-4 border-b border-gray-600">Home</li>
        </Link>
        <Link href="/courses" to="courses">
          <li className="p-4 border-b border-gray-600">Courses</li>
        </Link>
        <Link href="/codes" to="codes">
          <li className="p-4 border-b border-gray-600">Codes</li>
        </Link>
        <Link href="/projects" to="projects">
          <li className="p-4 border-b border-gray-600">Projects</li>
        </Link>
        <Link href="/about" to="about">
          <li className="p-4">About</li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
