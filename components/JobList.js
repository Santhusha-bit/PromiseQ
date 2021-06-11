import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import PrintIcon from "@material-ui/icons/Print";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import WorkIcon from "@material-ui/icons/Work";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import Grid from "@material-ui/core/Grid";
import Button from "components/Button";
import {
	FacebookShareButton,
	FacebookIcon,
	TwitterShareButton,
	TwitterIcon,
	WhatsappShareButton,
	WhatsappIcon,
	LinkedinShareButton,
	LinkedinIcon,
} from "next-share";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
	root: {
		margin: "0px 50px 0px 50px ",
	},
	expand: {
		transform: "rotate(0deg)",
		marginLeft: "auto",
		transition: theme.transitions.create("transform", {
			duration: theme.transitions.duration.shortest,
		}),
	},
	expandOpen: {
		transform: "rotate(180deg)",
	},
	avatar: {
		backgroundColor: theme.palette.primary.main,
		color: "black",
		width: theme.spacing(8),
		height: theme.spacing(8),
	},
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
}));

const jobs = [
	{
		jobId: "1",
		jobTitle: "Research Position Offer",
		subTitle:
			"Machine Learning for Computer Vision, Postgraduate Researcher(MSc/MPhil)",
		aboutUs: [
			{
				paraKey: 1,
				para: "promiseQ is a young startup from Berlin (Germany) and we are developing software for camera surveillance systems based on computer vision and machine learning.",
			},
			{
				paraKey: 2,
				para: "On our mission to become the world’s best monitoring center as a service, we are offering a Postgraduate Researcher Position (MSc/MPhil) in collaboration with University of Moratuwa, Department of Computer Science and Engineering.",
			},
			{
				paraKey: 3,
				para: "Our uniqueness is to combine artificial intelligence with humans in the loop to enable a continuous improvement of the machine learning models. The present topic aims to design a framework for a continuously improving person (intruder) detection.",
			},
		],
		jobTasks: [
			{
				taskKey: 1,
				task: "Literature research in person detection algorithms",
			},
			{
				taskKey: 2,
				task: "Literature research in continuous learning of vision systems",
			},
			{
				taskKey: 3,
				task: "Design and implementation of selected person detection models Training and testing of person detection models on existing database",
			},
			{
				taskKey: 4,
				task: "Design and implementation of continuously improving person detection",
			},
			{
				taskKey: 5,
				task: "Testing and performance tracking of continuous improvement",
			},
			{
				taskKey: 6,
				task: "Summary and documentation of results in master thesis/ academic papers",
			},
		],
		jobQualifications: [
			{
				qualificationKey: 1,
				qualification:
					"Student in the field of computer science, electronics/electrical or similar",
			},
			{
				qualificationKey: 2,
				qualification:
					"Experience in programming (e.g. python, Java, C++ or similar)",
			},
			{
				qualificationKey: 3,
				qualification: "Motivated and independent work style",
			},
			{
				qualificationKey: 4,
				qualification: "Excellent communication skills in English",
			},
			{
				qualificationKey: 5,
				qualification:
					"A stable internet connection and a working computer for remote work",
			},
		],
		others: [
			{
				otherKey: 1,
				other:
					"Student in the field of computer science, electronics/electrical or similar",
			},
			{
				otherKey: 2,
				other: "Experience in programming (e.g. python, Java, C++ or similar)",
			},
			{
				otherKey: 3,
				other: "Motivated and independent work style",
			},
			{
				otherKey: 4,
				other: "Excellent communication skills in English",
			},
		],
	},
];

