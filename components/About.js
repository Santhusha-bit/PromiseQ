import Header from "components/Header";
import TextLayout from "components/TextLayout";
import ImageLayout from "components/ImageLayout";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Hidden } from "@material-ui/core";
import Button from "components/Button";
import { useTranslation } from "next-translate/useTranslation";

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
  let { t } = useTranslation();

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
                {t("common:about-header-1")}{" "}
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
                {t("common:about-text-1")}
              </Typography>
              <Typography gutterBottom variant="body1">
                {t("common:about-text-2")}
                <Box fontWeight="fontWeightBold" display="inline">
                  {" "}
                  {t("common:about-text-3")}{" "}
                </Box>
                {t("common:about-text-4")}
                <Box fontWeight="fontWeightBold" display="inline">
                  {" "}
                  {t("common:about-text-5")}{" "}
                </Box>
              </Typography>
              <Typography gutterBottom variant="body1">
                {t("common:about-text-6")}
                <Box fontWeight="fontWeightBold" display="inline">
                  {" "}
                  {t("common:about-text-7")}{" "}
                </Box>
              </Typography>
              <Typography gutterBottom variant="body1">
                {t("common:about-text-8")}
                <Box fontWeight="fontWeightBold" display="inline">
                  {" "}
                  {t("common:about-text-9")}{" "}
                </Box>
              </Typography>
            </Grid>
            <Grid container sm={12} justify="center">
              <Button
                id="about section redirect"
                text={t("common:btn-touch")}
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
