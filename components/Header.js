import Image from "next/image";
import React from "react";
import Logo from "../assets/Group.png";
import HeaderRight from "./HeaderRight";

const Header = () => {
  return (
    <div className="px-[100px] py-[8px]  flex justify-between relative">
      <Image src={Logo} width={150} height={50} alt="" />
      <HeaderRight />
    </div>
  );
};

export default Header;
