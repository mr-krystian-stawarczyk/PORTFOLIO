import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faDesktop, faFileCode } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
	return (
		<div className="services">
			<h1 className="py-5">My services </h1>
			<div className="container">
				<div className="row ">
					<div className=" col-md-5 col-sm-6">
						<div className="box ">
							<div className="circle">
								<FontAwesomeIcon className="icon" icon={faDesktop} size="2x" />
							</div>
							<h3> Web design</h3>
							<p>I approach project indyvidualy</p>
						</div>
					</div>

					<div className="col-md-5 col-sm-6">
						<div className="box">
							<div className="circle">
								<FontAwesomeIcon className="icon" icon={faFileCode} size="2x" />
							</div>
							<h3> Web dev</h3>

							<p>Newest trends, best performance</p>
						</div>
					</div>

					<div className=" col-md-5 col-sm-6">
						<div className="box">
							<div className="circle">
								<FontAwesomeIcon
									className="icon"
									icon={faFacebookF}
									size="2x"
								/>
							</div>
							<h3> Fb Ads</h3>
							<p>Catch new potential clients.</p>
						</div>
					</div>

					<div className=" col-md-5 col-sm-6">
						<div className="box">
							<div className="circle">
								<FontAwesomeIcon className="icon" icon={faGoogle} size="2x" />
							</div>
							<h3> Google Ads</h3>
							<p>Your services are on the top!</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Services;
