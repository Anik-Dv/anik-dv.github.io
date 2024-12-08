import Image from "next/image";
import React from "react";

type Props = {
  name: string;
  icon: string;
};

const Skill = ({ name, icon }: Props) => {
  return (
    <div
      className="relative flex gap-2 p-2 
        border-primary border rounded-lg h-[46px]"
    >
      <Image src={icon} width={24} height={24} alt={`${name} icon`} />
      <p className="text-lg">{name}</p>
    </div>
  );
};

export default Skill;
