import React from "react";
import Homeicon from "./reusable/Homeicon";
import Dropdown from "./reusable/Dropdown";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" flex items-center justify-around text-xs ">
      <div>
        <img className="h-8 w-8" src="logo192.png" alt="" />
      </div>
      <div className="flex gap-3 cursor-pointer">
        <div>Home</div>
        <div>Categories</div>
        <div>Upcoming events</div>
        <div>Ongoing events</div>
        <Link to="/contactus">
          <div>Contact Us</div>
        </Link>

        <div>About Us</div>
        <div>Showcase</div>
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
