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
  img: {
    marginLeft: 10,
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
    marginBottom: 20,
    marginLeft: 10,
    paddingTop: 20,
  },
  firstBox: {
    paddingLeft: 20,
    marginBottom: 20,
  },
}));

const ROI = () => {
  const classes = useStyles();
  const [volumePerMonth, setVolumePerMonth] = useState();
  const [operatorCount, setOperatorCount] = useState();
  const [numberOfCameras, setNumberOfCameras] = useState();
  const PROMISEQ_COST_PER_CAMERA = 5;
  const OPERATOR_SALARY = 25;

  const calculateROI = () => {
    let price =
      OPERATOR_SALARY * parseInt(operatorCount) -
      parseInt(numberOfCameras) * PROMISEQ_COST_PER_CAMERA;

    localStorage.setItem("price", price);

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
          <Grid
            container
            spacing={2}
            xs={12}
            sm={12}
            md={6}
            className={classes.firstBox}
          >
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
              1. Geben Sie die Anzahl der monatlichen Alarme und Anzahl der
              <br />
              Kameras an
              <br />
              2. Geben Sie das durchschn. Gehalt und die Anzahl der
              <br />
              Leitstellenmitarbeiter ein
              <br />
              3. Ermitteln Sie Einsparungen und Wachstumspotenziale für Ihr
              <br />
              Unternehmen!
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
            text="Calculate"
            onClick={calculateROI}
            disabled={!volumePerMonth || !operatorCount || !numberOfCameras}
          />
        </Grid>
      </Container>
    </div>
  );
};

export default ROI;
