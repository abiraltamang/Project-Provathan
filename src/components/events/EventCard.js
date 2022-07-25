import React from "react";

const EventCard = ({ image, title }) => {
  return (
    <div className="grid grid-cols-2 place-items-center w-[850px]">
      <div>
        <img src={image} className="w-[340px] h-[440px]" alt="" />
      </div>
      <div className="space-y-3">
        <div className="flex items-start justify-between">
          <p className="text-3xl font-medium">{title}</p>
          <div>
            <span className="bg-secondary rounded-md ">deadline</span>
            <span>2022/20/01</span>
          </div>
        </div>
        <p>
          The competition is open to all international photographers, both
          amateur and professional, and of all ages.
        </p>
        <p>
          Each entrant may submit up to 3 photographs that encourage humanity to
          take care of our environment.
        </p>
        <p>Enry is Free</p>

        <p className="font-bold">Prizes</p>
        <div className="pl-10">
          <ul className="list-disc">
            <li>
              Environmental Photographers of the Year:{" "}
              <span className="font-bold underline underline-offset-4	">
                5,000$
              </span>{" "}
              cash
            </li>
            <li>Lorem ipsum dolor sit.</li>
            <li>Lorem ipsum dolor sit Lorem, ipsum dolor.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
