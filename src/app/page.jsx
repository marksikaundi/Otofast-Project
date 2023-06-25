import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div class="md:flex">
        <div class="md:shrink-0">
          <Image
            class="h-48 w-full object-cover md:h-full md:w-48"
            width={100}
            height={100}
            alt="Apply Now"
            src="https://cdn.pixabay.com/photo/2023/06/09/19/37/letter-8052497_1280.png"
          />
        </div>
        <div class="p-8">
          <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            Apply Now
          </div>
          <a
            href="#"
            class="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
          >
            Incredible programms you can study
          </a>
          <p class="mt-2 text-slate-500">
            Looking to take your career to the next level in the world of
            Technology? We have a list of programms you can check.{" "}
            <Link href="/courses">
              <button>👉Check Now</button>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
