import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Button from "components/Button";

import Header from "./Header";
import { Container } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  textMiddle: {
    marginBottom: 60,
    marginTop: 60,
  },
  how1: {
    paddingTop: 40,
  },
  how2: {
    paddingTop: 70,
  },
  main: {
    marginTop: 30,
  },
  btn: {
    marginRight: 120,
  },
  btnOutline: {
    marginRight: 120,
    color: "black",
    backgroundColor: "white",
    outline: "3px solid #FFD42A",
    "&:hover": {
      outline: "3px solid #EBC327",
      backgroundColor: "transparent",
    },
  },
  buttons: {
    marginTop: 50,
  },
  content: {
    marginTop: 25,
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
              Most advanced AI & crowdworker symbiosis <br/> with the promise to
              reduce your operator<br/> costs by more than half!
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
              <Grid
                container
                justify="center"
                spacing={3}
                className={classes.buttons}
              >
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

          <Grid container xs={12} sm={12} md={6} className={classes.how1}>
            <Typography variant="h6" component="h6">
              How promiseQ{" "}
              <Typography
                variant="h6"
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
                variant="h6"
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
          </Grid>
        </Grid>{" "}
      </Container>
    </div>
  );
};

export default FreeTrial;
