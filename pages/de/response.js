import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Button from "components/Button";
import { useEffect, useState } from "react";
import ImageLayout from "@components/ImageLayout";
import { TextField, Typography, Box, Container } from "@material-ui/core";

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
  const classes = useStyles();
  const [price, setPrice] = useState(0);

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
        ROI Rechner
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
              Alarme pro Monat
            </Typography>
            <TextField
              id="demo-helper-text-misaligned-no-helper"
              label="Write a number"
              className={classes.textField}
            />

            <Typography className={classes.labelText}>
              Anzahl Mitarbeiter pro Schicht
            </Typography>
            <TextField
              id="demo-helper-text-misaligned-no-helper"
              label="Write a number"
              className={classes.textField}
            />

            <Typography className={classes.labelText}>
              Anzahl der Kameras
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
                  Mit promiseQ
                  <br />
                  sparen Sie:
                  <br />
                </Box>
                <Typography className={classes.deal} variant="h3">
                  {price} $
                </Typography>
                <br />
                <Typography className={classes.month} variant="h6">
                  pro Monat
                </Typography>
              </Typography>
              <Typography variant="p" className={classes.caption}>
                Wenn Sie mehr erfahren möchten,{" "}
                <Box fontWeight="fontWeightMedium" display="inline">
                  vereinbaren Sie einen Termin{" "}
                </Box>
                mit uns. Wir stellen Ihnen{" "}
                <Box fontWeight="fontWeightMedium" display="inline">
                  neue und effektive KI-Technologien{" "}
                </Box>{" "}
                vor und bieten Ihnen eine
                <Box fontWeight="fontWeightMedium" display="inline">
                  kostenlose dreißigtägige Testphase!{" "}
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
                    text="Termin buchen"
                    href="/booking"
                    className={classes.btn}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <Button
                    id="contact section redirect"
                    text="Kontaktieren Sie uns"
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
