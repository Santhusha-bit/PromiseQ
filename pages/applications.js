import Meta from "components/Meta";
import Header from "components/Header";
import ApplicationsList from "@components/ApplicationsList";
import Box from "@material-ui/core/Box";

const applications = () => {
	return (
		<>
			<Meta title="Applications" />
			<Header title="Applications" />
			<Box alignItems="center" display="flex" minHeight={"100vh"}>
				<ApplicationsList />
			</Box>
		</>
	);
};

export default applications;
