import React from "react";
import {
  Segment,
  Image,
  Accordion,
  SemanticShorthandCollection,
  AccordionPanelProps,
} from "semantic-ui-react";
import Link from "next/link";
import styled from "styled-components";

const StyledDiv = styled.div`
  cursor: pointer;
  display: inline-block;
  :hover {
    transform: scale(1.05);
  }
  transition: 0.3s all;
`;
const SnackCard: React.FC<{ post: PostInfo }> = ({ post }) => {
  const link = `/snacks/${post.slug}`;
  const panels: SemanticShorthandCollection<AccordionPanelProps> = [
    {
      key: post.slug,
      title: "info",
      content: "hi there",
    },
  ];
  return (
    <Link href="/snacks/[snackId]" as={link}>
      <StyledDiv>
        <Image size="small" src={`${post.snackImage?.url}?w=200`} />
      </StyledDiv>
    </Link>
  );
};

export default SnackCard;
