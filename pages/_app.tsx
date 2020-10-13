import { useEffect } from "react";
import type { AppProps } from "next/app";
import NextHead from "next/head";
import GoogleFonts from "next-google-fonts";
import "semantic-ui-css/semantic.min.css";
import "prismjs/themes/prism-tomorrow.css";
import "../styles/darcula.css";
import Layout from "../src/components/layout/Layout";
import { AuthProvider } from "../src/contexts/auth/AuthCtx";
export const App: React.FC<AppProps> = ({ Component, pageProps, router }) => {
  return (
    <Layout>
      <NextHead>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      </NextHead>
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Oswald:wght@500&display=swap" />
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </Layout>
  );
};

export default App;
