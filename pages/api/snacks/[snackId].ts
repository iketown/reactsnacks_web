import { NextApiRequest, NextApiResponse } from "next";
import { firebaseAdmin } from "lib/firebase";
import { parseCookies } from "nookies";

const snackActions = async (req: NextApiRequest, res: NextApiResponse) => {
  // const { token } = req.cookies;
  const { token } = parseCookies({ req });
  const { method } = req;
  const snackId = (req.query.snackId as string) || "";
  console.log({ token });
  const { uid } = await firebaseAdmin.auth().verifyIdToken(token);
  const update = req.body?.update;
  if (!uid || !snackId) res.json({ message: "nope" });
  const firestore = firebaseAdmin.firestore();
  const snackDoc = firestore
    .collection("users")
    .doc(uid)
    .collection("snacks")
    .doc(snackId);

  switch (method) {
    case "POST": {
      snackDoc
        .set(update, { merge: true })
        .then((response) => {
          res.json({ response, update });
        })
        .catch((err) => res.json({ err }));
      break;
    }
    case "GET": {
      snackDoc
        .get()
        .then((doc) => {
          if (doc.exists) {
            res.json(doc.data());
          } else {
            res.json({ message: "doc not found", data: doc.data() });
          }
        })
        .catch((err) => res.json({ err }));
      break;
    }
    default: {
      res.json({ message: "neither" });
    }
  }
};

export default snackActions;
