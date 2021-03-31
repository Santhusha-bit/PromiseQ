import stylesApplication from "styles/Application.module.css";
import ApplicationItem from "components/ApplicationItem";

const ApplicationList = () => {
	const applications = [
		{
			image: "/security-icon.jpg",
			width: "200",
			height: "auto",
			title: "Security",
			description:
				"Modern CCTV Cameras utilize algorithms to recognize humans, vehicles or objects. They send alerts if they detect e.g. a trespasser in a restricted area. promiseQ helps minimizing False Alarm Rates with Realtime Human Computing.",
		},
		{
			image: "/manufacturing-icon.jpg",
			width: "200",
			height: "auto",
			title: "Manufacturing",
			description:
				"Smart production monitoring is a crucial activity in manufacturing. Monitoring Systems aim to detect anomalies and trends with the help of image processing. promiseQ helps maximize efficiency on the shop floor by Human-Powered Realtime Verification.",
		},
		{
			image: "/AI-icon.jpg",
			width: "200",
			height: "auto",
			title: "Artificial Intelligence",
			description:
				"AI software focuses on creating intelligent problem-solving solutions. It includes object recognition and problem-solving that can aid or even replace human engagement in a process. promiseQ helps by training and validating your algorithms in Realtime.",
		},
	];
	return (
		<div className={stylesApplication.grid}>
			{applications.map((application) => (
				<ApplicationItem application={application} />
			))}
		</div>
	);
};

export default ApplicationList;
