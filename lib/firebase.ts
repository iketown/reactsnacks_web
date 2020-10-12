import admin from "firebase-admin";
import atob from "atob";
interface GoogleCreds {
  auth_provider_x509_cert_url: string;
  auth_uri: string;
  client_email: string;
  client_id: string;
  client_x509_cert_url: string;
  private_key: string;
  private_key_id: string;
  project_id: string;
  token_uri: string;
  type: string;
  databaseURL: string;
}

const getGoogleCreds = (): GoogleCreds => {
  const gCreds: GoogleCreds = JSON.parse(atob(process.env.GCLOUD_CREDENTIALS));
  const databaseURL = process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL;
  return { ...gCreds, databaseURL };
};

const { project_id, private_key, client_email, databaseURL } = getGoogleCreds();

try {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: project_id,
      privateKey: private_key,
      clientEmail: client_email,
    }),
    databaseURL,
  });
} catch (error) {
  /*
   * We skip the "already exists" message which is
   * not an actual error when we're hot-reloading.
   */
  if (!/already exists/u.test(error.message)) {
    // eslint-disable-next-line no-console
    console.error("Firebase admin initialization error", error.stack);
  }
  console.error("fb error", error);
}
export const firestore = admin.firestore();
