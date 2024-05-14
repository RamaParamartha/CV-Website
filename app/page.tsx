"use client";
import React, { useEffect, useState } from "react";
import "./globals.css";
import Profile from "@/components/profile";
import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <Profile />
      <div className="h-[70rem] spacer layer2" id="report">
        <p className="text-white font-sans text-center text-8xl font-bold pt-4">REPORT</p>
        <div className="ml-72 ">
            <p>test</p>
            <img src="taksu_tech.svg" alt="logo perusahaan" className="bg-white p-4 rounded scale-[200%]"/>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
