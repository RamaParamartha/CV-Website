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
        <p className="text-white font-sans text-center text-8xl font-bold pt-4">
          REPORT
        </p>
        {/* About the Company */}
        <div className="ml-96 mt-60">
          <p className="text-5xl font-bold font-sans pl-[18rem]">
            PT. TAKSU TEKNOLOGI INDONESIA
          </p>
          <img
            src="taksu_tech.svg"
            alt="logo perusahaan"
            className="bg-white p-4 rounded shadow-xl shadow-black duration-300 hover:shadow-blue-500 hover:bg-white animate-upNdown3-1 absolute"
          />
          <p className="text-2xl font-sans pl-[18rem] pr-60 ">
            PT. Taksu Teknologi Indonesia. merupakan salah satu badan usaha
            milik swasta yang bergerak dalam bidang jasa studio pengembangan
            aplikasi. PT. Taksu Teknologi Indonesia berdiri pada tanggal 1
            Agustus 2018, PT. Taksu Teknologi Indonesia merupakan peralihan dari
            Perusahaan Spinroam Tech yang berpusat di Singapura.
          </p>
        </div>
        {/* Vision and mission */}
        <div>
          <p className="ml-60 mt-40 bg-white text-black font-sans p-4 rounded w-[7.5rem] text-5xl font-bold shadow-xl shadow-black duration-300 hover:shadow-blue-500 hover:bg-white animate-upNdown">
            VISI
          </p>
          <p className="font-sans text-xl ml-[15.3rem] mr-60 mt-4">
            Visi PT. Taksu Teknologi Indonesia adalah mencapai profitabilitas
            maksimal membuat klien puas dengan hasil kerja kami. Sebagai
            start-up di bidang pengembangan aplikasi dan website, kami fokus
            pada inovasi, integritas, dan kejujuran dalam setiap interaksi
            bisnis.
          </p>
          <p className="ml-60 mt-20 bg-white text-black font-sans p-4 rounded w-[8.5rem] text-5xl font-bold shadow-xl shadow-black duration-300 hover:shadow-blue-500 hover:bg-white animate-upNdown">
            MISI
          </p>
          <p className="font-sans mr-[15.3rem] text-xl mt-4 ml-60">
            Misi dari PT. Taksu Teknologi Indonesia adalah Bergabung ke dalam
            tim artinya anda memiliki bakat. Anda dapat mengasah keterampilan
            teknologi, pengembangan, dan desain melalui berbagai proyek.
            Perusaan kami mengutamakan gagasan berkualitas, menghargai kerja
            tim, serta meningkatkan kualitas diri dan karyawan.
          </p>
        </div>
      </div>
      <br /><br /><br />
      <div className="h-[70rem] spacer layer3">

      </div>
      <div className="h-[70rem] spacer layer4"></div>
    </div>
  );
};

export default HomePage;
