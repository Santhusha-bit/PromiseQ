import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Button from "components/Button";
import { useEffect, useState } from "react";
import ImageLayout from "@components/ImageLayout";
import { TextField, Typography, Box, Container } from "@material-ui/core";
import { Link } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  labelText: {
    fontSize: 20,
    marginBottom: -10,
  },
  textField: {
    marginTop: 0,
    marginBottom: 30,
  },
  textMiddle: {
    marginBottom: 0,
    marginTop: 190,
  },
  main: {
    marginTop: 30,
  },
  btnOutline: {
    marginTop: 10,
    marginBottom: 10,
    color: "black",
    backgroundColor: "white",
    outline: "3px solid #FFD42A",
    "&:hover": {
      outline: "3px solid #EBC327",
      backgroundColor: "transparent",
    },
  },
  btn: {
    marginTop: 10,
    marginBottom: 10,
  },
  fullBox: {
    padding: 25,
    marginTop: 0,
    marginBottom: 0,
  },
  thirdBox: {
    paddingLeft: 40,
    textAlign: "center",
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
  img: {
    display: "block",
    margin: "0 auto",
    padding: 0,
    marginBottom: 40,
  },
}));

const Response = () => {
  const classes = useStyles();
  const [price, setPrice] = useState(0);
  const [time, setTime] = useState(0);

  useEffect(() => {
    setPrice(localStorage.getItem("price"));
  }, []);

  useEffect(() => {
    setTime(localStorage.getItem("time"));
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
        ROI Calculator
      </Typography>

      <Container>
        <Typography
          variant="h5"
          component="h6"
          align="left"
          style={{ color: "#D2D2D2" }}
        >
          ROI Calculator <br />
        </Typography>

        <Link href="/roi" style={{ textDecoration: "none" }}>
          <Typography
            variant="h4"
            style={{ color: "#FFD42A" }}
            display="inline"
          >
            ⇐
          </Typography>
          <Typography
            variant="h5"
            style={{ color: "#FFD42A" }}
            display="inline"
          >
            {"   "}
            Go back
          </Typography>
        </Link>
      </Container>

      <Container className={classes.fullBox}>
        <Grid container>
          <Grid
            container
            variant="h6"
            component="h6"
            xs={12}
            sm={6}
            md={3}
            className={classes.firstBox}
          >
            <Typography className={classes.labelText}>
              Alarm volume per month
            </Typography>
            <TextField
              id="demo-helper-text-misaligned-no-helper"
              label="Write a number"
              className={classes.textField}
            />

            <Typography className={classes.labelText}>
              Operator count in SOC per shift
            </Typography>
            <TextField
              id="demo-helper-text-misaligned-no-helper"
              label="Write a number"
              className={classes.textField}
            />

            <Typography className={classes.labelText}>
              Number of cameras
            </Typography>
            <TextField
              id="demo-helper-text-misaligned-no-helper"
              label="Write a number"
              className={classes.textField}
            />
          </Grid>

          <Grid container xs={12} sm={6} md={4} className={classes.img}>
            <ImageLayout
              imageRef="/roi.png"
              desc="ROI Calculating"
              width="100%"
              height="auto"
              object-fit="fill"
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
                  With promiseQ
                  <br />
                  you save:
                  <br />
                </Box>
                <Typography className={classes.deal} variant="h3">
                  {time} hrs
                </Typography>
                <Typography className={classes.deal} variant="h3">
                  {price} $
                </Typography>
                <br />
                <Typography className={classes.month} variant="h6">
                  per month
                </Typography>
              </Typography>
              <Typography variant="p" className={classes.caption}>
                To learn more,{" "}
                <Box fontWeight="fontWeightMedium" display="inline">
                  book a meeting{" "}
                </Box>
                with us and we will provide you with{" "}
                <Box fontWeight="fontWeightMedium" display="inline">
                  new and effective AI technologies{" "}
                </Box>
                and give you{" "}
                <Box fontWeight="fontWeightMedium" display="inline">
                  free-thirty-day trial!{" "}
                </Box>
              </Typography>
            </Grid>
            <Grid xs={12} sm={12} md={12}>
              <Grid container justify="center">
                <Grid item xs={12} sm={6} md={6}>
                  <Button
                    id="booking section redirect"
                    text="Book a meeting"
                    href="/booking"
                    className={classes.btn}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <Button
                    id="contact section redirect"
                    text="Get in Touch"
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
