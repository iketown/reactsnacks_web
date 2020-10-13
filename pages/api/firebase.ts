import { NextApiRequest, NextApiResponse } from "next";
import { firebaseAdmin } from "../../lib/firebase";
import nookies from "nookies";

export const allBooks = async (req: NextApiRequest, res: NextApiResponse) => {
  const { token } = req.cookies;
  firebaseAdmin
    .firestore()
    .collection("books")
    .get()
    .then((docs) => {
      const books = [];
      docs.forEach((doc) => books.push(doc.data()));
      res.json({ ...books, token });
    })
    .catch((error) => res.json({ error }));
};

export default allBooks;
