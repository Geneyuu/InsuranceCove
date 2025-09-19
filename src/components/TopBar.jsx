import { MdEmail, MdPhone } from "react-icons/md";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { motion } from "framer-motion";

const TopBar = () => {
    return (
        // Motion container
        <motion.div
            className="bg-customNavy text-white"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className="max-w-5xl mx-auto flex items-center justify-between py-2 px-4 lg:px-0">
                {/* Left side - Email & Phone */}
                <div className="flex flex-col items-start gap-2 md:flex-row md:items-center md:gap-8">
                    <div className="flex items-center gap-2">
                        <MdEmail className="text-small" color="#015FC9" />
                        <span className="text-small font-medium">
                            info@insurancecove.com
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <MdPhone className="text-small" color="#015FC9" />
                        <span className="text-small font-medium">
                            +63 912 345 6789
                        </span>
                    </div>
                </div>

                {/* Right side - Links & Socials */}
                <div className="flex flex-col items-center gap-2 md:flex-row md:items-center md:gap-8">
                    {/* Links */}
                    <div className="flex flex-row sm:flex-row gap-2 sm:gap-3">
                        <a
                            href="#faq"
                            className="text-small hover:text-[#015FC9] transition"
                        >
                            FAQ
                        </a>
                        <a
                            href="#about"
                            className="text-small hover:text-[#015FC9] transition"
                        >
                            About
                        </a>
                    </div>

                    {/* Socials */}
                    <div className="flex gap-4 mt-2 sm:mt-0">
                        <a href="#" className="hover:text-blue-600 transition">
                            <FaFacebookF className="text-small" />
                        </a>
                        <a href="#" className="hover:text-pink-500 transition">
                            <FaInstagram className="text-small" />
                        </a>
                        <a href="#" className="hover:text-black transition">
                            <FaTiktok className="text-small" />
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default TopBar;
