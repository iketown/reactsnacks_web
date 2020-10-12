import React, { useEffect } from "react";
import { useBlockCtx } from "./BlockCtx";
const WordsTrigger = ({ children, mark }) => {
  const { setHighlightWords, highlightWords } = useBlockCtx();
  const { prismId, extraPrismIds } = mark;
  // console.log({ mark });
  useEffect(() => {
    console.log("highlightWords", highlightWords);
  }, [highlightWords]);
  const prismIdToObj = (prismId: string) => {
    const [p, blockId, lineNumber, startWord, endWord] = prismId.split("__");
    return {
      lineNumber: Number(lineNumber),
      startWord: Number(startWord),
      endWord: Number(endWord),
      blockId,
    };
  };

  const handleTrigger = () => {
    console.log({ prismId, extraPrismIds });
    if (prismId) {
      setHighlightWords([prismIdToObj(prismId)]);
      // return;
    }
    if (extraPrismIds && extraPrismIds.length) {
      setHighlightWords((old) => [
        ...old,
        ...extraPrismIds.map((id) => prismIdToObj(id)),
      ]);
    }
  };
  const handleUnTrigger = () => {
    setHighlightWords(null);
  };
  const link = (
    <a
      style={{ cursor: "pointer" }}
      onMouseOverCapture={handleTrigger}
      onClick={handleTrigger}
      onTouchStartCapture={handleTrigger}
      onMouseOutCapture={handleUnTrigger}
    >
      {children}
    </a>
  );
  return <span>{link}</span>;
};

export default WordsTrigger;
