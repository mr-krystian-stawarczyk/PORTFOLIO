import React from "react";
import pic from "../hehe.jpg";

const About = () => {
	return (
		<div id="about" className="container py-5">
			<div className="row">
				<div className="col-lg-6 col-xm-12">
					{" "}
					<div className="photo-wrap mb-4">
						<img src={pic} alt="my pic" className="profile-img" />
					</div>
				</div>
				<div className="col-lg-6 col-xm-12">
					<h1 className="about-heading"> About me</h1>
					<p className="about-paragraph">
						Hello my name is Krystian, Im 29 and i live in Nettetal. My hobby is
						building new websites and mountain bikes. I started my coding
						journey more than year ago, and from that time programming is my
						hobby, carrer path, and another challanges for me. <br /> My life is
						about curiosity and learning new skills, which is so exciting about
						coding journey. I love testing new features and libraries. Next step
						for me is to work on fascinating projects with team to learn even
						more from daily tasks. <br />
						If you want to know more about my experiences, please do not
						hesitate to scroll down.
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
