// Import Library
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Import Components
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import AppStore from "./components/AppStore/AppStore";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";

const App = () => {
	// Initialize AOS
	useEffect(() => {
		AOS.init({
			offset: 100,
			duration: 700,
			easing: "ease-in",
			delay: 100,
		});
		AOS.refresh();
	}, []);

	return (
		<div id="app">
			<h1 className="overflow-x-hidden">
				<Navbar />
				<Hero />
				<Services />
				<Banner />
				<AppStore />
				<Testimonials />
				<Footer />
			</h1>
		</div>
	);
};

export default App;
