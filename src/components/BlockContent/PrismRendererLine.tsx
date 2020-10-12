import React, { memo, useState } from "react";
import styled from "styled-components";
import copy from "copy-to-clipboard";
import { Word } from "./PrismRendererLineStyles";
import { borderStyle, backgroundColor } from "../../constants/codeHighlights";
const Line = styled.div<{
  lineHL?: boolean;
  lineHLStart: boolean;
  lineHLEnd: boolean;
}>`
  display: grid;
  grid-template-columns: 22px 1fr;
  grid-template-rows: max-content;
  background: ${(p) => (p.lineHL ? backgroundColor : "")};
  border-top: ${(p) => (p.lineHLStart ? borderStyle : "")};
  border-bottom: ${(p) => (p.lineHLEnd ? borderStyle : "")};
  border-left: ${(p) => (p.lineHL ? borderStyle : "")};
  border-right: ${(p) => (p.lineHL ? borderStyle : "")};
  transition: 0.5s all;
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

interface PrismLineI {
  line: any[];
  lineIndex: number;
  highlightWords: Highlight[];
  highlightLines: HighlightLines;
  getLineProps: any;
  getTokenProps: any;
  myBlockId: string;
}

const PrismRendererLine: React.FC<PrismLineI> = ({
  line,
  lineIndex,
  getLineProps,
  getTokenProps,
  highlightWords,
  highlightLines,
  myBlockId,
}) => {
  const [startWord, setStartWord] = useState<number>(-1);
  const isDevelopment = process.env.NODE_ENV === "development";

  const handleSelectStart = (line: number, word: number, e: any) => {
    if (!isDevelopment) return;
    setStartWord(word);
    console.log("start", { line, word, target: e.target.textContent });
  };
  const handleSelectEnd = (line: number, word: number, e: any) => {
    if (!isDevelopment) return;
    console.log("end", { line, word, target: e.target.textContent });
    const prismCode = `prismwords__${myBlockId}__${line}__${startWord}__${word}`;
    console.log({ prismCode });
    copy(prismCode);
    setStartWord(-1);
  };
  const handleClickLine = (line: number) => {
    const prismCode = `prismline__${myBlockId}__${line}`;
    copy(prismCode);
    console.log({ prismCode });
  };
  const lineNumber = lineIndex + 1;
  const lineHL =
    highlightLines &&
    highlightLines.blockId === myBlockId &&
    highlightLines.startLineNumber <= lineNumber &&
    highlightLines.endLineNumber >= lineNumber;
  const lineHLStart = lineHL && highlightLines.startLineNumber === lineNumber;
  const lineHLEnd = lineHL && highlightLines.endLineNumber === lineNumber;
  return (
    <Line
      key={`${myBlockId}__${line}`}
      {...{
        lineHL,
        lineHLStart,
        lineHLEnd,
      }}
      lineHL={lineHL}
      {...getLineProps({ line, key: lineIndex })}
    >
      <LineNo onClick={() => handleClickLine(lineIndex + 1)}>
        {lineIndex + 1}
      </LineNo>
      <LineContent>
        {line.map((token, wordIndex) => {
          let selStart = false;
          let selEnd = false;
          let sel = false;
          let unselected = false;
          if (highlightWords) {
            for (let hl of highlightWords) {
              const { lineNumber, startWord, endWord, blockId } = hl;
              if (myBlockId === blockId && lineNumber === lineIndex + 1) {
                sel = startWord <= wordIndex && endWord >= wordIndex;
                selStart = startWord === wordIndex;
                selEnd = endWord === wordIndex;
              }
            }
          }
          const multiSelected = highlightWords && highlightWords.length > 1;
          // console.log({ multiSelected });
          return (
            <span key={`${wordIndex}${myBlockId}`}>
              <Word
                {...{
                  sel,
                  selStart,
                  selEnd,
                  multiSelected,
                }}
                onMouseDown={(e) =>
                  handleSelectStart(lineIndex + 1, wordIndex, e)
                }
                onMouseUp={(e) => handleSelectEnd(lineIndex + 1, wordIndex, e)}
                {...getTokenProps({ token, wordIndex })}
              />
            </span>
          );
        })}
      </LineContent>
    </Line>
  );
};

const propsEqual = (prevProps: PrismLineI, nextProps: PrismLineI) => {
  const { myBlockId, lineIndex: myLineIndex } = nextProps;
  const myLineNumber = myLineIndex + 1;

  // check if this entire line is/was highlighted.
  const oldLines = prevProps.highlightLines;
  const newLines = nextProps.highlightLines;
  const isLineHL =
    newLines &&
    newLines.startLineNumber <= myLineNumber &&
    newLines.startLineNumber >= myLineNumber;
  const wasLineHL =
    oldLines &&
    oldLines.startLineNumber <= myLineNumber &&
    oldLines.endLineNumber >= myLineNumber;
  if (isLineHL !== wasLineHL) return false;

  // check if words inside this line have changed highlight.
  const oldHL = prevProps.highlightWords;
  const newHL = nextProps.highlightWords;
  let isLineSelected = false;
  let wasLineSelected = false;

  if (oldHL) {
    for (let hl of oldHL) {
      if (hl.blockId === myBlockId && hl.lineNumber === myLineNumber) {
        wasLineSelected = true;
      }
    }
  }
  if (newHL) {
    for (let hl of newHL) {
      if (hl.blockId === myBlockId && hl.lineNumber === myLineNumber) {
        isLineSelected = true;
      }
    }
  }
  const selectionSame = isLineSelected === wasLineSelected;
  if (!selectionSame) {
    console.log("changed!", myLineIndex);
  }
  return selectionSame;
};

// export default memo(PrismRendererLine, propsEqual);
export default PrismRendererLine;
