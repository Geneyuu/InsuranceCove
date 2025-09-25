import React from "react";
import box1 from "../assets/services-image.jpg";
import {
	MdOutlineAttachMoney,
	MdOutlineHealthAndSafety,
	MdOutlineHome,
	MdOutlineLocalHospital,
	MdHealthAndSafety,
	MdOutlineChildCare,
} from "react-icons/md";
import { GiLifeBar, GiDeathSkull, GiReceiveMoney } from "react-icons/gi";
import { PiHeartbeatFill } from "react-icons/pi";

const insuranceProducts = [
	{
		title: "Life Insurance",
		description:
			"Safeguard your family’s financial future with reliable life insurance tailored to your needs.",
	},
	{
		title: "Funeral & Final Expense Coverage",
		description:
			"Ease the burden on your loved ones by covering end-of-life costs, ensuring dignity and peace of mind.",
	},
	{
		title: "Paycheck Protection",
		description:
			"Replace lost income so your family can continue their daily life without financial stress if the unexpected happens.",
	},
	{
		title: "Children’s Education Plans",
		description:
			"Secure your child’s future with benefits that help cover tuition and educational needs.",
	},
	{
		title: "Mortgage Protection",
		description:
			"Keep your home in your family’s hands by ensuring mortgage payments are covered, even in difficult times.",
	},
	{
		title: "Critical Illness & Cancer Benefits",
		description:
			"Extra financial support for treatment, recovery, and household expenses during a serious health challenge.",
	},
	{
		title: "Accidental Insurance",
		description:
			"Protection that provides added security and financial help in the event of accidents or injury.",
	},
	{
		title: "Supplemental Health Benefits",
		description:
			"Coverage that fills the gaps traditional health insurance may not fully cover.",
	},
];

const getIconByTitle = (title) => {
	switch (title) {
		case "Life Insurance":
			return <PiHeartbeatFill className="text-blue-500 text-3xl" />;
		case "Funeral & Final Expense Coverage":
			return <GiDeathSkull className="text-blue-500 text-3xl" />;
		case "Paycheck Protection":
			return <GiReceiveMoney className="text-blue-500 text-3xl" />;
		case "Children’s Education Plans":
			return <MdOutlineChildCare className="text-blue-500 text-3xl" />;
		case "Mortgage Protection":
			return <MdOutlineHome className="text-blue-500 text-3xl" />;
		case "Critical Illness & Cancer Benefits":
			return (
				<MdOutlineHealthAndSafety className="text-blue-500 text-3xl" />
			);
		case "Accidental Insurance":
			return <MdHealthAndSafety className="text-blue-500 text-3xl" />;
		case "Supplemental Health Benefits":
			return (
				<MdOutlineLocalHospital className="text-blue-500 text-3xl" />
			);
		default:
			return <MdOutlineAttachMoney className="text-blue-500 text-3xl" />;
	}
};

const Services = () => {
	return (
		<div className="max-w-7xl flex flex-col mx-auto px-4 sm:px-6 lg:px-8">
			<h2 className="text-[#ffd000]  text-center md:text-left font-bold mb-3 text-md sm:text-base ml-1">
				OUR SERVICES
			</h2>

			<div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-20 text-center md:text-left">
				<h1 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight w-full md:w-1/2">
					Coverage That Protects Every Chapter of Life
				</h1>
				<p className="text-gray-400 text-sm sm:text-base md:w-1/2">
					We provide life insurance solutions designed to protect your
					family, your income, and your peace of mind.
				</p>
			</div>

			{/* Flex-based Responsive Cards */}
			<div className="flex flex-wrap justify-center md:justify-between mt-10 gap-5">
				{insuranceProducts.map((product, index) => (
					<div
						key={index}
						className="group relative flex flex-col w-full sm:w-[48%] md:w-[30%] lg:w-[23%] bg-[#1e2033] rounded-xl overflow-hidden cursor-pointer"
					>
						{/* Image + Icon + Overlay */}
						<div className="relative w-full h-48 sm:h-56 md:h-52 overflow-hidden">
							<img
								src={box1}
								alt={product.title}
								className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
							/>
							{/* Overlay from top */}
							<div className="absolute inset-0 bg-black/40 translate-y-[-100%] group-hover:translate-y-0 transition-all duration-500 ease-in-out z-10" />
						</div>

						{/* Icon above overlay */}
						<div className="absolute top-[155px]  sm:top-[170px] left-5 bg-[#131420] p-3 rounded-full ">
							{getIconByTitle(product.title)}
						</div>

						{/* Text Content */}
						<div className="flex flex-col py-5 px-5 transition-colors duration-300">
							<div className="w-20 h-1 bg-gradient-to-r my-2 from-blue-600 to-cyan-400 rounded-full"></div>
							<h3 className="mt-3 text-lg sm:text-xl font-bold group-hover:text-[#ffd000] transition-colors duration-300">
								{product.title}
							</h3>
							<p className="my-3 text-gray-400 text-sm">
								{product.description}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Services;
