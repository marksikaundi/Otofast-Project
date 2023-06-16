import Image from "next/image";

export default function Home() {
  return (
    // <div className="">
    //   <h1 className=" text-center text-6xl">Hello World, Coming Soon</h1>
    //   <p className="text-center text-lg">
    //     Currently we are under Development 👨‍💻 by Our team at DevCircle Africa
    //   </p>
    // </div>
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col md:flex-row bg-gray-200 rounded-lg shadow-lg p-8 m-4">
        <div className="md:w-1/2">
          <h1 className="text-2xl font-bold mb-4">Welcome to My Website</h1>
          <p className="text-gray-800">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum imperdiet,
            lectus eu viverra ultricies, metus arcu porttitor nulla, eu tristique lectus
            magna eu lectus. Aenean ut nunc nunc.
          </p>
        </div>
        <div className="md:w-1/2 mt-4 md:mt-0">
          <Image
            src="/src/assets/tech.jpg"
            alt="Example Image"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};


