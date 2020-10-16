import React, { useEffect, useState } from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import styled from "styled-components";
import theme from "prism-react-renderer/themes/nightOwl";
import { useBlockCtx } from "./BlockCtx";
import PrismRendererLine from "./PrismRendererLine";
const Pre = styled.pre<{ highlightActive?: boolean }>`
  text-align: left;
  margin: 1em 0;
  padding: 0.5em;
  overflow: scroll;
  box-shadow: ${(p) => (p.highlightActive ? "0 0 10px #00000094" : "")};
  transition: 0.3s all;
`;

const CodeContainer = styled.div`
  margin-bottom: 1rem;
  background: black;
`;

const PrismRenderer = ({ children, node }) => {
  const {
    code: { code },
    id,
  } = node;
  const { highlightWords, highlightLines } = useBlockCtx();
  const wordsActive = !!highlightWords?.find((word) => word.blockId === id);
  const linesActive = highlightLines?.blockId === id;
  return (
    <>
      <CodeContainer>
        <Highlight {...defaultProps} theme={theme} code={code} language="jsx">
          {({ className, style, tokens, getLineProps, getTokenProps }) => {
            return (
              <Pre
                highlightActive={wordsActive || linesActive}
                className={className}
                style={style}
              >
                {tokens.map((line, lineIndex) => {
                  return (
                    <PrismRendererLine
                      key={lineIndex}
                      {...{
                        highlightLines,
                        highlightWords,
                        line,
                        lineIndex,
                        getLineProps,
                        getTokenProps,
                        myBlockId: id,
                      }}
                    />
                  );
                })}
              </Pre>
            );
          }}
        </Highlight>
      </CodeContainer>
      {/* <pre>{JSON.stringify(highlightLines, null, 2)}</pre> */}
    </>
  );
};

export default PrismRenderer;
