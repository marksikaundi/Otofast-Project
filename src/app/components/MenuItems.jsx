import Link from "next/link";
import React from "react";

export default function MenuItems({ title, address, Icon }) {
  return (
    <div className="">
      <Link href={address}>
        <Icon className="" />
        <p>{title}</p>
      </Link>
    </div>
  );
}
