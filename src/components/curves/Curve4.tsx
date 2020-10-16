import React from "react";

const Curve: React.FC<{ color: string }> = ({ color = "green" }) => {
  return (
    <path
      d="M3442.757 687.111c-689.015 1384.97-1583.025 832.545-2418.435 280.138C352.27 522.849-281.875 78.46-740.863 642.696v448.948c465.07-831.62 1260.412-324.527 2127.53 182.537 741.552 433.655 1535.656 867.217 2220.475 463.58V341.564c-49.56 126.623-112.65 241.548-164.385 345.547z"
      fill={color}
      fillRule="nonzero"
    />
  );
};

export default Curve;