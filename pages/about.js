import Meta from "components/Meta";
import Header from "components/Header";
import TextLayout from "components/TextLayout";
import ImageLayout from "components/ImageLayout";
import Grid from "@material-ui/core/Grid";

const about = () => {
	return (
		<>
			<Meta title="About Us" />
			<Header title="About Us" />

			<Grid container justify="center" spacing={4}>
				<Grid item xs={12} sm={12} md={7}>
					<ImageLayout imageRef="/team_foto.png" desc="team" />
				</Grid>
				{/* <p>(Picture: Bosch)</p> */}
				<Grid item xs={12} sm={12} md={5}>
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
						buttonText="Get in Touch"
						buttonRef="/contact"
					/>
				</Grid>
			</Grid>
		</>
	);
};

export default about;
