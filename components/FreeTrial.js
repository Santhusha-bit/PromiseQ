import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Button from "components/Button";

const useStyles = makeStyles(() => ({
  textMiddle: {
    marginBottom: 60,
    marginTop: 60,
  },
}));

const FreeTrial = () => {
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
        promiseQ intrusion detection software has the highest level of
        false-alarm reductions in the industry.
      </Typography>
      <Grid container justify="center" align="center" spacing={2}>
        <Grid item xs={12} sm={8}>
          <Container>
            <Typography gutterBottom variant="h4" component="h6">
              Free Trial
            </Typography>
            <Typography gutterBottom variant="body1">
              Download the app and enjoy 30 days of enhanced alarm detection.
            </Typography>
            <Typography gutterBottom variant="body1">
              Get in touch with us and we will send easy step-by-step
              instructions on how to install and use the power of promiseQ
            </Typography>
            <Button
              id="about section redirect"
              text="Get in Touch"
              href="/#contact"
            />
          </Container>
        </Grid>
      </Grid>
    </div>
  );
};

export default FreeTrial;
