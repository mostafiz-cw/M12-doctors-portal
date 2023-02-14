import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import AppointmentOptions from "./AppointmentOptions";

const AvailabaleAppointment = ({ selectedDate }) => {
  const [appointmnetOption, setAppointmnetOption] = useState([]);

  useEffect(() => {
    fetch("AppoinetmentOptions.json")
      .then((res) => res.json())
      .then((data) => setAppointmnetOption(data));
  }, []);
  return (
    <>
      <div className="mt-20">
        <p className="text-center text-blue-700 text-xl font-bold">
          Available Services on {format(selectedDate, "PP")}
        </p>
        <ul className="md:container md:mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-10 mx-5">
          {appointmnetOption.map((option) => (
            <AppointmentOptions key={option._id}
            option={option}
            selectedDate={selectedDate}></AppointmentOptions>
          ))}
        </ul>
      </div>
    </>
  );
};

export default AvailabaleAppointment;
