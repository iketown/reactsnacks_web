/* globals window */
import { useEffect, useState } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

// import initFirebase from "../../utils/auth/initFirebase";
import { firebase } from "../firebase/firebaseClient";
// Init the Firebase app.
// initFirebase();

const firebaseAuthConfig = {
  signInFlow: "popup",
  // Auth providers
  // https://github.com/firebase/firebaseui-web#configure-oauth-providers
  signInOptions: [
    {
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
      requireDisplayName: false,
    },
    {
      provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    },
  ],
  signInSuccessUrl: "/",
  credentialHelper: "none",
  // callbacks: {
  //   signInSuccessWithAuthResult: async ({ user }, redirectUrl) => {
  //     const userData = mapUserData(user);
  //     setUserCookie(userData);
  //   },
  // },
};

const FirebaseAuth = () => {
  // Do not SSR FirebaseUI, because it is not supported.
  // https://github.com/firebase/firebaseui-web/issues/213
  const [renderAuth, setRenderAuth] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setRenderAuth(true);
    }
  }, []);
  return (
    <div>
      {renderAuth ? (
        <StyledFirebaseAuth
          uiConfig={firebaseAuthConfig}
          firebaseAuth={firebase.auth()}
        />
      ) : null}
    </div>
  );
};

export default FirebaseAuth;
