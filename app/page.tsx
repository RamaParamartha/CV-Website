"use client"
import React from 'react';
import './globals.css';
import { TypeAnimation } from 'react-type-animation';

const HomePage = () => {
  return (
    <div className="top-60">
      <TypeAnimation className='text-blue-800'
        sequence={[
          'We got unggas',
          1000,
          'We got strong unggas',
          1000,
          'We got half Asian unggas',
          1000,
          'We got premium unggas',
          1000,
          'All for 50% off',
          10000,
        ]}
        speed={50}
        style={{ fontSize: '4em' }}
        repeat={Infinity}
      />
      <p className='text-9xl' id='section1'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora amet, velit nesciunt quod, repellat natus ratione possimus fugiat unde mollitia numquam iusto atque optio perferendis iste magnam voluptatem. Reprehenderit, corrupti!
        <a href="#section2" className='text-blue-500'>click me</a>
      </p>
      <br />
      <br />
      <br />
      <br />
      <br />
      <p className='text-9xl' id='section2'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora amet, velit nesciunt quod, repellat natus ratione possimus fugiat unde mollitia numquam iusto atque optio perferendis iste magnam voluptatem. Reprehenderit, corrupti!
        <a href="#section1" className='text-blue-500'>click me</a>
      </p>
    </div>
  );
};

export default HomePage;
