import React from "react";
import { InlineWidget } from "react-calendly";

const App = () => {
    return (
        <div className="w-full min-h-screen bg-gray-50 text-gray-800">
            {/* Navbar */}
            <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
                <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                    <h1 className="text-xl font-bold text-blue-600">
                        Insurance Co.
                    </h1>
                    <ul className="flex space-x-6">
                        <li>
                            <a href="#home" className="hover:text-blue-600">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#about" className="hover:text-blue-600">
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="#appointment"
                                className="hover:text-blue-600"
                            >
                                Appointment
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>

            {/* Hero Section */}
            <section
                id="home"
                className="h-screen flex flex-col items-center justify-center text-center px-6"
            >
                <h2 className="text-4xl font-bold mb-4">
                    Secure Your Future with Confidence
                </h2>
                <p className="text-gray-600 max-w-xl mb-6">
                    Get personalized insurance consultation via Zoom. Book your
                    free appointment today and take the first step towards
                    financial security.
                </p>
                <a
                    href="#appointment"
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
                >
                    Book Appointment
                </a>
            </section>

            {/* About Section */}
            <section
                id="about"
                className="py-20 bg-white flex flex-col items-center text-center px-6"
            >
                <h3 className="text-3xl font-bold mb-4">About Us</h3>
                <p className="text-gray-600 max-w-2xl">
                    We provide tailored insurance solutions to meet your needs.
                    Whether it’s life, health, or business insurance, our
                    experts are here to guide you every step of the way.
                </p>
            </section>

            {/* Appointment Scheduler Section */}
            <section
                id="appointment"
                className="py-20 bg-gray-100 flex flex-col items-center px-6"
            >
                <h3 className="text-3xl font-bold mb-6 text-center">
                    Book Your Appointment
                </h3>
                <p className="text-gray-600 mb-8 text-center max-w-xl">
                    Choose a date and time that works best for you. A Zoom link
                    will be sent automatically after booking.
                </p>

                <div className="w-full max-w-4xl shadow-lg rounded-xl overflow-hidden">
                    <InlineWidget
                        url="https://calendly.com/dev-escario/30min"
                        styles={{
                            height: "700px",
                            borderRadius: "12px",
                        }}
                        pageSettings={{
                            backgroundColor: "#ffffff",
                            primaryColor: "#2563eb", // Tailwind blue-600
                            textColor: "#1f2937", // Tailwind gray-800
                            hideEventTypeDetails: false,
                            hideLandingPageDetails: false,
                        }}
                    />
                </div>
            </section>

            {/* Footer */}
            <footer className="py-6 bg-white text-center text-gray-500">
                © {new Date().getFullYear()} Insurance Co. All rights reserved.
            </footer>
        </div>
    );
};

export default App;
