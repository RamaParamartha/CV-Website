"use client";
import React from 'react';
import './globals.css';
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image';

const HomePage = () => {
  return (
    <div className='h-[100rem]'>
      {/* About me desc */}
      <div className='flex h-[60rem] float-left pl-[25rem]'>
        <div className="bg-white rounded overflow-hidden w-[39rem] h-[23rem] m-auto p-4">
          <TypeAnimation
            className='text-black overflow-hidden'
            sequence={[
              3000,
              'Linus Gabriel Sebastian (born August 20, 1986) is a Canadian YouTuber best known for creating and hosting YouTube channels that cover technology. On November 24, 2008, he started publishing videos on his main channel Linus Tech Tips (LTT) which has 15.5 million subscribers and 7.52 billion views as of January 2024. His channels have a combined subscriber base of over 27 million.',
              100,
              'From 2007 to 2013, he was a regular presenter of technology videos for the now defunct Canadian computer retailer NCIX. He is also the founder and former Chief Executive Officer of Linus Media Group (LMG). On July 1, 2023, Sebastian stepped down as LMGs CEO, and took the role as Chief Vision Officer.',
              100,
              'Linus Gabriel Sebastian was born on August 20, 1986, and grew up in Maple Ridge, British Columbia. He was diagnosed with ADHD as a child. He grew up on a farm with siblings and has been married to Yvonne Ho since May 20, 2011.',
              100,
              'We produce food for Buildings and Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
              1000
            ]}
            wrapper="span"
            speed={80}
            deletionSpeed={90}
            style={{ fontSize: '23px', display: 'inline-block', width: '37rem', height: '22rem' }}
            repeat={Infinity}
          />
        </div>
      </div>

            {/*About me on top of desc*/}
      <div className='flex h-[32rem] float-left pl-[22rem] absolute'>
        <div className="bg-white  rounded overflow-hidden w-[20rem] h-[4rem] m-auto p-4">
          <p className="text-3xl mb-2 text-black">About Me</p>
        </div>

            {/* Your Image */}
      <div className='flex h-[60rem] float-left pl-[53rem] absolute'>
        <div className="bg-white rounded overflow-hidden w-[30rem] h-[38rem] m-auto p-4">
          <img src="LinusTechTipsFace.jpg" alt="I Made Linus Saputra"/>
          <h1 className='text-black text-center text-[30px]'>Linus</h1>
        </div>
      </div>
    </div>
    </div>
  );
};

export default HomePage;
