import React from "react";
import NextImage from "next/image";
import { Image } from "@nextui-org/react";

const About: React.FC = () => {
  return (
    <div className="about marquee text-8xl main-font text-bl" id="about">
      <span>ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT</span>
      <span>&nbsp;ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT</span>
      <div className="content h-fit mx-10 text-5xl text-wh flex flex-col">
        <div className="flex flex-row h-fit mx-20 items-center whitespace-normal my-10 gap-8">
          <div className="flex flex-col desc w-1/2 gap-2 text-right">
            <h2 className="sec-font text-7xl">Hey, I&apos;m Peizhe Tian</h2>
            <h2 className="p-2 text-4xl italic text-bl">/pAy-zEE/</h2>
            <p className="px-2 sec-font text-3xl">
              I&apos;m currently a Computer Engineering student at Concordia
              University and I&apos;m focusing on various side projects to
              refine my skills.
            </p>
          </div>
          <div className="image w-1/2 justify-center my-5">
            <Image
              as={NextImage}
              width={770}
              height={770}
              quality={80}
              alt="film"
              src="/img/iridescent2.jpg"
              className="opacity-100 w-full mix-blend-soft-light rounded-none object-cover aspect-square absolute object-top"
            />
            <Image
              as={NextImage}
              width={770}
              height={770}
              quality={80}
              alt="profile"
              src="/img/profile_edited.jpg"
              className="z-0 opacity-100 w-full mix-blend-soft-difference rounded-none object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
