import React from "react";
import ImageList from "../events/ImageList";

const WinnerImagelist = () => {
  const itemData = [
    {
      img: "/images/winner1.jpg",
      title: "Wiiner of Lifestyle at Mustang",
      author: "@bkristastucchio",
      rows: 2,
      cols: 2,
      featured: true,
    },
    {
      img: "/images/winner2.jpg",
      title: "Burger",
      author: "@rollelflex_graphy726",
    },
    {
      img: "/images/winner3.jpg",
      title: "Camera",
      author: "@helloimnik",
    },
    {
      img: "/images/winner4.jpg",
      title: "Coffee",
      author: "@nolanissac",
      cols: 2,
    },
    {
      img: "/images/winner5.jpg",
      title: "Hats",
      author: "@hjrc33",
      cols: 2,
    },
    {
      img: "/images/winner6.jpg",
      title: "Honey",
      author: "@arwinneil",
      rows: 2,
      cols: 2,
      featured: true,
    },
    {
      img: "/images/winner1.jpg",
      title: "Basketball",
      author: "@tjdragotta",
    },
  ];

  return (
    <>
      <h2 className="pl-11 py-5 text-dark text-3xl font-medium ">
        Winning images of previous competitions
      </h2>
      <div className="flex items-center justify-center">
        <ImageList itemData={itemData} />
      </div>
    </>
  );
};

export default WinnerImagelist;
