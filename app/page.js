import HeadImage from "@/components/HeadImage";
import SubNav from "@/components/SubNav";
import SubPageContainers from "@/containers/SubPageContainers";
import SpecialContainer from "@/containers/SpecialContainer";
import { attractionList, diningList } from "@/constants";

export default function Home() {
  return (
    <main>
      <HeadImage />
      <SubNav />
      <SubPageContainers type="dining" list={diningList} />
      <SpecialContainer type="green" />
      <SubPageContainers type="attraction" list={attractionList} />
      <SpecialContainer type="blue" />
    </main>
  );
}
