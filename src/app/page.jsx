import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex">
              <a
                href="#"
                className="flex items-center text-blue-600 hover:text-blue-800 font-semibold text-lg"
              >
                Otofast
              </a>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Docs
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Guides
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
                >
                  References
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto py-10 px-4">
        <h1 className="text-4xl font-bold mb-6">Welcome to Otofast Project</h1>
        <p className="text-gray-800 text-lg">
        Otofast Project (OTP) provides information about Open Web
          technologies including HTML, CSS, JavaScript and also Data science including Deep learning & Machine learning. It also includes
          documentation on various DevCircle Africa products and projects such as 
          Developer Programs and open source.
        </p>
      </main>

      
    </div>

    // <div className="flex justify-center items-center h-screen">
    //   <div className="flex flex-col md:flex-row bg-gray-200 rounded-lg shadow-lg p-8 m-4">
    //     <div className="md:w-1/2">
    //       <h1 className="text-2xl font-bold mb-4">Otofast</h1>
    //       <p className="text-black">
    //         From Learning and hackathons to online forums and social media
    //         groups, Otofast offers a range of opportunities for members to
    //         connect and engage with the community. Whether you are looking to
    //         network, collaborate on a project, or simply learn more about the
    //         latest trends and technologies, Otofast is the place to be for
    //         anyone passionate about tech.
    //       </p>
    //       <p>
    //         Otofast is a community of tech enthusiasts, developers, designers,
    //         and entrepreneurs who are passionate about technology. Our mission
    //         is to build a community of tech enthusiasts across Africa, and to
    //         provide them with the resources they need to grow and succeed.
    //       </p>
    //     </div>

    //   </div>
    // </div>
  );
}
