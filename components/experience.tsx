import React from "react";
import NextImage from "next/image";
import { Image, Divider } from "@nextui-org/react";

const Experience: React.FC = () => {
  return (
    <div
      className="experience marquee text-8xl main-font text-bl"
      id="experience"
    >
      <span>EXPERIENCE EXPERIENCE EXPERIENCE EXPERIENCE EXPERIENCE&nbsp;</span>
      <span>EXPERIENCE EXPERIENCE EXPERIENCE EXPERIENCE EXPERIENCE</span>
      <div className="content h-fit mx-10 text-5xl text-wh flex flex-col my-10">
        <div className="flex flex-row h-fit w-3/4 place-self-center items-center whitespace-normal">
          <div className="image w-1/2 flex justify-center my-5">
            <Image
              as={NextImage}
              width={700}
              height={700}
              alt="profile"
              quality={80}
              src="/img/matrox.svg"
              className="z-0 opacity-100 w-full mix-blend-difference rounded-none object-cover"
            />
          </div>
          <div className="flex flex-col desc w-1/2 gap-2 text-left">
            <h2 className="sec-font text-7xl">Application Engineer Intern</h2>
            <h2 className="text-4xl text-dbl">/January 2023 - April 2023/</h2>
            <div className="summary">
              <p className="px-2 sec-font text-2xl">
                Assessed customer cases to reproduce client-side bugs and
                resolve them by using problem solving.
              </p>
              <p className="px-2 sec-font text-2xl">
                Conceptualized a web application for one of the products using
                REACT & proprietary REST APIs.
              </p>
              <p className="px-2 sec-font text-2xl">
                Contributed to diverse internal software programs made using C#
                & .NET framework.
              </p>
            </div>
            <h2 className="px-2 mt-2 text-3xl text-dbl font-bold">
              Skills: HTML, CSS, JAVASCRIPT, REACT, REST API, SCRUM, .NET
            </h2>
          </div>
        </div>
        <Divider
          orientation="horizontal"
          className="bg-dbl w-3/4 place-self-center my-10"
        />
        <div className="flex flex-row h-fit w-3/4 place-self-center items-center whitespace-normal">
          <div className="flex flex-col desc w-1/2 gap-2 text-right">
            <h2 className="sec-font text-7xl">Crew Member</h2>
            <h2 className="text-4xl text-dbl">/July 2019 - September 2021/</h2>
            <div className="summary">
              <p className="px-2 sec-font text-2xl">
                Maintained speed under pressure while serving 300 customers/day.
              </p>
              <p className="px-2 sec-font text-2xl">
                Coordinated with other crew members to keep up the speed and
                cleaning tasks done.
              </p>
              <p className="px-2 sec-font text-2xl"></p>
              <p className="px-2 sec-font text-2xl">
                Improved communication skills and patience by doing customer
                service.
              </p>
            </div>
            <h2 className="px-2 mt-2 text-3xl text-dbl font-bold">
              Skills: COMMUNICATION, TEAMWORK, CUSTOMER SERVICE
            </h2>
          </div>
          <div className="image w-1/2 flex my-5 justify-center">
            <Image
              as={NextImage}
              width={650}
              height={650}
              alt="profile"
              src="/img/Wendys-Logo.png"
              className="z-0 opacity-100 w-full mix-blend-lighten rounded-sm object-cover"
            />
          </div>
        </div>
        <Divider
          orientation="horizontal"
          className="bg-dbl w-3/4 place-self-center my-10"
        />
        <div className="flex flex-row h-fit w-3/4 place-self-center items-center whitespace-normal">
          <div className="image w-1/2 flex justify-center my-5">
            <Image
              as={NextImage}
              width={700}
              height={700}
              alt="profile"
              quality={80}
              src="/img/CS_Saint-Laurent.png"
              className="z-0 opacity-100 w-full mix-blend-difference rounded-none object-cover"
            />
          </div>
          <div className="flex flex-col desc w-1/2 gap-2 text-left">
            <h2 className="sec-font text-7xl">Soccer Linesman Referee</h2>
            <h2 className="text-4xl text-dbl">/2015 - 2017/</h2>
            <div className="summary">
              <p className="px-2 sec-font text-2xl">
                Applied deep understanding of the soccer rules in a fast-paced
                environment.
              </p>
              <p className="px-2 sec-font text-2xl">
                Provided accurate callouts & decision-making whilst being in an
                under-pressure situation.
              </p>
            </div>
            <h2 className="px-2 mt-2 text-3xl text-dbl font-bold">
              Skills: COMMUNICATION, TEAMWORK, DECISION-MAKING, HIGH PRESSURE
              ENVIRONMENT
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
