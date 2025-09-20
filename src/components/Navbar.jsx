import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import logoLandScape from "../assets/logolandscape.png";
import { FaPhoneFlip } from "react-icons/fa6";
import { CgMenuRight } from "react-icons/cg";
import Sidebar from "./Sidebar";
import NavLinks from "./NavLinks";

const Navbar = () => {
    const [menuInfo, setMenuInfo] = useState(false);
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setShow(true);
            } else {
                setShow(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* Default Navbar (lagi visible) */}
            <div className="bg-custonDarkNavy drop-shadow-lg justify-between">
                <div className="max-w-6xl mx-auto flex items-center justify-between py-3 md:px-4 px-4">
                    {/* Logo */}
                    <div className="flex">
                        <img
                            src={logoLandScape}
                            alt="Logo"
                            className="h-[50px] md:h-[65px]"
                        />
                    </div>

                    {/* Right side nav */}
                    <NavLinks />

                    {/* Phone + Menu */}
                    <div className="flex flex-row items-center gap-5">
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

                        {/* Menu Icon */}
                        <div
                            className="text-2xl md:text-3xl cursor-pointer"
                            onClick={() => setMenuInfo(true)}
                        >
                            <CgMenuRight />
                        </div>
                    </div>
                </div>
            </div>

            {/* Extra Navbar (lalabas lang kapag nag scroll) */}
            {show && (
                <motion.div
                    initial={{ y: -80, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -80, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="fixed top-0 left-0 w-full bg-custonDarkNavy drop-shadow-lg z-50"
                >
                    <div className="max-w-6xl mx-auto flex items-center justify-between py-3 md:px-4 px-4">
                        {/* Logo */}
                        <div className="flex">
                            <img
                                src={logoLandScape}
                                alt="Logo"
                                className="h-[50px] md:h-[65px]"
                            />
                        </div>

                        {/* Right side nav */}
                        <NavLinks />

                        {/* Phone + Menu */}
                        <div className="flex flex-row items-center gap-5">
                            <div className="border border-[#2563eb] p-2 rounded-full cursor-pointer transition-colors duration-300 text-xs md:text-2xl">
                                <FaPhoneFlip
                                    color="#2563eb"
                                    className="hover:text-white"
                                />
                            </div>
                            <div className="flex flex-col text-xs md:text-sm">
                                <p className="">+92(003) 68-090</p>
                                <span className="text-white/40 font-light tracking-tight">
                                    Call to our Experts
                                </span>
                            </div>

                            {/* Menu Icon */}
                            <div
                                className="text-2xl md:text-3xl cursor-pointer"
                                onClick={() => setMenuInfo(true)}
                            >
                                <CgMenuRight />
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}

            {/* Sidebar */}
            <Sidebar menuInfo={menuInfo} setMenuInfo={setMenuInfo} />
        </>
    );
};

export default Navbar;
