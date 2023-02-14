import React from "react";

const Button = ({ children }) => {
  return (
    <>
      <button className="w-32 h-12 bg-purple-700 text-white font-bold rounded">
        {children}
      </button>
    </>
  );
};

export default Button;
