import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Container } from "@material-ui/core";
import ImageLayout from "components/ImageLayout";

const applicationItems = [
	{
		image: "/security-icon.jpg",
		title: "Security",
		description:
			"Modern CCTV Cameras utilize algorithms to recognize humans, vehicles or objects. They send alerts if they detect e.g. a trespasser in a restricted area. promiseQ helps minimizing False Alarm Rates with Realtime Human Computing.",
	},
	{
		image: "/manufacturing-icon.jpg",
		title: "Manufacturing",
		description:
			"Smart production monitoring is a crucial activity in manufacturing. Monitoring Systems aim to detect anomalies and trends with the help of image processing. promiseQ helps maximize efficiency on the shop floor by Human-Powered Realtime Verification.",
	},
	{
		image: "/AI-icon.jpg",
		title: "Artificial Intelligence",
		description:
			"AI software focuses on creating intelligent problem-solving solutions. It includes object recognition and problem-solving that can aid or even replace human engagement in a process. promiseQ helps by training and validating your algorithms in Realtime.",
	},
];

const ApplicationsList = () => {
	return (
		<div>
			<Grid container justify="center" spacing={2}>
				{applicationItems.map((application) => (
					<Grid item key={application.title} xs={12} sm={4}>
						<Container>
							<ImageLayout
								imageRef={application.image}
								desc={application.title}
							/>

							<Typography gutterBottom variant="h6" component="subtitle1">
								{application.title}
							</Typography>
							<Typography gutterBottom variant="body1">
								{application.description}
							</Typography>
						</Container>
					</Grid>
				))}
			</Grid>
		</div>
	);
};

export default ApplicationsList;
