import React from "react";
import HeroSection from "./HeroSection";
import Charts from "./Charts";
//import Orders from "./Orders";

const MainContent = () => {
  return (
    <div className="flex flex-col mx-auto">
      <HeroSection />
      <div className="flex flex-col md:flex-row items-center justify-center">
        <Charts />
        {/* <Orders /> */}
      </div>
    </div>
  );
};

export default MainContent;
