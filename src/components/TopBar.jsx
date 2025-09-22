import { MdEmail, MdPhone } from "react-icons/md";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { motion } from "framer-motion";

const TopBar = () => {
    return (
        // Motion container
        <motion.div
            className="bg-[#eec306] border-b-[0.5px] border-white/5 text-gray-800 "
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className="hidden max-w-6xl mx-auto md:flex items-center justify-between py-2 md:px-12 lg:px-12 xl:px-4 px-4">
                {/* Left side - Email & Phone */}
                <div className="flex flex-col items-start gap-2 md:flex-row md:items-center md:gap-8">
                    <div className="flex items-center gap-2">
                        <MdEmail className="text-small" color="#1f2937" />
                        <span className="text-small font-light">
                            info@insurancecove.com
                        </span>
                    </div>
                </div>

                {/* Right side - Links & Socials */}
                <div className="flex flex-col items-center gap-2 md:flex-row md:items-center md:gap-8">
                    {/* Links */}
                    <div className="flex flex-row sm:flex-row gap-2 sm:gap-3">
                        <a
                            href="#faq"
                            className="text-small hover:text-[#1f2937] transition"
                        >
                            FAQ
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
