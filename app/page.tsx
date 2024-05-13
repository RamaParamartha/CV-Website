"use client";
import React, { useEffect, useState } from 'react';
import './globals.css';
import { TypeAnimation } from 'react-type-animation';

const HomePage = () => {
  return (
    <div id="home">
      {/* first section of the website */}
    <div className='
    layer1 
    spacer
    flex
    
    xl:h-[100rem]
    lg:h-[60rem]

    '>
      {/* About me desc */}
      <div className='
      flex  
      float-left 
      animate-hoverload 
      absolute

      lg:top-[15rem]
      lg:left-[5rem]

      xl:top-[20rem]
      xl:left-[27rem]

      '>
        <div className="
        bg-gray-800 
        rounded 
        overflow-hidden

        lg:w-[32rem] 
        lg:h-[16rem] 
        
        xl:w-[40rem] 
        xl:h-[23rem] 
        m-auto 
        p-4 
        shadow-2xl 
        shadow-black 
        hover:scale-[1.05] 
        duration-300
        ">
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
            style={{ fontSize: 'xl:20px lg:15px', display: 'inline-block', width: 'xl:38rem lg:28rem', height: 'xl:22rem lg:8rem' }}
          />
        </div>
      </div>

      {/* About me on top of desc */}
      <div className='
      flex 
      float-left

      xl:top-[15rem]  
      xl:left-[20rem]

      lg:top-[10rem]  
      lg:left-[2rem]

      absolute 
      animate-hoverload2
      '>
        <div className="
        bg-gray-800  
        rounded 
        overflow-hidden 

        xl:w-[20rem] 
        xl:h-[4rem]
        
        lg:w-[10rem] 
        lg:h-[4rem]

        m-auto 
        p-4 border 
        border-gray-900 
        shadow-lg 
        shadow-black 
        hover:scale-[1.05] 
        duration-300
        ">
          <p className="xl:text-4xl lg:text-2xl text-white p-0 m-0">About Me</p>
        </div>
      </div>
      
      {/* Your Image */}
      <div className='
      flex 
      
      float-left 

      xl:top-[12rem] 
      xl:left-[70rem] 

      lg:top-[12rem] 
      lg:left-[40rem] 

      absolute 
      animate-hoverload
      '>
        <div className="
        bg-gray-800 
        rounded 
        overflow-hidden

        xl:w-[30rem] 
        xl:h-[34rem] 

        lg:w-[20rem] 
        lg:h-[22.5rem] 

        m-auto 
        p-4 O
        shadow-2xl 
        shadow-black 
        hover:scale-[1.05] 
        duration-300 
        hover:shadow-blue-500 
        hover:bg-white 
        ">
        <img src="/MadeParamartha.png" alt="I Gede Made Paramartha Nugraha"/>
        </div>
      </div>
    </div>

    {/* second section of the website */}
    <div className='bg-[#C62368] xl:h-[60rem] z-0 overflow-hidden lg:h-[80rem]' >

    <div className='
    flex 
    xl:top-[97rem] 
    w-[100%] 
    items-center 
    float-left 
    absolute 
    z-0
    ' id='projects'>
      <div className=" overflow-hidden m-auto p-4">
        <p className='text-white xl:text-7xl lg:text-5xl font-bold' >PROJECTS</p>
      </div>
    </div>
      
    <div className='
    flex 
    xl:top-[110rem] 
    xl:left-[7rem] 

    lg:top-[70rem]
    lg:left-[7rem] 
    float-left 
    animate-upNdown3 
    absolute z-0
    '>
      <div className="bg-white rounded overflow-hidden xl:w-[26rem] xl:h-[4rem] lg:w-[20rem] lg:h-[4rem] m-auto p-4 shadow-lg shadow-black hover:scale-[1.05] duration-300">
        <p className='text-black xl:text-2xl lg:text-lg'>Text based Quiz game using C++ why does this not found ?</p>
      </div>
    </div>

    <div className='
    flex 
    xl:top-[110rem] 
    xl:left-[67rem] 

    lg:top-[110rem] 
    lg:left-[7rem] 
    float-left 
    animate-upNdown2 
    absolute 
    z-0
    '>
      <div className="bg-white rounded overflow-hidden w-[20rem] h-[4rem] m-auto p-4 shadow-lg shadow-black hover:scale-[1.05] duration-300">
        <p className='text-black text-2xl'>CRUD Website</p>
      </div>
    </div>


    <div className='
    flex 
    xl:top-[115rem] 
    xl:left-[13rem] 

    lg:top-[75rem] 
    lg:left-[13rem] 
    float-left 
    animate-upNdown2 
    absolute z-0
    '>
      <div className="
      text-black
      bg-white 
      rounded 
      overflow-hidden 
      xl:w-[37rem] 
      xl:h-[30rem] 

      lg:w-[37rem] 
      lg:h-[27rem] 
      m-auto 
      p-4 shadow-lg 
      shadow-black 
      hover:scale-[1.05] 
      duration-300
      ">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/JTCwffacFGU?si=QWaXQD10TQrmHhr7" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            the thing in here is the thing in here
      </div>
    </div>

    <div className='
    flex 
    xl:top-[115rem] 
    xl:left-[76rem] 

    lg:top-[115rem] 
    lg:left-[13rem] 
    float-left 
    animate-upNdown 
    absolute 
    z-0
    '>        
    <div className="
    text-black
    bg-white 
    rounded 
    overflow-hidden 
    xl:w-[40rem] 
    xl:h-[30rem] 

    lg:w-[37rem] 
    lg:h-[27rem] 
    m-auto 
    p-4 
    shadow-lg 
    shadow-black 
    hover:scale-[1.05] 
    duration-300 
    ">
      <img src="crud_website.png" alt="crud-website" className='h-[20rem] w-[100%]'/>
        Ohh this is the thing eh?
      </div>
    </div>
    </div>

    {/* section 3  layered waves */}
    <div className='
    h-[50rem] 
    spacer 
    layer2 
    relative'>
      
    <div className=" 
    overflow-hidden 
    m-auto 
    p-4 
    flex 
    xl:top-[39rem] 
    xl:left-[47.5rem] 

    lg:top-[43rem] 
    lg:left-[25rem] 
    items-center 
    absolute 
    z-0" id='education'>
        <p className='text-white xl:text-7xl lg:text-5xl font-bold' >EDUCATION</p>
      </div>

        <div className='
        z-50 
        grid 
        grid-cols-3 
        grid-flow-row 
        gap-y-40 
        pl-[0] 
        relative 
        top-[50rem]'
        >
            <div className='
            bg-gray-800
            rounded 
            overflow-hidden 
            xl:w-[25rem] 
            xl:h-[25rem] 

            lg:w-[20rem] 
            lg:h-[27rem] 
            m-auto 
            p-4 
            shadow-2xl 
            shadow-black 
            animate-upNdown2
            '>
              <img src="/DCC.png" alt="dcc" className='
              h-[20rem] 
              hover:scale-[105%] 
              duration-300 
              hover:opacity-50  
              '/>
              <p className='text-2xl text-center pt-4'>Denpasar Children Centre</p>
            </div>

            <div className='
            bg-gray-800 
            rounded 
            overflow-hidden 
            xl:w-[25rem] 
            xl:h-[25rem] 

            lg:w-[20rem] 
            lg:h-[27rem] 
            m-auto
            p-4 
            shadow-2xl 
            shadow-black 
            animate-upNdown3
            '>
              <img src="/SMP11.png" alt="smp11" className='
              h-[20rem] 
              hover:scale-[105%] 
              duration-300 
              hover:opacity-50
              '/>
              <p className='text-2xl text-center pt-4'>SMP Negeri 11 Denpasar</p>
            </div>

            <div className='
            bg-gray-800 
            rounded 
            overflow-hidden 
            xl:w-[25rem] 
            xl:h-[25rem] 

            lg:w-[20rem] 
            lg:h-[27rem] 
            m-auto 
            p-4 
            shadow-2xl 
            shadow-black  
            animate-upNdown
            '>
              <img src="/SMKTI.png" alt="smkti" className='
              h-[20rem] 
              hover:scale-[105%] 
              duration-300 
              hover:opacity-50
              '/>
              <p className='text-2xl text-center pt-4'>SMK TI Bali Global Denpasar</p>

            </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
