import Meta from "components/Meta";
import Header from "components/Header";
import JobList from "components/JobList";

const careers = () => {
	return (
		<>
			<Meta title="Careers" />
			<Header title="Join Our Team" />

			<section id="current_jobs">
				<JobList />
			</section>
		</>
	);
};

export default careers;
