import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import TopBar from "./components/TopBar";
import BackToTop from "./components/BackToTop";
import Appointment from "./components/Appointment";

const App = () => {
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
