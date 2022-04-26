const ImageLayout = ({
	imageRef,
	desc,
	width = "100%",
	height = "auto",
	objectFit = "fill",
}) => {
	return (
		<>
			<img
				src={imageRef}
				alt={desc}
				width={width}
				height={height}
				object-fit={objectFit}
			/>
		</>
	);
};

export default ImageLayout;
