import Meta from "components/Meta";
import Header from "components/Header";
import TextLayout from "components/TextLayout";
import ImageLayout from "components/ImageLayout";
import Grid from "@material-ui/core/Grid";
import { Box } from "@material-ui/core";
import Button from "components/Button";

const About = () => {
	return (
		<>
			<Meta title="About Us" />
			<Header title="About Us" />
			<Box alignItems="center" display="flex" minHeight={"70vh"}>
				<div>
					<section>
						<Grid container justify="center" spacing={4}>
							<Grid item xs={12} sm={12} md={6}>
								<ImageLayout imageRef="/team_foto.png" desc="team" />
							</Grid>
							<Grid item xs={12} sm={12} md={6}>
								<TextLayout
									textHeading="Meet promiseQ"
									headingVariant="h4"
									textParagraph="We believe AI will take over most of repetititve and simple tasks in
				future and will grow to be very reliable and secure. However, the last
				1% precision and accuracy will always stay challenging - especially in
				time and security critical tasks. With 4.5B internet users, rising
				unemployment, importance of remote, on-demand work and the advances in
				modern web-technology, we believe we can deliver the last percent
				accuracy through realtime human computing for all AI appliances across
				all industries and help fight poverty across the globe."
								/>
								<Button
									id="about section redirect"
									text="Get in Touch"
									href="/#contact"
								/>
							</Grid>
						</Grid>
					</section>
				</div>
			</Box>
		</>
	);
};

export default About;
