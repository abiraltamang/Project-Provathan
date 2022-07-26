import React from "react";
import { Pagination } from "@mui/material";

import EventCard from "./events/EventCard";
const UpcomingEvents = () => {
  return (
    <div>
      <div className="space-y-6">
        <h2 className="pl-11 py-5 text-dark text-3xl font-medium underline decoration-dim-dark underline-offset-8">
          Upcoming Events
        </h2>
        <EventCard
          image={"/images/theme1.jpg"}
          title={"Environmental Photographer of the Year"}
          description={
            " The competition is open to all international photographers, both amateur and professional, and of all ages."
          }
        />
        <EventCard
          image={"/images/theme2.jpg"}
          title={"The Allard Prize Photography Competition"}
          description={
            " The competition is open to all international photographers, both amateur and professional, and of all ages."
          }
        />
        <EventCard
          image={"/images/theme3.jpg"}
          title={"SPIE International Day of Light Photo  Contest 2022"}
          description={
            " The competition is open to all international photographers, both amateur and professional, and of all ages."
          }
        />
        <EventCard
          image={"/images/faces.jpg"}
          title={"Face from around the corners of Nepal"}
          description={
            " The competition is open to all international photographers, both amateur and professional, and of all ages."
          }
        />
      </div>
      <div className="flex items-center justify-center py-10">
        <Pagination count={10} />
      </div>
    </div>
  );
};

export default UpcomingEvents;
