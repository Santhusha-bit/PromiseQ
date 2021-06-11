import TextLayout from "components/TextLayout";
import ImageLayout from "components/ImageLayout";
import { Grid } from "@material-ui/core";
import VideoLayout from "components/VideoLayout";
import Header from "components/Header";
import BenefitsList from "components/BenefitsList";
import ApplicationsList from "@components/ApplicationsList";
import { makeStyles } from "@material-ui/core/styles";
import Products from "@components/Products";
import Button from "components/Button";
import CompanyLogo from "components/CompanyLogo";

const useStyles = makeStyles((theme) => ({
	sectionStyle: {
		paddingTop: "10%",
		minHeight: "100vh",
	},
	logoSection: {
		padding: "10% 3% 10% 3%",
	},
}));
export default function Home() {
	const classes = useStyles();
	return (
		<>
			<section id="home" className={classes.sectionStyle}>
				<Grid container justify="center" spacing={3}>
					<Grid item xs={12} sm={12} md={5}>
						<TextLayout
							textHeading="We promise the fastest human-powered source of truth!"
							textParagraph="promiseQ provides a fully distributed, on-demand human verification
				service in real-time to enable AI companies to maximize the precision of
				their algorithms in production."
						/>
						<Button text="Learn More!" href="/contact" />
					</Grid>
					<Grid item xs={12} sm={12} md={6}>
						<ImageLayout imageRef="/engine.png" desc="AI" />
					</Grid>
				</Grid>
			</section>
			<section id="solution" className={classes.sectionStyle}>
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
						/>
						<Button text="Contact Us!" href="/contact" />
					</Grid>
				</Grid>
				<Products />
			</section>
			<section id="benefits" className={classes.sectionStyle}>
				<Header title="Benefits" />
				<BenefitsList />
			</section>
			<section id="applications" className={classes.sectionStyle}>
				<Header title="Applications" />
				<ApplicationsList />
			</section>
			<section id="companyLogo" className={classes.logoSection}>
				<CompanyLogo />
			</section>
		</>
	);
}
