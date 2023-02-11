import React from "react";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";

const people = [
  {
    id: 1,
    name: "Opening Hours",
    title: "Regional Paradigm Technician Regional Paradigm Technician",
    bgclr: "bg-purple-700",
    imageUrl: clock,
  },
  {
    id: 2,
    name: "Visit Our Location",
    title: "6102 East Kazipara, Dhaka, Mirpur 1216",
    bgclr: "bg-purple-900",
    imageUrl: marker,
  },
  {
    id: 3,
    name: "Contact Us Now",
    title: "+0080177255354336",
    bgclr: "bg-purple-700",
    imageUrl: phone,
  },
];

export const InfoCard = () => {
  return (
    <ul className="md:container md:mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-10 mx-5">
      {people.map((person) => (
        <li
          key={person.id}
          className={`col-span-1 divide-y divide-gray-200 rounded-lg ${person.bgclr} shadow`}
        >
          <div className="flex w-full items-center space-x-6 p-6">
            <div>
              <img src={person.imageUrl} alt="" />
            </div>
            <div className="text-white">
              <p className="font-bold">{person.name}</p>
              <p>{person.title}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};
