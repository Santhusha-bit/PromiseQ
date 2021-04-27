import TextLayout from "components/TextLayout";
import ImageLayout from "components/ImageLayout";
import { Grid } from "@material-ui/core";

export default function Home() {
	return (
		<div>
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
		</div>
	);
}
