import React from "react";

const Ourteam = (props) => {
  const { image, personName, description, role } = props;
  console.log(typeof image);
  return (
    <div className="flex flex-col gap-3 items-center justify-center  w-72 rounded-xl text-center">
      <img className="rounded-[50%] h-48 w-48" src={image} alt="" />
      <div>
        <h2 className="font-Jost font-medium text-2xl">{personName}</h2>
        <span className="text-[#0CB4CE]">{role}</span>
      </div>
      <p className="text-sm">{description}</p>
    </div>
  );
};

export default Ourteam;
