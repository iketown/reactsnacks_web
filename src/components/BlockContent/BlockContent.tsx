import BlockContent from "@sanity/block-content-to-react";
import React, { createContext } from "react";
import styled from "styled-components";

import { BlockContextProvider } from "./BlockCtx";
import Code from "./Code";
import PrismRenderer from "./PrismRenderer";
import InlineCode from "./InlineCode";
import Target from "./Target";
import TargetCode from "./TargetCode";
import Trigger from "./Trigger";
import IDTrigger from "./IDTrigger";
import CodeSandbox from "./CodeSandbox";
import CodeTriggers from "./CodeTriggers";
import PrismPre from "./PrismPre";
const StyledBlock = styled.div`
  p {
    font-size: 1.2rem;
  }
  .inline-code {
    color: #2a118b;
    background: #dbdbdb6e;
  }
`;

const BlockRenderer = (props) => {
  const { style = "normal" } = props.node;
  if (style === "pre") {
    console.log("pre", props);
    return (
      <PrismPre nodes={props.node.children} markDefs={props.node.markDefs} />
    );
  }

  if (/^h\d/.test(style)) {
    const level = style.replace(/[^\d]/g, "");
    return React.createElement(
      style,
      { className: `heading-${level}` },
      props.children
    );
  }

  if (style === "blockquote") {
    return <blockquote>- {props.children}</blockquote>;
  }
  // Fall back to default handling
  return BlockContent.defaultSerializers.types.block(props);
};

const serializers = {
  marks: {
    inlineCode: InlineCode,
    lineTrigger: Trigger,
    idTrigger: IDTrigger,
    target: Target,
    targetCode: TargetCode,
    // code: () => <div>im code</div>,
  },
  types: {
    codeWithId: PrismRenderer,
    codeWithTriggers: CodeTriggers,
    codeSandbox: CodeSandbox,
    block: BlockRenderer,
  },
};

const ReactBlockContent = ({ body }) => {
  return (
    <BlockContextProvider>
      {/* <CtxViewer /> */}
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
