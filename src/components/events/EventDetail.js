import React from "react";
import EventCard from "../../components/events/EventCard";

const EventDetail = () => {
  return (
    <div>
      <div className="m-10">
        {" "}
        <EventCard
          image={"/images/theme1.jpg"}
          title={"Environmental Photographer of the Year"}
          description={
            " The competition is open to all international photographers, both amateur and professional, and of all ages."
          }
        />
      </div>
    </div>
  );
};

export default EventDetail;
