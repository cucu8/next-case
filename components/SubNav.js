import React from "react";
import Dining from "../assets/dining.png";
import Camera from "../assets/camera.png";
import Health from "../assets/health.png";
import Bag from "../assets/bag.png";
import SubNavItem from "./SubNavItem";
const subNavItems = [
  { title: "Dining", img: Dining },
  { title: "Attractions", img: Camera },
  { title: "Shopping", img: Bag },
  { title: "Health", img: Health },
];

const SubNav = () => {
  return (
    <div className="shadow-xl grid grid-cols-4 divide-x-4 p-3 w-3/5 m-auto mt-14 border-2 rounded-[16px]">
      {subNavItems.map((item, i) => (
        <React.Fragment key={i}>
          <SubNavItem title={item.title} img={item.img} />
        </React.Fragment>
      ))}
    </div>
  );
};

export default SubNav;
