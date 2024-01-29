"use client";
import React from 'react';
import './globals.css';
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image';
import Balloon from '@/components/ease-in-animation';


const HomePage = () => {
  return (
  <div className='h-[100rem]'>
    <div className="bg-white rounded overflow-hidden w-[30rem] h-[20rem] m-auto p-4">
        <h2 className=" text-2xl font-bold mb-2 text-black">Card title</h2>
        <TypeAnimation className='text-black overflow-hidden'
      sequence={[
        
        3000,
        'We produce food for People',
        100,
        'We produce food for Animals',
        100,
        'We produce food for Trees',
        100,
        'We produce food for Buildings and Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 
        1000
      ]}
      wrapper="span"
      speed={70}
      style={{ fontSize: '1em', display: 'inline-block', width: '28rem', height: '14rem' }}
      repeat={Infinity}
    />
        <a href="#" className="text-black hover:underline ">Card link</a>
        <a href="#" className="text-black hover:underline ml-2">Another link</a>
      </div>
    </div>
  );
};

export default HomePage;
