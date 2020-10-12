import { useEffect } from "react";
import type { AppProps } from "next/app";
// import { FirebaseCtxProvider } from "@contexts/firestore/FirestoreCtx";
// import { AuthProvider } from "@contexts/auth/AuthCtx";
import "semantic-ui-css/semantic.min.css";
import "prismjs/themes/prism-tomorrow.css";
import "../styles/darcula.css";
import Layout from "../src/components/layout/Layout";

export const App: React.FC<AppProps> = ({ Component, pageProps, router }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
