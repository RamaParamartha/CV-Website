import React from "react";
import Link from "next/link";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";
import { BiLogoGmail } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="bg-gray-800 bottom-0 w-[100%]">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <p className="flex text-gray-600/100">Contact Me :</p>
          <p className="flex text-gray-600/100">
            <SiGooglemaps className="mt-1 mr-1" />
            80244 Denpasar, Bali
          </p>
          <p className="flex text-gray-600/100">
            <BiLogoGmail className="mt-1 mr-1" />
            paramartha1307@gmail.com
          </p>
        </div>
        <div className=" justify-center sm:mr-40 invisible lg:visible">
          <p className="text-xs text-gray-600/100 ml-12">
            Copyright 2024 Made with NextJS and TailwindCSS. Deployed with
            Vercel
          </p>
        </div>
        <div>
          <ul className="flex space-x-4">
            <li>
              <p className="flex text-gray-600/100">Socials :</p>
            </li>
          </ul>
          <ul className="flex space-x-4">
            <li>
              <Link href="https://www.youtube.com/channel/UCxXtnd1nI5Ox8EoRrNGEfZQ">
                <p className="flex text-gray-600/100">
                  <FaYoutube className="mt-1 mr-1" />
                  Youtube
                </p>
              </Link>
            </li>
          </ul>
          <ul className="flex">
            <li>
              <Link href="https://www.instagram.com/rama_prmrtha/">
                <p className="flex text-gray-600/100">
                  <AiFillInstagram className="mt-1 mr-1" />
                  Instagram
                </p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
