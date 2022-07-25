import React from "react";
import { Pagination } from "@mui/material";
import MyDropdown from "./reusable/Dropdown";

import EventCard from "./events/EventCard";
const UpcomingEvents = () => {
  const options = ["Upcoming events", "Ongoing events"];
  return (
    <div>
      <div className="space-y-6">
        <h2 className="pl-11 py-5 text-dark text-3xl font-medium underline decoration-dim-dark underline-offset-8">
          Upcoming Events
        </h2>
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
        <EventCard
          image={"/images/faces.jpg"}
          title={"Face from around the corners of Nepal"}
        />
      </div>
      <div className="flex items-center justify-center py-10">
        <Pagination count={10} />
      </div>
    </div>
  );
};

export default UpcomingEvents;
