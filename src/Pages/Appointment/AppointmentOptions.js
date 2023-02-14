import React, { useState } from "react";
import ModalPopUP from "../../Components/ModalPopUP";

const AppointmentOptions = ({ option, selectedDate }) => {
  const { name, slots } = option;
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <li className="col-span-1 rounded-lg shadow p-5 border gap-2 flex flex-col">
        <h1 className="text-center font-semibold text-2xl text-blue-700">
          {name}
        </h1>
        <p className="text-center">
          {slots.length > 0 ? slots[0] : "Try Another Day"}
        </p>
        <p className="text-center text-sm">
          {slots.length} {slots.length > 1 ? "spaces" : "space"} available
        </p>
        <button
          disabled={slots.length === 0}
          onClick={() => setShowModal(true)}
          className={`${
            slots.length === 0
              ? "bg-slate-300 text-slate-400 w-full text-center py-3 rounded-md font-semibold mt-10 cursor-not-allowed"
              : "bg-blue-800 text-white w-full text-center py-3 rounded-md font-semibold mt-10"
          } `}
        >
          BOOK APPOINTMENT
        </button>
        {showModal && (
          <ModalPopUP
            setShowModal={setShowModal}
            option={option}
            selectedDate={selectedDate}
          ></ModalPopUP>
        )}
      </li>
    </>
  );
};

export default AppointmentOptions;
