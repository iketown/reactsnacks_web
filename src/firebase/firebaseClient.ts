import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

if (typeof window !== "undefined" && !firebase.apps.length) {
  firebase.initializeApp({
    apiKey: process.env.NEXT_PUBLIC_FB_PUBLIC_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FB_AUTH_DOMAIN,
    databaseURL: process.env.NEXT_PUBLIC_FB_DATABASE_URL,
    projectId: process.env.NEXT_PUBLIC_FB_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FB_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FB_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FB_APP_ID,
  });
  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
  // db = firebase.firestore();
}

export { firebase };
