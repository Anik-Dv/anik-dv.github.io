"use client";

import React, { useCallback, useEffect, useState } from "react";
import cn from "classnames";
import Image from "next/image"

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setActiveTab("home");
  }, []);

  const scrollToSection = useCallback((sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div
      className="fixed top-12 right-6 mx-auto 
        flex flex-col gap-2.5 items-end z-50 md:right-auto md:left-1/2 md:-translate-x-1/2 "
    >
      <button
        className="bg-background md:hidden card-shadow p-3 rounded"
        onClick={() => setIsOpen((prevVal) => !prevVal)}
      >
        <Image
          className="block dark:hidden"
          src="./menu_icon_light.svg"
          alt="menu icon"
          width={19}
          height={19}
        />
      </button>
      <button
        className="bg-background md:hidden card-shadow p-3 rounded"
        onClick={() => setIsOpen((prevVal) => !prevVal)}
      >
        <Image
          className="hidden dark:block"
          src="./menu_icon_dark.svg"
          alt="menu icon"
          width={19}
          height={19}
        />
      </button>

      <nav
        className={cn(
          "bg-background card-shadow p-3 rounded md:block duration-300 ease-in-out",
          {
            "opacity-100": isOpen,
            "opacity-0 md:opacity-100": !isOpen,
          }
        )}
      >
        <ul className="flex flex-col items-center gap-4 text-lg font-normal md:flex-row">
          <li>
            <div
              className={cn("rounded p-1 duration-300 ease-in-out", {
                "bg-primary text-white": activeTab === "home",
              })}
              onClick={() => {
                setActiveTab("home");
                scrollToSection("home");
                setIsOpen(false);
              }}
            >
              Home
            </div>
          </li>
          <li>
            <div
              className={cn("rounded p-1 duration-300 ease-in-out", {
                "bg-primary text-white": activeTab === "skills",
              })}
              onClick={() => {
                setActiveTab("skills");
                scrollToSection("skills");
                setIsOpen(false);
              }}
            >
              Skills
            </div>
          </li>
          <li>
            <div
              className={cn("rounded p-1 duration-300 ease-in-out", {
                "bg-primary text-white": activeTab === "projects",
              })}
              onClick={() => {
                setActiveTab("projects");
                scrollToSection("projects");
                setIsOpen(false);
              }}
            >
              Projects
            </div>
          </li>
          <li>
            <div
              className={cn("rounded p-1 duration-300 ease-in-out", {
                "bg-primary text-white": activeTab === "testimonial",
              })}
              onClick={() => {
                setActiveTab("testimonial");
                scrollToSection("testimonial");
                setIsOpen(false);
              }}
            >
              Testimonials
            </div>
          </li>
          <li>
            <div
              className={cn("rounded p-1 duration-300 ease-in-out", {
                "bg-primary text-white": activeTab === "experience",
              })}
              onClick={() => {
                setActiveTab("experience");
                scrollToSection("experience");
                setIsOpen(false);
              }}
            >
              Experience
            </div>
          </li>
          <li>
            <div
              className={cn(
                "rounded p-1 whitespace-nowrap duration-300 ease-in-out",
                {
                  "bg-primary text-white": activeTab === "contact",
                }
              )}
              onClick={() => {
                setActiveTab("contact");
                scrollToSection("contact");
                setIsOpen(false);
              }}
            >
              Contact Me
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
