import Meta from "components/Meta";
import Header from "components/Header";
import { Grid, Typography } from "@material-ui/core";
import JobList from "components/JobList";
import { jobs } from "data";

export const getStaticProps = async () => {
	return {
		props: {
			jobs,
		},
	};
};

const careers = ({ jobs }) => {
	return (
		<>
			<Meta title="Careers" />
			<Header title="Join Our Team" />

			<section id="current_jobs">
				<Grid>
					<Typography variant="h5" gutterBottom>
						Current job vacancies :
					</Typography>
				</Grid>
				<Grid container justify="center" spacing={3}>
					{jobs.map((job) => (
						<JobList key={job.jobId} {...job} />
					))}
				</Grid>
			</section>
		</>
	);
};

export default careers;
