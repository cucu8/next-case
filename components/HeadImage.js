import Image from "next/image";
import React from "react";
import Istanbul from "../assets/istanbul.png";
import BuyNow from "./BuyNow";
import MemberCardGroup from "./MemberCardGroup";
import HeadText from "./HeadText";

const HeadImage = () => {
  return (
    <div className="flex h-[586px] relative">
      <Image src={Istanbul} fill />
      <HeadText />
      <BuyNow />
      <MemberCardGroup />
    </div>
  );
};

export default HeadImage;
