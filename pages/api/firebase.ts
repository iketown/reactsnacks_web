import { NextApiRequest, NextApiResponse } from "next";

export default function (req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { pid },
  } = req;

  res.status(200).json({ foo: "bar", goog: process.env.GCLOUD_CREDENTIALS });
}
