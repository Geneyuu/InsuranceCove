import { useEffect } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import TopBar from "./components/TopBar";
import BackToTop from "./components/BackToTop";
import Appointment from "./components/Appointment";
import About from "./components/About";
import aboutImageOverlay from "./assets/image-about-overlay-2.png";
import shapeImage from "./assets/main-slider-shape-1-2.png";

import { motion } from "framer-motion";
import Services from "./components/Services";

const App = () => {
	useEffect(() => {
		(function () {
			var Tawk_API = Tawk_API || {};
			Tawk_API.onLoad = function () {
				Tawk_API.customStyle = {
					zIndex: 999999,
					bottom: "100px",
					right: "50px",
				};
			};

			var s1 = document.createElement("script"),
				s0 = document.getElementsByTagName("script")[0];
			s1.async = true;
			s1.src = "https://embed.tawk.to/68c7edece72aad1923de0611/1j56fip4d";
			s1.charset = "UTF-8";
			s1.setAttribute("crossorigin", "*");
			s0.parentNode.insertBefore(s1, s0);
		})();
	}, []);

	return (
		<div className="min-h-screen text-white ">
			{/* TopBar (visible only on md and up) */}
			<TopBar className="hidden md:block" />

			{/* Navbar (always visible) */}
			<Navbar />

			{/* Hero Section */}
			<section id="home">
				<Hero />
			</section>

			{/* About Section */}
			<section
				id="about"
				className="relative h-screen flex justify-center items-center bg-[#171827] z-0"
			>
				{/* Background Overlay Image */}
				<motion.img
					src={aboutImageOverlay}
					alt="Background Overlay"
					className="absolute -bottom-0 right-0 md:right-40 opacity-5 pointer-events-none md:h-[500px]"
					animate={{ x: [0, -35, 0] }}
					transition={{
						duration: 2,
						repeat: Infinity,
						ease: "easeInOut",
					}}
				/>
				<img
					src={shapeImage}
					alt="Shape"
					className="absolute top-40 right-24 w-50 h-15 md:w-28 md:h-30 animate-spin-slow pointer-events-none "
				/>

				{/* <img
					src={aboutWaveOverlay}
					alt="Background Overlay"
					className="absolute md:bottom-24 md:left-0 opacity-30 pointer-events-none md:h-[400px] filter-yellow"
				/> */}

				<About />
			</section>

			{/* Services Section */}
			<section id="services" className="md:py-44 py-10 bg-[#131420]">
				<Services />
			</section>

			{/* Contact Section */}
			<section
				id="contact"
				className="h-screen flex items-center justify-center bg-blue-200"
			>
				<h1 className="text-black text-2xl md:text-4xl">
					Contact Section
				</h1>
			</section>

			{/* Back to Top Button */}
			<BackToTop />

			{/* Appointment (probably floating or fixed?) */}
			<Appointment />
		</div>
	);
};

export default App;
