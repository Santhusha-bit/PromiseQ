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

    router.push("/response");
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
        ROI Calculator
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
              See how much you <br />
              save with{" "}
              <Typography
                variant="h5"
                style={{ color: "#FFD42A" }}
                display="inline"
              >
                {" "}
                promiseQ!
              </Typography>{" "}
            </Typography>
            <Typography variant="h6" className={classes.second}>
              Use our ROI calculator to figure out how much time
              <br />
              and money you can save monthly with
              <br /> promiseQ in a few simple steps:
            </Typography>
            <Typography variant="body" className={classes.third}>
              1. Number of monthly alarms and cameras
              <br />
              2. Input the operator salary and number of operators
              <br />
              3. Find out savings and growth potential for your business!
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
              Alarm volume per month
            </Typography>
            <TextField
              id="alarmVolume"
              label="Write a number"
              className={classes.textField}
              onChange={(e) => setVolumePerMonth(e.target.value)}
            />

            <Typography className={classes.labelText}>
              Operator count in SOC per shift
            </Typography>
            <TextField
              id="operatorCount"
              label="Write a number"
              className={classes.textField}
              onChange={(e) => setOperatorCount(e.target.value)}
            />

            <Typography className={classes.labelText}>
              Number of cameras
            </Typography>
            <TextField
              id="numOfCameras"
              label="Write a number"
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
