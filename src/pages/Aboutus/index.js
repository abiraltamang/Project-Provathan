import React from "react";
import About from "../../components/aboutus/About";
import Ourteam from "../../components/aboutus/Ourteam";

const lists = [
  {
    personName: "Abiral Blon",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias nam accusantium incidunt?",
    image: "/images/abiral.jpg",
  },
  {
    personName: "Arbin Koirala",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias nam accusantium incidunt?",
    image: "/images/arbin1.png",
  },
  {
    personName: "Abiral Blon",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias nam accusantium incidunt?",
    image: "/images/arbin.jpg",
  },
  {
    personName: "Abiral Blon",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias nam accusantium incidunt?",
    image: "/images/arbin.jpg",
  },
];

const Aboutus = () => {
  return (
    <>
      <About />
      <div>
        <h2 className="text-3xl font-medium text-center font-Inter">
          Our Team
        </h2>
        <div className="flex flex-wrap gap-12 py-9 items-center justify-around    ">
          <Ourteam
            role={"Leader"}
            personName="Abiral Blon"
            description="email: abiral.blon@gmail.com phone no: 9808633373"
            image="/images/abiral1.png"
          />
          <Ourteam
            personName="Arbin Koirala"
            role={"Developer"}
            description="email: arbin.koirala@gmail.com phone no: 9849645262"
            image="/images/arbin1.png"
          />
          <Ourteam
            personName="Deepti Basnet"
            role={"Developer"}
            description="email: deepti.basnet@gmail.com phone no: 9808333333"
            image="/images/deepti1.png"
          />
          <Ourteam
            personName="Aarya Shree"
            role={"Designer"}
            description="email: aarya.shree@gmail.com phone no: 9805322333"
            image="/images/aaryashree.jpg"
          />
        </div>
      </div>
    </>
  );
};

export default Aboutus;
