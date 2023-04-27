import Image from "next/image";
import Option from "../assets/option.png";

const SubPageContainers = ({ type, list }) => {
  return (
    <div className="w-full flex flex-col gap-5 mt-7 px-40">
      <div className="flex flex-row items-center  justify-between">
        <span className="font-[400] text-[32px] ">
          {type === "dining" ? "Dining" : "Tourist Attractions"}
        </span>
        <Image src={Option} width={38} height={32} alt="" />
      </div>
      <div className="grid grid-cols-2 gap-y-10">
        {list &&
          list.map((item, i) => (
            <div
              key={i}
              className={`flex ${
                i % 2 === 0 ? "items-start" : "items-end"
              }   flex-col`}
            >
              <div className="flex items-center flex-col cursor-pointer">
                <Image src={item.img} alt="" width={600} />
                <b>{item.title}</b>
              </div>
            </div>
          ))}
      </div>
      <div className="flex justify-end items-end w-full py-8">
        <p className="text-[24px]">See All</p>
      </div>
    </div>
  );
};

export default SubPageContainers;
