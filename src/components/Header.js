import React from "react";
import Typed from "react-typed";
import { Link } from "react-scroll";

const Header = () => {
	return (
		<div className="header-wrapper" id="home">
			<div className="main-info">
				<h1>web development & website promotions</h1>
				<Typed
					className="typed-text"
					strings={[
						"Web Design UI/UX",
						"Web Development",
						"Facebook Ads",
						"Google Ads",
					]}
					typeSpeed={40}
					backSpeed={60}
					loop
				/>

				<Link to="contacts" href="#" className="btn-main-offer" smooth={true}>
					contact me
				</Link>
			</div>
		</div>
	);
};

export default Header;
