"use client";
import React from 'react';
import './globals.css';
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image';

const HomePage = () => {
  return (
    <div id="home">
      {/* fisrt section of the website */}
    <div className='h-[100rem] layer1 spacer'>
      {/* About me desc */}
      <div className='flex h-[60rem] float-left pl-[25rem] animate-hoverload absolute'>
        <div className="bg-gray-800 rounded overflow-hidden w-[40rem] h-[23rem] m-auto p-4 shadow-2xl shadow-black hover:scale-[1.05] duration-300 hover:shadow-blue-500 hover:bg-white ">
          {/* type animation  */}
         <TypeAnimation
            className='text-white overflow-hidden'
            sequence={[
              3000, 
              'Linus Gabriel Sebastian (born August 20, 1986) is a Canadian YouTuber best known for creating and hosting YouTube channels that cover technology. On November 24, 2008, he started publishing videos on his main channel Linus Tech Tips (LTT) which has 15.5 million subscribers and 7.52 billion views as of January 2024. His channels have a combined subscriber base of over 27 million.',
              1000,
              'From 2007 to 2013, he was a regular presenter of technology videos for the now defunct Canadian computer retailer NCIX. He is also the founder and former Chief Executive Officer of Linus Media Group (LMG). On July 1, 2023, Sebastian stepped down as LMGs CEO, and took the role as Chief Vision Officer.',
              1000,
              'Linus Gabriel Sebastian was born on August 20, 1986, and grew up in Maple Ridge, British Columbia. He was diagnosed with ADHD as a child. He grew up on a farm with siblings and has been married to Yvonne Ho since May 20, 2011.',
              1000,
              'We produce food for Buildings and Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
              1000
            ]}
            wrapper="span"
            speed={80}
            deletionSpeed={90}
            style={{ fontSize: '23px', display: 'inline-block', width: '38rem', height: '22rem' }}
            repeat={Infinity}
          />
        </div>
      </div>

      {/* About me on top of desc */}
      <div className='flex h-[31rem] float-left pl-[22rem] absolute animate-hoverload2'>
        <div className="bg-gray-800  rounded overflow-hidden w-[20rem] h-[4rem] m-auto p-4 border border-gray-900 shadow-lg shadow-black hover:scale-[1.05] duration-300 hover:shadow-blue-500 hover:bg-white  hover:text-black">
          <p className="text-4xl text-white hover:text-black p-0 m-0">About Me</p>
        </div>
      </div>

      {/* random floating rocks go */}
      <div className='flex h-[70rem] float-left pl-[10rem] absolute animate-upNdown'>
        <div className="bg-gray-800  rounded overflow-hidden w-[4rem] h-[4rem] shadow-lg shadow-black m-auto p-4">
        </div>
      </div>

      <div className='flex h-[15rem] float-left pl-[90rem] absolute animate-upNdown2'>
        <div className="bg-gray-800  rounded overflow-hidden w-[4rem] h-[7rem] shadow-lg shadow-black m-auto p-4">
        </div>
      </div>

      <div className='flex h-[70rem] float-left pl-[10rem] absolute animate-upNdown3'>
        <div className="bg-gray-800  rounded overflow-hidden w-[4rem] h-[4rem] shadow-lg shadow-black m-auto p-4">
        </div>
      </div>

      {/* Your Image */}
      <div className='flex h-[60rem] float-left pl-[73rem] absolute animate-hoverload'>
        <div className="bg-gray-800 rounded overflow-hidden w-[30rem] h-[35rem] m-auto p-4 shadow-2xl shadow-black hover:scale-[1.05] duration-300 hover:shadow-blue-500 hover:bg-white ">
        <img src="LinusTechTipsFace.jpg" alt="I Made Linus Saputra"/>
        </div>
      </div>
    </div>

    {/* second section of the website */}
    <div className='bg-[#C62368] h-[100rem]' id='about'></div>
    <div></div>
    </div>
  );
};

export default HomePage;
