import Grid from "@material-ui/core/Grid";
import TextLayout from "components/TextLayout";
import ImageLayout from "components/ImageLayout";
import Button from "components/Button";
import Box from "@material-ui/core/Box";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
	container: {
		marginTop: "40px",
		marginLeft: "50px",
		marginRight: "50px",
	},
}));

const Products = () => {
	const classes = useStyles();
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("md"));

	return (
		<>
			{isMobile ? (
				<>
					<Box display="flex" flexDirection="column" spacing={3}>
						<Grid container item justify="center" xs={12} sm={12}>
							<ImageLayout
								width="40%"
								imageRef="/intruder_detection_beta.svg"
								desc="Intruder Detection Beta App Logo"
							/>
						</Grid>
						<Grid item xs={12} sm={12}>
							<TextLayout
								textHeading="Intruder Detection BETA"
								headingVariant="h5"
								textParagraph="promiseQ Intruder Detection BETA is the AI based video analytics solution for intrusion detection. It allows to detect intruders in the field of view of the camera. 
promiseQ Intruder Detection BETA can be installed in both indoor and outdoor environments."
							/>
							<Button
								id="intruder detection"
								text="Go to the SAST Store"
								href="https://store.securityandsafetythings.com/shop/p/A_00125001"
								target="_blank"
							/>
						</Grid>
					</Box>
					<Box display="flex" flexDirection="column" spacing={3}>
						<Grid container item justify="center" xs={12} sm={12}>
							<ImageLayout
								width="40%"
								imageRef="/false_alarm_filter_agent_beta.svg"
								desc="False Alarm Filter Agent Beta App Logo"
							/>
						</Grid>
						<Grid container item xs={12} sm={12}>
							<TextLayout
								textHeading="False Alarm Filter Agent BETA"
								headingVariant="h5"
								textParagraph="promiseQ False Alarm Filter Agent BETA is a cloud-based video analytics solution for false alarms. 
				It allows to filter false alarms caused by an intruder or 
				perimeter detection SW that is already running on the customers device. 
				This app receives alarm events, evaluates them and filters false alarms."
							/>
							<Button
								id="false alarm filter agent"
								text="Go to the SAST Store"
								href="https://store.securityandsafetythings.com/shop/p/A_00125000"
								target="_blank"
							/>
						</Grid>
					</Box>
				</>
			) : (
				<>
					<Box
						display="flex"
						flexDirection="row"
						spacing={3}
						className={classes.container}
					>
						<Grid item lg={6}>
							<TextLayout
								textHeading="Intruder Detection BETA"
								headingVariant="h4"
								textParagraph="promiseQ Intruder Detection BETA is the AI based video analytics solution for intrusion detection. It allows to detect intruders in the field of view of the camera. 
promiseQ Intruder Detection BETA can be installed in both indoor and outdoor environments."
							/>
							<Button
								id="intruder detection"
								text="Go to the SAST Store"
								href="https://store.securityandsafetythings.com/shop/p/A_00125001"
								target="_blank"
							/>
						</Grid>
						<Grid container item justify="center" lg={6}>
							<ImageLayout
								width="40%"
								imageRef="/intruder_detection_beta.svg"
								desc="Intruder Detection Beta App Logo"
							/>
						</Grid>
					</Box>

					<Box
						display="flex"
						flexDirection="row-reverse"
						spacing={8}
						className={classes.container}
					>
						<Grid container item justify="flex-end" lg={6}>
							<TextLayout
								textHeading="False Alarm Filter Agent BETA"
								headingVariant="h4"
								textParagraph="promiseQ False Alarm Filter Agent BETA is a cloud-based video analytics solution for false alarms. 
			It allows to filter false alarms caused by an intruder or 
			perimeter detection SW that is already running on the customers device. 
			This app receives alarm events, evaluates them and filters false alarms."
							/>
							<Button
								id="false alarm filter agent"
								text="Go to the SAST Store"
								href="https://store.securityandsafetythings.com/shop/p/A_00125000"
								target="_blank"
							/>
						</Grid>
						<Grid container item justify="center" lg={6}>
							<ImageLayout
								width="40%"
								imageRef="/false_alarm_filter_agent_beta.svg"
								desc="False Alarm Filter Agent Beta App Logo"
							/>
						</Grid>
					</Box>
				</>
			)}
		</>
	);
};

export default Products;
