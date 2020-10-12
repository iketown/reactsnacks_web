import React from "react";
import { useBlockCtx } from "./BlockCtx";
const WordsTrigger = ({ children, mark }) => {
  const { setHighlightLines } = useBlockCtx();
  const { startPrismId, endPrismId } = mark;

  const prismIdToObj = (prismId: string) => {
    const [p, blockId, lineNumber] = prismId.split("__");
    return {
      lineNumber: Number(lineNumber),
      blockId,
    };
  };

  const handleTrigger = () => {
    console.log({ startPrismId, endPrismId });
    const { blockId, lineNumber: startLineNumber } = prismIdToObj(startPrismId);
    const { lineNumber: endLineNumber } = prismIdToObj(endPrismId);
    if (!blockId || typeof startLineNumber !== "number") return;
    setHighlightLines({ startLineNumber, blockId, endLineNumber });
  };
  const handleUnTrigger = () => {
    setHighlightLines(null);
  };
  const link = (
    <a
      style={{ cursor: "pointer" }}
      onMouseOverCapture={handleTrigger}
      onMouseOutCapture={handleUnTrigger}
    >
      {children}
    </a>
  );
  return <span>{link}</span>;
};

export default WordsTrigger;
