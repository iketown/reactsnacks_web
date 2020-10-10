import React, { useEffect, useRef } from "react";
import Prism from "prismjs";
import { useBlockCtx } from "./BlockCtx";
import styled from "styled-components";
import "prismjs/plugins/line-highlight/prism-line-highlight";
import "prismjs/plugins/line-numbers/prism-line-numbers.min";

interface MarkDef {
  _key: string;
  _type: string;
  targetId: string;
}

const StyledCode = styled.code<{ selected?: boolean }>`
  border: ${(p) => (p.selected ? "1px dotted yellow" : "")};
  padding: ${(p) => (p.selected ? "5px" : "")};
  box-shadow: ${(p) => (p.selected ? "0 0 10px #ffeb3b" : "")};
  transition: 0.2s all;
  border-radius: 6px;
`;

const PrismCode: React.FC<{
  nodes: any;
  markDefs: MarkDef[];
}> = ({ nodes, markDefs }) => {
  const { targetHighlight } = useBlockCtx();
  const codeRef = useRef(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      Prism.highlightAllUnder(codeRef.current);
    }
  }, [targetHighlight]);
  return (
    <div ref={codeRef}>
      <pre className="language-javascript">
        {nodes.map((node, index) => {
          const targetIds = markDefs
            ?.filter((markDef) => node.marks?.includes(markDef._key))
            .map(({ targetId }) => targetId);
          return (
            <StyledCode
              selected={targetIds?.includes(targetHighlight)}
              key={`${node.text}${index}`}
            >
              {node.text?.replace(/•/g, " ")}
            </StyledCode>
          );
        })}
      </pre>
    </div>
  );
};

export default PrismCode;
