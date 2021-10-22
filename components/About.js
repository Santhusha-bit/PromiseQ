import Header from "components/Header";
import TextLayout from "components/TextLayout";
import ImageLayout from "components/ImageLayout";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Hidden } from "@material-ui/core";
import Button from "components/Button";

const useStyles = makeStyles((theme) => ({
  img: {
    alignSelf: "center",
  },

  header: {
    marginBottom: theme.spacing(6),
    marginTop: theme.spacing(6),
  },

  main: {
    marginBottom: theme.spacing(3),
  },
}));

const About = () => {
  const classes = useStyles();

  return (
    <>
      <Typography
        variant="h4"
        gutterBottom
        align="center"
        className={classes.header}
      >
        Our Story – Where We Saw Promise for Humans in the Loop
      </Typography>
      <Box alignItems="center" display="flex">
        <section>
          <Grid container justify="center" spacing={4} className={classes.main}>
            <Grid item xs={12} sm={12} md={6} className={classes.img}>
              <ImageLayout imageRef="/team.jpg" desc="team" />
            </Grid>
            <Grid item xs={12} sm={12} md={6} className={classes.img}>
              <Typography gutterBottom variant="body1">
                One day our founders, Elias and Tolga, saw an opportunity for
                artificial intelligence enhanced with the ability to escalate to
                humans. After extensive market research, the two discovered that
                false alarms in security were indeed a widespread problem:
                nearly 95% of alarms from security cameras were sounded in
                error.
              </Typography>
              <Typography gutterBottom variant="body1">
                With this in mind, the two began using their days and nights to
                work on promiseQ. The organization was eventually accepted into
                the Bosch Startup Incubator, and received its first round of
                funding from Berlin-based venture capital firm APX. At that
                point, Tolga and Elias took the leap and forged a partnership
                with the well-regarded platform Security & Safety Things.
              </Typography>
            </Grid>
            <Typography gutterBottom variant="body1">
              The idea of crowd-working to ensure security is unheard-of. In the
              world of fully-staffed monitoring centers, and appealing automated
              solutions that require paying no human, the idea of crowd-working
              to protect an infrastructure is altogether new. But the numbers
              speak for themselves: in certified pilot projects, promiseQ has
              achieved a 99,5% success rate in reducing false alarms, and has
              done so cost-effectively. Akin to cars that could travel at a
              speed faster than horses, the proposition of decentralized
              security monitoring may sound far-fetched, but the success rates
              and cost savings tell us it is anything but.
            </Typography>
            <Grid container sm={12} justify="center">
              <Button
                id="about section redirect"
                text="Get in Touch"
                href="/#contact"
              />
            </Grid>
          </Grid>
        </section>
      </Box>
    </>
  );
};

export default About;
