import { NextApiRequest, NextApiResponse } from "next";
import { firestore } from "../../lib/firebase";

export const allBooks = async (req: NextApiRequest, res: NextApiResponse) => {
  firestore
    .collection("books")
    .get()
    .then((docs) => {
      const books = [];
      docs.forEach((doc) => books.push(doc.data()));
      res.json(books);
    })
    .catch((error) => res.json({ error }));
};

export default allBooks;
