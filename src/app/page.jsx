import Image from "next/image";

export default function Home() {
  return (
    <div>
      <header className="bg-blue-500 py-4">
        <h1 className="text-white text-2xl text-center font-bold"> Pricing</h1>
      </header>

      <main className="container mx-auto py-8">
        <div className="flex justify-center">
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold text-center mb-4"> Life Time</h2>
              <p className="text-gray-600 text-center mb-6">
                Perfect for Everyone
              </p>
              <div className="text-3xl font-bold text-center mb-8">
                $99<span className="text-gray-600 text-lg"></span>
              </div>
              <ul className="text-gray-600 mb-8">
                <li className="flex items-center mb-2">
                  <svg
                    className="w-4 h-4 mr-2 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Unlimited users
                </li>
                <li className="flex items-center mb-2">
                  <svg
                    className="w-4 h-4 mr-2 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  24/7 customer support
                </li>
                <li className="flex items-center mb-2">
                  <svg
                    className="w-4 h-4 mr-2 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Analytics dashboard
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Monthly reports
                </li>
              </ul>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full">
                Sign Up
              </button>
            </div>
          </div>
        </div>
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
