import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Experience from "./components/Experience";

function App() {
	return (
		<>
			<Particles
				className="particles-canvas"
				params={{
					particles: {
						number: {
							value: 30,
							density: {
								enable: true,
								value_area: 700,
							},
						},
						shape: {
							type: "circle",
							stroke: {
								width: 2,
								color: "#f9ab00",
								opacity: 0.2,
							},
						},
					},
				}}
			/>
			<Navbar />
			<Header />
			<About />
			<Services />
			<Experience />
		</>
	);
}

export default App;
