import React from "react";
import homeimg from "../images/home-img1.png";
import Common from "./Common";

const Homepage = () => {
  return (
    <>
      <Common
        name={"Grow your business with"}
        imgsrc={homeimg}
        visit="/services"
        btname="Get Started"
      />
    </>
  );
};

export default Homepage;
