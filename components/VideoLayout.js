const VideoLayout = ({ videoSrc, videoType, width, height }) => {
	return (
		<>
			<video
				src={videoSrc}
				type={videoType}
				width={width}
				height={height}
				muted={true}
				autoPlay={true}
				loop={true}
			></video>
		</>
	);
};

export default VideoLayout;
