import { Link } from "react-scroll";
import { useEffect, useState } from "react";

const navLinks = [
	{ id: 1, name: "Home", href: "home" },
	{ id: 2, name: "About Us", href: "about" },
	{ id: 3, name: "Services", href: "services" },
	{ id: 4, name: "Contact", href: "contact" },
];

const NavLinks = () => {
	const [active, setActive] = useState("home");

	useEffect(() => {
		if (window.scrollY === 0) {
			setActive("home");
		}
	}, []);

	const handleSetActive = (to) => {
		setActive(to);
	};

	return (
		<div className="hidden custom:flex items-center text-white mx-auto border-[1px] border-gray-600 bg-[#2b2d472f] rounded-3xl">
			{navLinks.map((link) => (
				<Link
					key={link.id}
					to={link.href}
					spy={true}
					smooth={true}
					offset={
						link.href === "about"
							? -90
							: link.href === "home"
							? -200
							: 0
					}
					duration={0}
					delay={0}
					className={`relative capitalize text-lg ml-5 font-medium px-3 cursor-pointer transition-all ${
						active === link.href
							? "text-[#e9bf02] font-extrabold underline underline-offset-[18px]"
							: "text-gray-300 hover:text-[#e9bf02] hover:underline hover:underline-offset-[18px]"
					}`}
					onSetActive={handleSetActive}
				>
					{link.name}
				</Link>
			))}

			<Link
				to="GetAQuote"
				spy={true}
				smooth={true}
				offset={-80}
				duration={500}
				className={`bg-[#2563EB] px-5 py-3 text-white font-light text-[15px] hover:bg-[#e9bf02] hover:text-black cursor-pointer transition rounded-r-3xl ml-6 ${
					active === "GetAQuote"
						? "ring-2 ring-[#e9bf02] text-black bg-[#e9bf02]"
						: ""
				}`}
				onSetActive={handleSetActive}
			>
				Book a Consultation
			</Link>
		</div>
	);
};

export default NavLinks;
