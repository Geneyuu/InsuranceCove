import { useEffect } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import TopBar from "./components/TopBar";
import BackToTop from "./components/BackToTop";
import Appointment from "./components/Appointment";
import About from "./components/About";
import aboutImageOverlay from "./assets/image-about-overlay-2.png";
import shapeImage from "./assets/main-slider-shape-1-2.png";
import contactBackground from "./assets/get-insurance-bg.png";

import { motion } from "framer-motion";
import Services from "./components/Services";
import Contact from "./components/Contact";

const App = () => {
	useEffect(() => {
		(function () {
			var Tawk_API = Tawk_API || {};
			var Tawk_LoadStart = new Date();

			var s1 = document.createElement("script");
			var s0 = document.getElementsByTagName("script")[0];
			s1.async = true;
			s1.src = "https://embed.tawk.to/68d7fdab5d0bdc194bdb073c/1j65rdpv9";
			s1.charset = "UTF-8";
			s1.setAttribute("crossorigin", "*");
			s0.parentNode.insertBefore(s1, s0);
		})();
	}, []);

	return (
		<div className="min-h-screen text-white bg-[#171827]">
			{/* Top bar hidden on small screens */}
			<TopBar className="hidden md:block" />

			<Navbar />

			{/* Hero Section */}
			<section id="home">
				<Hero />
			</section>

			{/* About Section */}
			<section
				id="about"
				className="relative min-h-screen flex justify-center items-center bg-[#171827] z-0 my-20 md:my-0"
			>
				<motion.img
					src={aboutImageOverlay}
					alt="Background Overlay"
					className="absolute bottom-0 right-0 md:right-40 opacity-5 pointer-events-none max-w-[500px] h-auto z-[-1]"
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
					className="absolute top-20 right-10 md:top-40 md:right-24 w-20 h-20 md:w-28 md:h-28 animate-spin-slow pointer-events-none z-[-1]"
				/>

				<About />
			</section>

			{/* Services Section */}
			<section id="services" className="md:py-44 py-16 bg-[#131420]">
				<Services />
			</section>

			{/* Contact Section */}
			<section
				id="contact"
				className="relative min-h-screen bg-[#171827]"
			>
				<div className="absolute inset-0 z-[-1]">
					<img
						src={contactBackground}
						alt="Contact Background"
						className="object-cover w-full h-full opacity-10"
					/>
				</div>
				<Contact />
			</section>

			<BackToTop />

			{/* <Appointment /> */}
		</div>
	);
};

export default App;
