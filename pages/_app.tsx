import type { AppProps } from "next/app";
import { FirebaseCtxProvider } from "@contexts/firestore/FirestoreCtx";
import { AuthProvider } from "@contexts/auth/AuthCtx";
import "semantic-ui-css/semantic.min.css";

export const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <FirebaseCtxProvider>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </FirebaseCtxProvider>
  );
};

export default App;
