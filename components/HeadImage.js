import Image from "next/image";
import React from "react";
import Istanbul from "../assets/istanbul.png";
const HeadImage = () => {
  return (
    <div className="flex w-full h-[586px] relative">
      <Image src={Istanbul} fill />
      <div className="absolute bg-red-300 t">title</div>
    </div>
  );
};

export default HeadImage;
