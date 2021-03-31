import Meta from "components/Meta";
import Header from "components/Header";
import TextLayout from "components/TextLayout";
import VideoLayout from "@components/VideoLayout";

const solution = () => {
	return (
		<>
			<Meta title="Our Solutions" />
			<Header title="Our Solutions" />
			<div style={{ display: "flex" }}>
				<VideoLayout
					videoSrc="/promiseq_gatecontrol.mp4"
					videoType="video/mp4"
					width="700"
					height="400"
				/>
				<TextLayout
					textHeading="Human-Powered Real Time Assessments"
					textParagraph="Any Image Processing Related Event can be Reviewed in Real-Time by
				Online Workers via our easy-to-use RestAPI to the promiseQ Cloud."
					buttonText="Contact Us!"
					buttonRef="/contact"
				/>
			</div>
		</>
	);
};

export default solution;
