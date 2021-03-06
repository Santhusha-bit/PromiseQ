import ImageLayout from "components/ImageLayout";
import { Grid, Box, Container } from "@material-ui/core";
import VideoLayout from "components/VideoLayout";
import { makeStyles } from "@material-ui/core/styles";
import Button from "components/Button";
import CompanyLogo from "components/CompanyLogo";
import About from "components/About";
import Contact from "components/Contact";
import FreeTrial from "components/FreeTrial";
import Affiliate from "components/Affiliate";
import Privacy from "components/Privacy";
import { Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import moment from "moment-timezone";

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
  topic: {
    fontSize: 39,
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
    boxShadow: "none",
    backgroundColor: "white",
    border: "3px solid #FFD42A",
    borderRadius: 7,
    "&:hover": {
      border: "3px solid #EBC327",
      borderRadius: 7,
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
    marginRight: 80,
    marginBottom: 0,
    boxShadow: "none",
    border: "3px solid #FFD42A",
    borderRadius: 7,
    "&:hover": {
      border: "3px solid #EBC327",
    },
  },
}));

export default function Home() {
  const classes = useStyles();
  const [isLangEnglish, setIsLangEnglish] = useState(true);
  const prefix = isLangEnglish ? "/" : "/de/";
  const timeZone = moment.tz.guess();

  useEffect(() => {
    localStorage.getItem("lang") &&
      setIsLangEnglish(localStorage.getItem("lang") === "eng");

    if (!localStorage.getItem("lang")) {
      if (timeZone === "Europe/Berlin") {
        if (isLangEnglish) {
          localStorage.setItem("lang", "de");
          router.push("/de");
          setIsLangEnglish(false);
        }
      }
    }
  }, [timeZone]);

  return (
    <>
      <section id="home" className={classes.fullBox}>
        <Container maxWidth="lg">
          <Grid container justify="center" spacing={3}>
            <Grid item xs={12} sm={12} md={5}>
              <Typography gutterBottom variant="h4" className={classes.topic}>
                Easily eliminate more than 95% of false alarms
              </Typography>
              <Grid item className={classes.text}>
                <Typography gutterBottom variant="body1">
                  <Box fontWeight="fontWeightBold" display="inline">
                    promiseQ{" "}
                  </Box>
                  is no ordinary video analytics security provider. <br />
                  We deliver the unique symbiosis of state-of-the-art AI <br />&
                  certified crowdworkers via a global platform.
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12} md={12} justify="center">
                <Grid item xs={12} sm={12}>
                  <Button
                    id="about section redirect"
                    text="Book a meeting"
                    href="/booking"
                    className={classes.btn}
                  />
                  <Button
                    id="contact section redirect"
                    text="Free Trial"
                    href="https://promiseq-production2.web.app/login"
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
                  videoSrc="/promiseq_video_en.mp4"
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
