import React, { createContext, useContext, useEffect, useState } from "react";

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
  //@ts-ignore
  post: {},
});

export const BlockContextProvider: React.FC<{ post: any }> = ({
  children,
  post: _post,
}) => {
  const [highlightWords, setHighlightWords] = useState<Highlight[] | null>(
    null
  );
  const [highlightLines, setHighlightLines] = useState<HighlightLines | null>(
    null
  );
  const [post, setPost] = useState(_post);
  useEffect(() => {
    if (_post) setPost(_post);
  }, [_post]);
  return (
    <BlockContext.Provider
      value={{
        highlightWords,
        setHighlightWords,
        highlightLines,
        setHighlightLines,
        post,
      }}
      {...{ children }}
    />
  );
};

export const useBlockCtx = (): BlockContextI => useContext(BlockContext);
