import { BsBagPlus } from "react-icons/bs";

const BuyNow = () => {
  return (
    <div className="rounded flex items-center absolute h-[50px] w-[192px] bg-icons-green right-0 bottom-[50%] justify-evenly">
      <BsBagPlus size={25} color="#fff" />
      <b className="text-white font-bold text-[24px]">Buy Now!</b>
    </div>
  );
};

export default BuyNow;
