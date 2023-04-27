import Image from "next/image";
import React from "react";

const SubNavItem = ({ title, img }) => {
  return (
    <div className="flex flex-row gap-2 justify-center items-center cursor-pointer hover:font-bold">
      <Image src={img} width={45} height={45} />
      <span className="text-[20px]">{title}</span>
    </div>
  );
};

export default SubNavItem;
