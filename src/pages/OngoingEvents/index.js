import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

import OngoinEventCard from "../../components/reusable/OngoinEventCard";

const OngoingEvents = () => {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div className="px-20 py-10">
      <h2 className="text-2xl font-Jost font-semibold text-dark mb-10">
        Vote your favourite photographs
      </h2>
      <div className="grid grid-cols-4 gap-10 ">
        <OngoinEventCard author="Abiral Blon" image="/images/winner1.jpg" />
        <OngoinEventCard author="Abiral Blon" image="/images/winner3.jpg" />
        <OngoinEventCard author="Abiral Blon" image="/images/winner2.jpg" />
        <OngoinEventCard author="Abiral Blon" image="/images/winner4.jpg" />
        <OngoinEventCard author="Abiral Blon" image="/images/winner5.jpg" />
        <OngoinEventCard author="Abiral Blon" image="/images/winner6.jpg" />
        <OngoinEventCard author="Abiral Blon" image="/images/winner7.jpg" />
        <OngoinEventCard author="Abiral Blon" image="/images/winner1.jpg" />
        <OngoinEventCard author="Abiral Blon" image="/images/winner2.jpg" />
        <OngoinEventCard author="Abiral Blon" image="/images/winner3.jpg" />
        <OngoinEventCard author="Abiral Blon" image="/images/winner4.jpg" />
        <OngoinEventCard author="Abiral Blon" image="/images/winner5.jpg" />
        <OngoinEventCard author="Abiral Blon" image="/images/winner6.jpg" />
        <OngoinEventCard author="Abiral Blon" image="/images/winner7.jpg" />
        <OngoinEventCard author="Abiral Blon" image="/images/winner1.jpg" />
      </div>
    </div>
  );
};

export default OngoingEvents;
