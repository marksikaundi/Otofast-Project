import Link from "next/link";
import React from "react";

export default function MenuItems({ title, address, Icon }) {
  return (
    <div className="">
      <Link className="mx-4 lg:mx-6 hover:text-amber-600" href={address}>
        <Icon className="text-2xl sm:hidden mx-4" />
        <p className="hidden sm:inline my-2 text-sm">{title}</p>
      </Link>
    </div>
  );
}
