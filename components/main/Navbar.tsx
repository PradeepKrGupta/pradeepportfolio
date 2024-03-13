import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";
import Link from 'next/link';
import Contact from "./Contact";




const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <Link href="/" className="h-auto w-auto flex flex-row items-center">
          {/* <a className="h-auto w-auto flex flex-row items-center"> */}
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={50}
            height={50}
            className="cursor-pointer hover:animate-slowspin"
          />
          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Pradeep Kumar Gupta
          </span>
          {/* </a> */}
        </Link>

        <div className="w-[600px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <Link href="#about" className="nav-link">
              About me
            </Link>
            <Link href="#skills" className="nav-link">
              Skills
            </Link>
            <Link href="#projects" className="nav-link">
              Projects
            </Link>
            <Link href="#education" className="nav-link">
              Education
            </Link>
            <Link href='https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcSKkwpSZRWPlbXsjJCVPHRTpdcdBdqQsnrZqVxCGXbJpZvvMPJLcrLFlGcLrJSWgchCMZflb' target="_blank" rel="noreferrer noopener" className="nav-link">
              Contact me
            </Link>
            
            <Link href="https://drive.google.com/file/d/1pdFI_cI42SzRt1Ip9mpCerOESi-Vzedp/view?usp=sharing" target="_blank" rel="noreferrer noopener" className="font-bold text-white bg-purple-400 rounded-lg py-1 px-2 hover:scale-105">
              My Resume
            </Link>
          </div>
        </div>

        <div className="flex flex-row gap-5">
          {Socials.map((social) => (
            <Link href={social.so} key={social.name} target="_blank" rel="noreferrer noopener">
              <Image
                src={social.src}
                alt={social.name}
                width={24}
                height={24}
                className="cursor-pointer hover:scale-105" // Add hover:scale-105 class
              />
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Navbar;
