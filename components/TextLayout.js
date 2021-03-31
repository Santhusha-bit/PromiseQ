import textStyles from "styles/TextLayout.module.css";

const TextLayout = ({ textHeading, textParagraph, buttonText, buttonRef }) => {
	return (
		<div className={textStyles.container}>
			<h2 className={textStyles.title}>{textHeading}</h2>
			<p className={textStyles.paragraph}>{textParagraph}</p>
			<a href={buttonRef}>
				<button className={textStyles.button}>{buttonText}</button>
			</a>
		</div>
	);
};

export default TextLayout;
