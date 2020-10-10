import React, { createContext, useContext, useState } from "react";

interface Highlight {
  start: number;
  end: number;
  codeId: string;
}
interface BlockContextI {
  highlight: Highlight;
  setHighlight: React.Dispatch<React.SetStateAction<Highlight>>;
  targetHighlight: string;
  setTargetHighlight: React.Dispatch<React.SetStateAction<string>>;
}

const BlockContext = createContext<BlockContextI>({
  highlight: { start: -1, end: -1, codeId: "" },
  setHighlight: () => {},
  targetHighlight: "",
  setTargetHighlight: () => {},
});

export const BlockContextProvider: React.FC = ({ children }) => {
  const [highlight, setHighlight] = useState<Highlight>({
    start: -1,
    end: -1,
    codeId: "",
  });
  const [targetHighlight, setTargetHighlight] = useState<string>("target-1");
  return (
    <BlockContext.Provider
      value={{ highlight, setHighlight, targetHighlight, setTargetHighlight }}
      {...{ children }}
    />
  );
};

export const useBlockCtx = (): BlockContextI => useContext(BlockContext);
