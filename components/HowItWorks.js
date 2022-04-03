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
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6}>
          <Typography gutterBottom variant="h6" component="h6">
            How promiseQ works - Focus SOC
          </Typography>
          <Typography gutterBottom variant="body1">
            promiseQ Threat Detect uses its flagship false alarm filtering technology to detect the presence of threats in video alarms. Using deep learning and crowdworkers, promiseQ analytics successfully filter out more than 95% of false alarms across all camera types. Additional features, such as timing for activation and camera health checks, give you the opportunity to significantly increase the efficiency of video surveillance.
          </Typography>
          <Typography variant="h6" component="h6">
            How promiseQ connects - Focus VMS & AMS & CMS
          </Typography>
          <Typography gutterBottom variant="body1">
            You take advantage of promiseQ Threat Detect through your chosen VMS or alarm management platform. promiseQ integrates seamlessly with leading systems such as EBÜS, AMwin and Azena and others, e.g. Milestone, Genetec and Immix.
          </Typography>
          <Typography gutterBottom variant="body1">
            You want to collaborate with us and offer promiseQ on your platform? Then contact us! 
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default HowItWorks;
