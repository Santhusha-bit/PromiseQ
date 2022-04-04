import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Button from "components/Button";
import HowItWorks from "./HowItWorks";
import useTranslation from "next-translate/useTranslation";
import Header from "./Header";

const useStyles = makeStyles(() => ({
  container: {
    paddingTop: 1,
    paddingBottom: 30,
  },
  textMiddle: {
    marginBottom: 60,
    marginTop: 60,
  },
  how1: {
    paddingLeft: 40,
    paddingTop: 40,
  },
  how2: {
    paddingTop: 70,
  },
  main: {
    marginTop: 30,
  },
  btn: {
    marginRight: 120,
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
  buttons: {
    marginTop: 50,
  },
  content: {
    marginTop: 25,
  },
}));

const FreeTrial = () => {
  const classes = useStyles();
  let { t } = useTranslation();

  return (
    <div>
      <Grid className={classes.container}>
        <Header title={t("common:freetrial-header")} />
        <Grid container spacing={2}>
          <Grid container xs={12} sm={12} md={6} className={classes.trial}>
            <Typography
              gutterBottom={10}
              variant="h5"
              component="h6"
              className={classes.textMiddle}
            >
              {t("common:trial-header-1")}
            </Typography>
            <Grid spacing={2} xs={12} sm={12} md={7}>
              <Typography gutterBottom variant="h6" component="h6">
                {t("common:trial-header-2")}
              </Typography>
              <Typography gutterBottom variant="body1" className={classes.main}>
                {t("common:trial-text")}
              </Typography>
            </Grid>
            <Grid spacing={2} xs={12} sm={12} md={12}>
              <Grid
                container
                justify="center"
                spacing={3}
                className={classes.buttons}
              >
                <Grid item xs={12} sm={12} md={6}>
                  <Button
                    id="about section redirect"
                    text={t("common:btn-book")}
                    href="/booking"
                    className={classes.btn}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <Button
                    id="contact section redirect"
                    text={t("common:btn-trial")}
                    href="/contact"
                    className={classes.btnOutline}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container xs={12} sm={12} md={6} className={classes.how1}>
            <Typography variant="h6" component="h6">
              {t("common:how-header")}{" "}
              <Typography
                variant="h6"
                style={{ color: "#FFD42A" }}
                display="inline"
              >
                {t("common:how-header-item-1")}{" "}
              </Typography>
            </Typography>
            <Typography
              gutterBottom
              variant="body1"
              className={classes.content}
            >
              {t("common:how-text-1")}
            </Typography>
            <Typography variant="h6" component="h6" className={classes.how2}>
              {t("common:how-header")}{" "}
              <Typography
                variant="h6"
                style={{ color: "#FFD42A" }}
                display="inline"
              >
                {t("common:how-header-item-2")}{" "}
              </Typography>
            </Typography>
            <Typography variant="body1" className={classes.content}>
              {t("common:how-text-2")}
            </Typography>
            <Typography gutterBottom variant="body1">
              {t("common:how-text-3")}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default FreeTrial;
