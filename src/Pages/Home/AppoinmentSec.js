import React from "react";
import appointment from "../../assets/images/appointment.png";
import doctor from "../../assets/images/doctor.png";
import Button from "../../Components/Button";

const AppoinmentSec = () => {
  return (
    <section
      className="md:mt-36 mt-24 container mx-auto"
      style={{
        background: `url(${appointment})`,
      }}
    >
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="w-11/12 md:w-1/2 lg:pl-32">
          <img
            src={doctor}
            className="sm:w-96 hidden md:block lg:-mt-32"
            alt="doctor"
          />
        </div>
        <div className="w-11/12 md:w-1/2 flex flex-col gap-3 text-white py-4 md:py-0">
          <h1 className="font-semibold text-4xl">Make an appointment Today</h1>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <Button>APPOINMENT</Button>
        </div>
      </div>
    </section>
  );
};

export default AppoinmentSec;
