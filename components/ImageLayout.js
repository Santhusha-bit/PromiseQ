const ImageLayout = ({
	imageRef,
	desc,
	width = "100%",
	objectFit = "fill",
}) => {
	return (
		<>
			<img src={imageRef} alt={desc} width={width} object-fit={objectFit} />
		</>
	);
};

export default ImageLayout;
