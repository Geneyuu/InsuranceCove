import React from "react";
import { InlineWidget } from "react-calendly";

const Appointment = () => {
	return (
		<div className="w-full min-h-screen bg-gray-50 flex items-center justify-center px-6">
			<div className="w-full max-w-4xl shadow-lg rounded-xl overflow-hidden">
				<InlineWidget
					url="https://calendly.com/dev-escario/test-calendly"
					styles={{
						height: "700px",
						borderRadius: "12px",
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
		</div>
	);
};

export default Appointment;
