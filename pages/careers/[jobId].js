import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import PrintIcon from "@material-ui/icons/Print";
import ShareIcon from "@material-ui/icons/Share";
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
import { jobs } from "job_details";
import Header from "components/Header";
import Meta from "components/Meta";
import { Link } from "@material-ui/core";

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
}));

export const getStaticPaths = async () => {
	const paths = jobs.map((job) => ({
		params: { jobId: job.jobId.toString() },
	}));
	return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
	const job = jobs.filter((job) => job.jobId.toString() === params.jobId);
	return { props: { job: job[0] } };
};

const JobDescription = ({ job }) => {
	const classes = useStyles();

	return (
		<>
			<Grid>
				<Meta title={job.jobTitle} />
				<Header title={job.jobTitle} />
				<Card elevation={0}>
					<CardHeader
						subheaderTypographyProps={{ variant: "subtitle1" }}
						subheader={job.subTitle}
					/>
					<Grid>
						<Link href="/careers" className={classes.link}>
							<IconButton
								className={classes.arrowBack}
								aria-label="back"
								disableRipple={true}
							>
								<Typography variant="body2">Go Back</Typography>
							</IconButton>
						</Link>
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
										url={`https://www.promiseq.com/careers/${job.jobId}`}
										hashtag={"#promiseQ"}
									>
										<LinkedinIcon size={32} round />
									</LinkedinShareButton>
								</Grid>
								<Grid item>
									<WhatsappShareButton
										url={`https://www.promiseq.com/careers/${job.jobId}`}
										hashtag={"#promiseQ"}
									>
										<WhatsappIcon size={32} round />
									</WhatsappShareButton>
								</Grid>
								<Grid item>
									<FacebookShareButton
										url={`https://www.promiseq.com/careers/${job.jobId}`}
										hashtag={"#promiseQ"}
									>
										<FacebookIcon size={32} round />
									</FacebookShareButton>
								</Grid>
								<Grid item>
									<TwitterShareButton
										url={`https://www.promiseq.com/careers/${job.jobId}`}
										hashtag={"#promiseQ"}
									>
										<TwitterIcon size={32} round />
									</TwitterShareButton>
								</Grid>
							</Grid>
						</Popup>
					</CardActions>
					<CardContent>
						<Typography className={classes.bold}>{job.aboutUsTitle}</Typography>
						{job.aboutUs.map((paragraph) => (
							<Typography paragraph key={paragraph.paraKey}>
								{paragraph.para}
							</Typography>
						))}
						<Typography className={classes.bold}>{job.salaryTitle}</Typography>
						<Typography paragraph>{job.salaryText}</Typography>
						<Typography className={classes.bold}>{job.taskTitle}</Typography>
						<List>
							{job.jobTasks.map((task) => (
								<ListItem key={task.taskKey} className={classes.listItems}>
									<ListItemIcon className={classes.bullet}>
										<FiberManualRecordIcon />
									</ListItemIcon>
									<ListItemText primary={task.task} />
								</ListItem>
							))}
						</List>
						<Typography className={classes.bold}>
							{job.qualificationTitle}
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
						<Typography className={classes.bold}>{job.othersTitle}</Typography>
						<List>
							{job.others.map((other) => (
								<ListItem key={other.otherKey} className={classes.listItems}>
									<ListItemIcon className={classes.bullet}>
										<FiberManualRecordIcon />
									</ListItemIcon>
									<ListItemText primary={other.other} />
								</ListItem>
							))}
						</List>
						<Typography className={classes.bold}>{job.endText}</Typography>
						<Typography className={classes.bold}>{job.inquiryText}</Typography>
						<Grid container justify="center" spacing={8}>
							{job.contactDetails.map((contact) => (
								<Grid item key={contact.addressKey}>
									{contact.address.map((line) => (
										<Grid key={line.lineKey}>
											<Typography variant="caption" color="inherit">
												{line.line}
											</Typography>
										</Grid>
									))}
								</Grid>
							))}
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
		</>
	);
};

export default JobDescription;
