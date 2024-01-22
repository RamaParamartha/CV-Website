// components/Navbar.js

import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
            <img src="/icon.svg" alt="icon" />
        </div>
        <div>
          <ul className="flex space-x-4">
            <li>
              <Link href="/">
                <button className="text-white">Home</button>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <button className="text-white">About bro</button>
              </Link>
            </li>
            <li>
              <button className="text-white border-solid border-2 border-sky-500 transition-colors hover:bg-sky-500 rounded px-2">
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