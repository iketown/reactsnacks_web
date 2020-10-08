import React, { createContext, useContext, useState } from "react";

interface Highlight {
  start: number;
  end: number;
  codeId: string;
}
interface BlockContextI {
  highlight: Highlight;
  setHighlight: React.Dispatch<React.SetStateAction<Highlight>>;
}

const BlockContext = createContext<BlockContextI>({
  highlight: { start: -1, end: -1 },
  setHighlight: () => {},
});

export const BlockContextProvider: React.FC = ({ children }) => {
  const [highlight, setHighlight] = useState<Highlight>({
    start: -1,
    end: -1,
    codeId: "",
  });
  return (
    <BlockContext.Provider
      value={{ highlight, setHighlight }}
      {...{ children }}
    />
  );
};

export const useBlockCtx = (): BlockContextI => useContext(BlockContext);
