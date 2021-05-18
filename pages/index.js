import TextLayout from "components/TextLayout";
import ImageLayout from "components/ImageLayout";
import { Grid } from "@material-ui/core";
import VideoLayout from "components/VideoLayout";
import Header from "components/Header";
import BenefitsList from "components/BenefitsList";
import ApplicationsList from "@components/ApplicationsList";

export default function Home() {
	return (
		<div>
			<section id="home">
				<Grid container justify="center" spacing={3}>
					<Grid item xs={12} sm={12} md={5}>
						<TextLayout
							textHeading="We promise the fastest human-powered source of truth!"
							textParagraph="promiseQ provides a fully distributed, on-demand human verification
				service in real-time to enable AI companies to maximize the precision of
				their algorithms in production."
							buttonText="Learn More!"
							buttonRef="/contact"
						/>
					</Grid>
					<Grid item xs={12} sm={12} md={6}>
						<ImageLayout imageRef="/engine.png" desc="AI" />
					</Grid>
				</Grid>
			</section>
			<section id="solution">
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
			</section>
			<section id="benefits">
				<Header title="Benefits" />
				<BenefitsList />
			</section>
			<section id="applications">
				<Header title="Applications" />
				<ApplicationsList />
			</section>
		</div>
	);
}
