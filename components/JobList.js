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
import Link from "next/link";

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

const JobList = ({ jobId, jobTitle, subTitle }) => {
	const classes = useStyles();

	return (
		<>
			<Grid item xs={12} sm={12} md={6}>
				<Card>
					<CardHeader
						avatar={
							<Avatar aria-label="work" className={classes.avatar}>
								<WorkIcon fontSize="large" />
							</Avatar>
						}
						titleTypographyProps={{ variant: "h6" }}
						title={jobTitle}
						subheaderTypographyProps={{ variant: "subtitle1" }}
						subheader={subTitle}
					/>
					<CardActions className={classes.cardAction}>
						<Link href={`/careers/[jobId]`} as={`/careers/${jobId}`} passHref>
							<IconButton className={classes.iconButton}>
								<Typography>See More </Typography>
								<NavigateNextIcon />
							</IconButton>
						</Link>
					</CardActions>
				</Card>
			</Grid>
		</>
	);
};

export default JobList;
