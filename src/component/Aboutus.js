import React from "react";
import homeimg from "../images/home-img2.png";
import Common from "./Common";

const Aboutus = () => {
  return (
    <>
      <Common
        name={"Welcome to About page"}
        imgsrc={homeimg}
        visit="/contact"
        btname="Contact Now"
      />
    </>
  );
};

export default Aboutus;
