import React, { useEffect } from "react";
import { Button, Icon } from "semantic-ui-react";
import axios from "axios";
import useSWR, { mutate } from "swr";
import { useAuth } from "@contexts/auth/AuthCtx";
import moment from "moment";
const axiosFetcher = (url) => axios.get(url).then(({ data }) => data);
const fetcher = (url) =>
  fetch(url, { method: "GET" }).then((res) => res.json());

interface SnackButtonI {
  postId: string;
}

const SnackButton = ({ postId, snackSlug }) => {
  const snackUrl = `/api/snacks/${postId}`;
  const { data, error } = useSWR(snackUrl, axiosFetcher);
  const { user } = useAuth();
  const handleCompletePage = async () => {
    const update = { completed: new Date().valueOf(), snackSlug };
    const data = await axios.post(snackUrl, { update }).then((res) => res.data);
    console.log("data from api", data);
    mutate(snackUrl);
  };
  if (error) console.log("button error", error);
  if (!user) return <div>not signed in</div>;
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
  // if (!data) return <div>loading</div>;
  if (data?.completed)
    return (
      <div style={{ textAlign: "center", display: "inline-block" }}>
        <div>
          <Button disabled>
            <Icon name="check square" />
            Completed
          </Button>
        </div>
        <small>{moment(data.completed).fromNow()}</small>
      </div>
    );
  return (
    <>
      <Button icon onClick={handleCompletePage}>
        <Icon name="square outline" size="large" />
        Mark Completed
      </Button>
    </>
  );
};

export default SnackButton;
