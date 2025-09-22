import { useEffect } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import TopBar from "./components/TopBar";
import BackToTop from "./components/BackToTop";
import Appointment from "./components/Appointment";

const App = () => {
    useEffect(() => {
        (function () {
            var Tawk_API = Tawk_API || {};
            Tawk_API.onLoad = function () {
                // I-adjust position (e.g., 80px from bottom)
                Tawk_API.customStyle = {
                    zIndex: 999999,
                    bottom: "100px",
                    right: "50px",
                };
            };

            var s1 = document.createElement("script"),
                s0 = document.getElementsByTagName("script")[0];
            s1.async = true;
            s1.src = "https://embed.tawk.to/68c7edece72aad1923de0611/1j56fip4d";
            s1.charset = "UTF-8";
            s1.setAttribute("crossorigin", "*");
            s0.parentNode.insertBefore(s1, s0);
        })();
    }, []);

    return (
        <div className="bg-[#171827] min-h-screen text-white">
            <div className="hidden md:block">
                <TopBar />
            </div>
            <div className="border-b-[2px] border-yellow-300">
                <Navbar />
            </div>

            <section id="home">
                <Hero />
            </section>
            <section
                id="about"
                className="h-screen flex items-center justify-center"
            >
                <h1>About Section</h1>
            </section>
            <section
                id="services"
                className="h-screen flex items-center justify-center bg-red-200"
            >
                <h1>Services Section</h1>
            </section>
            <section
                id="contact"
                className="h-screen flex items-center justify-center"
            >
                <h1>Contact Section</h1>
            </section>

            {/* Back to top button */}
            <BackToTop />
            <Appointment />
        </div>
    );
};

export default App;
