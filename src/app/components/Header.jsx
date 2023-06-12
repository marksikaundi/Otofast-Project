import React from "react";
import MenuItems from "./MenuItems";
import { AiFillHome } from "react-icons/ai";
import { RiAdminFill } from "react-icons/ri";
import { SiDocsdotrs } from "react-icons/si";
import { MdWork } from "react-icons/md";
import Link from "next/link";
import DarkModeSwitch from "./DarkModeSwitch";

export default function Header() {
  return (
    <div className="flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6">
      {/* left - side */}
      <div className="flex">
        <MenuItems title="HOME" address="/" Icon={AiFillHome} />

        <MenuItems title="DOCS" address="/docs" Icon={SiDocsdotrs} />

        <MenuItems title="ABOUT" address="/about" Icon={RiAdminFill} />

        <MenuItems title="JOBS" address="/jobs" Icon={MdWork} />


        
      </div>

      {/* right - side */}
      <div className="flex items-center space-x-5">
        <DarkModeSwitch />
        <Link href="https://devcircleafrica.com">
          <h2 className="text-2xl">
            <span className="font-bold bg-amber-600 py-1 px-2 mr-1 rounded-lg">
              Apply
            </span>
            <span className="text-xl hidden sm:inline">Now</span>
          </h2>
        </Link>
      </div>
    </div>
  );
}
