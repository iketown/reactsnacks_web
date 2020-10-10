import React from "react";
import { useBlockCtx } from "./BlockCtx";

const IDTrigger = ({ children, mark }) => {
  const { triggerId, displayAsCode } = mark;
  const { setTargetHighlight, targetHighlight } = useBlockCtx();
  const handleAdd = () => {
    setTargetHighlight(triggerId);
  };
  const handleRemove = () => {
    setTargetHighlight("");
  };
  const handleToggle = () => {
    if (targetHighlight) {
      handleRemove();
    } else {
      handleAdd();
    }
  };
  const elemProps = {
    style: { cursor: "pointer" },
    onMouseOver: handleAdd,
    onMouseOut: handleRemove,
    onTouchStartCapture: handleToggle,
  };
  return displayAsCode ? (
    <code>
      <a {...elemProps}>{children}</a>
    </code>
  ) : (
    <a {...elemProps}>{children}</a>
  );
};

export default IDTrigger;
