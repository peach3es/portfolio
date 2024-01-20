import { Button, Image, Divider } from "@nextui-org/react";
import NextImage from "next/image";

export default function MainPage() {
  return (
    <main className="flex">
      <div className="flex flex-col w-full">
        <div className="flex flex-col sm:px-20 sm:h-screen justify-center mt-32 sm:mt-0">
          <div className="lg:w-[770px] lg:place-self-start lg:ml-24 aspect-square absolute lg:px-0 px-2 ">
            <Image
              as={NextImage}
              width={1500}
              height={500}
              alt="iridescence"
              src="/img/iridescent.jpg"
              className="z-0 opacity-100 w-full mix-blend-difference rounded-none object-cover"
            />
          </div>
          <p className="main-font text-bla text-left 2xl:ml-32 lg:ml-20 ml-0 h-1/3 flex items-center mt-20 text-[100px] sm:text-[150px] lg:text-[250px] 2xl:text-[400px] sm:px-0 pl-4">
            PEIZHE
          </p>
          <div className="flex lg:flex-row flex-col-reverse">
            <div className="2xl:text-4xl lg:text-2xl text-xl text-wh 2xl:ml-24 lg:ml-20 2xl:p-10 p-8 lg:mt-8 h-fit z-0 sm:text-start text-center">
              Computer Engineer Student @ Concordia University
              <div className="flex flex-row gap-20 mt-5 w-full justify-center">
                <Button
                  disableRipple
                  className="button w-fit text-2xl main-font font-extrabold bg-transparent text-wh transition ease-in-out duration-300 border-b-1"
                  radius="none"
                >
                  <a href="mailto:peizhe2001@hotmail.com">Contact Me</a>
                </Button>
                <Button
                  disableRipple
                  className="button w-fit text-2xl main-font font-extrabold bg-transparent text-wh transition ease-in-out duration-300 border-b-1"
                  radius="none"
                >
                  Resume
                </Button>
              </div>
            </div>
            <p className="main-font text-bla text-right 2xl:mr-32 lg:mr-20 mr-0 ml-auto 2xl:-mt-48 lg:-mt-32 sm:-mt-24 -mt-16 flex items-center text-[100px] sm:text-[150px] lg:text-[250px] 2xl:text-[400px] h-fit sm:px-0 pr-4">
              TIAN
            </p>
          </div>
        </div>
        <div className="mt-72 sm:mt-0">
          {/* ABOUT */}
          <div className="about marquee text-8xl main-font text-bl" id="about">
            <span>ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT</span>
            <span>&nbsp;ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT</span>
            <div className="content h-fit mx-10 text-5xl text-wh flex flex-col">
              <div className="flex flex-row h-fit mx-20 items-center whitespace-normal my-10 gap-8">
                <div className="flex flex-col desc w-1/2 gap-2 text-right">
                  <h2 className="sec-font text-7xl">
                    Hey, I&apos;m Peizhe Tian
                  </h2>
                  <h2 className="p-2 text-4xl italic text-bl">/pAy-zEE/</h2>
                  <p className="px-2 sec-font text-3xl">
                    I&apos;m currently a Computer Engineering student at
                    Concordia University and I&apos;m focusing on various side
                    projects to refine my skills.
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
          {/* PROJECTS */}
          <div
            className="project marquee text-8xl main-font text-bl"
            id="projects"
          >
            <span>
              PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS&nbsp;
            </span>
            <span>PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS</span>
            <div className="content h-fit mx-10 text-5xl text-wh flex flex-col my-10">
              <div className="flex flex-row h-fit items-center whitespace-normal w-3/4 place-self-center">
                <div className="image w-1/2 flex my-5 justify-center">
                  <Image
                    as={NextImage}
                    width={770}
                    height={770}
                    alt="profile"
                    src="/img/5ftapart.png"
                    className="z-0 opacity-100 w-full mix-blend-difference rounded-none object-cover"
                  />
                </div>
                <div className="flex flex-col desc w-1/2 gap-2 text-left">
                  <h2 className="sec-font text-7xl">5FtApart</h2>
                  <h2 className="text-4xl text-dbl">/Fall - December 2023/</h2>
                  <div className="summary">
                    <p className="px-2 sec-font text-2xl">
                      Developed a real estate website clone using Next.js,
                      Cypress, MongoDB & Vercel.
                    </p>
                    <p className="px-2 sec-font text-2xl">
                      Designed the UI/UX of the website using Tailwind & the
                      NextUI library.
                    </p>
                    <p className="px-2 sec-font text-2xl">
                      Led the development process following SCRUM methodology &
                      was the SCRUM master.
                    </p>
                    <p className="px-2 sec-font text-2xl">
                      Engaged in pair programming to ensure a uniform and
                      efficient workflow.
                    </p>
                  </div>
                  <h2 className="px-2 mt-2 text-3xl text-dbl font-bold">
                    Skills: NEXT.JS 13, TAILWIND, MONGODB, CYPRESS, TYPESCRIPT
                  </h2>
                </div>
              </div>
              <Divider
                orientation="horizontal"
                className="bg-dbl w-3/4 place-self-center my-10"
              />
              <div className="flex flex-row h-fit w-3/4 place-self-center items-center whitespace-normal">
                <div className="flex flex-col desc w-1/2 gap-2 text-right">
                  <h2 className="sec-font text-7xl">
                    Concordia Game Development Club
                  </h2>
                  <h2 className="text-4xl text-dbl">/Fall 2023 - Ongoing/</h2>
                  <div className="summary">
                    <p className="px-2 sec-font text-2xl">
                      Re-developed the CGD club&apos;s website using Remix,
                      Tailwind & Vercel.
                    </p>
                    <p className="px-2 sec-font text-2xl">
                      Re-designed the UI/UX of the website using Tailwind whilst
                      keeping the original website&apos;s aesthetic.
                    </p>
                    <p className="px-2 sec-font text-2xl"></p>
                    <p className="px-2 sec-font text-2xl">
                      Collaborated in pair programming to solicit reviews,
                      ensuring the website&apos;s intended direction.
                    </p>
                  </div>
                  <h2 className="px-2 mt-2 text-3xl text-dbl font-bold">
                    Skills: REMIX, TAILWIND, TYPESCRIPT
                  </h2>
                </div>
                <div className="image w-1/2 flex my-5 px-16 justify-center">
                  <Image
                    as={NextImage}
                    width={300}
                    height={300}
                    alt="profile"
                    src="/img/cgd.png"
                    className="z-0 opacity-100 w-full mix-blend-lighten rounded-none object-cover"
                  />
                </div>
              </div>
              <Divider
                orientation="horizontal"
                className="bg-dbl w-3/4 place-self-center my-10"
              />
              <div className="flex flex-row h-fit items-center whitespace-normal w-3/4 place-self-center">
                <div className="image w-1/2 flex my-5 justify-center px-16">
                  <Image
                    as={NextImage}
                    width={700}
                    height={700}
                    alt="profile"
                    quality={80}
                    src="/img/simpleapps.png"
                    className="z-0 opacity-100 w-full mix-blend-difference rounded-sm object-cover"
                  />
                </div>
                <div className="flex flex-col desc w-1/2 gap-2 text-left">
                  <h2 className="sec-font text-7xl">Simple Application</h2>
                  <h2 className="text-4xl text-dbl">/March 2023 - Ongoing/</h2>
                  <div className="summary">
                    <p className="px-2 sec-font text-2xl">
                      Developed a simple application website using HTML, CSS &
                      Javascript.
                    </p>
                    <p className="px-2 sec-font text-2xl">
                      Designed a collection of small tools like a calculator & a
                      weather app.
                    </p>
                    <p className="px-2 sec-font text-2xl">
                      Planning on adding more tools in the future like a to-do
                      list.
                    </p>
                  </div>
                  <h2 className="px-2 mt-2 text-3xl text-dbl font-bold">
                    Skills: HTML, CSS, JAVASCRIPT
                  </h2>
                </div>
              </div>
              <Divider
                orientation="horizontal"
                className="bg-dbl w-3/4 place-self-center my-10"
              />
              <div className="flex flex-row h-fit w-3/4 place-self-center items-center whitespace-normal">
                <div className="flex flex-col desc w-1/2 gap-2 text-right">
                  <h2 className="sec-font text-7xl">GunHead (Video Game)</h2>
                  <h2 className="text-4xl text-dbl">/October 2022/</h2>
                  <div className="summary">
                    <p className="px-2 sec-font text-2xl">
                      Created 2D side-scrolling platformer using C# in Unity in
                      48 hours.
                    </p>
                    <p className="px-2 sec-font text-2xl">
                      Led the level design, camera movement & design.
                    </p>
                    <p className="px-2 sec-font text-2xl"></p>
                    <p className="px-2 sec-font text-2xl">
                      Submitted to the 2022 Concordia Game Jam.
                    </p>
                  </div>
                  <h2 className="px-2 mt-2 text-3xl text-dbl font-bold">
                    Skills: C#, UNITY
                  </h2>
                </div>
                <div className="image w-1/2 flex my-5 justify-center">
                  <Image
                    as={NextImage}
                    width={650}
                    height={650}
                    alt="profile"
                    src="/img/GunHead.png"
                    className="z-0 opacity-100 w-full mix-blend-lighten rounded-sm object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* EXPERIENCE */}
          <div
            className="experience marquee text-8xl main-font text-bl"
            id="experience"
          >
            <span>
              EXPERIENCE EXPERIENCE EXPERIENCE EXPERIENCE EXPERIENCE&nbsp;
            </span>
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
                  <h2 className="sec-font text-7xl">
                    Application Engineer Intern
                  </h2>
                  <h2 className="text-4xl text-dbl">
                    /January 2023 - April 2023/
                  </h2>
                  <div className="summary">
                    <p className="px-2 sec-font text-2xl">
                      Assessed customer cases to reproduce client-side bugs and
                      resolve them by using problem solving.
                    </p>
                    <p className="px-2 sec-font text-2xl">
                      Conceptualized a web application for one of the products
                      using REACT & proprietary REST APIs.
                    </p>
                    <p className="px-2 sec-font text-2xl">
                      Contributed to diverse internal software programs made
                      using C# & .NET framework.
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
                  <h2 className="text-4xl text-dbl">
                    /July 2019 - September 2021/
                  </h2>
                  <div className="summary">
                    <p className="px-2 sec-font text-2xl">
                      Maintained speed under pressure while serving 300
                      customers/day.
                    </p>
                    <p className="px-2 sec-font text-2xl">
                      Coordinated with other crew members to keep up the speed
                      and cleaning tasks done.
                    </p>
                    <p className="px-2 sec-font text-2xl"></p>
                    <p className="px-2 sec-font text-2xl">
                      Improved communication skills and patience by doing
                      customer service.
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
                      Applied deep understanding of the soccer rules in a
                      fast-paced environment.
                    </p>
                    <p className="px-2 sec-font text-2xl">
                      Provided accurate callouts & decision-making whilst being
                      in an under-pressure situation.
                    </p>
                  </div>
                  <h2 className="px-2 mt-2 text-3xl text-dbl font-bold">
                    Skills: COMMUNICATION, TEAMWORK, DECISION-MAKING, HIGH
                    PRESSURE ENVIRONMENT
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
