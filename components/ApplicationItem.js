import stylesApplication from "styles/Application.module.css";

const ApplicationItem = ({ application }) => {
	return (
		<div className={stylesApplication.card}>
			<img
				src={application.image}
				width={application.width}
				height={application.height}
			/>
			<h3>{application.title} </h3>
			<p>{application.description}</p>
		</div>
	);
};

export default ApplicationItem;
