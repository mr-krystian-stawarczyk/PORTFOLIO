import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Progress from "./components/Progress";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

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
								opacity: 0.1,
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
			<Portfolio /> 
			<Progress />
			<Contacts />
			<Footer /> 
		</>
	);
}

export default App;
