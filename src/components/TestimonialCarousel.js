import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import avatar1 from "../images/avatars/avatar-1.png";
import avatar2 from "../images/avatars/avatar-2.png";
import avatar3 from "../images/avatars/avatar-3.png";
import avatar4 from "../images/avatars/avatar-4.png";

const TestimonialCarousel = () => {
	return (
		<Carousel
			showArrows={true}
			infiniteLoop={true}
			showThumbs={false}
			showStatus={false}
			autoPlay={true}
			interval={3000}
		>
			<>
				<img src={avatar1} alt="avatar1" />
				<div className="myCarousel">
					<h3>Johny Smith 1</h3>
					<p>
						{" "}
						Cillum mollit aliqua ipsum laboris eu excepteur aute eu
						quis.Adipisicing consequat commodo cupidatat velit deserunt in
						excepteur et enim.
					</p>
				</div>
			</>
			<>
				<img src={avatar2} alt="avatar2" />
				<div className="myCarousel">
					<h3>Johny Smith 2</h3>
					<p>
						{" "}
						Cillum mollit aliqua ipsum laboris eu excepteur aute eu
						quis.Adipisicing consequat commodo cupidatat velit deserunt in
						excepteur et enim.
					</p>
				</div>
			</>
			<>
				<img src={avatar3} alt="avatar3" />
				<div className="myCarousel">
					<h3>Johny Smith 3</h3>
					<p>
						{" "}
						Cillum mollit aliqua ipsum laboris eu excepteur aute eu
						quis.Adipisicing consequat commodo cupidatat velit deserunt in
						excepteur et enim.
					</p>
				</div>
			</>
			<>
				<img src={avatar4} alt="avatar4" />
				<div className="myCarousel">
					<h3>Johny Smith 4</h3>
					<p>
						{" "}
						Cillum mollit aliqua ipsum laboris eu excepteur aute eu
						quis.Adipisicing consequat commodo cupidatat velit deserunt in
						excepteur et enim.
					</p>
				</div>
			</>
		</Carousel>
	);
};

export default TestimonialCarousel;
