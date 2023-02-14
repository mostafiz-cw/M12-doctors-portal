import React, { useState } from "react";
import AppointmnetBanner from "./AppointmnetBanner";
import AvailabaleAppointment from "./AvailabaleAppointment";

const Appoinment = () => {
  const [selectedDate, setselectedDate] = useState(new Date());
  return (
    <>
      <AppointmnetBanner
        selectedDate={selectedDate}
        setselectedDate={setselectedDate}
      ></AppointmnetBanner>
      <AvailabaleAppointment
        selectedDate={selectedDate}
      ></AvailabaleAppointment>
    </>
  );
};

export default Appoinment;
