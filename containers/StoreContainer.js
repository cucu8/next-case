import Image from "next/image";
import Phone from "@/assets/phone.png";
import Google from "@/assets/google.png";
import AppStore from "@/assets/appStore.png";

const StoreContainer = () => {
  return (
    <div className="bg-storeBg grid grid-cols-3 py-10">
      <div className="col-span-1 flex items-center justify-center">
        <div className="relative w-[200px] h-[450px] flex items-center">
          <Image src={Phone} />
        </div>
      </div>
      <div className="col-span-2 flex-col flex items-center justify-center gap-12">
        <span className="text-[20px] mr-[20%]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos.
        </span>
        <div className="flex flex-row gap-10 items-start w-full">
          <Image src={Google} />
          <Image src={AppStore} />
        </div>
      </div>
    </div>
  );
};

export default StoreContainer;
