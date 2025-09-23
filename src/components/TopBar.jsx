import {
	FaFacebookF,
	FaTwitter,
	FaYoutube,
	FaLinkedinIn,
} from "react-icons/fa";
import { MdLocationOn, MdAccessTime, MdEmail } from "react-icons/md";
import { motion } from "framer-motion";
import { FaInstagram, FaTiktok } from "react-icons/fa6";

const TopBar = () => {
	return (
		<motion.div
			className="bg-[#0C4F90] text-white text-sm"
			initial={{ y: -50, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.8, ease: "easeOut" }}
		>
			<div className="flex w-full">
				{/* Left Side  */}
				<div className="w-[70%] xl:w-[45%] flex items-center gap-6 px-6 py-2 text-gray-100">
					<div className="flex items-center gap-2">
						<MdLocationOn className="text-base" />
						<span>California, TX 70240E</span>
					</div>
					<div className="flex items-center gap-2">
						<MdAccessTime className="text-base" />
						<span>Opening Hours: 10:00am - 07:00pm</span>
					</div>
				</div>

				{/* Right Side */}
				<div className="w-[30%] md:w-[60%] lg:w-[60%] xl:w-[90%] bg-[#ffd000] flex items-center justify-end gap-6 px-6 py-4 clip-slant text-[#171827] text-md">
					{/* Email */}
					<div className="flex items-center gap-2">
						<MdEmail className="text-lg" />
						<a
							href="mailto:info@example.com"
							className="hover:underline"
						>
							info@example.com
						</a>
					</div>

					{/* Social Icons */}
					<div className="flex items-center gap-5">
						<a href="#" className="hover:text-blue-500">
							<FaFacebookF />
						</a>
						<a href="#" className="hover:text-black">
							<FaTiktok />
						</a>
						<a href="#" className="hover:text-red-600">
							<FaInstagram />
						</a>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default TopBar;
