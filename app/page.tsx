import { Button, Image } from "@nextui-org/react";
import NextImage from "next/image";

export default function MainPage() {
  return (
    <main className="flex py-10">
      <div className="flex flex-col w-full ">
        <div className="flex flex-col sm:px-20 -mb-56">
          <div className="sm:w-[770px] sm:place-self-start place-self-center sm:ml-24 aspect-square absolute sm:px-0 px-2">
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
                  className="button w-fit text-2xl main-font font-extrabold bg-transparent text-wh  transition ease-in-out duration-300 border-b-1"
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
          <div className="about marquee text-8xl main-font text-bl ">
            <span>ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT</span>
            <span>&nbsp;ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT</span>
            <div className="content h-fit mx-10 text-5xl text-wh">
              about section
            </div>
          </div>
          {/* PROJECTS */}
          <div className="project marquee text-8xl main-font text-bl">
            <span>
              PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS&nbsp;
            </span>
            <span>PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS</span>
            <div className="content h-fit mx-10 text-5xl text-wh">
              project section
            </div>
          </div>
          {/* EXPERIENCE */}
          <div className="experience marquee text-8xl main-font text-bl">
            <span>
              EXPERIENCE EXPERIENCE EXPERIENCE EXPERIENCE EXPERIENCE&nbsp;
            </span>
            <span>EXPERIENCE EXPERIENCE EXPERIENCE EXPERIENCE EXPERIENCE</span>
            <div className="content h-fit mx-10 text-5xl text-wh">
              experience section
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
