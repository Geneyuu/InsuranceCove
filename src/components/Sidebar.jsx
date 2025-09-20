import { IoClose } from "react-icons/io5";
import { LuArrowUpRight } from "react-icons/lu";
import {
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
    FaBehance,
} from "react-icons/fa";
import logo from "../assets/LOGO 2.png";

const Sidebar = ({ menuInfo, setMenuInfo }) => {
    return (
        <>
            {/* Overlay */}
            {menuInfo && (
                <div
                    className="fixed inset-0 bg-yellow-500/10 z-40"
                    onClick={() => setMenuInfo(false)}
                ></div>
            )}

            {/* Sidebar */}
            <div
                className={`fixed top-0 right-0 h-full w-[350px] md:w-[480px] bg-custonDarkNavy shadow-lg z-50 transform transition-transform duration-300 
                ${menuInfo ? "translate-x-0" : "translate-x-full"}`}
            >
                {/* Top Logo & Close */}
                <div className="flex items-center justify-between bg-yellow-500/90 px-6 py-4">
                    <img src={logo} alt="Logo" className="h-20 md:h-[86px]" />
                    <IoClose
                        className="text-4xl md:text-3xl cursor-pointer text-white"
                        onClick={() => setMenuInfo(false)}
                    />
                </div>

                {/* Content */}
                <div className="p-4 ml-6 md:p-6 text-gray-300 space-y-10 md:space-y-20">
                    {/* About */}
                    <p className="leading-relaxed mt-8 md:mt-12">
                        Arrived compass prepare an on as. Reasonable particular
                        on my it in sympathize. Size now easy eat hand how.
                        Unwilling he departure elsewhere dejection at. Heart
                        large seems may purse means few blind.
                    </p>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <div>
                            <h3 className="font-semibold text-white">
                                ADDRESS
                            </h3>
                            <p>California, TX 70240</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white">EMAIL</h3>
                            <p>support@validtheme.com</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white">
                                CONTACT
                            </h3>
                            <p>+44-20-7328-4499</p>
                        </div>
                    </div>

                    {/* Subscribe */}
                    <div className="space-y-3">
                        <h3 className="text-white md:text-xl">
                            Get Subscribed!
                        </h3>
                        <div className="flex">
                            <input
                                type="email"
                                placeholder="Enter your e-mail"
                                className="flex-1 px-4 py-2 md:py-4 outline-none bg-transparent border border-white/30"
                            />
                            <button className="px-4 bg-blue-500 hover:bg-blue-500/90 text-white flex items-center justify-center">
                                <LuArrowUpRight className="text-xl" />
                            </button>
                        </div>
                    </div>

                    {/* Socials */}
                    <div className="flex space-x-4 pt-2">
                        <a
                            href="#"
                            className="p-2 rounded-full border border-gray-600 hover:bg-gray-700"
                        >
                            <FaFacebookF />
                        </a>
                        <a
                            href="#"
                            className="p-2 rounded-full border border-gray-600 hover:bg-gray-700"
                        >
                            <FaTwitter />
                        </a>
                        <a
                            href="#"
                            className="p-2 rounded-full border border-gray-600 hover:bg-gray-700"
                        >
                            <FaLinkedinIn />
                        </a>
                        <a
                            href="#"
                            className="p-2 rounded-full border border-gray-600 hover:bg-gray-700"
                        >
                            <FaBehance />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
