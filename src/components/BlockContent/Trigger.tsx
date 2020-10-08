import React from "react";
import { useBlockCtx } from "./BlockCtx";
const Trigger: React.FC<{
  mark: {
    _key: string;
    _type: string;
    startLine: number;
    endLine: number;
    codeId: string;
    displayAsCode: boolean;
  };
  code?: boolean;
}> = (props) => {
  const { highlight, setHighlight } = useBlockCtx();
  const { startLine, endLine, codeId, displayAsCode } = props.mark;
  const handleToggle = () => {
    const { start, end } = highlight;
    if (start === startLine && end === endLine) {
      setTimeout(handleRemove, 0);
    } else {
      setTimeout(handleAdd, 0);
    }
  };
  const handleAdd = () => {
    setHighlight({ start: startLine, end: endLine, codeId });
  };
  const handleRemove = () => {
    setHighlight({ start: -1, end: -1, codeId: "" });
  };

  const elemProps = {
    style: { cursor: "pointer" },
    onMouseOver: handleAdd,
    onMouseOut: handleRemove,
    onTouchStartCapture: handleToggle,
  };

  return displayAsCode ? (
    <code {...elemProps}>
      <a>{props.children}</a>
    </code>
  ) : (
    <a {...elemProps}>{props.children}</a>
  );
};

export default Trigger;
