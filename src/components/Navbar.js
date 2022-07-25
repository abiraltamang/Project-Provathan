import React from "react";
import Homeicon from "./reusable/Homeicon";
import Dropdown from "./reusable/Dropdown";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between  h-[80px] px-12 bg-[#141414] text-white font-Inter ">
      <div className="flex items-center gap-10">
        <div className="flex items-center">
          <img className="h-8 w-8" src="logo192.png" alt="" />
          <p className="text-2xl">Name here</p>
        </div>
        <div className="flex gap-6 cursor-pointer ">
          <div>Home</div>
          <div>Categories</div>
          <div>Upcoming events</div>
          <div>Ongoing events</div>
          <Link to="/contactus">
            <div>Contact Us</div>
          </Link>
          <div>About Us</div>
        </div>
      </div>
      <div>
        <Link to="/login">
          <button className="px-3 text-sm w-36 h-8 rounded-xl bg-secondary ">
            Login/Register
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
