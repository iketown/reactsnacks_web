import { useAuth } from "@contexts/auth/AuthCtx";
import axios from "axios";
import React from "react";
import { Button, Icon } from "semantic-ui-react";
import useSWR, { mutate } from "swr";

const axiosFetcher = (url: string) =>
  axios.get(url, { withCredentials: true }).then(({ data }) => data);
const fetcher = (url) =>
  fetch(url, { method: "GET", credentials: "include" }).then((res) =>
    res.json()
  );

const SnackButton: React.FC<{ post: SnackPost }> = ({ post }) => {
  const { slug, _id } = post;
  const snackSlug = slug.current;
  const postId = _id;
  const snackUrl = `/api/snacks/${postId}`;
  const {
    user,
    updateFBCookie,
    setSignInModalOpen,
    setModalContent,
  } = useAuth();
  const { data, error } = useSWR(snackUrl, axiosFetcher, {
    shouldRetryOnError: !!user, // if not signed in dont keep trying.
  });

  const handleCompletePage = async () => {
    if (user) {
      const update = { completed: new Date().valueOf(), snackSlug };
      const data = await axios
        .post(snackUrl, { update })
        .then((res) => res.data)
        .catch((err) => {
          console.log("api error", err);
        });
      mutate(snackUrl);
      mutate(`/api/dashboard`);
    } else {
      setModalContent(
        <p>
          <Icon size="huge" name="thumbs up outline" />
          <h3>Grab a free account</h3> to keep track of which snacks you've
          completed,
          <br /> and get recommendations for which snacks will be most
          nutritious.
        </p>
      );
      setSignInModalOpen(true);
    }
  };
  if (error) console.log("button error", error);
  // if (!user) return <div>not signed in</div>;
  if (data?.completed) return null;

  return (
    <Button color="blue" onClick={handleCompletePage}>
      Mark Completed
    </Button>
  );
};

export default SnackButton;
