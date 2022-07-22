import React from "react";

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
        <div>Contact Us</div>
        <div>About Us</div>
      </div>
      <div>
        <button className="px-3 border-[1px] border-red-500 h-5 rounded-xl">
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
