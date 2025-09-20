import { motion } from "framer-motion";
import logo from "../assets/LOGO 2.png";
import { FaPhoneFlip } from "react-icons/fa6";
import { CgMenuRight } from "react-icons/cg";
import { useState } from "react";
import Sidebar from "./Sidebar";

const navLinks = [
    { id: 1, name: "Home", href: "#home" },
    { id: 2, name: "About Us", href: "#about" },
    { id: 3, name: "Services", href: "#about" },
    { id: 4, name: "Contact", href: "#contact" },
];

const Navbar = () => {
    const [menuInfo, setMenuInfo] = useState(false);

    return (
        <>
            {/* Navbar */}
            <div className="bg-custonDarkNavy drop-shadow-lg justify-between">
                <div className="max-w-6xl mx-auto flex items-center justify-between py-2 md:px-4 px-4">
                    {/* Logo */}
                    <div className="flex flex-1">
                        <img src={logo} alt="Logo" className="h-[65px]" />
                    </div>

                    {/* Right side (links) - hidden kapag <860px */}
                    <div className="hidden custom:flex items-center gap-8 mr-4 text-white bg-customNavy pl-6 rounded-md border border-white/5">
                        {navLinks.map((link) => (
                            <a
                                key={link.id}
                                href={link.href}
                                className="hover:text-[#015FC9] transition capitalize text-gray-300 text-md font-medium"
                            >
                                {link.name}
                            </a>
                        ))}

                        {/* Motion button */}
                        <motion.a
                            href="#GetAQuote"
                            className="bg-yellow-500 px-5 py-3 rounded-r-md text-customNavy font-light tracking-tighter ml-2 text-[15px] hover:bg-blue-600 hover:text-white "
                            whileHover={{ scale: 1.05 }}
                            transition={{
                                type: "spring",
                                stiffness: 500,
                            }}
                        >
                            Get a Quote
                        </motion.a>
                    </div>

                    {/* Phone + Menu */}
                    <div className="flex flex-row items-center gap-3">
                        <div className="border border-[#2563eb] p-2 rounded-full cursor-pointer transition-colors duration-300 text-xs md:text-2xl">
                            <FaPhoneFlip
                                color="#2563eb"
                                className="hover:text-white"
                            />
                        </div>
                        <div className="flex flex-col text-xs md:text-sm">
                            <p>+92(003) 68-090</p>
                            <span className="text-white/40 font-light tracking-tight">
                                Call to our Experts
                            </span>
                        </div>

                        {/* Menu Icon - visible lang kapag <860px */}
                        <div
                            className="text-2xl md:text-3xl cursor-pointer"
                            onClick={() => setMenuInfo(true)}
                        >
                            <CgMenuRight />
                        </div>
                    </div>
                </div>
            </div>

            {/* Sidebar Component */}
            <Sidebar menuInfo={menuInfo} setMenuInfo={setMenuInfo} />
        </>
    );
};

export default Navbar;
