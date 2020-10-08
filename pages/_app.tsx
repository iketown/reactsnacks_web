import { useEffect } from "react";
import type { AppProps } from "next/app";
import { FirebaseCtxProvider } from "@contexts/firestore/FirestoreCtx";
import { AuthProvider } from "@contexts/auth/AuthCtx";
import "semantic-ui-css/semantic.min.css";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/plugins/line-highlight/prism-line-highlight.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import "../styles/darcula.css";
import Layout from "../src/components/layout/Layout";

export const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <FirebaseCtxProvider>
      <AuthProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthProvider>
    </FirebaseCtxProvider>
  );
};

export default App;
