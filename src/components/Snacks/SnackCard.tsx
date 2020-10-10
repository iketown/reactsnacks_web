import React from "react";
import {
  Segment,
  Image,
  Accordion,
  SemanticShorthandCollection,
  AccordionPanelProps,
} from "semantic-ui-react";
import Link from "next/link";

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
    <div>
      <div>
        <Segment>
          <Link href="/snacks/[snackId]" as={link}>
            <a>
              <h4>{post.title}</h4>
              <Image src={`${post.image}?h=200`} />
            </a>
          </Link>
          <Accordion panels={panels}></Accordion>
        </Segment>
      </div>
    </div>
  );
};

export default SnackCard;
