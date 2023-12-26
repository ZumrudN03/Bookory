import React from "react";
import HeaderSlider from "../../Components/HomeComponents/HeaderSlider";
// import BestSellerSection from "../../Components/HomeComponents/BestSellerComponents/BestSellerSection";
import BestOfSection from "../../Components/HomeComponents/BestOfSection";
import JoinCommunitySection from "../../Components/HomeComponents/JoinCommunitySection";

function HomePage() {
  return (
    <div>
        <HeaderSlider />
        {/* <BestSellerSection/> */}
        <JoinCommunitySection/>
        <BestOfSection/>
    </div>
  );
}

export default HomePage;
