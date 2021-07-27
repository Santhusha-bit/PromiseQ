import Meta from "components/Meta";
import Header from "components/Header";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import HubspotForm from "react-hubspot-form";

const useStyles = makeStyles((theme) => ({
	formContainer: {
		minHeight: '80vh',
    marginLeft: theme.spacing(10),
    marginRight: theme.spacing(10),
    marginBottom: theme.spacing(6),
    padding: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(0),
      padding: theme.spacing(2),
    },
  },
}));

const Contact = () => {
  const classes = useStyles();
  return (
    <>
      <Meta title="Contact Us" />
      <Header title="Contact Us" />
      <Paper className={classes.formContainer}>
        <Typography variant="subtitle1" gutterBottom>
          Do you have any questions? Please do not hesitate to contact us
          directly.
        </Typography>
        <HubspotForm
          portalId="9094398"
          formId="219adb3f-b43c-4b02-babc-13467c28a98d"
          onSubmit={() => console.log("SUCCESS")}
          onReady={(form) => console.log("Form ready!")}
          loading={<div>Loading...</div>}
        />
      </Paper>
    </>
  );
};

export default Contact;
