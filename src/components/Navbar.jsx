// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import logoLandScape from "../assets/logolandscape.png";
// import { FaPhoneFlip } from "react-icons/fa6";
// import { CgMenuRight } from "react-icons/cg";
// import Sidebar from "./Sidebar";
// import NavLinks from "./NavLinks";

// const Navbar = () => {
//     const [menuInfo, setMenuInfo] = useState(false);
//     const [show, setShow] = useState(false);

//     useEffect(() => {
//         const handleScroll = () => {
//             if (window.scrollY > 50) {
//                 setShow(true);
//             } else {
//                 setShow(false);
//             }
//         };
//         window.addEventListener("scroll", handleScroll);
//         return () => window.removeEventListener("scroll", handleScroll);
//     }, []);

//     return (
//         <>
//             {/* Default Navbar (lagi visible) */}
//             <div className="bg-custonDarkNavy drop-shadow-lg justify-between">
//                 <div className=" mx-auto flex items-center justify-between py-3 md:px-4 px-4">
//                     {/* Logo */}
//                     <div className="flex">
//                         <img
//                             src={logoLandScape}
//                             alt="Logo"
//                             className="h-[50px] md:h-[65px]"
//                         />
//                     </div>

//                     {/* Right side nav */}
//                     <NavLinks />

//                     {/* Phone + Menu */}
//                     <div className="flex flex-row items-center gap-5">
//                         <div className="border border-[#2563eb] p-2 rounded-full cursor-pointer transition-colors duration-300 text-xs md:text-2xl">
//                             <FaPhoneFlip
//                                 color="#2563eb"
//                                 className="hover:text-white"
//                             />
//                         </div>
//                         <div className="flex flex-col text-xs md:text-sm">
//                             <p>+92(003) 68-090</p>
//                             <span className="text-white/40 font-light tracking-tight">
//                                 Call to our Experts
//                             </span>
//                         </div>

//                         {/* Menu Icon */}
//                         <div
//                             className="text-2xl md:text-3xl cursor-pointer"
//                             onClick={() => setMenuInfo(true)}
//                         >
//                             <CgMenuRight />
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Extra Navbar (lalabas lang kapag nag scroll) */}
//             {show && (
//                 <motion.div
//                     initial={{ y: -80, opacity: 0 }}
//                     animate={{ y: 0, opacity: 1 }}
//                     exit={{ y: -80, opacity: 0 }}
//                     transition={{ duration: 0.4 }}
//                     className="fixed top-0 left-0 w-full bg-custonDarkNavy drop-shadow-lg z-50"
//                 >
//                     <div className="max-w-6xl mx-auto flex items-center justify-between py-3 md:px-4 px-4">
//                         {/* Logo */}
//                         <div className="flex">
//                             <img
//                                 src={logoLandScape}
//                                 alt="Logo"
//                                 className="h-[50px] md:h-[65px]"
//                             />
//                         </div>

//                         {/* Right side nav */}
//                         <NavLinks />

//                         {/* Phone + Menu */}
//                         <div className="flex flex-row items-center gap-5">
//                             <div className="border border-[#2563eb] p-2 rounded-full cursor-pointer transition-colors duration-300 text-xs md:text-2xl">
//                                 <FaPhoneFlip
//                                     color="#2563eb"
//                                     className="hover:text-white"
//                                 />
//                             </div>
//                             <div className="flex flex-col text-xs md:text-sm">
//                                 <p className="">+92(003) 68-090</p>
//                                 <span className="text-white/40 font-light tracking-tight">
//                                     Call to our Experts
//                                 </span>
//                             </div>

//                             {/* Menu Icon */}
//                             <div
//                                 className="text-2xl md:text-3xl cursor-pointer"
//                                 onClick={() => setMenuInfo(true)}
//                             >
//                                 <CgMenuRight />
//                             </div>
//                         </div>
//                     </div>
//                 </motion.div>
//             )}

//             {/* Sidebar */}
//             <Sidebar menuInfo={menuInfo} setMenuInfo={setMenuInfo} />
//         </>
//     );
// };

// export default Navbar;

import React, { useEffect, useState } from "react";
import logoLandScape from "../assets/logo-final.png";
import { Link } from "react-scroll";

const Navbar = () => {
    // Navigation links (ilagay dito yung mga sections mo)
    const navLinks = [
        { id: 1, name: "Home", href: "home" },
        { id: 2, name: "About", href: "about" },
        { id: 3, name: "Services", href: "services" },
        { id: 4, name: "Contact", href: "contact" },
    ];

    const [active, setActive] = useState(""); // para sa current active section

    return (
        <div className="bg-[#171827] flex w-full">
            {/* Left Logo */}
            <div className="py-8">
                <img
                    src={logoLandScape}
                    alt="Logo"
                    className="h-[65px] md:h-[70px] pl-5"
                />
            </div>

            {/* Right Side */}
            <div className="flex flex-col flex-1 clip-slant">
                {/* Top White Background */}
                <div className="flex-1 bg-white flex items-center justify-center">
                    <p className="text-gray-600">hello</p>
                </div>

                {/* Bottom Yellow Background */}
                <div className="flex pl-28 bg-[#F5A526] py-8 gap-5 text-lg font-extrabold tracking-tighter">
                    {navLinks.map((link) => (
                        <Link
                            key={link.id}
                            to={link.href}
                            spy={true}
                            smooth={true}
                            offset={-50}
                            duration={500}
                            className={` ${
                                active === link.href
                                    ? "text-[#171827] font-bold"
                                    : "text-white hover:text-[#FCD213]"
                            }`}
                            activeClass="text-[#171827]"
                            onSetActive={(to) => setActive(to)} // update kapag nag-scroll
                        >
                            {link.name}
                        </Link>
                    ))}

                   https://pixydrops.com/insur-html/main-html/index9-one-page.html#item3
                </div>
            </div>
        </div>
    );
};

export default Navbar;
