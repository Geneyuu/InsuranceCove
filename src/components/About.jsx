import { useState } from "react";
import aboutImage from "../assets/about-one-img-1.jpg";
import aboutImage2 from "../assets/about-one-img-2.jpg";
import abstractImage from "../assets/abstract-dots.png";
import { motion } from "framer-motion";
import { BiSolidDownArrow } from "react-icons/bi";
import { FaCheck, FaPhoneFlip } from "react-icons/fa6";

const bgVariants = {
	initial: { width: 0, left: 0 },
	hover: {
		width: "100%",
		transition: { duration: 0.4, ease: "easeInOut" },
	},
};

const textVariants = {
	hidden: { opacity: 0, x: 50 },
	visible: {
		opacity: 1,
		x: 0,
		transition: { duration: 1.5, ease: "easeOut" },
	},
};

const About = () => {
	const [activeTab, setActiveTab] = useState("mission");

	const handleToggle = (tab) => {
		setActiveTab(tab);
	};

	return (
		<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start my-16 md:my-28 gap-10 md:gap-20 px-4 md:px-6">
			{/* Image section */}
			<div className="relative w-full md:w-[70%]">
				<img
					src={abstractImage}
					alt="About us"
					className="absolute top-10 opacity-85 -z-20 md:-left-14 lg:-left-5 rounded-3xl hidden lg:hidden xl:flex"
				/>
				<img
					src={aboutImage}
					alt="About us"
					className="w-full h-64 sm:h-80 md:h-[500px] object-cover rounded-3xl"
				/>
				<img
					src={aboutImage2}
					alt="About us"
					className="absolute -bottom-20 -left-32 md:-left-14 lg:-left-32 rounded-3xl hidden lg:hidden xl:flex"
				/>
			</div>

			{/* Content section */}
			<motion.div
				className="flex flex-col w-full text-center md:text-left items-center md:items-start"
				variants={textVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.3 }}
			>
				<h2 className="text-white  text-base sm:text-lg font-bold mb-3">
					ABOUT US
				</h2>
				<h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mt-2 leading-tight">
					We provide the best insurance policy
				</h1>
				<p className="mt-6 sm:mt-10 text-md sm:text-md text-[#ffd000] font-extralight max-w-lg">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Possimus nobis distinctio maxime iusto numquam
					exercitationem voluptates amet eos quo veritatis.
				</p>

				{/* Tab buttons (always horizontal) */}
				<div className="flex flex-row gap-4 mt-16 flex-wrap justify-center md:justify-start">
					{["mission", "vision"].map((tab) => {
						const isActive = activeTab === tab;
						return (
							<div
								key={tab}
								className="relative flex flex-col items-center"
							>
								<motion.button
									onClick={() => handleToggle(tab)}
									className={`relative overflow-hidden px-5 sm:px-10 py-4 sm:py-5 font-semibold transition-colors duration-300 
										${isActive ? "bg-[#0070eb] text-white" : "bg-white text-black"}`}
									whileHover="hover"
									initial="initial"
								>
									<motion.div
										variants={bgVariants}
										className="absolute top-0 left-0 h-full bg-[#0070eb] z-0"
									/>
									<span className="relative z-10 text-sm sm:text-base whitespace-nowrap">
										{tab === "mission"
											? "OUR MISSION"
											: "OUR VISION"}
									</span>
								</motion.button>

								{/* Arrow under active tab */}
								{isActive && (
									<BiSolidDownArrow
										className="text-[#0070eb] -mt-2"
										size={20}
									/>
								)}
							</div>
						);
					})}
				</div>

				{/* Content text with icon */}
				<div className="mt-6 sm:mt-8 text-gray-300 text-base sm:text-lg max-w-sm">
					{activeTab === "mission" && (
						<div className="flex items-center gap-3 justify-center md:justify-start">
							<FaCheck className="text-blue-500 text-sm" />
							<p className="">
								Our mission is to provide affordable and
								reliable insurance solutions
							</p>
						</div>
					)}
					{activeTab === "vision" && (
						<div className="flex items-center gap-3 justify-center md:justify-start">
							<FaCheck className="text-blue-500 text-sm" />
							<p className="">
								Our vision is to become the most trusted
								insurance provider
							</p>
						</div>
					)}
				</div>

				{/* Optional: CTA section (commented out) */}
				{/* 
				<div className="flex items-center gap-5 mt-10">
					<button className="w-fit px-14 py-3 bg-[#0070eb] rounded-md text-white font-extrabold">
						Get a Quote
					</button>
					<div className="flex items-center gap-3">
						<div className="border border-[#0C91D5] p-3 rounded-full cursor-pointer transition-colors duration-300 md:text-3xl flex items-center justify-center">
							<FaPhoneFlip
								color="#0C91D5"
								className="hover:text-white text-[20px]"
							/>
						</div>
						<div className="flex flex-col text-xs md:text-sm leading-tight">
							<p className="font-semibold text-white">
								+92(003) 68-090
							</p>
							<span className="text-white/60 font-light tracking-tight">
								Call to our Experts
							</span>
						</div>
					</div>
				</div>
				*/}
			</motion.div>
		</div>
	);
};

export default About;
