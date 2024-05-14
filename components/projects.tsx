import Link from "next/link";
import React from "react";
import Projects_api from "@/components/projects_api";
import Projects2_api from "@/components/projects2_api";

const Projects = () => {
  return (
    <div className="bg-[#C62368] xl:h-[60rem] z-0 overflow-hidden lg:h-[80rem]">
      <div
        className="flex xl:top-[97rem] w-[100%] items-center float-left absolute z-0"
        id="projects"
      >
        <div className="overflow-hidden m-auto p-4">
          <p className="text-white xl:text-7xl lg:text-5xl font-bold">
            PROJECTS
          </p>
        </div>
      </div>

      <div className="flex xl:top-[110rem] xl:left-[7rem] lg:top-[70rem] lg:left-[7rem] float-left animate-upNdown3 absolute z-0">
        <div
          className="bg-white rounded overflow-hidden xl:w-[26rem] xl:h-[4rem] lg:w-[20rem] lg:h-[4rem]
           m-auto p-4 shadow-lg shadow-black hover:scale-[1.05] duration-300"
        >
          <p className="text-black xl:text-2xl lg:text-lg">
            Text based Quiz game using C++
          </p>
        </div>
      </div>

      <div className="flex xl:top-[110rem] xl:left-[67rem] lg:top-[110rem] lg:left-[7rem] float-left animate-upNdown2 absolute z-0">
        <div className="bg-white rounded overflow-hidden w-[20rem] h-[4rem] m-auto p-4 shadow-lg shadow-black hover:scale-[1.05] duration-300">
          <p className="text-black text-2xl">CRUD Website</p>
        </div>
      </div>

      <div className="flex xl:top-[115rem] xl:left-[13rem] lg:top-[75rem] lg:left-[13rem] float-left animate-upNdown2 absolute z-0">
        <div className="text-black bg-white rounded overflow-hidden xl:w-[37rem] xl:h-[30rem] lg:w-[37rem] lg:h-[27rem] m-auto p-4 shadow-lg shadow-black hover:scale-[1.05] duration-300">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/JTCwffacFGU?si=QWaXQD10TQrmHhr7"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <Projects_api />
        </div>
      </div>

      <div className="flex xl:top-[115rem] xl:left-[76rem] lg:top-[115rem] lg:left-[13rem] float-left animate-upNdown absolute z-0">
        <div className="text-black bg-white rounded overflow-hidden xl:w-[40rem] xl:h-[30rem] lg:w-[37rem] lg:h-[27rem] m-auto p-4 shadow-lg shadow-black hover:scale-[1.05] duration-300">
          <img
            src="crud_website.png"
            alt="crud-website"
            className="h-[20rem] w-[100%]"
          />
          <Projects2_api />
        </div>
      </div>
    </div>
  );
};
