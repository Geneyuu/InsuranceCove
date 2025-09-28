import { useState, useEffect } from "react";
import slider1 from "../assets/Slider-1.webp";
import slider2 from "../assets/Slider-2.webp";
import slider3 from "../assets/Slider-3.webp";
import imageWave from "../assets/main-slider-shape.png";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const slides = [
	{
		id: 1,
		title: "Insurance that anchors and protects your",
		highlight: "future.",
		description:
			"At Insurance Cove, we guide you through life’s uncertainties with coverage you can trust. We help you find the right plan to secure your future.",
		heroImg: slider1,
	},
	{
		id: 2,
		title: "The best time to protect what matters is",
		highlight: "now.",
		description:
			"We believe peace of mind shouldn't wait. Whether you're just starting out or reevaluating your coverage, there's no better time to anchor your security than now.",
		heroImg: slider2,
	},
	{
		id: 3,
		title: "Your safety cove when life gets",
		highlight: "unpredictable.",
		description:
			"With the right insurance, you’re prepared for life’s storms—giving you peace of mind and protection through every challenge.",
		heroImg: slider3,
	},
];

const Hero = () => {
	const [currentSlide, setCurrentSlide] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % slides.length);
		}, 5000);
		return () => clearInterval(interval);
	}, []);

	const slide = slides[currentSlide];

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1, ease: "easeInOut" }}
			className="relative h-[55vh] md:min-h-screen bg-[#171827]"
		>
			<div className="absolute inset-0 bg-gradient-to-r from-[#2a2b3d]/100 via-[#1f2235]/70 md:bg-gradient-to-r md:from-[#1f2235]/100 md:via-[#2a2b3d]/95 lg:from-[#171827]/100 lg:via-[#1f2235]/80 z-10 md:max-w-[100%]"></div>

			<div className="max-w-6xl mx-auto">
				<motion.img
					src={imageWave}
					alt="Shape"
					className="absolute top-0 -left-32 md:-left-52 lg:-left-40 h-full z-10 object-contain filter brightness-75 pointer-events-none"
					animate={{ x: [0, -50, 0] }}
					transition={{
						duration: 2.5,
						repeat: Infinity,
						repeatType: "loop",
						ease: "easeInOut",
					}}
				/>

				<AnimatePresence mode="wait">
					<motion.div
						key={slide.id}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 1.5 }}
						className="flex flex-col items-start relative z-10"
					>
						<h1 className="text-4xl md:text-5xl md:px-12 lg:px-12 xl:px-4 px-4 md:text-7xl  md:max-w-3xl font-medium tracking-tighter mt-32 md:mt-56 text-white text-center md:text-left">
							{slide.title}{" "}
							<span className="text-[#ffd000] font-bold">
								{slide.highlight}
							</span>
						</h1>
						<p className="mt-4 text-xs md:px-12 lg:px-12 xl:px-4 px-4 md:max-w-xl  md:text-lg text-gray-400 font-medium text-center md:text-left">
							{slide.description}
						</p>
						<motion.button
							className="mt-8 mx-auto md:mx-12 lg:mx-12 xl:mx-4 bg-[#171827] px-6 py-3 text-sm md:text-lg font-extrabold cursor-pointer hover:bg-[#0C4F90] transition-colors duration-300 text-gray-100 tracking-tight"
							whileHover={{ scale: 1.02 }}
							transition={{ type: "spring", stiffness: 500 }}
						>
							Let's Get Started
						</motion.button>
					</motion.div>
				</AnimatePresence>

				<AnimatePresence mode="wait">
					<motion.img
						style={{ transform: "scaleX(-1)" }}
						key={slide.id}
						src={slide.heroImg}
						alt=""
						initial={{ opacity: 0, scale: 1 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0, scale: 1 }}
						transition={{ duration: 1.5, ease: "easeInOut" }}
						className="absolute top-0 left-0 w-full h-full object-cover scale-x-[-1] pointer-events-none"
					/>
				</AnimatePresence>

				<div className="absolute bottom-0 hidden md:hidden lg:flex lg:top-[380px] lg:bottom-auto left-1 right-1 lg:left-10 lg:right-10 flex justify-between px-4 lg:px-0 z-30 transform lg:-translate-y-1/2">
					<button
						onClick={() =>
							setCurrentSlide(
								(prev) =>
									(prev - 1 + slides.length) % slides.length
							)
						}
						className="text-yellow-500 text-3xl md:text-3xl bg-transparent border rounded-full p-1 "
					>
						<IoIosArrowBack />
					</button>
					<button
						onClick={() =>
							setCurrentSlide(
								(prev) => (prev + 1) % slides.length
							)
						}
						className="text-yellow-500 text-3xl md:text-3xl bg-transparent/5 border rounded-full p-1 "
					>
						<IoIosArrowForward />
					</button>
				</div>
			</div>
		</motion.div>
	);
};

export default Hero;
