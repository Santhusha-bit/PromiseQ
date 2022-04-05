import Header from "components/Header";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import React from "react";
import Helmet from "react-helmet";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["booking", "common"])),
      // Will be passed to the page component as props
    },
  };
}

const useStyles = makeStyles((theme) => ({
  formContainer: {
    minHeight: "80vh",
    marginLeft: theme.spacing(10),
    marginRight: theme.spacing(10),
    marginBottom: theme.spacing(6),
    padding: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(0),
      padding: theme.spacing(2),
    },
  },
  main: {
    alignItems: "center",
    paddingBottom: 0,
    paddingTop: 50,
    paddingRight: 70,
    paddingLeft: 70,
    fontWeight: "fontWeightMedium",
  },
  btn: {
    paddingTop: 30,
  },
  btnOutline: {
    color: "black",
    backgroundColor: "white",
    outline: "3px solid #FFD42A",
    "&:hover": {
      outline: "3px solid #EBC327",
      backgroundColor: "transparent",
    },
  },
  header: {
    marginTop: 190,
  },
}));

const Booking = () => {
  let { t } = useTranslation("booking");
  const classes = useStyles();
  return (
    <>
      <Container className={classes.header}>
        <Header title={t("booking:book-header")} />
        <div
          class="meetings-iframe-container"
          data-src="https://on.promiseq.com/meetings/tolga-ermis/meeting-with-promiseq-founders?embed=true"
        ></div>
        <Helmet>
          <script
            type="text/javascript"
            src="https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js"
          ></script>
        </Helmet>
      </Container>
    </>
  );
};

export default Booking;
