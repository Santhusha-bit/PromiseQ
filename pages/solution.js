import Meta from "components/Meta";
import Header from "components/Header";
import TextLayout from "components/TextLayout";
import VideoLayout from "components/VideoLayout";
import { Grid } from "@material-ui/core";

const solution = () => {
	return (
		<>
			<Meta title="Our Solutions" />
			<Header title="Our Solutions" />
			<Grid container justify="center" spacing={3}>
				<Grid item xs={12} sm={12} md={8}>
					<VideoLayout
						videoSrc="/promiseq_gatecontrol.mp4"
						videoType="video/mp4"
						width="100%"
						height="auto"
					/>
				</Grid>
				<Grid item xs={12} sm={12} md={3}>
					<TextLayout
						textHeading="Human-Powered Real Time Assessments"
						headingVariant="h4"
						textParagraph="Any Image Processing Related Event can be Reviewed in Real-Time by
				Online Workers via our easy-to-use RestAPI to the promiseQ Cloud."
						buttonText="Contact Us!"
						buttonRef="/contact"
					/>
				</Grid>
			</Grid>
		</>
	);
};

export default solution;
