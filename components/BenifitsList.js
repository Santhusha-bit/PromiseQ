import BenifitItem from "components/BenifitItem";
import stylesBenifits from "styles/Benifit.module.css";
import {
	FaGavel,
	FaCheckCircle,
	FaRandom,
	FaSmile,
	FaChartBar,
	FaPlug,
} from "react-icons/fa";

const BenifitsList = () => {
	const benifits = [
		{
			icon: <FaGavel />,
			title: "First Mover",
			description: "For crowd sourcing in Real Time and creating AI Hybrids",
		},
		{
			icon: <FaCheckCircle />,
			title: "Real Time",
			description: "Task scheduling according to customer requirements",
		},
		{
			icon: <FaRandom />,
			title: "Flexibility",
			description: "Managing variable job load by on-demand crowd work",
		},
		{
			icon: <FaSmile />,
			title: "Quality",
			description:
				"Achieve and ensure highest quality with training and verification",
		},
		{
			icon: <FaChartBar />,
			title: "Traceability",
			description: "Prescreening of malicious crowd workers",
		},
		{
			icon: <FaPlug />,
			title: "Adaptability",
			description: "Solve any complex problem with advanced micro task design",
		},
	];
	return (
		<div className={stylesBenifits.grid}>
			{benifits.map((benifit) => (
				<BenifitItem benifit={benifit} />
			))}
		</div>
	);
};

export default BenifitsList;
