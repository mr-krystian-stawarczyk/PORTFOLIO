import React from "react";
import {
	FacebookShareButton,
	FacebookIcon,
	TwitterShareButton,
	TwitterIcon,
	RedditShareButton,
	RedditIcon,
	LinkedinShareButton,
	LinkedinIcon,
} from "react-share";
import { Link } from "react-scroll";

const Footer = () => {
	return (
		<div className="footer">
			<div className="container">
				<div className="row">
					<div className="col-lg-4 col-md-6 col-sm-6">
						<div className="d-flex">
							<p>Fasanenstr.10 41334 Nettetal </p>
						</div>
						<div className="d-flex">
							<p> 00 48-726-897-493 EN | DE | PL </p>
						</div>
						<div className="d-flex">
							<p>mr.krystian@stawarczyk@gmail.com</p>
						</div>
					</div>

					<div className="col-lg-3 col-md-2 col-sm-6">
						<div className="row">
							<div className="col">
								<Link
									to="home"
									offset={-110}
									smooth={true}
									className="footer-nav"
									href="#"
								>
									Home
								</Link>
								<br />

								<Link
									to="about"
									offset={-110}
									smooth={true}
									className="footer-nav"
									href="#"
								>
									About
								</Link>
								<br />

								<Link
									to="services"
									smooth={true}
									className="footer-nav"
									href="#"
									offset={-110}
								>
									Services
								</Link>
								<br />
							</div>
							<div className="col">
								<Link
									to="experience"
									smooth={true}
									className="footer-nav"
									href="#"
									offset={-110}
								>
									Experience
								</Link>
								<br />

								<Link
									to="portfolio"
									smooth={true}
									className="footer-nav"
									href="#"
									offset={-110}
								>
									Portfolio
								</Link>
								<br />
								<Link
									to="progress"
									smooth={true}
									className="footer-nav"
									href="#"
									offset={-110}
								>
									Progress
								</Link>
								<br />
							</div>
						</div>
					</div>

					<div className=" col-lg-5 col-md-5 col-sm-6 align-items-center ">
						<div className="d-flex justify-content-center">
							<FacebookShareButton
								url={"https://www.facebook.com/krystian.stawarczyk.5"}
								quote={"FullStack Dev"}
								hashtag="Web Dev"
							>
								<FacebookIcon className="mx-3" size={36} />
							</FacebookShareButton>
							<TwitterShareButton
								url={
									"https://www.linkedin.com/in/krystian-stawarczyk-240476212/"
								}
								quote={"FullStack Dev"}
								hashtag="Web Dev"
							>
								<TwitterIcon className="mx-3" size={36} />
							</TwitterShareButton>
							<RedditShareButton
								url={
									"https://www.linkedin.com/in/krystian-stawarczyk-240476212/"
								}
								quote={"FullStack Dev"}
								hashtag="Web Dev"
							>
								<RedditIcon className="mx-3" size={36} />
							</RedditShareButton>
							<LinkedinShareButton
								url={
									"https://www.linkedin.com/in/krystian-stawarczyk-240476212/"
								}
								quote={"FullStack Dev"}
								hashtag="Web Dev"
							>
								<LinkedinIcon className="mx-3" size={36} />
							</LinkedinShareButton>
						</div>
						<p className="pt-3 text-center">
							Copyrights {new Date().getFullYear()}&nbsp; K.Stawarczyk | All
							Rights Reserverd
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
