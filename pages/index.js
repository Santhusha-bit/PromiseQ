import TextLayout from "components/TextLayout";
import ImageLayout from "components/ImageLayout";
import { Grid, Box, Container } from "@material-ui/core";
import VideoLayout from "components/VideoLayout";
import Header from "components/Header";
import BenefitsList from "components/BenefitsList";
import ApplicationsList from "@components/ApplicationsList";
import { makeStyles } from "@material-ui/core/styles";
import Products from "@components/Products";
import Button from "components/Button";
import CompanyLogo from "components/CompanyLogo";
import About from "components/About";
import Contact from "components/Contact";
import HowItWorks from "components/HowItWorks";
import FreeTrial from "components/FreeTrial";
import Affiliate from "components/Affiliate";

const useStyles = makeStyles((theme) => ({
  sectionStyle: {
    minHeight: "40vh",
    paddingBottom: theme.spacing(6),
  },
  sectionColor: {
    minHeight: "40vh",
    paddingBottom: theme.spacing(6),
    paddingTop: "1rem",
    backgroundColor: "#F6F6F6",
  },
  logoSection: {
    padding: "10% 3% 10% 3%",
  },
}));
export default function Home() {
  const classes = useStyles();
  return (
    <>
      <section id="home" className={classes.sectionStyle}>
        <Container maxWidth="lg">
          <Box marginTop={15}>
            <Grid container justify="center" spacing={3}>
              <Grid item xs={12} sm={12} md={6}>
                <TextLayout
                  textHeading="Easily eliminate 99% of false alarms."
                  textParagraph="promiseQ utilizes machine learning recognition and human verification to provide accurate and fast decisions on alarm detections."
                />
                <Button
                  id="home section redirect"
                  text="Learn More!"
                  href="/#contact"
                />
              </Grid>
              <Grid item xs={12} sm={12} md={1}></Grid>
              <Grid item xs={12} sm={12} md={4}>
                <ImageLayout imageRef="/engine.png" desc="AI" />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </section>
      <section id="solution" className={classes.sectionStyle}>
        <Container maxWidth="lg">
          <Box>
            <Grid container justify="center" spacing={3}>
              <Grid item xs={12} sm={12} md={8}>
                <VideoLayout
                  videoSrc="/promiseq_gatecontrol.mp4"
                  videoType="video/mp4"
                  width="100%"
                  height="auto"
                />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </section>
      <section id="howItWorks" className={classes.sectionColor}>
        <Container maxWidth="lg">
          <Box>
            <HowItWorks />
          </Box>
        </Container>
      </section>
      <section id="freeTrial" className={classes.sectionStyle}>
        <Container maxWidth="lg">
          <Box>
            <FreeTrial />
          </Box>
        </Container>
      </section>
      <section id="affiliate" className={classes.sectionColor}>
        <Container maxWidth="lg">
          <Box>
            <Affiliate />
          </Box>
        </Container>
      </section>
      <Container maxWidth="lg">
        <Box>
          <About />
        </Box>
      </Container>
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
