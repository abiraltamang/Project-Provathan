import React from "react";
import { Link } from "react-router-dom";
const SocialmediaIcons = (props) => {
  const { src, link_to } = props;
  return (
    <Link to={link_to}>
      <div className="my-3 mr-3 cursor-pointer">
        <img width={45} height={45} src={src} alt="social media " />
      </div>
    </Link>
  );
};

export default SocialmediaIcons;
