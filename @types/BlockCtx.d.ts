interface Highlight {
  lineNumber: number;
  startWord: number;
  endWord?: number;
  blockId: string;
}
interface BlockContextI {
  highlightWords: Highlight[] | null;
  highlightLines: HighlightLines | null;
  setHighlightLines: React.Dispatch<React.SetStateAction<HighlightLines>>;
  setHighlightWords: React.Dispatch<React.SetStateAction<Highlight[]>>;
}

interface HighlightLines {
  blockId: string;
  startLineNumber: number;
  endLineNumber: number;
}
