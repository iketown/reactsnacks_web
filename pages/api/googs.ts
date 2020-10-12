import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const gCreds = process.env.GCLOUD_CREDENTIALS;
  res.send(gCreds);
};
