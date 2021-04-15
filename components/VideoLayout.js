import imageStyles from "styles/ImageLayout.module.css";

const VideoLayout = ({ videoSrc, videoType, width, height }) => {
	return (
		<div className={imageStyles.container}>
			<video
				src={videoSrc}
				type={videoType}
				width={width}
				height={height}
				muted={true}
				autoPlay={true}
				loop={true}
			></video>
		</div>
	);
};

export default VideoLayout;
