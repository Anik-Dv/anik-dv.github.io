import React from 'react'
import SectionContainer from '../sections_utility/SectionContainer';
import SectionHeader from '../sections_utility/SectionHeader';
import projects from '@/data/projects.json';
import Project from './Project';
import Image from "next/image";

const Projects = () => {
  return (
    <SectionContainer id="projects">
        <div className="section-contents mx-6 md:mx-[64px]">
            <SectionHeader plainText="Some Of My" 
            highlightText="Best Works" />
            <div className="lg:w-full grid
            grid-cols-1 lg:grid-cols-2
            gap-10">
                {
                    projects.map((project, index) => (
                    <Project key={index} 
                        thumbnail={project.thumbnail}
                        title={project.title} 
                        link={project.link}
                        description={project.description}
                        languageIcons={project.languageIcons}
                    />
                    )
                )
                }
            </div>
        </div>
        {/* For Medium Devices View */}
        <Image 
            src="./projects_highlight.svg"
            alt="Projects Highlight"
            width={558}
            height={558}
            className="absolute hidden md:block 
            left-1/2 top-1/2 -translate-x-1/2 
            -translate-y-1/2 -z-10"
        />
        {/* For Mobile View */}
        <Image 
            src="./projects_highlight_mobile.svg"
            alt="Projects Highlight"
            width={321}
            height={530}
            className="absolute md:hidden
            left-1/2 top-1/2 -translate-x-1/2 
            -translate-y-1/2 -z-10"
        />
    </SectionContainer>
)
}

export default Projects;