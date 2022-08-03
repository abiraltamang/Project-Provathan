import { Link } from "react-router-dom";
import SocialmediaIcons from "./icons/SocialmediaIcons";

const Footer = () => {
  return (
    <div className="bg-[#282a35] text-white pt-8 relative h-60 bottom-0 w-full mt-11 ">
      <div className="grid grid-cols-5 gap-10 px-12">
        <div className="flex flex-col col-span-2">
          <Link to="/">
            <div className="flex items-center ">
              <img className="h-20 w-20" src="logo192.png" alt="" />
              <p className="text-lg text-center">Name</p>
            </div>
          </Link>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            alias temporibus deserunt enim culpa magni.
          </p>
        </div>
        <div>
          <div className="text-lg font-bold pb-2">Start Here</div>
          <div>Categories</div>
          <div>Upcoming events</div>
          <div>Ongoing events</div>
        </div>
        <div>
          <div className="text-lg font-bold pb-2">Company</div>
          <Link to="/contactus">
            <div>Contact Us</div>
          </Link>
          <Link to="/aboutus">
            <div>About Us</div>
          </Link>
        </div>
        <div className="text-lg font-bold pb-2 flex flex-wrap w-[200px]">
          Social Media Links
          <SocialmediaIcons src={"/images/facebook.png"} link_to={"#"} />
          <SocialmediaIcons src={"/images/twitter.png"} link_to={"#"} />
          <SocialmediaIcons src={"/images/linkedin.png"} link_to={"#"} />
          <SocialmediaIcons src={"/images/youtube.png"} link_to={"#"} />
          <SocialmediaIcons src={"/images/instagram.png"} link_to={"#"} />
          <SocialmediaIcons src={"/images/twitter.png"} link_to={"#"} />
        </div>
      </div>
      <div className="text-center text-[#000] bg-white">
        NameHere.com © 2022 All rights reserved
      </div>
    </div>
  );
};

export default Footer;
