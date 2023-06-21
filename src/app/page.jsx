import React from "react";
import Analytics from "./components/Analytics";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-green font-bold p-2">
          GROWING WITH QUANTUM COMPUTING
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Grow with data.
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl py-4 text-xl font-bold">
            Research, Inn for Big data
          </p>
        </div>
        <p className="md:text-2xl text-xl font-bold text-white">
          Develop your serverless platform worth millions of packages.
        </p>
        <button className="bg-[#00df9a] w-[200px] rounded-md mx-auto font-medium my-6 py-3 text-black">
          Get started
        </button>
      </div>
      <Analytics />
    </div>
  );
};

export default Hero;
