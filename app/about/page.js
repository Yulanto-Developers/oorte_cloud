import AboutMe from "@/components/AboutMe";
import Blog from "@/components/Blog";
import ChooseUs from "@/components/ChooseUs";
import Pagebanner from "@/components/Pagebanner";
import Pricing from "@/components/Pricing";
import BrandSlider from "@/components/slider/BrandSlider";
import TextSlider, { TextSlider2 } from "@/components/slider/TextSlider";
import { TeamMember2 } from "@/components/TeamMember";
import ZotechLayout from "@/layout/ZotechLayout";
import Link from "next/link";
const page = () => {


  return (
    <ZotechLayout>
      <Pagebanner pageName="About Us" />
      <AboutMe />
      <div className="marquee-section section-padding pt-4">
        {/* <div className="marque-wrapper">
          <TextSlider />
        </div> */}
        {/* <div className="marque-wrapper style-2 mt-3 ">
          <TextSlider2 />
        </div> */}
      </div>
      {/* Team Section Start */}
      <TeamMember2 />
      {/* Choose-us Section Start */}
      <ChooseUs wrapperclass="choose-us-wrapper choose-us-3 section-padding section-bg choose-us-page" />
     
    </ZotechLayout>
  );
};
export default page;
