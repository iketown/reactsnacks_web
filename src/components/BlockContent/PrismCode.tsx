import React, { useEffect, useRef } from "react";
import Prism from "prismjs";
import { useBlockCtx } from "./BlockCtx";
import "prismjs/plugins/line-highlight/prism-line-highlight";
import "prismjs/plugins/line-numbers/prism-line-numbers.min";

const PrismCode = ({ node }) => {
  const { highlights } = useBlockCtx();
  const codeRef = useRef(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      Prism.highlightAllUnder(codeRef.current);
    }
  }, [highlights]);
  if (!node?.code) return null;
  return (
    <div ref={codeRef} key={highlights.join(",")}>
      <pre
        data-line={`${highlights}`}
        className="language-javascript line-numbers"
      >
        <code>{node.code.trim()}</code>
      </pre>
    </div>
  );
};

export default PrismCode;
