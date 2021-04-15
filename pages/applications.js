import Meta from "components/Meta";
import Header from "components/Header";
import ApplicationList from "components/ApplicationList";

const applications = () => {
	return (
		<>
			<Meta title="Applications" />
			<Header title="Applications" />
			<ApplicationList />
		</>
	);
};

export default applications;
