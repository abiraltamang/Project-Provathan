import React from "react";
import Navbar from "../Navbar";
import { useLocation } from "react-router-dom";
import Subcoverpage from "../reusable/Subcoverpage";

const Layout = ({ Children }) => {
  const router = useLocation();
  let headername = router.pathname;

  let headName = null;
  let detail = null;
  let image = null;
  let route = null;

  switch (headername) {
    case "/categories":
      route = headername;
      headName = "Categories";
      detail =
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam dicta provident odit. ";
      image = "/images/4.jpg";
      break;
    case "/upcomingevents":
      route = headername;
      headName = "Upcoming Events";
      detail = "This is upcoming event descriptions";
      image = "/images/bg1.jpg";
      break;
    case "/ongoingevents":
      route = headername;
      headName = "Ongoing Events";
      detail = "This is Onginging event descriptions";
      image = "/images/5.jpg";
      break;
    case "/aboutus":
      route = headername;
      headName = "Aboutus";
      detail = "Lorem ipsum dolor sit amet consectetur.";
      image = "/images/1.jpg";
      break;

    default:
      break;
  }
  console.log(route);

  return (
    <>
      <Navbar />
      {router.pathname === route ? (
        <Subcoverpage image={image} headName={headName} detail={detail} />
      ) : null}

      <main>{Children}</main>
    </>
  );
};

export default Layout;
