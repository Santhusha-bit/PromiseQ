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

const useStyles = makeStyles(() => ({
  textMiddle: {
    marginBottom: 60,
    marginTop: 60,
  },
  img: {
    display: "block",
    margin: "0 auto",
  },
}));

const Affiliate = () => {
  const classes = useStyles();

  return (
    <div>
      <Typography
        gutterBottom={10}
        variant="h5"
        component="h6"
        align="center"
        className={classes.textMiddle}
      >
        Affiliate Program
      </Typography>
      <Typography
        gutterBottom={10}
        variant="h4"
        component="h6"
        align="center"
        className={classes.textMiddle}
      >
        Explore how promiseQ can help you to improve your KPIs
      </Typography>

      <Box display={{ xs: "none", sm: "block" }}>
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
              <img
                src={"/monitoring_center.png"}
                width="45%"
                height="auto"
                object-fit="fill"
                className={classes.img}
              />
            </Grid>
            <Grid item sm={4}>
              <img
                src="/corporate_security.png"
                width="50%"
                height="auto"
                object-fit="fill"
                className={classes.img}
              />
            </Grid>
          </Grid>
          <Grid container item sm={12} spacing={3}>
            <Grid item sm={4}>
              <Typography gutterBottom variant="h6" component="h6">
                Improve your margins with promiseQ as part of your solution
                portfolio
              </Typography>
            </Grid>
            <Grid item sm={4}>
              <Typography gutterBottom variant="h6" component="h6">
                Reduce your operating cost through increased operator efficiency
                and easy-to-implement technology
              </Typography>
            </Grid>
            <Grid item sm={4}>
              <Typography gutterBottom variant="h6" component="h6">
                Increase your security levels to better protect what is
                important to you
              </Typography>
            </Grid>
          </Grid>
          <Grid container item sm={12} spacing={3}>
            <Grid item sm={4}>
              <List>
                <ListItem>
                  <ListItemAvatar>
                    <CheckIcon />
                  </ListItemAvatar>
                  <ListItemText primary="Use latest technology to increase customer satisfaction" />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <CheckIcon />
                  </ListItemAvatar>
                  <ListItemText primary="No hardware update required: Improve customer retention offering remote updates" />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <CheckIcon />
                  </ListItemAvatar>
                  <ListItemText primary="Reduce your own cost for false-alarm management" />
                </ListItem>
              </List>
            </Grid>
            <Grid item sm={4}>
              <List>
                <ListItem>
                  <ListItemAvatar>
                    <CheckIcon />
                  </ListItemAvatar>
                  <ListItemText primary="Eliminate 99% of false-alarms before they are reviewed by operators to provide more time to verify and solve true-alarms" />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <CheckIcon />
                  </ListItemAvatar>
                  <ListItemText primary="Increase operator motivation, and efficiency while reducing errors caused by an unwanted influx of false-alarms" />
                </ListItem>
              </List>
            </Grid>
            <Grid item sm={4}>
              <List>
                <ListItem>
                  <ListItemAvatar>
                    <CheckIcon />
                  </ListItemAvatar>
                  <ListItemText primary="Instantly upgrade your existing systems without new hardware through over-the-air software installation" />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <CheckIcon />
                  </ListItemAvatar>
                  <ListItemText primary="Benefit from constantly improving promiseQ engine" />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <CheckIcon />
                  </ListItemAvatar>
                  <ListItemText primary="Reduce time-to-action in case of true-alarms freeing up operator capacities " />
                </ListItem>
              </List>
            </Grid>
          </Grid>
          <Grid container item sm={12} spacing={3} justify="center">
            <Button
              id="about section redirect"
              text="Get in Touch"
              href="/#contact"
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
              <Typography gutterBottom variant="h6" component="h6">
                Reduce your operating cost through increased operator efficiency
                and easy-to-implement technology
              </Typography>
            </Grid>
            <Grid item sm={4}>
              <List>
                <ListItem>
                  <ListItemAvatar>
                    <CheckIcon />
                  </ListItemAvatar>
                  <ListItemText primary="Use latest technology to increase customer satisfaction" />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <CheckIcon />
                  </ListItemAvatar>
                  <ListItemText primary="No hardware update required: Improve customer retention offering remote updates" />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <CheckIcon />
                  </ListItemAvatar>
                  <ListItemText primary="Reduce your own cost for false-alarm management" />
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
              <Typography gutterBottom variant="h6" component="h6">
                Improve your margins with promiseQ as part of your solution
                portfolio
              </Typography>
            </Grid>

            <Grid item sm={4}>
              <List>
                <ListItem>
                  <ListItemAvatar>
                    <CheckIcon />
                  </ListItemAvatar>
                  <ListItemText primary="Eliminate 99% of false-alarms before they are reviewed by operators to provide more time to verify and solve true-alarms" />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <CheckIcon />
                  </ListItemAvatar>
                  <ListItemText primary="Increase operator motivation, and efficiency while reducing errors caused by an unwanted influx of false-alarms" />
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
              <Typography gutterBottom variant="h6" component="h6">
                Increase your security levels to better protect what is
                important to you
              </Typography>
            </Grid>
            <Grid item sm={4}>
              <List>
                <ListItem>
                  <ListItemAvatar>
                    <CheckIcon />
                  </ListItemAvatar>
                  <ListItemText primary="Instantly upgrade your existing systems without new hardware through over-the-air software installation" />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <CheckIcon />
                  </ListItemAvatar>
                  <ListItemText primary="Benefit from constantly improving promiseQ engine" />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <CheckIcon />
                  </ListItemAvatar>
                  <ListItemText primary="Reduce time-to-action in case of true-alarms freeing up operator capacities " />
                </ListItem>
              </List>
            </Grid>
          </Grid>
          <Grid container item sm={12} spacing={3} justify="center">
            <Button
              id="about section redirect"
              text="Get in Touch"
              href="/#contact"
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Affiliate;
