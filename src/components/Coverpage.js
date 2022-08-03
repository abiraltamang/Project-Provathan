import React from "react";
import { Link } from "react-router-dom";

const Coverpage = () => {
  return (
    <div className="relative">
      <div
        className={`relative h-[500px] w-full py-6 object-center`}
        style={{
          backgroundImage: `url('/images/bg2.jpg')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          filter: "brightness(50%)",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="absolute w-full h-full top-0 left-0 text-white flex flex-col items-center gap-2 justify-center">
        <p className="text-xl">participate on</p>
        <p className="text-4xl font-bold">
          NEPAL'S LARGEST PHOTOGRAPHY CONTEST
        </p>
        <p className="text-sm text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure vero
          Lorem, ipsum dolor.
          <br />
          itaque necessitatibus praesentium, laboriosam similique.
        </p>
        <div className="space-x-5 mt-4">
          <Link to="upcomingevents">
            <button className="secondary-button">Participate</button>
          </Link>
          <Link to="ongoingevents">
            <button className="secondary-button">Vote</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Coverpage;
