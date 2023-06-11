import React from "react";
import MenuItems from "./MenuItems";
import { AiFillHome } from "react-icons/ai";

export default function Header() {
  return (
    <div>
      <div className="">
        <MenuItems title="HOME" address="/" Icon={AiFillHome} />
      </div>

      <div className=""></div>
    </div>
  );
}
