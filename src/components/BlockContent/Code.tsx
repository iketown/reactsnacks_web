import React, { CSSProperties, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { Checkbox } from "semantic-ui-react";
import styleDark from "react-syntax-highlighter/dist/cjs/styles/hljs/atom-one-dark-reasonable";

import { useBlockCtx } from "./BlockCtx";
export const Code = ({ node }) => {
  const { highlight } = useBlockCtx();
  if (!node || !node.code) {
    return null;
  }
  if (typeof window === "undefined") return null;
  const { code } = node;
  const codeHighlighted = node.id === highlight.codeId;
  return (
    <div
      style={{
        boxShadow: codeHighlighted ? "0 0 10px #0000009c" : "",
        // transform: `translateX(${codeHighlighted ? "-5px" : "0"})`,
        // transition: ".3s all",
      }}
    >
      <SyntaxHighlighter
        style={styleDark}
        language={code.language || "text"}
        showLineNumbers
        wrapLines
        lineProps={(lineNumber) => {
          let style: CSSProperties = {
            transition: "1s all",
          };
          const { start, end, codeId } = highlight;
          // if this is the wrong block, return.
          if (node.id !== codeId) return { style };
          // if this is the wrong line, return.
          const isHighlighted = lineNumber >= start && lineNumber <= end;
          if (!isHighlighted) return { style };

          const borderStyle = "2px dotted #FFFF0066";
          style = {
            borderTop: start === lineNumber ? borderStyle : "none",
            // marginLeft: "1rem",
            // transform: "scaleX(1.2)",
            borderLeft: "3px solid #FFFF00",
            borderBottom: end === lineNumber ? borderStyle : "none",
            boxSizing: "border-box",
            backgroundImage: "linear-gradient(to right, #000, #00000055)",
            padding: "4px",
            boxShadow: "5px 0 5px 0 #ffff0033",
            transition: ".3s all",
          };
          return { style };
        }}
      >
        {code.code}
      </SyntaxHighlighter>
    </div>
  );
};

export default Code;
