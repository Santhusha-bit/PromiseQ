import Header from "components/Header";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { Container } from "@material-ui/core";
import Button from "components/Button";
import { useTranslation } from "next-translate/useTranslation";

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
}));

const Contact = () => {
  const classes = useStyles();
  let { t } = useTranslation();
  return (
    <>
      <Header title={t("common:contact-header")} />
      <Grid container gutterBottom xs={12} sm={12} align="center">
        <Grid container gutterBottom xs={12} sm={2}></Grid>
        <Grid container gutterBottom xs={12} sm={8}>
          <Grid container xs={12} sm={12} className={classes.main}>
            <Typography gutterBottom={10} variant="h5" component="h6">
              {t("common:contact-text-1")}
              <br /> {t("common:contact-text-2")}
              <br /> {t("common:contact-text-3")}
              <br />
              {t("common:contact-text-4")}
            </Typography>
          </Grid>
          <Grid container justify="center" spacing={3} className={classes.btn}>
            <Grid item xs={12} sm={12} md={4} align="center">
              <Button
                id="booking section redirect"
                text={t("common:btn-book")}
                href="/booking"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4} align="center">
              <Button
                id="about section redirect"
                text={t("common:btn-touch")}
                href="/contact"
                className={classes.btnOutline}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid container gutterBottom xs={12} sm={2}></Grid>
      </Grid>
    </>
  );
};

export default Contact;
