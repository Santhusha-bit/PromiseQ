import Meta from "components/Meta";
import Header from "components/Header";
import BenefitsList from "components/BenefitsList";

const benefits = () => {
	return (
		<>
			<Meta title="Benefits" />
			<Header title="Benefits" />
			<BenefitsList />
		</>
	);
};

export default benefits;
