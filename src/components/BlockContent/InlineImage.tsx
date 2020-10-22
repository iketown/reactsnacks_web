import React from "react";
import styled from "styled-components";
import { Image } from "semantic-ui-react";

const FloatedImage = styled(Image)<{ float: string; height: number }>`
  height: ${(p) => p.height}px;
  float: ${(p) =>
    p.float === "right" ? "right" : p.float === "left" ? "left" : "none"};
  margin: 1rem auto;
`;

const InlineImage = (props) => {
  console.log("inline image props", props);
  const { float, height, image } = props.node;
  const url = image?.asset?.url;
  return <FloatedImage {...{ float, height }} src={url}></FloatedImage>;
};

export default InlineImage;
