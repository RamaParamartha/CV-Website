// components/Navbar.js

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
            <p className='text-xl animate-pulse'>swiftsurge.cv</p>
        </div>
        <div>
          <ul className="flex space-x-4">
            <li>
              <Link href="/">
                <button className="text-white padding-up transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">Home</button>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <button className="text-white padding-up transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">About</button>
              </Link>
            </li>
            <li>
              <button className="text-white border-solid border-2 border-blue-500 transition-colors hover:bg-sky-500 rounded px-2 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 hover:border-indigo-500">
                <a href="https://drive.google.com/uc?export=download&id=1m5vbUBu3N17mwc095yGkOnL_-ddrasY_">Download PDF</a>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;