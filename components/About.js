import ImageLayout from "components/ImageLayout";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";
import Button from "components/Button";

const useStyles = makeStyles((theme) => ({
  topic: {
    alignSelf: "center",
  },
  para: {
    alignSelf: "center",
  },
  img: {
    alignSelf: "center",
    marginTop: 100,
    marginLeft: 40,
    marginRight: 40,
    marginBottom: 40,
  },
  header: {
    marginBottom: theme.spacing(6),
    marginTop: theme.spacing(6),
  },

  main: {
    marginBottom: theme.spacing(3),
    marginTop: -60,
  },
  palette: {
    tomato: "#FF6347",
    pink: {
      deep: "#FF1493",
      hot: "#FF69B4",
      medium: "#C71585",
      pale: "#DB7093",
      light: "#FFB6C1",
    },
  },
}));

const About = () => {
  const classes = useStyles();

  return (
    <>
      <Box alignItems="center" display="flex">
        <section>
          <Grid container justify="center" spacing={3} className={classes.main}>
            <Grid item xs={3} sm={3} md={2} className={classes.img}>
              <ImageLayout imageRef="/Tolga.svg" desc="team" />
              <Typography gutterBottom variant="body1" align="center">
                <Box fontWeight="fontWeightBold" display="inline">
                  Tolga Ermis
                </Box>
              </Typography>
            </Grid>
            <Grid item xs={3} sm={3} md={2} className={classes.img}>
              <ImageLayout imageRef="/Elias.svg" desc="team" />
              <Typography gutterBottom variant="body1" align="center">
                <Box fontWeight="fontWeightBold" display="inline">
                  Elias Kardel
                </Box>
              </Typography>
            </Grid>

            <Grid item xs={12} sm={12} md={12} className={classes.topic}>
              <Typography variant="h6" gutterBottom>
                Our story. Where we saw{" "}
                <Typography
                  variant="h6"
                  style={{ color: "#FFD42A" }}
                  display="inline"
                >
                  promise for humans{" "}
                </Typography>
                in the loop
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12} className={classes.para}>
              <Typography gutterBottom variant="body1">
                <Box fontWeight="fontWeightBold" display="inline">
                  Tolga{" "}
                </Box>
                and
                <Box fontWeight="fontWeightBold" display="inline">
                  {" "}
                  Elias{" "}
                </Box>
                have worked in the field of automated driving for years. While
                Elias successfully explored crowdsourcing-based projects for AI
                training, Tolga helped develop Volkswagen's and Daimler's
                camera-based lane keeping functions.
              </Typography>
              <Typography gutterBottom variant="body1">
                One day, however, they saw an opportunity to augment artificial
                intelligence in real time with automated human intervention via
                crowdworking. After extensive market research, the pair
                discovered that false alarms were indeed a widespread problem in
                the security sector:
                <Box fontWeight="fontWeightBold" display="inline">
                  {" "}
                  More than 95% of{" "}
                </Box>
                all security camera alarms are
                <Box fontWeight="fontWeightBold" display="inline">
                  {" "}
                  triggered for irrelevant reasons.{" "}
                </Box>
              </Typography>
              <Typography gutterBottom variant="body1">
                The idea of complementing security with crowdworking is
                definitely a bit crazy. In a world of fully staffed control
                centers and first attempts at automation, the idea of
                crowdworking for security may be completely out of the box. We
                are rethinking alarm processing and security. Henry Ford said
                'If I had asked people what they wanted, they would have said
                faster horses'. Don't bet on faster horses, bet on"
                <Box fontWeight="fontWeightBold" display="inline">
                  {" "}
                  promiseQ.{" "}
                </Box>
              </Typography>
              <Typography gutterBottom variant="body1">
                The control center of the future is
                <Box fontWeight="fontWeightBold" display="inline">
                  {" "}
                  decentralized and autonomous!{" "}
                </Box>
              </Typography>
            </Grid>
            <Grid container sm={12} justify="center">
              <Button
                id="about section redirect"
                text="Get in Touch"
                href="/contact"
              />
            </Grid>
          </Grid>
        </section>
      </Box>
    </>
  );
};

export default About;
