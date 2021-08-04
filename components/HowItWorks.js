import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  textMiddle: {
    marginBottom: 60,
    marginTop: 60,
  },
}));

const HowItWorks = () => {
  const classes = useStyles();

  return (
    <div>
      <Typography
        gutterBottom={10}
        variant="h4"
        component="h6"
        align="center"
        className={classes.textMiddle}
      >
        Advanced real-time video security analysis that minimizes cost
        associated to false-alarms.
      </Typography>
      <Grid container justify="center" spacing={2}>
        <Grid item xs={12} sm={6}>
          <Container>
            <Typography gutterBottom variant="h5" component="h6">
              HOW promiseQ works
            </Typography>
            <Typography gutterBottom variant="body1">
              Filtering through each alarm detection, the software eliminates
              most detections and sends for human crowd sourcing verification
              only when required. promiseQ uses advanced machine learning and
              cloud-based video analytics/algorithms so that you will not have
              to waste time and money on false alarms.
            </Typography>
          </Container>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Container>
            <Typography gutterBottom variant="h5" component="h6">
              HOW promiseQ connects
            </Typography>
            <Typography gutterBottom variant="body1">
              promiseQ integrates with your existing Security & Safety Things OS
              surveillance system. Simply download the *app and allow promiseQ
              reduce the amount of false alarms.
            </Typography>
          </Container>
        </Grid>
      </Grid>
    </div>
  );
};

export default HowItWorks;
