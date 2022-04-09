import Header from "components/Header";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import HubspotForm from "react-hubspot-form";
import { Container } from "@material-ui/core";
import { useTranslation } from "next-translate/useTranslation";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["contact", "common"])),
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

const Contact = () => {
  let { t } = useTranslation("contact");
  const classes = useStyles();

  return (
    <>
      <Container className={classes.header}>
        <Header title={t("contact:contact-header")} />
        <Paper className={classes.formContainer}>
          <Typography variant="subtitle1" gutterBottom>
            Do you have any questions? Please do not hesitate to contact us
            directly.
          </Typography>
          <HubspotForm
            portalId="9094398"
            formId="219adb3f-b43c-4b02-babc-13467c28a98d"
            onSubmit={() => console.log("SUCCESS")}
            onReady={(form) => console.log("Form ready!")}
            loading={<div>Loading...</div>}
          />
        </Paper>
      </Container>
    </>
  );
};

export default Contact;
