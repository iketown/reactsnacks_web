import React, { createContext, useContext, useState } from "react";

const emptyHighlightWords = {
  lineNumber: -1,
  startWord: -1,
  endWord: -1,
  blockId: "",
};
const BlockContext = createContext<BlockContextI>({
  highlightWords: null,
  highlightLines: null,
  setHighlightLines: () => {},
  setHighlightWords: () => {},
});

export const BlockContextProvider: React.FC = ({ children }) => {
  const [highlightWords, setHighlightWords] = useState<Highlight[] | null>(
    null
  );
  const [highlightLines, setHighlightLines] = useState<HighlightLines | null>(
    null
  );

  return (
    <BlockContext.Provider
      value={{
        highlightWords,
        setHighlightWords,
        highlightLines,
        setHighlightLines,
      }}
      {...{ children }}
    />
  );
};

export const useBlockCtx = (): BlockContextI => useContext(BlockContext);
