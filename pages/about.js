import Meta from "components/Meta";
import Header from "components/Header";
import TextLayout from "components/TextLayout";
import ImageLayout from "components/ImageLayout";
import Grid from "@material-ui/core/Grid";
import { Typography, Box } from "@material-ui/core";
import Button from "components/Button";

const about = () => {
	return (
		<>
			<Meta title="About Us" />
			<Header title="About Us" />
			<Box alignItems="center" display="flex" minHeight={"100vh"}>
				<div>
					<section>
						<Grid container justify="center" spacing={4}>
							<Grid item xs={12} sm={12} md={6}>
								<ImageLayout imageRef="/team_foto.png" desc="team" />
							</Grid>
							{/* <p>(Picture: Bosch)</p> */}
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
								<Button text="Get in Touch" href="/contact" />
							</Grid>
						</Grid>
					</section>
					<section>
						<Grid container justify="center" spacing={4}>
							<Grid item xs={12}>
								<Typography variant="h4">Supported By:</Typography>
							</Grid>

							<Grid item xs={2}>
								<ImageLayout
									imageRef="/berlin_senate_logo_new.png"
									desc="Berlin Senate Logo"
								/>
							</Grid>
							<Grid item xs={2}>
								<ImageLayout imageRef="/eu-sozialfonds.jpg" desc="EU Logo" />
							</Grid>
							<Grid item xs={2}>
								<ImageLayout imageRef="/esf_logo.jpg" desc="ESF Logo" />
							</Grid>
							<Grid item xs={2}>
								<ImageLayout imageRef="/bosch_logo.jpg" desc="Bosch Logo" />
							</Grid>
							<Grid item xs={2}>
								<ImageLayout imageRef="/htw_logo.jpg" desc="HTW Logo" />
							</Grid>
						</Grid>
					</section>
				</div>
			</Box>
		</>
	);
};

export default about;
