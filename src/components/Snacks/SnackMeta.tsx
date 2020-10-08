import React from "react";
import { Label, Icon } from "semantic-ui-react";
import styled from "styled-components";
import Link from "next/link";
const PreReqDiv = styled.div`
  font-size: 11px;
`;

interface SnackMetaI {
  _updatedAt: string;
  author: { name: string; slug: string };
  prerequisites: { slug: string; title: string }[];
}
const SnackMeta: React.FC<SnackMetaI> = ({
  _updatedAt,
  author,
  prerequisites,
}) => {
  console.log({
    _updatedAt,
    author,
    prerequisites,
  });
  return (
    <div>
      {prerequisites?.length && (
        <PreReqDiv>
          <div>prerequisite snacks</div>
          {prerequisites?.map((pReq) => {
            return (
              <Link
                key={pReq.slug}
                href="/snacks/[snackId]"
                as={`/snacks/${pReq.slug}`}
              >
                <Label as="a">
                  <Icon name="check square" />
                  {pReq.title}
                </Label>
              </Link>
            );
          })}
        </PreReqDiv>
      )}
    </div>
  );
};

export default SnackMeta;
