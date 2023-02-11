import React from "react";
import chair from "../../assets/images/chair.png";
const HeroSection = () => {
  return (
    <>
      <div className="container mx-auto flex items-center flex-wrap gap-12 lg:gap-0 mt-10">
        <div className="lg:w-5/12 space-y-8 pl-5 md:pl-0">
          <span className="flex space-x-2">
            <span className="block w-14 mb-2 border-b-2 border-gray-600" />
            <span className="font-medium text-gray-600 dark:text-gray-400">
              New this summer
            </span>
          </span>
          <h1 className="text-4xl font-bold md:text-6xl dark:text-white">
            The New <br /> Way To Discover
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300">
            Booking Company-Wide Savings, Invoicing and reporting docs.
          </p>
          <div className="flex space-x-4">
            <button
              type="button"
              title="Start buying"
              className="w-full py-3 px-6 text-center transition bg-gray-900 dark:bg-gray-700 hover:bg-gray-800 active:bg-gray-700 focus:bg-gray-800 sm:w-max"
            >
              <span className="block text-white font-semibold">Shop now</span>
            </button>
            <button
              type="button"
              title="Start buying"
              className="group w-full py-3 px-6 text-center transition dark:active:bg-yellow-800 dark:focus:bg-yellow-900 active:bg-yellow-200 focus:bg-yellow-100 sm:w-max"
            >
              <span className="block text-gray-700 dark:text-white font-semibold group-focus:text-yellow-700 dark:group-focus:text-yellow-100">
                Our showreel
              </span>
            </button>
          </div>
        </div>
        <div className=" relative md:block lg:w-7/12">
          <img src={chair} className="relative ml-auto" alt="" />
        </div>
      </div>
      {/* <div className="container m-auto px-6 py-40 md:px-12 lg:py-0 lg:px-7">
        
      </div> */}
      {/* <div className="relative w-full">
        <div className="min-h-screen flex">
          
        </div>
      </div> */}
    </>
  );
};

export default HeroSection;
