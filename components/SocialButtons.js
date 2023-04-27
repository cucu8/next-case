import React from "react";
import Youtube from "@/assets/youtube.png";
import Instagram from "@/assets/instagram.png";
import Twitter from "@/assets/twitter.png";
import Facebook from "@/assets/facebook.png";
import Image from "next/image";

const SocialButtons = () => {
  return (
    <div className="flex flex-row gap-5">
      <Image src={Youtube} />
      <Image src={Instagram} />
      <Image src={Twitter} />
      <Image src={Facebook} />
    </div>
  );
};

export default SocialButtons;
