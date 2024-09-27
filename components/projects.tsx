import React from "react";
import NextImage from "next/image";
import { Image, Button, Divider } from "@nextui-org/react";

const Projects: React.FC = () => {
  return (
    <div className="project marquee text-8xl main-font text-bl" id="projects">
      <span>PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS&nbsp;</span>
      <span>PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS</span>
      <div className="content h-fit mx-10 text-5xl text-wh flex flex-col my-10">
        <div className="flex flex-row h-fit items-center whitespace-normal w-3/4 place-self-center">
          <div className="flex flex-col desc w-1/2 gap-2 text-right">
            <h2 className="sec-font text-7xl">5FtApart</h2>
            <h2 className="text-4xl text-dbl">/Fall - December 2023/</h2>
            <div className="summary">
              <p className="px-2 sec-font text-2xl">
                Developed a real estate website clone using Next.js, Cypress,
                MongoDB & Vercel.
              </p>
              <p className="px-2 sec-font text-2xl">
                Designed the UI/UX of the website using Tailwind & the NextUI
                library.
              </p>
              <p className="px-2 sec-font text-2xl">
                Led the development process following SCRUM methodology & was
                the SCRUM master.
              </p>
              <p className="px-2 sec-font text-2xl">
                Engaged in pair programming to ensure a uniform and efficient
                workflow.
              </p>
            </div>
            <h2 className="px-2 mt-2 text-3xl text-dbl font-bold">
              Skills: NEXT.JS 13, TAILWIND, MONGODB, CYPRESS, TYPESCRIPT
            </h2>
            <div className="flex gap-10 justify-center my-4">
              <Button
                disableRipple
                className="button w-fit text-2xl main-font font-extrabold bg-transparent text-wh transition ease-in-out duration-300 border-b-1"
                radius="none"
              >
                <a href="https://github.com/peach3es/5FtApart" target="_blank">
                  GitHub
                </a>
              </Button>
              <Button
                disableRipple
                className="button w-fit text-2xl main-font font-extrabold bg-transparent text-wh transition ease-in-out duration-300 border-b-1"
                radius="none"
              >
                <a href="https://5ftapart.vercel.app" target="_blank">
                  Website
                </a>
              </Button>
            </div>
          </div>
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
        </div>

        <Divider
          orientation="horizontal"
          className="bg-dbl w-3/4 place-self-center my-10"
        />
        <div className="flex flex-row h-fit w-3/4 place-self-center items-center whitespace-normal">
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
          <div className="flex flex-col desc w-1/2 gap-2 text-left">
            <h2 className="sec-font text-7xl">
              Concordia Game Development Club
            </h2>
            <h2 className="text-4xl text-dbl">/Fall 2023 - Ongoing/</h2>
            <div className="summary">
              <p className="px-2 sec-font text-2xl">
                Re-developed the CGD club&apos;s website using Remix, Tailwind &
                Vercel.
              </p>
              <p className="px-2 sec-font text-2xl">
                Re-designed the UI/UX of the website using Tailwind whilst
                keeping the original website&apos;s aesthetic.
              </p>
              <p className="px-2 sec-font text-2xl"></p>
              <p className="px-2 sec-font text-2xl">
                Collaborated in pair programming to solicit reviews, ensuring
                the website&apos;s intended direction.
              </p>
            </div>
            <h2 className="px-2 mt-2 text-3xl text-dbl font-bold">
              Skills: REMIX, TAILWIND, TYPESCRIPT
            </h2>
            <div className="flex gap-10 justify-center my-4">
              <Button
                disableRipple
                className="button w-fit text-2xl main-font font-extrabold bg-transparent text-wh transition ease-in-out duration-300 border-b-1"
                radius="none"
              >
                <a
                  href="https://github.com/peach3es/CGDWebsite"
                  target="_blank"
                >
                  GitHub
                </a>
              </Button>
              <Button
                disableRipple
                className="button w-fit text-2xl main-font font-extrabold bg-transparent text-wh transition ease-in-out duration-300 border-b-1"
                radius="none"
              >
                <a
                  href="https://concordiagamedev.vercel.app/sponsor"
                  target="_blank"
                >
                  Website
                </a>
              </Button>
            </div>
          </div>
        </div>
        <Divider
          orientation="horizontal"
          className="bg-dbl w-3/4 place-self-center my-10"
        />
        {/* <div className="flex flex-row h-fit items-center whitespace-normal w-3/4 place-self-center">
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
                Planning on adding more tools in the future like a to-do list.
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
        />*/}
        <div className="flex flex-row h-fit w-3/4 place-self-center items-center whitespace-normal">
          <div className="flex flex-col desc w-1/2 gap-2 text-right">
            <h2 className="sec-font text-7xl">GunHead (Video Game)</h2>
            <h2 className="text-4xl text-dbl">/October 2022/</h2>
            <div className="summary">
              <p className="px-2 sec-font text-2xl">
                Created 2D side-scrolling platformer using C# in Unity in 48
                hours.
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
  );
};

export default Projects;
