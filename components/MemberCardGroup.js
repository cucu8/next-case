import React from "react";
import MemberCard from "./MemberCard";

const MemberCardGroup = () => {
  return (
    <div className=" absolute flex flex-row gap-[55px] -bottom-8 justify-center w-full">
      <MemberCard bgColor="silver" title="Silver" />
      <MemberCard bgColor="gold" title="Gold" />
      <MemberCard bgColor="diamond" title="Diamond" />
    </div>
  );
};

export default MemberCardGroup;
