import React from "react";

const MemberCard = ({ title, bgColor }) => {
  return (
    <div
      className={`w-[245px] h-[124px] bg-${bgColor} rounded-3xl pl-[30px] pt-[16px] hover:scale-125 cursor-pointer`}
    >
      <span className="font-[500] text-white text-[24px]">
        {title}
        <br />
        Membership
      </span>
    </div>
  );
};

export default MemberCard;
