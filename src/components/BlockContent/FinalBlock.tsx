import { useUserCtx } from "@contexts/userInfo/UserCtx";
import React from "react";
import moment from "moment";
import { useBlockCtx } from "./BlockCtx";
import styled from "styled-components";
import Link from "next/link";
import { Button } from "semantic-ui-react";
import SnackButton from "../BlogButtons/SnackButton";
const StyledBlock = styled.div`
  margin: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const FinalBlock: React.FC<{ post: SnackPost }> = ({ children, post }) => {
  const { mySnacks } = useUserCtx();
  const finalText = post?.finalText || "";
  const completed =
    mySnacks && post && mySnacks[post._id] && mySnacks[post._id].completed;

  if (completed)
    return (
      <StyledBlock>
        <h3>Completed</h3>
        <div>{moment(completed).fromNow()}</div>
        <Link href="/dashboard" as="/dashboard">
          <Button color="blue">Go to Dashboard</Button>
        </Link>
      </StyledBlock>
    );
  return (
    <StyledBlock>
      {finalText && (
        <div style={{ marginBottom: "1rem", fontSize: "20px", color: "grey" }}>
          {finalText}
        </div>
      )}
      <div>
        <SnackButton {...{ post }} />
      </div>
    </StyledBlock>
  );
};

export default FinalBlock;
