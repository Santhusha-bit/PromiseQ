import {
  ListItemText,
  Container,
  Box,
  Grid,
  List,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  ListItem,
  Typography,
  ListItemIcon,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import PrintIcon from "@material-ui/icons/Print";
import ShareIcon from "@material-ui/icons/Share";
import Button from "components/Button";
import Header from "components/Header";
import Meta from "components/Meta";
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "next-share";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const useStyles = makeStyles((theme) => ({
  bold: {
    fontWeight: "600",
    marginTop: "5px",
  },
  listItems: {
    padding: "0",
  },
  bullet: {
    color: theme.palette.primary.main,
  },
  arrowBack: {
    "&:hover": {
      backgroundColor: "transparent",
      color: "black",
    },
  },
  link: {
    TextDecoder: "none",
  },
  loading: {
    minHeight: "80vh",
  },
}));

const JobDescription = ({ job, setCurrentJob }) => {
  const classes = useStyles();

  return (
    <>
      <Container maxWidth="lg">
        <Box>
          <Grid>
            <Meta title={job?.jobTitle} />
            <Header title={job?.jobTitle} />
            <Card elevation={0}>
              <CardHeader
                subheaderTypographyProps={{ variant: "subtitle1" }}
                subheader={job?.subTitle}
              />
              <Grid onClick={() => setCurrentJob(null)}>
                <IconButton
                  className={classes.arrowBack}
                  aria-label="back"
                  disableRipple={true}
                >
                  <Typography variant="body2">Go Back</Typography>
                </IconButton>
              </Grid>
              <CardActions disableSpacing>
                <IconButton aria-label="print" onClick={() => window.print()}>
                  <PrintIcon />
                </IconButton>

                <Popup
                  trigger={
                    <IconButton>
                      <ShareIcon />
                    </IconButton>
                  }
                  position="right center"
                >
                  <Typography variant="caption">
                    Share job advertisement on :
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item>
                      <LinkedinShareButton
                        url={`https://www.promiseq.com/careers/${job?.jobId}`}
                        hashtag={"#promiseQ"}
                      >
                        <LinkedinIcon size={32} round />
                      </LinkedinShareButton>
                    </Grid>
                    <Grid item>
                      <WhatsappShareButton
                        url={`https://www.promiseq.com/careers/${job?.jobId}`}
                        hashtag={"#promiseQ"}
                      >
                        <WhatsappIcon size={32} round />
                      </WhatsappShareButton>
                    </Grid>
                    <Grid item>
                      <FacebookShareButton
                        url={`https://www.promiseq.com/careers/${job?.jobId}`}
                        hashtag={"#promiseQ"}
                      >
                        <FacebookIcon size={32} round />
                      </FacebookShareButton>
                    </Grid>
                    <Grid item>
                      <TwitterShareButton
                        url={`https://www.promiseq.com/careers/${job?.jobId}`}
                        hashtag={"#promiseQ"}
                      >
                        <TwitterIcon size={32} round />
                      </TwitterShareButton>
                    </Grid>
                  </Grid>
                </Popup>
              </CardActions>
              <CardContent>
                <Typography className={classes.bold}>About Us:</Typography>
                {job?.aboutUs?.map((about) => (
                  <Typography paragraph>{about}</Typography>
                ))}
                <Typography className={classes.bold}>
                  {job?.salaryTitle}
                </Typography>
                <Typography paragraph>{job?.salaryText}</Typography>
                <Typography className={classes.bold}>
                  These will be your tasks:
                </Typography>
                <List>
                  {job?.jobTasks?.map((task) => (
                    <ListItem key={task.taskKey} className={classes.listItems}>
                      <ListItemIcon className={classes.bullet}>
                        <FiberManualRecordIcon />
                      </ListItemIcon>
                      <ListItemText primary={task} />
                    </ListItem>
                  ))}
                </List>
                <Typography className={classes.bold}>
                  You are offering these qualifications:
                </Typography>
                <List>
                  {job?.jobQualifications?.map((qualification) => (
                    <ListItem
                      key={qualification.qualificationKey}
                      className={classes.listItems}
                    >
                      <ListItemIcon className={classes.bullet}>
                        <FiberManualRecordIcon />
                      </ListItemIcon>
                      <ListItemText primary={qualification} />
                    </ListItem>
                  ))}
                </List>
                {job?.niceToHave?.length ? (
                  <>
                    <Typography className={classes.bold}>
                      Nice to have:
                    </Typography>
                    <List>
                      {job?.niceToHave?.map((niceToHave, index) => (
                        <ListItem key={index} className={classes.listItems}>
                          <ListItemIcon className={classes.bullet}>
                            <FiberManualRecordIcon />
                          </ListItemIcon>
                          <ListItemText primary={niceToHave} />
                        </ListItem>
                      ))}
                    </List>
                  </>
                ) : null}
                {job?.whyUs?.length ? (
                  <>
                    <Typography className={classes.bold}>Why Us?</Typography>
                    <List>
                      {job?.whyUs?.map((us, index) => (
                        <ListItem key={index} className={classes.listItems}>
                          <ListItemIcon className={classes.bullet}>
                            <FiberManualRecordIcon />
                          </ListItemIcon>
                          <ListItemText primary={us} />
                        </ListItem>
                      ))}
                    </List>
                  </>
                ) : null}
                <Typography className={classes.bold}>
                  We are looking forward to getting to know you!
                </Typography>
                <Typography className={classes.bold}>
                  Please drop us a note at:
                </Typography>
                <Grid container justify="center" spacing={8}>
                  <Grid item>
                    <Grid>
                      <Typography variant="caption" color="inherit">
                        promiseQ GmbH i.G.
                      </Typography>
                    </Grid>
                    <Grid>
                      <Typography variant="caption" color="inherit">
                        c/o The Drivery GmbH
                      </Typography>
                    </Grid>
                    <Grid>
                      <Typography variant="caption" color="inherit">
                        Mariendorfer Damm 1
                      </Typography>
                    </Grid>
                    <Grid>
                      <Typography variant="caption" color="inherit">
                        12099 Berlin
                      </Typography>
                    </Grid>
                    <Grid>
                      <Typography variant="caption" color="inherit">
                        application@promiseq.com
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container justify="flex-end">
                  <Grid item>
                    <Button
                      id="apply button"
                      text="Apply"
                      href="mailto:application@promiseq.com"
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default JobDescription;
