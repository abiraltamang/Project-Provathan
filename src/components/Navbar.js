import React from "react";
import Homeicon from "./reusable/Homeicon";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between text-xl  px-16">
      <div className="flex items-center gap-10">
        <div className="flex items-center">
          <img className="h-8 w-8" src="logo192.png" alt="" />
          <p className="text-2xl">Name here</p>
        </div>
        <div className="flex gap-6 cursor-pointer">
          <div>Home</div>
          <div>Categories</div>
          <div>Upcoming events</div>
          <div>Ongoing events</div>
          <div>Contact Us</div>
          <div>About Us</div>
        </div>
      </div>
      <div>
        <Link to="/login">
          <button className="px-3 border-[1px] border-red-500 h-10 rounded-xl ">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
