import React from "react";
import "../styles/global.css";
import PropTypes from "prop-types";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "styles/theme";
import Meta from "components/Meta";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import firebase from "lib/initFirebase";
import { appWithTranslation } from "next-i18next";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}

function MyApp(props) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    firebase();
    // Remove the server-side injected CSS.
    // const jssStyles = document.querySelector("#jss-server-side");
    // if (jssStyles) {
    //   jssStyles.parentElement.removeChild(jssStyles);
    // }
  }, []);

  return (
    <>
      <Meta />
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Navbar />

        <Component {...pageProps} />

        <Footer />
      </ThemeProvider>
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default appWithTranslation(MyApp);
