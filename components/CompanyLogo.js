import { Grid, Link } from "@material-ui/core";
import ImageLayout from "components/ImageLayout";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	logo: {
		WebkitFilter: "grayscale(100%)",
		justifyContent: "center",
		"&:hover": {
			WebkitFilter: "grayscale(0%)",
		},
	},
}));

const companies = [
	{
		imagePath: "/berlin_senate_logo_new.png",
		description: "Berlin Senate Logo",
	},
	{
		imagePath: "/eu-sozialfonds.jpg",
		description: "EU Logo",
	},
	{
		imagePath: "/esf_logo.jpg",
		description: "ESF Logo",
	},
	{
		imagePath: "/bosch_logo.png",
		description: "Bosch Logo",
	},
	{
		imagePath: "/htw_logo.jpg",
		description: "HTW Logo",
	},
	{
		imagePath: "/safety_&_security_things_logo.svg",
		description: "SAST Logo",
	},
];
const CompanyLogo = () => {
	const classes = useStyles();
	return (
		<div>
			<Grid container justify="center" spacing={4}>
				{companies.map((logo) => (
					<Grid
						container
						item
						key={logo.description}
						xs={6}
						sm={4}
						md={3}
						className={classes.logo}
					>
						<ImageLayout
							imageRef={logo.imagePath}
							desc={logo.description}
							width="70%"
						/>
					</Grid>
				))}
			</Grid>
		</div>
	);
};

export default CompanyLogo;
