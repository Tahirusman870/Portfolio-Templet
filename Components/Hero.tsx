import React from "react";
import Particle from "./Particle";
import TextAnimation from "./TextAnimation";
import Image from "next/image";
import { ArrowDownTrayIcon, PlayCircleIcon } from "@heroicons/react/20/solid";

const Hero = () => {
  return (
    <div className="h-[88vh] bg-[url('/images/banner.jpg')] mt-[12vh] bg-cover bg-center ">
      <Particle />
      <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center ">
        <div>
          <h1 className="text-[35px] md:text-[45px] text-white font-bold ">
            HI, I'M <span className="text-blue-500">TAHIR USMAN!</span>
          </h1>
          <TextAnimation />
          <p className="mt-[2rem] text-[16px] text-justify text-[#ffffff92] ">
            An enthusiestic Wed Developer with a strong set of technical as well
            as non-technical skills and a dedication towards creating useful and
            iteractive web aplications!
          </p>
          <div className="mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6">
            <button className="px-[2rem] hover:bg-blue-500 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#f18720] text-black flex items-center space-x-2">
              <p> Download CV</p>
              <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black " />
            </button>
            <button className="flex items-center space-x-2">
              <PlayCircleIcon className="w-[4rem] h-[4rem] hover:text-blue-500 transition-all duration-200 text-[#f18720]" />
              <p className="text-[20px] font-semibold text-white ">
                Watch The Video
              </p>
            </button>
          </div>
        </div>
        <div className="w-[400px] hidden bg-[#f18720] relative lg:flex items-center rounded-full h-[400px]"
        >
          <Image
            src="/images/u11.jpg"
            alt="user"
            layout="fill"
            className="object-cover rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
