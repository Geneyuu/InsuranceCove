import React from "react";
import { InlineWidget } from "react-calendly";
import { FaFacebookF, FaTiktok, FaInstagram } from "react-icons/fa";
import image from "../assets/image-about-overlay-2.png";

const Appointment = () => {
	return (
		<section
			id="GetAQuote"
			className="w-full min-h-screen bg-[#1c1d2e] flex items-center justify-center"
		>
			<div className="w-full max-w-7xl  my-50 mx-auto flex flex-col md:flex-row shadow-xl">
				{/* Left: Image with overlay and text */}
				<div className="relative w-full md:w-1/2 h-[400px] md:h-auto">
					<img
						src={image}
						alt="Appointment"
						className="w-full h-full object-contain"
					/>
					{/* Dark overlay */}
					<div className="absolute inset-0 bg-[#171827ec] z-10" />

					{/* Text overlay */}
					<div className="absolute inset-0 z-20 flex flex-col justify-center items-start px-6 sm:px-10 py-10">
						<h2 className="text-[#ffd000] text-sm font-semibold tracking-wide uppercase mb-2">
							Book a Call
						</h2>
						<h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-snug mb-4 max-w-md">
							Schedule Your Free Consultation
						</h1>
						<p className="text-gray-300 text-sm sm:text-base max-w-md">
							Choose a time that works best for you. Our team is
							ready to help you find the right coverage and answer
							any questions you may have.
						</p>
					</div>
				</div>

				{/* Right: Calendly + Social */}
				<div className="w-full md:w-1/2 bg-[#171827] p-6 sm:p-10 flex flex-col justify-between">
					{/* Calendly Widget */}
					<div className="rounded-xl overflow-hidden border border-gray-700 shadow-lg">
						<InlineWidget
							url="https://calendly.com/dev-escario/test-calendly"
							styles={{
								height: "600px",
								border: "none",
							}}
							pageSettings={{
								backgroundColor: "#ffffff",
								primaryColor: "#2563eb",
								textColor: "#1f2937",
								hideEventTypeDetails: false,
								hideLandingPageDetails: false,
							}}
						/>
					</div>

					{/* Email + Socials */}
					<div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm text-gray-400">
						<p>
							Email us at:{" "}
							<a
								href="mailto:info@example.com"
								className="text-blue-400 hover:underline"
							>
								info@example.com
							</a>
						</p>
						<div className="flex gap-4 text-white text-lg">
							<a
								href="https://facebook.com"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FaFacebookF className="hover:text-[#4267B2]" />
							</a>
							<a
								href="https://tiktok.com"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FaTiktok className="hover:text-[#000000]" />
							</a>
							<a
								href="https://instagram.com"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FaInstagram className="hover:text-[#E1306C]" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Appointment;
