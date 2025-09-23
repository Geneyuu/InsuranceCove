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

	return (
		<div className="hidden custom:flex items-center  text-white mx-auto rounded-l-none rounded-r-lg">
			{navLinks.map((link) => (
				<Link
					key={link.id}
					to={link.href}
					spy={true}
					smooth={true}
					offset={
						link.href === "about"
							? 0
							: link.href === "home"
							? -200
							: 0
					}
					duration={0}
					delay={0}
					className={`relative capitalize text-lg font-medium px-3 cursor-pointer transition-all
      ${
			active === link.href
				? "text-[#e9bf02] font-extrabold underline underline-offset-[18px]"
				: "text-gray-300 hover:text-[#e9bf02] hover:underline hover:underline-offset-[18px]"
		}`}
					onSetActive={(to) => setActive(to)}
				>
					{link.name}
				</Link>
			))}

			<Link
				to="GetAQuote"
				smooth={true}
				offset={-80}
				duration={500}
				className="bg-[#0070eb] px-5 py-2 rounded-md text-white font-light text-[15px] hover:bg-[#e9bf02] hover:text-black cursor-pointer transition ml-6"
			>
				Book a Consultation
			</Link>
		</div>
	);
};

export default NavLinks;
