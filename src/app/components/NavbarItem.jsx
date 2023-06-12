"use client";
import Link from "next/link";
import React from "react";

import { useSearchParams } from "next/navigation";

export default function NavbarItem({ title, param }) {
  const searchParams = useSearchParams(param);
  const programs = searchParams.get("programs");
  return (
    <div>
      <Link
        className={`m-4 hover:text-amber-600 font-semibold p-2 ${
          programs &&
          programs === param &&
          "underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg"
        }}`}
        href={`/?programs=${param}`}
      >
        {title}
      </Link>
    </div>
  );
}
