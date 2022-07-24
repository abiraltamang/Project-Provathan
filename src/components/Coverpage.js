import React from "react";
import Navbar from "./Navbar";

const Coverpage = () => {
  return (
    <div
      className={` h-screen w-screen py-6`}
      style={{
        backgroundImage: `url('/images/4.jpg')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Navbar />
    </div>
  );
};

export default Coverpage;
