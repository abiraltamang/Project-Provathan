import React from "react";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between  h-[60px] px-12 bg-white text-black font-Inter ">
      <div className="flex items-center gap-10">
        <Link to="/">
          <div className="flex items-center">
            <img className="h-8 w-8" src="logo192.png" alt="" />
            <p className="text-2xl">Name here</p>
          </div>
        </Link>
        <div className="flex gap-6 cursor-pointer ">
          <Link to="/">
            <div>Home</div>
          </Link>
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
          <button className="px-3 text-sm w-36 h-8 rounded-xl bg-secondary text-white ">
            Login/Register
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
