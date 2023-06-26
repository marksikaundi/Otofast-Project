import React from "react";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <div class="max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
          Data to enrich your online business
        </h1>
        <p className="mt-6 text-lg leading-8 text-white">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
          cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat
          aliqua.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="/courses"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Get started
          </a>
          <a
            href="/about"
            className="text-sm font-semibold leading-6 text-white"
          >
            Learn more <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
      {/* <div class="md:flex">
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
      </div> */}
    </div>
  );
};

export default Home;
