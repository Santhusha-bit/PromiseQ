import {
  Container,
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

const useStyles = makeStyles(() => ({
  textMiddle: {
    marginBottom: 60,
    marginTop: 60,
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
      <Grid container justify="center" spacing={2}>
        <Grid item xs={12} sm={4}>
          <Container>
            <Typography gutterBottom variant="h6" component="h6">
              Improve your margins with promiseQ as part of your solution
              portfolio
            </Typography>
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
          </Container>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Container>
            <Typography gutterBottom variant="h6" component="h6">
              Reduce your operating cost through increased operator efficiency
              and easy-to-implement technology
            </Typography>
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
          </Container>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Container>
            <Typography gutterBottom variant="h6" component="h6">
              Increase your security levels to better protect what is important
              to you
            </Typography>
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
          </Container>
        </Grid>
        <Button
          id="about section redirect"
          text="Get in Touch"
          href="/#contact"
        />
      </Grid>
    </div>
  );
};

export default Affiliate;
