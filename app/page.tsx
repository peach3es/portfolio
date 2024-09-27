import React from "react";
import About from "@/components/about";
import Projects from "@/components/projects";
import Experience from "@/components/experience";
import Landing from "@/components/landing";

export default function MainPage() {
  return (
    <main className="flex">
      <div className="flex flex-col w-full">
        <Landing />
        <div className="mt-72 sm:mt-0">
          {/* ABOUT */}
          <About />
          {/* PROJECTS */}
          <Projects />
          {/* EXPERIENCE */}
          <Experience />
        </div>
      </div>
    </main>
  );
}
