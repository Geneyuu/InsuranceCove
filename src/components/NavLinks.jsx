import { Link, animateScroll as scroll } from "react-scroll";
import { useEffect, useState } from "react";

const navLinks = [
    { id: 1, name: "Home", href: "home" },
    { id: 2, name: "About Us", href: "about" },
    { id: 3, name: "Services", href: "services" },
    { id: 4, name: "Contact", href: "contact" },
];

const NavLinks = () => {
    const [active, setActive] = useState("home");

    // Set Home active sa page load
    useEffect(() => {
        if (window.scrollY === 0) {
            setActive("home");
        }
    }, []);

    return (
        <div className="hidden custom:flex items-center gap-5 text-white bg-customNavy mx-auto rounded-md border border-white/5">
            {navLinks.map((link) => (
                <Link
                    key={link.id}
                    to={link.href}
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={0}
                    delay={0}
                    className={`capitalize text-md font-medium px-4 cursor-pointer transition ${
                        active === link.href
                            ? "text-[#FCD213]"
                            : "text-gray-300 hover:text-[#FCD213]"
                    }`}
                    activeClass="text-yellow-500"
                    onSetActive={(to) => setActive(to)} // update active habang nag-scroll
                >
                    {link.name}
                </Link>
            ))}

            {/* CTA button */}
            <Link
                to="GetAQuote"
                smooth={true}
                offset={-80}
                duration={500}
                className="bg-[#FCD213] px-5 py-3 rounded-r-md text-customNavy font-light tracking-tighter text-[15px] hover:bg-blue-600 hover:text-white cursor-pointer transition"
            >
                Get a Quote
            </Link>
        </div>
    );
};

export default NavLinks;
