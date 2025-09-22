import { useState } from "react";
import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { Link } from "react-scroll";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { MdLocationOn, MdAccessTime } from "react-icons/md";

const navLinks = [
    { id: 1, name: "Home", href: "home" },
    { id: 2, name: "About Us", href: "about" },
    { id: 3, name: "Services", href: "services" },
    { id: 4, name: "Contact", href: "contact" },
];

const SidebarMenu = ({ menuNav, setMenuNav }) => {
    const [active, setActive] = useState("home");

    return (
        <motion.div
            initial={{ x: -300 }}
            animate={{ x: menuNav ? 0 : -300 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 h-full w-64 bg-[#171827] shadow-lg z-50 p-6 flex flex-col"
        >
            {/* Close button */}
            <div className="flex justify-end">
                <IoClose
                    size={28}
                    className="cursor-pointer text-white"
                    onClick={() => setMenuNav(false)}
                />
            </div>

            {/* Nav links */}
            <ul className="flex flex-col gap-8 my-10 text-white text-lg">
                {navLinks.map((link) => (
                    <Link
                        key={link.id}
                        to={link.href}
                        smooth={true}
                        duration={500}
                        offset={-80}
                        spy={true}
                        onSetActive={(to) => setActive(to)}
                        className={`cursor-pointer text-small hover:text-[#e9bf02] hover:underline hover:underline-offset-[20px] ${
                            active === link.href
                                ? "text-[#ffd000] font-bold underline underline-offset-[15px]"
                                : ""
                        }`}
                        onClick={() => setMenuNav(false)}
                    >
                        {link.name}
                    </Link>
                ))}
            </ul>

            {/* Get a Quote button */}
            <Link
                to="GetAQuote"
                smooth={true}
                offset={-80}
                duration={500}
                className="mt-6 bg-[#0C91D5] text-xs md:text-md text-white text-center py-3 hover:bg-white hover:text-black transition cursor-pointer"
                onClick={() => setMenuNav(false)}
            >
                Get a Quote
            </Link>

            {/* Footer */}
            <div className="mt-auto mb-8 gap-6 pt-6 border-t border-white/20 flex flex-col ">
                {/* Address & Opening Hours */}
                <div className="flex flex-col gap-2 text-white text-sm">
                    <div className="flex items-center gap-2">
                        <MdLocationOn className="text-base text-[#e9bf02]" />
                        <span>California, TX 70240E</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <MdAccessTime className="text-base text-[#e9bf02]" />
                        <span>Opening Hours: 10:00am - 07:00pm</span>
                    </div>
                </div>

                {/* Copyright */}
                <p className="text-white text-sm">
                    &copy; {new Date().getFullYear()} Insurance-Cove
                </p>

                {/* Social Icons */}
                <div className="flex gap-5 text-white text-lg">
                    <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaFacebookF className="hover:text-[#e9bf02]" />
                    </a>
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaInstagram className="hover:text-[#e9bf02]" />
                    </a>
                    <a
                        href="https://tiktok.com"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaTiktok className="hover:text-[#e9bf02]" />
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

export default SidebarMenu;
