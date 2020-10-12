import React, { useEffect } from "react";
import { Button } from "semantic-ui-react";

const BackendTestButton = () => {
  useEffect(() => {
    console.log("gcloud", process.env.GCLOUD_CREDENTIALS);
  }, []);
  return <Button>update</Button>;
};

export default BackendTestButton;
