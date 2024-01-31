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
      <div className='flex top-[22.5rem] float-left left-[25rem] animate-hoverload absolute'>
        <div className="bg-gray-800 rounded overflow-hidden w-[40rem] h-[23rem] m-auto p-4 shadow-2xl shadow-black hover:scale-[1.05] duration-300">
          {/* type animation  */}
         <TypeAnimation
            className='text-white overflow-hidden'
            sequence={[
              'My name is I Gede Made Paramartha Nugraha, I am eager to learn and deepen my knowledge about programming. My educational background has instilled in me a strong foundation in software engineering principles, and I am now keen to focus on honing my skills in programming I am excited to embark on a journey of continuous learning and knowledge deepening. currently, i have known 7  programming languages, which are C++, HTML, CSS, PHP, React, Tailwind CSS, Bootstrap and eager to learn more.'
            ]}
            wrapper="span"
            speed={90}
            deletionSpeed={90}
            cursor={false}
            style={{ fontSize: '20px', display: 'inline-block', width: '38rem', height: '22rem' }}
          />
        </div>
      </div>

      {/* About me on top of desc */}
      <div className='flex top-[18rem] float-left left-[22rem] absolute animate-hoverload2'>
        <div className="bg-gray-800  rounded overflow-hidden w-[20rem] h-[4rem] m-auto p-4 border border-gray-900 shadow-lg shadow-black hover:scale-[1.05] duration-300">
          <p className="text-4xl text-white p-0 m-0">About Me</p>
        </div>
      </div>
      
      {/* Your Image */}
      <div className='flex top-[17rem] float-left left-[73rem] absolute animate-hoverload'>
        <div className="bg-gray-800 rounded overflow-hidden w-[30rem] h-[34rem] m-auto p-4 shadow-2xl shadow-black hover:scale-[1.05] duration-300 hover:shadow-blue-500 hover:bg-white ">
        <img src="/MadeParamartha.png" alt="I Gede Made Paramartha Nugraha"/>
        </div>
      </div>
    </div>

    {/* second section of the website */}
    <div className='bg-[#C62368] h-[60rem] z-0' id='projects'>

    <div className='flex top-[97rem] w-[100%] items-center float-left absolute z-0'>
      <div className=" overflow-hidden m-auto p-4">
        <p className='text-white text-7xl font-bold'>PROJECTS</p>
      </div>
    </div>
      
    <div className='flex top-[110rem] left-[10rem] float-left animate-upNdown3 absolute z-0'>
      <div className="bg-white rounded overflow-hidden w-[26rem] h-[4rem] m-auto p-4 shadow-lg shadow-black hover:scale-[1.05] duration-300">
        <p className='text-black text-2xl'>Text based Quiz game using C++</p>
      </div>
    </div>

    <div className='flex top-[110rem] left-[72rem] float-left animate-upNdown2 absolute z-0'>
      <div className="bg-white rounded overflow-hidden w-[20rem] h-[4rem] m-auto p-4 shadow-lg shadow-black hover:scale-[1.05] duration-300">
        <p className='text-black text-2xl'>CRUD Website</p>
      </div>
    </div>


    <div className='flex top-[115rem] left-[13rem] float-left animate-upNdown2 absolute z-0'>
      <div className="bg-white rounded overflow-hidden w-[37rem] h-[30rem] m-auto p-4 shadow-lg shadow-black hover:scale-[1.05] duration-300 md:hover:">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/JTCwffacFGU?si=QWaXQD10TQrmHhr7" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        <p className='text-black text-lg'>This is a program my group made, where the user gets to play a quiz game with 3 difficulties. each difficulty has 2 stages except for hard, which has only 1 stage.</p>
      </div>
    </div>

    <div className='flex top-[115rem] left-[74rem] float-left animate-upNdown absolute z-0'>        
    <div className="bg-white rounded overflow-hidden w-[40rem] h-[30rem] m-auto p-4 shadow-lg shadow-black hover:scale-[1.05] duration-300 md:hover:">
      <img src="crud_website.png" alt="crud-website" className='h-[20rem] w-[100%]'/>
        <p className='text-black text-lg'>This is a website i made for a final exam, the website used HTML, CSS, and PHP for the backend. The website is about a motorcycle dealer, selling motorcycles online.</p>
      </div>
    </div>
    </div>

    {/* section 3  layered waves */}
    <div className='h-[50rem] spacer layer2 relative'>
    <div className=" overflow-hidden m-auto p-4 flex top-[39rem] left-[48rem] items-center absolute z-0">
        <p className='text-white text-7xl font-bold'>EDUCATION</p>
      </div>
        <div className='z-50 grid grid-cols-3 grid-flow-row gap-y-40   pl-[0] relative top-[50rem]'  id='education'>
            <div className='bg-gray-800 rounded overflow-hidden w-[25rem] h-[25rem] m-auto p-4 shadow-2xl shadow-black animate-upNdown2'>
              <img src="/DCC.png" alt="dcc" className='h-[20rem] hover:scale-[105%] duration-300 hover:opacity-50 '/>
              <p className='text-2xl text-center pt-4'>Denpasar Children Centre</p>
            </div>
            <div className='bg-gray-800 rounded overflow-hidden w-[25rem] h-[25rem] m-auto p-4 shadow-2xl shadow-black animate-upNdown3'>
              <img src="/SMP11.png" alt="smp11" className='h-[20rem] hover:scale-[105%] duration-300 hover:opacity-50'/>
              <p className='text-2xl text-center pt-4'>SMP Negeri 11 Denpasar</p>
            </div>
            <div className='bg-gray-800 rounded overflow-hidden w-[25rem] h-[25rem] m-auto p-4 shadow-2xl shadow-black  animate-upNdown'>
              <img src="/SMKTI.png" alt="smkti" className='h-[20rem] hover:scale-[105%] duration-300 hover:opacity-50'/>
              <p className='text-2xl text-center pt-4'>SMK TI Bali Global Denpasar</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
