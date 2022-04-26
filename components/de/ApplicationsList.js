import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Container, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  box: {
    justifyContent: "center",
    alignItems: "center",
    "&:hover $imageStyle": {
      opacity: "0.2",
    },
    "&:hover $textMiddle": {
      opacity: "1",
    },
  },
  imageStyle: {
    opacity: "1",
    transition: ".5s ease",
  },
  image: {
    objectFit: "contain",
  },
  textMiddle: {
    position: "absolute",
    padding: "12px",
    borderRadius: "10px",
    opacity: "0",
    color: "black",
    textAlign: "center",
    backgroundColor: "rgba(32, 32, 32, 0.5)",
  },
}));

const applicationItems = [
  {
    image: "/security-icon.png",
    title: "Security",
    description:
      "Modern CCTV Cameras utilize algorithms to recognize humans, vehicles or objects. They send alerts if they detect e.g. a trespasser in a restricted area. promiseQ helps minimizing False Alarm Rates with Realtime Human Computing.",
  },
  {
    image: "/manufacturing-icon.png",
    title: "Manufacturing",
    description:
      "Smart production monitoring is a crucial activity in manufacturing. Monitoring Systems aim to detect anomalies and trends with the help of image processing. promiseQ helps maximize efficiency on the shop floor by Human-Powered Realtime Verification.",
  },
  {
    image: "/AI-icon.png",
    title: "Artificial Intelligence",
    description:
      "AI software focuses on creating intelligent problem-solving solutions. It includes object recognition and problem-solving that can aid or even replace human engagement in a process. promiseQ helps by training and validating your algorithms in Realtime.",
  },
];

const ApplicationsList = () => {
  const classes = useStyles();

  return (
    <div>
      <Grid container justify="center" spacing={2}>
        {applicationItems.map((application) => (
          <Grid item key={application.title} xs={12} sm={4}>
            <Container>
              <Grid container className={classes.box}>
                <Grid item className={classes.imageStyle}>
                  <img
                    src={application.image}
                    alt={application.title}
                    width="100%"
                    height={300}
                    className={classes.image}
                  />
                </Grid>
                <Grid item className={classes.textMiddle}>
                  <Link
                    href="/#applications"
                    style={{ textDecoration: "none" }}
                  >
                    <Typography variant="body1" color="primary" component="subtitle1">
                      Learn More
                    </Typography>
                  </Link>
                </Grid>
              </Grid>
              <Typography gutterBottom variant="h6" component="h6">
                {application.title}
              </Typography>
              <Typography gutterBottom variant="body1">
                {application.description}
              </Typography>
            </Container>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ApplicationsList;
