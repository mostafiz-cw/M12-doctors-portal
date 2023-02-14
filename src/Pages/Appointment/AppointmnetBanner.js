import React from "react";
import { DayPicker } from "react-day-picker";
import chair from "../../assets/images/chair.png";

const AppointmnetBanner = ({ selectedDate, setselectedDate }) => {
  return (
    <>
      <div className="container mx-auto flex items-center flex-wrap gap-12 lg:gap-0 mt-10">
        <div className=" relative md:block lg:w-7/12">
          <img src={chair} className="relative ml-auto" alt="" />
        </div>
        <div className="mx-auto space-y-8 pl-5 md:pl-0">
          <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={setselectedDate}
          ></DayPicker>
        </div>
      </div>
    </>
  );
};

export default AppointmnetBanner;
