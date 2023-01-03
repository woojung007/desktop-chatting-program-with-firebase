import React from "react";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { theme } from "../lib/theme";
import type { AppProps } from "next/app";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { Global } from "@emotion/react";
import { globalStyles } from "../styles/global";

export const firebaseConfig = {
  apiKey: "AIzaSyD_PJdZ009pS2qqm07s1Io5V7FyCI4X4c4",
  authDomain: "desktop-chatting-program.firebaseapp.com",
  projectId: "desktop-chatting-program",
  storageBucket: "desktop-chatting-program.appspot.com",
  messagingSenderId: "359816650226",
  appId: "1:359816650226:web:a5d41efe91b4f0e3781f6b",
};

export const firebaseApp = initializeApp(firebaseConfig);

export default function (props: AppProps) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Global styles={globalStyles} />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
}
