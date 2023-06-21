// import React from "react";
// import MenuItems from "./MenuItems";
// import { AiFillHome } from "react-icons/ai";
// import { RiAdminFill } from "react-icons/ri";
// import { SiDocsdotrs } from "react-icons/si";
// import { MdWork } from "react-icons/md";
// import Link from "next/link";
// import DarkModeSwitch from "./DarkModeSwitch";

// export default function Header() {
//   return (
//     <div className="flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6">
//       {/* left - side */}
//       <div className="flex">
//         <MenuItems title="HOME" address="/" Icon={AiFillHome} />

//         <MenuItems title="COURSES" address="/courses" Icon={SiDocsdotrs} />

//         <MenuItems title="ABOUT" address="/about" Icon={RiAdminFill} />

//         <MenuItems title="FQA" address="/fqa" Icon={MdWork} />


        
//       </div>

      
//       <div className="flex items-center space-x-5">
//         <DarkModeSwitch />
//         <Link href="https://devcircleafrica.com">
//           <h2 className="text-2xl">
//             <span className="font-bold bg-amber-600 py-1 px-2 mr-1 rounded-lg">
//               Apply
//             </span>
//             <span className="text-xl hidden sm:inline">Now</span>
//           </h2>
//         </Link>
//       </div>
//     </div>
//   );
// }
"use client"
import React, { useEffect, useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Header = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto text-white">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">Otofast Project</h1>
      <ul className="hidden md:flex">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">About</li>
        <li className="p-4">Resources</li>
        <li className="p-4">Contact</li>
      </ul>
      <div onClick={handleNav} className={'block md:hidden'}>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <ul
        className={
          nav
            ? 'fixed left-0 top-0 w-[60%] border-r h-full border-r-gray-900 bg-[#000000] ease-in-out duration-500'
            : 'fixed left-[-100%]'
        }
      >
        <h1 className="w-full text-3xl font-bold m-4 text-[#00df9a]">
          Otofast pro
        </h1>
        <li className="p-4 border-b border-gray-600">Home</li>
        <li className="p-4 border-b border-gray-600">Company</li>
        <li className="p-4 border-b border-gray-600">About</li>
        <li className="p-4 border-b border-gray-600">Resources</li>
        <li className="p-4">Contact</li>
      </ul>
    </div>
  );
};

export default Header;