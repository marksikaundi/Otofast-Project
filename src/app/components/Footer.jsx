import React from "react";
import Link from "next/link";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";

export default function Footer() {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
      <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Otofast Project</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
          </div>
        {/* <h1 className="w-full text-3xl font-bold text-[#00df9a]">
          Otofast Project
        </h1> */}
        <p className="py-4">
          Otofast Project is a vibrant community of technology enthusiasts and
          professionals who are passionate about exploring the latest trends and
          innovations in the tech industry. You can learn more about us by visiting...{" "}
          <a href="/about" className="font-semibold text-indigo-600">
            <span className="absolute inset-0" aria-hidden="true" />
            Read more <span aria-hidden="true">&rarr;</span>
          </a>
        </p>
        <div className="flex justify-between md:w-[78%] my-6">
          <FaFacebookSquare size={30} />
          <FaGithubSquare size={30} />
          <FaInstagramSquare size={30} />
          <FaTwitterSquare size={30} />
        </div>
      </div>
      <div className="lg:col-span-2 mt-6 flex justify-between">
        <div>
          <h6 className="font-medium text-white bold">Products</h6>
          <ul>
            <li className="py-2 text-sm">
              <Link href="/features">Features</Link>
            </li>
            <li className="py-2 text-sm">
              <Link href="/courses">Courses</Link>
            </li>
            <li className="py-2 text-sm">
              <Link href="/funding-programs">Fundings</Link>
            </li>
            <li className="py-2 text-sm">
              <Link href="/lms">Learning System</Link>
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-white bold">Explore</h6>
          <ul>
            <li className="py-2 text-sm">
              <Link href="/analytics">Analytics</Link>
            </li>
            <li className="py-2 text-sm">
              <Link href="/commerce">Commerce</Link>
            </li>
            <li className="py-2 text-sm">
              <Link href="/ai-tools">AI Tools</Link>
            </li>
            <li className="py-2 text-sm">
              <Link href="/research">Research</Link>
            </li>
            <li className="py-2 text-sm">
              <Link href="/fqa">FQA</Link>
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-white bold">Support</h6>
          <ul>
            <li className="py-2 text-sm">
              <Link href="/docs">Docs</Link>
            </li>
            <li className="py-2 text-sm">
              <Link href="/guides">Guides</Link>
            </li>
            <li className="py-2 text-sm">
              <Link href="/help">Help</Link>
            </li>
            <li className="py-2 text-sm">
              <Link href="/projects">Projects</Link>
            </li>
            <li className="py-2 text-sm">
              <Link href="/code-hacks">Code Hacks</Link>
            </li>
            <li className="py-2 text-sm">
              <Link href="/marketplace">Marketplace</Link>
            </li>
          </ul>
        </div>

        <div>
          <h6 className="font-medium text-white bold">Company</h6>
          <ul>
            <li className="py-2 text-sm">
              <Link href="/about">About</Link>
            </li>
            <li className="py-2 text-sm">
              <Link href="/blog">Blog</Link>
            </li>
            <li className="py-2 text-sm">
              <Link href="https://devcircleafrica.com/careers">careers</Link>
            </li>
            <li className="py-2 text-sm">
              <Link href="/open-source">Open source</Link>
            </li>
            <li className="py-2 text-sm">
              <Link href="/privacy">Privacy Policy</Link>
            </li>
            <li className="py-2 text-sm">
              <Link href="/terms">Terms</Link>
            </li>
            <li className="py-2 text-sm">
              <Link href="https://forum.devcircleafrica.com">Community</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex">
        <span>&copy; {new Date().getFullYear()} Otofast Project</span>
      </div>
    </div>
  );
}
