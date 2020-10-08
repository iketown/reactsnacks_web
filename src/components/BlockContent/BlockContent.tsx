import BlockContent from "@sanity/block-content-to-react";
import React, { createContext } from "react";
import styled from "styled-components";

import { BlockContextProvider } from "./BlockCtx";
import Code from "./Code";
import InlineCode from "./InlineCode";
import Target from "./Target";
import Trigger from "./Trigger";

const StyledBlock = styled.div`
  p {
    font-size: 1.2rem;
  }
  .inline-code {
    color: #2a118b;
    background: #dbdbdb6e;
  }
`;
const serializers = {
  marks: {
    inlineCode: InlineCode,
    trigger: Trigger,
    target: Target,
  },
  types: {
    codeWithId: Code,
  },
};

const ReactBlockContent = ({ body }) => {
  return (
    <BlockContextProvider>
      {/* <CtxViewer /> */}
      <StyledBlock>
        <BlockContent blocks={body} serializers={serializers} />
      </StyledBlock>
    </BlockContextProvider>
  );
};

export default ReactBlockContent;
