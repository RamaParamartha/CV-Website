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
        <div className="xl:ml-96 lg:ml-44  mt-60">
          <p className="xl:text-5xl font-bold font-sans pl-[18rem]">
            PT. TAKSU TEKNOLOGI INDONESIA
          </p>
          <img
            src="taksu_tech.svg"
            alt="logo perusahaan"
            className="bg-white p-4 rounded shadow-xl shadow-black duration-300 hover:shadow-blue-500 hover:bg-white xl:animate-upNdown3-1 lg:absolute animate-upNdown3-2"
          />
          <p className="xl:text-2xl font-sans pl-[18rem] xl:pr-60 lg:mr-32">
            PT. Taksu Teknologi Indonesia. merupakan salah satu badan usaha
            milik swasta yang bergerak dalam bidang jasa studio pengembangan
            aplikasi. PT. Taksu Teknologi Indonesia berdiri pada tanggal 1
            Agustus 2018, PT. Taksu Teknologi Indonesia merupakan peralihan dari
            Perusahaan Spinroam Tech yang berpusat di Singapura.
          </p>
        </div>
        {/* Vision and mission */}
        <div>
          <p className="ml-60 xl:mt-24 mt-6 bg-white text-black font-sans p-4 rounded w-[7.5rem] xl:text-5xl font-bold shadow-xl shadow-black duration-300 hover:shadow-blue-500 hover:bg-white animate-upNdown">
            VISI
          </p>
          <p className="font-sans xl:text-xl ml-[15.3rem] mr-60 mt-4">
            Visi PT. Taksu Teknologi Indonesia adalah mencapai profitabilitas
            maksimal membuat klien puas dengan hasil kerja kami. Sebagai
            start-up di bidang pengembangan aplikasi dan website, kami fokus
            pada inovasi, integritas, dan kejujuran dalam setiap interaksi
            bisnis.
          </p>
          <p className="ml-60 mt-20 bg-white text-black font-sans p-4 rounded w-[8.5rem] xl:text-5xl font-bold shadow-xl shadow-black duration-300 hover:shadow-blue-500 hover:bg-white animate-upNdown">
            MISI
          </p>
          <p className="font-sans mr-[15.3rem] xl:text-xl mt-4 ml-60">
            Misi dari PT. Taksu Teknologi Indonesia adalah Bergabung ke dalam
            tim artinya anda memiliki bakat. Anda dapat mengasah keterampilan
            teknologi, pengembangan, dan desain melalui berbagai proyek.
            Perusaan kami mengutamakan gagasan berkualitas, menghargai kerja
            tim, serta meningkatkan kualitas diri dan karyawan.
          </p>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="lg:h-[90rem] xl:h-[70rem] spacer layer3">
        <p className="text-white font-sans text-center text-5xl font-bold mb-8">
          PRODUK DAN JASA
        </p>
        <div className="ml-60 mt-20">
        <p className="bg-white text-black font-sans p-4 rounded w-[14.5rem] xl:text-5xl font-bold shadow-xl shadow-black duration-300 hover:shadow-blue-500 hover:bg-white animate-upNdown">
            PRODUK
          </p>
          <img
            src="/valet-logo.png"
            alt="Valet Go Logo"
            className="bg-white mt-12 p-4 rounded animate-upNdown2"
          />
          <p className="mt-4 text-xl lg:mr-44">
            Valet Go adalah layanan valet seluler yang beroperasi cepat dan
            mudah digunakan. Aplikasi ini dilengkapi dengan pelacakan lokasi
            realtime dari pengemudi valet Anda.
          </p>
          <img
            src="/wts-logo.png"
            alt="Woodlands transport logo"
            className="bg-white mt-4 p-4 rounded animate-upNdown"
          />
          <p className="mt-4 text-xl lg:mr-44">
            Woodlands Transport (WTS) adalah penyedia transportasi darat
            terpercaya di Singapura. WTS menyediakan layanan berskala besar
            kepada penggunanya.{" "}
          </p>

          <p className="bg-white text-black font-sans p-4 rounded w-[9rem] xl:text-5xl font-bold shadow-xl shadow-black duration-300 hover:shadow-blue-500 hover:bg-white animate-upNdown mt-12">
            JASA
          </p>
          <p className="mt-6 xl:text-xl lg:mr-44">1.	Konsultasi : Mulai dari pengumpulan kebutuhan, kami dapat membantu anda mewujudkan ide-ide anda.Menemukan opsi terbaik untuk masalah yang anda hadapi</p>
          <p className="xl:text-xl lg:mr-44">2. Design : Kami melakukan penelitian dan perencanaan untuk UI dan UX. Menyediakan Wireframe,Prototype, dan High Fidelity Design dengan kualitas tinggi</p>
          <p className="xl:text-xl lg:mr-44">3. Pengembangan : Kami membangun aplikasi anda secara transparan, memperhatikan setiap  detail kecil dengan serius, dan juga membuat kemajuan dengan kecepatan tinggi. </p>
        </div>
      </div>
      <div className="h-[70rem] spacer layer4">
        <p className="text-white font-sans text-center text-8xl font-bold">PROJECT</p>
        <div className="ml-60 mt-60">
          <img src="/awwa-dashboard.jpg" alt="" className="w-96 h-64 my-4 lg:ml-20"/>
          <p className="xl:text-xl font-sans font-bold lg:ml-20">AWWA-CIS</p>
          <img src="/youngminds.jpg" alt="" className="w-96 h-64 my-4 xl:ml-[70rem] lg:ml-20"/>
          <p className="xl:ml-[70rem] xl:text-xl font-sans font-bold lg:ml-20">Youngminds</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
