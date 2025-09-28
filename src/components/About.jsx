import { useState } from "react";
import aboutImage from "../assets/about-one-image-1.jpg";
import aboutImage2 from "../assets/about-one-image-2.jpg";
import abstractImage from "../assets/abstract-dots.png";
import { motion } from "framer-motion";
import { BiSolidDownArrow } from "react-icons/bi";
import { MdVerified } from "react-icons/md";

// Animation for content text
const textVariants = {
	hidden: { opacity: 0, x: 50 },
	visible: {
		opacity: 1,
		x: 0,
		transition: { duration: 1.5, ease: "easeOut" },
	},
};

// Animation for background hover effect on buttons
const bgVariants = {
	initial: { width: 0, left: 0 },
	hover: {
		width: "100%",
		transition: { duration: 0.4, ease: "easeInOut" },
	},
};

// NEW: Animation for image section
const imageVariants = {
	hidden: { opacity: 0, x: -50 },
	visible: {
		opacity: 1,
		x: 0,
		transition: { duration: 1.2, ease: "easeOut" },
	},
};

const About = () => {
	const [activeTab, setActiveTab] = useState("mission");

	return (
		<div className="flex flex-col min-h-screen md:flex-row gap-10 md:gap-20 items-start max-w-6xl mx-auto px-4 md:px-6  md:my-28">
			{/* Image Section with motion */}
			<motion.div
				className="relative w-full md:w-[70%]"
				variants={imageVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.3 }}
			>
				<img
					src={abstractImage}
					alt="Abstract"
					className="absolute top-10 opacity-85 -z-20 hidden xl:flex -left-5 rounded-3xl object-contain"
				/>
				<img
					src={aboutImage}
					alt="About us"
					className="w-full h-full md:h-[550px] md:w-[50rem] object-cover rounded-3xl"
				/>
				<img
					src={aboutImage2}
					alt="Overlay"
					className="absolute -bottom-32 lg:-left-24 rounded-2xl hidden xl:flex"
				/>
			</motion.div>

			{/* Content Section */}
			<motion.div
				className="flex flex-col w-full items-center md:items-start text-center md:text-left"
				variants={textVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.3 }}
			>
				<h2 className="text-[#ffd000] text-base font-bold mb-3">
					ABOUT US
				</h2>
				<h1 className="text-white text-3xl md:text-5xl font-extrabold leading-tight max-w-lg md:mx-w-xl">
					We provide the best insurance policy
				</h1>
				<p className="text-[#ffd000] font-extralight mt-6 md:mt-10 text-sm md:text-[16px] max-w-lg">
					Insurance Cove was founded with one mission:
				</p>
				<p className="text-[#ffd000] font-extralight text-sm md:text-[16px] max-w-lg">
					to make insurance simple, reliable, and accessible for
					everyone.
				</p>
				<span className="mt-5 text-gray-400">
					With 30 years of experience guiding people toward the right
					protection, we serve as a safe harbor for your health,
					family, and assets—anchoring security and peace of mind when
					it matters most.
				</span>

				{/* Tabs */}
				<div className="flex gap-4 mt-8 flex-wrap justify-center md:justify-start">
					{/* MISSION Tab */}
					<div className="flex flex-col items-center">
						<motion.button
							onClick={() => setActiveTab("mission")}
							className={`relative overflow-hidden px-5 py-4 font-extrabold text-sm 
								${activeTab === "mission" ? "bg-[#0070eb] text-white" : "bg-white text-black"}`}
							whileHover="hover"
							initial="initial"
						>
							<motion.div
								variants={bgVariants}
								className="absolute top-0 left-0 h-full bg-[#0070eb] z-0"
							/>
							<span className="relative z-10">OUR MISSION</span>
						</motion.button>
						{activeTab === "mission" && (
							<BiSolidDownArrow
								className="text-[#0070eb] -mt-2"
								size={20}
							/>
						)}
					</div>

					{/* VISION Tab */}
					<div className="flex flex-col items-center">
						<motion.button
							onClick={() => setActiveTab("vision")}
							className={`relative overflow-hidden px-5 py-4 font-extrabold text-sm 
								${activeTab === "vision" ? "bg-[#0070eb] text-white" : "bg-white text-black"}`}
							whileHover="hover"
							initial="initial"
						>
							<motion.div
								variants={bgVariants}
								className="absolute top-0 left-0 h-full bg-[#0070eb] z-0"
							/>
							<span className="relative z-10">OUR VISION</span>
						</motion.button>
						{activeTab === "vision" && (
							<BiSolidDownArrow
								className="text-[#0070eb] -mt-2"
								size={20}
							/>
						)}
					</div>
				</div>

				{/* Tab Content */}
				<div className="mt-5 text-left text-sm text-gray-300 max-w-sm flex flex-col gap-4">
					{activeTab === "mission" && (
						<>
							<div className="flex items-start gap-3">
								<MdVerified className="text-blue-500 text-[20px] mt-[2px] shrink-0" />
								<p>
									Our mission is simple: to protect what
									matters most — your loved ones.
								</p>
							</div>
							<div className="flex items-start gap-3">
								<MdVerified className="text-blue-500 text-[20px] mt-[2px] shrink-0" />
								<p>
									We do this by offering trusted life
									insurance solutions and benefits that ensure
									comfort and security in life’s most
									uncertain moments.
								</p>
							</div>
						</>
					)}

					{activeTab === "vision" && (
						<>
							<div className="flex items-start gap-3">
								<MdVerified className="text-blue-500 text-[20px] mt-[2px] shrink-0" />
								<p>
									To be the most trusted partner in life
									insurance — protecting families with
									integrity, compassion, and dependable
									solutions.
								</p>
							</div>
							<div className="flex items-start gap-3">
								<MdVerified className="text-blue-500 text-[20px] mt-[2px] shrink-0" />
								<p>
									To empower clients to face the future with
									confidence, knowing they are protected by a
									partner who truly cares.
								</p>
							</div>
						</>
					)}
				</div>
			</motion.div>
		</div>
	);
};

export default About;
