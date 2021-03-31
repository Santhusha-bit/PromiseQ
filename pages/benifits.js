import Meta from "components/Meta";
import Header from "components/Header";
import BenifitList from "components/BenifitsList";

const benifits = () => {
	return (
		<>
			<Meta title="Benifits" />
			<Header title="Benifits" />
			<BenifitList />
		</>
	);
};

export default benifits;
