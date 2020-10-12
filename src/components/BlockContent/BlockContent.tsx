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
      {/* <iframe
        src="https://codesandbox.io/embed/dark-glitter-i801y?fontsize=14&hidenavigation=0&theme=dark"
        style={{
          width: "100%",
          height: "500px",
          border: 0,
          overflow: "hidden",
        }}
        title="dark-glitter-i801y"
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      ></iframe> */}
    </BlockContextProvider>
  );
};

export default ReactBlockContent;

{
  /* <iframe
  src="https://codesandbox.io/embed/friendly-northcutt-z4dsg?fontsize=14&hidenavigation=1&theme=dark"
  style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
  title="friendly-northcutt-z4dsg"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>; */
}
