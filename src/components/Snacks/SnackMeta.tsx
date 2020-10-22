import React from "react";
import { Label, Icon } from "semantic-ui-react";
import styled from "styled-components";
import Link from "next/link";
import { useUserCtx } from "@contexts/userInfo/UserCtx";
const PreReqDiv = styled.div`
  font-size: 11px;
`;

interface SnackMetaI {
  _updatedAt: string;
  author: { name: string; slug: string };
  prerequisites: { slug: string; title: string; _id: string }[];
}
const SnackMeta: React.FC<SnackMetaI> = ({
  _updatedAt,
  author,
  prerequisites,
}) => {
  const { mySnacks } = useUserCtx();
  return (
    <div>
      {prerequisites?.length && (
        <PreReqDiv>
          <div>prerequisite snacks</div>
          {prerequisites?.map((pReq) => {
            const completed =
              mySnacks && mySnacks[pReq._id] && mySnacks[pReq._id].completed;
            return (
              <Link
                key={pReq.slug}
                href="/snacks/[snackId]"
                as={`/snacks/${pReq.slug}`}
              >
                <Label as="a">
                  <Icon name={completed ? "check square" : "square outline"} />
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
