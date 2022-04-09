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
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "common"])),
      // Will be passed to the page component as props
    },
  };
}

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
    color: "black",
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
  },
}));

export default function Home() {
  const classes = useStyles();
  let { t } = useTranslation();

  return (
    <>
      <section id="home" className={classes.fullBox}>
        <Container maxWidth="lg">
          <Grid container justify="center" spacing={3}>
            <Grid item xs={12} sm={12} md={5}>
              <Typography gutterBottom variant="h3">
                {t("common:home-header")}
              </Typography>
              <Grid item className={classes.text}>
                <Typography gutterBottom variant="body1">
                  <Box fontWeight="fontWeightBold" display="inline">
                    {t("common:home-text-1")}{" "}
                  </Box>
                  {t("common:home-text-2")} <br />
                  {t("common:home-text-3")} <br />
                  {t("common:home-text-4")}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12} md={12} className={classes.btn}>
                <Grid item xs={12} sm={12}>
                  <Button
                    id="about section redirect"
                    text={t("common:btn-book")}
                    href="/booking"
                    className={classes.btn}
                  />
                  <Button
                    id="contact section redirect"
                    text={t("common:btn-trial")}
                    href="/contact"
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
