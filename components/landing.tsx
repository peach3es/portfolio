import React from "react";
import NextImage from "next/image";
import { Image } from "@nextui-org/react";
import { Button } from "@nextui-org/react";

const Landing: React.FC = () => {
  return (
    <div className="relative flex flex-col lg:px-20 md:pl-10 sm:h-[100lvh] h-[55svh] justify-center my-12 sm:mt-0">
      <Image
        as={NextImage}
        width={770}
        height={770}
        alt="iridescence"
        src="/img/iridescent.jpg"
        className="absolute lg:top-20 lg:left-20 z-0 opacity-100 w-full mix-blend-difference rounded-none object-cover lg:px-0 px-4 aspect-square"
      />
      <div className="w-screen">
        <p className="main-font text-bla text-left px-6 2xl:ml-32 lg:ml-20 h-fit flex items-center text-[85px] sm:text-[150px] lg:text-[250px] 2xl:text-[400px] sm:px-0">
          PEIZHE
        </p>
        <p className="main-font text-bla w-full sm:hidden px-6 lg:-mt-32 sm:-mt-24 -mt-12 flex justify-end text-[85px] sm:text-[150px] lg:text-[250px] 2xl:text-[400px]">
          TIAN
        </p>
        <div className="flex lg:flex-row flex-col-reverse">
          <div className="2xl:text-4xl text-2xl text-wh 2xl:ml-24 lg:ml-20 2xl:p-10 px-12 lg:mt-8 h-fit z-0 sm:text-start text-center">
            Computer Engineer Student @ Concordia University
            <div className="flex sm:flex-row flex-col sm:gap-20 gap-2 mt-5 w-full justify-center">
              <Button
                disableRipple
                className="button sm:w-fit sm:text-2xl text-lg main-font font-extrabold bg-transparent text-wh transition ease-in-out duration-300 border-b-1"
                radius="none"
              >
                <a href="mailto:peizhe2001@hotmail.com">Contact Me</a>
              </Button>
              <Button
                disableRipple
                className="button sm:w-fit sm:text-2xl text-lg main-font font-extrabold bg-transparent text-wh transition ease-in-out duration-300 border-b-1"
                radius="none"
              >
                Resume
              </Button>
            </div>
          </div>
          <p className="main-font text-bla text-right hidden 2xl:mr-32 lg:mr-20 mr-0 ml-auto 2xl:-mt-48 lg:-mt-32 sm:-mt-24 -mt-12 lg:flex items-center text-[85px] sm:text-[150px] lg:text-[250px] 2xl:text-[400px] h-fit lg:px-0 pr-4 ">
            TIAN
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
