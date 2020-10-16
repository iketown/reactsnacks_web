import { NextApiRequest, NextApiResponse } from "next";
import { firebaseAdmin } from "lib/firebase";
import { parseCookies } from "nookies";

const dashboardRequest = async (req: NextApiRequest, res: NextApiResponse) => {
  const { token } = parseCookies({ req });
  const { uid } = await firebaseAdmin.auth().verifyIdToken(token);
  const firestore = firebaseAdmin.firestore();
  const snackDocs = firestore.collection("users").doc(uid).collection("snacks");
  snackDocs
    .get()
    .then((docs) => {
      const mySnackDocs = {};
      docs.forEach((doc) => {
        mySnackDocs[doc.id] = doc.data();
      });
      res.json(mySnackDocs);
    })
    .catch((error) => {
      res.json({ error });
    });
};

export default dashboardRequest;
