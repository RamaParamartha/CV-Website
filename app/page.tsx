"use client"
import React from 'react';
import './globals.css';
import { TypeAnimation } from 'react-type-animation';

const HomePage = () => {
  return (
    <div className="top-60">
      <TypeAnimation className='text-blue-800'
        sequence={[
          'BLAaauegggrh',
          1000,
          'satria baja hitam',
          1000,
          'bebek hitam',
          1000,
          'its your lover koe ngapain ngomong gitu ke orang ram rawr',
          1000,
          'aaaaa mau ram lesgo ram',
          1000,
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
