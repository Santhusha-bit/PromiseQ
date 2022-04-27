import Typography from "@material-ui/core/Typography";

const TextLayout = ({
	textHeading,
	headingVariant = "h3",
	textParagraph,
	paragraphVariant = "body1",
}) => {
	return (
		<>
			<Typography gutterBottom variant={headingVariant}>
				{textHeading}
			</Typography>
			<Typography gutterBottom variant={paragraphVariant}>
				{textParagraph}
			</Typography>
		</>
	);
};

export default TextLayout;
