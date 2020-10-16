import React from "react";

const Curve: React.FC<{ color: string }> = ({ color = "green" }) => {
  return (
    <path
      d="M3595.914 2209.759C1836.26-2041.755 265.539 2889.393-755.983 2415.202v57.837c1003.812 363.543 2674.896-4486.446 4351.898-203.375l-.001-59.905z"
      fill={color}
      fillRule="nonzero"
    />
  );
};

export default Curve;
