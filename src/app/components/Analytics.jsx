import React from 'react';
// import Educator from '../assets/educator.svg';

const Analytics = () => {
  return (
    <div className="w-full bg-black py-16 px-4 ">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 ">
        {/* <img className="w-[500px] mx-auto my-4" src={Educator} alt="Educator" /> */}
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">DATA PRESENTATION</p>
          <h1 className="md:text-xl sm:text-3xl font-bold py-2">
            Manage your Learning path Effectively
          </h1>
          <p>
            Centralizing platform which allows researchers and learners to achieve a number
            of benefits. One of the key benefits is the ability to streamline
            data management processes. By having all data stored in one
            location, organizations can reduce the time and effort
          </p>
          <button className="bg-[#00df9a] w-[200px] rounded-md mx-auto md:mx-0 font-medium my-6 py-3 text-black">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;