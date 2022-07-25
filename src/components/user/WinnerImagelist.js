import React from "react";
import ImageList from "../events/ImageList";

const WinnerImagelist = () => {
  const itemData = [
    {
      img: "/images/winner5.jpg",
      title: "Winnder of Gandaki Landscape",
      author: "@hjrc33",
      cols: 2,
    },
    {
      img: "/images/winner6.jpg",
      title: "Wiiner of Kathmandu",
      author: "@arwinneil",
      rows: 2,
      cols: 2,
      featured: true,
    },
    {
      img: "/images/winner1.jpg",
      title: "Winner of LIVEstock at Manang",
      author: "@tjdragotta",
    },
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
      title: "Winner of Lumbini provinc",
      author: "@rollelflex_graphy726",
    },
    {
      img: "/images/winner3.jpg",
      title: "Winner of Struggle of nakabandi",
      author: "@helloimnik",
    },
    {
      img: "/images/winner4.jpg",
      title: "Winner of Gorkhar lifestyle",
      author: "@nolanissac",
      cols: 2,
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
