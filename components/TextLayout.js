import Typography from "@material-ui/core/Typography";
import Button from "components/Button";

const TextLayout = ({
	textHeading,
	headingVariant = "h3",
	textParagraph,
	paragraphVariant = "subtitle1",
	buttonText,
	buttonRef,
}) => {
	return (
		<>
			<Typography gutterBottom variant={headingVariant}>
				{textHeading}
			</Typography>
			<Typography gutterBottom variant={paragraphVariant}>
				{textParagraph}
			</Typography>
			<a href={buttonRef} style={{ textDecoration: "none" }}>
				<Button text={buttonText} />
			</a>
		</>
	);
};

export default TextLayout;
