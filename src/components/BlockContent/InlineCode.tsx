import React, { useState } from "react";
import Highlighter from "react-syntax-highlighter";
import styleDark from "react-syntax-highlighter/dist/cjs/styles/hljs/atom-one-dark-reasonable";
export const InlineCode: React.FC = ({ children }) => {
  return <Highlighter style={styleDark}>{children}</Highlighter>;
};

export default InlineCode;
