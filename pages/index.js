import TextLayout from "components/TextLayout";
import ImageLayout from "components/ImageLayout";

export default function Home() {
	return (
		<div style={{ display: "flex", marginTop: "70px" }}>
			<TextLayout
				textHeading="We promise the fastest human-powered source of truth!"
				textParagraph="promiseQ provides a fully distributed, on-demand human verification
				service in real-time to enable AI companies to maximize the precision of
				their algorithms in production."
				buttonText="Learn More!"
				buttonRef="/contact"
			/>
			<ImageLayout imageRef="/engine.png" desc="AI" width="480" height="415" />
		</div>
	);
}
