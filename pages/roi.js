import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Button from "components/Button";
import ImageLayout from "@components/ImageLayout";
import { List, ListItem, ListItemText } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["roi", "common"])),
      // Will be passed to the page component as props
    },
  };
}

const useStyles = makeStyles(() => ({
  labelText: {
    fontSize: 20,
    marginBottom: -20,
  },
  textField: {
    marginTop: -30,
  },
  textMiddle: {
    marginBottom: 60,
    marginTop: 190,
  },
  main: {
    marginTop: 30,
  },
  btn: {
    marginTop: 0,
    marginBottom: 30,
  },
  img: {
    marginLeft: 54,
    paddingLeft: 10,
  },
  buttons: {
    marginTop: 50,
  },
  content: {
    marginTop: 25,
  },
  fullBox: {
    paddingTop: 25,
  },
  middleBox: {
    marginLeft: -30,
  },
  firstBox: {
    paddingLeft: 20,
  },
}));

const ROI = () => {
  let { t } = useTranslation("roi");
  const classes = useStyles();

  return (
    <div>
      <Typography
        gutterBottom={10}
        variant="h3"
        component="h6"
        align="center"
        className={classes.textMiddle}
      >
        {t("roi:roi-header")}
      </Typography>
      <Container className={classes.fullBox}>
        <Grid container spacing={2}>
          <Grid
            container
            spacing={2}
            xs={12}
            sm={12}
            md={6}
            className={classes.firstBox}
          >
            <Typography variant="h5" className={classes.first}>
              {t("roi:roi-sub-1-text-1")} <br />
              {t("roi:roi-sub-1-text-2")}{" "}
              <Typography
                variant="h5"
                style={{ color: "#FFD42A" }}
                display="inline"
              >
                {" "}
                {t("roi:roi-sub-1-text-3")}
              </Typography>{" "}
              {t("roi:roi-sub-1-text-2B")}
            </Typography>
            <Typography variant="h6" className={classes.second}>
              {t("roi:roi-sub-1-text-4")}
              <br />
              {t("roi:roi-sub-1-text-5")}
              <br /> {t("roi:roi-sub-1-text-6")}
            </Typography>
            <Typography variant="body" className={classes.third}>
              {t("roi:roi-sub-1-text-7")}
              <br />

              {t("roi:roi-sub-1-text-8")}
              <br />

              {t("roi:roi-sub-1-text-9")}
            </Typography>
          </Grid>
          <Grid
            container
            variant="h6"
            component="h6"
            spacing={2}
            xs={12}
            sm={12}
            md={3}
            className={classes.middleBox}
          >
            <Typography className={classes.labelText}>
              {t("roi:roi-sub-2-text-1")}
            </Typography>
            <TextField
              id="alarmVolume"
              label={t("roi:write")}
              className={classes.textField}
            />

            <Typography className={classes.labelText}>
              {t("roi:roi-sub-2-text-2")}
            </Typography>
            <TextField
              id="operatorCount"
              label={t("roi:write")}
              className={classes.textField}
            />

            <Typography className={classes.labelText}>
              {t("roi:roi-sub-2-text-3")}
            </Typography>
            <TextField
              id="numOfCameras"
              label={t("roi:write")}
              className={classes.textField}
            />
          </Grid>

          <Grid container xs={12} sm={12} md={3} className={classes.img}>
            <ImageLayout
              imageRef="/roi.png"
              desc="ROI Calculating"
              width="100%"
            />
          </Grid>
        </Grid>
        <Grid container sm={12} justify="center" className={classes.btn}>
          <Button
            id="roi section redirect"
            text={t("roi:btn-calc")}
            href="/response"
          />
        </Grid>
      </Container>
    </div>
  );
};

export default ROI;
