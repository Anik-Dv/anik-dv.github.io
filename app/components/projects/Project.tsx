import Image from "next/image";
import React from "react";

type Props = {
  thumbnail: string;
  title: string;
  link: {
    url: string;
    label: string;
  };
  description: string;
  languageIcons: string[];
};

const Project = ({
  thumbnail,
  title,
  link,
  description,
  languageIcons,
}: Props) => {
  return (
    <div
      className="card flex flex-col items-stretch
    w-full max-w-[428.4px] p-5 md:p-[18px]
    gap-[30px]"
    >
      <Image
        src={thumbnail}
        alt={`Thumbnail For ${title}`}
        width={392}
        height={230}
        className="w-full h-[230px] object-cover"
      />

      <div className="flex flex-col gap[11px]">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-xl md:text-[22px]">{title}</h3>
          <a
            href={link.url}
            target="_blank"
            className="flex px-[5px]
            py-[3px] gap-1 bg-[#b9b9b9] bg-opacity-[24%] 
            rounded text-[14px]"
          >
            <span className="hidden md:block">{link.label}</span>
            <Image
              src={"./link_arrow.svg"}
              alt="Link Arrow"
              width={16}
              height={16}
              className="block dark:hidden"
            />
            <Image
              src={"./link_arrow_dark.svg"}
              alt="Link Arrow"
              width={16}
              height={16}
              className="hidden dark:block"
            />
          </a>
        </div>
        <p className="line-clamp-2 text-sm md:text-base">{description}</p>

        <div className="flex flex-row gap-[11px] m-1">
          {languageIcons.map((icon, index) => (
            <Image
              src={icon}
              alt="Language Icon"
              width={20}
              height={20}
              key={index}
            />
          ))}
        </div>
        {/* More Info BTN */}
        <div className="flex gap-2 m-2 whitespace-nowrap">
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              <a href="/" target="_blank">
                Read More ↩
              </a>
            </span>
          </button>
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              <a href="https://www.github.com" target="_blank">
                Github ↗
              </a>
            </span>
          </button>
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              <a href="https://www.blog.com" target="_blank">
                See Blog ↗
              </a>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Project;
