import Link from "next/link";
import React from "react";

const Profile = () => {
  return (
    <div className="layer1 spacer flex xl:h-[67rem] h-[60rem]" id="home">
      <div className="xl:pt-64 xl:pl-72 pt-32 pl-8">
        <div className="rounded overflow-hidden w-80 m-auto shadow-2xl shadow-black hover:scale-[1.05] duration-300 hover:shadow-blue-500 hover:bg-white animate-upNdown2">
          <img src="/MadeParamartha.png" alt="I Gede Made Paramartha Nugraha" />
        </div>
      </div>
      <div className=" xl:pt-64 pt-32 pl-6 xl:pr-40 pr-8">
        <p className="font-bold xl:text-5xl text-3xl">
          Hi, My Name Is <br /> I Gede Made Paramartha Nugraha
        </p>
        <p className="xl:text-2xl text-xl pt-2">
          {" "}
          I was born on March 13, 2007. I am a student at SMK TI BALI GLOBAL
          Denpasar, majoring in software engineering. With a strong interest in
          computers from a young age, I am passionate about technology and
          constantly seek opportunities to learn and grow within the field of
          computer science. In my free time, I enjoy playing games, and
          researching about new computer related technologies.{" "}
        </p>
      </div>
    </div>
  );
};

export default Profile;
