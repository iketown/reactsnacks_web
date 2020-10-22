/* globals window */
import { useEffect, useState } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { useRouter } from "next/router";
import { useAuth } from "@contexts/auth/AuthCtx";
// import initFirebase from "../../utils/auth/initFirebase";
import { firebase } from "../firebase/firebaseClient";
// Init the Firebase app.
// initFirebase();

interface FirebaseAuthI {
  forwardToHref?: string;
  forwardToAs?: string;
}

const FirebaseAuth: React.FC<FirebaseAuthI> = ({
  forwardToHref,
  forwardToAs,
}) => {
  const [renderAuth, setRenderAuth] = useState(false);
  const { user, setSignInModalOpen } = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (typeof window !== "undefined") {
      setRenderAuth(true);
    }
  }, []);
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
    credentialHelper: "none",
    callbacks: {
      signInSuccessWithAuthResult: ({ user }, redirectUrl) => {
        console.log("signin success", { user, redirectUrl });
        setSignInModalOpen(false);
        // go wherever they were trying to go
        if (forwardToHref) {
          router.push(forwardToHref, forwardToAs);
        }
        return false;
      },
    },
  };
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
