import React from "react";
import { Link, useLocation } from "react-router-dom";
import Dropdown from "./reusable/Dropdown";
import { AiOutlineSearch } from "react-icons/ai";
const Navbar = () => {
  const router = useLocation();
  return (
    <div className="  flex items-center justify-between  h-[70px] px-12 bg-white text-black font-Inter ">
      <div className="flex items-center gap-10">
        <Link to="/">
          <div className="flex items-center">
            <img className="h-8 w-8" src="logo192.png" alt="" />
            <p className="text-2xl">Name here</p>
          </div>
        </Link>
        <div className="flex gap-6 cursor-pointer ">
          <Link to="/">
            <div
              className={`${router.pathname === "/" ? "style-activelink" : ""}`}
            >
              Home
            </div>
          </Link>
          <Link to="/categories">
            <div
              className={`${
                router.pathname === "/categories" ? "style-activelink" : ""
              }`}
            >
              Categories
            </div>
          </Link>
          <Dropdown />
          <Link to="/aboutus">
            <div
              className={`${
                router.pathname === "/aboutus" ? "style-activelink" : ""
              }`}
            >
              About Us
            </div>
          </Link>
          <Link to="/contactus">
            <div
              className={`${
                router.pathname === "/contactus" ? "style-activelink" : ""
              }`}
            >
              Contact Us
            </div>
          </Link>
        </div>
      </div>
      <div className="relative flex items-center gap-3">
        <div className="absolute left-2 ">
          <AiOutlineSearch size={20} />
        </div>
        <input
          id="search-icon-hover"
          className="w-8 h-8 rounded-[50%]  border-[1px] border-dim-dark outline-none text-xs hover:w-40 hover:rounded-2xl hover:duration-300 hover:pl-10 px-4"
          type="text"
          placeholder="Search here"
        />
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
