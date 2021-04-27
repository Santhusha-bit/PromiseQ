import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		justifyContent: "center",
	},
}));

const Header = ({ title }) => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Typography variant="h4" gutterBottom>
				{title}
			</Typography>
		</div>
	);
};

export default Header;
