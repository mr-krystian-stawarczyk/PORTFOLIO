import React from "react";

const Experience = () => {
	return (
		<div className="experience">
			<div className="d-flex justify-content-center my-5">
				<h1>Experience</h1>
			</div>
			<div className="container experience-wrapper">
				<div className="timeline-block timeline-block-right">
					<div className="marker"></div>
					<div className="timeline-content">
						<h3>2014-2017</h3>
						<p>
							Studying at University of Economics in Wrocław, many side jobs
							including running section supervisor in Decathlon.
						</p>
					</div>
				</div>
				<div className="timeline-block timeline-block-left">
					<div className="marker"></div>
					<div className="timeline-content">
						<h3>2015-2017</h3>
						<p>Notebooks salesman in Poland.</p>
					</div>
				</div>
				<div className="timeline-block timeline-block-right">
					<div className="marker"></div>
					<div className="timeline-content">
						<h3>2017-2019</h3>
						<p>Work as Reachtruck driver in Netherland.</p>
					</div>
				</div>
				<div className="timeline-block timeline-block-left">
					<div className="marker"></div>
					<div className="timeline-content">
						<h3>2019-2021</h3>
						<p>
							Working as a laser operator in Netherland. First steps with web
							development courses, 06-2020 Codecademy Full carrer path project
							started.
						</p>
					</div>
				</div>

				<div className="timeline-block timeline-block-right">
					<div className="marker"></div>
					<div className="timeline-content">
						<h3>02-2021</h3>
						<p>
							Finished Codecademy Pro course for Web Development Career Path
							including certificates.
						</p>
					</div>
				</div>
				<div className="timeline-block timeline-block-left">
					<div className="marker"></div>
					<div className="timeline-content">
						<h3>04.2021-Current</h3>
						<p>
							Finishing existing projects and courses, looking for a full time
							front-end developer job offers.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Experience;
