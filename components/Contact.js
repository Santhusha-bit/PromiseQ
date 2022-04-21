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
  btnOutline: {
    marginTop: 10,
    marginBottom: 10,
    color: "black",
    backgroundColor: "white",
    outline: "3px solid #FFD42A",
    "&:hover": {
      outline: "3px solid #EBC327",
      backgroundColor: "transparent",
    },
  },
  btn: {
    marginTop: 10,
    marginBottom: 10,
  },
  buttons: {
    marginTop: 40,
  },
}));

const Contact = () => {
  const classes = useStyles();

  return (
    <>
      <Header title="Contact Us" />
      <Grid container gutterBottom xs={12} sm={12} align="center">
        <Grid container gutterBottom xs={12} sm={2}></Grid>
        <Grid container gutterBottom xs={12} sm={8}>
          <Grid container xs={12} sm={12} className={classes.main}>
            <Typography gutterBottom={10} variant="h5" component="h6">
              If you have any questions, you can contact us by e-mail
              <br /> or make an individual appointment,
              <br /> where you can also learn more about promiseQ.
              <br />
              We look forward to meeting you!
            </Typography>
          </Grid>
          <Grid container justify="center" className={classes.buttons}>
            <Grid item xs={12} sm={12} md={4} align="center">
              <Button
                id="booking section redirect"
                text="Book a meeting"
                href="/booking"
                className={classes.btn}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4} align="center">
              <Button
                id="about section redirect"
                text="Get in Touch"
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
