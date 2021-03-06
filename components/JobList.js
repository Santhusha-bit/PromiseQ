import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import WorkIcon from "@material-ui/icons/Work";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  cardAction: {
    justifyContent: "flex-end",
  },
  avatar: {
    backgroundColor: theme.palette.primary.main,
    color: "black",
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
}));

const JobList = ({ job, setCurrentJob }) => {
  const classes = useStyles();

  return (
    <>
      <Grid item xs={12} sm={12} md={8}>
        <Card>
          <CardHeader
            avatar={
              <Avatar aria-label="work" className={classes.avatar}>
                <WorkIcon fontSize="large" />
              </Avatar>
            }
            titleTypographyProps={{ variant: "h6" }}
            title={job.jobTitle}
            subheaderTypographyProps={{ variant: "subtitle1" }}
            subheader={job.subTitle}
          />
          <CardActions className={classes.cardAction}>
            <IconButton
              className={classes.iconButton}
              onClick={() => setCurrentJob(job)}
            >
              <Typography>See More </Typography>
              <NavigateNextIcon />
            </IconButton>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
};

export default JobList;
