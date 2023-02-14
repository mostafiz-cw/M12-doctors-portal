import { format } from "date-fns";
import React from "react";

const ModalForm = ({ selectedDate, options }) => {
  return (
    <>
      <div className="mt-2 flex flex-col gap-5">
        <input
          className="bg-gray-200 border-0 rounded-md"
          type="text"
          value={format(selectedDate, "PP")}
          name=""
          id=""
          disabled
        />
        <input
          className="border-gray-100 border-2 rounded-md "
          type="text"
          value={format(selectedDate, "PP")}
          name=""
          id=""
        />
        <select name="" id="" className="border-gray-100 border-2 rounded-md">
          <option value="" disabled selected className="">
            Available Slots
          </option>
          {options.map((slot) => (
            <option value={slot} className="">
              {slot}
            </option>
          ))}
        </select>
        <input
          required
          className="border-gray-100 border-2 rounded-md "
          type="text"
          placeholder="Your Name"
          name="name"
          id="name"
        />
        <input
          required
          className="border-gray-100 border-2 rounded-md "
          type="text"
          placeholder="Email Address"
          name="email"
          id="email"
        />
        <input
          required
          className="border-gray-100 border-2 rounded-md "
          type="text"
          placeholder="Phone Number"
          name="phone"
          id="phone"
        />
      </div>
    </>
  );
};

export default ModalForm;
