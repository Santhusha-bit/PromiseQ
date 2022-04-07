import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Button from "components/Button";
import { useEffect, useState } from "react";
import ImageLayout from "@components/ImageLayout";
import { TextField, Typography, Box, Container } from "@material-ui/core";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["response", "common"])),
      // Will be passed to the page component as props
    },
  };
}

const useStyles = makeStyles(() => ({
  labelText: {
    fontSize: 20,
    marginBottom: -30,
    paddingRight: 70,
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
  img: {
    marginLeft: 4,
    paddingLeft: 10,
  },
  btn: {
    marginRight: 60,
  },
  btnOutline: {
    marginRight: 100,
    color: "black",
    backgroundColor: "white",
    outline: "3px solid #FFD42A",
    "&:hover": {
      outline: "3px solid #EBC327",
      backgroundColor: "transparent",
    },
  },
  buttons: {
    marginLeft: 50,
  },
  fullBox: {
    padding: 25,
    marginTop: 50,
    marginBottom: 50,
  },
  thirdBox: {
    paddingLeft: 40,
    textAlign: "center",
  },
  decision: {
    outlineWidth: 4,
    outlineColor: "black",
  },
  deal: {
    marginTop: 20,
  },
  month: {
    marginTop: -20,
    paddingBottom: 30,
  },
  caption: {
    fontSize: 17,
  },
}));

const Response = () => {
  let { t } = useTranslation("response");
  const classes = useStyles();
  const [price, setPrice] = useState(0)

  useEffect(() => {
    setPrice(localStorage.getItem("price"));
  }, []);

  return (
    <div>
      <Typography
        gutterBottom={10}
        variant="h3"
        component="h6"
        align="center"
        className={classes.textMiddle}
      >
        {t("response:response-header")}
      </Typography>
      <Container className={classes.fullBox}>
        <Grid container spacing={2}>
          <Grid
            container
            variant="h6"
            component="h6"
            spacing={2}
            xs={12}
            sm={12}
            md={4}
            className={classes.firstBox}
          >
            <Typography className={classes.labelText}>
              {t("response:response-sub-1-text-1")}
            </Typography>
            <TextField
              id="demo-helper-text-misaligned-no-helper"
              label="Write a number"
              className={classes.textField}
            />

            <Typography className={classes.labelText}>
              {t("response:response-sub-1-text-2")}
            </Typography>
            <TextField
              id="demo-helper-text-misaligned-no-helper"
              label="Write a number"
              className={classes.textField}
            />

            <Typography className={classes.labelText}>
              {t("response:response-sub-1-text-3")}
            </Typography>
            <TextField
              id="demo-helper-text-misaligned-no-helper"
              label="Write a number"
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
          <Grid
            container
            spacing={2}
            xs={12}
            sm={12}
            md={5}
            className={classes.thirdBox}
          >
            <Grid item className={classes.decision}>
              <Typography className={classes.caption} variant="h3">
                <Box fontWeight="fontWeightMedium" fontSize={30}>
                  {t("response:response-sub-2-text-1")}
                  <br />
                  {t("response:response-sub-2-text-2")}
                  <br />
                </Box>
                <Typography className={classes.deal} variant="h3">
                  {price}
                </Typography>
                <br />
                <Typography className={classes.month} variant="h6">
                  {t("response:response-sub-2-text-4")}
                </Typography>
              </Typography>
              <Typography variant="p" className={classes.caption}>
                {t("response:response-sub-2-text-5")}{" "}
                <Box fontWeight="fontWeightMedium" display="inline">
                  {t("response:response-sub-2-text-6")}{" "}
                </Box>
                {t("response:response-sub-2-text-7")}{" "}
                <Box fontWeight="fontWeightMedium" display="inline">
                  {t("response:response-sub-2-text-8")}{" "}
                </Box>{" "}
                {t("response:response-sub-2-text-9")}
                <Box fontWeight="fontWeightMedium" display="inline">
                  {t("response:response-sub-2-text-10")}{" "}
                </Box>
              </Typography>
            </Grid>
            <Grid spacing={2} xs={12} sm={12} md={12}>
              <Grid
                container
                justify="center"
                spacing={2}
                className={classes.buttons}
              >
                <Grid item xs={12} sm={12} md={6}>
                  <Button
                    id="booking section redirect"
                    text={t("response:btn-book")}
                    href="/booking"
                    className={classes.btn}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <Button
                    id="contact section redirect"
                    text={t("response:btn-touch")}
                    href="/contact"
                    className={classes.btnOutline}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Response;
