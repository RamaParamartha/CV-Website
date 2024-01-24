"use client"
import React from 'react';
import './globals.css'
import { TypeAnimation } from 'react-type-animation';

const HomePage = () => {
  return (
    
    
    <div className="mx-24">
    <TypeAnimation
  sequence={[
    'We got unggas',
    1000,
    'We got strong unggas',
    1000,
    'We got half asian unggas',
    1000,
    'We got premium unggas',
    1000,
    'All for 50% off',
    10000,
  ]}
  speed={50}
  style={{ fontSize: '2em' }}
  repeat={Infinity}
  />
    </div>
    
  );
};

export default HomePage;