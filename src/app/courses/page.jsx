import React from "react";

export default function page() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-black text-4xl font-bold mb-4">
          Otofast Project Program
        </h1>
        <p className="text-black mb-8">
          Our programmes are rigorous and push individuals to their full
          potential. By the time they graduate, our learners can safely rely on
          the technical skills they have acquired.{" "}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white rounded shadow p-4">
            <h2 className="text-black text-2xl font-bold mb-4">
              Software Engineering
            </h2>
            <p className="text-black"></p>
          </div>
          <div className="bg-white rounded shadow p-4">
            <h2 className="text-black text-2xl font-bold mb-4">
              Deep Learning
            </h2>
            <p className="text-black"></p>
          </div>
          <div className="bg-white rounded shadow p-4">
            <h2 className="text-black text-2xl font-bold mb-4">
              Software Testing
            </h2>
            <p className="text-black"></p>
          </div>
          <div className="bg-white rounded shadow p-4">
            <h2 className="text-black text-2xl font-bold mb-4">
              Cloud Computing
            </h2>
            <p className="text-black"></p>
          </div>
        </div>
      </div>
    </div>
  );
}
