import * as firebaseAdmin from "firebase-admin";
import admin_sdk from "../../admin_sdk.json";
if (!firebaseAdmin.apps.length) {
  firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert({
      privateKey: admin_sdk.private_key,
      clientEmail: admin_sdk.client_email,
      projectId: admin_sdk.project_id,
    }),
    databaseURL: `https://${admin_sdk.project_id}.firebaseio.com`,
  });
}

export { firebaseAdmin };
