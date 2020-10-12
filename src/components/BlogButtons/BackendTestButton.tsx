import React, { useEffect } from "react";
import { Button } from "semantic-ui-react";
import useSWR from "swr";
const fetcher = (url) => fetch(url).then((res) => res.json());

const BackendTestButton = () => {
  const { data, error } = useSWR("/api/firebase", fetcher);
  if (error) return <div>failure</div>;
  // if (!data) return <div>loading</div>;
  console.log({ data });
  return <Button>update</Button>;
};

export default BackendTestButton;
