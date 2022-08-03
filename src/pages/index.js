import React from "react";
import Coverpage from "../components/Coverpage";
import Events from "../components/Events";
import WinnerImagelist from "../components/WinnerImagelist";

const Homepage = () => {
  return (
    <div>
      <Coverpage />
      {/* <Carousel /> */}
      <Events />
      <WinnerImagelist />
    </div>
  );
};

export default Homepage;
