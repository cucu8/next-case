import Image from "next/image";
import GreenBack from "../assets/greenBackground.png";
import BlueBack from "../assets/blueBack.png";
import Girl from "../assets/girl.png";
import GoldCard from "../assets/goldCard.png";
import SilverCard from "../assets/silverCard.png";
import DaimondCard from "../assets/daimondCard.png";
import Video from "@/assets/video.png";
const SpecialContainer = ({ type }) => {
  return (
    <div className="flex h-[480px] relative">
      <Image src={type === "green" ? GreenBack : BlueBack} alt="" fill />
      <div className=" px-52 z-50 flex justify-between flex-row w-full bottom-0">
        <div className="flex flex-col w-full mt-24  gap-8">
          <span className="text-white font-bold text-[32px]">
            {type === "green"
              ? "Choose Your Membership & Start Saving"
              : "How Does it Work?"}
          </span>
          <span className="text-[20px] mr-4 text-white leading-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
          </span>
          {type === "green" && (
            <div className="flex flex-row gap-4">
              <Image src={GoldCard} width={175} height={106} />
              <Image src={SilverCard} width={175} height={106} />
              <Image src={DaimondCard} width={175} height={106} />
            </div>
          )}
        </div>
        {type === "green" ? (
          <Image src={Girl} height={350} width={500} />
        ) : (
          <div className="relative w-[608px] h-[343px] my-auto">
            <Image src={Video} fill />
          </div>
        )}
      </div>
    </div>
  );
};

export default SpecialContainer;
