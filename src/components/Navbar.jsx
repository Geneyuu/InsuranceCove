import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import officialLogo from "../assets/officialLogo.png";
import { FaPhoneFlip } from "react-icons/fa6";
import { CgMenuRight } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import Sidebar from "./Sidebar"; // Right sidebar
import SidebarMenu from "./SidebarMenu"; // Left sidebar (navigation links)
import NavLinks from "./NavLinks";

const NavbarContent = ({ onMenuNav, onMenuInfo }) => (
	<div className="max-w-6xl mx-auto flex items-center justify-evenly py-6 md:px-12 lg:px-12 xl:px-0 px-4">
		{/* Left Menu Icon (mobile + md) */}
		<div
			className="flex md:flex lg:hidden text-2xl cursor-pointer"
			onClick={onMenuNav}
		>
			<GiHamburgerMenu />
		</div>

		{/* Logo */}
		<div className="flex-1 flex justify-center md:justify-center lg:justify-start">
			<img
				src={officialLogo}
				alt="Logo"
				className="h-[55px] md:h-[65px]"
			/>
		</div>

		{/* Desktop NavLinks */}
		<div className="hidden lg:flex">
			<NavLinks />
		</div>

		{/* Right side (desktop only) */}
		<div className="hidden md:flex lg:flex flex-row items-center lg:ml-10">
			{/* Right Sidebar Icon */}
			<div
				className="text-2xl md:text-3xl cursor-pointer border-l-2 border-white/30 pl-2 h-8 flex items-center"
				onClick={onMenuInfo}
			>
				<CgMenuRight />
			</div>
		</div>

		{/* Mobile Right Sidebar Icon */}
		<div
			className="flex md:hidden text-2xl cursor-pointer border-l-2 items-center border-white/30 pl-2 h-8"
			onClick={onMenuInfo}
		>
			<CgMenuRight />
		</div>
	</div>
);

const Navbar = () => {
	const [menuInfo, setMenuInfo] = useState(false); // Right sidebar
	const [menuNav, setMenuNav] = useState(false); // Left sidebar
	const [show, setShow] = useState(false); // Scroll navbar

	useEffect(() => {
		const handleScroll = () => {
			setShow(window.scrollY > 50);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<>
			{/* Default Navbar */}
			<div className="bg-[#171827] drop-shadow-lg">
				<NavbarContent
					onMenuNav={() => setMenuNav(true)}
					onMenuInfo={() => setMenuInfo(true)}
				/>
			</div>
			{/* Scroll Navbar */}
			{show && (
				<motion.div
					initial={{ y: -80, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					exit={{ y: -80, opacity: 0 }}
					transition={{ duration: 0.4 }}
					className="fixed top-0 left-0 w-full bg-[#171827] drop-shadow-lg z-50 border-b-[2px] border-yellow-300"
				>
					<NavbarContent
						onMenuNav={() => setMenuNav(true)}
						onMenuInfo={() => setMenuInfo(true)}
					/>
				</motion.div>
			)}
			{/* Overlay + Sidebars */}
			<AnimatePresence>
				{menuNav && (
					<motion.div
						className="fixed inset-0 bg-black z-40"
						initial={{ opacity: 0 }}
						animate={{ opacity: 0.5 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.3 }}
						onClick={() => setMenuNav(false)}
					/>
				)}
			</AnimatePresence>
			{/* Sidebars */}
			<SidebarMenu menuNav={menuNav} setMenuNav={setMenuNav} />{" "}
			<Sidebar menuInfo={menuInfo} setMenuInfo={setMenuInfo} />
		</>
	);
};

export default Navbar;
