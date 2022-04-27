import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Button from "components/Button";
import { Link } from "@material-ui/core";
import Header from "./Header";
import { Container } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  textMiddle: {
    marginBottom: 75,
    marginTop: 45,
  },
  how: {
    paddingTop: 40,
  },
  how2: {
    paddingTop: 50,
  },
  main: {
    marginTop: 70,
    marginBottom: 50,
  },
  btn: {
    marginBottom: 0,
  },
  btnOutline: {
    marginBottom: 0,
    color: "black",
    paddingLeft: 35,
    paddingRight: 35,
    backgroundColor: "white",
    border: "3px solid #FFD42A",
    borderRadius: 7,
    "&:hover": {
      border: "3px solid #EBC327",
      backgroundColor: "transparent",
    },
  },
  content: {
    marginTop: 25,
  },
  img: {
    display: "block",
    margin: "0 auto",
  },
}));

const FreeTrial = () => {
  const classes = useStyles();

  return (
    <div>
      <Container>
        <Header title="Free Trial" />
        <Grid container spacing={2}>
          <Grid container xs={12} sm={12} md={6} className={classes.trial}>
            <Typography
              gutterBottom={10}
              variant="h5"
              component="h6"
              className={classes.textMiddle}
            >
              Most advanced AI & crowdworker <br /> symbiosis with the promise
              to reduce <br /> your operator costs by more than half!
            </Typography>
            <Grid spacing={2} xs={12} sm={12} md={7}>
              <Typography gutterBottom variant="h6" component="h6">
                Enjoy 30 days of peace of mind in your security operating
                center!
              </Typography>
              <Typography gutterBottom variant="body1" className={classes.main}>
                You contact us and we will send you a simple step-by-step guide
                on how to install and use the benefits of and with promiseQ.
              </Typography>
            </Grid>
            <Grid spacing={2} xs={12} sm={12} md={12}>
              <Grid container justify="center">
                <Grid item xs={12} sm={12} md={6}>
                  <Button
                    id="about section redirect"
                    text="Book a meeting"
                    href="/booking"
                    className={classes.btn}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <Button
                    id="contact section redirect"
                    text="Free Trial"
                    href="/contact"
                    className={classes.btnOutline}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid container xs={12} sm={12} md={6} className={classes.how}>
            <Typography variant="h6" component="h6">
              How promiseQ{" "}
              <Typography
                variant="h5"
                style={{ color: "#FFD42A" }}
                display="inline"
              >
                works - Focus SOC{" "}
              </Typography>
            </Typography>
            <Typography
              gutterBottom
              variant="body1"
              className={classes.content}
            >
              promiseQ Threat Detect uses its flagship false alarm filtering
              technology to detect the presence of threats in video alarms.
              Using deep learning and crowdworkers, promiseQ analytics
              successfully filter out more than 95% of false alarms across all
              camera types. Additional features, such as timing for activation
              and camera health checks, give you the opportunity to
              significantly increase the efficiency of video surveillance.
            </Typography>
            <Typography variant="h6" component="h6" className={classes.how2}>
              How promiseQ{" "}
              <Typography
                variant="h5"
                style={{ color: "#FFD42A" }}
                display="inline"
              >
                connects - Focus VMS & AMS & CMS{" "}
              </Typography>
            </Typography>
            <Typography variant="body1" className={classes.content}>
              Take advantage of promiseQ Threat Detect through your chosen VMS
              or alarm management platform. promiseQ integrates seamlessly with
              leading systems such as EBÜS, AMwin and Azena and others, e.g.
              Milestone, Genetec and Immix.
            </Typography>
            <Typography gutterBottom variant="body1">
              Want to collaborate with promiseQ? Then don’t hesitate to contact
              us!
            </Typography>
            <Grid container md={12} style={{ justifyContent: "center" }}>
              <Link href="https://www.ebues.de/">
                <img
                  src="/ebus.png"
                  width="70%"
                  height="auto"
                  textAlign="center"
                  object-fit="fill"
                  className={classes.img}
                />
              </Link>
            </Grid>
          </Grid>
        </Grid>{" "}
      </Container>
    </div>
  );
};

export default FreeTrial;
