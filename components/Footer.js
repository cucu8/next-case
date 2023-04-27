import React from "react";
import SocialButtons from "./SocialButtons";

const Footer = () => {
  return (
    <div className="h-[130px] pt-[20px]  pb-12 bg-white">
      <div className="ml-[8%] ">
        <div className="flex flex-row gap-10 mt-5">
          <span className="text-[14px]">About Us</span>
          <span className="text-[14px]">Terms of Use</span>
          <span className="text-[14px]">Privacy Policy</span>
          <span className="text-[14px]">Contact</span>
        </div>
        <div className="flex flex-row justify-end pr-[8%] ">
          <SocialButtons />
        </div>
        <div>
          Copyright 2022. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
        </div>
      </div>
    </div>
  );
};

export default Footer;
