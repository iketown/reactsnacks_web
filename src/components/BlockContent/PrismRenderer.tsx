import React, { useEffect } from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import styled from "styled-components";
import theme from "prism-react-renderer/themes/nightOwl";
import { useBlockCtx } from "./BlockCtx";

const Pre = styled.pre`
  text-align: left;
  margin: 1em 0;
  padding: 0.5em;
  overflow: scroll;
`;
const hlLineStyle = "1px solid orange";
const Line = styled.div<{
  hl: boolean;
  hlStart: boolean;
  hlEnd: boolean;
  unselected: boolean;
}>`
  /* display: table-row; */
  border-left: ${(p) => (p.hl ? hlLineStyle : "")};
  border-right: ${(p) => (p.hl ? hlLineStyle : "")};
  border-top: ${(p) => (p.hlStart ? hlLineStyle : "")};
  border-bottom: ${(p) => (p.hlEnd ? hlLineStyle : "")};
  padding: ${(p) => (p.hl ? "2px" : "")};
  opacity: ${(p) => (p.unselected ? 0.5 : 1)};
  filter: ${(p) => (p.unselected ? `blur(1px)` : "")};
  display: grid;
  grid-template-columns: 22px 1fr;
  transition: 0.2s all;
`;

const LineNo = styled.span`
  /* display: table-cell; */
  text-align: right;
  /* padding-right: 1em; */
  user-select: none;
  opacity: 0.5;
  /* border: 1px solid white; */
`;

const LineContent = styled.span`
  /* display: table-cell; */
  padding-left: 1rem;
`;

const PrismRenderer = ({ children, node }) => {
  const {
    code: { code },
    id,
  } = node;
  const { highlight } = useBlockCtx();
  console.log({ ...highlight, id });
  const { start, end, codeId } = highlight;
  const isDevelopment = process.env.NODE_ENV === "development";
  const handleSelectStart = (line: number, word: number, e: any) => {
    if (!isDevelopment) return;
    console.log("start", { line, word, target: e.target.textContent });
  };
  const handleSelectEnd = (line: number, word: number, e: any) => {
    if (!isDevelopment) return;
    console.log("end", { line, word, target: e.target.textContent });
  };
  return (
    <Highlight {...defaultProps} theme={theme} code={code} language="jsx">
      {({ className, style, tokens, getLineProps, getTokenProps }) => {
        return (
          <Pre className={className} style={style}>
            {tokens.map((line, i) => {
              const lineNumber = i + 1;
              const hl = start <= lineNumber && end >= lineNumber;
              const hlStart = start === lineNumber;
              const hlEnd = end === lineNumber;
              const unselected = !hl && start >= 0;
              let count = ``;
              return (
                <Line
                  key={i}
                  {...getLineProps({ line, key: i })}
                  {...{ hl, hlStart, hlEnd, unselected }}
                >
                  <LineNo>{i + 1}</LineNo>
                  <LineContent>
                    {line.map((token, key) => {
                      // console.log({ token, key }, (count += `${key}`));
                      return (
                        <span
                          onMouseDown={(e) => handleSelectStart(i, key, e)}
                          onMouseUp={(e) => handleSelectEnd(i, key, e)}
                          key={key}
                          {...getTokenProps({ token, key })}
                        />
                      );
                    })}
                  </LineContent>
                </Line>
              );
            })}
          </Pre>
        );
      }}
    </Highlight>
  );
};

export default PrismRenderer;
