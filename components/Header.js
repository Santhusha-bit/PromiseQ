import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(1),
  },
}));

const Header = ({ title }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h3" gutterBottom>
        {title}
      </Typography>
    </div>
  );
};

export default Header;
