import React, { useState } from "react";
import logo from "../logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-scroll";

import { faBars } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
	const [open, setOpen] = useState(false);

	const handleClick = (e) => {
		e.preventDefault();
		const hideMenu = document.getElementById("navbarSupportedContent");
		hideMenu.classList.remove("show");
		const handleToggler = document.getElementById("toggler");
		handleToggler.classList.add("collapsed");
	};

	const handleState = (e) => {
		e.preventDefault();
		if (open) {
			setOpen(false);
		} else {
			setOpen(true);
		}
	};
	return (
		<nav
			className="navbar navbar-expand-lg navbar-light
		fixed-top"
		>
			<div className="container">
				<div className="navbar-brand">
					<img className="logo" src={logo} alt="logo?" />
				</div>
				<button
					className="navbar-toggler "
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
					id="toggler"
					onClick={handleState}
				>
					<FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
				</button>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item active">
							<Link
								className="nav-link"
								offset={-110}
								smooth={true}
								to="home"
								href="#"
								onClick={handleClick}
							>
								Home <span className="sr-only">(current)</span>
							</Link>
						</li>

						<li className="nav-item">
							<Link
								className="nav-link"
								offset={-110}
								smooth={true}
								to="about"
								href="#"
								onClick={handleClick}
							>
								About
							</Link>
						</li>

						<li className="nav-item">
							<Link
								className="nav-link"
								offset={-110}
								smooth={true}
								to="services"
								href="#"
								onClick={handleClick}
							>
								Services
							</Link>
						</li>

						<li className="nav-item">
							<Link
								className="nav-link"
								offset={-110}
								smooth={true}
								to="experience"
								href="#"
								onClick={handleClick}
							>
								Experience
							</Link>
						</li>

						<li className="nav-item">
							<Link
								className="nav-link"
								offset={-110}
								smooth={true}
								to="portfolio"
								href="#"
								onClick={handleClick}
							>
								Portfolio
							</Link>
						</li>

						<li className="nav-item">
							<Link
								className="nav-link"
								offset={-110}
								smooth={true}
								to="progress"
								href="#"
								onClick={handleClick}
							>
								Progress
							</Link>
						</li>

						<li className="nav-item">
							<Link
								className="nav-link"
								offset={-110}
								smooth={true}
								to="contacts"
								href="#"
								onClick={handleClick}
							>
								Contact
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
