import { NextApiRequest, NextApiResponse } from "next";
import { firebaseAdmin } from "lib/firebase";
import { parseCookies } from "nookies";

const dashboardRequest = async (req: NextApiRequest, res: NextApiResponse) => {
  const { token } = parseCookies({ req });
  const { uid } = await firebaseAdmin.auth().verifyIdToken(token);
  const firestore = firebaseAdmin.firestore();
  const userDoc = firestore.collection("users").doc(uid);
  const snackDocs = userDoc.collection("snacks");
  const mySnacksP = snackDocs.get().then((docs) => {
    const mySnackDocs = {};
    docs.forEach((doc) => {
      mySnackDocs[doc.id] = doc.data();
    });
    return mySnackDocs;
  });
  const userP = userDoc.get().then(doc => doc.data())
  Promise.all([mySnacksP,userP])
    .then(([mySnacks, userProfile]) => {
      res.json({mySnacks, userProfile});
    })
    .catch((error) => {
      res.json({ error });
    });
};

export default dashboardRequest;
