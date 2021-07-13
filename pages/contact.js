import Meta from "components/Meta";
import ContactForm from "components/ContactForm";
import Header from "components/Header";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	formContainer: {
		marginLeft: theme.spacing(30),
		marginRight: theme.spacing(30),
		marginBottom: theme.spacing(6),
		padding: theme.spacing(5),
		[theme.breakpoints.down("sm")]: {
			margin: theme.spacing(0),
			padding: theme.spacing(2),
		},
	},
}));

const contact = () => {
	const classes = useStyles();
	return (
		<>
			<Meta title="Contact Us" />
			<Header title="Contact Us" />
			<Box alignItems="center" display="flex">
				<Paper className={classes.formContainer}>
					<Typography variant="subtitle1" gutterBottom>
						Do you have any questions? Please do not hesitate to contact us
						directly.
					</Typography>
					<ContactForm />
				</Paper>
			</Box>
		</>
	);
};

export default contact;
