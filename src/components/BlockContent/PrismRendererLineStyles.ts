import styled from "styled-components";
import { borderStyle, backgroundColor } from "../../constants/codeHighlights";
const selPad = "5px";

const selStart = `
  border-left: ${borderStyle};
`;
const selEnd = `
  border-right: ${borderStyle};
`;
const sel = `
  border-top: ${borderStyle};
  border-bottom: ${borderStyle};
`;

export const Word = styled.span<{
  sel: boolean;
  selStart: boolean;
  selEnd: boolean;
  multiSelected?: boolean;
}>`
  ${(p) => p.selStart && selStart};
  ${(p) => p.sel && sel};
  ${(p) => p.selEnd && selEnd};
  background: ${(p) => p.sel && backgroundColor};
  padding-top: ${(p) => (p.sel ? selPad : 0)};
  padding-bottom: ${(p) => (p.sel ? selPad : 0)};
  padding-left: ${(p) => (p.selStart ? selPad : 0)};
  padding-right: ${(p) => (p.selEnd ? selPad : 0)};
  border-width: ${(p) => (p.multiSelected ? "1px" : "2px")};
  transition: 0.3s all;
`;
