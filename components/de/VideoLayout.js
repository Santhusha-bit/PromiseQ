const VideoLayout = ({ videoSrc, videoType, width, height }) => {
	return (
		<>
			<video
				src={videoSrc}
				type={videoType}
				width={width}
				height={height}
				autoplay={'autoplay'}
				controls
				loop={true}
			></video>
		</>
	);
};

export default VideoLayout;
