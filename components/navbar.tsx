// components/Navbar.js

import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 sticky top-0 z-20 shadow-md shadow-black">
      <div className="container mx-auto sm:flex justify-between items-center sticky">
        <div>
          <p className="text-xl animate-pulse">Intern.report</p>
        </div>
        <div>
          <ul className="flex space-x-4">
            <li>
              <Link href="#home">
                <button className="text-white padding-up transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-200 scroll-smooth">
                  Home
                </button>
              </Link>
            </li>
            <li>
              <Link href="#report">
                <button className="text-white padding-up  transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-200 scroll-smooth">
                  Report
                </button>
              </Link>
            </li>
            <li>
              <button className="text-white border-solid border-2 shadow-lg shadow-blue-500/50 border-blue-500 rounded px-2 transition ease-in-out delay-75 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-white duration-300 hover:border-white hover:text-black">
                <a href="https://drive.google.com/uc?export=download&id=1jLx_AlfYxeQGf82SGeDE0x90n-5qJjpb">
                  Download Report
                </a>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
