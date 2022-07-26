import React from "react";
import Coverpage from "./Coverpage";
import UpcomingEvents from "./UpcomingEvents";
import WinnerImagelist from "./user/WinnerImagelist";

const Homepage = () => {
  return (
    <div>
      <Coverpage />
      {/* <Carousel /> */}
      <UpcomingEvents />
      <WinnerImagelist />
    </div>
  );
};

export default Homepage;
