import BlockContent from "@sanity/block-content-to-react";
import React, { createContext } from "react";
import styled from "styled-components";

import { BlockContextProvider } from "./BlockCtx";
import CodeSandbox from "./CodeSandbox";
import InlineCode from "./InlineCode";
import LineTrigger from "./LineTrigger";
import PrismRenderer from "./PrismRenderer";
import TargetCode from "./TargetCode";
import WordsTrigger from "./WordsTrigger";

const StyledBlock = styled.div`
  p {
    font-size: 1.2rem;
  }
  h4 {
    color: #00000066;
    text-align: right;
    font-family: Oswald, sans-serif;
    font-weight: 200;
    font-size: 2rem;
    ::after {
      content: "";
      border-bottom: 1px solid #00000044;
      display: block;
    }
  }
  .inline-code {
    color: #2a118b;
    background: #dbdbdb6e;
  }
`;

const serializers = {
  marks: {
    inlineCode: InlineCode,
    lineTrigger: LineTrigger,
    wordsTrigger: WordsTrigger,
    targetCode: TargetCode,
    // code: () => <div>im code</div>,
  },
  types: {
    codeWithId: PrismRenderer,
    codeSandbox: CodeSandbox,
  },
};

const ReactBlockContent = ({ body }) => {
  return (
    <BlockContextProvider>
      <StyledBlock>
        <BlockContent blocks={body} serializers={serializers} />
      </StyledBlock>
    </BlockContextProvider>
  );
};

export default ReactBlockContent;
