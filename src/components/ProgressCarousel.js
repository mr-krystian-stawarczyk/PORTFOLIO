import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import css from "../images/progress/css.png";
import reactn from "../images/progress/reactN.png";
import projects from "../images/progress/tasks.png";
import coffee from "../images/progress/coffee.png";

const ProgressCarousel = () => {
	return (
		<Carousel
			showArrows={true}
			infiniteLoop={true}
			showThumbs={true}
			showStatus={false}
			autoPlay={true}
			interval={4000}
		>
			<>
				<img src={css} alt="css icon" />
				<div className="myCarousel">
					<h3>Css Stuff</h3>
					<p>
						CSS Exercises, to fully understand properties and selectors
						relationships. Practicing grid layout.
					</p>
				</div>
			</>
			<>
				<img src={reactn} alt="reactn icon" />
				<div className="myCarousel">
					<h3>React Native</h3>
					<p>First steps to buil own ReactN app for android smartphones.</p>
				</div>
			</>
			<>
				<img src={projects} alt="projects icon" />
				<div className="myCarousel">
					<h3>Finishing existing projects</h3>
					<p>Houser project from portfolio is during finishing process.</p>
				</div>
			</>
			<>
				<img src={coffee} alt="coffee icon" />
				<div className="myCarousel">
					<h3>Drinking a lot of coffee</h3>
					<p>This progress is the fastest :)</p>
				</div>
			</>
		</Carousel>
	);
};

export default ProgressCarousel;
