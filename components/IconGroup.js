"use client";
import React, { useState } from "react";
import { AiFillHome, AiFillHeart, AiOutlineSearch } from "react-icons/ai";
import { BsWallet, BsFillPersonFill } from "react-icons/bs";

const icons = [
  <AiFillHome size={20} color="#fff" />,
  <BsWallet size={20} color="#fff" />,
  <AiFillHeart size={20} color="#fff" />,
  <AiOutlineSearch size={20} color="#fff" />,
];

const IconGroup = () => {
  const [active, setActive] = useState(0);
  return (
    <div className="bg-icons-green rounded-xl flex flex-row w-[200px] h-[40px] items-center gap-5 justify-start pl-5 relative">
      {icons.map((icon, i) => {
        return (
          <div className="grid grid-cols-1 divide-y-2 gap-1 rounded cursor-pointer relative">
            <span
              onClick={() => {
                setActive(i);
              }}
            >
              {icon}
            </span>
            {active === i && <span className="absolute -bottom-1  w-5"></span>}
          </div>
        );
      })}
      <div className=" h-[50px] w-[50px] flex items-center justify-center rounded-full absolute -right-6 bg-icons-green ">
        <BsFillPersonFill
          color="#fff"
          className="border rounded-full p-1"
          size={45}
        />
      </div>
    </div>
  );
};

export default IconGroup;
