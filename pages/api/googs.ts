import { NextApiRequest, NextApiResponse } from "next";
import atob from "atob";
export const googs = (req: NextApiRequest, res: NextApiResponse) => {
  const gCreds = process.env.GCLOUD_CREDENTIALS;
  res.json({ gCreds });
};

export default googs;
