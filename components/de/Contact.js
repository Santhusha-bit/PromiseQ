import Header from "components/Header";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "components/Button";

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

  return (
    <>
      <Header title="Kontaktieren Sie uns" />
      <Grid container gutterBottom xs={12} sm={12} align="center">
        <Grid container gutterBottom xs={12} sm={2}></Grid>
        <Grid container gutterBottom xs={12} sm={8}>
          <Grid container xs={12} sm={12} className={classes.main}>
            <Typography gutterBottom={10} variant="h5" component="h6">
              Wenn Sie Fragen haben, können Sie uns per E-Mail kontaktieren
              <br /> oder einen individuellen Termin vereinbaren,
              <br /> bei dem Sie auch mehr über promiseQ erfahren können.
              <br />
              Wir freuen uns darauf, Sie kennenzulernen!
            </Typography>
          </Grid>
          <Grid container justify="center" spacing={3} className={classes.btn}>
            <Grid item xs={12} sm={12} md={4} align="center">
              <Button
                id="booking section redirect"
                text="Termin buchen"
                href="/booking"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4} align="center">
              <Button
                id="about section redirect"
                text="Kontaktieren Sie uns"
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
