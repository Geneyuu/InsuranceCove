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
        <div className="hidden custom:flex items-center gap-1 text-white mx-auto rounded-lg border border-white/20">
            {navLinks.map((link) => (
                <Link
                    key={link.id}
                    to={link.href}
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={0}
                    delay={0}
                    className={`relative capitalize text-md font-medium px-4 cursor-pointer transition-all
                        ${
                            active === link.href
                                ? "text-[#ffd000] font-extrabold underline underline-offset-[18px]"
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
                className="bg-[#0C91D5] px-5 py-3 rounded-r-md text-white font-light text-[15px] hover:bg-white hover:text-black cursor-pointer transition"
            >
                Book a Call
            </Link>
        </div>
    );
};

export default NavLinks;
