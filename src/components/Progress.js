import React from "react";
import ProgressCarousel from "./ProgressCarousel";

const Progress = () => {
	return (
		<div className="progres" id="progress">
			<h1>My recent progress</h1>
			<div className="progres-content">
				<ProgressCarousel />
			</div>
		</div>
	);
};

export default Progress;
