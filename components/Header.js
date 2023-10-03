"use client";

import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
  BsLinkedin,
} from "react-icons/fa";

const Header = () => {
  //  useState

  const [nav, setNav] = useState(false);
  const handlenav = () => {
    setNav(!nav);
  };

  return (
    <div className=" w-full shadow-xl">
      <div className="flex h-20 w-full justify-between items-center md:px-16">
        <div>
          <h1 className="text-3xl font-bold text-[#5651e5]">Rezaul Karim</h1>
        </div>
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b hover:text-[#5651e5] ">
                Home
              </li>
            </Link>
            <Link href="/about">
              <li className="ml-10 text-sm uppercase hover:border-b hover:text-[#5651e5] ">
                About
              </li>
            </Link>
            <Link href="/skills">
              <li className="ml-10 text-sm uppercase hover:border-b hover:text-[#5651e5] ">
                Skills
              </li>
            </Link>
            <Link href="/projects">
              <li className="ml-10 text-sm uppercase hover:border-b hover:text-[#5651e5] black">
                Projects
              </li>
            </Link>
            <Link href="/service">
              <li className="ml-10 text-sm uppercase hover:border-b hover:text-[#5651e5] black">
                Service
              </li>
            </Link>
            <Link href="/contact">
              <li className="ml-10 text-sm uppercase hover:border-b hover:text-[#5651e5] black">
                Contact
              </li>
            </Link>
          </ul>

          {/* responsive */}

          <div onClick={handlenav} className="px-5 block md:hidden">
            {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
          </div>
        </div>
      </div>

      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[80%]  h-full bg-[#5651e5] ease-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <div>
          <div>
            <h1 className="text-2xl my-5 ml-10 font-bold text-[#ffffff]">
              Rezaul Karim
            </h1>
          </div>
          <div>
            <p className="text-lg my-5 ml-10  text-[#ffffff]">
              Let`s build somthing together
            </p>
          </div>
        </div>

        <div className="py-4 ">
          <ul>
            <Link href="/">
              <li className="py-4 text-white ml-10 text-sm uppercase border-b">
                Home
              </li>
            </Link>
            <Link href="/about">
              <li className="py-4 text-white ml-10 text-sm uppercase border-b">
                About
              </li>
            </Link>
            <Link href="/skills">
              <li className="py-4 text-white ml-10 text-sm uppercase border-b">
                Skills
              </li>
            </Link>
            <Link href="/projets">
              <li className="py-4 text-white ml-10 text-sm uppercase border-b">
                Projects
              </li>
            </Link>
            <Link href="/service">
              <li className="py-4 text-white ml-10 text-sm uppercase border-b">
                Service
              </li>
            </Link>
            <Link href="/contact">
              <li className="py-4 text-white ml-10 text-sm uppercase border-b">
                Contact
              </li>
            </Link>
          </ul>
        </div>
        <div className="pt-20 text-center">
          <p className="uppercase tracking-widest text-white  py-2">
            Let`s Connect
          </p>
          <div className="flex justify-around text-white px-5 py-5 ">
            <div>
              <FaFacebookSquare
                className="rounded-full shadow-lg shadow-gray-600 "
                size={35}
              />
            </div>
            <div>
              <FaTwitterSquare
                className="rounded-full shadow-lg shadow-gray-600 "
                size={35}
              />
            </div>
            <div>
              <FaGithubSquare
                className="rounded-full shadow-lg shadow-gray-600 "
                size={35}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
