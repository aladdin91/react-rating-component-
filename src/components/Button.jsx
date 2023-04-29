import React from "react";

const Button = ({ number, setItems }) => {
  return (
    <button
      onClick={() => setItems(number)}
      className="btn-number bg-gray-700 h-10 w-10 rounded-full pt-1 text-gray-200 transition-all duration-150"
    >
      {number}
    </button>
  );
};

export default Button;
