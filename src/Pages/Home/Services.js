import React from "react";
import fluoride from "../../assets/images/fluoride.png";
import cavity from "../../assets/images/cavity.png";
import whitening from "../../assets/images/whitening.png";

const people = [
  {
    id: 1,
    name: "Opening Hours",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit aliquid rerum accusamus.",
    bgclr: "bg-gray-200",
    imageUrl: fluoride,
  },
  {
    id: 2,
    name: "Visit Our Location",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit aliquid rerum accusamus.",
    bgclr: "bg-cyan-100",
    imageUrl: cavity,
  },
  {
    id: 3,
    name: "Contact Us Now",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit aliquid rerum accusamus.",
    bgclr: "bg-gray-200",
    imageUrl: whitening,
  },
];

export const Services = () => {
  return (
    <>
      <div className="mt-10 text-center">
        <p className="font-bold text-xl text-cyan-700">OUR SERVICE</p>
        <p className="text-3xl font-semibold">Service We Provide</p>
      </div>
      <ul className="md:container md:mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-10 mx-5">
        {people.map((person) => (
          <li
            key={person.id}
            className={`col-span-1 divide-y divide-gray-200 rounded-lg ${person.bgclr} shadow`}
          >
            <div className="flex flex-col w-full items-center justify-center space-x-6 p-6 gap-4">
              <div>
                <img src={person.imageUrl} alt="" />
              </div>
              <div className="text-center">
                <p className="font-bold pb-3 text-xl">{person.name}</p>
                <p>{person.title}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
