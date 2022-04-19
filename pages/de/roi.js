import Grid from "@material-ui/core/Grid";
import { useState } from "react";
import Typography from "@material-ui/core/Typography";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Button from "components/Button";
import ImageLayout from "@components/ImageLayout";
import { TextField } from "@material-ui/core";

import router from "next/router";

const useStyles = makeStyles(() => ({
  labelText: {
    fontSize: 20,
    marginBottom: 20,
  },
  textField: {
    marginTop: -30,
    marginBottom: 20,
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
  buttons: {
    marginTop: 50,
  },
  content: {
    marginTop: 25,
  },
  fullBox: {
    paddingTop: 25,
    marginBottom: 70,
  },
  middleBox: {
    marginBottom: 20,
    marginLeft: 0,
    paddingTop: 20,
  },
  firstBox: {
    paddingLeft: 20,
    marginBottom: 20,
  },
  calBtn: {
    display: "block",
    margin: "0 auto",
  },
}));

const ROI = () => {
  const classes = useStyles();
  const [volumePerMonth, setVolumePerMonth] = useState();
  const [operatorCount, setOperatorCount] = useState();
  const [numberOfCameras, setNumberOfCameras] = useState();
  const PROMISEQ_COST_PER_CAMERA = 5;
  const OPERATOR_SALARY = 25;
  const FALSE_ALARM_REDUCTION = 95;
  const ALARM_PER_MINUTE = 3;

  const calculateROI = () => {
    let time =
      ((FALSE_ALARM_REDUCTION / 100) * parseInt(volumePerMonth)) /
      (ALARM_PER_MINUTE * 60);
    time = time.toFixed(2);

    let price =
      OPERATOR_SALARY * time -
      parseInt(numberOfCameras) * PROMISEQ_COST_PER_CAMERA;
    price = price.toFixed(0);

    localStorage.setItem("price", price);
    localStorage.setItem("time", time);

    router.push("/de/response");
  };

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
          <Grid container xs={12} sm={12} md={6} className={classes.firstBox}>
            <Typography variant="h5" className={classes.first}>
              Finden Sie heraus wieviel Sie <br />
              mit{" "}
              <Typography
                variant="h5"
                style={{ color: "#FFD42A" }}
                display="inline"
              >
                {" "}
                promiseQ!
              </Typography>{" "}
              sparen können!
            </Typography>
            <Typography variant="h6" className={classes.second}>
              Nutzen Sie unseren ROI-Rechner, um in wenigen
              <br />
              Schritten herauszufinden, wie viel Zeit und Geld
              <br /> Sie mit promiseQ monatlich sparen können:
            </Typography>
            <Typography variant="body" className={classes.third}>
              1. Geben Sie die Anzahl der monatlichen Alarme und
              <br /> Anzahl der Kameras an
              <br />
              2. Geben Sie die Anzahl der Leitstellenmitarbeiter ein
              <br />
              3. Ermitteln Sie Einsparungen und Wachstumspotenziale
              <br /> für Ihr Unternehmen!
            </Typography>
          </Grid>
          <Grid
            container
            variant="h6"
            component="h6"
            xs={12}
            sm={6}
            md={3}
            className={classes.middleBox}
          >
            <Typography className={classes.labelText}>
              Alarme pro Monat
            </Typography>
            <TextField
              id="alarmVolume"
              label="Eine Zahl schreiben"
              className={classes.textField}
              onChange={(e) => setVolumePerMonth(e.target.value)}
            />
            <Typography className={classes.labelText}>
              Anzahl Mitarbeiter pro Schicht
            </Typography>
            <TextField
              id="operatorCount"
              label="Eine Zahl schreiben"
              className={classes.textField}
              onChange={(e) => setOperatorCount(e.target.value)}
            />
            <Typography className={classes.labelText}>
              Anzahl der Kameras
            </Typography>
            <TextField
              id="numOfCameras"
              label="Eine Zahl schreiben"
              className={classes.textField}
              onChange={(e) => setNumberOfCameras(e.target.value)}
            />
            <Grid container sm={12} justify="center" className={classes.btn}>
              <Button
                id="roi section redirect"
                text="Calculate"
                className={classes.calBtn}
                onClick={calculateROI}
                disabled={!volumePerMonth || !operatorCount || !numberOfCameras}
              />
            </Grid>
          </Grid>

          <Grid container xs={12} sm={5} md={3} className={classes.img}>
            <ImageLayout
              imageRef="/roi.png"
              desc="ROI Calculating"
              width="100%"
              height="auto"
              object-fit="fill"
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ROI;
