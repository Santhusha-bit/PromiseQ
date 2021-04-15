import imageStyles from "styles/ImageLayout.module.css";

const ImageLayout = ({ imageRef, desc, width, height }) => {
	return (
		<div className={imageStyles.container}>
			<img src={imageRef} alt={desc} width={width} height={height} />
		</div>
	);
};

export default ImageLayout;
