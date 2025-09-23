import { useEffect } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import TopBar from "./components/TopBar";
import BackToTop from "./components/BackToTop";
import Appointment from "./components/Appointment";
import About from "./components/About";
import aboutImage from "./assets/hero-sample-2.webp";
import aboutImageTop from "./assets/team-one-shape-1.png";

const App = () => {
	useEffect(() => {
		(function () {
			var Tawk_API = Tawk_API || {};
			Tawk_API.onLoad = function () {
				// I-adjust position (e.g., 80px from bottom)
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
		<div className="bg-[#171827] min-h-screen text-white">
			<div className="hidden md:block">
				<TopBar />
			</div>
			<div className="">
				<Navbar />
			</div>

			<section id="home">
				<Hero />
			</section>
			<section
				id="about"
				className="relative h-screen flex justify-center items-center"
			>
				{/* Background Layer */}
				<div className="absolute inset-0">
					{/* Bottom-right image */}
					{/* <img
						src={aboutImage}
						alt="Background Bottom"
						className="absolute bottom-0 right-0 w-[70%] h-auto object-contain pointer-events-none z-0"
					/> */}

					{/* Top-right image */}
					<img
						src={aboutImageTop}
						alt="Background Top"
						className="absolute md:top-0 bottom-24 right-0 w-[60%] md:w-[35%] h-auto object-contain pointer-events-none z-20 opacity-15 grayscale"
					/>

					{/* Overlay */}
					<div className="absolute inset-0 bg-[#171827] bg-opacity-[0.98]" />
				</div>

				{/* Foreground Content */}
				<div className="relative z-10">
					<About />
				</div>
			</section>

			<section
				id="services"
				className="h-screen flex items-center justify-center bg-red-200"
			>
				<h1>Services Section</h1>
			</section>
			<section
				id="contact"
				className="h-screen flex items-center justify-center"
			>
				<h1>Contact Section</h1>
			</section>

			{/* Back to top button */}
			<BackToTop />
			<Appointment />
		</div>
	);
};

export default App;
