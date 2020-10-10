import React from "react";

const TargetCode = ({ children, mark }) => {
  const { targetId } = mark;
  return <span id={targetId}>{children}</span>;
};

export default TargetCode;
