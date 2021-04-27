import { Grid } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import CheckCircleRoundedIcon from "@material-ui/icons/CheckCircleRounded";
import GavelRoundedIcon from "@material-ui/icons/GavelRounded";
import ShuffleRoundedIcon from "@material-ui/icons/ShuffleRounded";
import SentimentSatisfiedRoundedIcon from "@material-ui/icons/SentimentSatisfiedRounded";
import AssessmentRoundedIcon from "@material-ui/icons/AssessmentRounded";
import PowerRoundedIcon from "@material-ui/icons/PowerRounded";
import Icon from "@material-ui/core/Icon";

const useStyles = makeStyles((theme) => ({
	card: {
		height: "100%",
		width: "100%",
		"&:hover": {
			backgroundColor: theme.palette.primary.main,
			color: "#fff",
			transform: "scale3d(1.0, 1.0, 2)",
		},
	},
	iconStyle: {
		color: theme.palette.primary.main,
		fontSize: "large",
	},
	action: {
		"&:hover $iconStyle": {
			color: "#fff",
		},
	},
}));

const benefitsItems = [
	{
		icon: <GavelRoundedIcon />,
		title: "First Mover",
		description: "For crowd sourcing in Real Time and creating AI Hybrids",
	},
	{
		icon: <CheckCircleRoundedIcon />,
		title: "Real Time",
		description: "Task scheduling according to customer requirements",
	},
	{
		icon: <ShuffleRoundedIcon />,
		title: "Flexibility",
		description: "Managing variable job load by on-demand crowd work",
	},
	{
		icon: <SentimentSatisfiedRoundedIcon />,
		title: "Quality",
		description:
			"Achieve and ensure highest quality with training and verification",
	},
	{
		icon: <AssessmentRoundedIcon />,
		title: "Traceability",
		description: "Prescreening of malicious crowd workers",
	},
	{
		icon: <PowerRoundedIcon />,
		title: "Adaptability",
		description: "Solve any complex problem with advanced micro task design",
	},
];

const BenefitsList = () => {
	const classes = useStyles();
	return (
		<>
			<Grid container spacing={5} justify="center">
				{benefitsItems.map((benefit) => (
					<Grid item key={benefit.title} xs={12} sm={6} md={4}>
						<Card className={classes.card}>
							<CardActionArea className={classes.action}>
								<CardContent>
									<Icon className={classes.iconStyle}>{benefit.icon}</Icon>
									<Typography gutterBottom variant="subtitle1" component="h2">
										{benefit.title}
									</Typography>
									<Typography
										variant="body2"
										color="textSecondary"
										component="p"
									>
										{benefit.description}
									</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
					</Grid>
				))}
			</Grid>
		</>
	);
};

export default BenefitsList;
