import ImageLayout from "components/ImageLayout";
import { Grid, Box, Container } from "@material-ui/core";
import VideoLayout from "components/VideoLayout";
import { makeStyles } from "@material-ui/core/styles";
import Button from "components/de/Button";
import CompanyLogo from "components/de/CompanyLogo";
import About from "components/de/About";
import Contact from "components/de/Contact";
import FreeTrial from "components/de/FreeTrial";
import Affiliate from "components/de/Affiliate";
import Privacy from "components/de/Privacy";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  sectionStyle: {
    minHeight: "40vh",
    paddingBottom: theme.spacing(6),
  },
  free: {
    minHeight: "40vh",
    paddingBottom: theme.spacing(6),
    paddingTop: 18,
  },
  sectionColor: {
    minHeight: "40vh",
    paddingBottom: theme.spacing(6),
    paddingTop: "1rem",
    backgroundColor: "white",
  },
  logoSection: {
    padding: "10% 3% 10% 3%",
  },
  btnOutline: {
    marginRight: 120,
    marginBottom: 0,
    color: "black",
    paddingLeft: 35,
    paddingRight: 35,
    backgroundColor: "white",
    outline: "3px solid #FFD42A",
    "&:hover": {
      outline: "3px solid #EBC327",
      backgroundColor: "transparent",
    },
  },
  fullBox: {
    paddingTop: 200,
    marginBottom: 25,
    paddingBottom: theme.spacing(6),
  },
  text: {
    paddingTop: 30,
    paddingBottom: 30,
  },
  btn: {
    margin: "20 auto",
    marginRight: 90,
    marginBottom: 0,
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <>
      <section id="home" className={classes.fullBox}>
        <Container maxWidth="lg">
          <Grid container justify="center" spacing={3}>
            <Grid item xs={12} sm={12} md={5}>
              <Typography gutterBottom variant="h3">
                Sie eliminieren mit promiseQ mehr als 95% Ihrer Falschalarme
              </Typography>
              <Grid item className={classes.text}>
                <Typography gutterBottom variant="body1">
                  <Box fontWeight="fontWeightBold" display="inline">
                    promiseQ{" "}
                  </Box>
                  ist keine normale Videoanalytik! <br />
                  Wir liefern die einzigartige Symbiose von modernster KI &{" "}
                  <br />
                  Crowdworkern über eine globale Plattform.
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12} md={12} justify="center">
                <Grid item xs={12} sm={12}>
                  <Button
                    id="about section redirect"
                    text="Termin buchen"
                    href="/de/booking"
                    className={classes.btn}
                  />
                  <Button
                    id="contact section redirect"
                    text="Kostenloser Test"
                    href="/de/contact"
                    className={classes.btnOutline}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={7}>
              <ImageLayout imageRef="/hero_image.jpg" desc="AI" />
            </Grid>
          </Grid>
        </Container>
      </section>
      <section id="solution" className={classes.sectionStyle}>
        <Container maxWidth="lg">
          <Box>
            <Grid container justify="center">
              <Grid item xs={12}>
                <VideoLayout
                  videoSrc="/promiseq_video.mp4"
                  videoType="video/mp4"
                  width="100%"
                  height="auto"
                />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </section>
      <Container id="about" maxWidth="lg">
        <Box>
          <About />
        </Box>
      </Container>
      <section id="affiliate" className={classes.sectionColor}>
        <Container maxWidth="lg">
          <Box>
            <Affiliate />
          </Box>
        </Container>
      </section>
      <section id="freeTrial" className={classes.free}>
        <Container maxWidth="lg">
          <Box>
            <FreeTrial />
          </Box>
        </Container>
      </section>

      <section id="privacy" className={classes.sectionColor}>
        <Container maxWidth="lg">
          <Box>
            <Privacy />
          </Box>
        </Container>
      </section>
      <section id="contact" className={classes.sectionColor}>
        <Container maxWidth="lg">
          <Box>
            <Contact />
          </Box>
        </Container>
      </section>
      <section id="companyLogo" className={classes.logoSection}>
        <Container maxWidth="lg">
          <Box marginTop={5}>
            <CompanyLogo />
          </Box>
        </Container>
      </section>
    </>
  );
}
