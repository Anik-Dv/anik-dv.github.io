import React from "react";
import Image from "next/image";

type Props = {
  plainText: string;
  highlightText: string;
};

const SectionHeader = ({ plainText, highlightText }: Props) => {
  return (
    <h2 className="text-[22px] md:text-[35px] px-20 text-center">
      <Image
        src="./skill_1.gif"
        alt="skill icon"
        width={48}
        height={38}
        className="inline-block border rounded-lg h-[46px]"
      />{" "}
      {plainText}&nbsp;
      <span className="highlight px-2 whitespace-nowrap">{highlightText}</span>
    </h2>
  );
};

export default SectionHeader;
