import React from "react";
import "./style.css";
import Ourteam from "./Ourteam";
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
    image: "/images/arbin.jpg",
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
console.log(lists);
const Aboutus = () => {
  return (
    <>
      <h2 className="text-3xl font-medium text-center font-Inter">Our Team</h2>
      <div className="flex flex-wrap gap-12 py-9 items-center justify-around    ">
        <Ourteam
          role={"Developer"}
          personName="Abiral Blon"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias nam accusantium incidunt?"
          image="/images/abiral.jpg"
        />
        <Ourteam
          personName="Arbin Koirala"
          role={"Developer"}
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias nam accusantium incidunt?"
          image="/images/abiral.jpg"
        />
        <Ourteam
          personName="Deepti Basnet"
          role={"Developer"}
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias nam accusantium incidunt?"
          image="/images/abiral.jpg"
        />
        <Ourteam
          personName="Aaryashree"
          role={"Developer"}
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias nam accusantium incidunt?"
          image="/images/abiral.jpg"
        />
      </div>
    </>
  );
};

export default Aboutus;
