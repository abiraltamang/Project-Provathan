import React from "react";

import EventCard from "./events/EventCard";
const UpcomingEvents = () => {
  return (
    <div className="space-y-6">
      <EventCard
        image={"/images/theme1.jpg"}
        title={"Environmental Photographer of the Year"}
      />
      <EventCard
        image={"/images/theme2.jpg"}
        title={"The Allard Prize Photography Competition"}
      />
      <EventCard
        image={"/images/theme3.jpg"}
        title={"SPIE International Day of Light Photo  Contest 2022"}
      />
      <EventCard />
    </div>
  );
};

export default UpcomingEvents;
