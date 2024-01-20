"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Link,
  Button,
  toggle,
} from "@nextui-org/react";
import { useState } from "react";
import { RiMenuFill, RiCloseFill } from "react-icons/ri";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuToggleIcon, setMenuToggleIcon] = useState(
    <RiMenuFill className="text-wh text-xl" />
  );

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setMenuToggleIcon(
      isMenuOpen ? (
        <RiMenuFill className="text-wh text-xl" />
      ) : (
        <RiCloseFill className="text-wh text-3xl" />
      )
    );
  };

  const menuItems = [
    { label: "ABOUT", link: "#about" },
    { label: "PROJECTS", link: "#projects" },
    { label: "EXPERIENCE", link: "#experience" },
  ];

  return (
    <Navbar
      position="static"
      className="bg-transparent"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarBrand className="mr-20">
        {/* logo here */}
        <p className="font-bold text-3xl text-wh">PEIZHE TIAN</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-20" justify="center">
        <NavbarItem>
          <Link
            href="#about"
            className="text-wh hover:text-bl duration-400 transition-all"
          >
            ABOUT
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="#projects"
            className="text-wh hover:text-bl duration-400 transition-all"
          >
            PROJECTS
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="#experience"
            className="text-wh hover:text-bl duration-400 transition-all"
          >
            EXPERIENCE
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden" justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          onPress={() => toggleMenu()}
          icon={menuToggleIcon}
        />
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.label}-${index}`}>
            <Link
              color="foreground"
              className="w-full"
              href={item.link}
              size="lg"
              onPress={() => toggleMenu()}
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
