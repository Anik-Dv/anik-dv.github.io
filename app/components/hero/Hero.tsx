import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      className="relative flex flex-row 
    items-center z-20 mx-auto md:gap-[37px] md:mx-10"
    >
      <div
        className="flex flex-col gap-[13px] 
        items-center md:gap-[34px] md:my-[58px] md:items-start"
      >
        <h1
          className="text-2x1/1 text-center
             font-semibold block md:text-[40px] md:text-start md:inline"
        >
          <span className="-ml-3">👋 </span>
          Hello! I'm Anik Karmakar, I'm a {" "}
          <span
            className="block text-[27px] highlight mt-2
            md:text-[40px] md:inline md:mt-0"
          >
            Software Engineer
          </span>
        </h1>
        <p
          className="text-center text-sm mx-6 md:text-[22px]
            md:text-start md:mx-0"
        >
          I'm a software engineer with a passion for building scalable and
          efficient software solutions. I'm always looking for new challenges
          and opportunities to learn and grow.
        </p>
        <a
          href="mailto:royanik815@gmail.com"
          className="self-center
                bg-primary text-white p-2.5 rounded flex gap-2.5
                items-center text-sm md:self-start md:text-xl/6"
        >
          Let's Connect <Image src="./arrow_right_icon.svg" alt="arrow icon for contact anikdv" width={21} height={21} />
        </a>
      </div>

      <div>
        <Image
          src="./profile_light_purple.png"
          alt="Light Purple Rectangle"
          width={372}
          height={430}
          className="hidden md:block w-[372px] h-[430px] 
            absolute right-0 -z-10"
        />
        <Image
          src="./profile_dark_purple.png"
          alt="Dark Purple Rectangle"
          width={372}
          height={430}
          className="hidden md:block w-[372px] h-[430px] 
            absolute right-0 -z-10"
        />
        <Image
          src="./anikdv_profile_picture.png"
          alt="Profile Picture of Anik-Karmakar"
          width={357}
          height={417}
          className="hidden md:block min-w-[357px] h-[417px] 
                z-10 mr-[7.7px] my-[6.5px] rounded-[15px]"
        />
      </div>
    </section>
  );
};

export default Hero;
