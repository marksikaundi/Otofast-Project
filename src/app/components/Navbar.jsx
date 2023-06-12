import React from "react";
import NavbarItem from "./NavbarItem";

export default function Navbar() {
  return (
    <div className="flex justify-center dark:bg-gray-600">
      <NavbarItem title="Services" param="fetchServices" />
      <NavbarItem title="Courses" param="fetchCourses" />
    </div>
  );
}
