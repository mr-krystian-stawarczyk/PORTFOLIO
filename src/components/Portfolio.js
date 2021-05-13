import React from "react";
import houser from "../images/portfolio/Houser.png";
import cashapp from "../images/portfolio/ModernCash.png";
import crypto from "../images/portfolio/CryptoTrack.png";
import todo from "../images/portfolio/Todo.png";
/* ------------------ Font Awesome -------------- */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
/* ------------------- React Popup ---------------*/

import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {
	// First popup Houser -----------------------------------------------------------//
	const openPopupboxHouser = () => {
		const content = (
			<>
				<img
					className="portfolio-image-popupbox"
					src={houser}
					alt="Houser Project popup"
				/>
				<p>Estate project usign slide effect on main content.</p>
				<b>Github: </b>
				<a
					className="hyper-link"
					href="/"
					onClick={() =>
						window.open("https://github.com/mr-krystian-stawarczyk/Houser")
					}
				>
					https://github.com/mr-krystian-stawarczyk/Houser
				</a>
			</>
		);
		PopupboxManager.open({ content });
	};
	const popupboxConfigHouser = {
		titleBar: {
			enable: true,
			text: "Houser slider effect",
		},
		fadeIn: true,
		fadeInSpeed: 500,
	};

	// Second popup moneyflow ---------------------------------------------------------------//

	const openPopupboxMoney = () => {
		const content = (
			<>
				<img
					className="portfolio-image-popupbox"
					src={cashapp}
					alt="Money Project popup"
				/>
				<p>Responsive site using scroll and video main section.</p>
				<b>Github: </b>
				<a
					className="hyper-link"
					href="/"
					onClick={() =>
						window.open("https://github.com/mr-krystian-stawarczyk/Modern-cash")
					}
				>
					https://github.com/mr-krystian-stawarczyk/Modern-cash
				</a>
			</>
		);
		PopupboxManager.open({ content });
	};
	const popupboxConfigMoney = {
		titleBar: {
			enable: true,
			text: "Cash App responsive design.",
		},
		fadeIn: true,
		fadeInSpeed: 500,
	};

	// Third popup crypto-tracker ---------------------------------------------------------------//

	const openPopupboxCrypto = () => {
		const content = (
			<>
				<img
					className="portfolio-image-popupbox"
					src={crypto}
					alt="Crypto Project popup"
				/>
				<p>Simple project using crypto tracking Api with live update.</p>
				<b>Github: </b>
				<a
					className="hyper-link"
					href="/"
					onClick={() =>
						window.open(
							"https://github.com/mr-krystian-stawarczyk/Crypto-trackin"
						)
					}
				>
					https://github.com/mr-krystian-stawarczyk/Crypto-trackin
				</a>
			</>
		);
		PopupboxManager.open({ content });
	};
	const popupboxConfigCrypto = {
		titleBar: {
			enable: true,
			text: "Crypto live tracking app",
		},
		fadeIn: true,
		fadeInSpeed: 500,
	};

	// Fourth project to-do list ---------------------------------------------------------------//

	const openPopupboxTodo = () => {
		const content = (
			<>
				<img
					className="portfolio-image-popupbox"
					src={todo}
					alt="To-do Project popup"
				/>
				<p>
					Basic project with to-do app including editing,updating etc. functions
					with live time function.
				</p>
				<b>Github: </b>
				<a
					className="hyper-link"
					href="/"
					onClick={() =>
						window.open("https://github.com/mr-krystian-stawarczyk/To-do-test")
					}
				>
					https://github.com/mr-krystian-stawarczyk/To-do-test
				</a>
			</>
		);
		PopupboxManager.open({ content });
	};
	const popupboxConfigTodo = {
		titleBar: {
			enable: true,
			text: "To-do app with full functionality",
		},
		fadeIn: true,
		fadeInSpeed: 500,
	};

	/*-------------------------------------------------------------------------------------*/
	return (
		<div className="portfolio-wrapper">
			<div className="container">
				<h1 className="text-uppercase text-center py-5">Portfolio</h1>
				<div className="image-box-wrapper row justify-content-center">
					<div className="portfolio-image-box" onClick={openPopupboxHouser}>
						<img
							className="portfolio-image"
							src={houser}
							alt="estate project"
						/>
						<div className="overflow"></div>
						<FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
					</div>

					<div className="portfolio-image-box" onClick={openPopupboxMoney}>
						<img
							className="portfolio-image"
							src={cashapp}
							alt="money-flow project"
						/>{" "}
						<div className="overflow"></div>
						<FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
					</div>

					<div className="portfolio-image-box" onClick={openPopupboxCrypto}>
						<img
							className="portfolio-image"
							src={crypto}
							alt="crypto-tracking project"
						/>{" "}
						<div className="overflow"></div>
						<FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
					</div>

					<div className="portfolio-image-box" onClick={openPopupboxTodo}>
						<img className="portfolio-image" src={todo} alt="to-do app" />{" "}
						<div className="overflow"></div>
						<FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
					</div>
				</div>
			</div>
			<PopupboxContainer {...popupboxConfigHouser} />
			<PopupboxContainer {...popupboxConfigMoney} />
			<PopupboxContainer {...popupboxConfigCrypto} />
			<PopupboxContainer {...popupboxConfigTodo} />
		</div>
	);
};

export default Portfolio;
