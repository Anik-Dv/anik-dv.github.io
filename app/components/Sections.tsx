import React from "react";
import Hero from "./hero/Hero";
import Skills from "./skills/SkillList";
import Projects from "./projects/Projects";
import Testimonials from "./testimonials/Testimonials";

const Sections = () => {
  return (
    <main
      className="flex flex-col gap-[142px] w-full 
        md:max-w-screen-lg pt-[236px] 
        md:pt-60 mx-auto"
    >
      <Hero />
      <Skills />
      <Projects />
      <Testimonials />
    </main>
  );
};

export default Sections;