const JobList = () => {
	const classes = useStyles();
	const [expanded, setExpanded] = useState(false);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	return (
		<>
			<Grid>
				<Typography variant="h5">Current job vacancies : </Typography>
			</Grid>
			<Grid container justify="center" spacing={3}>
				{jobs.map((job) => (
					<Grid item key={job.jobId}>
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
							<CardActions disableSpacing>
								<IconButton aria-label="print" onClick={() => window.print()}>
									<PrintIcon />
								</IconButton>

								<Popup
									trigger={
										<IconButton>
											<Link
												href={{
													pathname: "/careers",
													query: {
														id: job.jobId,
													},
												}}
												as={`#${job.jobId}`}
											>
												<ShareIcon />
											</Link>
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
												url={`https://www.promiseq.com/careers/#${job.jobId}`}
												hashtag={"#promiseQ"}
											>
												<LinkedinIcon size={32} round />
											</LinkedinShareButton>
										</Grid>
										<Grid item>
											<WhatsappShareButton
												url={`https://www.promiseq.com/careers/#${job.jobId}`}
												hashtag={"#promiseQ"}
											>
												<WhatsappIcon size={32} round />
											</WhatsappShareButton>
										</Grid>
										<Grid item>
											<FacebookShareButton
												url={`https://www.promiseq.com/careers/#${job.jobId}`}
												hashtag={"#promiseQ"}
											>
												<FacebookIcon size={32} round />
											</FacebookShareButton>
										</Grid>
										<Grid item>
											<TwitterShareButton
												url={`https://www.promiseq.com/careers/#${job.jobId}`}
												hashtag={"#promiseQ"}
											>
												<TwitterIcon size={32} round />
											</TwitterShareButton>
										</Grid>
									</Grid>
								</Popup>

								<IconButton
									className={clsx(classes.expand, {
										[classes.expandOpen]: expanded,
									})}
									onClick={handleExpandClick}
									aria-expanded={expanded}
									aria-label="show more"
								>
									<Link
										href={{
											pathname: "/careers",
											query: {
												id: job.jobId,
											},
										}}
										as={`#${job.jobId}`}
									>
										<ExpandMoreIcon />
									</Link>
								</IconButton>
							</CardActions>
							<Collapse in={expanded} timeout="auto" unmountOnExit>
								<CardContent>
									<Typography className={classes.bold}>About Us:</Typography>
									{job.aboutUs.map((paragraph) => (
										<Typography paragraph key={paragraph.paraKey}>
											{paragraph.para}
										</Typography>
									))}
									<Typography className={classes.bold}>
										Monthly Compensation:
									</Typography>
									<Typography paragraph>competitive with industry</Typography>
									<Typography className={classes.bold}>
										These will be your tasks:
									</Typography>
									<List>
										{job.jobTasks.map((task) => (
											<ListItem
												key={task.taskKey}
												className={classes.listItems}
											>
												<ListItemIcon className={classes.bullet}>
													<FiberManualRecordIcon />
												</ListItemIcon>
												<ListItemText primary={task.task} />
											</ListItem>
										))}
									</List>
									<Typography className={classes.bold}>
										Expected qualifications:
									</Typography>
									<List>
										{job.jobQualifications.map((qualification) => (
											<ListItem
												key={qualification.qualificationKey}
												className={classes.listItems}
											>
												<ListItemIcon className={classes.bullet}>
													<FiberManualRecordIcon />
												</ListItemIcon>
												<ListItemText primary={qualification.qualification} />
											</ListItem>
										))}
									</List>
									<Typography className={classes.bold}>
										Nice to have:
									</Typography>
									<List>
										{job.others.map((other) => (
											<ListItem
												key={other.otherKey}
												className={classes.listItems}
											>
												<ListItemIcon className={classes.bullet}>
													<FiberManualRecordIcon />
												</ListItemIcon>
												<ListItemText primary={other.other} />
											</ListItem>
										))}
									</List>
									<Typography className={classes.bold}>
										Always happy to hear from you!
									</Typography>
									<Typography className={classes.bold}>
										For more details or questions:
									</Typography>
									<Grid container justify="center" spacing={8}>
										<Grid item>
											<Typography variant="caption" color="inherit">
												Dr. Thanuja D. Ambegoda <br /> University of Moratuwa
												<br /> thanuja.ambegoda@uom.lk
												<br />
												+94 70 265 52 73
											</Typography>
										</Grid>
										<Grid item>
											<Typography variant="caption" color="inherit">
												Torben Gräber <br /> promiseQ
												<br />
												torbengraebergt@gmail.com
											</Typography>
										</Grid>
									</Grid>
									<Grid container justify="flex-end">
										<Grid item>
											<Button
												text="Apply"
												onClick={() =>
													window.open("mailto:application@promiseq.com")
												}
											/>
										</Grid>
									</Grid>
								</CardContent>
							</Collapse>
						</Card>
					</Grid>
				))}
			</Grid>
		</>
	);
};

export default JobList;
