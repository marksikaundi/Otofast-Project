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
          <h1 className="text-2xl font-bold mb-4">Welcome to Otofast</h1>
          <p className="text-black">
            From Learning and hackathons to online forums and social media
            groups, Otofast offers a range of opportunities for members to
            connect and engage with the community. Whether you are looking to
            network, collaborate on a project, or simply learn more about the
            latest trends and technologies, Otofast is the place to be for
            anyone passionate about tech.
          </p>
        </div>
        <div className="md:w-1/2 mt-4 md:mt-0">
          <Image
            src="https://g.foolcdn.com/editorial/images/522643/gettyimages-989262462.jpg"
            alt="Tech 2023"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
