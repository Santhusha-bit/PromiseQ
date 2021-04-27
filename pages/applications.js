import Meta from "components/Meta";
import Header from "components/Header";
import ApplicationsList from "@components/ApplicationsList";

const applications = () => {
	return (
		<>
			<Meta title="Applications" />
			<Header title="Applications" />
			<ApplicationsList />
		</>
	);
};

export default applications;
