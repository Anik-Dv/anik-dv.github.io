import React from "react";

import Image from "next/image";
import skills from "@/data/skills.json";
import SectionContainer from "../sections_utility/SectionContainer";
import SectionHeader from "../sections_utility/SectionHeader";
import Skill from "./Skill";

const SkillList = () => {
  return (
    <SectionContainer id="skills">
      <div className="section-contents mx-[22px] md:mx-[116px]">
        <SectionHeader
          plainText= "This is My"
          highlightText="Tech Stack"
        />

        <div
          className="card w-full px-[33px]
            py-[27px] flex flex-wrap flex-col md:flex-row 
            justify-center items-center gap-[19px] md:gap-[33px]"
        >
          {skills.map((skill, id) => (
            <Skill key={id} name={skill.name} icon={skill.icon} />
          ))}
        </div>
      </div>

      <>
      {/* Dark Mode Decoration */}
        <Image
          src="./tech_stack_grid_dark.svg"
          alt="Dark background decoration"
          width={569}
          height={373}
          className="hidden dark:md:block -z-10 absolute
          -left-[135px] -top-[38px]"
        />
      {/* Light Mode Decoration */}
        <Image
          src="./tech_stack_grid.svg"
          alt="Light background decoration"
          width={569}
          height={373}
          className="hidden dark:hidden md:block -z-10 absolute
          -left-[125px] -top-[38px]"
        />
      </>
    </SectionContainer>
  );
};

export default SkillList;
