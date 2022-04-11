import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  Grid,
  Link,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Button from "components/Button";

import Header from "./Header";

const useStyles = makeStyles(() => ({
  textMiddle: {
    marginBottom: 50,
    marginTop: 20,
  },
  img_1: {
    display: "block",
    margin: "0 auto",
    marginBottom: 40,
  },
  img_2: {
    display: "block",
    margin: "0 auto",
    marginTop: 20,
  },
  img_3: {
    display: "block",
    margin: "0 auto",
    marginBottom: 20,
  },
  img: {
    display: "block",
    margin: "0 auto",
  },
  container: {
    textAlign: "center",
  },
}));

const Privacy = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid className={classes.container}>
        <Header title="Privacy & Security" align="center" />
        <Typography
          variant="h5"
          component="h6"
          align="center"
          className={classes.textMiddle}
        >
          We design our products & processes according to the highest data
          protection and market standards!
        </Typography>

        <Box display={{ xs: "none", sm: "block" }}>
          <Grid container spacing={2}>
            <Grid container item sm={12} spacing={3}>
              <Grid item sm={4}>
                <img
                  src="/data_protection.png"
                  width="40%"
                  height="auto"
                  object-fit="fill"
                  className={classes.img_1}
                />
              </Grid>
              <Grid item sm={4}>
                <img
                  src="/data_transfer.png"
                  width="50%"
                  height="auto"
                  object-fit="fill"
                  className={classes.img_2}
                />
              </Grid>
              <Grid item sm={4}>
                <img
                  src="/insurance_protection.png"
                  width="45%"
                  height="auto"
                  object-fit="fill"
                  className={classes.img_3}
                />
              </Grid>
            </Grid>
            <Grid container item sm={12} spacing={3}>
              <Grid item sm={4}>
                <Typography variant="h6" component="h6" align="center">
                  Highest data protection
                </Typography>
              </Grid>
              <Grid item sm={4}>
                <Typography variant="h6" component="h6" align="center">
                  Data transfer VDS & DIN EN compliant
                </Typography>
              </Grid>
              <Grid item sm={4}>
                <Typography variant="h6" component="h6" align="center">
                  Highest insurance protection
                </Typography>
              </Grid>
            </Grid>
            <Grid container item sm={12} spacing={3}>
              <Grid item sm={4}>
                <List>
                  <ListItem>
                    <ListItemText
                      align="center"
                      primary="After intensive DSGVO audits with our partner 
and DSB DataGuard, we work strictly 
according to the privacy by design concept. 
Your data is safe!"
                    />
                  </ListItem>
                  <Link href="https://www.dataguard.de/">
                    <img
                      src="/data_guard.png"
                      width="17%"
                      height="auto"
                      textAlign="center"
                      object-fit="fill"
                      className={classes.img}
                    />
                  </Link>
                </List>
              </Grid>
              <Grid item sm={4}>
                <List>
                  <ListItem>
                    <ListItemText
                      align="center"
                      primary="We provide you with all the necessary time stamps 
and signal information as metadata to help you 
meet your certification for e.g. DIN EN 50518 requirements with ease."
                    />
                  </ListItem>
                  <img
                    src="/VdS.png"
                    width="17%"
                    height="auto"
                    textAlign="center"
                    object-fit="fill"
                    className={classes.img}
                  />
                </List>
              </Grid>
              <Grid item sm={4}>
                <List>
                  <ListItem>
                    <ListItemText
                      align="center"
                      primary="Unique in the video analytics industry: 
The exclusive promiseQ Threat Detect total 
package grants you 100% insurance protection, 
significantly above the recommended 
industry standards."
                    />
                  </ListItem>
                  <ListItem>
                    <Link href="https://www.bdj.de/atlas/">
                      <img
                        src="/atlas.png"
                        width="40%"
                        height="auto"
                        object-fit="fill"
                        textAlign="center"
                        className={classes.img}
                      />
                    </Link>
                    <img
                      src="/mit.png"
                      width="20%"
                      height="auto"
                      object-fit="fill"
                      textAlign="center"
                      className={classes.img}
                    />
                  </ListItem>
                </List>
              </Grid>
            </Grid>
            <Grid container item sm={12} spacing={3} justify="center">
              <Button
                id="about section redirect"
                text="ROI calculator"
                href="/roi"
              />
            </Grid>
          </Grid>
        </Box>
      </Grid>

      <Box display={{ xs: "block", sm: "none" }}>
        <Grid container spacing={1}>
          <Grid container item sm={12} spacing={3}>
            <Grid item sm={4}>
              <Typography variant="h6" component="h6" align="center">
                Highest data protection
              </Typography>
            </Grid>
            <Grid item sm={4}>
              <List>
                <ListItem>
                  <ListItemText
                    align="center"
                    primary="After intensive DSGVO audits with our partner 
and DSB DataGuard, we work strictly 
according to the privacy by design concept. 
Your data is safe!"
                  />
                </ListItem>
                <img
                  src="/data_guard.png"
                  width="17%"
                  height="auto"
                  object-fit="fill"
                  textAlign="center"
                  className={classes.img}
                />
              </List>
            </Grid>
          </Grid>
          <Grid container item sm={12} spacing={3}>
            <Grid item sm={4}>
              <Typography variant="h6" component="h6" align="center">
                Data transfer VDS & DIN EN compliant
              </Typography>
            </Grid>

            <Grid item sm={4}>
              <List>
                <ListItem>
                  <ListItemText
                    align="center"
                    primary="We provide you with all the necessary time stamps 
and signal information as metadata to help you 
meet your certification for e.g. DIN EN 50518 requirements with ease."
                  />
                </ListItem>
                <img
                  src="/VdS.png"
                  width="17%"
                  height="auto"
                  textAlign="center"
                  object-fit="fill"
                  className={classes.img}
                />
              </List>
            </Grid>
          </Grid>
          <Grid container item sm={12} spacing={3}>
            <Grid item sm={4}>
              <img
                src="/corporate_security.png"
                width="50%"
                textAlign="center"
                height="auto"
                object-fit="fill"
                className={classes.img}
              />
            </Grid>
            <Grid item sm={4}>
              <Typography variant="h6" component="h6" align="center">
                Highest insurance protection
              </Typography>
            </Grid>
            <Grid item sm={4}>
              <List>
                <ListItem>
                  <ListItemText
                    align="center"
                    primary="Unique in the video analytics industry: 
The exclusive promiseQ Threat Detect total 
package grants you 100% insurance protection, 
significantly above the recommended 
industry standards."
                  />
                </ListItem>
                <img
                  src="/atlas.png"
                  width="17%"
                  height="auto"
                  textAlign="center"
                  object-fit="fill"
                  className={classes.img}
                />
                <img
                  src="/mit.png"
                  width="17%"
                  textAlign="center"
                  height="auto"
                  object-fit="fill"
                  className={classes.img}
                />
              </List>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Privacy;
