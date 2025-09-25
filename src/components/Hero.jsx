import { useState, useEffect } from "react";
import heroImage from "../assets/hero-bg.webp";
import heroImage2 from "../assets/hero-sample-2.webp";
import heroImage3 from "../assets/hero-sample.webp";
import overlayImage from "../assets/hero-bg-waves.webp";
import dotsImage from "../assets/dots.png";
import imageWave from "../assets/main-slider-shape.png";
import awardImage from "../assets/award.svg";
import { motion, AnimatePresence } from "framer-motion";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { MdArrowRightAlt } from "react-icons/md";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const slides = [
	{
		id: 1,
		title: "Insurance for the better family",
		highlight: "life.",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit iure ea suscipit ad! Laborum sed eum consequatur? Sapiente, repellendus odio!",
		heroImg: heroImage,
	},
	{
		id: 2,
		title: "Protect your family's future",
		highlight: "today.",
		description:
			"Plan ahead and secure peace of mind. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		heroImg: heroImage2,
	},
	{
		id: 3,
		title: "Your dreams, our protection",
		highlight: "guaranteed.",
		description:
			"Achieve your goals with confidence knowing we have your back. Secure your future with comprehensive coverage.",
		heroImg: heroImage3,
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
			className="relative h-[55vh] md:h-[100vh] bg-[#171827]"
		>
			<div
				className="absolute inset-0 bg-gradient-to-r  
  from-[#2a2b3d]/100 
  via-[#1f2235]/90 
  md:bg-gradient-to-r md:from-[#1f2235]/100 md:via-[#2a2b3d]/95 
  lg:from-[#171827]/100 lg:via-[#1f2235]/80 
  z-10 md:max-w-[95%]"
			></div>

			<div className="max-w-6xl mx-auto">
				{/* <img
					src={overlayImage}
					alt="Overlay"
					className="absolute inset-0 object-cover h-full w-[45vw] z-10 md:opacity-[0.04] opacity-[0.04]"
				/> */}

				<motion.img
					src={imageWave}
					alt="Shape"
					className="absolute top-0 -left-32 md:-left-52 lg:-left-32 h-full z-10 object-contain filter brightness-75 pointer-events-none"
					animate={{ x: [0, -35, 0] }}
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
						<h1 className="text-5xl md:px-12 lg:px-12 xl:px-4 px-4 md:text-7xl  md:max-w-3xl font-medium tracking-tighter mt-32 md:mt-56 text-white text-center md:text-left">
							{slide.title}{" "}
							<span className="text-[#ffd000] font-bold">
								{slide.highlight}
							</span>
						</h1>
						<p className="mt-4  text-sm md:px-12 lg:px-12 xl:px-4 px-4 md:max-w-xl  md:text-lg text-gray-400 font-medium text-center md:text-left">
							{slide.description}
						</p>
						<motion.button
							className="mt-8 mx-auto md:mx-12 lg:mx-12 xl:mx-4 bg-[#e9bf02] px-6 py-3 text-sm md:text-lg font-extrabold cursor-pointer hover:bg-[#0D97DC] transition-colors duration-300 text-gray-100 tracking-tight"
							whileHover={{ scale: 1.02 }}
							transition={{ type: "spring", stiffness: 500 }}
						>
							Let's Get Started
						</motion.button>
					</motion.div>
				</AnimatePresence>

				<AnimatePresence mode="wait">
					<motion.img
						key={slide.id}
						src={slide.heroImg}
						alt=""
						initial={{ opacity: 0, scale: 1 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0, scale: 1 }}
						transition={{ duration: 1.5, ease: "easeInOut" }}
						className="absolute top-0 left-0 w-full h-full object-cover"
					/>
				</AnimatePresence>

				<div className="absolute top-1/2 left-1 right-1 md:left-10 md:right-10 flex justify-between px-4 md:px-0 z-30">
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
