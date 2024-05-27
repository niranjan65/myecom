import Advertisement from "@/components/Advertisement";
import Banner from "@/components/Banner";
import BigSavingZone from "@/components/BigSavingZone";
import Deals from "@/components/Deals";
import Feedback from "@/components/Feedback";
import Limelight from "@/components/Limelight";
import MensCategory from "@/components/MensCategory";
import NewArrival from "@/components/NewArrival";
import TopBrands from "@/components/TopBrands";
import WomensCategory from "@/components/WomensCategory";


export default function Home() {
  return (
    <div className=" w-full flex flex-col gap-24  ">
      <Banner />
      <Deals />
      <NewArrival />
      <BigSavingZone />
      <Advertisement />
      <MensCategory />
      <WomensCategory />
      <TopBrands />
      <Limelight />
      <Feedback />
    </div>
  );
}
