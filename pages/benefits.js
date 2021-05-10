import Meta from "components/Meta";
import Header from "components/Header";
import BenefitsList from "components/BenefitsList";
import Box from "@material-ui/core/Box";

const benefits = () => {
	return (
		<>
			<Meta title="Benefits" />
			<Header title="Benefits" />
			<Box alignItems="center" display="flex" minHeight={"100vh"}>
				<BenefitsList />
			</Box>
		</>
	);
};

export default benefits;
