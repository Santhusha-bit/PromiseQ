import { Grid, Link } from "@material-ui/core";
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
import SecurityIcon from "@material-ui/icons/Security";
import PowerRoundedIcon from "@material-ui/icons/PowerRounded";
import Icon from "@material-ui/core/Icon";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import Popup from "reactjs-popup";
import CloseIcon from "@material-ui/icons/Close";
import { IconButton } from "@material-ui/core";

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
	linkStyle: {
		color: "primary",
		marginTop: "10px",
		variant: "body2",
		fontSize: "12px",
	},
	action: {
		"&:hover $iconStyle": {
			color: "#fff",
		},
		"&:hover $linkStyle": {
			color: "#fff",
		},
	},
}));

const benefitsItems = [
	{
		icon: <PowerRoundedIcon />,
		title: "Adaptability",
		description: "Solve any complex problem with advanced micro task design",
		popupText:
			"promiseQ Engine reduces false alarms by 99.9% combining Artificial Intelligence and Crowdwork. Yet, by utilising the Human-in-the-Loop approach, we are able to provide you a significant competitive advantage for various use cases other than traditional security use cases. The promiseQ engine can be utilised in business protocol and process monitoring (correct behaviour in the right order), dangerous situations detection (accidents, brawls, theft), inventory monitoring, contamination detection in food and cosmetics industries, wild animals detection in farms, artifact protection in museums and many more. Possibilities are shaped only by your and your customers’ wants and needs!",
	},
	{
		icon: <GavelRoundedIcon />,
		title: "Accuracy",
		description: "99.9% reduction of total false alarms",
		popupText:
			"99.9% reduction of false alarms caused by people and animals passing by, wind, rain, dirt on the lens or even heat and humidity is possible with our hybrid intelligence approach. You won’t be slowed down by false alarms anymore. You will receive immediate feedback to alarms and streams with our real-time response which takes less than 30 seconds. The only thing you need to worry about now is how you will react to actual alarms and threats!",
	},
	{
		icon: <CheckCircleRoundedIcon />,
		title: "Self-scaling",
		description: "100% cloud-based and self-scaling",
		popupText:
			"No hardware required! Our solution is 100% cloud-based and self-scaling. Regardless of your location and the hardware you use, you can easily install our system to your cameras and manage your alarm monitoring systems remotely via our dashboard!",
	},
	{
		icon: <SecurityIcon />,
		title: "Security",
		description: "100% data privacy and GDPR compliance",
		popupText:
			"We provide complete data privacy with the support of our partners. Our solution is General Data Protection Regulation (GDPR) compliant through advanced face and licence plate redaction. We work hard and improve our policies to provide you safe and secure services to protect your and your customers’ data!",
	},
];

const BenefitsList = () => {
	const classes = useStyles();
	const contentStyle = {
		background: "#fff",
		width: "70%",
		padding: "5px",
		margin: "auto",
		border: "2px solid #ffd42a",
	};
	const overlayStyle = { background: "rgba(0,0,0,0.5)" };

	return (
		<>
			<Grid container spacing={5} justify="center">
				{benefitsItems.map((benefit) => (
					<Grid item key={benefit.title} xs={12} sm={6} md={6}>
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
									<Popup
										trigger={
											<Grid
												className={classes.linkStyle}
												container
												direction="row"
												alignItems="center"
												justify="flex-end"
											>
												Learn More <NavigateNextIcon />
											</Grid>
										}
										position="center center"
										arrow={false}
										modal={true}
										lockScroll={true}
										{...{
											contentStyle,
											overlayStyle,
										}}
									>
										{(close) => (
											<Grid container justify="center">
												<Grid container item justify="flex-end">
													<IconButton onClick={close}>
														<CloseIcon fontSize="small" />
													</IconButton>
												</Grid>
												<Typography variant="h6" component="p">
													{benefit.title}
												</Typography>
												<Typography variant="body2" component="p">
													{benefit.popupText}
												</Typography>
											</Grid>
										)}
									</Popup>
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
