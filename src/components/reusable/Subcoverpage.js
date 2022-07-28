import React from "react";

const Subcoverpage = (props) => {
  const { headName, detail, image } = props;
  return (
    <div className="relative h-[300px] z-0">
      <div
        className={`absolute w-full h-full top-0 left-0 bg-cover bg-bottom brightness-50`}
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="absolute w-full h-full top-0 left-0 z-20 text-white flex flex-col gap-4 items-center justify-center">
        <h2 className="text-5xl font-Inter ">{headName}</h2>
        <p>{detail}</p>
      </div>
    </div>
  );
};

export default Subcoverpage;
