import React from "react";
import pic from "../hehe.jpg";

const About = () => {
	return (
		<div className="container py-5">
			<div className="row">
				<div className="col-lg-6 col-xm-12">
					{" "}
					<div className="photo-wrap mb-4">
						<img src={pic} alt="my pic" className="profile-img" />
					</div>
				</div>
				<div className="col-lg-6 col-xm-12">
					<h1 className="about-heading"> About me</h1>
					<p>
						Hej jestem Krystian i tutaj napisze cos o sobie Ipsum ipsum ex eu
						incididunt tempor ea nulla labore amet pariatur id duis velit
						laboris. Culpa duis sunt consequat ut nulla id dolore proident enim
						do eiusmod minim consequat. Ad sit ipsum nisi ut enim do minim
						mollit. Commodo enim ullamco ut consequat minim magna. Non elit
						cillum eu consectetur sit do proident occaecat excepteur adipisicing
						minim consequat ipsum. Aute velit labore ea nulla nulla est non amet
						incididunt voluptate velit. In excepteur et ex ipsum laborum amet
						consequat dolore Lorem labore excepteur. Non non sint do duis
						commodo. In consequat est sit esse. Nostrud ad cillum aliqua
						voluptate. Dolor in duis est duis id duis commodo deserunt. Laborum
						nisi ut qui reprehenderit cillum fugiat aute nisi amet duis
						incididunt elit reprehenderit. In nulla fugiat nisi aliquip
						reprehenderit in in. Dolor sint dolor mollit magna aliquip. Lorem
						occaecat non est proident sint ullamco nostrud minim amet deserunt.
						Amet veniam culpa occaecat dolor voluptate. Amet anim aliqua
						consectetur consequat eiusmod in ipsum tempor incididunt culpa. In
						incididunt aute minim ad sunt non.
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
