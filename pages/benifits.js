import Meta from "components/Meta";
import Header from "components/Header";
import BenifitsList from "components/BenifitsList";

const benifits = () => {
	return (
		<>
			<Meta title="Benifits" />
			<Header title="Benifits" />
			<BenifitsList />
		</>
	);
};

export default benifits;
