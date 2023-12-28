"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";

export default function NavBar() {
  return (
    <Navbar position="static" className="bg-transparent">
      <NavbarBrand className="mr-20">
        {/* logo here */}
        <p className="font-bold text-3xl text-wh">PEIZHE TIAN</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-20" justify="center">
        <NavbarItem>
          <Link
            href="#"
            className="text-wh hover:text-bl duration-400 transition-all"
          >
            ABOUT
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="#"
            className="text-wh hover:text-bl duration-400 transition-all"
          >
            PROJECTS
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="#"
            className="text-wh hover:text-bl duration-400 transition-all"
          >
            EXPERIENCE
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
