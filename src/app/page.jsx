import React from "react";
import Analytics from "./components/Analytics";
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
    // <div className="text-white">
    //   <div className="max-w-[800px] mt-[96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
    //     <p className="text-green font-bold p-2">
    //       GROWING WITH QUANTUM COMPUTING
    //     </p>
    //     <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
    //       Grow with data.
    //     </h1>
    //     <div className="flex justify-center items-center">
    //       <p className="md:text-5xl sm:text-4xl py-4 text-xl font-bold">
    //         Research, Inn for Big data
    //       </p>
    //     </div>
    //     <p className="md:text-2xl text-xl font-bold text-white">
    //       Develop your serverless platform worth millions of packages.
    //     </p>
    //     <button className="bg-[#00df9a] w-[200px] rounded-md mx-auto font-medium my-6 py-3 text-black">
    //       Get started
    //     </button>
    //   </div>
    //   <Analytics />
    // </div>
  );
};

export default Hero;
