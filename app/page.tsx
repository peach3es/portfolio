export default function MainPage() {
  return (
    <main className="flex ">
      <div className="flex flex-col w-full ">
        <div className="flex flex-col px-20 -mb-56">
          <p className="main-font text-bla text-left 2xl:ml-32 lg:ml-20 ml-0 h-1/3 flex items-center mt-20 text-[100px] sm:text-[150px] lg:text-[250px] 2xl:text-[400px] ">
            PEIZHE
          </p>
          <div className="flex lg:flex-row flex-col-reverse">
            <div className="2xl:text-4xl lg:text-2xl text-xl text-bl 2xl:ml-32 lg:ml-20 2xl:p-10 p-8 lg:mt-8 h-fit ">
              Computer Engineer Student @ Concordia University
            </div>
            <p className="main-font text-bla text-right 2xl:mr-32 lg:mr-20 mr-0 ml-auto 2xl:-mt-48 lg:-mt-32 sm:-mt-24 -mt-16 flex items-center text-[100px] sm:text-[150px] lg:text-[250px] 2xl:text-[400px] h-fit">
              TIAN
            </p>
          </div>
        </div>
        {/* ABOUT */}
        <div className="about marquee text-8xl main-font text-wh">
          <span>ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT</span>
          <span>&nbsp;ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT</span>
          <div className="content h-fit">about section</div>
        </div>
        {/* PROJECTS */}
        <div className="project marquee text-8xl main-font text-wh">
          <span>
            PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS&nbsp;
          </span>
          <span>PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS</span>
          <div className="content h-fit">project section</div>
        </div>
      </div>
    </main>
  );
}
