import stylesBenifits from "styles/Benifit.module.css";

const BenifitItem = ({ benifit }) => {
	return (
		<div className={stylesBenifits.card}>
			<div className={stylesBenifits.icon}>{benifit.icon}</div>
			<h3>{benifit.title} </h3>
			<p>{benifit.description}</p>
		</div>
	);
};

export default BenifitItem;
