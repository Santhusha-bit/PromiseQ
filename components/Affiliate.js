import {
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Button from "components/Button";
import CheckIcon from "@material-ui/icons/Check";
import ImageLayout from "components/ImageLayout";

import Header from "./Header";

const useStyles = makeStyles(() => ({
  textMiddle: {
    marginBottom: 60,
    marginTop: 60,
  },
  img: {
    display: "block",
    margin: "0 auto",
  },
  check: {
    color: "#FFD42A",
    marginLeft: 30,
  },
  check2: {
    color: "#FFD42A",
  },
  container: {
    paddingTop: 1,
    textAlign: "center",
  },
  topic: {
    paddingRight: 35,
    paddingLeft: 35,
  },
  points: { paddingRight: 35, paddingLeft: 35 },
}));

const Affiliate = () => {
  const classes = useStyles();

  return (
    <div>
      <Grid className={classes.container}>
        <Header title="Affiliate Program" />
        <Typography
          gutterBottom={10}
          variant="h4"
          component="h6"
          align="center"
          className={classes.textMiddle}
        ></Typography>

        <Box display={{ xs: "none", sm: "block" }}>
          <Grid container spacing={2}>
            <Grid container item sm={12} spacing={3}>
              <Grid item sm={4}>
                <img
                  src="/Integrator.png"
                  width="40%"
                  height="auto"
                  object-fit="fill"
                  className={classes.img}
                />
              </Grid>
              <Grid item sm={4}>
                <img
                  src="/monitoring_center.png"
                  width="35%"
                  height="auto"
                  object-fit="fill"
                  className={classes.img}
                />
              </Grid>
              <Grid item sm={4}>
                <img
                  src="/corporate_security.png"
                  width="40%"
                  height="auto"
                  object-fit="fill"
                  className={classes.img}
                />
              </Grid>
            </Grid>
            <Grid container item sm={12} spacing={3}>
              <Grid item sm={4}>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="h6"
                  align="center"
                  className={classes.topic}
                >
                  Revolutionize your security offering to better protect your
                  customers
                </Typography>
              </Grid>
              <Grid item sm={4}>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="h6"
                  align="center"
                  className={classes.topic}
                >
                  Increase the motivation and well-being of your operators.
                  Proactive decisions in the event of real alarms
                </Typography>
              </Grid>
              <Grid item sm={4}>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="h6"
                  align="center"
                  className={classes.topic}
                >
                  Increase your margins with promiseQ as part of your solution
                  portfolio
                </Typography>
              </Grid>
            </Grid>
            <Grid container item sm={12} spacing={3}>
              <Grid item sm={4}>
                <List>
                  <ListItem>
                    <ListItemAvatar>
                      <CheckIcon className={classes.check} />
                    </ListItemAvatar>
                    <ListItemText
                      className={classes.points}
                      primary="Use latest technology to increase customer satisfaction"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <CheckIcon className={classes.check} />
                    </ListItemAvatar>
                    <ListItemText
                      className={classes.points}
                      primary="Automated optimization, updates, health checks of your cameras"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <CheckIcon className={classes.check} />
                    </ListItemAvatar>
                    <ListItemText
                      className={classes.points}
                      primary="More capable SLAs & Improve overall loss prevention standards"
                    />
                  </ListItem>
                </List>
              </Grid>
              <Grid item sm={4}>
                <List>
                  <ListItem>
                    <ListItemAvatar>
                      <CheckIcon className={classes.check} />
                    </ListItemAvatar>
                    <ListItemText
                      className={classes.points}
                      primary="Increased motivation in security operating center and reduction of attention errors."
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <CheckIcon className={classes.check} />
                    </ListItemAvatar>
                    <ListItemText
                      className={classes.points}
                      primary="95% less burden on your operators with false alarms and more time for handling real alarms"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <CheckIcon className={classes.check} />
                    </ListItemAvatar>
                    <ListItemText
                      className={classes.points}
                      primary="Reduction of the intervention time for real alarms"
                    />
                  </ListItem>
                </List>
              </Grid>
              <Grid item sm={4}>
                <List>
                  <ListItem>
                    <ListItemAvatar>
                      <CheckIcon className={classes.check} />
                    </ListItemAvatar>
                    <ListItemText
                      className={classes.points}
                      primary="Reduce your own false alarm management costs"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <CheckIcon className={classes.check} />
                    </ListItemAvatar>
                    <ListItemText
                      className={classes.points}
                      primary="Benefit from the constantly improving promiseQ Threat Detect"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <CheckIcon className={classes.check} />
                    </ListItemAvatar>
                    <ListItemText
                      className={classes.points}
                      primary="More camera connections and customers without fixed costs due to additional personnel"
                    />
                  </ListItem>
                </List>
              </Grid>
            </Grid>
            <Grid container item sm={12} spacing={3} justify="center">
              <Button
                id="about section redirect"
                text="ROI Calculator"
                href="/roi"
              />
            </Grid>
          </Grid>
        </Box>

        <Box display={{ xs: "block", sm: "none" }}>
          <Grid container spacing={1}>
            <Grid container item sm={12} spacing={3}>
              <Grid item sm={4}>
                <img
                  src="/Integrator.png"
                  width="50%"
                  height="auto"
                  object-fit="fill"
                  className={classes.img}
                />
              </Grid>
              <Grid item sm={4}>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="h6"
                  align="center"
                >
                  Increase the motivation and well-being of your operators.
                  Proactive decisions in the event of real alarms
                </Typography>
              </Grid>
              <Grid item sm={4}>
                <List>
                  <ListItem>
                    <ListItemAvatar>
                      <CheckIcon className={classes.check2} />
                    </ListItemAvatar>
                    <ListItemText primary="Use latest technology to increase customer satisfaction" />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <CheckIcon className={classes.check2} />
                    </ListItemAvatar>
                    <ListItemText primary="Automated optimization, updates, health checks of your cameras" />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <CheckIcon className={classes.check2} />
                    </ListItemAvatar>
                    <ListItemText primary="More capable SLAs & Improve overall loss prevention standards" />
                  </ListItem>
                </List>
              </Grid>
            </Grid>
            <Grid container item sm={12} spacing={3}>
              <Grid item sm={4}>
                <img
                  src={"/monitoring_center.png"}
                  width="45%"
                  height="auto"
                  object-fit="fill"
                  className={classes.img}
                />
              </Grid>

              <Grid item sm={4}>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="h6"
                  align="center"
                >
                  Revolutionize your security offering to better protect your
                  customers
                </Typography>
              </Grid>

              <Grid item sm={4}>
                <List>
                  <ListItem>
                    <ListItemAvatar>
                      <CheckIcon className={classes.check2} />
                    </ListItemAvatar>
                    <ListItemText primary="Increased motivation in security operating center and reduction of attention errors." />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <CheckIcon className={classes.check2} />
                    </ListItemAvatar>
                    <ListItemText primary="95% less burden on your operators with false alarms and more time for handling real alarms" />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <CheckIcon className={classes.check2} />
                    </ListItemAvatar>
                    <ListItemText primary="Reduction of the intervention time for real alarms" />
                  </ListItem>
                </List>
              </Grid>
            </Grid>
            <Grid container item sm={12} spacing={3}>
              <Grid item sm={4}>
                <img
                  src="/corporate_security.png"
                  width="50%"
                  height="auto"
                  object-fit="fill"
                  className={classes.img}
                />
              </Grid>
              <Grid item sm={4}>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="h6"
                  align="center"
                >
                  Increase your margins with promiseQ as part of your solution
                  portfolio
                </Typography>
              </Grid>
              <Grid item sm={4}>
                <List>
                  <ListItem>
                    <ListItemAvatar>
                      <CheckIcon className={classes.check2} />
                    </ListItemAvatar>
                    <ListItemText primary="Reduce your own false alarm management costs" />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <CheckIcon className={classes.check2} />
                    </ListItemAvatar>
                    <ListItemText primary="Benefit from the constantly improving promiseQ Threat Detect" />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <CheckIcon className={classes.check2} />
                    </ListItemAvatar>
                    <ListItemText primary="More camera connections and customers without fixed costs due to additional personnel" />
                  </ListItem>
                </List>
              </Grid>
            </Grid>
            <Grid container item sm={12} spacing={3} justify="center">
              <Button
                id="roi section redirect"
                text="ROI Calculator"
                href="/roi"
              />
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </div>
  );
};

export default Affiliate;
