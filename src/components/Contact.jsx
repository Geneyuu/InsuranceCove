import { useRef } from "react";
import emailjs from "@emailjs/browser";
import contactImage from "../assets/contact-image.png";

const Contact = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_03il6aj",
				"template_r6zpg16",
				form.current,
				"-e_2_nUHKZrkuM6ME"
			)
			.then(
				(result) => {
					console.log(result.text);
					alert(
						"Email sent successfully! We'll get back to you soon."
					);
					form.current.reset();
				},
				(error) => {
					console.log(error.text);
					alert("An error occurred. Please try again.");
				}
			);
	};

	return (
		<div className="flex flex-col items-center md:flex-row z-50">
			{/* Image Section */}
			<div className="relative  hidden md:flex md:h-screen w-full md:w-1/2">
				<img
					src={contactImage}
					alt=""
					className="absolute w-[50%] md:w-[100%] lg:w-[80%] -bottom-[10rem] opacity-50 md:opacity-100 z-0 md:bottom-4 left-1/2 md:left-[10%] lg:left-[22%] transform -translate-x-1/2 md:translate-x-0"
				/>
			</div>

			{/* Form Section */}
			<div className="flex my-16 md:my-64 w-full md:w-1/2 z-20">
				<div className="flex flex-col gap-6 w-full px-6 md:px-8">
					<div className="flex flex-col gap-3">
						<p className="text-md text-left md:text-left font-bold text-[#ffd000]">
							GET A FREE ESTIMATE
						</p>
						<h1 className="text-3xl text-left md:text-left md:text-5xl font-semibold md:w-[75%] lg:w-[65%] mx-auto md:mx-0">
							Get an insurance quote to get started!
						</h1>
					</div>

					<form
						ref={form}
						onSubmit={sendEmail}
						className="flex flex-col gap-6 w-full max-w-lg mt-6 mx-auto md:mx-0"
					>
						<input
							type="text"
							name="full_name"
							placeholder="Full name"
							required
							className="bg-[#171827] border border-blue-700 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
						/>

						<input
							type="email"
							name="email"
							placeholder="Email"
							required
							className="bg-[#171827] border border-blue-700 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
						/>

						<select
							name="insurance_type"
							required
							className="appearance-none cursor-pointer bg-blue-800 border border-blue-700 rounded-md w-[60%] md:w-1/2 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
						>
							<option value="">Select Insurance Type</option>
							<option value="Auto Insurance">
								Auto Insurance
							</option>
							<option value="Home Insurance">
								Home Insurance
							</option>
							<option value="Life Insurance">
								Life Insurance
							</option>
							<option value="Health Insurance">
								Health Insurance
							</option>
							<option value="Business Insurance">
								Business Insurance
							</option>
						</select>

						<button
							type="submit"
							className="bg-blue-600 mt-5 hover:bg-blue-700 text-white font-semibold py-3 w-fit p-5 rounded-md transition-colors duration-300"
						>
							Get a Quote Now
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;
